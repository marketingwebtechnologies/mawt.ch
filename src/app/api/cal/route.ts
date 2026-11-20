import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { dateHeureSuisse, sendInternalMail, sendProspectMail } from "@/lib/mail";
import { SLUGS_APPEL, SAUT_MAX_SECONDES, delaiRappelSecondes, estFausseAdresseCal, formaterCreneau, ligneRdv, lireReservation, resumeFiche, verifierSignatureCal } from "@/lib/cal/pur";
import type { FicheLead } from "@/lib/cal/pur";
import { backupLead } from "@/lib/lead-backup";
import { mailConfirmation, messageWhatsAppAndrew } from "@/lib/cal/textes";
import { annulerRdv, enregistrerRdv, lireLead, magasinCalDisponible } from "@/lib/cal/magasin";
import { planifier, qstashDisponible } from "@/lib/whatsapp/qstash";

// Cal.com booking webhook (Andrew, 03.11.2026: the free Cal plan cannot customise its e-mails).
// On a new or rescheduled discovery call: confirmation e-mail to the prospect in Andrew's name,
// ready-to-send WhatsApp message to Andrew, and a QStash job for the day-before reminder.
// Env: CAL_WEBHOOK_SECRET (same secret as in Cal > Settings > Developer > Webhooks),
// CAL_MAILS_MODE = "on" (default) | "andrew" (only Andrew is e-mailed) | "off".

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ANDREW = process.env.WHATSAPP_ALERT_TO || "aa@mawt.ch";
const urlRappel = () => `${(process.env.WHATSAPP_PUBLIC_URL || "https://mawt.ch").replace(/\/+$/, "")}/api/cal/rappel`;

export async function POST(req: NextRequest) {
  const corpsBrut = await req.text();
  if (!verifierSignatureCal(corpsBrut, req.headers.get("x-cal-signature-256"), process.env.CAL_WEBHOOK_SECRET || "")) {
    logger.warn("Cal webhook: signature invalide");
    return new Response("Forbidden", { status: 403 });
  }
  let corps: unknown;
  try { corps = JSON.parse(corpsBrut); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }

  const r = lireReservation(corps);
  const mode = process.env.CAL_MAILS_MODE || "on";
  if (mode === "off") return NextResponse.json({ ok: true, ignore: "mode off" });

  try {
    if (r.evenement === "annulee") {
      if (magasinCalDisponible()) await annulerRdv(r.uid);
      return NextResponse.json({ ok: true });
    }
    if ((r.evenement !== "creee" && r.evenement !== "replanifiee") || !SLUGS_APPEL.includes(r.slug) || !r.uid || !r.debut) {
      return NextResponse.json({ ok: true, ignore: "hors appels découverte" });
    }

    if (magasinCalDisponible()) {
      if (r.ancienUid) await annulerRdv(r.ancienUid);
      await enregistrerRdv(r);
    }

    // 0. Match the booking to the landing form and put it on the leads sheet (20.11.2026).
    let fiche: FicheLead | null = null;
    try { fiche = await lireLead(r.telephone, r.email); } catch (err) { logger.warn("Cal webhook: fiche lead illisible", { error: String(err) }); }
    const ligne = ligneRdv(r, fiche);
    const feuille = (await backupLead(ligne)) ? "ajouté à la feuille des leads" : "NON ajouté à la feuille des leads";

    // 1. Confirmation to the prospect (text 1). Never to the made-up address of a phone booking.
    let confirmation = "non envoyée (mode andrew)";
    if (mode === "on" && estFausseAdresseCal(r.email)) {
      confirmation = "non envoyée (rendez-vous par téléphone, adresse fictive de Cal)";
    } else if (mode === "on" && r.email.includes("@")) {
      const m = mailConfirmation(r);
      confirmation = (await sendProspectMail(r.email, m.sujet, m.texte, m.html)) ? "envoyée" : "ÉCHEC d'envoi";
    }

    // 2. Day-before reminder (text 3), through QStash, in hops of at most 6 days.
    let rappel = "pas de rappel (appel dans moins de 26 h)";
    const delai = delaiRappelSecondes(r.debut, Date.now());
    if (delai !== null && qstashDisponible() && magasinCalDisponible()) {
      await planifier(urlRappel(), { uid: r.uid }, Math.min(delai, SAUT_MAX_SECONDES), `cal-rappel-${r.uid}-0`);
      rappel = "programmé 24 h avant";
    } else if (delai !== null) {
      rappel = "NON programmé (QStash ou Upstash absent)";
    }

    // 3. Andrew's same-day message (text 2), ready to send.
    const { jour, heure } = formaterCreneau(r.debut);
    const wa = messageWhatsAppAndrew(r);
    const contacts = [ligne.email, r.telephone].filter(Boolean).join(", ");
    const qui = `${r.nom || ligne.email || r.telephone}${contacts ? ` (${contacts})` : ""}`;
    const formulaire = fiche ? resumeFiche(fiche.details) : ["Formulaire d'origine non retrouvé (réservation directe sur Cal)."];
    const origine = fiche?.utm ? (/utm_content=([^&]+)/.exec(fiche.utm)?.[1] || "") : "";
    if (origine) formulaire.push(`Pub d'origine : ${origine}`);
    const quand = `Appel : ${jour} à ${heure} (${r.slug === "appel-telephone" ? "téléphone" : "visio ou téléphone"})`;
    const echap = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    // 04.11 : bouton dans la version HTML, jamais le lien wa.me brut (il ressemblait à un virus)
    const recu = `Réservé le ${dateHeureSuisse(new Date())}`;
    const html = [
      `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#111">`,
      `<p style="margin:0 0 12px;color:#666;font-size:13px">${echap(recu)}</p>`,
      `<p style="margin:0 0 4px"><b>${echap(qui)}</b></p>`,
      `<p style="margin:0 0 16px">${echap(quand)}</p>`,
      `<p style="margin:0 0 16px">${formulaire.map(echap).join("<br>")}</p>`,
      `<p style="margin:0 0 6px">Envoie-lui ce message aujourd'hui sur WhatsApp :</p>`,
      `<p style="margin:0 0 16px;padding:10px 12px;background:#f3f4f2;border-radius:8px">${echap(wa.texte)}</p>`,
      wa.lien
        ? `<p style="margin:0 0 20px"><a href="${echap(wa.lien)}" style="display:inline-block;padding:10px 18px;background:#25D366;color:#fff;text-decoration:none;border-radius:8px;font-weight:bold">Ouvrir WhatsApp avec le message</a></p>`
        : `<p style="margin:0 0 20px">Pas de numéro exploitable pour WhatsApp : envoie-le par e-mail.</p>`,
      `<p style="margin:0;color:#666;font-size:13px">E-mail de confirmation au prospect : ${echap(confirmation)}<br>Rappel de la veille : ${echap(rappel)}<br>Suivi : ${echap(feuille)}</p>`,
      `</div>`,
    ].join("");
    void sendInternalMail(
      `[Cal] ${r.evenement === "replanifiee" ? "Rendez-vous décalé" : "Nouveau rendez-vous"} : ${r.nom || ligne.email || r.telephone}, ${jour} ${heure}`,
      [
        recu,
        "",
        qui,
        quand,
        ...formulaire,
        "",
        "Envoie-lui ce message aujourd'hui, depuis ton appli WhatsApp :",
        wa.texte,
        "",
        wa.lien ? "Le bouton « Ouvrir WhatsApp » est dans la version HTML de cet e-mail." : "Pas de numéro exploitable pour WhatsApp : envoie-le par e-mail.",
        "",
        `E-mail de confirmation au prospect : ${confirmation}`,
        `Rappel de la veille : ${rappel}`,
        `Suivi : ${feuille}`,
      ].join("\n"),
      ANDREW,
      html,
    );
    logger.info("Cal webhook: rendez-vous traité", { evenement: r.evenement, slug: r.slug, confirmation, rappel });
  } catch (err) {
    logger.error("Cal webhook: réservation non traitée", err);
  }
  return NextResponse.json({ ok: true });
}

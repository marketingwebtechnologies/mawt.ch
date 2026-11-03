import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { secureEqual } from "@/lib/secure-compare";
import { sendInternalMail } from "@/lib/mail";
import { verifierSignatureMeta, extraireEvenements, delaiReponseSecondes, masquerNumero } from "@/lib/whatsapp/pur";
import { ajouterMessage, lireConversation, magasinDisponible, premiereFois, reserverPlanification } from "@/lib/whatsapp/magasin";
import { planifier, qstashDisponible } from "@/lib/whatsapp/qstash";

// Meta webhook of the WhatsApp "double" (see mawt-microtest docs/briefs/whatsapp-double-ia.md).
// GET  = subscription handshake (hub.verify_token must equal WHATSAPP_VERIFY_TOKEN).
// POST = messages and echoes. The raw body is verified against the app secret before anything
// else; every message is stored; a delayed callback (/api/whatsapp/repondre) is scheduled
// through QStash so the double answers after the courtesy delay unless Andrew answered first.
// Always answers 200 quickly: Meta retries and then disables webhooks that fail.

// Alerts and journal of the double go to Andrew (WHATSAPP_ALERT_TO, default aa@mawt.ch), not to the team mailbox.
const ALERTE_A = process.env.WHATSAPP_ALERT_TO || "aa@mawt.ch";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function urlPublique(): string {
  return (process.env.WHATSAPP_PUBLIC_URL || "https://mawt.ch").replace(/\/+$/, "");
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const attendu = process.env.WHATSAPP_VERIFY_TOKEN || "";
  const recu = q.get("hub.verify_token") || "";
  if (q.get("hub.mode") === "subscribe" && attendu && secureEqual(recu, attendu)) {
    return new Response(q.get("hub.challenge") || "", { status: 200, headers: { "Content-Type": "text/plain" } });
  }
  return new Response("Forbidden", { status: 403 });
}

export async function POST(req: NextRequest) {
  const corpsBrut = await req.text();
  const secret = process.env.WHATSAPP_APP_SECRET || "";
  if (!verifierSignatureMeta(corpsBrut, req.headers.get("x-hub-signature-256"), secret)) {
    logger.warn("WhatsApp webhook: signature invalide");
    return new Response("Forbidden", { status: 403 });
  }
  let charge: unknown;
  try { charge = JSON.parse(corpsBrut); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }

  const evenements = extraireEvenements(charge);
  if (!magasinDisponible()) {
    logger.warn("WhatsApp webhook: magasin Upstash absent, événements ignorés", { n: evenements.length });
    return NextResponse.json({ ok: true });
  }

  for (const ev of evenements) {
    try {
      if (ev.type === "echo") {
        if (!(await premiereFois(ev.id))) continue;
        await ajouterMessage(ev.vers, { de: "andrew", texte: ev.texte, ts: ev.ts || Date.now(), id: ev.id });
        logger.info("WhatsApp: réponse d'Andrew enregistrée", { vers: masquerNumero(ev.vers) });
        continue;
      }
      if (ev.type !== "entrant") continue;
      if (!(await premiereFois(ev.id))) continue;

      const avant = await lireConversation(ev.de);
      const premierMessage = avant.messages.length === 0;
      await ajouterMessage(ev.de, { de: "contact", texte: ev.texte, ts: ev.ts || Date.now(), id: ev.id });
      logger.info("WhatsApp: message entrant enregistré", { de: masquerNumero(ev.de), premier: premierMessage });

      if (premierMessage) {
        void sendInternalMail(`[WhatsApp] Nouveau contact ${ev.nom || masquerNumero(ev.de)}`, [`Numéro : +${ev.de}`, `Nom WhatsApp : ${ev.nom || "(inconnu)"}`, "", "Premier message :", ev.texte, "",
           `Mode du double : ${process.env.WHATSAPP_DOUBLE_MODE || "off"}`].join("\n"), ALERTE_A);
      }

      const mode = process.env.WHATSAPP_DOUBLE_MODE || "off";
      if (mode === "off" || !qstashDisponible()) continue;
      const delai = delaiReponseSecondes(avant.reponsesDouble, 0);
      const idJob = `${ev.de}-${ev.id}`;
      if (!(await reserverPlanification(ev.de, idJob, delai + 120))) continue; // a job is already pending
      await planifier(`${urlPublique()}/api/whatsapp/repondre`, { numero: ev.de, idJob, idMessage: ev.id, nom: ev.nom }, delai, idJob);
    } catch (err) {
      logger.error("WhatsApp webhook: événement non traité", err);
    }
  }
  return NextResponse.json({ ok: true });
}

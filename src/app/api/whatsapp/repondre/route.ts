import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { sendInternalMail } from "@/lib/mail";
import { andrewALaMain, delaiReponseSecondes, masquerNumero } from "@/lib/whatsapp/pur";
import { ajouterMessage, jobPlanifie, libererPlanification, lireConversation } from "@/lib/whatsapp/magasin";
import { verifierSignatureQstash } from "@/lib/whatsapp/qstash";
import { envoyerTexte, marquerLuEtEcrire } from "@/lib/whatsapp/cloud";
import { genererReponse } from "@/lib/whatsapp/double";

// Delayed callback (QStash) of the WhatsApp double: called `delai` seconds after a customer
// message. Silent if Andrew answered in the meantime, if the conversation changed since the job
// was scheduled, or if the double already reached its message cap. Otherwise it drafts a reply:
// mode "suggestion" e-mails it to Andrew, mode "auto" shows "typing" and sends it.

// Alerts and journal of the double go to Andrew (WHATSAPP_ALERT_TO, default aa@mawt.ch), not to the team mailbox.
const ALERTE_A = process.env.WHATSAPP_ALERT_TO || "aa@mawt.ch";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const PLAFOND_REPONSES = 10;

export async function POST(req: NextRequest) {
  const corpsBrut = await req.text();
  const url = `${(process.env.WHATSAPP_PUBLIC_URL || "https://mawt.ch").replace(/\/+$/, "")}/api/whatsapp/repondre`;
  if (!(await verifierSignatureQstash(req.headers.get("upstash-signature"), corpsBrut, url))) {
    logger.warn("WhatsApp répondre: signature QStash invalide");
    return new Response("Forbidden", { status: 403 });
  }
  let job: { numero?: string; idJob?: string; idMessage?: string; nom?: string } = {};
  try { job = JSON.parse(corpsBrut); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  const numero = String(job.numero || "").replace(/\D/g, "");
  if (!numero) return NextResponse.json({ ok: false }, { status: 400 });

  const mode = process.env.WHATSAPP_DOUBLE_MODE || "off";
  const attendu = await jobPlanifie(numero);
  if (attendu && attendu !== job.idJob) {
    // A newer message rescheduled the conversation: this job is stale.
    return NextResponse.json({ ok: true, ignore: "remplace" });
  }
  await libererPlanification(numero);
  if (mode === "off") return NextResponse.json({ ok: true, ignore: "mode off" });

  const conv = await lireConversation(numero);
  const maintenant = Date.now();
  const dernier = conv.messages[conv.messages.length - 1];
  if (!dernier || dernier.de !== "contact") return NextResponse.json({ ok: true, ignore: "dernier message pas du contact" });
  if (andrewALaMain(conv.dernierAndrew, maintenant)) return NextResponse.json({ ok: true, ignore: "Andrew a la main" });
  if (conv.reponsesDouble >= PLAFOND_REPONSES) {
    void sendInternalMail(`[WhatsApp] Plafond atteint ${masquerNumero(numero)}`, `Le double a envoyé ${PLAFOND_REPONSES} messages sans réponse humaine. Il se tait. Numéro : +${numero}`, ALERTE_A);
    return NextResponse.json({ ok: true, ignore: "plafond" });
  }

  const proposition = await genererReponse(conv.messages, job.nom || "");
  if (proposition.passerLaMain) {
    void sendInternalMail(`[WhatsApp] À reprendre : ${job.nom || masquerNumero(numero)}`, [`Numéro : +${numero}`, `Raison : ${proposition.raison}`, "", "Derniers messages :", ...conv.messages.slice(-6).map((m) => `${m.de} : ${m.texte}`)].join("\n"), ALERTE_A);
    return NextResponse.json({ ok: true, ignore: "main passée" });
  }

  if (mode === "suggestion") {
    void sendInternalMail(`[WhatsApp] Proposition pour ${job.nom || masquerNumero(numero)}`, [`Numéro : +${numero}`, "", "Conversation :", ...conv.messages.slice(-8).map((m) => `${m.de} : ${m.texte}`), "", "Réponse proposée (à envoyer depuis ton appli) :", proposition.texte].join("\n"), ALERTE_A);
    return NextResponse.json({ ok: true, mode: "suggestion" });
  }

  // mode auto: the first reply waits 30 s before this callback (already elapsed); later replies
  // add typing time proportional to the length, shown with the typing indicator.
  const frappe = conv.reponsesDouble > 0 ? delaiReponseSecondes(conv.reponsesDouble, proposition.texte.length) : 0;
  await marquerLuEtEcrire(dernier.id || job.idMessage || "");
  if (frappe > 0) await new Promise((r) => setTimeout(r, Math.min(frappe, 25) * 1000));
  const id = await envoyerTexte(numero, proposition.texte);
  await ajouterMessage(numero, { de: "double", texte: proposition.texte, ts: Date.now(), id });
  if (proposition.rendezVousPropose) {
    void sendInternalMail(`[WhatsApp] Créneau proposé à ${job.nom || masquerNumero(numero)}`, [`Numéro : +${numero}`, "", ...conv.messages.slice(-6).map((m) => `${m.de} : ${m.texte}`), `double : ${proposition.texte}`].join("\n"), ALERTE_A);
  }
  return NextResponse.json({ ok: true, mode: "auto" });
}

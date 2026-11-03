import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";
import { sendProspectMail } from "@/lib/mail";
import { SAUT_MAX_SECONDES, delaiRappelSecondes } from "@/lib/cal/pur";
import { mailRappelVeille } from "@/lib/cal/textes";
import { lireRdv } from "@/lib/cal/magasin";
import { planifier, verifierSignatureQstash } from "@/lib/whatsapp/qstash";

// Delayed callback (QStash) for the day-before reminder of a Cal discovery call. Silent if the
// booking was cancelled or rescheduled; if the call is still more than ~1 h past the 24 h mark,
// it schedules the next hop instead (QStash delays are capped at a few days).

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const urlRappel = () => `${(process.env.WHATSAPP_PUBLIC_URL || "https://mawt.ch").replace(/\/+$/, "")}/api/cal/rappel`;

export async function POST(req: NextRequest) {
  const corpsBrut = await req.text();
  if (!(await verifierSignatureQstash(req.headers.get("upstash-signature"), corpsBrut, urlRappel()))) {
    logger.warn("Cal rappel: signature QStash invalide");
    return new Response("Forbidden", { status: 403 });
  }
  let job: { uid?: string; saut?: number } = {};
  try { job = JSON.parse(corpsBrut); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  const uid = String(job.uid || "");
  if (!uid) return NextResponse.json({ ok: false }, { status: 400 });

  const r = await lireRdv(uid);
  if (!r) return NextResponse.json({ ok: true, ignore: "annulé ou décalé" });
  if ((process.env.CAL_MAILS_MODE || "on") !== "on") return NextResponse.json({ ok: true, ignore: "mode" });

  const reste = delaiRappelSecondes(r.debut, Date.now());
  if (reste !== null && reste > 3600) {
    const saut = Number(job.saut || 0) + 1;
    await planifier(urlRappel(), { uid, saut }, Math.min(reste, SAUT_MAX_SECONDES), `cal-rappel-${uid}-${saut}`);
    return NextResponse.json({ ok: true, saut });
  }
  if (new Date(r.debut).getTime() < Date.now()) return NextResponse.json({ ok: true, ignore: "passé" });

  const m = mailRappelVeille(r);
  const ok = await sendProspectMail(r.email, m.sujet, m.texte, m.html);
  logger.info("Cal rappel: e-mail de la veille", { ok });
  return NextResponse.json({ ok });
}

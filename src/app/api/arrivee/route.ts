import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { backupLead } from "@/lib/lead-backup";

// Arrival signal of the ad landing pages (owner request 2026-11-04): a paid
// visitor (Meta, Google, ChatGPT) lands, the page sends its Clarity user and
// session ids, and a row "arrivee" goes to the "Leads site" sheet. The local
// pilot dashboard polls the sheet, raises a desktop notification and links the
// Clarity player of that exact session, where "GO LIVE" follows the visitor.
const CLARITY_PROJET = "ynxcutb3fv";
const ROBOTS = /bot|crawl|spider|slurp|headless|lighthouse|facebookexternalhit|meta-externalagent|preview|python|curl|wget/i;

const schema = z.object({
  page: z.enum(["500-chf", "500-chf-en", "questions-ia", "agence-ia", "formation-ia", "logiciel-sur-mesure", "qa-tests-logiciels", "cours-ia", "guide-ia"]),
  utm: z.string().trim().max(600).optional().default(""),
  ref: z.string().trim().max(200).optional().default(""),
  clarity_u: z.string().trim().regex(/^[a-z0-9]{0,16}$/).optional().default(""),
  clarity_s: z.string().trim().regex(/^[a-z0-9]{0,16}$/).optional().default(""),
  trace: z.string().trim().regex(/^[a-z0-9]{0,24}$/).optional().default(""),
});

export async function POST(request: NextRequest) {
  if (ROBOTS.test(request.headers.get("user-agent") || "")) return NextResponse.json({ ok: true });
  let body: unknown;
  try {
    body = JSON.parse(await request.text());
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });

  const limiter = await rateLimit("arrivee", 120, 60 * 60);
  if (!limiter.success) return NextResponse.json({ ok: false }, { status: 429 });

  const d = parsed.data;
  const lien = d.clarity_u && d.clarity_s
    ? `https://clarity.microsoft.com/player/${CLARITY_PROJET}/${d.clarity_u}/${d.clarity_s}`
    : "";
  await backupLead({
    page: d.page,
    qualification: "arrivee",
    name: "",
    email: "",
    phone: "",
    details: lien ? `Clarity : ${lien}` : "Clarity : identifiant de session absent",
    utm: d.utm,
    origin: d.ref,
    trace: d.trace,
  });
  return NextResponse.json({ ok: true });
}

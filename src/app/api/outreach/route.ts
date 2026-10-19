import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { backupLead } from "@/lib/lead-backup";

// Browser-side events of the outreach video pages (/soumissions, /saisie,
// /recrutement, see outreach-page.ts): a real visit,
// video progress, sound turned on, a slot picked and a booking made. Each one
// is stored in the "Leads site" sheet with the e-mail token, so the CRM knows
// who clicked, watched and booked. An empty token (page opened without one) is
// still recorded, to measure visits that come from a forwarded link.
const schema = z.object({
  jeton: z.string().trim().regex(/^([a-z0-9]{4,16})?$/),
  metier: z.enum(["btp", "fid", "rh"]).optional(),
  variante: z.enum(["a", "b", "c"]),
  evenement: z.enum([
    "visite",
    "son",
    "revoir",
    "video-25",
    "video-50",
    "video-fin",
    "cal-creneau",
    "rdv",
    "depart",
    "desinscription",
  ]),
  detail: z.string().trim().max(200).optional().default(""),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = JSON.parse(await request.text());
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });

  const limiter = await rateLimit("outreach", 60, 60 * 60);
  if (!limiter.success) return NextResponse.json({ ok: false }, { status: 429 });

  const d = parsed.data;
  await backupLead({
    // The opt-out page (/stop) sends no trade: the token alone identifies the contact.
    page: d.metier ? `outreach-${d.metier}` : "outreach",
    qualification: d.evenement,
    name: "",
    email: "",
    phone: "",
    details: d.detail,
    utm: `jeton=${d.jeton || "aucun"}&v=${d.variante}`,
  });
  return NextResponse.json({ ok: true });
}

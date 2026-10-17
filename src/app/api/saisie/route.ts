import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { backupLead } from "@/lib/lead-backup";

// Field-entry capture for the landing pages (owner decision 2026-10-17): when
// a visitor leaves the e-mail or phone field, the typed value is stored in the
// "Leads site" sheet, flagged as not submitted, to tell real entries from fake ones.
const schema = z.object({
  page: z.enum(["500-chf", "500-chf-en", "questions-ia"]),
  champ: z.enum(["email", "phone"]),
  domaine: z.string().trim().toLowerCase().max(80).optional().default(""),
  valeur: z.string().trim().max(200).optional().default(""),
  format_ok: z.boolean(),
  profil: z.string().trim().max(20).optional().default(""),
  utm: z.string().trim().max(600).optional().default(""),
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

  const limiter = await rateLimit("saisie", 20, 60 * 60);
  if (!limiter.success) return NextResponse.json({ ok: false }, { status: 429 });

  const d = parsed.data;
  await backupLead({
    page: d.page,
    qualification: "saisie-non-envoyee",
    name: "",
    email: d.champ === "email" ? d.valeur : "",
    phone: d.champ === "phone" ? d.valeur : "",
    details: `Champ ${d.champ} rempli puis quitté, formulaire pas (encore) envoyé. Format ${d.format_ok ? "valide" : "invalide"}. Profil : ${d.profil || "?"}.`,
    utm: d.utm,
  });
  return NextResponse.json({ ok: true });
}

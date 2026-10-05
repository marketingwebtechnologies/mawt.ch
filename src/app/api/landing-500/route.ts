import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSanityWriteClient } from "@/lib/sanity.write-client";
import { sendLeadNotification } from "@/lib/mail";
import { rateLimit } from "@/lib/rate-limit";
import { trackConversion } from "@/lib/analytics";
import { logger } from "@/lib/logger";
import { redactEmail } from "@/lib/text-sanitize";

// Lead endpoint for the "500 CHF" landing page (/fr/500-chf). Mirrors the
// submitContactForm pipeline (honeypot, rate limit, Sanity, notification,
// conversion tracking) but with the landing's own fields: phone is the point
// of the page, and pain/origin carry the CTA attribution to the sales call.
const landingSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .refine(
      (v) => {
        // Swiss formats only: +41 79 123 45 67 or 079 123 45 67 (any spacing).
        const n = v.replace(/[\s.\-()]/g, "");
        return /^\+41[1-9]\d{8}$/.test(n) || /^0[1-9]\d{8}$/.test(n);
      },
      { message: "Numéro de téléphone invalide." },
    ),
  email: z.string().trim().email().toLowerCase(),
  // Company size, asked on the landing so the notification says whether the
  // lead is a small-business owner or an employee of a large company.
  team: z.enum(["1-4", "5-20", "21-50", "50+"]).optional(),
  // Self-declared role. Only "dirigeant" and "direction" are qualified: the
  // landing fires the pixel Lead event for those two alone.
  role: z
    .enum(["dirigeant", "direction", "salarie", "independant", "autre"])
    .optional(),
  pain: z.string().trim().max(100).optional().default(""),
  pain_detail: z.string().trim().max(200).optional().default(""),
  origin: z.string().trim().max(50).optional().default(""),
});

const GENERIC_ERROR =
  "L'envoi a échoué. Réessayez, ou appelez-nous directement.";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  // Honeypot: same non-autofillable field name as the site contact form.
  const honeypot = body["mawt_hp"];
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    logger.warn("Landing-500 honeypot triggered — submission dropped");
    return NextResponse.json({ success: true });
  }

  // Same budget as the contact form: 5 submissions per hour per IP.
  const limiter = await rateLimit("landing-500", 5, 60 * 60);
  if (!limiter.success) {
    return NextResponse.json(
      { error: "Vous avez déjà envoyé plusieurs demandes. Réessayez dans une heure." },
      { status: 429 },
    );
  }

  const validated = landingSchema.safeParse(body);
  if (!validated.success) {
    return NextResponse.json(
      { error: "Vérifiez les champs du formulaire." },
      { status: 400 },
    );
  }

  const { name, phone, email, team, role, pain, pain_detail, origin } =
    validated.data;
  const ROLE_LABELS: Record<string, string> = {
    dirigeant: "dirige l'entreprise",
    direction: "membre de la direction",
    salarie: "salarié(e)",
    independant: "indépendant(e) sans équipe",
    autre: "autre situation",
  };
  // Leads sent before the role field existed stay qualified by default.
  const qualified = !role || role === "dirigeant" || role === "direction";
  const message = [
    `Téléphone : ${phone}`,
    role ? `Rôle déclaré : ${ROLE_LABELS[role]}` : null,
    team ? `Taille de l'entreprise : ${team} personnes` : null,
    pain ? `Douleur choisie : ${pain}` : null,
    pain_detail ? `Précision : ${pain_detail}` : null,
    origin ? `Origine du CTA : ${origin}` : null,
    "",
    qualified
      ? "Lead landing 500 CHF — à rappeler sous 24 h ouvrées."
      : "NON QUALIFIÉ d'après le rôle déclaré — aucun rappel promis à cette personne.",
  ]
    .filter((l): l is string => l !== null)
    .join("\n");

  const lead = {
    name,
    email,
    service: qualified ? "Landing 500 CHF" : "Landing 500 CHF (non qualifié)",
    timeline: origin || "landing",
    message,
  };

  try {
    const client = getSanityWriteClient();
    if (client) {
      await client.create({ _type: "contactLead", ...lead, status: "new" });
    } else if (process.env.NODE_ENV === "production") {
      logger.error("Landing-500 submission with no Sanity write client in production");
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
    } else {
      console.log("Mocking landing-500 lead creation:", lead);
    }

    await sendLeadNotification(lead);
    if (qualified) {
      await trackConversion({
        type: "lead",
        email,
        metadata: { service: "landing-500", origin, pain, team, role },
      });
    }
    logger.info("Landing-500 lead captured", { email: redactEmail(email), origin });

    return NextResponse.json({ success: true });
  } catch (err) {
    logger.error("Landing-500 submission error", err, { email: redactEmail(email) });
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}

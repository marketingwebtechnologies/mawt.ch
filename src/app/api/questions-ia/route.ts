import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSanityWriteClient } from "@/lib/sanity.write-client";
import { sendLeadNotification } from "@/lib/mail";
import { rateLimit } from "@/lib/rate-limit";
import { trackConversion } from "@/lib/analytics";
import { logger } from "@/lib/logger";
import { redactEmail } from "@/lib/text-sanitize";

// Lead endpoint for the "Session IA" landing (/fr/questions-ia). Same pipeline
// as /api/landing-500 (honeypot, rate limit, Sanity, notification) with the
// questionnaire's own fields. Two branches share the form: "entreprise"
// (decision maker, routed to the process diagnostic) and "formation"
// (individual who wants to learn, routed to the training offer). The page
// decides the qualification client-side and the server recomputes it, so a
// tampered payload cannot promote itself.
const FREE_MAIL =
  /@(gmail|googlemail|hotmail|outlook|live|msn|yahoo|icloud|me|mac|bluewin|gmx|protonmail|proton|sunrise|hispeed|aol|free|orange|wanadoo|laposte)\./i;

const sessionSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().toLowerCase(),
  phone: z
    .string()
    .trim()
    .refine(
      (v) => {
        const n = v.replace(/[\s.\-()]/g, "");
        return /^\+41[1-9]\d{8}$/.test(n) || /^0[1-9]\d{8}$/.test(n);
      },
      { message: "Numéro de téléphone invalide." },
    ),
  profil: z.enum(["entreprise", "formation"]),
  // entreprise branch
  taille: z.enum(["1-4", "5-20", "21-50", "50+"]).optional(),
  secteur: z.string().trim().max(40).optional().default(""),
  delai: z.enum(["ce-mois", "3-mois", "renseigne"]).optional(),
  // formation branch
  situation: z.string().trim().max(40).optional().default(""),
  stade: z.string().trim().max(40).optional().default(""),
  objectif: z.string().trim().max(40).optional().default(""),
  investir: z.enum(["oui", "oui-questions", "savoir-plus", "non"]).optional(),
  budget: z.string().trim().max(20).optional().default(""),
  // common
  blocages: z.string().trim().max(200).optional().default(""),
  engagement: z.enum(["oui", "non"]),
  origin: z.string().trim().max(50).optional().default(""),
  utm: z.string().trim().max(600).optional().default(""),
});

const GENERIC_ERROR =
  "L'envoi a échoué. Réessayez, ou écrivez-nous directement.";

type Qualification = "entreprise" | "formation" | "non";

function qualify(d: z.infer<typeof sessionSchema>): Qualification {
  if (d.engagement === "non") return "non";
  if (d.profil === "entreprise") {
    // A personal mailbox on the company branch is accepted by the schema but
    // never counts as a qualified lead: the landing refuses it client-side.
    return FREE_MAIL.test(d.email) ? "non" : "entreprise";
  }
  const wants = d.investir === "oui" || d.investir === "oui-questions";
  const budget = d.budget !== "" && d.budget !== "<500";
  return wants && budget ? "formation" : "non";
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  const honeypot = body["mawt_hp"];
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    logger.warn("Session-IA honeypot triggered — submission dropped");
    return NextResponse.json({ success: true });
  }

  const limiter = await rateLimit("questions-ia", 5, 60 * 60);
  if (!limiter.success) {
    return NextResponse.json(
      { error: "Vous avez déjà envoyé plusieurs demandes. Réessayez dans une heure." },
      { status: 429 },
    );
  }

  const validated = sessionSchema.safeParse(body);
  if (!validated.success) {
    return NextResponse.json(
      { error: "Vérifiez les champs du formulaire." },
      { status: 400 },
    );
  }

  const d = validated.data;
  const qualification = qualify(d);
  const SERVICE: Record<Qualification, string> = {
    entreprise: "Session IA (entreprise)",
    formation: "Session IA (formation)",
    non: "Session IA (non qualifié)",
  };
  const lines =
    d.profil === "entreprise"
      ? [
          `Taille : ${d.taille ?? "?"}`,
          `Secteur : ${d.secteur || "?"}`,
          `Délai d'action : ${d.delai ?? "?"}`,
        ]
      : [
          `Situation : ${d.situation || "?"}`,
          `Stade : ${d.stade || "?"}`,
          `Objectif : ${d.objectif || "?"}`,
          `Prêt à investir : ${d.investir ?? "?"}`,
          `Budget : ${d.budget || "?"}`,
        ];
  const message = [
    `Téléphone : ${d.phone}`,
    `Profil : ${d.profil}`,
    ...lines,
    `Blocages : ${d.blocages || "-"}`,
    "",
    `Engagement de présence : ${d.engagement}`,
    d.origin ? `Origine : ${d.origin}` : null,
    d.utm ? `Pub : ${d.utm}` : null,
    "",
    qualification === "non"
      ? "NON QUALIFIÉ — pas de créneau proposé, ressource par e-mail."
      : "Créneau proposé sur Cal (rdv-mawt/appel) — rappel la veille.",
  ]
    .filter((l): l is string => l !== null)
    .join("\n");

  const lead = {
    name: d.name,
    email: d.email,
    service: SERVICE[qualification],
    timeline: d.profil === "entreprise" ? d.delai ?? "questions-ia" : "formation",
    message,
  };

  try {
    const client = getSanityWriteClient();
    if (client) {
      await client.create({ _type: "contactLead", ...lead, status: "new" });
    } else if (process.env.NODE_ENV === "production") {
      logger.error("Session-IA submission with no Sanity write client in production");
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
    } else {
      console.log("Mocking questions-ia lead creation:", lead);
    }

    await sendLeadNotification(lead);
    if (qualification !== "non") {
      await trackConversion({
        type: "lead",
        email: d.email,
        metadata: { service: "questions-ia", profil: d.profil, qualification, origin: d.origin, utm: d.utm },
      });
    }
    logger.info("Session-IA lead captured", { email: redactEmail(d.email), profil: d.profil, qualification });

    return NextResponse.json({ success: true, qualification });
  } catch (err) {
    logger.error("Session-IA submission error", err, { email: redactEmail(d.email) });
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}

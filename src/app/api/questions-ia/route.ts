import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSanityWriteClient } from "@/lib/sanity.write-client";
import { sendLeadNotification } from "@/lib/mail";
import { claimOnce, rateLimit } from "@/lib/rate-limit";
import { trackConversion } from "@/lib/analytics";
import { logger } from "@/lib/logger";
import { redactEmail } from "@/lib/text-sanitize";
import { capiContextFromRequest, fbclidFromUtm, sendMetaCapiEvent } from "@/lib/meta-capi";
import { backupLead } from "@/lib/lead-backup";

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
  // Never blocking (2026-10-17): any text, even empty; the phone is what matters.
  email: z.string().trim().toLowerCase().max(200).optional().default(""),
  // Anything the visitor typed is accepted (owner decision 2026-10-17); an
  // unrecognised format is flagged in the lead, never refused.
  phone: z.string().trim().min(1).max(40),
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
  // Id the page also passes to fbq() so Meta deduplicates browser and server copies.
  event_id: z.string().trim().max(64).optional().default(""),
});

// Recognised phone formats (Swiss and international); used only to flag a lead.
function phoneLooksValid(v: string): boolean {
  const n = v.replace(/[\s.\-()]/g, "").replace(/^0041/, "+41").replace(/^00/, "+").replace(/^\+410/, "+41");
  return /^\+41[1-9]\d{8}$/.test(n) || /^0[1-9]\d{8}$/.test(n) || /^\+[1-9]\d{7,14}$/.test(n);
}

const GENERIC_ERROR =
  "L'envoi a échoué. Réessayez, ou écrivez-nous directement.";

type Qualification = "entreprise" | "formation" | "non";

function qualify(d: z.infer<typeof sessionSchema>): Qualification {
  if (d.engagement === "non") return "non";
  if (d.profil === "entreprise") {
    // Any mailbox is accepted (2026-10-16): small-business owners often use
    // bluewin or gmail. A personal address is flagged in the lead, never blocked.
    return "entreprise";
  }
  // Budget is no longer asked on the page (2026-10-16, shorter form); when an
  // old client still sends it, "<500" disqualifies.
  const wants = d.investir === "oui" || d.investir === "oui-questions";
  const budgetOk = d.budget === "" || d.budget !== "<500";
  return wants && budgetOk ? "formation" : "non";
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
  // Same event_id within the hour = the same form sent again (double tap, retry after
  // a timeout): one lead, one e-mail, one pixel event. The client sees a success.
  if (d.event_id && !(await claimOnce(`lead:questions-ia:${d.event_id}`, 60 * 60))) {
    logger.warn("Session-IA duplicate submission ignored", { event_id: d.event_id });
    return NextResponse.json({ success: true });
  }
  const qualification = qualify(d);
  const SERVICE: Record<Qualification, string> = {
    entreprise: "Session IA (entreprise)",
    formation: "Session IA (formation)",
    non: "Session IA (non qualifié)",
  };
  // Only the questions the page still asks (taille, investir) always appear;
  // fields removed from the form on 2026-10-16 show only when an old client sends them.
  const optional = (label: string, v: string | undefined) => (v ? `${label} : ${v}` : null);
  const lines =
    d.profil === "entreprise"
      ? [
          `Taille : ${d.taille ?? "?"}`,
          optional("Secteur", d.secteur),
          optional("Délai d'action", d.delai),
        ]
      : [
          `Prêt à investir : ${d.investir ?? "?"}`,
          optional("Situation", d.situation),
          optional("Stade", d.stade),
          optional("Objectif", d.objectif),
          optional("Budget", d.budget),
        ];
  const message = [
    `Téléphone : ${d.phone}`,
    phoneLooksValid(d.phone) ? null : "Téléphone : format non reconnu, à vérifier avant d'appeler",
    `Profil : ${d.profil}`,
    ...lines,
    optional("Blocages", d.blocages),
    "",
    FREE_MAIL.test(d.email) ? "E-mail : adresse personnelle (pas un domaine d'entreprise)" : null,
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

  // Independent copy first: whatever fails below, the person is on the sheet.
  await backupLead({
    page: "questions-ia",
    qualification,
    name: d.name,
    email: d.email,
    phone: d.phone,
    details: message,
    utm: d.utm,
    origin: d.origin,
    event_id: d.event_id,
  });

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
    // Server copy of the pixel event (same name and event_id as the browser one).
    const CAPI_EVENT = { entreprise: "Lead", formation: "LeadFormation", non: "LeadNonQualifie" } as const;
    await sendMetaCapiEvent({
      eventName: CAPI_EVENT[qualification],
      eventId: d.event_id || undefined,
      email: d.email,
      phone: d.phone,
      fbclid: fbclidFromUtm(d.utm),
      customData:
        qualification === "non"
          ? { profil: d.profil, utm: d.utm }
          : { content_name: `session-ia-${qualification}`, utm: d.utm },
      ...capiContextFromRequest(request),
    });
    logger.info("Session-IA lead captured", { email: redactEmail(d.email), profil: d.profil, qualification });

    return NextResponse.json({ success: true, qualification });
  } catch (err) {
    logger.error("Session-IA submission error", err, { email: redactEmail(d.email) });
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}

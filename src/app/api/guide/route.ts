import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSanityWriteClient } from "@/lib/sanity.write-client";
import { sendGuideEmail, sendLeadNotification } from "@/lib/mail";
import { claimOnce, rateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";
import { redactEmail } from "@/lib/text-sanitize";
import { backupLead } from "@/lib/lead-backup";

// Download endpoint for the free PDF guides (/fr/guide-ia). Same safety net as the other landings
// (honeypot, rate limit, dedupe, backup sheet, Sanity, notification) plus the guide sent by e-mail.
// No Meta Conversions API "Lead": a download is not a call lead and must not train the call campaign.
const GUIDES = {
  "a1-concurrents": "12 tâches que vos concurrents ne font déjà plus à la main",
  "a2-un-pourcent": "Vous utilisez l'IA à 1 %. Voici les 99 % restants",
  "b1-ce-qui-disparait": "Ce que l'IA va remplacer dans votre métier, et comment prendre les devants",
  "b2-trois-choses": "Si vous ne faites pas ces 3 choses, l'IA vous remplacera vraiment",
  "c1-personne-ne-dit": "Ce que personne ne vous dit sur l'IA en entreprise",
  "c2-ce-qui-marche": "L'IA en PME : ce qui marche vraiment, et ce qui ne sert à rien",
  "d1-chatgpt-travaille": "Passer de ChatGPT à l'IA qui travaille pour vous",
  "d2-par-ou-commencer": "Par où commencer avec l'IA dans votre PME",
} as const;

const guideSchema = z.object({
  guide: z.enum(Object.keys(GUIDES) as [keyof typeof GUIDES, ...(keyof typeof GUIDES)[]]),
  // Optional since 2026-11-03: the page asks for the e-mail only (prénom + consent text cost the downloads).
  prenom: z.string().trim().max(60).optional().default(""),
  email: z.string().trim().toLowerCase().email().max(200),
  utm: z.string().trim().max(600).optional().default(""),
  event_id: z.string().trim().max(64).optional().default(""),
});

const GENERIC_ERROR = "L'envoi a échoué. Réessayez dans un instant.";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  const honeypot = body["mawt_hp"];
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    logger.warn("Guide honeypot triggered — submission dropped");
    return NextResponse.json({ success: true });
  }

  const limiter = await rateLimit("guide", 5, 60 * 60);
  if (!limiter.success) {
    return NextResponse.json({ error: "Trop de demandes. Réessayez dans une heure." }, { status: 429 });
  }

  const validated = guideSchema.safeParse(body);
  if (!validated.success) {
    return NextResponse.json({ error: "Vérifiez votre e-mail." }, { status: 400 });
  }

  const { guide, email, utm, event_id } = validated.data;
  // Without a first name, the lead is listed under the mailbox name (what the routine and the sheet show).
  const prenom = validated.data.prenom || email.split("@")[0];
  if (event_id && !(await claimOnce(`lead:guide:${event_id}`, 60 * 60))) {
    logger.warn("Guide duplicate submission ignored", { event_id });
    return NextResponse.json({ success: true });
  }

  const title = GUIDES[guide];
  const url = `https://mawt.ch/guide-ia/pdf/${guide}.pdf`;
  const message = [
    `Guide téléchargé : ${title} (${guide})`,
    utm ? `Pub d'origine : ${utm}` : null,
    "",
    "Téléchargement de guide, pas une demande d'appel. Relances : J2, J5, J8 (proposition d'appel), J14.",
  ]
    .filter((l): l is string => l !== null)
    .join("\n");

  await backupLead({
    page: "guide-ia",
    qualification: "guide",
    name: prenom,
    email,
    phone: "",
    details: message,
    utm,
    origin: guide,
    event_id,
  });

  const lead = { name: prenom, email, service: "Guide PDF", timeline: guide, message };
  try {
    const client = getSanityWriteClient();
    if (client) {
      await client.create({ _type: "contactLead", ...lead, status: "new" });
    } else if (process.env.NODE_ENV !== "production") {
      console.log("Mocking guide lead creation:", lead);
    } else {
      logger.error("Guide submission with no Sanity write client in production");
    }
  } catch (err) {
    // The sheet and the e-mails below still carry the request: never block the download.
    logger.error("Guide Sanity write failed", err, { email: redactEmail(email) });
  }

  await sendGuideEmail({ firstName: validated.data.prenom, email }, { title, url });
  await sendLeadNotification(lead);
  logger.info("Guide downloaded", { guide, email: redactEmail(email), utm });
  return NextResponse.json({ success: true });
}

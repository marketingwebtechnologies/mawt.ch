import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSanityWriteClient } from "@/lib/sanity.write-client";
import { sendLeadNotification } from "@/lib/mail";
import { claimOnce, rateLimit } from "@/lib/rate-limit";
import { trackConversion } from "@/lib/analytics";
import { logger } from "@/lib/logger";
import { redactEmail } from "@/lib/text-sanitize";
import { backupLead } from "@/lib/lead-backup";

// Lead endpoint for the Google Ads landings (/fr/agence-ia, /fr/logiciel-sur-mesure, /fr/formation-ia, /fr/qa-tests-logiciels).
// Same pipeline as /api/landing-500 (honeypot, rate limit, backup sheet, Sanity,
// notification) but no Meta Conversions API event: this traffic comes from
// Google search and must not train the Meta campaign.
const PAGES = ["agence-ia", "logiciel-sur-mesure", "formation-ia", "qa-tests-logiciels"] as const;

const landingSchema = z.object({
  page: z.enum(PAGES),
  name: z.string().trim().min(2).max(100),
  // Anything typed is accepted, as on the 500-chf landing; a bad format is flagged, never refused.
  phone: z.string().trim().min(1).max(40),
  email: z.string().trim().toLowerCase().max(200).optional().default(""),
  team: z.preprocess((v) => (v === "" ? undefined : v), z.enum(["1-4", "5-20", "21-50", "50+"]).optional()),
  role: z.preprocess(
    (v) => (v === "" ? undefined : v),
    z.enum(["dirigeant", "direction", "salarie", "independant", "autre"]).optional(),
  ),
  pain: z.string().trim().max(100).optional().default(""),
  pain_detail: z.string().trim().max(200).optional().default(""),
  origin: z.string().trim().max(50).optional().default(""),
  utm: z.string().trim().max(600).optional().default(""),
  event_id: z.string().trim().max(64).optional().default(""),
});

function phoneLooksValid(v: string): boolean {
  const n = v.replace(/[\s.\-()]/g, "").replace(/^0041/, "+41").replace(/^00/, "+").replace(/^\+410/, "+41");
  return /^\+41[1-9]\d{8}$/.test(n) || /^0[1-9]\d{8}$/.test(n) || /^\+[1-9]\d{7,14}$/.test(n);
}

const PAGE_LABELS: Record<(typeof PAGES)[number], string> = {
  "agence-ia": "Google Ads agence IA",
  "logiciel-sur-mesure": "Google Ads logiciel sur mesure",
  "formation-ia": "Google Ads formation IA",
  "qa-tests-logiciels": "Google Ads QA externalisée",
};

const ROLE_LABELS: Record<string, string> = {
  dirigeant: "dirige l'entreprise",
  direction: "membre de la direction",
  salarie: "salarié(e)",
  independant: "indépendant(e) sans équipe",
  autre: "autre situation",
};

// The answer to "De quoi avez-vous besoin ?", in the words the person picked.
const NEED_LABELS: Record<string, string> = {
  automatiser: "Automatiser des tâches répétitives",
  assistant: "Un assistant IA qui répond depuis nos documents",
  demandes: "Traiter les demandes et e-mails entrants",
  excel: "Remplacer des fichiers Excel",
  "outil-gestion": "Un CRM ou un outil de gestion adapté à notre métier",
  moderniser: "Moderniser un logiciel existant",
  integrer: "Intégrer l'IA dans nos processus",
  former: "Former mes équipes à l'IA",
  comprendre: "Comprendre ce que l'IA peut faire pour nous",
  recette: "Tester avant chaque mise en production",
  "tests-auto": "Mettre en place des tests automatisés",
  externaliser: "Externaliser toute notre QA",
  autre: "Autre chose",
};

const GENERIC_ERROR = "L'envoi a échoué. Réessayez, ou appelez-nous directement.";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 400 });
  }

  const honeypot = body["mawt_hp"];
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    logger.warn("Landing-google honeypot triggered — submission dropped");
    return NextResponse.json({ success: true });
  }

  const limiter = await rateLimit("landing-google", 5, 60 * 60);
  if (!limiter.success) {
    return NextResponse.json(
      { error: "Vous avez déjà envoyé plusieurs demandes. Réessayez dans une heure." },
      { status: 429 },
    );
  }

  const validated = landingSchema.safeParse(body);
  if (!validated.success) {
    return NextResponse.json({ error: "Vérifiez les champs du formulaire." }, { status: 400 });
  }

  const { page, name, phone, email, team, role, pain, pain_detail, origin, utm, event_id } =
    validated.data;
  if (event_id && !(await claimOnce(`lead:landing-google:${event_id}`, 60 * 60))) {
    logger.warn("Landing-google duplicate submission ignored", { event_id });
    return NextResponse.json({ success: true });
  }

  const qualified = !role || role === "dirigeant" || role === "direction";
  const message = [
    `Téléphone : ${phone}`,
    phoneLooksValid(phone) ? null : "Téléphone : format non reconnu, à vérifier avant d'appeler",
    role ? `Rôle déclaré : ${ROLE_LABELS[role]}` : null,
    team ? `Taille de l'entreprise : ${team} personnes` : null,
    pain ? `Besoin : ${NEED_LABELS[pain] ?? pain}` : null,
    pain_detail ? `Précision : ${pain_detail}` : null,
    origin ? `Origine du CTA : ${origin}` : null,
    utm ? `Google : ${utm}` : null,
    "",
    qualified
      ? `Lead ${PAGE_LABELS[page]} — à rappeler sous 24 h ouvrées.`
      : "NON QUALIFIÉ d'après le rôle déclaré — aucun rappel promis à cette personne.",
  ]
    .filter((l): l is string => l !== null)
    .join("\n");

  const lead = {
    name,
    email,
    service: qualified ? PAGE_LABELS[page] : `${PAGE_LABELS[page]} (non qualifié)`,
    timeline: origin || "landing",
    message,
  };

  // Independent copy first: whatever fails below, the person is on the sheet.
  await backupLead({
    page,
    qualification: qualified ? "qualifie" : "non-qualifie",
    name,
    email,
    phone,
    details: message,
    utm,
    origin,
    event_id,
  });

  try {
    const client = getSanityWriteClient();
    if (client) {
      await client.create({ _type: "contactLead", ...lead, status: "new" });
    } else if (process.env.NODE_ENV === "production") {
      logger.error("Landing-google submission with no Sanity write client in production");
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
    } else {
      console.log("Mocking landing-google lead creation:", lead);
    }

    await sendLeadNotification(lead);
    if (qualified) {
      await trackConversion({
        type: "lead",
        email,
        metadata: { service: `landing-google-${page}`, origin, pain, team, role, utm },
      });
    }
    logger.info("Landing-google lead captured", { page, email: redactEmail(email), origin, utm });

    return NextResponse.json({ success: true });
  } catch (err) {
    logger.error("Landing-google submission error", err, { email: redactEmail(email) });
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}

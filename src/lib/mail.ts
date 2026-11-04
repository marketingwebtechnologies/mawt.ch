import "server-only";
import nodemailer from "nodemailer";
import { logger } from "./logger";
import { sanitizeHeaderValue } from "./text-sanitize";

/**
 * Lead emails, sent through the existing info@mawt.ch mailbox over SMTP
 * (nodemailer). No third-party email account is needed: SPF/DKIM are already
 * handled by the mail host of the mailbox itself.
 *
 * Env vars:
 *   SMTP_HOST  e.g. smtp.hostinger.com or mail.infomaniak.com
 *   SMTP_PORT  465 (SSL, default) or 587 (STARTTLS)
 *   SMTP_USER  the mailbox, e.g. info@mawt.ch
 *   SMTP_PASS  the mailbox password
 *   CONTACT_NOTIFY_TO    override notification recipient (default info@mawt.ch)
 *   CONTACT_NOTIFY_FROM  override From display (default "MAWT <SMTP_USER>")
 *
 * If SMTP is not configured but RESEND_API_KEY is set, Resend is used as a
 * fallback. An email failure never breaks the form submission — the lead is
 * already persisted in Sanity before any email is attempted.
 */

export type Lead = {
  name: string;
  email: string;
  service?: string;
  timeline?: string;
  message: string;
};

function getSmtpTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  const port = Number(process.env.SMTP_PORT || 465);
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function defaultFrom() {
  return (
    process.env.CONTACT_NOTIFY_FROM ||
    `MAWT <${process.env.SMTP_USER || "info@mawt.ch"}>`
  );
}

async function deliver(mail: {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  from?: string;
}) {
  const transport = getSmtpTransport();
  if (transport) {
    const { from, ...reste } = mail;
    await transport.sendMail({ from: from || defaultFrom(), ...reste });
    return true;
  }

  // Fallback: Resend REST API (only if configured).
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: mail.from || defaultFrom(),
        to: [mail.to],
        ...(mail.replyTo ? { reply_to: mail.replyTo } : {}),
        subject: mail.subject,
        text: mail.text,
        ...(mail.html ? { html: mail.html } : {}),
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    return true;
  }

  logger.warn(
    "No SMTP_* vars and no RESEND_API_KEY — lead stored in Sanity but no email sent",
  );
  return false;
}

/** Internal plain-text mail to the team mailbox (alerts, WhatsApp journal). Never throws. */
export async function sendInternalMail(subject: string, text: string, to?: string, html?: string): Promise<boolean> {
  try {
    return await deliver({ to: to || process.env.CONTACT_NOTIFY_TO || "info@mawt.ch", subject: sanitizeHeaderValue(subject), text, ...(html ? { html } : {}) });
  } catch (err) {
    logger.error("Internal mail failed", err, { subject });
    return false;
  }
}

/**
 * Personal e-mail to a prospect in Andrew's name (Cal booking confirmation and reminder):
 * HTML with his signature, answers go to aa@mawt.ch. Never throws.
 */
export async function sendProspectMail(to: string, subject: string, text: string, html: string): Promise<boolean> {
  try {
    const boite = process.env.SMTP_USER || "info@mawt.ch";
    return await deliver({ to, subject: sanitizeHeaderValue(subject), text, html, replyTo: "aa@mawt.ch", from: `Andrew Awad, MAWT <${boite}>` });
  } catch (err) {
    logger.error("Prospect mail failed", err, { subject });
    return false;
  }
}

/** « mercredi 4 novembre 2026 à 17 h 13 », heure suisse, pour les e-mails internes. */
export function dateHeureSuisse(d: Date): string {
  const jour = new Intl.DateTimeFormat("fr-CH", { timeZone: "Europe/Zurich", weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(d).replace(",", "");
  const [h, m] = new Intl.DateTimeFormat("fr-CH", { timeZone: "Europe/Zurich", hour: "2-digit", minute: "2-digit", hour12: false }).format(d).split(":");
  return `${jour} à ${Number(h)} h ${m}`;
}

/** Internal notification: a new lead landed. */
export async function sendLeadNotification(lead: Lead) {
  const to = process.env.CONTACT_NOTIFY_TO || "info@mawt.ch";
  try {
    await deliver({
      to,
      // Only a real address can be a reply-to; the e-mail field no longer blocks the form.
      ...(lead.email.includes("@") ? { replyTo: lead.email } : {}),
      // User-controlled values interpolated into a header MUST be sanitized:
      // a name containing \r\n could inject extra headers (Bcc, etc.).
      subject: sanitizeHeaderValue(
        `Nouveau lead : ${lead.name}${lead.service ? ` (${lead.service})` : ""}`,
      ),
      text: [
        `Reçu le ${dateHeureSuisse(new Date())}`, // 04.11 : date et heure demandées par Andrew
        "",
        `Nom : ${lead.name}`,
        `Email : ${lead.email}`,
        lead.service ? `Service : ${lead.service}` : null,
        lead.timeline ? `Délai : ${lead.timeline}` : null,
        "",
        lead.message,
        "",
        "Formulaire de contact mawt.ch (lead aussi enregistré dans Sanity)",
      ]
        .filter((l): l is string => l !== null)
        .join("\n"),
    });
  } catch (err) {
    logger.error("Lead notification email failed", err);
  }
}

/** Sends the requested PDF guide (as a link) to the person who asked for it. */
export async function sendGuideEmail(to: { firstName: string; email: string }, guide: { title: string; url: string }) {
  try {
    await deliver({
      to: to.email,
      replyTo: "aa@mawt.ch",
      subject: sanitizeHeaderValue(`Votre ebook : ${guide.title}`),
      text: [
        to.firstName ? `Bonjour ${to.firstName},` : "Bonjour,",
        "",
        "Voici votre ebook, comme promis :",
        guide.url,
        "",
        "Il se lit en 10 minutes. Cherchez la fiche de votre métier, ou celle qui y ressemble le plus.",
        "",
        "Si un exemple vous parle, on regarde votre cas ensemble : 30 minutes, gratuitement, en visio ou par téléphone.",
        "Choisissez votre créneau ici : https://cal.com/rdv-mawt/appel",
        "",
        "Une question avant ? Répondez simplement à cet e-mail.",
        "",
        "Andrew Awad",
        "Fondateur, MAWT",
        "Automatisation et IA pour les PME romandes",
        "+41 76 636 33 33 · mawt.ch",
        "Rue de la Fontenette 23, 1227 Carouge",
        "",
        "Vous ne souhaitez plus recevoir nos e-mails ? Répondez « stop » à ce message.",
      ].join("\n"),
    });
    return true;
  } catch (err) {
    logger.error("Guide email failed", err);
    return false;
  }
}

/** Confirmation ("thank you") email to the person who submitted the form. */
export async function sendLeadThankYou(lead: Lead, lang: "en" | "fr") {
  const firstName = lead.name.trim().split(/\s+/)[0] || lead.name;
  const subject =
    lang === "fr"
      ? "Nous avons bien reçu votre message"
      : "We received your message";
  const text =
    lang === "fr"
      ? [
          `Bonjour ${firstName},`,
          "",
          "Merci pour votre message, il est bien arrivé.",
          "Nous revenons vers vous sous un jour ouvré pour en discuter concrètement.",
          "",
          "En attendant, vous pouvez répondre directement à cet email si vous souhaitez ajouter un détail ou une pièce jointe.",
          "",
          "À très vite,",
          "L'équipe MAWT",
          "",
          "MAWT, agence IA à Genève",
          "Rue de la Fontenette 23, 1227 Carouge",
          "+41 76 636 33 33 · mawt.ch",
        ].join("\n")
      : [
          `Hello ${firstName},`,
          "",
          "Thanks for your message, it reached us.",
          "We will get back to you within one business day to discuss the details.",
          "",
          "In the meantime, feel free to reply directly to this email if you want to add anything.",
          "",
          "Talk soon,",
          "The MAWT team",
          "",
          "MAWT, AI agency in Geneva",
          "Rue de la Fontenette 23, 1227 Carouge",
          "+41 76 636 33 33 · mawt.ch",
        ].join("\n");

  try {
    await deliver({
      to: lead.email,
      replyTo: process.env.CONTACT_NOTIFY_TO || "info@mawt.ch",
      subject,
      text,
    });
  } catch (err) {
    // Never surface to the visitor; the lead is stored and the team notified.
    logger.error("Lead thank-you email failed", err);
  }
}

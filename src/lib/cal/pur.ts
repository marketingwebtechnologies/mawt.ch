// Pure helpers for the Cal.com booking webhook (no env, no network), unit-tested in tests/cal.test.ts.
// Andrew (03.11.2026): the free Cal plan cannot customise its e-mails, so the site sends the
// confirmation and the day-before reminder itself, and prepares Andrew's same-day WhatsApp message.
import { createHmac, timingSafeEqual } from "node:crypto";

/** Cal signs the raw body: `X-Cal-Signature-256: <hex hmac sha256>` with the webhook secret. */
export function verifierSignatureCal(corpsBrut: string, enTete: string | null, secret: string): boolean {
  if (!enTete || !secret) return false;
  const attendu = createHmac("sha256", secret).update(corpsBrut, "utf8").digest("hex");
  const recu = enTete.replace(/^sha256=/, "");
  const a = Buffer.from(attendu);
  const b = Buffer.from(recu);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Only the two discovery-call links trigger the prospect e-mails. */
export const SLUGS_APPEL = ["appel", "appel-telephone", "cours-ia", "cours-ia-telephone"];

export type Reservation = {
  evenement: "creee" | "replanifiee" | "annulee" | "autre";
  slug: string;
  uid: string;
  ancienUid: string;
  debut: string; // ISO
  prenom: string;
  nom: string;
  email: string;
  telephone: string; // as typed, may be empty
};

type Brut = Record<string, unknown>;

function valeurReponse(r: unknown): string {
  if (r == null) return "";
  if (typeof r === "string") return r;
  const v = (r as Brut).value;
  if (typeof v === "string") return v;
  if (v && typeof v === "object" && typeof (v as Brut).optionValue === "string") return String((v as Brut).optionValue);
  return "";
}

/** Reads the fields we need from a Cal webhook body, whatever the trigger. */
export function lireReservation(corps: unknown): Reservation {
  const c = (corps || {}) as Brut;
  const p = ((c.payload || {}) as Brut);
  const declencheur = String(c.triggerEvent || "");
  const evenement = declencheur === "BOOKING_CREATED" ? "creee"
    : declencheur === "BOOKING_RESCHEDULED" ? "replanifiee"
    : declencheur === "BOOKING_CANCELLED" ? "annulee" : "autre";
  const participant = ((Array.isArray(p.attendees) ? p.attendees[0] : null) || {}) as Brut;
  const reponses = ((p.responses || {}) as Brut);
  const nomComplet = String(participant.name || valeurReponse(reponses.name) || "").trim();
  const prenom = String(participant.firstName || nomComplet.split(/\s+/)[0] || "").trim();
  const lieu = typeof p.location === "string" ? p.location : "";
  const telephone = valeurReponse(reponses.attendeePhoneNumber) || String(participant.phoneNumber || "")
    || valeurReponse(reponses.location) || (/^\+?[\d\s().-]{8,}$/.test(lieu) ? lieu : "");
  return {
    evenement,
    slug: String(p.type || p.eventTypeSlug || ""),
    uid: String(p.uid || ""),
    ancienUid: String(p.rescheduleUid || p.fromRescheduleUid || ""),
    debut: String(p.startTime || ""),
    prenom: prenom ? prenom.charAt(0).toUpperCase() + prenom.slice(1) : "",
    nom: nomComplet,
    email: String(participant.email || valeurReponse(reponses.email) || "").trim(),
    telephone: telephone.trim(),
  };
}

/** "mercredi 4 novembre" and "11 h" (or "11 h 30"), in Swiss time. */
export function formaterCreneau(iso: string): { jour: string; heure: string } {
  const d = new Date(iso);
  const jour = new Intl.DateTimeFormat("fr-CH", { timeZone: "Europe/Zurich", weekday: "long", day: "numeric", month: "long" }).format(d);
  const parts = new Intl.DateTimeFormat("fr-CH", { timeZone: "Europe/Zurich", hour: "numeric", minute: "2-digit", hourCycle: "h23" }).formatToParts(d);
  const h = parts.find((x) => x.type === "hour")?.value || "";
  const m = parts.find((x) => x.type === "minute")?.value || "00";
  return { jour, heure: m === "00" ? `${Number(h)} h` : `${Number(h)} h ${m}` };
}

/** Swiss number as typed (079…, +41 79…, 0041…) to wa.me digits (4179…); empty if not usable. */
export function numeroWhatsApp(brut: string): string {
  let n = String(brut || "").replace(/[^\d+]/g, "");
  if (n.startsWith("+")) n = n.slice(1);
  else if (n.startsWith("00")) n = n.slice(2);
  else if (n.startsWith("0")) n = "41" + n.slice(1);
  return n.length >= 10 && n.length <= 15 ? n : "";
}

/** Display form of a Swiss mobile: 079 854 94 20; otherwise the input, trimmed. */
export function numeroLisible(brut: string): string {
  const n = numeroWhatsApp(brut);
  if (n.startsWith("41") && n.length === 11) {
    const l = "0" + n.slice(2);
    return `${l.slice(0, 3)} ${l.slice(3, 6)} ${l.slice(6, 8)} ${l.slice(8)}`;
  }
  return String(brut || "").trim();
}

/** QStash cannot delay more than a few days: long waits are split into hops of at most 6 days. */
export const SAUT_MAX_SECONDES = 6 * 86400;

/**
 * Seconds to wait before the day-before reminder (24 h before the call), or null when there is
 * no point sending one (call in less than 26 h: the confirmation e-mail is fresh enough).
 */
export function delaiRappelSecondes(debutIso: string, maintenantMs: number): number | null {
  const cible = new Date(debutIso).getTime() - 24 * 3600 * 1000;
  if (!Number.isFinite(cible) || cible - maintenantMs < 2 * 3600 * 1000) return null;
  return Math.round((cible - maintenantMs) / 1000);
}

export const lienReplanifier = (uid: string) => `https://cal.com/reschedule/${encodeURIComponent(uid)}`;

// --- 20.11.2026: the booking joins the leads sheet, and Andrew's e-mail carries the form answers. ---

/** What the landing form knew about the person, kept so the booking can be matched to it. */
export type FicheLead = { page: string; email: string; telephone: string; details: string; utm: string };

/** Phone bookings carry a made-up address (4179…@sms.cal.com): never show or store it as an e-mail. */
export const estFausseAdresseCal = (email: string) => /@sms\.cal\.com$/i.test(String(email || "").trim());

/** Lookup keys shared by the form and the booking: normalised phone first, then the real e-mail. */
export function clesContact(telephone: string, email: string): string[] {
  const cles: string[] = [];
  const tel = numeroWhatsApp(telephone);
  if (tel) cles.push(`tel:${tel}`);
  const mail = String(email || "").trim().toLowerCase();
  if (mail.includes("@") && !estFausseAdresseCal(mail)) cles.push(`mail:${mail}`);
  return cles;
}

/** The form lines worth reading before the call (role, size, pain, detail). */
export function resumeFiche(details: string): string[] {
  return String(details || "").split("\n").map((l) => l.trim())
    .filter((l) => /^(Rôle déclaré|Taille de l'entreprise|Ce qui lui fait perdre le plus de temps|Précision)\s*:/.test(l));
}

/** Row appended to the leads sheet for a booking (qualification "rdv"), enriched with the form when known. */
export function ligneRdv(r: Reservation, fiche: FicheLead | null) {
  const { jour, heure } = formaterCreneau(r.debut);
  const canal = /telephone/.test(r.slug) ? "téléphone" : "visio ou téléphone";
  const email = estFausseAdresseCal(r.email) ? (fiche?.email || "") : (r.email || fiche?.email || "");
  return {
    page: fiche?.page || `cal-${r.slug}`,
    qualification: "rdv",
    name: r.nom,
    email,
    phone: r.telephone || fiche?.telephone || "",
    details: [`Rendez-vous : ${jour} à ${heure} (${canal})`, ...(fiche ? resumeFiche(fiche.details) : ["Formulaire d'origine non retrouvé."])].join("\n"),
    utm: fiche?.utm || "",
  };
}

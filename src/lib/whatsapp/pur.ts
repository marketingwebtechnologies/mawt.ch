// Pure helpers of the WhatsApp "double" (no env, no network): webhook parsing, signature
// check, reply timing. Everything here is unit-tested in tests/whatsapp.test.ts.
import { createHmac, timingSafeEqual } from "node:crypto";

export type EvenementWhatsApp =
  | { type: "entrant"; de: string; nom: string; texte: string; id: string; ts: number }
  | { type: "echo"; vers: string; texte: string; id: string; ts: number }
  | { type: "autre"; sousType: string };

/** Meta signs the raw body with the app secret: `X-Hub-Signature-256: sha256=<hex>`. */
export function verifierSignatureMeta(corpsBrut: string, enTete: string | null, secretApp: string): boolean {
  if (!enTete || !secretApp) return false;
  const attendu = "sha256=" + createHmac("sha256", secretApp).update(corpsBrut, "utf8").digest("hex");
  const a = Buffer.from(attendu);
  const b = Buffer.from(enTete);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Digits only, no leading plus: the form WhatsApp uses in `from` / `wa_id`. */
export function normaliserNumero(brut: string): string {
  return String(brut || "").replace(/\D/g, "");
}

function texteDe(m: Record<string, unknown>): string {
  const type = String(m.type || "");
  const texte = m.text as { body?: string } | undefined;
  if (type === "text" && texte?.body) return String(texte.body);
  const bouton = m.button as { text?: string } | undefined;
  if (type === "button" && bouton?.text) return String(bouton.text);
  const inter = m.interactive as { button_reply?: { title?: string }; list_reply?: { title?: string } } | undefined;
  if (type === "interactive") return String(inter?.button_reply?.title || inter?.list_reply?.title || "");
  return "";
}

/**
 * Turns a webhook payload into a flat list of events. Incoming customer messages come in
 * `value.messages`; messages Andrew sends from the WhatsApp Business app (Coexistence) come
 * back as echoes (`smb_message_echoes` field, `value.message_echoes`). As a safety net, a
 * message in `messages` whose `from` is the business number itself is also treated as an echo.
 */
export function extraireEvenements(payload: unknown): EvenementWhatsApp[] {
  const out: EvenementWhatsApp[] = [];
  const p = payload as { entry?: Array<{ changes?: Array<{ field?: string; value?: Record<string, unknown> }> }> };
  for (const entree of p?.entry || []) {
    for (const ch of entree.changes || []) {
      const v = ch.value || {};
      const meta = (v.metadata as { display_phone_number?: string } | undefined) || {};
      const numeroEntreprise = normaliserNumero(meta.display_phone_number || "");
      const contacts = (v.contacts as Array<{ wa_id?: string; profile?: { name?: string } }> | undefined) || [];
      const noms = new Map(contacts.map((c) => [normaliserNumero(c.wa_id || ""), String(c.profile?.name || "")]));

      for (const m of (v.messages as Array<Record<string, unknown>> | undefined) || []) {
        const de = normaliserNumero(String(m.from || ""));
        const ts = Number(m.timestamp || 0) * 1000;
        const id = String(m.id || "");
        if (numeroEntreprise && de === numeroEntreprise) {
          out.push({ type: "echo", vers: normaliserNumero(String(m.to || "")), texte: texteDe(m), id, ts });
          continue;
        }
        const texte = texteDe(m);
        if (!texte) { out.push({ type: "autre", sousType: String(m.type || "inconnu") }); continue; }
        out.push({ type: "entrant", de, nom: noms.get(de) || "", texte, id, ts });
      }
      for (const m of (v.message_echoes as Array<Record<string, unknown>> | undefined) || []) {
        out.push({ type: "echo", vers: normaliserNumero(String(m.to || "")), texte: texteDe(m), id: String(m.id || ""), ts: Number(m.timestamp || 0) * 1000 });
      }
      if (v.statuses) out.push({ type: "autre", sousType: "statuts" });
    }
  }
  return out;
}

/**
 * Delay before the double answers (Andrew, 03.11.2026): 30 s before the first reply of a
 * conversation, then 10 s plus roughly 1 s per 20 characters of the reply, capped at 25 s.
 * During that delay the API shows "typing". If Andrew answers first, the double stays silent.
 */
export function delaiReponseSecondes(reponsesDejaEnvoyees: number, longueurReponse: number): number {
  if (reponsesDejaEnvoyees <= 0) return 30;
  return Math.min(25, 10 + Math.round(Math.max(0, longueurReponse) / 20));
}

/** The double sleeps on a conversation for 24 h after Andrew's last own message. */
export function andrewALaMain(dernierEchoMs: number | null, maintenantMs: number): boolean {
  if (!dernierEchoMs) return false;
  return maintenantMs - dernierEchoMs < 24 * 3600 * 1000;
}

/**
 * Site origin (Andrew, 03.11.2026): the double only talks to people who came through the WhatsApp
 * button of the guide page, recognised by the prefilled text of its wa.me link
 * ("Bonjour, j'ai lu l'ebook, j'aurais des questions." since 03.11 12 h; the older wording
 * "j'ai lu le guide MAWT" is still accepted for pages opened before). Anyone else (friends,
 * clients, unknown numbers) is stored and reported, never answered. Matching ignores case,
 * accents and typographic apostrophes so a lightly edited message still counts.
 */
const MARQUEURS_SITE = ["j'ai lu l'ebook", "j'ai lu le guide mawt"];

/**
 * Reply suggested in the "new contact" e-mail for a contact who came through the guide button
 * (Andrew's wording, 03.11.2026), to copy into the WhatsApp Business app while the double is off.
 */
export const PROPOSITION_PREMIER_MESSAGE =
  "Bonjour, ravi que vous ayez pris la peine de le lire. Avez-vous des questions concernant ce document, ou souhaitez-vous en discuter de vive voix ?";

function normaliserTexte(t: string): string {
  return String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’‘]/g, "'").replace(/\s+/g, " ").trim();
}

export function vientDuSite(texte: string): boolean {
  const t = normaliserTexte(texte);
  return t.length > 0 && MARQUEURS_SITE.some((m) => t.includes(m));
}

/** Phone number for logs: country code kept, middle hidden, last two digits kept. */
export function masquerNumero(numero: string): string {
  const n = normaliserNumero(numero);
  if (n.length < 6) return "***";
  return n.slice(0, 2) + "*".repeat(n.length - 4) + n.slice(-2);
}

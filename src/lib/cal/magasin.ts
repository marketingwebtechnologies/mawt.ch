import "server-only";
// Booking state on the same Upstash Redis REST store as the WhatsApp double:
//   cal:rdv:<uid>  JSON of the booking (Reservation), "annulee" once cancelled or rescheduled, kept 60 days
import type { Reservation } from "./pur";

const URL = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const TTL = 60 * 86400;

export const magasinCalDisponible = () => Boolean(URL && TOKEN);

async function commande(cmd: string[]): Promise<unknown> {
  if (!URL || !TOKEN) throw new Error("Upstash non configuré");
  const res = await fetch(`${URL}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify([cmd]),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const [r] = (await res.json()) as Array<{ result: unknown; error?: string }>;
  if (r.error) throw new Error(`Upstash: ${r.error}`);
  return r.result;
}

export async function enregistrerRdv(r: Reservation): Promise<void> {
  await commande(["SET", `cal:rdv:${r.uid}`, JSON.stringify(r), "EX", String(TTL)]);
}

export async function annulerRdv(uid: string): Promise<void> {
  if (uid) await commande(["SET", `cal:rdv:${uid}`, "annulee", "EX", String(TTL)]);
}

/** The booking if still active, null if cancelled, rescheduled or unknown. */
export async function lireRdv(uid: string): Promise<Reservation | null> {
  const v = await commande(["GET", `cal:rdv:${uid}`]);
  if (typeof v !== "string" || v === "annulee") return null;
  try { return JSON.parse(v) as Reservation; } catch { return null; }
}

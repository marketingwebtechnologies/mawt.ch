import "server-only";
// Conversation store of the WhatsApp double, on the Upstash Redis REST API already used by the
// rate limiter. Keys are per customer number; nothing here is ever logged with its content.
//   wa:conv:<numero>            list of JSON messages, newest first (LPUSH), kept 90 days
//   wa:andrew:<numero>          timestamp (ms) of Andrew's last own message (echo)
//   wa:reponses:<numero>        number of replies the double sent in this conversation
//   wa:planifie:<numero>        id of the pending delayed job (dedup: one job per conversation)
//   wa:traite:<message id>      seen-once guard for webhook retries
//   wa:origine:<numero>         "site" once the contact wrote through the guide page's WhatsApp button

const URL = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const TTL_CONV = 90 * 86400;

export type MessageConv = {
  /** "contact" (incoming), "andrew" (echo from the app) or "double" (sent by the API). */
  de: "contact" | "andrew" | "double";
  texte: string;
  ts: number;
  id?: string;
};

export function magasinDisponible(): boolean {
  return Boolean(URL && TOKEN);
}

async function pipeline(commandes: string[][]): Promise<unknown[]> {
  if (!URL || !TOKEN) throw new Error("Upstash non configuré");
  const res = await fetch(`${URL}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(commandes),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const data = (await res.json()) as Array<{ result: unknown; error?: string }>;
  return data.map((d) => { if (d.error) throw new Error(`Upstash: ${d.error}`); return d.result; });
}

/** True the first time a webhook message id is seen (Meta retries deliveries). */
export async function premiereFois(idMessage: string): Promise<boolean> {
  if (!idMessage) return true;
  const [r] = await pipeline([["SET", `wa:traite:${idMessage}`, "1", "NX", "EX", String(7 * 86400)]]);
  return r === "OK";
}

export async function ajouterMessage(numero: string, m: MessageConv): Promise<void> {
  const cmds: string[][] = [
    ["LPUSH", `wa:conv:${numero}`, JSON.stringify(m)],
    ["LTRIM", `wa:conv:${numero}`, "0", "199"],
    ["EXPIRE", `wa:conv:${numero}`, String(TTL_CONV)],
  ];
  if (m.de === "andrew") cmds.push(["SET", `wa:andrew:${numero}`, String(m.ts), "EX", String(TTL_CONV)]);
  if (m.de === "double") cmds.push(["INCR", `wa:reponses:${numero}`], ["EXPIRE", `wa:reponses:${numero}`, String(TTL_CONV)]);
  await pipeline(cmds);
}

export async function lireConversation(numero: string): Promise<{ messages: MessageConv[]; dernierAndrew: number | null; reponsesDouble: number }> {
  const [brut, andrew, reponses] = await pipeline([
    ["LRANGE", `wa:conv:${numero}`, "0", "199"],
    ["GET", `wa:andrew:${numero}`],
    ["GET", `wa:reponses:${numero}`],
  ]);
  const messages = ((brut as string[]) || []).map((s) => JSON.parse(s) as MessageConv).reverse(); // oldest first
  return { messages, dernierAndrew: andrew ? Number(andrew) : null, reponsesDouble: Number(reponses || 0) };
}

/** Marks a contact as having come through the site's WhatsApp button (the only ones the double may answer). */
export async function marquerOrigineSite(numero: string): Promise<void> {
  await pipeline([["SET", `wa:origine:${numero}`, "site", "EX", String(TTL_CONV)]]);
}

export async function origineSite(numero: string): Promise<boolean> {
  const [r] = await pipeline([["GET", `wa:origine:${numero}`]]);
  return r === "site";
}

/** Records the pending delayed job; returns false if one is already pending for this number. */
export async function reserverPlanification(numero: string, idJob: string, ttlSecondes: number): Promise<boolean> {
  const [r] = await pipeline([["SET", `wa:planifie:${numero}`, idJob, "NX", "EX", String(ttlSecondes)]]);
  return r === "OK";
}

export async function jobPlanifie(numero: string): Promise<string | null> {
  const [r] = await pipeline([["GET", `wa:planifie:${numero}`]]);
  return (r as string) || null;
}

export async function libererPlanification(numero: string): Promise<void> {
  await pipeline([["DEL", `wa:planifie:${numero}`]]);
}

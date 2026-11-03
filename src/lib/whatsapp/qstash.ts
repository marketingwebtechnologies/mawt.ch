import "server-only";
import { createHash } from "node:crypto";
import { jwtVerify } from "jose";

// Delayed callbacks through Upstash QStash: the webhook schedules "answer this conversation in N s",
// QStash calls back /api/whatsapp/repondre after the delay. Env: QSTASH_TOKEN (publish),
// QSTASH_CURRENT_SIGNING_KEY and QSTASH_NEXT_SIGNING_KEY (verify the callback signature).

export function qstashDisponible(): boolean {
  return Boolean(process.env.QSTASH_TOKEN && process.env.QSTASH_CURRENT_SIGNING_KEY);
}

/** Publishes a delayed POST to `url` with `corps`; returns the QStash message id. */
export async function planifier(url: string, corps: Record<string, unknown>, delaiSecondes: number, idDedup: string): Promise<string> {
  const jeton = process.env.QSTASH_TOKEN;
  if (!jeton) throw new Error("QStash non configuré");
  const res = await fetch(`https://qstash.upstash.io/v2/publish/${url}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jeton}`,
      "Content-Type": "application/json",
      "Upstash-Delay": `${Math.max(0, Math.round(delaiSecondes))}s`,
      "Upstash-Deduplication-Id": idDedup,
      "Upstash-Retries": "2",
    },
    body: JSON.stringify(corps),
    cache: "no-store",
  });
  const data = (await res.json().catch(() => ({}))) as { messageId?: string; error?: string };
  if (!res.ok) throw new Error(`QStash ${res.status}: ${data.error || "erreur"}`);
  return String(data.messageId || "");
}

/**
 * Verifies the `Upstash-Signature` JWT of a callback: HS256 with the current or the next signing key,
 * issuer "Upstash", subject = our URL, and the `body` claim = base64url(sha256(raw body)).
 */
export async function verifierSignatureQstash(signature: string | null, corpsBrut: string, url: string): Promise<boolean> {
  if (!signature) return false;
  const cles = [process.env.QSTASH_CURRENT_SIGNING_KEY, process.env.QSTASH_NEXT_SIGNING_KEY].filter(Boolean) as string[];
  const empreinte = createHash("sha256").update(corpsBrut, "utf8").digest("base64url");
  for (const cle of cles) {
    try {
      const { payload } = await jwtVerify(signature, new TextEncoder().encode(cle), { issuer: "Upstash", algorithms: ["HS256"] });
      if (payload.sub !== url) continue;
      const attendu = String(payload.body || "").replace(/=+$/, "");
      if (attendu !== empreinte) continue;
      return true;
    } catch {
      // next key
    }
  }
  return false;
}

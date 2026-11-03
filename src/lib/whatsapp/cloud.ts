import "server-only";
import { logger } from "@/lib/logger";
import { masquerNumero } from "./pur";

// WhatsApp Cloud API client (Meta Graph API). The access token and the phone number id live in the
// host's environment variables only (WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID), never in the
// repository, never in a log line.

const VERSION = "v22.0";

function config() {
  const jeton = process.env.WHATSAPP_ACCESS_TOKEN;
  const idNumero = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!jeton || !idNumero) throw new Error("WhatsApp non configuré (jeton ou id du numéro manquant)");
  return { jeton, idNumero };
}

async function graph(corps: Record<string, unknown>): Promise<Record<string, unknown>> {
  const { jeton, idNumero } = config();
  const res = await fetch(`https://graph.facebook.com/${VERSION}/${idNumero}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${jeton}`, "Content-Type": "application/json" },
    body: JSON.stringify({ messaging_product: "whatsapp", ...corps }),
    cache: "no-store",
  });
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) {
    const err = data.error as { message?: string; code?: number } | undefined;
    logger.warn("WhatsApp API refus", { status: res.status, code: err?.code, message: err?.message });
    throw new Error(`WhatsApp ${res.status}: ${err?.message || "erreur"}`);
  }
  return data;
}

/** Sends a plain text reply inside the 24 h customer-service window. Returns the message id. */
export async function envoyerTexte(vers: string, texte: string): Promise<string> {
  const data = await graph({ recipient_type: "individual", to: vers, type: "text", text: { preview_url: true, body: texte } });
  const id = String(((data.messages as Array<{ id?: string }> | undefined) || [])[0]?.id || "");
  logger.info("WhatsApp message envoyé", { vers: masquerNumero(vers), longueur: texte.length });
  return id;
}

/** Marks the customer's message as read and shows the typing indicator (dismissed on send or after ~25 s). */
export async function marquerLuEtEcrire(idMessage: string): Promise<void> {
  if (!idMessage) return;
  try {
    await graph({ status: "read", message_id: idMessage, typing_indicator: { type: "text" } });
  } catch (err) {
    logger.warn("Indicateur de saisie WhatsApp impossible", { error: String(err) });
  }
}

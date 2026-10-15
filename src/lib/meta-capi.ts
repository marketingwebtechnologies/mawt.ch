import { createHash } from "crypto";
import { logger } from "@/lib/logger";

// Meta Conversions API, server side. The landing pages already fire the same
// events from the browser (Lead, LeadNonQualifie, LeadFormation); this sends
// a server copy so Meta still sees the lead when the browser event is lost
// (ad blockers, iOS tracking refusal, page closed too early). Both copies
// share the `event_id` the page generated, so Meta deduplicates them.
//
// Never throws: a CAPI failure must never fail a lead submission.

const PIXEL_ID = "959258244767672";
const GRAPH = "https://graph.facebook.com/v21.0";
const TIMEOUT_MS = 4000;

export type MetaCapiEventName = "Lead" | "LeadNonQualifie" | "LeadFormation";

export type MetaCapiInput = {
  eventName: MetaCapiEventName;
  /** Same id the page passed to fbq() as eventID. */
  eventId?: string;
  email: string;
  phone: string;
  /** Page URL the form was submitted from (Referer). */
  sourceUrl?: string | null;
  ip?: string | null;
  userAgent?: string | null;
  /** _fbc / _fbp cookies set by the pixel, when present. */
  fbc?: string | null;
  fbp?: string | null;
  /** fbclid from the landing URL, used to rebuild fbc when the cookie is missing. */
  fbclid?: string | null;
  customData?: Record<string, string | undefined>;
};

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

/** Normalises as Meta expects: lower case, trimmed. */
export function hashEmail(email: string): string {
  return sha256(email.trim().toLowerCase());
}

/** Digits only with country code, Swiss national format promoted to 41. */
export function hashPhone(phone: string): string | null {
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  else if (digits.startsWith("0") && digits.length === 10) digits = "41" + digits.slice(1);
  if (digits.length < 8) return null;
  return sha256(digits);
}

/** Pulls `fbclid=...` out of the utm string the forms send. */
export function fbclidFromUtm(utm: string | undefined): string | null {
  if (!utm) return null;
  const m = /(?:^|&)fbclid=([^&]+)/.exec(utm);
  return m ? m[1] : null;
}

let missingTokenWarned = false;

export async function sendMetaCapiEvent(input: MetaCapiInput): Promise<boolean> {
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!token) {
    if (!missingTokenWarned) {
      missingTokenWarned = true;
      logger.warn("META_CAPI_ACCESS_TOKEN is not set: server-side Meta events are skipped");
    }
    return false;
  }

  const now = Math.floor(Date.now() / 1000);
  const userData: Record<string, unknown> = {
    em: [hashEmail(input.email)],
  };
  const ph = hashPhone(input.phone);
  if (ph) userData.ph = [ph];
  if (input.ip && input.ip !== "unknown") userData.client_ip_address = input.ip;
  if (input.userAgent) userData.client_user_agent = input.userAgent;
  if (input.fbp) userData.fbp = input.fbp;
  if (input.fbc) userData.fbc = input.fbc;
  else if (input.fbclid) userData.fbc = `fb.1.${Date.now()}.${input.fbclid}`;

  const customData: Record<string, string> = {};
  for (const [k, v] of Object.entries(input.customData ?? {})) {
    if (v) customData[k] = v;
  }

  const event: Record<string, unknown> = {
    event_name: input.eventName,
    event_time: now,
    action_source: "website",
    user_data: userData,
  };
  if (input.eventId) event.event_id = input.eventId;
  if (input.sourceUrl) event.event_source_url = input.sourceUrl;
  if (Object.keys(customData).length > 0) event.custom_data = customData;

  const body: Record<string, unknown> = { data: [event] };
  if (process.env.META_CAPI_TEST_EVENT_CODE) {
    body.test_event_code = process.env.META_CAPI_TEST_EVENT_CODE;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${GRAPH}/${PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      logger.warn("Meta CAPI rejected the event", {
        status: res.status,
        event: input.eventName,
        detail: text.slice(0, 300),
      });
      return false;
    }
    logger.info("Meta CAPI event sent", { event: input.eventName, eventId: input.eventId });
    return true;
  } catch (err) {
    logger.warn("Meta CAPI call failed", { event: input.eventName, error: String(err) });
    return false;
  } finally {
    clearTimeout(timer);
  }
}

/** Collects the request-side signals (IP, UA, Referer, pixel cookies) in one place. */
export function capiContextFromRequest(request: {
  headers: { get(name: string): string | null };
  cookies: { get(name: string): { value: string } | undefined };
}) {
  return {
    ip: request.headers.get("x-forwarded-for")?.split(",")[0].trim() || null,
    userAgent: request.headers.get("user-agent"),
    sourceUrl: request.headers.get("referer"),
    fbc: request.cookies.get("_fbc")?.value ?? null,
    fbp: request.cookies.get("_fbp")?.value ?? null,
  };
}

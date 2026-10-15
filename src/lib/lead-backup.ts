import { logger } from "@/lib/logger";

// Second, independent copy of every lead: a Google Apps Script web app that
// appends a row to the leads sheet. It runs outside Vercel and Sanity, so a
// broken route, a Sanity outage or a mail failure never loses the person.
// The landing pages call the same web app directly from the browser when the
// site API itself fails (see `__LEADS_BACKUP_URL__` in the page routes).
// Never throws.

const TIMEOUT_MS = 4000;

export type LeadBackupRecord = {
  page: string;
  qualification: string;
  name: string;
  email: string;
  phone: string;
  /** Free-form details, already formatted for a human. */
  details: string;
  utm?: string;
  origin?: string;
  event_id?: string;
};

export async function backupLead(record: LeadBackupRecord): Promise<boolean> {
  const url = process.env.LEADS_BACKUP_URL;
  if (!url) return false;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      // text/plain avoids a CORS preflight and matches what the browser fallback sends.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        source: "serveur",
        secret: process.env.LEADS_BACKUP_SECRET ?? "",
        horodatage: new Date().toISOString(),
        ...record,
      }),
      signal: controller.signal,
      redirect: "follow",
    });
    if (!res.ok) {
      logger.warn("Lead backup rejected", { status: res.status, page: record.page });
      return false;
    }
    return true;
  } catch (err) {
    logger.warn("Lead backup failed", { page: record.page, error: String(err) });
    return false;
  } finally {
    clearTimeout(timer);
  }
}

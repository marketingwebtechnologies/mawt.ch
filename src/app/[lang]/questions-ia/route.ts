import landingHtml from "./landing-html";

// Landing page "Session IA" (30-minute Q&A call, Meta traffic). Served as raw
// HTML like /500-chf: a self-contained prototype with its own styles, fonts
// and step-by-step questionnaire that must not inherit the site layout. It
// posts its answers to /api/questions-ia. French only for now; every locale
// serves the same page. Kept out of search indexes: paid-traffic page only.
export const dynamic = "force-static";

// The browser-side fallback posts to this Apps Script web app when the site
// API fails; the placeholder is filled at build time from the environment.
// Only a Google Apps Script web app URL is accepted, and only characters that
// are safe inside a double-quoted JS string, so a bad value cannot break or
// inject into the page.
const BACKUP_URL = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(
  process.env.NEXT_PUBLIC_LEADS_BACKUP_URL ?? "",
)
  ? (process.env.NEXT_PUBLIC_LEADS_BACKUP_URL as string)
  : "";
function withBackupUrl(html: string): string {
  return html.split("__LEADS_BACKUP_URL__").join(BACKUP_URL);
}

export async function GET() {
  return new Response(withBackupUrl(landingHtml), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

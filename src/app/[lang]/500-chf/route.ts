import landingHtml from "./landing-html";
import landingHtmlEn from "./landing-html-en";

// Landing page "500 CHF" (microtesting Meta). Served as raw HTML on purpose:
// the page is a self-contained prototype (own styles, fonts, scripts) that
// must not inherit the site layout, header or footer. It posts its leads to
// /api/landing-500. Kept out of search indexes: paid-traffic page only.
// /en/500-chf serves the English copy for the English-language ad set; every
// other locale falls back to the French original.
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

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang } = await params;
  return new Response(withBackupUrl(lang === "en" ? landingHtmlEn : landingHtml), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

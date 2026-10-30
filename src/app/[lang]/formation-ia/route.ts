import landingHtml from "./landing-html";

// Google Ads landing "formation-ia". Served as raw HTML like /fr/500-chf: the page is
// self-contained and must not inherit the site layout, header or footer. It
// posts its leads to /api/landing-google. Paid-traffic page, kept out of
// search indexes.
export const dynamic = "force-static";

// Same build-time fallback URL handling as /fr/500-chf: only a Google Apps
// Script web app URL is accepted.
const BACKUP_URL = /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(
  process.env.NEXT_PUBLIC_LEADS_BACKUP_URL ?? "",
)
  ? (process.env.NEXT_PUBLIC_LEADS_BACKUP_URL as string)
  : "";

export async function GET() {
  return new Response(landingHtml.split("__LEADS_BACKUP_URL__").join(BACKUP_URL), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

import landingHtml from "./landing-html";

// Landing page "500 CHF" (microtesting Meta). Served as raw HTML on purpose:
// the page is a self-contained prototype (own styles, fonts, scripts) that
// must not inherit the site layout, header or footer. It posts its leads to
// /api/landing-500. Kept out of search indexes: paid-traffic page only.
export const dynamic = "force-static";

export async function GET() {
  return new Response(landingHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

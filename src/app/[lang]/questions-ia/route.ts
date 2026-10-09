import landingHtml from "./landing-html";

// Landing page "Session IA" (30-minute Q&A call, Meta traffic). Served as raw
// HTML like /500-chf: a self-contained prototype with its own styles, fonts
// and step-by-step questionnaire that must not inherit the site layout. It
// posts its answers to /api/questions-ia. French only for now; every locale
// serves the same page. Kept out of search indexes: paid-traffic page only.
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

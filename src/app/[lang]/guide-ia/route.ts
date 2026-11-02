import landingHtml from "./landing-html";

// Meta landing "guide-ia": free PDF guides, one per ad angle. Served as raw HTML like /fr/500-chf:
// self-contained, no site layout. Posts to /api/guide. Paid-traffic page, kept out of search indexes.
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

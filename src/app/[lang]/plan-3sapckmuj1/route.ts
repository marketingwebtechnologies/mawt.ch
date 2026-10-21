import landingHtml from "./landing-html";

// Private page for DG Expertise (Djilloul): the Diagora integration-plan video
// with the dedicated Cal.com calendar below (/fr/plan-3sapckmuj1, unguessable path).
// Not indexed (meta + X-Robots-Tag), not in the sitemap. Assets live in /public/plan-3sapckmuj1/.
export const dynamic = "force-static";

export async function GET() {
  return new Response(landingHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

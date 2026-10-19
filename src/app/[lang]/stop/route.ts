import landingHtml from "./landing-html";

// Unsubscribe page linked under the signature of the outreach e-mails
// (/fr/stop?c=<token>). Opening it records nothing: mail security scanners open
// links on their own. Only the "Confirmer" button posts the opt-out to
// /api/outreach, which stores it with the token in the "Leads site" sheet.
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

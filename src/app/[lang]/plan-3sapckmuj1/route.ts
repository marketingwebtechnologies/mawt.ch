import { after, type NextRequest } from "next/server";
import { backupLead } from "@/lib/lead-backup";
import landingHtml from "./landing-html";

// Private page for DG Expertise (Djilloul): the Diagora integration-plan video
// with the dedicated Cal.com calendar below (/fr/plan-3sapckmuj1, unguessable path).
// Not indexed (meta + X-Robots-Tag), not in the sitemap. Assets live in /public/plan-3sapckmuj1/.
//
// Every opening of the link is logged server-side (including the automatic ones
// made by mail security scanners); the page itself reports a real visit, the
// video progress and the calendar from the browser (see /api/diagora-plan).
// Opening the page with ?moi=1 (the owner checking it) logs nothing and sets a
// one-year cookie, so that browser is never counted again, even without the parameter.
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const moi = request.nextUrl.searchParams.get("moi") !== null || request.cookies.get("moi")?.value === "1";
  if (!moi) {
    const userAgent = (request.headers.get("user-agent") ?? "").slice(0, 160);
    after(() =>
      backupLead({
        page: "diagora-plan",
        qualification: "ouverture-lien",
        name: "",
        email: "",
        phone: "",
        details: `Lien ouvert (serveur, peut être un antivirus de messagerie). UA : ${userAgent || "?"}`,
        utm: "page=plan-3sapckmuj1",
      }),
    );
  }
  const headers = new Headers({
    "Content-Type": "text/html; charset=utf-8",
    "X-Robots-Tag": "noindex, nofollow, noarchive",
    "Cache-Control": "private, no-store",
  });
  if (moi) headers.set("Set-Cookie", "moi=1; Path=/; Max-Age=31536000; SameSite=Lax; Secure");
  return new Response(landingHtml, { headers });
}

import { after, type NextRequest } from "next/server";
import landingHtml from "./landing-html";
import { backupLead } from "@/lib/lead-backup";

// Outreach video page for construction companies (owner decision 2026-10-19).
// Each prospecting e-mail links to /fr/soumissions?c=<token>&v=<a|b|c>: the
// token identifies the e-mail in the CRM, the variant picks one of the three
// videos. Served as raw HTML like /questions-ia. French only; every locale
// serves the same page. Kept out of search indexes.
//
// The server logs every opening of the link, including the automatic ones made
// by mail security scanners; the page itself reports a real visit from the
// browser (see /api/outreach), which is what counts as a click.
export const dynamic = "force-dynamic";

const TOKEN = /^[a-z0-9]{4,16}$/;
const VARIANT = /^[abc]$/;

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const token = params.get("c") ?? "";
  const variant = params.get("v") ?? "";
  if (TOKEN.test(token)) {
    const userAgent = (request.headers.get("user-agent") ?? "").slice(0, 160);
    after(() =>
      backupLead({
        page: "outreach-btp",
        qualification: "ouverture-lien",
        name: "",
        email: "",
        phone: "",
        details: `Lien ouvert (serveur, peut être un antivirus de messagerie). UA : ${userAgent || "?"}`,
        utm: `jeton=${token}&v=${VARIANT.test(variant) ? variant : "a"}`,
      }),
    );
  }
  return new Response(landingHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "private, no-store",
    },
  });
}

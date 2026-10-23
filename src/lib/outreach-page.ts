import { after, type NextRequest } from "next/server";
import { backupLead } from "@/lib/lead-backup";

// Outreach video pages (owner decision 2026-10-19): one page per trade, linked
// from the prospecting e-mails as /fr/<page>?c=<token>. The token identifies
// the e-mail in the CRM. Served as raw HTML like /questions-ia, French only,
// kept out of search indexes.
//
// The server logs every opening of the link, including the automatic ones made
// by mail security scanners; the page itself reports a real visit from the
// browser (see /api/outreach), which is what counts as a click.

const TOKEN = /^[a-z0-9]{4,16}$/;

export type OutreachTrade = "btp" | "fid" | "rh" | "agc";

export function outreachPage(html: string, trade: OutreachTrade) {
  return async function GET(request: NextRequest) {
    const token = request.nextUrl.searchParams.get("c") ?? "";
    if (TOKEN.test(token)) {
      const userAgent = (request.headers.get("user-agent") ?? "").slice(0, 160);
      after(() =>
        backupLead({
          page: `outreach-${trade}`,
          qualification: "ouverture-lien",
          name: "",
          email: "",
          phone: "",
          details: `Lien ouvert (serveur, peut être un antivirus de messagerie). UA : ${userAgent || "?"}`,
          utm: `jeton=${token}`,
        }),
      );
    }
    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "private, no-store",
      },
    });
  };
}

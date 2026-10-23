import landingHtml from "./landing-html";
import { outreachPage } from "@/lib/outreach-page";

// Outreach video page for communication and marketing agencies (see outreach-page.ts).
export const dynamic = "force-dynamic";
export const GET = outreachPage(landingHtml, "agc");

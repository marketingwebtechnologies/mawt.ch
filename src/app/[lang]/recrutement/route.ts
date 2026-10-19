import landingHtml from "./landing-html";
import { outreachPage } from "@/lib/outreach-page";

// Outreach video page for staffing, recruitment and HR firms (see outreach-page.ts).
export const dynamic = "force-dynamic";
export const GET = outreachPage(landingHtml, "rh");

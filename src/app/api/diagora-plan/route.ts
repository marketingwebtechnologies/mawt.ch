import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";
import { backupLead } from "@/lib/lead-backup";
import { sendLeadNotification } from "@/lib/mail";

// Browser-side events of the private DG Expertise plan page (/fr/plan-3sapckmuj1,
// see src/app/[lang]/plan-3sapckmuj1): a real visit, video progress, a slot
// picked in the calendar, a booking, the time spent. Same storage as the
// outreach pages (the "Leads site" sheet, page "diagora-plan"); the events that
// matter are also mailed to the owner so he knows the moment the page is read.
const schema = z.object({
  evenement: z.enum(["visite", "video-25", "video-50", "video-fin", "cal-creneau", "rdv", "depart"]),
  detail: z.string().trim().max(200).optional().default(""),
});

const NOTIFIES = new Set(["visite", "video-fin", "cal-creneau", "rdv"]);
const LIBELLE: Record<string, string> = {
  visite: "a ouvert la page du plan",
  "video-fin": "a regardé la vidéo jusqu'au bout",
  "cal-creneau": "a choisi un créneau dans le calendrier",
  rdv: "a réservé l'appel",
};

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = JSON.parse(await request.text());
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });

  const limiter = await rateLimit("diagora-plan", 60, 60 * 60);
  if (!limiter.success) return NextResponse.json({ ok: false }, { status: 429 });

  const d = parsed.data;
  await backupLead({
    page: "diagora-plan",
    qualification: d.evenement,
    name: "",
    email: "",
    phone: "",
    details: d.detail,
    utm: "page=plan-3sapckmuj1",
  });
  if (NOTIFIES.has(d.evenement)) {
    await sendLeadNotification({
      name: `Djilloul ${LIBELLE[d.evenement]}`,
      email: "",
      service: "Diagora, page du plan",
      message: [
        `Événement : ${d.evenement}${d.detail ? ` (${d.detail})` : ""}`,
        `Page : https://mawt.ch/fr/plan-3sapckmuj1`,
        `Heure : ${new Date().toLocaleString("fr-CH", { timeZone: "Europe/Zurich" })}`,
      ].join("\n"),
    });
  }
  return NextResponse.json({ ok: true });
}

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSanityWriteClient } from "@/lib/sanity.write-client";
import { rateLimit } from "@/lib/rate-limit";
import { logger } from "@/lib/logger";

// Client-side error collector for the /500-chf landing. The landing posts here
// whenever window.onerror or an unhandled promise rejection fires, so a broken
// page is visible as data instead of being guessed from session replays.
// Capped per session on the client and rate limited here.
const errorSchema = z.object({
  message: z.string().trim().max(500),
  source: z.string().trim().max(300).optional().default(""),
  line: z.number().int().nonnegative().max(9_999_999).optional().default(0),
  column: z.number().int().nonnegative().max(9_999_999).optional().default(0),
  stack: z.string().trim().max(1500).optional().default(""),
  page: z.string().trim().max(300).optional().default(""),
  ua: z.string().trim().max(400).optional().default(""),
  viewport: z.string().trim().max(50).optional().default(""),
  kind: z.enum(["error", "unhandledrejection", "resource"]).optional().default("error"),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // 30 reports per hour per IP: enough for a genuinely broken page, not enough
  // to let anyone flood the dataset.
  const limiter = await rateLimit("js-error", 30, 60 * 60);
  if (!limiter.success) {
    return NextResponse.json({ ok: true, skipped: "rate_limited" });
  }

  const validated = errorSchema.safeParse(body);
  if (!validated.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const data = validated.data;

  try {
    const client = getSanityWriteClient();
    if (client) {
      await client.create({
        _type: "clientError",
        ...data,
        occurredAt: new Date().toISOString(),
      });
    } else {
      console.log("Mocking client error capture:", data);
    }
    logger.warn("Landing client error", { message: data.message, page: data.page });
  } catch (err) {
    logger.error("Could not store client error", err);
  }

  // Always 200: the collector must never create errors of its own.
  return NextResponse.json({ ok: true });
}

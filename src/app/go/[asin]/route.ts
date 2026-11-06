import { NextRequest, NextResponse } from "next/server";
import { amazonUrl, isOnAmazonUk } from "@/lib/amazon";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const ASIN_RE = /^[A-Z0-9]{10}$/;

type Ctx = { params: Promise<{ asin: string }> };

/**
 * Compatibility redirect for /go/{ASIN}. Lock Desk CTAs use direct
 * amazon.co.uk/dp/{ASIN}?tag=… links; this route exists so a mistaken or
 * legacy /go/ASIN URL still lands on the tagged product page (not a 404).
 */
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { asin } = await params;
  const id = String(asin || "")
    .trim()
    .toUpperCase();
  if (!ASIN_RE.test(id) || !isOnAmazonUk(id)) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.redirect(amazonUrl(id), 302);
}

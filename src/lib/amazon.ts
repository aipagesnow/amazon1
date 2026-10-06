const ASIN_RE = /^[A-Z0-9]{10}$/;
const PLACEHOLDER_TAG = "your-tag-21";

/**
 * ASINs with no live bike listing on amazon.co.uk. CTAs for these render a plain
 * "Not currently available on Amazon UK" note instead of a link.
 * B0BLT59NFJ (Litelok X1): listing became an unavailable Moto version, Oct 2026.
 */
const UNAVAILABLE_ASINS = new Set<string>(["B0BLT59NFJ"]);

export function isOnAmazonUk(asin: string): boolean {
  return !UNAVAILABLE_ASINS.has(String(asin || "").trim().toUpperCase());
}

/**
 * Resolve Associates tag: explicit prop, then NEXT_PUBLIC, then server-only env.
 * The tag comes from site settings (Vercel env AMAZON_ASSOCIATE_TAG) only — no
 * tag is hardcoded here. Production builds fail in next.config.ts if it is unset.
 */
export function resolveAssociateTag(explicit?: string): string {
  const fromEnv =
    typeof process !== "undefined"
      ? process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG ||
        process.env.AMAZON_ASSOCIATE_TAG ||
        ""
      : "";
  const t = String(explicit ?? fromEnv).trim();
  if (!t || t === PLACEHOLDER_TAG) return "";
  return t;
}

export function amazonUrl(asin: string, tag?: string): string {
  const id = String(asin || "")
    .trim()
    .toUpperCase();
  if (!ASIN_RE.test(id)) return "https://www.amazon.co.uk/";
  const base = `https://www.amazon.co.uk/dp/${id}`;
  const t = resolveAssociateTag(tag);
  if (!t) return base;
  return `${base}?tag=${encodeURIComponent(t)}`;
}

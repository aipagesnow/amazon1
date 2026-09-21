const ASIN_RE = /^[A-Z0-9]{10}$/;
const PLACEHOLDER_TAG = "your-tag-21";

/** Resolve Associates tag: explicit prop, then NEXT_PUBLIC, then server-only env. */
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

const ASIN_RE = /^[A-Z0-9]{10}$/;
const PLACEHOLDER_TAG = "your-tag-21";

export function amazonUrl(
  asin: string,
  tag = typeof process !== "undefined" ? process.env.AMAZON_ASSOCIATE_TAG || "" : "",
): string {
  const id = String(asin || "")
    .trim()
    .toUpperCase();
  if (!ASIN_RE.test(id)) return "https://www.amazon.co.uk/";
  const base = `https://www.amazon.co.uk/dp/${id}`;
  const t = String(tag || "").trim();
  if (!t || t === PLACEHOLDER_TAG) return base;
  return `${base}?tag=${encodeURIComponent(t)}`;
}

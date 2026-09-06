/** Verified public Sold Secure pages only — do not invent product deep-links. */
export const SOLD_SECURE_APPROVED_SEARCH =
  "https://soldsecure.com/approved-product-search";

export const SOLD_SECURE_PEDAL_CYCLE_RATINGS =
  "https://soldsecure.com/ratings/pedal-cycle";

export const SOLD_SECURE_RATINGS = "https://soldsecure.com/ratings";

/**
 * Plain-text tip for readers confirming a grade on Sold Secure’s public search.
 * Not a URL — Sold Secure product pages are not linked from this site.
 */
export function soldSecureSearchHint(brand: string, name: string): string {
  const brandPart = brand.trim();
  const namePart = name.trim();
  if (!brandPart && !namePart) return "Search Sold Secure’s approved product list";
  if (!brandPart) return `Search for ${namePart}`;
  if (!namePart) return `Search for ${brandPart}`;
  // Avoid "Brand Brand Model" when the short name already starts with the brand
  const hintName = namePart.toLowerCase().startsWith(brandPart.toLowerCase())
    ? namePart
    : `${brandPart} ${namePart}`;
  return `Search for ${hintName}`;
}

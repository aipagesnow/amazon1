import siteJson from "../../data/site.json";

export const site = {
  name: siteJson.name,
  domain: siteJson.domain,
  slug: siteJson.slug,
  niche: siteJson.niche,
  audience: siteJson.audience,
  primaryKeyword: siteJson.primaryKeyword,
  angle: siteJson.angle,
  url: `https://www.${siteJson.domain}`,
  locale: "en-GB",
  /** Publisher — fine to show on About / Contact. */
  operator: "Aivora Digital",
  contact: "aivora@agentmail.to",
  /**
   * Site-wide default "last checked" (Best of, reviews hub, and any review
   * without its own date). Only bump this when every review is re-checked.
   * A single review re-check goes on that product's `lastChecked` in
   * data/products.json instead.
   */
  lastChecked: "28 September 2026",
  /** Quiet research note on review pages — not a personal byline */
  authorLine: "Assessment based on published specs and Sold Secure grades",
  authorHref: "/method",
} as const;

export function pageUrl(path: string): string {
  if (!path || path === "/") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

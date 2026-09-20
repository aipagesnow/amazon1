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
  /** Shown on Best of and reviews for reader freshness */
  lastChecked: "6 September 2026",
  /** Quiet research note on review pages — not a personal byline */
  authorLine: "Assessment based on published specs and Sold Secure grades",
  authorHref: "/method",
} as const;

export function pageUrl(path: string): string {
  if (!path || path === "/") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

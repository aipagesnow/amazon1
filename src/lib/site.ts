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
  operator: "Aivora Digital",
  contact: "",
} as const;

export function pageUrl(path: string): string {
  if (!path || path === "/") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

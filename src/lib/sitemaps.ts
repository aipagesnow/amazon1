import { REVIEW_SLUGS, productBySlug } from "@/lib/products";
import { site } from "@/lib/site";

export const BASE = site.url.replace(/\/$/, "");

export const CHILD_SITEMAP_PATHS = [
  "/sitemap-reviews.xml",
  "/sitemap-guides.xml",
  "/sitemap-core.xml",
] as const;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapUrlset(entries: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
}

export function sitemapIndexXml(childPaths: readonly string[], base: string): string {
  const entries = childPaths.map(
    (path) =>
      `  <sitemap>\n    <loc>${escapeXml(`${base}${path}`)}</loc>\n  </sitemap>`
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</sitemapindex>\n`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

function urlTag(loc: string, extras: string[] = []): string {
  const parts = [`    <loc>${escapeXml(loc)}</loc>`, ...extras.map((e) => `    ${e}`)];
  return `  <url>\n${parts.join("\n")}\n  </url>`;
}

function loc(path: string): string {
  return path === "/" ? BASE : `${BASE}${path}`;
}

export function reviewsPaths(): string[] {
  return ["/reviews", ...REVIEW_SLUGS.map((slug) => `/reviews/${slug}`)];
}

export function guidesPaths(): string[] {
  return [
    "/guide",
    "/guide/bike-lock-types",
    "/guide/shackle-size-lock-security",
    "/guide/cable-locks",
    "/guide/ground-anchors-flats-car-parks",
    "/best/compact-bike-locks-small-flats",
    "/best",
    "/vs/evolution-mini-7-vs-d1000",
    "/vs/d1000-vs-dx1000",
    "/vs/d-lock-vs-chain",
    "/for/commuting",
    "/for/insurance",
    "/for/anti-grinder",
    "/for/delivery-riders",
    "/alternatives/kryptonite-new-york-fahgettaboudit-mini",
  ];
}

export function corePaths(): string[] {
  return ["/", "/method", "/about", "/contact", "/disclosure", "/privacy", "/sitemap"];
}

export function allPaths(): string[] {
  return [...reviewsPaths(), ...guidesPaths(), ...corePaths()];
}

function urlsetFromPaths(paths: string[]): string {
  return wrapUrlset(
    paths.map((path) =>
      urlTag(loc(path), [
        `<changefreq>monthly</changefreq>`,
        `<priority>${path === "/" ? "1.0" : "0.7"}</priority>`,
      ])
    )
  );
}

export function reviewsUrlset(): string {
  return urlsetFromPaths(reviewsPaths());
}
export function guidesUrlset(): string {
  return urlsetFromPaths(guidesPaths());
}
export function coreUrlset(): string {
  return urlsetFromPaths(corePaths());
}
export function indexXml(): string {
  return sitemapIndexXml(CHILD_SITEMAP_PATHS, BASE);
}

export type SitemapLink = { href: string; label: string };
export type SitemapGroup = { heading: string; links: SitemapLink[] };

const LABELS: Record<string, string> = {
  "/": "Home",
  "/method": "How we research",
  "/about": "About",
  "/contact": "Contact",
  "/disclosure": "Disclosure",
  "/privacy": "Privacy",
  "/sitemap": "All pages",
  "/reviews": "Reviews",
  "/guide": "How to choose",
  "/guide/bike-lock-types": "Bike lock types",
  "/guide/shackle-size-lock-security": "Shackle size and security",
  "/guide/cable-locks": "Cable locks",
  "/guide/ground-anchors-flats-car-parks": "Ground anchors",
  "/best": "Best of",
  "/best/compact-bike-locks-small-flats": "Compact locks for flats",
  "/vs/evolution-mini-7-vs-d1000": "Mini-7 vs D1000",
  "/vs/d1000-vs-dx1000": "D1000 vs DX1000",
  "/vs/d-lock-vs-chain": "D-lock vs chain",
  "/for/commuting": "For commuting",
  "/for/insurance": "For insurance",
  "/for/anti-grinder": "Anti-grinder locks",
  "/for/delivery-riders": "Delivery riders",
  "/alternatives/kryptonite-new-york-fahgettaboudit-mini": "Instead of the New York Mini",
};

function labelFor(path: string): string {
  if (LABELS[path]) return LABELS[path];
  const review = path.match(/^\/reviews\/(.+)$/);
  if (review) {
    const product = productBySlug(review[1]);
    if (product) return product.name;
  }
  return path;
}

function linksFor(paths: string[]): SitemapLink[] {
  return paths.map((href) => ({ href, label: labelFor(href) }));
}

/** Grouped indexable pages for the HTML sitemap. Same set as the XML sitemaps. */
export function htmlSitemapGroups(): SitemapGroup[] {
  return [
    { heading: "Reviews", links: linksFor(reviewsPaths()) },
    { heading: "Guides and comparisons", links: linksFor(guidesPaths()) },
    { heading: "This site", links: linksFor(corePaths()) },
  ];
}

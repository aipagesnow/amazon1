import { REVIEW_SLUGS } from "@/lib/products";
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
    "/best",
    "/vs/evolution-mini-7-vs-d1000",
    "/vs/d1000-vs-dx1000",
    "/vs/d-lock-vs-chain",
    "/for/commuting",
    "/for/insurance",
    "/for/anti-grinder",
    "/alternatives/kryptonite-new-york-fahgettaboudit-mini",
  ];
}

export function corePaths(): string[] {
  return ["/", "/method", "/about", "/contact", "/disclosure", "/privacy"];
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

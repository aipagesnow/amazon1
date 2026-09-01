import type { MetadataRoute } from "next";
import { REVIEW_SLUGS } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/guide",
    "/best",
    "/method",
    "/about",
    "/vs/evolution-mini-7-vs-d1000",
    "/vs/d-lock-vs-chain",
    "/for/commuting",
    "/for/insurance",
    "/alternatives/kryptonite-new-york-fahgettaboudit-mini",
    ...REVIEW_SLUGS.map((slug) => `/reviews/${slug}`),
  ];
  return paths.map((path) => ({
    url: path === "/" ? site.url : `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}

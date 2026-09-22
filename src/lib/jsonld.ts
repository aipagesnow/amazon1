import { stripLinks } from "@/lib/rich";
import { pageUrl, site } from "@/lib/site";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: site.locale,
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  extra?: Record<string, unknown>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    inLanguage: site.locale,
    mainEntityOfPage: pageUrl(opts.path),
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    ...opts.extra,
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(item.a) },
    })),
  };
}

export function itemListJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: pageUrl(item.path),
    })),
  };
}

/**
 * Intentionally no Product JSON-LD on review pages.
 * GSC Product snippets need a shop price (offers) or rating fields we will not invent.
 * Article + FAQ cover these pages; affiliate CTAs stay in the HTML only.
 */

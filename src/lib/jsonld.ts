import { Product } from "@/lib/products";
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
      name: site.operator,
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
    author: { "@type": "Organization", name: site.operator },
    publisher: { "@type": "Organization", name: site.operator },
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
 * Product markup for review pages.
 * Google Product snippets require offers, review, or aggregateRating.
 * We attach an editorial Review (no invented stars, no live price Offer).
 * itemReviewed is a Thing, not a nested Product, so we do not re-trigger
 * the same missing-field error on a child Product.
 */
export function productJsonLd(
  product: Product,
  review: { name: string; body: string; path: string },
) {
  const url = pageUrl(review.path);
  const body = stripLinks(review.body);
  const productName = `${product.brand} ${product.name}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: body,
    brand: { "@type": "Brand", name: product.brand },
    sku: product.asin,
    mpn: product.asin,
    url,
    review: {
      "@type": "Review",
      name: review.name,
      author: { "@type": "Organization", name: site.operator },
      publisher: { "@type": "Organization", name: site.operator },
      reviewBody: body,
      inLanguage: site.locale,
      url,
      itemReviewed: {
        "@type": "Thing",
        name: productName,
      },
    },
  };
}

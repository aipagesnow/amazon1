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

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.brand} ${product.name}`,
    brand: { "@type": "Brand", name: product.brand },
    sku: product.asin,
    mpn: product.asin,
  };
}

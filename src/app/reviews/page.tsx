import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { REVIEW_GROUPS, REVIEWS_INTRO, REVIEWS_LEDE } from "@/content/pages";
import { articleJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import {
  ALTERNATIVES_PATH,
  displayName,
  productBySlug,
  REVIEW_SLUGS,
  reviewHref,
} from "@/lib/products";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bike lock reviews",
  description:
    "Six UK D-lock and chain reviews. Each page says who it is for, who should skip it, and the drawbacks.",
  alternates: { canonical: pageUrl("/reviews") },
  openGraph: {
    title: "Bike lock reviews · Lock Desk",
    description:
      "Six UK D-lock and chain reviews. Each page says who it is for, who should skip it, and the drawbacks.",
    url: pageUrl("/reviews"),
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lock Desk — UK bike lock comparisons",
      },
    ],
  },
};

const GROUPS = REVIEW_GROUPS;

export default function ReviewsIndexPage() {
  const items = REVIEW_SLUGS.map((slug) => productBySlug(slug)!).filter(Boolean);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: "Bike lock reviews",
            description: String(metadata.description),
            path: "/reviews",
          }),
          itemListJsonLd(
            items.map((p) => ({
              name: displayName(p),
              path: reviewHref(p) ?? "/reviews",
            })),
          ),
        ]}
      />
      <PageHero
        image={photos.pick}
        alt={photoAlt.pick}
        kicker="Reviews"
        title="Bike lock reviews"
        lede={REVIEWS_LEDE}
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        {REVIEWS_INTRO.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p className="alt-chip">
          Looking for{" "}
          <Link href={ALTERNATIVES_PATH}>alternatives to the New York Mini</Link>?
        </p>
        {GROUPS.map((group) => (
          <section className="card-group" key={group.title}>
            <h2>{group.title}</h2>
            <p className="measure">{group.blurb}</p>
            <div className="reviewed-list">
              {group.slugs.map((slug) => {
                const product = productBySlug(slug);
                return product ? <ProductCard key={product.asin} product={product} /> : null;
              })}
            </div>
          </section>
        ))}
        <p>
          Start with <Link href="/guide">how to choose</Link> if you have not measured the stand yet.
        </p>
      </article>
    </>
  );
}

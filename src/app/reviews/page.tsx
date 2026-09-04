import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { RichText } from "@/components/RichText";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { REVIEW_GROUPS, REVIEWS_INTRO, REVIEWS_LEDE } from "@/content/pages";
import { REVIEWS_INTRO_EXTRA, REVIEWS_META } from "@/content/thickening";
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
  description: REVIEWS_META,
  alternates: { canonical: pageUrl("/reviews") },
  openGraph: {
    title: "Bike lock reviews · Lock Desk",
    description: REVIEWS_META,
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
            description: REVIEWS_META,
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
          <p key={p}>
            <RichText text={p} />
          </p>
        ))}
        <p>
          <RichText text={REVIEWS_INTRO_EXTRA} />
        </p>
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
          Start with <Link href="/guide">how to choose</Link> if you have not measured the stand yet. Job guides: <Link href="/for/commuting">commuting</Link> · <Link href="/for/insurance">insurance</Link>. Comparisons: <Link href="/vs/evolution-mini-7-vs-d1000">Mini-7 vs D1000</Link> · <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link>.
        </p>
      </article>
    </>
  );
}

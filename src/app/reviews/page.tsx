import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { articleJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { displayName, productBySlug, REVIEW_SLUGS, reviewHref } from "@/lib/products";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bike lock reviews",
  description:
    "Six UK D-lock and chain reviews from Lock Desk. Verdict first. Not hands-on lab tests. Not a shop.",
  alternates: { canonical: pageUrl("/reviews") },
  openGraph: {
    title: "Bike lock reviews · Lock Desk",
    description: "Six full reviews from the slice. Verdict-led. Not a product grid.",
    url: pageUrl("/reviews"),
    images: [{ url: photos.pick, alt: photoAlt.pick }],
  },
};

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
        title="Reviewed on this desk"
        lede="Six full reviews. Verdict first, then the good, the bad, and what we would change. We have not cut these open."
        caption={EDITORIAL_CREDIT}
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        <p>
          The OnGuard Pitbulls and the Hiplok DX1000 stay in the slice without a first-launch review
          page. They are real ASINs, not filler. See them as context on{" "}
          <Link href="/best">best bike locks UK</Link>.
        </p>
        <div className="reviewed-list">
          {items.map((product) => (
            <ProductCard key={product.asin} product={product} />
          ))}
        </div>
        <p>
          Start with <Link href="/guide">how to choose</Link> if you have not measured the rack yet.
        </p>
      </article>
    </>
  );
}

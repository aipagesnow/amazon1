import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { GHOST_NOTE } from "@/content/editorial";
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
    "Six UK D-lock and chain reviews. Each page says who it is for, who should skip it, and the drawbacks. Not hands-on lab tests.",
  alternates: { canonical: pageUrl("/reviews") },
  openGraph: {
    title: "Bike lock reviews · Lock Desk",
    description:
      "Six UK D-lock and chain reviews. Each page says who it is for, who should skip it, and the drawbacks. Not hands-on lab tests.",
    url: pageUrl("/reviews"),
    images: [{ url: photos.pick, alt: photoAlt.pick }],
  },
};

const GROUPS = [
  {
    title: "Sold Secure Diamond D-locks",
    blurb:
      "X1 (1.7 kg, pedal and powered Diamond, 101 × 197 mm); D1000 (1.9 kg, 92 × 155 mm, no mount); 540 (1.8 kg, 108 × 300 mm, pedal Diamond / powered Gold).",
    slugs: ["litelok-x1", "hiplok-d1000", "abus-granit-xplus-540"],
  },
  {
    title: "Sold Secure Gold D-locks",
    blurb:
      "Mini-7 (1.61 kg, mount, cable — the cable is not Gold); New York Mini (2.06 kg, 18 mm, no mount).",
    slugs: ["kryptonite-evolution-mini-7", "kryptonite-new-york-fahgettaboudit-mini"],
  },
  {
    title: "Chain for home and extra length",
    blurb: "1410 (100 cm, 14 mm, 4.9 kg).",
    slugs: ["kryptonite-new-york-fahgettaboudit-1410"],
  },
] as const;

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
        lede="Six D-locks and chains, from Sold Secure Gold to Diamond. Each review says who it is for, who should skip it, and the main drawbacks. These are not hands-on lab tests."
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
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
        <aside className="ghost-note">
          <p className="kicker">Not reviewed yet</p>
          <p>{GHOST_NOTE}</p>
        </aside>
        <p>
          Start with <Link href="/guide">how to choose</Link> if you have not measured the rack yet.
        </p>
      </article>
    </>
  );
}

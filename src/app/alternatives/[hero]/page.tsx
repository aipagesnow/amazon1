import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { articleJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { displayName, productBySlug } from "@/lib/products";
import { pageUrl } from "@/lib/site";

const HERO = "kryptonite-new-york-fahgettaboudit-mini";

export function generateStaticParams() {
  return [{ hero: HERO }];
}

type Props = { params: Promise<{ hero: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hero: heroSlug } = await params;
  if (heroSlug !== HERO) return {};
  const title = "Best alternatives to the Kryptonite New York Fahgettaboudit Mini";
  const description =
    "If the New York Mini is too heavy or too small, what to buy instead from our UK slice.";
  const url = pageUrl(`/alternatives/${HERO}`);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} · Lock Desk`, description, url },
  };
}

export default async function AlternativesPage({ params }: Props) {
  const { hero: heroSlug } = await params;
  if (heroSlug !== HERO) notFound();
  const hero = productBySlug(HERO)!;
  const alts = [
    productBySlug("kryptonite-evolution-mini-7")!,
    productBySlug("litelok-x1")!,
    productBySlug("hiplok-d1000")!,
    productBySlug("kryptonite-new-york-fahgettaboudit-1410")!,
  ];

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Best alternatives to the Kryptonite New York Fahgettaboudit Mini",
          description:
            "Carryable Gold, Diamond, or a New York chain — instead of the 2.06 kg Mini.",
          path: `/alternatives/${HERO}`,
        })}
      />
      <PageHero
        image={photos.pick}
        alt={photoAlt.pick}
        kicker="Alternatives"
        title="Best alternatives to the Kryptonite New York Fahgettaboudit Mini"
        lede="The New York Mini is an 18 mm Gold D-lock at 2.06 kg with no mount in our spec. Most people who type this query want either something they will carry, or Diamond, or a chain with reach."
        caption={EDITORIAL_CREDIT}
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        <p>
          Flagship in this slice:{" "}
          <Link href="/reviews/kryptonite-new-york-fahgettaboudit-mini">{displayName(hero)}</Link>.
          We are not obliged to recommend it. The name is famous. The Evolution Mini-7 is the New
          York family’s better commute lock.
        </p>
        <h2>Instead of the Mini</h2>
        <ul>
          <li>
            <strong>Carry Gold:</strong> Evolution Mini-7 — lighter, mount, cable.
          </li>
          <li>
            <strong>Step to Diamond:</strong> Litelok X1, or D1000 if the small shackle fits.
          </li>
          <li>
            <strong>Stay in the New York family but need length:</strong> the 1410 chain, as a house
            lock, not a bag lock.
          </li>
        </ul>
        <div className="cards">
          {alts.map((p) => (
            <ProductCard key={p.asin} product={p} />
          ))}
        </div>
        <p>
          <Link href="/reviews/kryptonite-new-york-fahgettaboudit-mini">New York Mini review</Link> ·{" "}
          <Link href="/guide">How to choose</Link>
        </p>
      </article>
    </>
  );
}

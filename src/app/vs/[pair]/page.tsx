import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { CompareTable } from "@/components/SpecTable";
import { articleJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { displayName, Product, productBySlug, reviewHref } from "@/lib/products";
import { pageUrl } from "@/lib/site";

type Pair = {
  slug: string;
  title: string;
  description: string;
  a: string;
  b: string;
  intro: string;
  winnerFor: { product: string; reader: string; why: string };
  otherFor: { product: string; reader: string; why: string };
};

const PAIRS: Pair[] = [
  {
    slug: "evolution-mini-7-vs-d1000",
    title: "Kryptonite Evolution Mini-7 vs Hiplok D1000",
    description:
      "Gold Mini with a cable versus a Diamond anti-grinder D-lock. Who each is for, from our UK slice.",
    a: "kryptonite-evolution-mini-7",
    b: "hiplok-d1000",
    intro:
      "This is the search we keep seeing: the Gold commuter Mini versus the Diamond lock with the anti-grinder story. They are not rivals for the same rider. One is the lock you will carry. The other is the lock you buy when the street is ugly and the policy is fussy.",
    winnerFor: {
      product: "kryptonite-evolution-mini-7",
      reader: "a weekday commuter whose policy names Gold",
      why: "1.61 kg, frame mount, cable in the box. You will take it. The cable is not Gold.",
    },
    otherFor: {
      product: "hiplok-d1000",
      reader: "someone parking a high-value bike on a known-bad rack, who has measured 92 × 155 mm",
      why: "Pedal and powered Diamond, sold as anti-grinder. Heavier, no mount, tight shackle.",
    },
  },
  {
    slug: "d-lock-vs-chain",
    title: "D-lock vs chain lock",
    description:
      "A Gold Mini D-lock versus a 100 cm New York chain. Carry versus reach, from our UK slice.",
    a: "kryptonite-evolution-mini-7",
    b: "kryptonite-new-york-fahgettaboudit-1410",
    intro:
      "A D-lock and a chain do different jobs. The Mini-7 is what you take on the bike. The New York 1410 is 4.9 kg of Gold chain for when the only solid object is too far for a Mini. Using both is common. Pretending the chain is a commute lock is how it stays in the shed.",
    winnerFor: {
      product: "kryptonite-evolution-mini-7",
      reader: "anyone locking to a rack they can hug with a Mini",
      why: "You will carry 1.61 kg. You will not carry 4.9 kg twice a day.",
    },
    otherFor: {
      product: "kryptonite-new-york-fahgettaboudit-1410",
      reader: "home, a ground anchor, or a post a D-lock cannot reach",
      why: "100 cm of 14 mm chain. Leave it where the bike lives.",
    },
  },
];

export function generateStaticParams() {
  return PAIRS.map((p) => ({ pair: p.slug }));
}

function pairOf(slug: string): Pair | undefined {
  return PAIRS.find((p) => p.slug === slug);
}

type Props = { params: Promise<{ pair: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pair: slug } = await params;
  const pair = pairOf(slug);
  if (!pair) return {};
  const url = pageUrl(`/vs/${pair.slug}`);
  const image = pair.slug === "d-lock-vs-chain" ? photos.vs : photos.pick;
  const alt = pair.slug === "d-lock-vs-chain" ? photoAlt.vs : photoAlt.pick;
  return {
    title: pair.title,
    description: pair.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${pair.title} · Lock Desk`,
      description: pair.description,
      url,
      images: [{ url: image, alt }],
    },
  };
}

function ProductCol({
  product,
  kicker,
}: {
  product: Product;
  kicker: string;
}) {
  const href = reviewHref(product);
  return (
    <div className="vs-col">
      <p className="kicker">{kicker}</p>
      <h3>{displayName(product)}</h3>
      {href ? (
        <p>
          <Link href={href}>Read the review</Link>
        </p>
      ) : null}
      <SeeOnAmazon asin={product.asin} className="see-on-amazon" />
    </div>
  );
}

export default async function VsPage({ params }: Props) {
  const { pair: slug } = await params;
  const pair = pairOf(slug);
  if (!pair) notFound();
  const a = productBySlug(pair.a)!;
  const b = productBySlug(pair.b)!;
  const winner = productBySlug(pair.winnerFor.product)!;
  const other = productBySlug(pair.otherFor.product)!;

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: pair.title,
          description: pair.description,
          path: `/vs/${pair.slug}`,
        })}
      />
      <PageHero
        image={pair.slug === "d-lock-vs-chain" ? photos.vs : photos.bannerCommute}
        alt={pair.slug === "d-lock-vs-chain" ? photoAlt.vs : photoAlt.bannerCommute}
        kicker="Head to head"
        title={pair.title}
        lede={pair.intro}
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        <div className="vs-split">
          <ProductCol product={a} kicker="Lock A" />
          <ProductCol product={b} kicker="Lock B" />
        </div>
        <h2>Specs side by side</h2>
        <CompareTable products={[a, b]} />
        <h2>Who each is for</h2>
        <div className="vs-split">
          <div className="vs-col">
            <p className="kicker">For {pair.winnerFor.reader}</p>
            <h3>
              <Link href={reviewHref(winner) ?? "/best"}>{displayName(winner)}</Link>
            </h3>
            <p>{pair.winnerFor.why}</p>
          </div>
          <div className="vs-col">
            <p className="kicker">For {pair.otherFor.reader}</p>
            <h3>
              <Link href={reviewHref(other) ?? "/best"}>{displayName(other)}</Link>
            </h3>
            <p>{pair.otherFor.why}</p>
          </div>
        </div>
        <p>
          We are not trashing one to sell the other. If the Mini will not close, neither “winner”
          helps — see the <Link href="/reviews/abus-granit-xplus-540">ABUS 540</Link> or the chain.
        </p>
        <p>
          <Link href="/guide">How to choose</Link> · <Link href="/best">Best bike locks</Link>
        </p>
      </article>
    </>
  );
}

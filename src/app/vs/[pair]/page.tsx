import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RichText } from "@/components/RichText";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { CompareTable } from "@/components/SpecTable";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { displayName, Product, productBySlug, reviewHref } from "@/lib/products";
import { pageUrl } from "@/lib/site";

type Faq = { q: string; a: string };

type Pair = {
  slug: string;
  title: string;
  description: string;
  a: string;
  b: string;
  intro: string;
  whoEach: [string, string];
  afterTable: string[];
  faqs: Faq[];
  leadWithAntiGrinder?: boolean;
  tableNote?: string;
};

const PAIRS: Pair[] = [
  {
    slug: "evolution-mini-7-vs-d1000",
    title: "Kryptonite Evolution Mini-7 vs Hiplok D1000",
    description:
      "Gold Mini with a cable versus a Diamond anti-grinder D-lock. Who each is for, and who should skip both for the X1.",
    a: "kryptonite-evolution-mini-7",
    b: "hiplok-d1000",
    intro:
      "This compares a Sold Secure Gold commute Mini with a Diamond D-lock sold as anti-grinder. They suit different riders.",
    whoEach: [
      "The Mini-7 is Gold you will carry: 1.61 kg, a mount, and a cable.",
      "The D1000 is Diamond with a tight shackle: 1.9 kg, no mount, 92 × 155 mm.",
    ],
    afterTable: [
      "The Evolution Mini-7 is 1.61 kg, Gold, a frame mount, and a cable in the box. The cable is not Gold. If that meets the policy, this is the lock that will actually be on the bike.",
      "The D1000 is pedal and powered Diamond, sold as anti-grinder, 1.9 kg, no mount, and a 92 × 155 mm hole. Worth it on a known high-theft rack you have measured. If you will not carry 1.9 kg with no mount, it will stay at home.",
      "If neither shackle will close, look at the [ABUS 540](/reviews/abus-granit-xplus-540) — not a thicker Mini. If you wanted Diamond with a usable hole and 1.7 kg, that is the [Litelok X1](/reviews/litelok-x1), not this comparison.",
    ],
    faqs: [
      {
        q: "Gold or Diamond for this street?",
        a: "Gold is what many UK household policies still name. Diamond is the higher pedal grade. Read the wording you signed. We are not your broker.",
      },
      {
        q: "D1000 or DX1000?",
        a: "D1000 is 92 × 155 mm, 1.9 kg. DX1000 is 112 × 205 mm, 2.75 kg and has no full review on this site yet. Buy the one that closes.",
      },
    ],
    leadWithAntiGrinder: true,
    tableNote:
      "Sold as angle-grinder resistant is manufacturer language. Independent grade on the D1000 is Diamond; cut-times are marketing.",
  },
  {
    slug: "d-lock-vs-chain",
    title: "D-lock vs chain lock",
    description:
      "A Gold Mini D-lock versus a 100 cm New York chain. Carry versus extra length. Using both is common; commuting with 4.9 kg is not.",
    a: "kryptonite-evolution-mini-7",
    b: "kryptonite-new-york-fahgettaboudit-1410",
    intro:
      "A D-lock and a chain do different jobs. The Mini-7 is the lock you take on the bike. The New York 1410 is a 4.9 kg Gold chain for when a Mini cannot reach the only solid object. Using both is common. Commuting with the chain is not.",
    whoEach: [
      "The Mini-7 is for carrying on a commute.",
      "The 1410 is for extra length at home.",
    ],
    afterTable: [
      "A D-lock is for a tight rack. A chain is for extra length. That is the main difference.",
      "The Evolution Mini-7 is what you take on the bike: 1.61 kg, a mount, Gold. You will carry it. You will not carry 4.9 kg twice a day.",
      "The New York 1410 is 100 cm of 14 mm Gold chain for a home, a garden, a ground anchor, or a post a Mini cannot close around. Leave it where the bike is stored.",
      "These are not rivals. Careful riders use both and only carry the D-lock. If the Mini will not close, neither of these is the answer — see the [ABUS 540](/reviews/abus-granit-xplus-540).",
    ],
    faqs: [
      {
        q: "Can I commute with the 1410?",
        a: "Not twice a day. 4.9 kg stays by the door.",
      },
      {
        q: "Does looping the chain twice make it Diamond?",
        a: "No. It can reduce slack. It does not change the Sold Secure grade, and it does not turn a lamp-post into an approved anchor.",
      },
    ],
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

function ProductCol({ product, kicker }: { product: Product; kicker: string }) {
  const href = reviewHref(product);
  return (
    <div className="vs-col">
      <p className="kicker">{kicker}</p>
      <h3>{displayName(product)}</h3>
      {href ? (
        <p>
          <Link href={href} className="primary-link">
            Read the review
          </Link>
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

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: pair.title,
            description: pair.description,
            path: `/vs/${pair.slug}`,
          }),
          faqJsonLd(pair.faqs),
        ]}
      />
      <PageHero
        image={pair.slug === "d-lock-vs-chain" ? photos.vs : photos.bannerCommute}
        alt={pair.slug === "d-lock-vs-chain" ? photoAlt.vs : photoAlt.bannerCommute}
        kicker="Comparison"
        title={pair.title}
        lede={pair.intro}
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        <div className="who-each">
          {pair.whoEach.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <h2>Specs side by side</h2>
        <CompareTable
          products={[a, b]}
          leadWithAntiGrinder={pair.leadWithAntiGrinder}
          caption={pair.tableNote}
        />
        {pair.afterTable.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
        <h2>Read the reviews</h2>
        <div className="vs-split">
          <ProductCol product={a} kicker={a.specs?.type ?? "Lock"} />
          <ProductCol product={b} kicker={b.specs?.type ?? "Lock"} />
        </div>
        <h2>Common questions</h2>
        <div className="faq-list">
          {pair.faqs.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
        <p>
          <Link href="/guide">How to choose</Link> · <Link href="/best">Best of</Link>
        </p>
      </article>
    </>
  );
}

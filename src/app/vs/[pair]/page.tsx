import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RichText } from "@/components/RichText";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { CompareTable } from "@/components/SpecTable";
import { pairOf, PAIRS } from "@/content/pages";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { displayName, Product, productBySlug, reviewHref } from "@/lib/products";
import { pageUrl } from "@/lib/site";

export function generateStaticParams() {
  return PAIRS.map((p) => ({ pair: p.slug }));
}

type Props = { params: Promise<{ pair: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pair: slug } = await params;
  const pair = pairOf(slug);
  if (!pair) return {};
  const url = pageUrl(`/vs/${pair.slug}`);
  return {
    title: pair.title,
    description: pair.description,
    alternates: { canonical: url },
        openGraph: {
      title: `${pair.title} · Lock Desk`,
      description: pair.description,
      url,
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
        <h2>Side by side</h2>
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
              <p>
                <RichText text={faq.a} />
              </p>
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

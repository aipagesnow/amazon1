import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { RichText } from "@/components/RichText";
import { CASES, useOf } from "@/content/pages";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { productBySlug } from "@/lib/products";
import { pageUrl } from "@/lib/site";

export function generateStaticParams() {
  return CASES.map((c) => ({ use: c.slug }));
}

type Props = { params: Promise<{ use: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { use } = await params;
  const item = useOf(use);
  if (!item) return {};
  const url = pageUrl(`/for/${item.slug}`);
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: url },
    openGraph: { title: `${item.title} · Lock Desk`, description: item.description, url },
  };
}

export default async function UseCasePage({ params }: Props) {
  const { use } = await params;
  const item = useOf(use);
  if (!item) notFound();
  const products = item.picks.map((slug) => productBySlug(slug)!);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: item.title,
            description: item.description,
            path: `/for/${item.slug}`,
          }),
          faqJsonLd(item.faqs),
        ]}
      />
      <PageHero
        image={item.slug === "insurance" ? photos.insurance : photos.commute}
        alt={item.slug === "insurance" ? photoAlt.insurance : photoAlt.commute}
        kicker="Guide"
        title={item.title}
        lede={item.description}
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        {item.fold ? (
          <div className="fold-block">
            <article>
              <p className="kicker">If the policy says Gold</p>
              <p>
                <RichText text={item.fold.gold} />
              </p>
            </article>
            <article>
              <p className="kicker">If the policy says Diamond</p>
              <p>
                <RichText text={item.fold.diamond} />
              </p>
            </article>
          </div>
        ) : null}

        {item.checklist ? (
          <div className="chooser">
            <h3>Checklist</h3>
            <ul>
              {item.checklist.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <h2>{item.h2}</h2>
        <div className="cards">
          {products.map((p) => (
            <ProductCard key={p.asin} product={p} />
          ))}
        </div>

        <p>
          <strong>Not for:</strong> {item.notFor}
        </p>
        {item.policy?.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {item.records ? <p>{item.records}</p> : null}
        {item.body.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>Common questions</h2>
        <div className="faq-list">
          {item.faqs.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>
                <RichText text={faq.a} />
              </p>
            </div>
          ))}
        </div>
        <p>
          <Link href="/guide">How to choose a bike lock</Link> · <Link href="/best">Best of</Link> ·{" "}
          <Link href="/method">How we research</Link>
        </p>
      </article>
    </>
  );
}

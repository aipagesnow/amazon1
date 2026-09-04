import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { RichText } from "@/components/RichText";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { ALT_BODY, ALT_FAQS, ALT_HERO, ALT_LEDE, ALT_TITLE } from "@/content/pages";
import { ALT_BODY_EXTRA, ALT_META } from "@/content/thickening";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { ALTERNATIVES_PATH, displayName, productBySlug } from "@/lib/products";
import { pageUrl } from "@/lib/site";

export function generateStaticParams() {
  return [{ hero: ALT_HERO }];
}

type Props = { params: Promise<{ hero: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hero: heroSlug } = await params;
  if (heroSlug !== ALT_HERO) return {};
  const url = pageUrl(ALTERNATIVES_PATH);
  return {
    title: ALT_TITLE,
    description: ALT_META,
    alternates: { canonical: url },
        openGraph: { title: `${ALT_TITLE} · Lock Desk`, description: ALT_META, url, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Lock Desk — UK bike lock comparisons" }] },
  };
}

export default async function AlternativesPage({ params }: Props) {
  const { hero: heroSlug } = await params;
  if (heroSlug !== ALT_HERO) notFound();
  const hero = productBySlug(ALT_HERO)!;
  const mini7 = productBySlug("kryptonite-evolution-mini-7")!;
  const x1 = productBySlug("litelok-x1")!;
  const d1000 = productBySlug("hiplok-d1000")!;
  const chain = productBySlug("kryptonite-new-york-fahgettaboudit-1410")!;

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: ALT_TITLE,
            description: ALT_META,
            path: ALTERNATIVES_PATH,
          }),
          faqJsonLd(ALT_FAQS),
        ]}
      />
      <PageHero
        image={photos.bannerThick}
        alt={photoAlt.bannerThick}
        kicker="Alternatives"
        title="Best alternatives to the Kryptonite New York Mini"
        lede={ALT_LEDE}
        caption={EDITORIAL_CREDIT}
        overlay
        tight
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        {ALT_BODY.map((p) => (
          <p key={p}>
            <RichText text={p} />
          </p>
        ))}
        {ALT_BODY_EXTRA.map((p) => (
          <p key={p}>
            <RichText text={p} />
          </p>
        ))}
        <p>
          The review is{" "}
          <Link href="/reviews/kryptonite-new-york-fahgettaboudit-mini">{displayName(hero)}</Link>.
        </p>
        <p className="first-pick">
          First pick if you will carry a lock to work:{" "}
          <Link href="/reviews/kryptonite-evolution-mini-7">{displayName(mini7)}</Link>.
        </p>

        <div className="fork-list">
          <article className="fork-card">
            <p className="kicker">Best to carry</p>
            <h2>
              <Link href="/reviews/kryptonite-evolution-mini-7">{displayName(mini7)}</Link>
            </h2>
            <p>1.61 kg, Gold, frame mount, cable in the box. The cable is not Gold.</p>
            <p>
              <Link href="/reviews/kryptonite-evolution-mini-7" className="primary-link">
                Read the review
              </Link>
            </p>
            <SeeOnAmazon asin={mini7.asin} variant="text" />
          </article>
          <article className="fork-card">
            <p className="kicker">Best for insurance</p>
            <h2>
              <Link href="/reviews/litelok-x1">{displayName(x1)}</Link>
            </h2>
            <p>Diamond for bikes and e-bikes, 1.7 kg, 101 × 197 mm locking area.</p>
            <p>
              {displayName(d1000)} only if you have measured 92 × 155 mm.{" "}
              <Link href="/reviews/hiplok-d1000">Read the D1000 review</Link>.
            </p>
            <p>
              <Link href="/reviews/litelok-x1" className="primary-link">
                Read the review
              </Link>
            </p>
            <p>
              <SeeOnAmazon asin={x1.asin} variant="text" />
              {" · "}
              <SeeOnAmazon asin={d1000.asin} variant="text" />
            </p>
          </article>
          <article className="fork-card">
            <p className="kicker">Best reach</p>
            <h2>
              <Link href="/reviews/kryptonite-new-york-fahgettaboudit-1410">
                {displayName(chain)}
              </Link>
            </h2>
            <p>100 cm, 14 mm, 4.9 kg. A home lock, not a commute lock.</p>
            <p>
              <Link href="/reviews/kryptonite-new-york-fahgettaboudit-1410" className="primary-link">
                Read the review
              </Link>
            </p>
            <SeeOnAmazon asin={chain.asin} variant="text" />
          </article>
        </div>

        <h2>Common questions</h2>
        <div className="faq-list">
          {ALT_FAQS.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>
                <RichText text={faq.a} />
              </p>
            </div>
          ))}
        </div>
        <p>
          <Link href="/reviews/kryptonite-new-york-fahgettaboudit-mini">New York Mini review</Link> ·{" "}
          <Link href="/guide">How to choose</Link> · <Link href="/best">Best of</Link> ·{" "}
          <Link href="/for/commuting">Commuting</Link> ·{" "}
          <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link>
        </p>
      </article>
    </>
  );
}

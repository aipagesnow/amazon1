import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { ALTERNATIVES_PATH, displayName, productBySlug } from "@/lib/products";
import { pageUrl } from "@/lib/site";

const HERO = "kryptonite-new-york-fahgettaboudit-mini";

const TITLE = "Instead of the New York Mini";
const META =
  "2.06 kg, no mount, 18 mm Gold. If that is too heavy or too small, carry the Evolution Mini-7, step to Diamond, or keep a New York chain at home.";

const FAQS = [
  {
    q: "Should I still buy the New York Mini?",
    a: "Only as a thick second lock you will not have to clip on every morning. Most commuters should buy the Evolution Mini-7.",
  },
  {
    q: "Is the Mini on the best-of page?",
    a: "No. Five we would pick live on best bike locks UK. This Mini is reviewed because people type the name, not because we would commute with it.",
  },
];

export function generateStaticParams() {
  return [{ hero: HERO }];
}

type Props = { params: Promise<{ hero: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hero: heroSlug } = await params;
  if (heroSlug !== HERO) return {};
  const url = pageUrl(ALTERNATIVES_PATH);
  return {
    title: TITLE,
    description: META,
    alternates: { canonical: url },
    openGraph: { title: `${TITLE} · Lock Desk`, description: META, url },
  };
}

export default async function AlternativesPage({ params }: Props) {
  const { hero: heroSlug } = await params;
  if (heroSlug !== HERO) notFound();
  const hero = productBySlug(HERO)!;
  const mini7 = productBySlug("kryptonite-evolution-mini-7")!;
  const x1 = productBySlug("litelok-x1")!;
  const d1000 = productBySlug("hiplok-d1000")!;
  const chain = productBySlug("kryptonite-new-york-fahgettaboudit-1410")!;

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: TITLE,
            description: META,
            path: ALTERNATIVES_PATH,
          }),
          faqJsonLd(FAQS),
        ]}
      />
      <PageHero
        image={photos.bannerThick}
        alt={photoAlt.bannerThick}
        kicker="Alternatives"
        title="The New York Mini is famous. It is usually the wrong lock."
        lede="The Fahgettaboudit Mini is an 18 mm Sold Secure Gold D-lock at 2.06 kg, with no mount and no cable on our records. People search it because of the name. Most of them need a lock they will carry, or Diamond, or a metre of chain by the door."
        caption={EDITORIAL_CREDIT}
        overlay
        tight
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        <p>
          Stay with it only if you want an 18 mm Gold Mini as a second lock on a heavy bike, and you
          will not miss a mount or a cable. The review is{" "}
          <Link href="/reviews/kryptonite-new-york-fahgettaboudit-mini">{displayName(hero)}</Link>.
          There is no See on Amazon for this Mini on this page.
        </p>
        <p className="first-pick">
          First pick if you will carry a lock to work:{" "}
          <Link href="/reviews/kryptonite-evolution-mini-7">{displayName(mini7)}</Link>.
        </p>

        <div className="fork-list">
          <article className="fork-card">
            <p className="kicker">Best carry</p>
            <h2>
              <Link href="/reviews/kryptonite-evolution-mini-7">{displayName(mini7)}</Link>
            </h2>
            <p>1.61 kg, Gold, mount, cable in the box. The cable is not Gold.</p>
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
            <p>Pedal and powered Diamond, 1.7 kg, 101 × 197 mm.</p>
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
            <p>100 cm, 14 mm, 4.9 kg. A house lock, not a bag lock.</p>
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
          {FAQS.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>
                {faq.q === "Is the Mini on the best-of page?" ? (
                  <>
                    No. Five we would pick live on{" "}
                    <Link href="/best">best bike locks UK</Link>. This Mini is reviewed because
                    people type the name, not because we would commute with it.
                  </>
                ) : (
                  faq.a
                )}
              </p>
            </div>
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

import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { websiteJsonLd } from "@/lib/jsonld";
import {
  displayName,
  EDITOR_PICK_ASIN,
  productByAsin,
  productBySlug,
  REVIEW_SLUGS,
} from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — UK bike lock comparisons`,
  description:
    "A small UK magazine on D-locks and chains. Sold Secure, insurance, and the lock you will still take to work. Not a shop.",
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.name} — UK bike lock comparisons`,
    description:
      "Sold Secure ratings, insurance, and what you will actually carry. Editorial comparisons, not a product grid.",
    url: site.url,
  },
};

export default function HomePage() {
  const pick = productByAsin(EDITOR_PICK_ASIN)!;
  const alt = productBySlug("hiplok-d1000")!;
  const peek = REVIEW_SLUGS.map((slug) => productBySlug(slug)!).filter(Boolean).slice(0, 6);

  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <div className="wrap">
        <DisclosureStrip />
        <section className="hero-essay">
          <p className="kicker">{site.niche}</p>
          <h1>The lock you will still carry is the only lock that counts.</h1>
          <p className="lede">
            Lock Desk is a UK comparison magazine for D-locks and chains. We write for commuters
            and cyclists who need a rating their insurer will accept — and a weight they will not
            leave in the hall. We are not a shop. We do not pretend we spent six weeks attacking
            these with grinders.
          </p>
          <p className="measure">
            Gold and Diamond are different Sold Secure grades. A cable in the box is usually not
            part of the approval. Mini shackles do not fit every Sheffield stand. That is the job
            of this site: say those things plainly, then point you at a review and a See on Amazon
            button.
          </p>
        </section>

        <section className="pick">
          <p className="kicker">Editor’s pick</p>
          <h2>{displayName(pick)}</h2>
          <p>
            <strong>Why we like it.</strong> Pedal Diamond and powered Diamond, 1.7 kg, and a 101 ×
            197 mm locking area. That is the overlap of “insurer will listen” and “you might take it
            on the train.”
          </p>
          <p>
            <strong>Who it is for.</strong> A bike you would be sick to lose, parked in public, when
            Gold feels thin.
          </p>
          <p>
            <strong>What we’d change.</strong> Put a mount in the box. A Diamond lock that stays
            under the desk is a Gold lock in real life.
          </p>
          <p>
            <strong>Best alternative.</strong>{" "}
            <Link href="/reviews/hiplok-d1000">{displayName(alt)}</Link> if you want Hiplok’s smaller
            anti-grinder D-lock and you have already measured the rack.
          </p>
          <p>
            <Link href="/reviews/litelok-x1" className="primary-link">
              Read the X1 review
            </Link>
          </p>
          <SeeOnAmazon asin={pick.asin} className="btn-amazon" />
        </section>

        <section>
          <p className="kicker">Best of</p>
          <h2>
            <Link href="/best">Best bike locks UK</Link>
          </h2>
          <p className="measure">
            Five from the slice, compared on Sold Secure grade, weight, and locking area. No “number
            one for everyone.” No frozen prices.
          </p>
        </section>

        <section className="teaser-row">
          <article className="panel">
            <p className="kicker">Head to head</p>
            <h3>
              <Link href="/vs/evolution-mini-7-vs-d1000">Evolution Mini-7 vs Hiplok D1000</Link>
            </h3>
            <p>Gold you will carry, or Diamond you might not. The pair people actually type.</p>
          </article>
          <article className="panel">
            <p className="kicker">Head to head</p>
            <h3>
              <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link>
            </h3>
            <p>Mini-7 on the bike versus a 4.9 kg New York chain by the door.</p>
          </article>
        </section>

        <section>
          <p className="kicker">How to choose</p>
          <h2>
            <Link href="/guide">Sold Secure, insurance, and fit</Link>
          </h2>
          <p className="measure">
            Gold vs Diamond, why cables do not count, and a chooser at the end: which lock in this
            slice is for whom.
          </p>
        </section>

        <section className="teaser-row">
          <article className="panel">
            <h3>
              <Link href="/for/commuting">Best bike lock for commuting</Link>
            </h3>
            <p>If you will not carry it, it is not your commute lock.</p>
          </article>
          <article className="panel">
            <h3>
              <Link href="/for/insurance">Best bike lock for insurance</Link>
            </h3>
            <p>Match the grade on the policy, then check the approved list.</p>
          </article>
        </section>

        <section>
          <p className="kicker">Catalogue peek</p>
          <h2>Reviewed in this issue</h2>
          <p className="measure">
            Six full reviews. The OnGuard Pitbulls and the Hiplok DX1000 stay in the slice for
            later; they appear on the best-of page as context, not as padded doorway pages.
          </p>
          <div className="cards">
            {peek.map((product) => (
              <ProductCard key={product.asin} product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

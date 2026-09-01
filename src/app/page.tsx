import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { LockTile } from "@/components/LockTile";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { websiteJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import {
  BEST_OF_ASINS,
  displayName,
  EDITOR_PICK_ASIN,
  productByAsin,
  productBySlug,
} from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — UK bike lock comparisons`,
  description:
    "A small UK magazine on D-locks and chains. Sold Secure, insurance, and the lock you will still take to work. Not a shop.",
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.name} — UK bike lock comparisons`,
    description: "Sold Secure, insurance, and the lock you will still carry. A UK magazine, not a shop.",
    url: site.url,
    images: [{ url: photos.cover, alt: photoAlt.cover }],
  },
};

export default function HomePage() {
  const pick = productByAsin(EDITOR_PICK_ASIN)!;
  const alt = productBySlug("hiplok-d1000")!;
  const five = BEST_OF_ASINS.map((asin) => productByAsin(asin)!).filter(Boolean);

  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <section className="cover">
        <div className="cover-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos.cover} alt={photoAlt.cover} />
        </div>
        <div className="cover-shade" aria-hidden="true" />
        <div className="wrap cover-copy">
          <div className="hero-panel">
            <p className="cover-kicker">D-locks and chains · United Kingdom</p>
            <h1>The lock you will still carry is the only lock that counts.</h1>
            <p className="lede">
              A UK magazine for people who need a Sold Secure grade their insurer will accept, and a
              weight they will still take out of the house. Not a shop. Not a test lab.
            </p>
            <DisclosureStrip />
            <p className="cover-ctas">
              <Link href="/guide" className="primary-link">
                How to choose
              </Link>
              <Link href="/best">Best of</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="briefing-bar" aria-label="What this magazine is for">
        <div className="wrap briefing">
          <article>
            <h3>Grade</h3>
            <p>Gold and Diamond are different Sold Secure grades. A cable in the box is usually not part of the approval.</p>
          </article>
          <article>
            <h3>Fit</h3>
            <p>Mini shackles do not close on every Sheffield stand. Measure the post plus the frame tube before you buy.</p>
          </article>
          <article>
            <h3>Carry</h3>
            <p>A Diamond lock under the desk is a Gold lock in real life. Weight is a security spec.</p>
          </article>
        </div>
      </section>

      <div className="wrap">
        <p className="folio">
          <span>Lock Desk</span>
          <span>Editor’s pick</span>
        </p>
        <section className="pick">
          <figure className="pick-art">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.pick} alt={photoAlt.pick} />
            <figcaption>{EDITORIAL_CREDIT}</figcaption>
          </figure>
          <div className="pick-copy">
            <h2>Editor’s pick</h2>
            <h3>{displayName(pick)}</h3>
            <p>
              <strong>Why we like it.</strong> Pedal Diamond and powered Diamond, 1.7 kg, and a 101 ×
              197 mm locking area. That is the overlap of “insurer will listen” and “you might take
              it on the train.”
            </p>
            <p>
              <strong>Who it is for.</strong> A bike you would be sick to lose, parked in public,
              when Gold feels thin.
            </p>
            <p>
              <strong>What we’d change.</strong> Put a mount in the box. A Diamond lock that stays
              under the desk is a Gold lock in real life.
            </p>
            <p>
              <strong>Best alternative.</strong>{" "}
              <Link href="/reviews/hiplok-d1000">{displayName(alt)}</Link> if you want Hiplok’s
              smaller anti-grinder D-lock and you have already measured the rack.
            </p>
            <p>
              <Link href="/reviews/litelok-x1" className="primary-link">
                Read the X1 review
              </Link>
            </p>
            <SeeOnAmazon asin={pick.asin} className="btn-amazon" />
          </div>
        </section>

        <section className="compared-strip" aria-label="Five we compared">
          <div className="lock-strip">
            {five.map((product) => (
              <LockTile key={product.asin} product={product} compact />
            ))}
          </div>
          <p className="five-line">
            <strong>Five we compared.</strong>{" "}
            <Link href="/best">Open the full table</Link>
          </p>
        </section>
        <p className="also-reviewed">
          Also reviewed: the{" "}
          <Link href="/reviews/kryptonite-new-york-fahgettaboudit-mini">
            New York Fahgettaboudit Mini
          </Link>{" "}
          — 18 mm Gold, 2.06 kg, no mount. Not a commute pick. Read the review.
        </p>

        <p className="folio">
          <span>Use cases</span>
          <span>Carry · claim</span>
        </p>
        <div className="feature-pair">
          <Link href="/for/commuting" className="feature-story">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.commute} alt={photoAlt.commute} />
            <div className="copy">
              <p className="kicker">Commuting</p>
              <h3>Best bike lock for commuting</h3>
              <p>If you will not carry it, it is not your commute lock.</p>
            </div>
          </Link>
          <Link href="/for/insurance" className="feature-story">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos.insurance} alt={photoAlt.insurance} />
            <div className="copy">
              <p className="kicker">Insurance</p>
              <h3>Best bike lock for insurance</h3>
              <p>Match the grade on the policy, then check the approved list.</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

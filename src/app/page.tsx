import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { LockTile } from "@/components/LockTile";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { SiteImage } from "@/components/SiteImage";
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
    "Independent UK reviews of D-locks and chains. Sold Secure grades, insurance, and which lock you will actually carry. Not a shop.",
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.name} — UK bike lock comparisons`,
    description:
      "Sold Secure grades, insurance, and which lock you will actually carry. UK D-lock and chain comparisons. Not a shop.",
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
          <SiteImage src={photos.cover} alt={photoAlt.cover} priority sizes="100vw" />
        </div>
        <div className="cover-shade" aria-hidden="true" />
        <div className="wrap cover-copy">
          <div className="hero-panel">
            <p className="cover-kicker">D-locks and chains · UK</p>
            <h1>UK bike lock reviews and comparisons</h1>
            <p className="lede">
              We compare D-locks and chains on Sold Secure grade, insurance wording, and weight. The
              aim is a lock your insurer will accept, and that you will still take to work. Not a
              shop. Not a test lab.
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

      <section className="briefing-bar" aria-label="How we compare bike locks">
        <div className="wrap briefing">
          <article>
            <h3>Grade</h3>
            <p>Sold Secure Gold is what many UK cycle policies still ask for. Diamond is the higher grade. A cable in the box is usually not part of the approval.</p>
          </article>
          <article>
            <h3>Fit</h3>
            <p>Mini D-locks do not fit every bike rack. Measure the stand plus your frame tube before you buy.</p>
          </article>
          <article>
            <h3>Carry</h3>
            <p>If a lock is too heavy, you will leave it at home. Then it does not protect the bike at the station.</p>
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
            <div className="pick-art-frame">
              <SiteImage
                src={photos.pick}
                alt={photoAlt.pick}
                sizes="(max-width: 980px) 100vw, 42vw"
              />
            </div>
            <figcaption>{EDITORIAL_CREDIT}</figcaption>
          </figure>
          <div className="pick-copy">
            <h2>Editor’s pick</h2>
            <h3>{displayName(pick)}</h3>
            <p>
              <strong>Why we like it.</strong> Sold Secure Diamond for pedal bikes and e-bikes, 1.7
              kg, and a 101 × 197 mm locking area. High enough for many insurance policies, and
              light enough that you might still take it on a commute.
            </p>
            <p>
              <strong>Who it is for.</strong> Higher-value bikes parked in public, especially if
              Gold is not enough for your policy.
            </p>
            <p>
              <strong>What we’d change.</strong> Include a frame mount. Without one, some people
              will not carry 1.7 kg every day.
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
          — 18 mm Gold, 2.06 kg, no mount. Most commuters are better with the Evolution Mini-7.
        </p>

        <p className="folio">
          <span>Guides</span>
          <span>Commuting and insurance</span>
        </p>
        <div className="feature-pair">
          <Link href="/for/commuting" className="feature-story">
            <span className="feature-story-art">
              <SiteImage
                src={photos.commute}
                alt={photoAlt.commute}
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </span>
            <div className="copy">
              <p className="kicker">Commuting</p>
              <h3>Best bike lock for commuting</h3>
              <p>Gold Mini with a mount, or Diamond if the bike is worth the extra weight.</p>
            </div>
          </Link>
          <Link href="/for/insurance" className="feature-story">
            <span className="feature-story-art">
              <SiteImage
                src={photos.insurance}
                alt={photoAlt.insurance}
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </span>
            <div className="copy">
              <p className="kicker">Insurance</p>
              <h3>Best bike lock for insurance</h3>
              <p>Match the Sold Secure grade on your policy, then check the insurer’s approved list.</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

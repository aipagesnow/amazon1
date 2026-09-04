import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { LockFinder } from "@/components/LockFinder";
import { LockTile } from "@/components/LockTile";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { SiteImage } from "@/components/SiteImage";
import { websiteJsonLd } from "@/lib/jsonld";
import { HOME_BRIEFING, HOME_COMMUTE, HOME_INSURANCE, HOME_LEDE, HOME_PICK } from "@/content/pages";
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
    "Independent UK reviews of D-locks and chains. Sold Secure grades, insurance, and which lock you will actually carry.",
  alternates: { canonical: site.url },
    openGraph: {
    title: `${site.name} — UK bike lock comparisons`,
    description:
      "Sold Secure grades, insurance, and which lock you will actually carry. UK D-lock and chain comparisons.",
    url: site.url,
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

export default function HomePage() {
  const pick = productByAsin(EDITOR_PICK_ASIN)!;
  const alt = productBySlug("hiplok-d1000")!;
  const five = BEST_OF_ASINS.map((asin) => productByAsin(asin)!).filter(Boolean);

  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <section className="cover">
        <div className="cover-photo">
          <SiteImage
            src={photos.cover}
            alt={photoAlt.cover}
            priority
            sizes="100vw"
            width={1280}
            height={720}
          />
        </div>
        <div className="cover-shade" aria-hidden="true" />
        <div className="wrap cover-copy">
          <div className="hero-panel">
            <p className="cover-kicker">D-locks and chains · UK</p>
            <h1>UK bike lock reviews and comparisons</h1>
            <p className="lede">{HOME_LEDE}</p>
            <DisclosureStrip />
            <p className="cover-ctas">
              <a href="#finder" className="primary-link">
                Find a lock
              </a>
              <Link href="/guide">How to choose</Link>
              <Link href="/best">Best of</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="briefing-bar" aria-label="How we compare bike locks">
        <div className="wrap briefing">
          <article>
            <h2>Grade</h2>
            <p>{HOME_BRIEFING.grade}</p>
          </article>
          <article>
            <h2>Fit</h2>
            <p>{HOME_BRIEFING.fit}</p>
          </article>
          <article>
            <h2>Carry</h2>
            <p>{HOME_BRIEFING.carry}</p>
          </article>
        </div>
      </section>

      <div className="wrap">
        <p className="folio">
          <span>Lock Desk</span>
          <span>Find a lock</span>
        </p>
        <LockFinder />

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
              <strong>Why we like it.</strong> {HOME_PICK.why}
            </p>
            <p>
              <strong>Who it is for.</strong> {HOME_PICK.who}
            </p>
            <p>
              <strong>What we’d change.</strong> {HOME_PICK.change}
            </p>
            <p>
              <strong>Best alternative.</strong>{" "}
              <Link href="/reviews/hiplok-d1000">{displayName(alt)}</Link> {HOME_PICK.alt}
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
          — a thick 18 mm Gold lock at 2.06 kg, with no frame mount. Most commuters are better with the
          Evolution Mini-7.
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
              <p>{HOME_COMMUTE}</p>
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
              <p>{HOME_INSURANCE}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

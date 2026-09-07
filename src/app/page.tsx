import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { LockFinder } from "@/components/LockFinder";
import { LockTile } from "@/components/LockTile";
import { RichText } from "@/components/RichText";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { SiteImage } from "@/components/SiteImage";
import { HOME_BRIEFING, HOME_COMMUTE, HOME_INSURANCE, HOME_LEDE, HOME_PICK } from "@/content/pages";
import { HOME_FAQS, HOME_META, HOME_NEXT } from "@/content/thickening";
import { faqJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { photoAlt, photos } from "@/lib/photos";
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
  description: HOME_META,
  alternates: { canonical: site.url },
  openGraph: {
    title: `${site.name} — UK bike lock comparisons`,
    description: HOME_META,
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
      <JsonLd data={[websiteJsonLd(), faqJsonLd(HOME_FAQS)]} />
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
            <p className="cover-ctas">
              <a href="#finder" className="primary-link">
                Find a lock
              </a>
              <Link href="/guide">How to choose</Link>
              <Link href="/best">Best of</Link>
            </p>
          </div>
        </div>
        <div className="cover-disclosure-bar">
          <div className="wrap">
            <DisclosureStrip className="disclosure disclosure-subtle cover-disclosure" />
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
          <span>A lock to start with</span>
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
          </figure>
          <div className="pick-copy">
            <h2>A lock to start with</h2>
            <p className="meta">Chosen from the eleven we reviewed, mainly on grade, weight, and whether the lock will close on a typical stand.</p>
            <h3>{displayName(pick)}</h3>
            <p>
              <strong>Why this one.</strong> {HOME_PICK.why}
            </p>
            <p>
              <strong>Who it suits.</strong> {HOME_PICK.who}
            </p>
            <p>
              <strong>What to watch for.</strong> {HOME_PICK.change}
            </p>
            <p>
              <strong>Also worth a look.</strong>{" "}
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

        <section className="compared-strip" aria-label="Shortlist of seven from the eleven">
          <div className="lock-strip">
            {five.map((product) => (
              <LockTile key={product.asin} product={product} compact />
            ))}
          </div>
          <p className="five-line">
            <strong>Seven locks on the shortlist</strong>, drawn from the eleven we
            reviewed.{" "}
            <Link href="/best">Open the shortlist table</Link>
          </p>
        </section>
        <p className="also-reviewed">
          There are eleven full reviews under{" "}
          <Link href="/reviews">bike lock reviews</Link>, including the{" "}
          <Link href="/reviews/kryptonite-new-york-fahgettaboudit-mini">
            New York Fahgettaboudit Mini
          </Link>
          . It is an 18 mm Sold Secure Gold lock at 2.06kg with no frame mount. For most
          daily commuting we would point you to the Evolution Mini-7 instead, because it is
          lighter and includes a mount. If you are still deciding, see{" "}
          <Link href="/alternatives/kryptonite-new-york-fahgettaboudit-mini">
            alternatives to the New York Mini
          </Link>
          .
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

        <section className="prose tight" aria-label="Where to go next">
          <h2>Where to go next</h2>
          <ul>
            {HOME_NEXT.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link> — {item.blurb}
              </li>
            ))}
          </ul>

          <h2>Common questions</h2>
          <div className="faq-list">
            {HOME_FAQS.map((faq) => (
              <div className="faq-item" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>
                  <RichText text={faq.a} />
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

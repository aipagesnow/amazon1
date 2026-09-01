import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { LockTile } from "@/components/LockTile";
import { ProductCard } from "@/components/ProductCard";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { websiteJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import {
  BEST_OF_ASINS,
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
    images: [{ url: photos.cover, alt: photoAlt.cover }],
  },
};

const DESK = [
  {
    n: "01",
    href: "/best",
    title: "Best bike locks UK",
    blurb: "Five from the slice, on grade, weight, and whether the shackle will close.",
  },
  {
    n: "02",
    href: "/vs/evolution-mini-7-vs-d1000",
    title: "Mini-7 vs D1000",
    blurb: "Gold you will carry, or Diamond you might not.",
  },
  {
    n: "03",
    href: "/vs/d-lock-vs-chain",
    title: "D-lock vs chain",
    blurb: "A Mini on the bike versus a 4.9 kg chain by the door.",
  },
  {
    n: "04",
    href: "/guide",
    title: "Sold Secure, insurance, fit",
    blurb: "The pillar. Gold vs Diamond, why cables do not count, a chooser at the end.",
  },
  {
    n: "05",
    href: "/for/commuting",
    title: "For commuting",
    blurb: "If you will not carry it, it is not your commute lock.",
  },
  {
    n: "06",
    href: "/for/insurance",
    title: "For insurance",
    blurb: "Match the grade on the policy, then check the approved list.",
  },
] as const;

export default function HomePage() {
  const pick = productByAsin(EDITOR_PICK_ASIN)!;
  const alt = productBySlug("hiplok-d1000")!;
  const peek = REVIEW_SLUGS.map((slug) => productBySlug(slug)!).filter(Boolean).slice(0, 6);
  const board = BEST_OF_ASINS.map((asin) => productByAsin(asin)!).filter(Boolean);

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
            <DisclosureStrip />
            <p className="cover-kicker">D-locks and chains · United Kingdom</p>
            <h1>The lock you will still carry is the only lock that counts.</h1>
            <p className="lede">
              A UK comparison magazine for commuters who need a Sold Secure grade their insurer will
              accept — and a weight they will not leave in the hall. Not a shop. Not a test lab.
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
            <p className="kicker">We’d buy this one</p>
            <h2>{displayName(pick)}</h2>
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

        <p className="folio">
          <span>This desk</span>
          <span>Six ways in</span>
        </p>
        <nav className="desk-toc" aria-label="Magazine contents">
          {DESK.map((item) => (
            <Link key={item.n} href={item.href}>
              <span className="num">{item.n}</span>
              <span>
                <h3>{item.title}</h3>
                <p>{item.blurb}</p>
              </span>
            </Link>
          ))}
        </nav>

        <div className="section-head">
          <div>
            <p className="kicker">Best of</p>
            <h2>
              <Link href="/best">Five from the slice</Link>
            </h2>
          </div>
          <Link href="/best" className="primary-link">
            Open the full table
          </Link>
        </div>
        <p className="measure">
          Compared on Sold Secure pedal grade, weight, and locking area. No “number one for
          everyone.” No frozen prices.
        </p>
        <div className="lock-board">
          {board.map((product) => (
            <LockTile key={product.asin} product={product} />
          ))}
        </div>

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

        <section>
          <p className="kicker">Catalogue</p>
          <h2>Reviewed on this desk</h2>
          <p className="measure">
            Six full reviews. The OnGuard Pitbulls and the Hiplok DX1000 stay in the slice for
            later; they appear on the best-of page as context, not as padded doorway pages.
          </p>
          <div className="reviewed-list">
            {peek.map((product) => (
              <ProductCard key={product.asin} product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

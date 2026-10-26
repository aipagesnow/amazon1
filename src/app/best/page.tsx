import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RichText } from "@/components/RichText";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { WeightCompare } from "@/components/SpecTable";
import { BEST_LEDE, BEST_VERDICTS, BEST_WEIGHT } from "@/content/pages";
import { BEST_FAQS, BEST_META } from "@/content/thickening";
import { articleJsonLd, faqJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { photoAlt, photos } from "@/lib/photos";
import {
  BEST_OF_ASINS,
  displayName,
  productByAsin,
  productBySlug,
  Product,
  reviewHref,
  shortName,
  specValue,
} from "@/lib/products";
import { pageUrl, site } from "@/lib/site";

const PAGE_TITLE = "Best bike locks UK 2026: Sold Secure grades, weights and cut times";

const BIKERADAR_LOCKS = "https://www.bikeradar.com/advice/buyers-guides/best-bike-lock";

const VERDICT_ROWS = [
  { situation: "Best overall Diamond", slug: "litelok-x1" },
  { situation: "Lightest Diamond with mount", slug: "onguard-pitbull-std-8003" },
  { situation: "Gold commute", slug: "kryptonite-evolution-mini-7" },
  { situation: "Anti-grinder compact", slug: "hiplok-d1000" },
] as const;

/** Brand RRPs we can stand behind. Every other shortlist lock stays "Check price". */
const PRICE_BAND: Record<string, string> = {
  B0BLT59NFJ: "about £150",
  B0D77XJR4Z: "about £250",
};

const TRACKING = [
  {
    model: "Litelok X3",
    why: "Toughest in BikeRadar’s lab, Sold Secure Diamond for pedal and powered cycles, about 12 minutes to grind one side.",
    source: "BikeRadar",
    href: BIKERADAR_LOCKS,
  },
  {
    model: "Kryptonite New York Diamond (Standard)",
    why: "Cycling UK’s most secure in its group test; Bennetts BikeSocial (February 2026) lists about £270 and 2.36 kg.",
    source: "Bennetts BikeSocial",
    href: "https://www.bennetts.co.uk/bikesocial/",
  },
  {
    model: "OnGuard RockSolid",
    why: "Cycling Weekly’s 2026 group-test winner.",
    source: "Cycling Weekly",
    href: "https://www.cyclingweekly.com/",
  },
  {
    model: "ABUS Granit Super Extreme 2500",
    why: "Tungsten-carbide shell that fits bulky and e-bike frames.",
    source: "Cyclist",
    href: "https://www.cyclist.co.uk/",
  },
  {
    model: "Squire Stronghold D16 Max",
    why: "Powered Cycle Diamond, with a 218 × 94 mm inner area.",
    source: "Cyclist",
    href: "https://www.cyclist.co.uk/",
  },
] as const;

const CUT_TIMES = [
  {
    model: "Litelok X1",
    result: "BikeRadar timed 4 min 38 s to cut one side.",
    source: "BikeRadar",
    href: BIKERADAR_LOCKS,
  },
  {
    model: "Litelok X3",
    result: "About 12 minutes to grind one side.",
    source: "BikeRadar",
    href: BIKERADAR_LOCKS,
  },
  {
    model: "Hiplok D1000",
    result: "Cycling UK used three cutting discs and got only halfway through one side.",
    source: "Cycling UK",
    href: "https://www.cyclinguk.org/",
  },
] as const;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: BEST_META,
  alternates: { canonical: pageUrl("/best") },
  openGraph: {
    title: `${PAGE_TITLE} · Lock Desk`,
    description: BEST_META,
    url: pageUrl("/best"),
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

function gradePair(product: Product): string {
  const pedal = product.specs?.soldSecurePedal ?? "—";
  const powered = product.specs?.soldSecurePowered ?? "—";
  return `${pedal} / ${powered}`;
}

function insurerAcceptance(product: Product): string {
  const pedal = product.specs?.soldSecurePedal;
  if (pedal === "Gold" || pedal === "Diamond") return "Meets the usual Gold minimum";
  return "—";
}

function priceBand(asin: string): string {
  return PRICE_BAND[asin] ?? "Check price";
}

function SourceLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} rel="noopener" target="_blank">
      {children}
    </a>
  );
}

export default function BestPage() {
  const rows = BEST_OF_ASINS.map((asin) => productByAsin(asin)).filter(Boolean) as Product[];
  const weights = rows
    .filter((p) => typeof p.specs?.weightKg === "number")
    .map((p) => ({ name: shortName(p), kg: p.specs!.weightKg! }));
  const picks = VERDICT_ROWS.flatMap((row) => {
    const product = productBySlug(row.slug);
    return product ? [{ ...row, product }] : [];
  });

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: PAGE_TITLE,
            description: BEST_META,
            path: "/best",
          }),
          faqJsonLd(BEST_FAQS),
          itemListJsonLd(
            rows.map((p) => ({
              name: displayName(p),
              path: reviewHref(p) ?? "/best",
            })),
          ),
        ]}
      />
      <PageHero
        image={photos.insurance}
        alt={photoAlt.insurance}
        kicker="Best of"
        title="Best bike locks UK"
        lede={BEST_LEDE}
        overlay
      />
      <article className="prose wrap tight">
        <p className="byline">
          By Lock Desk · Desk research from published specs and Sold Secure grades · Last checked{" "}
          {site.lastChecked} · <Link href="/method">How we research</Link>
        </p>
        <DisclosureStrip />

        <aside className="verdict" aria-label="Picks by situation">
          <h2>Picks by situation</h2>
          <p>
            There isn’t one best lock for every rider — pick by Sold Secure
            grade, whether the shackle will close on your stand, and whether
            you’ll still carry it. On this shortlist: Litelok X1 for Diamond
            you’ll carry,{" "}
            <Link href="/reviews/onguard-pitbull-std-8003">OnGuard Pitbull STD 8003</Link>{" "}
            for lightest Diamond with a mount,{" "}
            <Link href="/reviews/onguard-pitbull-dt-8005">Pitbull DT 8005</Link>{" "}
            when you want that D-lock with a cable in the box,{" "}
            <Link href="/reviews/seatylock-mason-140">Seatylock Mason 140</Link>{" "}
            for Pedal Cycle Diamond under 1kg, Evolution Mini-7 for a Gold
            commute, and Hiplok D1000 for a compact anti-grinder once you’ve
            measured the stand.
          </p>
          <ul className="verdict-picks">
            {picks.map(({ situation, product }) => {
              const href = reviewHref(product);
              return (
                <li key={product.asin}>
                  <h3>{situation}</h3>
                  <p>{displayName(product)}</p>
                  <p className="verdict-actions">
                    {href ? (
                      <Link href={href} className="primary-link">
                        Read the review
                      </Link>
                    ) : null}
                    <SeeOnAmazon
                      asin={product.asin}
                      label={`See ${displayName(product)} on Amazon`}
                    />
                  </p>
                </li>
              );
            })}
          </ul>
        </aside>

        <h2>Comparison</h2>
        <p>
          This table compares the shortlist on Sold Secure grade (pedal /
          powered), weight, inside size, and whether it meets the usual Gold
          insurer minimum. Sold Secure says Gold is typically the minimum grade
          insurers ask for on higher-value bikes — always check your own policy
          wording.
        </p>
        <div className="spec-scroll-wrap">
          <p className="spec-scroll-hint">Swipe for more columns</p>
          <div className="spec-scroll">
            <table className="spec best-compare">
              <caption>
                Sold Secure says Gold is typically the minimum grade insurers ask for on
                higher-value bikes; always check your own policy wording.
              </caption>
              <thead>
                <tr>
                  <th>Lock</th>
                  <th>Sold Secure (pedal / powered)</th>
                  <th>Weight</th>
                  <th>Inside size</th>
                  <th>Price band</th>
                  <th>Insurer acceptance</th>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => {
                  const href = reviewHref(p);
                  return (
                    <tr key={p.asin}>
                      <td>
                        <span className="kicker">{specValue(p, "type") ?? "Lock"}</span>
                        <br />
                        {href ? <Link href={href}>{displayName(p)}</Link> : displayName(p)}
                      </td>
                      <td>{gradePair(p)}</td>
                      <td>{specValue(p, "weightKg") ?? "—"}</td>
                      <td>{specValue(p, "lockingArea") ?? specValue(p, "lockingLength") ?? "—"}</td>
                      <td>{priceBand(p.asin)}</td>
                      <td>{insurerAcceptance(p)}</td>
                      <td>
                        {href ? (
                          <Link href={href} className="primary-link">
                            Read the review
                          </Link>
                        ) : null}
                        <br />
                        <SeeOnAmazon
                          asin={p.asin}
                          variant="text"
                          label={`See ${shortName(p)} on Amazon`}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <h2>Weight you will carry</h2>
        <p>{BEST_WEIGHT}</p>
        <WeightCompare items={weights} />

        <div className="best-cards" aria-label="Best-of shortlist as cards">
          {rows.map((p) => {
            const href = reviewHref(p);
            const extra = BEST_VERDICTS[p.asin];
            return (
              <article className="best-card card" key={p.asin}>
                <p className="kicker">{specValue(p, "type") ?? "Lock"}</p>
                <h3>{href ? <Link href={href}>{displayName(p)}</Link> : displayName(p)}</h3>
                <dl className="best-card-specs">
                  <div>
                    <dt>Sold Secure</dt>
                    <dd>{gradePair(p)}</dd>
                  </div>
                  <div>
                    <dt>Weight</dt>
                    <dd>{specValue(p, "weightKg") ?? "—"}</dd>
                  </div>
                  <div>
                    <dt>Inside size</dt>
                    <dd>{specValue(p, "lockingArea") ?? specValue(p, "lockingLength") ?? "—"}</dd>
                  </div>
                </dl>
                {extra?.bestFor ? (
                  <p className="best-card-for">
                    <strong>Suits:</strong> {extra.bestFor}
                  </p>
                ) : null}
                {extra?.caveat ? (
                  <p className="best-card-caveat">
                    <strong>Caveat:</strong> {extra.caveat}
                  </p>
                ) : null}
                <p className="best-card-actions">
                  {href ? (
                    <Link href={href} className="primary-link">
                      Read the review
                    </Link>
                  ) : null}
                  <SeeOnAmazon
                    asin={p.asin}
                    variant="text"
                    label={`See ${shortName(p)} on Amazon`}
                  />
                </p>
              </article>
            );
          })}
        </div>

        <h2>2026 models we are tracking</h2>
        <p>
          These 2026 models are worth watching, but we haven’t confirmed UK
          Amazon listings yet, so there aren’t buy links. Until those listings
          are clear, stick to the shortlist above for a buy decision.
        </p>
        <div className="spec-scroll-wrap">
          <p className="spec-scroll-hint">Swipe for more columns</p>
          <div className="spec-scroll">
            <table className="spec">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Why it matters</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {TRACKING.map((row) => (
                  <tr key={row.model}>
                    <td>{row.model}</td>
                    <td>{row.why}</td>
                    <td>
                      <SourceLink href={row.href}>{row.source}</SourceLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2>Published cut times</h2>
        <p>
          Lock Desk hasn’t cut these locks — the times in the table come from
          named tests (BikeRadar, Cycling UK). Use them as published lab
          context, not a promise your street will match.
        </p>
        <div className="spec-scroll-wrap">
          <p className="spec-scroll-hint">Swipe for more columns</p>
          <div className="spec-scroll">
            <table className="spec">
              <thead>
                <tr>
                  <th>Lock</th>
                  <th>Published time</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {CUT_TIMES.map((row) => (
                  <tr key={row.model}>
                    <td>{row.model}</td>
                    <td>{row.result}</td>
                    <td>
                      <SourceLink href={row.href}>{row.source}</SourceLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h2>Head-to-head</h2>
        <p>
          If you’re down to two locks, use these head-to-heads beside the Best of
          table — Mini-7 vs D1000, D1000 vs DX1000, and D-lock vs chain. They add
          detail on those pairs; they don’t replace the shortlist.
        </p>
        <ul>
          <li>
            <Link href="/vs/evolution-mini-7-vs-d1000">Evolution Mini-7 vs Hiplok D1000</Link> —
            a Gold weekday Mini, set against a Diamond compact D-lock.
          </li>
          <li>
            <Link href="/vs/d1000-vs-dx1000">Hiplok D1000 vs DX1000</Link> — same Diamond grade.
            We’d choose by locking area and weight after you’ve measured your stand.
          </li>
          <li>
            <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link> — when a D-lock’s easier to
            carry, when a chain’s length is useful, and when it makes sense to use both.
          </li>
        </ul>

        <h2>Common questions</h2>
        <p>
          Common questions on this page cover why the New York Mini isn’t on the
          table, Diamond for a weekday commute, how we pick, insurer grades,
          angle grinders, and “best rated”. Answers match Sold Secure grades,
          weights and fit notes already on the page — we don’t use Amazon stars.
        </p>
        <div className="faq-list">
          {BEST_FAQS.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>
                <RichText text={faq.a} />
              </p>
            </div>
          ))}
        </div>
        <p>
          <Link href="/reviews">All reviews</Link>
        </p>
      </article>
    </>
  );
}

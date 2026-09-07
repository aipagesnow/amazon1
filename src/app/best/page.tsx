import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { WeightCompare } from "@/components/SpecTable";
import { BEST_INTRO, BEST_LEDE, BEST_PICKS, BEST_VERDICTS, BEST_WEIGHT } from "@/content/pages";
import { BEST_FAQS, BEST_INTRO_EXTRA, BEST_META } from "@/content/thickening";
import { RichText } from "@/components/RichText";
import { articleJsonLd, faqJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { photoAlt, photos } from "@/lib/photos";
import {
  BEST_OF_ASINS,
  displayName,
  productByAsin,
  Product,
  reviewHref,
  shortName,
  specValue,
} from "@/lib/products";
import { pageUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best bike locks UK",
  description: BEST_META,
  alternates: { canonical: pageUrl("/best") },
  openGraph: {
    title: "Best bike locks UK · Lock Desk",
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

export default function BestPage() {
  const rows = BEST_OF_ASINS.map((asin) => productByAsin(asin)).filter(Boolean) as Product[];
  const weights = rows
    .filter((p) => typeof p.specs?.weightKg === "number")
    .map((p) => ({ name: shortName(p), kg: p.specs!.weightKg! }));

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: "Best bike locks UK",
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
        <DisclosureStrip />
        <p className="meta">Last checked: {site.lastChecked}. Grades and specs can change — confirm on Amazon before you buy.</p>

        {BEST_INTRO.map((p) => (
          <p key={p}>
            <RichText text={p} />
          </p>
        ))}

        <aside className="chooser" aria-label="Shortlist size">
          <p>
            <strong>Seven locks on this shortlist.</strong> The other four of the eleven (DX1000,
            Pitbull DT, Pitbull LS, and the New York Mini) have full reviews under{" "}
            <Link href="/reviews">Reviews</Link> because they suit more specific jobs than this
            shortlist covers.
          </p>
        </aside>

        <p>
          <RichText text={BEST_INTRO_EXTRA} />
        </p>

        <div className="chooser" id="chooser">
          <h2>Which lock to pick</h2>
          <ul>
            {BEST_PICKS.map((row) => (
              <li key={row.slug}>
                <strong>{row.lead}:</strong> <Link href={`/reviews/${row.slug}`}>{row.name}</Link>.{" "}
                {row.text}
              </li>
            ))}
          </ul>
          <p>
            How we picked these: <Link href="/guide">how to choose a bike lock</Link> ·{" "}
            <Link href="/method">how we research</Link>. Job guides:{" "}
            <Link href="/for/commuting">commuting</Link> ·{" "}
            <Link href="/for/insurance">insurance</Link>.
          </p>
        </div>

        <h2>Weight you will carry</h2>
        <p>{BEST_WEIGHT}</p>
        <WeightCompare items={weights} />

        <h2>The numbers</h2>
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
                    <dd>{specValue(p, "soldSecurePedal") ?? "—"}</dd>
                  </div>
                  <div>
                    <dt>Weight</dt>
                    <dd>{specValue(p, "weightKg") ?? "—"}</dd>
                  </div>
                  <div>
                    <dt>Locking area</dt>
                    <dd>
                      {specValue(p, "lockingArea") ?? specValue(p, "lockingLength") ?? "—"}
                    </dd>
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
                  <SeeOnAmazon asin={p.asin} variant="text" />
                </p>
              </article>
            );
          })}
        </div>
        <div className="best-table-desktop">
          <div className="spec-scroll-wrap">
            <p className="spec-scroll-hint">Swipe for more columns</p>
            <div className="spec-scroll">
            <table className="spec">
              <caption>D-locks first, then the folding lock, then the home chain. Weights come from the product specs we recorded.</caption>
              <thead>
                <tr>
                  <th>Lock</th>
                  <th>Sold Secure</th>
                  <th>Weight</th>
                  <th>Locking area</th>
                  <th>Suits</th>
                  <th>Drawback</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => {
                  const href = reviewHref(p);
                  const extra = BEST_VERDICTS[p.asin];
                  return (
                    <tr key={p.asin}>
                      <td>
                        <span className="kicker">{specValue(p, "type") ?? "Lock"}</span>
                        <br />
                        {href ? <Link href={href}>{displayName(p)}</Link> : displayName(p)}
                      </td>
                      <td>{specValue(p, "soldSecurePedal") ?? "—"}</td>
                      <td>{specValue(p, "weightKg") ?? "—"}</td>
                      <td>
                        {specValue(p, "lockingArea") ?? specValue(p, "lockingLength") ?? "—"}
                      </td>
                      <td>{extra?.bestFor}</td>
                      <td>{extra?.caveat}</td>
                      <td>
                        {href ? (
                          <Link href={href} className="primary-link">
                            Read the review
                          </Link>
                        ) : null}
                        <br />
                        <SeeOnAmazon asin={p.asin} variant="text" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            </div>
          </div>
        </div>

        <h2>Head-to-head</h2>
        <p>
          If you are choosing between two locks, these short comparisons sit beside the Best of
          table. They add detail for those pairs rather than replacing the shortlist.
        </p>
        <ul>
          <li>
            <Link href="/vs/evolution-mini-7-vs-d1000">Evolution Mini-7 vs Hiplok D1000</Link> —
            a Gold commute Mini compared with a Diamond compact D-lock.
          </li>
          <li>
            <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link> — when a D-lock is easier to
            carry, when a chain’s length is useful, and when it makes sense to use both.
          </li>
        </ul>

        <h2>Common questions</h2>
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

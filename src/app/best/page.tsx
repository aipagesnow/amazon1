import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { WeightCompare } from "@/components/SpecTable";
import { BEST_INTRO, BEST_LEDE, BEST_PICKS, BEST_VERDICTS, BEST_WEIGHT } from "@/content/pages";
import { articleJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import {
  BEST_OF_ASINS,
  displayName,
  productByAsin,
  Product,
  reviewHref,
  shortName,
  specValue,
} from "@/lib/products";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best bike locks UK",
  description:
    "Five D-locks and chains compared on Sold Secure grade, weight, and locking area. There is no single best lock for everyone.",
  alternates: { canonical: pageUrl("/best") },
  openGraph: {
    title: "Best bike locks UK · Lock Desk",
    description:
      "Five D-locks and chains compared on Sold Secure grade, weight, and locking area. There is no single best lock for everyone.",
    url: pageUrl("/best"),
    images: [{ url: photos.cover, alt: photoAlt.cover }],
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
            description: String(metadata.description),
            path: "/best",
          }),
          itemListJsonLd(
            rows.map((p) => ({
              name: displayName(p),
              path: reviewHref(p) ?? "/best",
            })),
          ),
        ]}
      />
      <PageHero
        image={photos.cover}
        alt={photoAlt.cover}
        kicker="Best of"
        title="Best bike locks UK"
        lede={BEST_LEDE}
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">

        {BEST_INTRO.map((p) => (
          <p key={p}>{p}</p>
        ))}

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
            <Link href="/method">how we research</Link>.
          </p>
        </div>

        <h2>Weight you will carry</h2>
        <p>{BEST_WEIGHT}</p>
        <WeightCompare items={weights} />

        <h2>The numbers</h2>
        <div className="spec-scroll">
          <table className="spec">
            <caption>D-locks first, then the home chain. Weights from the product specs.</caption>
            <thead>
              <tr>
                <th>Lock</th>
                <th>Sold Secure</th>
                <th>Weight</th>
                <th>Locking area</th>
                <th>Best for</th>
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
      </article>
    </>
  );
}

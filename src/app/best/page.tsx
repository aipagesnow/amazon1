import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { GHOST_NOTE_SHORT } from "@/content/editorial";
import { articleJsonLd, itemListJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import {
  BEST_OF_ASINS,
  displayName,
  productByAsin,
  Product,
  reviewHref,
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

const verdicts: Record<string, { bestFor: string; caveat: string }> = {
  B0BLT59NFJ: {
    bestFor: "Diamond grade you can still commute with (pedal and e-bike).",
    caveat: "No frame mount in this listing.",
  },
  B074K6KSY5: {
    bestFor: "Gold commute lock with a cable and a bracket.",
    caveat: "The cable is not Sold Secure approved.",
  },
  B0D77XJR4Z: {
    bestFor: "High-theft racks you have already measured.",
    caveat: "92 × 155 mm shackle is tight; no mount listed.",
  },
  B0944HG7MK: {
    bestFor: "When a Mini D-lock will not close on the stand.",
    caveat: "E-bike Sold Secure grade is Gold, not Diamond.",
  },
  B073W8N26F: {
    bestFor: "Extra length at home, not in a backpack.",
    caveat: "4.9 kg. Not a commute lock.",
  },
};

export default function BestPage() {
  const rows = BEST_OF_ASINS.map((asin) => productByAsin(asin)).filter(Boolean) as Product[];

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
        lede="Five D-locks and chains compared on Sold Secure grade, whether you will carry them, and whether the shackle will close. A sixth lock, the New York Mini, is reviewed separately because it is too heavy for most commutes. There is no single best lock for everyone."
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        <aside className="ghost-note">
          <p className="kicker">Not reviewed yet</p>
          <p>{GHOST_NOTE_SHORT}</p>
        </aside>

        <div className="chooser" id="chooser">
          <h2>Which lock to pick</h2>
          <ul>
            <li>
              Need Diamond you will still carry:{" "}
              <Link href="/reviews/litelok-x1">Litelok X1</Link>.
            </li>
            <li>
              Need Gold with a mount and a cable:{" "}
              <Link href="/reviews/kryptonite-evolution-mini-7">Evolution Mini-7</Link>.
            </li>
            <li>
              High-theft rack you have already measured:{" "}
              <Link href="/reviews/hiplok-d1000">D1000</Link>.
            </li>
            <li>
              Mini D-lock will not fit the stand:{" "}
              <Link href="/reviews/abus-granit-xplus-540">Granit XPlus 540</Link>.
            </li>
            <li>
              Need a metre of chain at home:{" "}
              <Link href="/reviews/kryptonite-new-york-fahgettaboudit-1410">New York 1410</Link>.
            </li>
          </ul>
          <p>
            How we picked these: <Link href="/guide">how to choose a bike lock</Link> ·{" "}
            <Link href="/method">how we research</Link>.
          </p>
        </div>

        <h2>Spec sheet</h2>
        <div className="spec-scroll">
          <table className="spec">
            <caption>D-locks first, then the home chain. Weights from the product records on this site.</caption>
            <thead>
              <tr>
                <th>Lock</th>
                <th>Sold Secure</th>
                <th>Weight</th>
                <th>Locking area</th>
                <th>Best for</th>
                <th>Caveat</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((p) => {
                const href = reviewHref(p);
                const extra = verdicts[p.asin];
                return (
                  <tr key={p.asin}>
                    <td>
                      <span className="kicker">{specValue(p, "type") ?? "Lock"}</span>
                      <br />
                      {href ? <Link href={href}>{displayName(p)}</Link> : displayName(p)}
                    </td>
                    <td>{specValue(p, "soldSecurePedal") ?? "n/a"}</td>
                    <td>{specValue(p, "weightKg") ?? "n/a"}</td>
                    <td>
                      {specValue(p, "lockingArea") ?? specValue(p, "lockingLength") ?? "n/a"}
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

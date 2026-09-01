import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { articleJsonLd, itemListJsonLd } from "@/lib/jsonld";
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
    "Five D-locks and chains from our UK slice, compared on Sold Secure grade, weight, and locking area. No number one for everyone.",
  alternates: { canonical: pageUrl("/best") },
  openGraph: {
    title: "Best bike locks UK · Lock Desk",
    description: "Sold Secure, weight, and fit — not a 50-product shop grid.",
    url: pageUrl("/best"),
  },
};

const verdicts: Record<string, { bestFor: string; caveat: string }> = {
  B0BLT59NFJ: {
    bestFor: "Most people who will carry Diamond",
    caveat: "Mount not in the box on this listing",
  },
  B074K6KSY5: {
    bestFor: "Gold commute with a cable and a bracket",
    caveat: "Cable is not Sold Secure approved",
  },
  B0D77XJR4Z: {
    bestFor: "High-theft racks you have measured",
    caveat: "92 × 155 mm shackle is tight; no mount listed",
  },
  B0944HG7MK: {
    bestFor: "When a Mini will not close",
    caveat: "Powered Sold Secure is Gold, not Diamond",
  },
  B073W8N26F: {
    bestFor: "Length at home, not in a backpack",
    caveat: "4.9 kg",
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
      <article className="prose wrap">
        <p className="kicker">Best of</p>
        <h1>Best bike locks UK</h1>
        <p className="lede">
          Five from our slice. Criteria: Sold Secure pedal grade, whether we think you will carry
          it, and whether the shackle will close. Not number one for everyone.
        </p>
        <DisclosureStrip />
        <p>
          We reviewed six products in full. The OnGuard Pitbulls and the Hiplok DX1000 stay in the
          catalogue without a first-launch review — they are real ASINs, not filler pages. Prices
          change on Amazon; we do not print them.
        </p>

        <table className="spec">
          <thead>
            <tr>
              <th>Lock</th>
              <th>Type</th>
              <th>Sold Secure (pedal)</th>
              <th>Weight</th>
              <th>Locking area / length</th>
              <th>Best for</th>
              <th>Caveat</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => {
              const href = reviewHref(p);
              const extra = verdicts[p.asin];
              return (
                <tr key={p.asin}>
                  <td>
                    {href ? <Link href={href}>{displayName(p)}</Link> : displayName(p)}
                  </td>
                  <td>{specValue(p, "type") ?? "—"}</td>
                  <td>{specValue(p, "soldSecurePedal") ?? "—"}</td>
                  <td>{specValue(p, "weightKg") ?? "—"}</td>
                  <td>
                    {specValue(p, "lockingArea") ?? specValue(p, "lockingLength") ?? "—"}
                  </td>
                  <td>{extra?.bestFor}</td>
                  <td>{extra?.caveat}</td>
                  <td>
                    <SeeOnAmazon asin={p.asin} className="see-on-amazon" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="chooser">
          <h2>Chooser</h2>
          <ul>
            <li>
              Carry Diamond on an insured bike:{" "}
              <Link href="/reviews/litelok-x1">Litelok X1</Link>.
            </li>
            <li>
              Gold, mount, cable:{" "}
              <Link href="/reviews/kryptonite-evolution-mini-7">Evolution Mini-7</Link>.
            </li>
            <li>
              You have measured a small stand in a bad street:{" "}
              <Link href="/reviews/hiplok-d1000">D1000</Link>.
            </li>
            <li>
              Mini will not fit: <Link href="/reviews/abus-granit-xplus-540">Granit XPlus 540</Link>.
            </li>
            <li>
              You need a metre of chain at home:{" "}
              <Link href="/reviews/kryptonite-new-york-fahgettaboudit-1410">New York 1410</Link>.
            </li>
          </ul>
        </div>
        <p>
          How we picked the grades: <Link href="/guide">how to choose</Link> ·{" "}
          <Link href="/method">methodology</Link>.
        </p>
      </article>
    </>
  );
}

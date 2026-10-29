import type { Metadata } from "next";
import Link from "next/link";
import { GapPage, gapMetadata } from "@/components/GapPage";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { SHACKLE_DIRECT, SHACKLE_FAQS, SHACKLE_H1, SHACKLE_META, SHACKLE_PATH, SHACKLE_SECTIONS, SHACKLE_TABLE_ASINS, SHACKLE_TITLE } from "@/content/gap-pages";
import { photoAlt, photos } from "@/lib/photos";
import { displayName, productByAsin, reviewHref } from "@/lib/products";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = gapMetadata(SHACKLE_PATH, SHACKLE_TITLE, SHACKLE_META, pageUrl(SHACKLE_PATH));

export default function ShackleSizePage() {
  const rows = SHACKLE_TABLE_ASINS.map((a) => productByAsin(a)!);
  return (
    <GapPage
      path={SHACKLE_PATH}
      title={SHACKLE_TITLE}
      h1={SHACKLE_H1}
      meta={SHACKLE_META}
      kicker="Guide"
      image={photos.fit}
      alt={photoAlt.fit}
      direct={SHACKLE_DIRECT}
      sections={SHACKLE_SECTIONS}
      afterSections={
        <>
          <h2>D-locks compared by size</h2>
          <div className="spec-scroll">
            <table className="spec">
              <caption>Published figures. Sold Secure grade for ordinary bikes, with the e-bike grade where one is listed.</caption>
              <thead>
                <tr>
                  <th>Lock</th>
                  <th>Locking area</th>
                  <th>Shackle</th>
                  <th>Sold Secure</th>
                  <th>Weight</th>
                  <th>Amazon</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.asin}>
                    <td>
                      <Link href={reviewHref(p) ?? "/reviews"}>{displayName(p)}</Link>
                    </td>
                    <td>{p.specs?.lockingArea ?? "Not listed"}</td>
                    <td>{p.specs?.shackleMm ? `${p.specs.shackleMm} mm` : "Not listed"}</td>
                    <td>
                      {p.specs?.soldSecurePedal}
                      {p.specs?.soldSecurePowered ? ` (e-bike ${p.specs.soldSecurePowered})` : ""}
                    </td>
                    <td>{p.specs?.weightKg}kg</td>
                    <td>
                      <SeeOnAmazon asin={p.asin} variant="text" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      }
      faqs={SHACKLE_FAQS}
    />
  );
}

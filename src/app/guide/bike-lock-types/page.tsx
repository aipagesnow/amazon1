import type { Metadata } from "next";
import { GapPage, gapMetadata } from "@/components/GapPage";
import { TYPES_DIRECT, TYPES_FAQS, TYPES_H1, TYPES_META, TYPES_PATH, TYPES_SECTIONS, TYPES_TABLE, TYPES_TITLE } from "@/content/gap-pages";
import { photoAlt, photos } from "@/lib/photos";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = gapMetadata(TYPES_PATH, TYPES_TITLE, TYPES_META, pageUrl(TYPES_PATH));

export default function BikeLockTypesPage() {
  return (
    <GapPage
      path={TYPES_PATH}
      title={TYPES_TITLE}
      h1={TYPES_H1}
      meta={TYPES_META}
      kicker="Guide"
      image={photos.vs}
      alt={photoAlt.vs}
      direct={TYPES_DIRECT}
      sections={TYPES_SECTIONS}
      beforeSections={
        <div className="spec-scroll">
          <table className="spec">
            <caption>{TYPES_TABLE.caption}</caption>
            <thead>
              <tr>
                <th>Type</th>
                <th>Example</th>
                <th>Sold Secure</th>
                <th>Weight</th>
                <th>Best used for</th>
              </tr>
            </thead>
            <tbody>
              {TYPES_TABLE.rows.map((r) => (
                <tr key={r.example}>
                  <td>{r.type}</td>
                  <td>{r.example}</td>
                  <td>{r.grade}</td>
                  <td>{r.weight}</td>
                  <td>{r.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
      faqs={TYPES_FAQS}
    />
  );
}

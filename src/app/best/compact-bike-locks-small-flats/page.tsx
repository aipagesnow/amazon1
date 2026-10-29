import type { Metadata } from "next";
import { GapPage, gapMetadata } from "@/components/GapPage";
import { LockTile } from "@/components/LockTile";
import { COMPACT_DIRECT, COMPACT_FAQS, COMPACT_H1, COMPACT_META, COMPACT_PATH, COMPACT_PICKS, COMPACT_SECTIONS, COMPACT_TITLE, COMPACT_WEARABLE } from "@/content/gap-pages";
import { photoAlt, photos } from "@/lib/photos";
import { productByAsin } from "@/lib/products";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = gapMetadata(COMPACT_PATH, COMPACT_TITLE, COMPACT_META, pageUrl(COMPACT_PATH));

export default function CompactLocksPage() {
  return (
    <GapPage
      path={COMPACT_PATH}
      title={COMPACT_TITLE}
      h1={COMPACT_H1}
      meta={COMPACT_META}
      kicker="Best of"
      image={photos.pick}
      alt={photoAlt.pick}
      direct={COMPACT_DIRECT}
      beforeSections={
        <>
          <p>{COMPACT_WEARABLE}</p>
          <h2>Compact locks by situation</h2>
          <div className="cards">
            {COMPACT_PICKS.map((pick) => (
              <div key={pick.asin}>
                <p className="kicker">{pick.situation}</p>
                <LockTile product={productByAsin(pick.asin)!} bestFor={pick.why} caveat={pick.caveat} />
              </div>
            ))}
          </div>
        </>
      }
      sections={COMPACT_SECTIONS}
      faqs={COMPACT_FAQS}
    />
  );
}

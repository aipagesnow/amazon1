import type { Metadata } from "next";
import { GapPage, gapMetadata } from "@/components/GapPage";
import { LockTile } from "@/components/LockTile";
import { CABLE_DIRECT, CABLE_FAQS, CABLE_H1, CABLE_META, CABLE_PATH, CABLE_PICK_ASINS, CABLE_SECTIONS, CABLE_TITLE } from "@/content/gap-pages-nov";
import { photoAlt, photos } from "@/lib/photos";
import { productByAsin } from "@/lib/products";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = gapMetadata(CABLE_PATH, CABLE_TITLE, CABLE_META, pageUrl(CABLE_PATH));

export default function CableLocksPage() {
  return (
    <GapPage
      path={CABLE_PATH}
      title={CABLE_TITLE}
      h1={CABLE_H1}
      meta={CABLE_META}
      kicker="Guide"
      image={photos.fit}
      alt={photoAlt.fit}
      direct={CABLE_DIRECT}
      sections={CABLE_SECTIONS}
      afterSections={
        <div className="cards">
          {CABLE_PICK_ASINS.map((asin) => (
            <LockTile key={asin} product={productByAsin(asin)!} />
          ))}
        </div>
      }
      faqs={CABLE_FAQS}
    />
  );
}

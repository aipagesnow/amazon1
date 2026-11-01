import type { Metadata } from "next";
import { GapPage, gapMetadata } from "@/components/GapPage";
import { LockTile } from "@/components/LockTile";
import { ANCHOR_DIRECT, ANCHOR_FAQS, ANCHOR_H1, ANCHOR_META, ANCHOR_PATH, ANCHOR_PICK_ASINS, ANCHOR_SECTIONS, ANCHOR_TITLE } from "@/content/gap-pages-nov";
import { photoAlt, photos } from "@/lib/photos";
import { productByAsin } from "@/lib/products";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = gapMetadata(ANCHOR_PATH, ANCHOR_TITLE, ANCHOR_META, pageUrl(ANCHOR_PATH));

export default function GroundAnchorsPage() {
  return (
    <GapPage
      path={ANCHOR_PATH}
      title={ANCHOR_TITLE}
      h1={ANCHOR_H1}
      meta={ANCHOR_META}
      kicker="Guide"
      image={photos.bannerHouse}
      alt={photoAlt.bannerHouse}
      direct={ANCHOR_DIRECT}
      sections={ANCHOR_SECTIONS}
      afterSections={
        <>
          <h2>Chains to pair with an anchor</h2>
          <div className="cards">
            {ANCHOR_PICK_ASINS.map((asin) => (
              <LockTile key={asin} product={productByAsin(asin)!} />
            ))}
          </div>
        </>
      }
      faqs={ANCHOR_FAQS}
    />
  );
}

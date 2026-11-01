import type { Metadata } from "next";
import { GapPage, gapMetadata } from "@/components/GapPage";
import { LockTile } from "@/components/LockTile";
import { DELIVERY_DIRECT, DELIVERY_FAQS, DELIVERY_H1, DELIVERY_META, DELIVERY_PATH, DELIVERY_PICKS, DELIVERY_SECTIONS, DELIVERY_TITLE } from "@/content/gap-pages-nov";
import { photoAlt, photos } from "@/lib/photos";
import { productByAsin } from "@/lib/products";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = gapMetadata(DELIVERY_PATH, DELIVERY_TITLE, DELIVERY_META, pageUrl(DELIVERY_PATH));

export default function DeliveryRidersPage() {
  return (
    <GapPage
      path={DELIVERY_PATH}
      title={DELIVERY_TITLE}
      h1={DELIVERY_H1}
      meta={DELIVERY_META}
      kicker="Guide"
      image={photos.bannerTight}
      alt={photoAlt.bannerTight}
      direct={DELIVERY_DIRECT}
      beforeSections={
        <>
          <h2>Delivery locks by situation</h2>
          <div className="cards">
            {DELIVERY_PICKS.map((pick) => (
              <div key={pick.asin}>
                <p className="kicker">{pick.situation}</p>
                <LockTile product={productByAsin(pick.asin)!} bestFor={pick.why} caveat={pick.caveat} />
              </div>
            ))}
          </div>
        </>
      }
      sections={DELIVERY_SECTIONS}
      faqs={DELIVERY_FAQS}
    />
  );
}

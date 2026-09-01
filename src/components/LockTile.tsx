import Link from "next/link";
import { GradeStamp } from "@/components/GradeStamp";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { displayName, Product, reviewHref, specValue } from "@/lib/products";

type Props = {
  product: Product;
  bestFor?: string;
  caveat?: string;
};

export function LockTile({ product, bestFor, caveat }: Props) {
  const href = reviewHref(product);
  const mass = specValue(product, "weightKg");
  const hole = specValue(product, "lockingArea") ?? specValue(product, "lockingLength");
  const kind = specValue(product, "type");

  return (
    <article className="lock-tile">
      <p className="kicker">
        {product.brand}
        {kind ? ` · ${kind}` : ""}
      </p>
      <h3>{href ? <Link href={href}>{displayName(product)}</Link> : displayName(product)}</h3>
      <p className="stamp-row">
        <GradeStamp grade={product.specs?.soldSecurePedal} />
      </p>
      <p className="mass">{mass ?? "—"}</p>
      {hole ? <p className="meta">{hole}</p> : null}
      {bestFor ? <p className="hook">{bestFor}</p> : null}
      {caveat ? <p className="meta">Caveat: {caveat}</p> : null}
      <p className="tile-actions">
        {href ? (
          <Link href={href} className="primary-link">
            Review
          </Link>
        ) : null}
        <SeeOnAmazon asin={product.asin} className="see-on-amazon" />
      </p>
    </article>
  );
}

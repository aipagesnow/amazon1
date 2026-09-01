import Link from "next/link";
import { GradeStamp } from "@/components/GradeStamp";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { hookFor, reviewCopy } from "@/content/editorial";
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
  const job = bestFor ?? reviewCopy[product.slug]?.job ?? hookFor(product);
  const bar = specValue(product, "shackleMm") ?? specValue(product, "chainMm");

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
      <dl className="tile-specs">
        {mass ? (
          <div>
            <dt>Weight</dt>
            <dd>{mass}</dd>
          </div>
        ) : null}
        {hole ? (
          <div>
            <dt>{kind?.toLowerCase().includes("chain") ? "Length" : "Hole"}</dt>
            <dd>{hole}</dd>
          </div>
        ) : null}
        {bar ? (
          <div>
            <dt>{product.specs?.chainMm ? "Chain" : "Shackle"}</dt>
            <dd>{bar}</dd>
          </div>
        ) : null}
      </dl>
      <p className="hook">{job}</p>
      {caveat ? <p className="meta">Watch: {caveat}</p> : null}
      <p className="tile-actions">
        {href ? (
          <Link href={href} className="primary-link">
            Read the review
          </Link>
        ) : (
          <span className="meta">No full review yet</span>
        )}
        <SeeOnAmazon asin={product.asin} className="see-on-amazon" />
      </p>
    </article>
  );
}

import Link from "next/link";
import { GradeStamp } from "@/components/GradeStamp";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { hookFor, reviewCopy } from "@/content/editorial";
import { displayName, Product, reviewHref, shortName, specLine } from "@/lib/products";

type Props = {
  product: Product;
  bestFor?: string;
  caveat?: string;
  compact?: boolean;
};

export function LockTile({ product, bestFor, caveat, compact = false }: Props) {
  const href = reviewHref(product);
  const kind = product.specs?.type;
  const job = bestFor ?? reviewCopy[product.slug]?.job ?? hookFor(product);
  const chips = specLine(product);
  const stampLabel = reviewCopy[product.slug]?.stamp;
  const name = compact ? shortName(product) : displayName(product);

  return (
    <article className={compact ? "lock-tile compact" : "lock-tile"}>
      {compact ? null : (
        <p className="kicker">
          {product.brand}
          {kind ? ` · ${kind}` : ""}
        </p>
      )}
      <h3>{href ? <Link href={href}>{name}</Link> : name}</h3>
      <p className="stamp-row">
        <GradeStamp grade={product.specs?.soldSecurePedal} label={stampLabel} />
      </p>
      <p className="hook">{job}</p>
      {!compact && chips.length ? (
        <p className="tile-spec-line">
          {chips.map((chip, i) => (
            <span key={chip}>
              {i > 0 ? " · " : ""}
              {chip}
            </span>
          ))}
        </p>
      ) : null}
      {!compact && caveat ? <p className="meta">{caveat}</p> : null}
      <p className="tile-actions">
        {href ? (
          <Link href={href} className="primary-link">
            Read the review
          </Link>
        ) : (
          <span className="meta">No full review of this lock yet</span>
        )}
        <SeeOnAmazon asin={product.asin} variant="text" />
      </p>
    </article>
  );
}

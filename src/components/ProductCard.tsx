import Link from "next/link";
import { GradeStamp } from "@/components/GradeStamp";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { hookFor, reviewCopy } from "@/content/editorial";
import { displayName, Product, reviewHref } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const href = reviewHref(product);
  return (
    <article className="card">
      <p className="meta">
        {product.brand} · {product.category}
      </p>
      <p className="stamp-row">
        <GradeStamp grade={product.specs?.soldSecurePedal} />
      </p>
      <h3>{displayName(product)}</h3>
      <p className="hook">{reviewCopy[product.slug]?.job ?? hookFor(product)}</p>
      {href ? (
        <p>
          <Link href={href} className="primary-link">
            Read the review
          </Link>
        </p>
      ) : (
        <p className="meta">In the slice; no full review on first launch.</p>
      )}
      <SeeOnAmazon asin={product.asin} className="see-on-amazon" />
    </article>
  );
}

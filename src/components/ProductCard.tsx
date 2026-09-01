import Link from "next/link";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { hookFor } from "@/content/editorial";
import { displayName, Product, reviewHref } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const href = reviewHref(product);
  return (
    <article className="card">
      <p className="meta">
        {product.brand} · {product.category}
        {product.specs?.soldSecurePedal ? ` · Sold Secure ${product.specs.soldSecurePedal}` : ""}
      </p>
      <h3>{displayName(product)}</h3>
      <p className="hook">{hookFor(product)}</p>
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

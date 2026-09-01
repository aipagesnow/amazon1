import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { SpecTable } from "@/components/SpecTable";
import { ReviewCopy } from "@/content/editorial";
import { displayName, Product, productBySlug, reviewHref } from "@/lib/products";

function Alt({ slug, why }: { slug: string; why: string }) {
  const product = productBySlug(slug);
  if (!product) return null;
  const href = reviewHref(product);
  return (
    <li>
      {href ? <Link href={href}>{displayName(product)}</Link> : displayName(product)} — {why}{" "}
      <SeeOnAmazon asin={product.asin} className="see-on-amazon" />
    </li>
  );
}

export function ReviewArticle({ product, copy }: { product: Product; copy: ReviewCopy }) {
  return (
    <article className="prose wrap">
      <p className="kicker">
        {product.brand} · {product.specs?.type} · ASIN {product.asin}
      </p>
      <h1>{displayName(product)}</h1>
      <p className="lede">{copy.hook}</p>
      <DisclosureStrip />

      <h2>Verdict</h2>
      <p>{copy.verdict}</p>

      <div className="grid-2">
        <div className="panel">
          <h3>Best for</h3>
          <ul>
            {copy.bestFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h3>Skip it if</h3>
          <ul>
            {copy.skipIf.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="goodbad">
        <div>
          <h3>The good</h3>
          <ul>
            {copy.good.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>The bad</h3>
          <ul>
            {copy.bad.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <h3>What we’d change</h3>
      <p>{copy.change}</p>

      <h2>Specs</h2>
      <p>From our product slice only. If a figure is missing, we omit it rather than guess.</p>
      <SpecTable product={product} />

      <h2>Best alternative</h2>
      <ul>
        <Alt slug={copy.altBest} why={copy.altBestWhy} />
        <Alt slug={copy.altSecond} why={copy.altSecondWhy} />
      </ul>

      <h2>FAQ</h2>
      {copy.faqs.map((faq) => (
        <div key={faq.q}>
          <h3>{faq.q}</h3>
          <p>{faq.a}</p>
        </div>
      ))}

      <p>
        <Link href="/guide">How to choose a bike lock</Link>
        {" · "}
        <Link href="/best">Best bike locks</Link>
        {" · "}
        <Link href="/method">How we research</Link>
      </p>

      <p>
        <SeeOnAmazon asin={product.asin} className="btn-amazon" />
      </p>
    </article>
  );
}

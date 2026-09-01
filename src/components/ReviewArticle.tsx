import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { GradeStamp } from "@/components/GradeStamp";
import { PageHero } from "@/components/PageHero";
import { SeeOnAmazon } from "@/components/SeeOnAmazon";
import { SpecFigures, SpecTable } from "@/components/SpecTable";
import { ReviewCopy } from "@/content/editorial";
import { EDITORIAL_CREDIT, reviewBanner } from "@/lib/photos";
import {
  displayName,
  Product,
  productBySlug,
  REVIEW_SLUGS,
  reviewHref,
} from "@/lib/products";

function AltCard({ slug, why, kicker }: { slug: string; why: string; kicker: string }) {
  const product = productBySlug(slug);
  if (!product) return null;
  const href = reviewHref(product);
  return (
    <article className="alt-card">
      <p className="kicker">{kicker}</p>
      <h3>{href ? <Link href={href}>{displayName(product)}</Link> : displayName(product)}</h3>
      <p>{why}</p>
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

function ReviewNav({ slug }: { slug: string }) {
  const index = (REVIEW_SLUGS as readonly string[]).indexOf(slug);
  const prev = index > 0 ? productBySlug(REVIEW_SLUGS[index - 1]) : null;
  const next =
    index >= 0 && index < REVIEW_SLUGS.length - 1
      ? productBySlug(REVIEW_SLUGS[index + 1])
      : null;
  if (!prev && !next) return null;
  return (
    <nav className="review-nav" aria-label="Other reviews">
      <div>
        {prev ? (
          <Link href={`/reviews/${prev.slug}`}>
            <p className="kicker">Previous</p>
            <h3>{displayName(prev)}</h3>
          </Link>
        ) : null}
      </div>
      <div className="next">
        {next ? (
          <Link href={`/reviews/${next.slug}`}>
            <p className="kicker">Next</p>
            <h3>{displayName(next)}</h3>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}

export function ReviewArticle({ product, copy }: { product: Product; copy: ReviewCopy }) {
  const art = reviewBanner(product.slug);
  const isChain = (product.specs?.type ?? "").toLowerCase().includes("chain");
  const vsHref = isChain
    ? "/vs/d-lock-vs-chain"
    : product.slug === "hiplok-d1000" || product.slug === "kryptonite-evolution-mini-7"
      ? "/vs/evolution-mini-7-vs-d1000"
      : "/vs/d-lock-vs-chain";
  const vsLabel = vsHref === "/vs/d-lock-vs-chain" ? "D-lock vs chain" : "Mini-7 vs D1000";

  return (
    <article>
      <PageHero
        image={art.src}
        alt={art.alt}
        kicker={`${product.brand} · ${product.specs?.type ?? "Lock"}`}
        title={displayName(product)}
        lede={copy.hook}
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <p className="stamp-row">
          <GradeStamp grade={product.specs?.soldSecurePedal} />
        </p>
        <p className="job-line">{copy.job}</p>
        <DisclosureStrip />
      </PageHero>

      <div className="wrap prose tight">
        <SpecFigures product={product} />

        <div className="desk-verdict">
          <p className="kicker">Desk verdict</p>
          <h2>Is it worth it?</h2>
          <p>{copy.verdict}</p>
        </div>

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

        {copy.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

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

        <div className="change-note">
          <h3>What we’d change</h3>
          <p>{copy.change}</p>
        </div>

        <h2>The workshop sheet</h2>
        <p>
          Figures from our product slice only. If a number is missing, we omit it rather than
          guess. ASIN {product.asin} is the UK listing this page is about.
        </p>
        <SpecTable product={product} />

        <h2>If not this lock</h2>
        <p>Same slice. Different job. Read the review before the Amazon button.</p>
        <div className="alt-grid">
          <AltCard slug={copy.altBest} why={copy.altBestWhy} kicker="Buy this instead if" />
          <AltCard slug={copy.altSecond} why={copy.altSecondWhy} kicker="Or this, if" />
        </div>

        <h2>Questions we keep getting</h2>
        <div className="faq-list">
          {copy.faqs.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>

        <p>
          Start with <Link href="/guide">how to choose a bike lock</Link> if you have not measured
          the rack. Compare the slice on <Link href="/best">best bike locks UK</Link>. Pair this
          with <Link href={vsHref}>{vsLabel}</Link>. How we work:{" "}
          <Link href="/method">methodology</Link>.
        </p>

        <div className="review-close">
          <p>
            Desk research, not a test lab. Grades come from Sold Secure; weights and sizes come
            from the slice. Prices change on Amazon — we do not print them.
          </p>
          <SeeOnAmazon asin={product.asin} className="btn-amazon" />
          <Link href="/reviews" className="primary-link">
            All reviews
          </Link>
        </div>

        <ReviewNav slug={product.slug} />
      </div>
    </article>
  );
}

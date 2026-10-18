import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ReviewArticle } from "@/components/ReviewArticle";
import { reviewCopy } from "@/content/editorial";
import { REVIEW_DIRECT_ANSWERS, REVIEW_FAQ_EXTRA, REVIEW_META_OVERRIDES, REVIEW_RETITLED, REVIEW_TITLE_OVERRIDES } from "@/content/thickening";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { displayName, productBySlug, REVIEW_SLUGS } from "@/lib/products";
import { docTitle, pageUrl } from "@/lib/site";

export function generateStaticParams() {
  return REVIEW_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  const copy = reviewCopy[slug];
  if (!product || !copy) return {};
  const title = REVIEW_TITLE_OVERRIDES[slug] ?? `${displayName(product)} review`;
  const description = REVIEW_META_OVERRIDES[slug] ?? copy.meta;
  const url = pageUrl(`/reviews/${product.slug}`);
  return {
    title: REVIEW_RETITLED.has(slug) ? docTitle(title) : title,
    description,
    alternates: { canonical: url },
        openGraph: {
      title: REVIEW_RETITLED.has(slug) ? docTitle(title).absolute : `${title} · Lock Desk`,
      description,
      url,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Lock Desk — UK bike lock comparisons",
        },
      ],
    },
  };
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const product = productBySlug(slug);
  const baseCopy = reviewCopy[slug];
  if (!product || !baseCopy) notFound();
  const copy = { ...baseCopy, faqs: [...baseCopy.faqs, ...(REVIEW_FAQ_EXTRA[slug] ?? [])] };

  const title = REVIEW_TITLE_OVERRIDES[slug] ?? `${displayName(product)} review`;
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title,
            description: REVIEW_META_OVERRIDES[slug] ?? copy.meta,
            path: `/reviews/${product.slug}`,
          }),
          faqJsonLd(copy.faqs),
        ]}
      />
      <ReviewArticle product={product} copy={copy} directAnswer={REVIEW_DIRECT_ANSWERS[slug]} />
    </>
  );
}

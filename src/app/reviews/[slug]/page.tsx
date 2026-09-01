import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ReviewArticle } from "@/components/ReviewArticle";
import { reviewCopy } from "@/content/editorial";
import { articleJsonLd, faqJsonLd, productJsonLd } from "@/lib/jsonld";
import { reviewBanner } from "@/lib/photos";
import { displayName, productBySlug, REVIEW_SLUGS } from "@/lib/products";
import { pageUrl } from "@/lib/site";

export function generateStaticParams() {
  return REVIEW_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  const copy = reviewCopy[slug];
  if (!product || !copy) return {};
  const title = `${displayName(product)} review`;
  const description = copy.verdict.slice(0, 158);
  const url = pageUrl(`/reviews/${product.slug}`);
  const banner = reviewBanner(product.slug);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · Lock Desk`,
      description,
      url,
      images: [{ url: banner.src, alt: banner.alt }],
    },
  };
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const product = productBySlug(slug);
  const copy = reviewCopy[slug];
  if (!product || !copy) notFound();

  const title = `${displayName(product)} review`;
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title,
            description: copy.verdict,
            path: `/reviews/${product.slug}`,
          }),
          faqJsonLd(copy.faqs),
          productJsonLd(product),
        ]}
      />
      <ReviewArticle product={product} copy={copy} />
    </>
  );
}

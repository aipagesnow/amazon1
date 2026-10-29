import type { ReactNode } from "react";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RichText } from "@/components/RichText";
import { DESK_LINE, type GapFaq, type GapSection } from "@/content/gap-pages";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";

type Props = {
  path: string;
  title: string;
  h1: string;
  meta: string;
  kicker: string;
  image: string;
  alt: string;
  direct: string;
  beforeSections?: ReactNode;
  sections: GapSection[];
  afterSections?: ReactNode;
  faqs: GapFaq[];
};

/** Shared shell for the guide/best-of gap pages — same blocks as /guide and /for/*. */
export function GapPage(props: Props) {
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({ title: props.h1, description: props.meta, path: props.path }),
          faqJsonLd(props.faqs),
        ]}
      />
      <PageHero image={props.image} alt={props.alt} kicker={props.kicker} title={props.h1} overlay>
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        <p className="direct-answer">{props.direct}</p>
        <p className="meta">
          {DESK_LINE} <Link href="/method">How we research</Link>.
        </p>
        {props.beforeSections}
        {props.sections.map((s) => (
          <section key={s.h2}>
            <h2>{s.h2}</h2>
            {s.paragraphs.map((p) => (
              <p key={p}>
                <RichText text={p} />
              </p>
            ))}
          </section>
        ))}
        {props.afterSections}
        <h2>Common questions</h2>
        <div className="faq-list">
          {props.faqs.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>
                <RichText text={faq.a} />
              </p>
            </div>
          ))}
        </div>
        <p>
          <Link href="/guide">How to choose a bike lock</Link> · <Link href="/best">Best of</Link> ·{" "}
          <Link href="/reviews">Reviews</Link> · <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link> ·{" "}
          <Link href="/method">How we research</Link>
        </p>
      </article>
    </>
  );
}

export function gapMetadata(path: string, title: string, description: string, canonical: string) {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} · Lock Desk`,
      description,
      url: canonical,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Lock Desk — UK bike lock comparisons" }],
    },
  };
}

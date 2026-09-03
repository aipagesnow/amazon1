import type { Metadata } from "next";
import Link from "next/link";
import { DisclosureStrip } from "@/components/DisclosureStrip";
import { JsonLd } from "@/components/JsonLd";
import { LockFinder } from "@/components/LockFinder";
import { PageHero } from "@/components/PageHero";
import { RichText } from "@/components/RichText";
import {
  GUIDE_CHOOSER,
  GUIDE_CHOOSER_INTRO,
  GUIDE_FAQS,
  GUIDE_INTRO,
  GUIDE_LEDE,
  GUIDE_META,
  GUIDE_SECTIONS,
  GUIDE_START,
} from "@/content/pages";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { EDITORIAL_CREDIT, photoAlt, photos } from "@/lib/photos";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to choose a bike lock",
  description: GUIDE_META,
  alternates: { canonical: pageUrl("/guide") },
  openGraph: {
    title: "How to choose a bike lock · Lock Desk",
    description: GUIDE_META,
    url: pageUrl("/guide"),
    images: [{ url: photos.fit, alt: photoAlt.fit }],
  },
};

export default function GuidePage() {
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: "How to choose a bike lock",
            description: GUIDE_META,
            path: "/guide",
          }),
          faqJsonLd(GUIDE_FAQS),
        ]}
      />
      <PageHero
        image={photos.fit}
        alt={photoAlt.fit}
        kicker="How to choose"
        title="How to choose a bike lock"
        lede={GUIDE_LEDE}
        caption={EDITORIAL_CREDIT}
        overlay
      >
        <p className="kicker">Start here</p>
        <ol className="start-here">
          {GUIDE_START.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ol>
        <p>
          <a href="#finder" className="primary-link">
            Find a lock
          </a>
        </p>
        <DisclosureStrip />
      </PageHero>
      <article className="prose wrap tight">
        {GUIDE_INTRO.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <LockFinder />

        {GUIDE_SECTIONS.map((section) => (
          <section key={section.h2}>
            <h2>{section.h2}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p}>
                <RichText text={p} />
              </p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item.lead}>
                    <strong>{item.lead}</strong> {item.text}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <div className="chooser" id="chooser">
          <h2>Which lock to pick</h2>
          <p>{GUIDE_CHOOSER_INTRO}</p>
          <div className="spec-scroll">
            <table className="spec">
              <thead>
                <tr>
                  <th>Situation</th>
                  <th>Pick</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                {GUIDE_CHOOSER.map((row) => (
                  <tr key={row.slug}>
                    <td>{row.situation}</td>
                    <td>
                      <Link href={`/reviews/${row.slug}`}>{row.name}</Link>
                    </td>
                    <td>{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Full table: <Link href="/best">best of</Link>. Comparison:{" "}
            <Link href="/vs/evolution-mini-7-vs-d1000">Evolution Mini-7 vs D1000</Link>.
          </p>
        </div>

        <h2>Common questions</h2>
        <div className="faq-list">
          {GUIDE_FAQS.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>
                <RichText text={faq.a} />
              </p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

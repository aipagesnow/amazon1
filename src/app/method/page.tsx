import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";
import {
  METHOD_FAQS,
  METHOD_INTRO,
  METHOD_META,
  METHOD_MORE,
  METHOD_SHAPE,
  METHOD_USE,
  METHOD_WHY,
  METHOD_WONT,
} from "@/content/pages";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { pageUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we research bike locks",
  description: METHOD_META,
  alternates: { canonical: pageUrl("/method") },
  openGraph: {
    title: "How we research bike locks · Lock Desk",
    description: METHOD_META,
    url: pageUrl("/method"),
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

export default function MethodPage() {
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: "How we research bike locks",
            description: METHOD_META,
            path: "/method",
          }),
          faqJsonLd(METHOD_FAQS),
        ]}
      />
      <article className="prose wrap">
        <p className="kicker">How we work</p>
        <h1>How we research bike locks</h1>
        <div className="method-box">
          <p>{METHOD_INTRO}</p>
        </div>

        <h2>What we use</h2>
        <ul>
          {METHOD_USE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          <RichText text={METHOD_SHAPE} />
        </p>
        {METHOD_MORE.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>What we will not claim</h2>
        <ul>
          {METHOD_WONT.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2>Amazon</h2>
        <p>
          {site.name} is not Amazon. Outbound buttons say See on Amazon. As an Amazon Associate I
          earn from qualifying purchases. Prices and stock are Amazon’s, on the day you click.
        </p>

        <h2>Why this matters</h2>
        {METHOD_WHY.map((p) => (
          <p key={p}>
            <RichText text={p} />
          </p>
        ))}

        <h2>Common questions</h2>
        <div className="faq-list">
          {METHOD_FAQS.map((faq) => (
            <div className="faq-item" key={faq.q}>
              <h3>{faq.q}</h3>
              <p>
                <RichText text={faq.a} />
              </p>
            </div>
          ))}
        </div>
        <p>
          Read <Link href="/guide">how to choose a bike lock</Link> first if you have not measured the
          stand yet. Full reviews: <Link href="/reviews">bike lock reviews</Link>. Who we are:{" "}
          <Link href="/about">About</Link>.
        </p>
      </article>
    </>
  );
}

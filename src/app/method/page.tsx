import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RichText } from "@/components/RichText";
import {
  METHOD_SHAPE,
  METHOD_USE,
  METHOD_WHY,
  METHOD_WONT,
} from "@/content/pages";
import { articleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { pageUrl, site } from "@/lib/site";

const METHOD_META_TRIM =
  "Lock Desk is desk research, not a test lab. Sold Secure grades, manufacturer specs, and UK insurance wording. We do not pretend we attacked these locks.";

const METHOD_LEAD =
  "Desk research. We have not cut these locks open. If a sentence would only be true because we attacked a lock, we do not write it. Every claim on a review page should point to a spec sheet, a Sold Secure grade, or the manufacturer’s own notes.";

const METHOD_MORE = [
  "We started with locks UK riders actually search for: Sold Secure Gold and Diamond D-locks, plus one Gold chain for reach at home. That is why the site is six full reviews, not a catalogue of every cable lock on Amazon.",
  "When a listing photo and the Sold Secure record disagree — for example a kit that looks fully graded when only the D-lock is approved — we follow the grade and the manufacturer’s notes, not the photo.",
  "Weights and locking areas are taken from the listing or manufacturer sheet we recorded. If two listings disagree, we say what we used rather than invent a middle number.",
];

const METHOD_FAQS = [
  {
    q: "Have you cut these locks open?",
    a: "No. Lock Desk is desk research. Sold Secure grades and manufacturer specs are the evidence. Advertised cut-times are marketing, not our tests.",
  },
  {
    q: "Why only six reviews?",
    a: "We would rather six honest pages than a long catalogue we have not written. Ghost products such as the Hiplok DX1000 and OnGuard Pitbulls may be named for context. They do not get a full review until we have recorded the same facts.",
  },
  {
    q: "Do Amazon links change the verdict?",
    a: "No. Amazon Associate links fund the site. Buttons say See on Amazon. Prices and stock are Amazon’s on the day you click. See [About](/about#disclosure).",
  },
];

export const metadata: Metadata = {
  title: "How we research bike locks",
  description: METHOD_META_TRIM,
  alternates: { canonical: pageUrl("/method") },
  openGraph: {
    title: "How we research bike locks · Lock Desk",
    description: METHOD_META_TRIM,
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
            description: METHOD_META_TRIM,
            path: "/method",
          }),
          faqJsonLd(METHOD_FAQS),
        ]}
      />
      <article className="prose wrap">
        <p className="kicker">How we work</p>
        <h1>How we research bike locks</h1>
        <div className="method-box">
          <p>{METHOD_LEAD}</p>
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
          <li>
            We do not keep a live insurer approved-lock list. Those lists change, and we are not
            selling you a policy.
          </li>
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
        <p>
          You should know what stands behind a verdict. We help a UK rider match grade, fit, and
          carry — from facts we can stand behind. Start with{" "}
          <Link href="/guide">how to choose</Link>, then the <Link href="/reviews">reviews</Link> or
          the <Link href="/best">best of</Link> table.
        </p>

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

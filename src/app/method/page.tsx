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
import {
  SOLD_SECURE_APPROVED_SEARCH,
  SOLD_SECURE_PEDAL_CYCLE_RATINGS,
} from "@/lib/sold-secure";

const METHOD_META_TRIM =
  "How Lock Desk researches bike locks: Sold Secure grades, manufacturer specs, and UK insurance wording. We have not cut these locks open.";

const METHOD_LEAD =
  "We research locks from Sold Secure grades and manufacturer specs. We have not cut these locks open. If a sentence would only be true because we attacked a lock, we leave it out. Every claim on a review page should point to a spec sheet, a Sold Secure grade, or the manufacturer’s own notes.";

const METHOD_MORE = [
  "We started with locks UK riders often search for: Sold Secure Gold and Diamond D-locks, a Gold folding lock, and one Gold chain for reach at home. That is why there are eleven full reviews rather than a catalogue of every cable lock on Amazon. Eleven is the full set for now.",
  "When a listing photo and the Sold Secure record disagree — for example a kit that looks fully graded when only the D-lock is approved — we follow the grade and the manufacturer’s notes rather than the photo.",
  "Weights and locking areas come from the listing or manufacturer sheet we recorded. If two listings disagree, we say which source we used instead of inventing a middle number.",
];

const METHOD_FAQS = [
  {
    q: "Have you cut these locks open?",
    a: "No. Lock Desk is based on Sold Secure grades and manufacturer specs. Advertised cut-times are marketing claims from the brand, not tests we have run.",
  },
  {
    q: "Why only eleven reviews?",
    a: "We would rather publish eleven pages with the same facts on record — Sold Secure grade, weight, locking area or length, and whether it clips on — than stretch into a long catalogue we have not researched. Names we have not recorded that way do not get a review.",
  },
  {
    q: "Do Amazon links change the verdict?",
    a: "No. Some links go to Amazon.co.uk and may earn Lock Desk a small commission. Buttons say See on Amazon. Prices and stock are Amazon’s on the day you click. See [About](/about#disclosure).",
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
        <p className="kicker">Method</p>
        <h1>How we research bike locks</h1>
        <div className="method-box">
          <p>{METHOD_LEAD}</p>
        </div>

        <h2>What we use</h2>
        <ul>
          {METHOD_USE.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
        <p>
          <RichText text={METHOD_SHAPE} />
        </p>
        {METHOD_MORE.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2>How to check a grade</h2>
        <p>
          Grades on Lock Desk come from Sold Secure’s public record and from manufacturer notes.
          Before you buy, confirm the model on Sold Secure’s{" "}
          <a
            href={SOLD_SECURE_APPROVED_SEARCH}
            target="_blank"
            rel="noopener noreferrer"
          >
            approved product search
          </a>
          . Pedal-cycle rating bands are explained on their{" "}
          <a
            href={SOLD_SECURE_PEDAL_CYCLE_RATINGS}
            target="_blank"
            rel="noopener noreferrer"
          >
            pedal cycle ratings
          </a>{" "}
          page. This site does not invent Sold Secure product URLs.
        </p>

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
        <p className="disclosure disclosure-subtle">
          Amazon Associate links may earn Lock Desk a commission.{" "}
          <Link href="/about#disclosure">Disclosure</Link>
        </p>
        <p>
          {site.name} is not Amazon. Outbound buttons say See on Amazon. Prices and stock are
          Amazon’s on the day you click.
        </p>

        <h2>How to use these reviews</h2>
        {METHOD_WHY.map((p) => (
          <p key={p}>
            <RichText text={p} />
          </p>
        ))}
        <p>
          You should be able to see what stands behind a verdict. These pages are meant to help a
          UK rider match grade, fit, and carry using facts we can point to. Start with{" "}
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
          If you have not measured the stand yet, read{" "}
          <Link href="/guide">how to choose a bike lock</Link> first. Full reviews are under{" "}
          <Link href="/reviews">bike lock reviews</Link>. Who we are is on{" "}
          <Link href="/about">About</Link>.
        </p>
      </article>
    </>
  );
}

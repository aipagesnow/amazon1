import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd } from "@/lib/jsonld";
import { pageUrl, site } from "@/lib/site";

const META =
  "Lock Desk is desk research, not a test lab. Sold Secure grades, manufacturer specs, and UK insurance wording. We do not pretend we attacked these locks.";

export const metadata: Metadata = {
  title: "How we research bike locks",
  description: META,
  alternates: { canonical: pageUrl("/method") },
  openGraph: {
    title: "How we research bike locks · Lock Desk",
    description: META,
    url: pageUrl("/method"),
  },
};

export default function MethodPage() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "How we research bike locks",
          description: META,
          path: "/method",
        })}
      />
      <article className="prose wrap">
        <p className="kicker">How we work</p>
        <h1>How we research bike locks</h1>
        <div className="method-box">
          <p>
            Desk research. We have not cut these locks open. If a sentence would only be true
            because we attacked a lock, we do not write it.
          </p>
        </div>

        <h2>What we use</h2>
        <ul>
          <li>The product record on this site: UK ASIN, name, brand, and the specs we have for it.</li>
          <li>Manufacturer documentation.</li>
          <li>Sold Secure’s public grades for pedal cycles and, where we have it, powered cycles.</li>
          <li>
            How UK cycle insurance typically names Gold and Diamond. We are not your broker and we
            do not keep a live list of approved models.
          </li>
        </ul>
        <p>
          The verdict comes first, labelled Verdict: who it is for, and who should skip it. Then
          Best for / Skip, The good, The bad, What we’d change, the spec sheet, alternatives from
          the same set of locks, and Common questions. Every review links up to{" "}
          <Link href="/guide">how to choose a bike lock</Link> and across to other reviews.
        </p>

        <h2>What we will not claim</h2>
        <ul>
          <li>We have not taken a grinder or cropper to these locks.</li>
          <li>We do not invent a weight, shackle size, or grade. If a figure is missing, we leave it out.</li>
          <li>We do not print live prices. They change on Amazon.</li>
          <li>We do not copy Amazon customer reviews or star ratings onto these pages.</li>
          <li>
            Photographs here are editorial — streets, stands, unbranded locks — not pictures of the
            named product. We cannot yet pull Amazon’s official listing photos.
          </li>
        </ul>

        <h2>Amazon</h2>
        <p>
          {site.name} is not Amazon. Outbound buttons say See on Amazon. As an Amazon Associate I
          earn from qualifying purchases. Prices and stock are Amazon’s, on the day you click.
        </p>

        <h2>What this means for you</h2>
        <p>
          You should know what stands behind a verdict. We help a UK rider match Sold Secure grade,
          fit, and carry — from facts we can stand behind.
        </p>
      </article>
    </>
  );
}

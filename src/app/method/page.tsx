import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd } from "@/lib/jsonld";
import { pageUrl, site } from "@/lib/site";

const META =
  "Lock Desk is desk research, not a test lab. Sold Secure grades, manufacturer specs, and UK insurance wording. We have not attacked these locks.";

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
        <p className="kicker">Methodology</p>
        <h1>How we research bike locks</h1>
        <div className="method-box">
          <p>
            This is desk research, not a test lab. We have not cut these locks open. We only write
            claims we can back with specs, Sold Secure grades, and manufacturer information.
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
          Each review opens with a verdict: who it is for, and who should skip it. Then Best for /
          Skip, The good, The bad, What we’d change, the spec sheet, alternatives from the same set
          of locks, and Common questions. Every review links up to{" "}
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

        <h2>Why this matters</h2>
        <p>
          A verdict here is our reading of the specs and grades, not a lab result. Use it to match
          Sold Secure grade, fit, and carry to your bike, from facts we can stand behind.
        </p>
      </article>
    </>
  );
}

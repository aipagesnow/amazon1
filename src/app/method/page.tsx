import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd } from "@/lib/jsonld";
import { pageUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How we research bike locks",
  description:
    "Lock Desk is desk research, not a test lab. We use Sold Secure grades, manufacturer specs, and published UK insurance wording. We do not pretend we attacked these locks.",
  alternates: { canonical: pageUrl("/method") },
  openGraph: {
    title: "How we research bike locks · Lock Desk",
    description: "What we will and will not claim.",
    url: pageUrl("/method"),
  },
};

export default function MethodPage() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "How we research bike locks",
          description: String(metadata.description),
          path: "/method",
        })}
      />
      <article className="prose wrap">
        <p className="kicker">How we work</p>
        <h1>How we research bike locks</h1>
        <p className="lede">
          Lock Desk is desk research. We have not cut these locks open, and we are not a shop.
        </p>
        <p>
          The point of this page is simple: you should know what stands behind a verdict. If a
          sentence would only be true because we spent weeks attacking a lock, we do not write it.
          We help a UK rider match Sold Secure grade, fit, and carry — from facts we can stand
          behind.
        </p>

        <h2>What a verdict is based on</h2>
        <ul>
          <li>The product record on this site: UK ASIN, name, brand, and the specs we have for it.</li>
          <li>Manufacturer documentation.</li>
          <li>Sold Secure’s public grades for pedal cycles and, where we have it, powered cycles.</li>
          <li>
            How UK cycle insurance typically names Gold and Diamond. We are not your broker and we
            do not keep a live list of approved models.
          </li>
        </ul>

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

        <h2>How a review is laid out</h2>
        <p>
          The verdict comes first: who it is for, and who should skip it. That is also the “is it
          worth it?” answer. Then Best for / Skip, The good, The bad, What we’d change, the spec
          sheet, alternatives from the same set of locks, and a short FAQ. Every review links up to{" "}
          <Link href="/guide">how to choose a bike lock</Link> and across to other reviews.
        </p>

        <h2>Amazon</h2>
        <p>
          {site.name} is not Amazon. Outbound buttons say See on Amazon. As an Amazon Associate we
          earn from qualifying purchases. Prices and stock are Amazon’s, on the day you click.
        </p>
        <p>
          Operated by {site.operator}. We do not publish a contact mailbox yet — see{" "}
          <Link href="/about">About</Link>.
        </p>
      </article>
    </>
  );
}

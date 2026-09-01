import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd } from "@/lib/jsonld";
import { pageUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How Lock Desk researches bike locks: specifications, manufacturer materials, Sold Secure grades. Not hands-on lab tests.",
  alternates: { canonical: pageUrl("/method") },
  openGraph: {
    title: "Methodology · Lock Desk",
    description: "What we will and will not claim.",
    url: pageUrl("/method"),
  },
};

export default function MethodPage() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: "Methodology",
          description: String(metadata.description),
          path: "/method",
        })}
      />
      <article className="prose wrap">
        <p className="kicker">E-E-A-T</p>
        <h1>How Lock Desk researches locks</h1>
        <p className="lede">
          These pages are desk research. They are not a test lab and they are not a shop.
        </p>
        <h2>What we use</h2>
        <ul>
          <li>The product slice in this site’s data file: ASIN, name, brand, category, specs.</li>
          <li>Manufacturer documentation and Sold Secure’s public product grades.</li>
          <li>Publicly available information about how UK cycle insurance typically names Gold and Diamond.</li>
        </ul>
        <h2>What we will not claim</h2>
        <ul>
          <li>We did not grind, crop, or pick these locks.</li>
          <li>We do not invent weights, shackle sizes, or grades. If a spec is missing, we omit it.</li>
          <li>We do not print live prices. They change on Amazon.</li>
          <li>We do not republish Amazon customer reviews or star ratings.</li>
          <li>
            Photographs are editorial atmosphere — generic streets and unbranded locks — not pictures
            of the named ASINs.
          </li>
        </ul>
        <h2>Amazon</h2>
        <p>
          {site.name} is not Amazon. Outbound buttons say See on Amazon. As an Amazon Associate we
          earn from qualifying purchases. A buyer of this site sets their own associate tag; we do
          not transfer an Associates account.
        </p>
        <p>
          Operator: {site.operator}. Contact: {site.contact}.
        </p>
      </article>
    </>
  );
}

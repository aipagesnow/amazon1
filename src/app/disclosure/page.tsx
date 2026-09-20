import type { Metadata } from "next";
import Link from "next/link";
import { pageUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclosure",
  description:
    "Amazon Associates disclosure for Lock Desk. We may earn a commission from qualifying Amazon.co.uk purchases. We are not Amazon.",
  alternates: { canonical: pageUrl("/disclosure") },
};

export default function DisclosurePage() {
  return (
    <article className="prose wrap">
      <p className="kicker">Disclosure</p>
      <h1>Amazon Associates disclosure</h1>
      <p className="lede">
        As an Amazon Associate, Lock Desk earns from qualifying purchases. We are not Amazon.
      </p>

      <h2>How links work</h2>
      <p>
        Some links on this site go to Amazon.co.uk. If you click one and later buy something,
        Amazon may pay Lock Desk a commission. That commission does not change the price you pay,
        and it does not change our verdicts.
      </p>
      <p>
        Affiliate links use Amazon&apos;s usual product URL with an Associates tag, and carry{" "}
        <code>rel=&quot;nofollow sponsored&quot;</code>. Buttons say See on Amazon. We do not use
        the Product Advertising API, and we do not scrape Amazon for prices or star ratings.
      </p>
      <p>
        A short note appears on pages with Amazon links, before those links. Prices and stock on
        Amazon change; always check the Amazon listing for the current offer.
      </p>

      <h2>Editorial independence</h2>
      <p>
        Which locks we cover, how we rank them on the best-of table, and what we write in each
        review come from Sold Secure grades, manufacturer specs, and typical UK insurance wording —
        not from paid placements. Amazon does not review or approve these pages. More detail:{" "}
        <Link href="/method">how we research bike locks</Link>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclosure: <a href={`mailto:${site.contact}`}>{site.contact}</a>.
        See also <Link href="/about">About</Link> and <Link href="/privacy">Privacy</Link>.
      </p>
    </article>
  );
}

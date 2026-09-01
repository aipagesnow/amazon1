import type { Metadata } from "next";
import Link from "next/link";
import { DISCLOSURE } from "@/components/DisclosureStrip";
import { site } from "@/lib/site";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About, disclosure, and privacy",
  description: "Who operates Lock Desk, Amazon Associates disclosure, and privacy. We are not Amazon.",
  alternates: { canonical: pageUrl("/about") },
};

export default function AboutPage() {
  return (
    <article className="prose wrap">
      <p className="kicker">Masthead</p>
      <h1>About Lock Desk</h1>
      <p className="lede">
        A UK magazine about bike locks. Sold Secure, insurance, and the lock you will still carry.
      </p>
      <p>
        {site.name} is operated by {site.operator}. It is a product-discovery and comparison
        publication for D-locks and chains. It is not a shop, not a marketplace, and not Amazon.
      </p>
      <p>
        We write for UK commuters and cyclists. Organic search is how we hope to be read. Affiliate
        links are how the site is funded after it is useful.
      </p>
      <p>
        Contact: <a href={`mailto:${site.contact}`}>{site.contact}</a>
      </p>

      <h2 id="disclosure">Disclosure</h2>
      <p>{DISCLOSURE}</p>
      <p>
        We are not Amazon. Prices and availability change on Amazon. Disclosure appears on every
        page that has an affiliate link, before that link.
      </p>
      <p>
        How we research: <Link href="/method">methodology</Link>.
      </p>

      <h2 id="privacy">Privacy</h2>
      <p>
        We do not sell personal data. This first-launch site does not run a named analytics product.
        If that changes, this paragraph will name it.
      </p>
      <p>
        Outbound clicks to Amazon.co.uk are their site, under their privacy notice.
      </p>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { DISCLOSURE } from "@/components/DisclosureStrip";
import { pageUrl, site } from "@/lib/site";

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
        We write for UK commuters and cyclists who need a grade their insurer will accept and a
        weight they will actually take out of the house. Organic search is how we hope to be read.
        Affiliate links are how the site is funded after it is useful.
      </p>
      <p>
        The first-launch set is a small cluster: a how-to-choose pillar, one best-of table, six
        reviews, two head-to-heads, and two use-cases. We do not add extra URLs to look large.
      </p>
      <p>
        We do not publish a contact mailbox yet. When we do, it will be listed here. Until then,
        this page is the record of who operates the site, how we are paid, and how we treat data.
      </p>

      <h2 id="disclosure">Disclosure</h2>
      <p>{DISCLOSURE}</p>
      <p>
        We are not Amazon. Prices and availability change on Amazon. Disclosure appears on every
        page that has an affiliate link, before that link. Buttons say See on Amazon. We do not
        scrape prices or star ratings.
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

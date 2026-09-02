import type { Metadata } from "next";
import Link from "next/link";
import { DISCLOSURE } from "@/components/DisclosureStrip";
import { ALTERNATIVES_PATH } from "@/lib/products";
import { pageUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About, disclosure, and privacy",
  description: "Who runs Lock Desk, how Amazon links work, and privacy. We are not Amazon.",
  alternates: { canonical: pageUrl("/about") },
};

export default function AboutPage() {
  return (
    <article className="prose wrap">
      <p className="kicker">About</p>
      <h1 id="about">About Lock Desk</h1>
      <nav className="jump-list" aria-label="On this page">
        <a href="#about">About</a>
        <a href="#disclosure">Disclosure</a>
        <a href="#privacy">Privacy</a>
        <Link href="/method">How we research</Link>
      </nav>
      <p className="lede">
        Lock Desk compares UK D-locks and chains. We look at Sold Secure grades, insurance
        wording, and whether you will actually carry the lock.
      </p>
      <p>
        {site.name} is run by {site.operator}. It is not a shop, not a marketplace, and not Amazon.
        We write for UK riders who need a grade their insurer will accept and a lock they will take
        to work. Amazon Associate links fund the site. They do not change the verdict.
      </p>
      <p>
        We review six locks in detail rather than listing every cable lock on Amazon: three Diamond
        D-locks, two Gold D-locks, and one Gold chain. The reviews are desk research — Sold Secure
        grades, manufacturer specs, and whether you will actually carry the lock — not a cutting
        lab. There is also a page for people looking for{" "}
        <Link href={ALTERNATIVES_PATH}>alternatives to the New York Mini</Link>.
      </p>
      <p>
        If you are choosing a lock, start with <Link href="/guide">how to choose a bike lock</Link>,
        then the <Link href="/reviews">reviews</Link>. If you already know the job — commute or
        insurance — those guides name a pick and why.
      </p>
      <p>
        We do not publish a contact email yet. When we do, it will be listed here. Until then, this
        page records who runs the site, how we are paid, and how we treat data.
      </p>

      <h2 id="disclosure">Disclosure</h2>
      <p>{DISCLOSURE}</p>
      <p>
        We are not Amazon. Prices and availability change on Amazon. This note appears on every page
        that has an affiliate link, before that link. Buttons say See on Amazon. We do not scrape
        prices or star ratings.
      </p>
      <p>
        How we research: <Link href="/method">how we research bike locks</Link>.
      </p>

      <h2 id="privacy">Privacy</h2>
      <p>
        We do not sell personal data. This site does not currently run a named analytics product. If
        that changes, this paragraph will name it.
      </p>
      <p>
        Clicks through to Amazon.co.uk are their site, under their privacy notice.
      </p>
    </article>
  );
}

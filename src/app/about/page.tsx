import type { Metadata } from "next";
import Link from "next/link";
import { ALTERNATIVES_PATH } from "@/lib/products";
import { pageUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About, disclosure, and privacy",
  description:
    "Who operates Lock Desk, Amazon Associates disclosure, and privacy. We are not Amazon.",
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
        A small UK magazine about D-locks and chains — Sold Secure, insurance, and the lock you
        will still carry.
      </p>
      <p>
        {site.name} is operated by {site.operator}. It is not a shop, not a marketplace, and not
        Amazon. We write for UK riders who need a grade their insurer will accept and a weight they
        will take out of the house. Some links go to Amazon.co.uk. If you buy through them, Lock Desk
        may earn a small commission. That does not change the verdict.
      </p>
      <p>
        The magazine is small on purpose. We would rather eleven honest reviews than a catalogue we
        have not written. One extra URL exists for a search people actually type:{" "}
        <Link href={ALTERNATIVES_PATH}>alternatives to the New York Mini</Link>. It is not in the
        main nav. It is a landing, not a section.
      </p>
      <p>
        If you are choosing a lock, start with <Link href="/guide">how to choose a bike lock</Link>,
        then the <Link href="/reviews">reviews</Link> or the <Link href="/best">best of</Link>{" "}
        table. Job-led pages cover <Link href="/for/commuting">commuting</Link> and{" "}
        <Link href="/for/insurance">insurance</Link>. Side-by-side pages cover{" "}
        <Link href="/vs/evolution-mini-7-vs-d1000">Evolution Mini-7 vs D1000</Link> and{" "}
        <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link>.
      </p>
      <p>
        Contact:{" "}
        <a href={`mailto:${site.contact}`}>{site.contact}</a>. Questions about a review, a
        disclosure, or this magazine go there. This page is still the record of who operates the
        site, how we are paid, and how we treat data.
      </p>

      <h2 id="disclosure">Disclosure</h2>
      <p>
        As an Amazon Associate, Lock Desk earns from qualifying purchases. We are not Amazon.
        Prices and availability change on Amazon. A short note appears on pages with Amazon links,
        before those links. Buttons say See on Amazon. We do not scrape prices or star ratings.
      </p>
      <p>
        How we research: <Link href="/method">how we research bike locks</Link>.
      </p>

      <h2 id="privacy">Privacy</h2>
      <p>
        We do not sell personal data. This site does not currently run a named analytics product. If
        that changes, this paragraph will name it.
      </p>
      <p>Outbound clicks to Amazon.co.uk are their site, under their privacy notice.</p>
    </article>
  );
}

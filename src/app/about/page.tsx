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
        <a href="#who">Who writes this</a>
        <a href="#disclosure">Disclosure</a>
        <a href="#privacy">Privacy</a>
        <Link href="/method">How we research</Link>
      </nav>
      <p className="lede">
        A small UK comparison site for D-locks and chains — eleven locks, Sold Secure grades,
        insurance wording, and the weight you will still take to work.
      </p>
      <p>
        {site.name} is an independent UK comparison site. It is not a shop, not a marketplace, and
        not Amazon. We write for UK riders who need a grade their insurer will accept and a weight
        they will take out of the house. Some links go to Amazon.co.uk. If you buy through them,
        Lock Desk may earn a small commission. That does not change the verdict.
      </p>
      <p>
        The set is eleven locks on purpose. This is not a full catalogue of every cable lock on
        Amazon. Eleven honest reviews beat pages we have not written. One extra URL exists for a
        search people actually type:{" "}
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

      <h2 id="who">Who writes this</h2>
      <p>
        Lock Desk is desk research from a UK rider perspective. We read Sold Secure grades,
        manufacturer specs, and typical insurance wording. We have not run a lab, and we have not
        attacked these locks with grinders or bolt croppers. Verdicts are our reading of those
        facts — grade, fit, and carry — not a hands-on security test. How that works in detail:{" "}
        <Link href="/method">how we research bike locks</Link>.
      </p>
      <p>
        Independent UK desk research site. Contact details are provided on handover if you buy the
        site.
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

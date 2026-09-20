import type { Metadata } from "next";
import Link from "next/link";
import { ALTERNATIVES_PATH } from "@/lib/products";
import { pageUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Lock Desk",
  description:
    "Who runs Lock Desk, how to contact us, and where to find our Amazon Associates disclosure and privacy notice.",
  alternates: { canonical: pageUrl("/about") },
};

export default function AboutPage() {
  return (
    <article className="prose wrap">
      <p className="kicker">About</p>
      <h1 id="about">About Lock Desk</h1>
      <nav className="jump-list" aria-label="On this page">
        <a href="#who">Who writes this</a>
        <a href="#contact">Contact</a>
        <Link href="/disclosure">Disclosure</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/method">How we research</Link>
      </nav>
      <p className="lede">
        Lock Desk is a small UK comparison site for D-locks and chains. We cover eleven locks,
        Sold Secure grades, insurance wording, and whether you will still take the lock to work.
      </p>
      <p>
        {site.name} is independent. It is not a shop, a marketplace, or Amazon. We write for UK
        riders who need a grade their insurer will accept and a weight they will take out of the
        house. Some links go to Amazon.co.uk. If you buy through them, Lock Desk may earn a small
        commission. That commission does not change our verdicts.
      </p>
      <p>
        We keep the set to eleven locks because we would rather publish full reviews we can stand
        behind than stretch into a catalogue of every cable lock on Amazon. There is also one
        extra page for a search people often type:{" "}
        <Link href={ALTERNATIVES_PATH}>alternatives to the New York Mini</Link>. It sits outside
        the main nav because it is only one landing page for that search.
      </p>
      <p>
        If you are choosing a lock, start with <Link href="/guide">how to choose a bike lock</Link>,
        then the <Link href="/reviews">reviews</Link> or the <Link href="/best">best of</Link>{" "}
        table. There are also job-led pages for <Link href="/for/commuting">commuting</Link> and{" "}
        <Link href="/for/insurance">insurance</Link>, and side-by-side pages for{" "}
        <Link href="/vs/evolution-mini-7-vs-d1000">Evolution Mini-7 vs D1000</Link> and{" "}
        <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link>.
      </p>

      <h2 id="who">Who writes this</h2>
      <p>
        Lock Desk is written from a UK rider perspective using Sold Secure grades, manufacturer
        specs, and typical insurance wording. We have not attacked these locks with grinders or
        bolt croppers. Our verdicts are a reading of those facts — mainly grade, fit, and carry —
        rather than a hands-on security test. More detail is on{" "}
        <Link href="/method">how we research bike locks</Link>.
      </p>
      <p>
        Lock Desk is published by Aivora Digital. It is an independent UK comparison site, not a
        shop and not Amazon.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        For questions, corrections, or anything else about this site, email{" "}
        <a href={`mailto:${site.contact}`}>{site.contact}</a>. We read every message and aim to
        reply within a few working days.
      </p>
      <p>
        Full affiliate disclosure: <Link href="/disclosure">Disclosure</Link>. Privacy notice:{" "}
        <Link href="/privacy">Privacy</Link>. Or use the{" "}
        <Link href="/contact">contact page</Link>.
      </p>
    </article>
  );
}

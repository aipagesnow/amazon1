import type { Metadata } from "next";
import Link from "next/link";
import { pageUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Lock Desk at ${site.contact}. Corrections, questions, and feedback welcome.`,
  alternates: { canonical: pageUrl("/contact") },
};

export default function ContactPage() {
  return (
    <article className="prose wrap">
      <p className="kicker">Contact</p>
      <h1>Contact Lock Desk</h1>
      <p className="lede">
        Lock Desk is a small UK bike-lock comparison site. We read every message about the reviews,
        the research method, or the site itself.
      </p>
      <p>
        Email <a href={`mailto:${site.contact}`}>{site.contact}</a>. We aim to reply within a few
        working days.
      </p>
      <p>
        Lock Desk is published by Aivora Digital. It is not Amazon, and it is not a shop — product
        links go to Amazon.co.uk and may earn a commission. Full detail:{" "}
        <Link href="/disclosure">Disclosure</Link> and <Link href="/privacy">Privacy</Link>.
      </p>
      <p>
        For who writes the reviews and how we work, see <Link href="/about">About</Link> and{" "}
        <Link href="/method">how we research</Link>.
      </p>
    </article>
  );
}

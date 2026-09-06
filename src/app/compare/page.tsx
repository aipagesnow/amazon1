import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare bike locks",
  description:
    "Side-by-side Lock Desk comparisons: Evolution Mini-7 vs D1000, and D-lock vs chain.",
  alternates: { canonical: pageUrl("/compare") },
};

export default function ComparePage() {
  return (
    <article className="prose wrap">
      <p className="kicker">Compare</p>
      <h1>Compare bike locks</h1>
      <p className="lede">
        Two side-by-side pages for the choices UK riders ask most. For a guided pick, use{" "}
        <Link href="/#finder">Find a lock</Link> on the home page.
      </p>
      <ul>
        <li>
          <Link href="/vs/evolution-mini-7-vs-d1000">Evolution Mini-7 vs Hiplok D1000</Link> — Gold
          commute Mini against a Diamond compact D-lock.
        </li>
        <li>
          <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link> — when to carry a D-lock, when a
          chain earns its weight, and when both make sense.
        </li>
      </ul>
      <p>
        Still choosing from scratch? Start with <Link href="/guide">how to choose</Link> or the{" "}
        <Link href="/best">best of</Link> table.
      </p>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on Lock Desk. Try how to choose, best bike locks, or reviews.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <article className="prose wrap">
      <p className="kicker">404</p>
      <h1>That page is not here</h1>
      <p>
        Try the <Link href="/">front page</Link>, <Link href="/guide">how to choose</Link>,{" "}
        <Link href="/best">best bike locks</Link>, or <Link href="/reviews">reviews</Link>.
      </p>
    </article>
  );
}

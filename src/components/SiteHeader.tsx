import Link from "next/link";
import { LockMark } from "@/components/LockMark";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap masthead">
        <Link href="/" className="brand-lockup">
          <LockMark className="mark" />
          <span>
            <span className="wordmark">{site.name}</span>
            <span className="tagline">D-locks &amp; chains · UK</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Magazine">
          <Link href="/guide">How to choose</Link>
          <Link href="/best">Best of</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/vs/evolution-mini-7-vs-d1000">Compare</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

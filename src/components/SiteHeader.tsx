import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap masthead">
        <div>
          <Link href="/" className="wordmark">
            {site.name}
          </Link>
          <p className="tagline">Bike locks · Sold Secure · what you will carry</p>
        </div>
        <nav className="nav" aria-label="Magazine">
          <Link href="/guide">How to choose</Link>
          <Link href="/best">Best locks</Link>
          <Link href="/reviews/litelok-x1">Reviews</Link>
          <Link href="/vs/evolution-mini-7-vs-d1000">Compare</Link>
          <Link href="/method">Method</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

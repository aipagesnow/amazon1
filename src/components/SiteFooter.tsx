import Link from "next/link";
import { DISCLOSURE } from "@/components/DisclosureStrip";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="wordmark">{site.name}</p>
        <nav aria-label="Footer">
          <Link href="/guide">How to choose</Link>
          <Link href="/best">Best bike locks</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link>
          <Link href="/for/commuting">For commuting</Link>
          <Link href="/for/insurance">For insurance</Link>
          <Link href="/method">Methodology</Link>
          <Link href="/about">About</Link>
          <Link href="/about#disclosure">Disclosure</Link>
          <Link href="/about#privacy">Privacy</Link>
        </nav>
        <p>
          {DISCLOSURE} {site.name} is operated by {site.operator}. We are not Amazon. Prices and
          availability change on Amazon.
        </p>
        <p>
          Photographs on this site are editorial. They are not pictures of the named products in
          the slice.
        </p>
      </div>
    </footer>
  );
}

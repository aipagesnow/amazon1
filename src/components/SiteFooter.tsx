import Link from "next/link";
import { DISCLOSURE } from "@/components/DisclosureStrip";
import { ALTERNATIVES_PATH } from "@/lib/products";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="wordmark">{site.name}</p>
        <nav className="footer-grid" aria-label="Footer">
          <div>
            <p className="kicker">Guides</p>
            <ul>
              <li>
                <Link href="/guide">How to choose</Link>
              </li>
              <li>
                <Link href="/vs/evolution-mini-7-vs-d1000">Mini-7 vs D1000</Link>
              </li>
              <li>
                <Link href="/vs/d-lock-vs-chain">D-lock vs chain</Link>
              </li>
              <li>
                <Link href="/for/commuting">For commuting</Link>
              </li>
              <li>
                <Link href="/for/insurance">For insurance</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker">Reviews</p>
            <ul>
              <li>
                <Link href="/best">Best of</Link>
              </li>
              <li>
                <Link href="/reviews">Reviews</Link>
              </li>
              <li>
                <Link href={ALTERNATIVES_PATH}>Instead of the New York Mini</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker">About this site</p>
            <ul>
              <li>
                <Link href="/method">How we research</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/about#disclosure">Disclosure</Link>
              </li>
              <li>
                <Link href="/about#privacy">Privacy</Link>
              </li>
            </ul>
          </div>
        </nav>
        <p>
          {DISCLOSURE} {site.name} is operated by {site.operator}. We are not Amazon. Prices and
          availability change on Amazon.
        </p>
        <p>Photographs on this site are editorial. They are not pictures of the named products.</p>
      </div>
    </footer>
  );
}

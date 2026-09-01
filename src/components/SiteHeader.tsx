"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { LockMark } from "@/components/LockMark";
import { site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    detailsRef.current?.removeAttribute("open");
  }, [pathname]);

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
        <details className="nav-details" ref={detailsRef}>
          <summary className="nav-toggle">Menu</summary>
          <nav className="nav" aria-label="Magazine">
            <Link href="/guide">How to choose</Link>
            <Link href="/best">Best of</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/vs/evolution-mini-7-vs-d1000">Compare</Link>
            <Link href="/for/commuting">Commuting</Link>
            <Link href="/about">About</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

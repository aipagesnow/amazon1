"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { LockMark } from "@/components/LockMark";
import { site } from "@/lib/site";

const LINKS = [
  { href: "/guide", label: "How to choose" },
  { href: "/best", label: "Best of" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
] as const;

function NavLinks() {
  return (
    <>
      {LINKS.map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </>
  );
}

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
        <nav className="nav nav-desktop" aria-label="Main">
          <NavLinks />
        </nav>
        <details className="nav-details" ref={detailsRef}>
          <summary className="nav-toggle">Menu</summary>
          <nav className="nav" aria-label="Menu">
            <NavLinks />
          </nav>
        </details>
      </div>
    </header>
  );
}

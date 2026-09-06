"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LockMark } from "@/components/LockMark";
import { site } from "@/lib/site";

const LINKS = [
  { href: "/guide", label: "How to choose" },
  { href: "/best", label: "Best of" },
  { href: "/reviews", label: "Reviews" },
  { href: "/#finder", label: "Find a lock" },
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    detailsRef.current?.removeAttribute("open");
  }, [pathname]);

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;

    function onToggle() {
      setMenuOpen(details!.open);
    }

    function onPointerDown(event: PointerEvent) {
      if (!details!.open) return;
      const target = event.target as Node | null;
      if (target && details!.contains(target)) return;
      details!.removeAttribute("open");
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape" || !details!.open) return;
      details!.removeAttribute("open");
    }

    details.addEventListener("toggle", onToggle);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      details.removeEventListener("toggle", onToggle);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="wrap masthead">
        <Link href="/" className="brand-lockup">
          <LockMark className="mark" />
          <span>
            <span className="wordmark">{site.name}</span>
            <span className="tagline">D-locks and chains · UK</span>
          </span>
        </Link>
        <nav className="nav nav-desktop" aria-label="Main">
          <NavLinks />
        </nav>
        <details className="nav-details" ref={detailsRef}>
          <summary
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "Close" : "Menu"}
          </summary>
          <nav className="nav" aria-label="Menu">
            <NavLinks />
          </nav>
        </details>
      </div>
      {menuOpen ? (
        <div className="nav-backdrop" aria-hidden="true" />
      ) : null}
    </header>
  );
}

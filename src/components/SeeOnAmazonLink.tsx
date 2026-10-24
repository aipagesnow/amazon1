"use client";

import { useRef } from "react";

type Props = {
  asin: string;
  /** Fully tagged Amazon URL from the server — never rebuild from env here. */
  href: string;
  className?: string;
  label?: string;
};

type AmazonClickParams = {
  link_url: string;
  asin: string;
  page_path: string;
  site: "lockdesk";
};

type Gtag = (command: "event", name: "amazon_click", params: AmazonClickParams) => void;

const DP_ASIN = /\/dp\/([A-Z0-9]{10})(?=[/?#]|$)/i;

function asinFromHref(href: string, fallback: string): string {
  const match = href.match(DP_ASIN);
  if (match) return match[1].toUpperCase();
  return fallback.trim().toUpperCase();
}

/** Fire-and-forget. Never throws and never cancels navigation. */
function reportAmazonClick(anchor: HTMLAnchorElement, asinProp: string) {
  try {
    const gtag = (window as Window & { gtag?: Gtag }).gtag;
    if (typeof gtag !== "function") return;
    const linkUrl = anchor.href;
    gtag("event", "amazon_click", {
      link_url: linkUrl,
      asin: asinFromHref(linkUrl, asinProp),
      page_path: window.location.pathname,
      site: "lockdesk",
    });
  } catch {
    // Missing or broken gtag must not block the Amazon tab.
  }
}

/**
 * Client CTA. Uses the server-built href as-is so hydration cannot drop ?tag=
 * (AMAZON_ASSOCIATE_TAG is server-only and empty in the browser).
 */
export function SeeOnAmazonLink({
  asin,
  href,
  className,
  label = "See on Amazon",
}: Props) {
  const skipClick = useRef(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={className}
      onClick={(event) => {
        if (skipClick.current) {
          skipClick.current = false;
          return;
        }
        reportAmazonClick(event.currentTarget, asin);
      }}
      onKeyDown={(event) => {
        if (event.repeat) return;
        if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
        reportAmazonClick(event.currentTarget, asin);
        // Enter also dispatches click. Count that activation once.
        skipClick.current = true;
        window.setTimeout(() => {
          skipClick.current = false;
        }, 0);
      }}
    >
      {label}
    </a>
  );
}

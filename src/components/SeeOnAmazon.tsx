"use client";

import { createContext, useContext, useRef } from "react";
import { amazonUrl, isOnAmazonUk } from "@/lib/amazon";

type Props = {
  asin: string;
  className?: string;
  variant?: "button" | "text";
  /** Pass from a Server Component so client finders get a real tag. */
  associateTag?: string;
  /** Link text. Defaults to "See on Amazon"; name the product when a card has more than one. */
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

const AssociateTagContext = createContext<string | undefined>(undefined);

/** Server layout passes the resolved Associates tag into client CTAs. */
export function AssociateTagProvider({
  tag,
  children,
}: {
  tag?: string;
  children: React.ReactNode;
}) {
  const value = tag?.trim() || undefined;
  return <AssociateTagContext.Provider value={value}>{children}</AssociateTagContext.Provider>;
}

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

export function SeeOnAmazon({
  asin,
  className,
  variant = "button",
  associateTag,
  label = "See on Amazon",
}: Props) {
  const fromProvider = useContext(AssociateTagContext);
  const skipClick = useRef(false);

  if (!isOnAmazonUk(asin)) {
    return <span className="amazon-unavailable">Not currently available on Amazon UK</span>;
  }

  const href = amazonUrl(asin, associateTag?.trim() || fromProvider);
  const cls = className ?? (variant === "text" ? "amazon-text" : "see-on-amazon");

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={cls}
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

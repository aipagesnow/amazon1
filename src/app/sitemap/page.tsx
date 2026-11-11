import type { Metadata } from "next";
import Link from "next/link";
import { htmlSitemapGroups } from "@/lib/sitemaps";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "All pages",
  description: "A complete list of pages on Lock Desk.",
  alternates: { canonical: pageUrl("/sitemap") },
};

export default function SitemapPage() {
  return (
    <article className="prose wrap">
      <p className="kicker">Sitemap</p>
      <h1>All pages</h1>
      <p className="lede">Every page on Lock Desk, grouped by section.</p>
      {htmlSitemapGroups().map((group) => (
        <section key={group.heading}>
          <h2>{group.heading}</h2>
          <ul>
            {group.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}

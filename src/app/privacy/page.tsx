import type { Metadata } from "next";
import Link from "next/link";
import { pageUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Lock Desk handles privacy, analytics, and outbound Amazon clicks. We do not sell personal data.",
  alternates: { canonical: pageUrl("/privacy") },
};

export default function PrivacyPage() {
  return (
    <article className="prose wrap">
      <p className="kicker">Privacy</p>
      <h1>Privacy notice</h1>
      <p className="lede">
        This page explains what Lock Desk collects, what we do not collect, and where your data
        goes when you leave this site for Amazon.co.uk.
      </p>

      <h2>Who we are</h2>
      <p>
        Lock Desk ({site.domain}) is a UK bike-lock comparison site published by Aivora Digital.
        Contact: <a href={`mailto:${site.contact}`}>{site.contact}</a>.
      </p>

      <h2>What we collect</h2>
      <p>
        We do not run accounts, newsletters, or comment forms on this site. We do not sell personal
        data. If you email us, we use your address only to reply.
      </p>
      <p>
        We use Google Analytics 4 (measurement ID G-571YTYX4S8) to understand aggregate traffic — for example which pages are read and roughly where visits come from.
        Google may set cookies or similar identifiers and process IP-derived location under its own
        terms. You can use browser controls or Google&apos;s tools to limit analytics cookies.
      </p>

      <h2>Amazon and other outbound links</h2>
      <p>
        When you follow a See on Amazon button, you leave Lock Desk and use Amazon.co.uk under
        Amazon&apos;s privacy notice. We do not control what Amazon collects on its site.
      </p>

      <h2>Hosting</h2>
      <p>
        The site is hosted on Vercel. Standard server and CDN logs (such as IP address and user
        agent) may be processed to operate and secure the service.
      </p>

      <h2>Changes</h2>
      <p>
        If we add a new analytics tool, mailing list, or other processing, we will update this
        page. For the Amazon Associates disclosure, see <Link href="/disclosure">Disclosure</Link>.
        For who runs the site, see <Link href="/about">About</Link>.
      </p>
    </article>
  );
}

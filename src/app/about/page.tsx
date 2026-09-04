import type { Metadata } from "next";
import Link from "next/link";
import { RichText } from "@/components/RichText";
import {
  ABOUT_BODY,
  ABOUT_DISCLOSURE,
  ABOUT_LEDE,
  ABOUT_META,
  ABOUT_PRIVACY,
} from "@/content/pages";
import { pageUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About, disclosure, and privacy",
  description: ABOUT_META,
  alternates: { canonical: pageUrl("/about") },
};

export default function AboutPage() {
  return (
    <article className="prose wrap">
      <p className="kicker">About</p>
      <h1 id="about">About Lock Desk</h1>
      <nav className="jump-list" aria-label="On this page">
        <a href="#about">About</a>
        <a href="#disclosure">Disclosure</a>
        <a href="#privacy">Privacy</a>
        <Link href="/method">How we research</Link>
      </nav>
      <p className="lede">{ABOUT_LEDE}</p>
      {ABOUT_BODY.map((p) => (
        <p key={p}>
          <RichText text={p} />
        </p>
      ))}

      <h2 id="disclosure">Disclosure</h2>
      {ABOUT_DISCLOSURE.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <p>
        How we research: <Link href="/method">how we research bike locks</Link>.
      </p>

      <h2 id="privacy">Privacy</h2>
      {ABOUT_PRIVACY.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </article>
  );
}

import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — UK bike lock comparisons`,
    template: `%s · ${site.name}`,
  },
  description:
    "Independent UK comparisons of D-locks and chains: Sold Secure ratings, insurance, and what you will actually carry. Not a shop.",
  openGraph: {
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

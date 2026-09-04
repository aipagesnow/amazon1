import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import "./globals.css";

const display = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport = {
  themeColor: "#0b100e",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — UK bike lock comparisons`,
    template: `%s · ${site.name}`,
  },
  description:
    "Independent UK reviews of D-locks and chains. Sold Secure grades, insurance, and which lock you will actually carry.",
  openGraph: {
    siteName: site.name,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: photos.cover,
        alt: "A bicycle locked to a bike stand on a wet UK street at night.",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

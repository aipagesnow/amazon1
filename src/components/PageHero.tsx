import type { ReactNode } from "react";
import { Photo } from "@/components/Photo";

type Props = {
  image: string;
  alt: string;
  kicker: string;
  title: string;
  lede?: string;
  caption?: string;
  overlay?: boolean;
  tight?: boolean;
  children?: ReactNode;
};

export function PageHero({
  image,
  alt,
  kicker,
  title,
  lede,
  caption,
  overlay,
  tight,
  children,
}: Props) {
  if (overlay) {
    return (
      <header className={`page-hero page-hero-overlay${tight ? " tight-hero" : ""}`}>
        <figure className="cover-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={alt} />
          <div className="cover-shade" aria-hidden="true" />
          {caption ? <figcaption>{caption}</figcaption> : null}
        </figure>
        <div className="wrap cover-copy">
          <div className="hero-panel">
            <p className="kicker">{kicker}</p>
            <h1>{title}</h1>
            {lede ? <p className="lede">{lede}</p> : null}
            {children}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="page-hero">
      <Photo src={image} alt={alt} caption={caption} className="page-hero-media" priority />
      <div className="wrap page-hero-copy">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
      </div>
    </header>
  );
}

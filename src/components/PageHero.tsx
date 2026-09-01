import type { ReactNode } from "react";
import { Photo } from "@/components/Photo";

type Props = {
  image: string;
  alt: string;
  kicker: string;
  title: string;
  lede?: string;
  caption?: string;
  children?: ReactNode;
};

export function PageHero({ image, alt, kicker, title, lede, caption, children }: Props) {
  return (
    <header className="page-hero">
      <Photo src={image} alt={alt} className="page-hero-media" priority />
      <div className="wrap page-hero-copy">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
        {caption ? <p className="photo-credit">{caption}</p> : null}
      </div>
    </header>
  );
}

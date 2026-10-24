import { amazonUrl } from "./amazon";

type Props = {
  asin: string;
  className?: string;
  variant?: "button" | "text";
  associateTag?: string;
  /** Fully tagged href from the server. Prefer this over asin+tag rebuild. */
  href?: string;
};

/**
 * Kit copy — prefer passing a server-built href. If only asin is given, build
 * with associateTag / env on the server; never rely on browser-only env.
 */
export function SeeOnAmazon({ asin, className, variant = "button", associateTag, href }: Props) {
  const resolved = href || amazonUrl(asin, associateTag);
  const cls = className ?? (variant === "text" ? "amazon-text" : "see-on-amazon");
  return (
    <a href={resolved} target="_blank" rel="nofollow sponsored noopener" className={cls}>
      See on Amazon
    </a>
  );
}

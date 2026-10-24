import { SeeOnAmazonLink } from "@/components/SeeOnAmazonLink";
import { amazonUrl, isOnAmazonUk } from "@/lib/amazon";

type Props = {
  asin: string;
  className?: string;
  variant?: "button" | "text";
  /** Optional explicit tag; otherwise server env AMAZON_ASSOCIATE_TAG. */
  associateTag?: string;
  /** Link text. Defaults to "See on Amazon"; name the product when a card has more than one. */
  label?: string;
};

/**
 * Server wrapper. Builds the tagged Amazon href here so the client link never
 * depends on a browser-visible env var (AMAZON_ASSOCIATE_TAG is server-only).
 * Same pattern as Best Dash Cam UK / Best Dehumidifier UK after the hydration leak.
 */
export function SeeOnAmazon({
  asin,
  className,
  variant = "button",
  associateTag,
  label = "See on Amazon",
}: Props) {
  if (!isOnAmazonUk(asin)) {
    return <span className="amazon-unavailable">Not currently available on Amazon UK</span>;
  }

  const href = amazonUrl(asin, associateTag);
  const cls = className ?? (variant === "text" ? "amazon-text" : "see-on-amazon");

  return <SeeOnAmazonLink asin={asin} href={href} className={cls} label={label} />;
}

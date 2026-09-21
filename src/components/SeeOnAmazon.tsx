import { amazonUrl } from "@/lib/amazon";

type Props = {
  asin: string;
  className?: string;
  variant?: "button" | "text";
  /** Pass from a Server Component so client finders get a real tag. */
  associateTag?: string;
};

export function SeeOnAmazon({ asin, className, variant = "button", associateTag }: Props) {
  const href = amazonUrl(asin, associateTag);
  const cls = className ?? (variant === "text" ? "amazon-text" : "see-on-amazon");
  return (
    <a href={href} target="_blank" rel="nofollow sponsored noopener" className={cls}>
      See on Amazon
    </a>
  );
}

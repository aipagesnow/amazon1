import { amazonUrl } from "@/lib/amazon";

type Props = {
  asin: string;
  className?: string;
  variant?: "button" | "text";
};

export function SeeOnAmazon({ asin, className, variant = "button" }: Props) {
  const href = amazonUrl(asin);
  const cls = className ?? (variant === "text" ? "amazon-text" : "see-on-amazon");
  return (
    <a href={href} target="_blank" rel="nofollow sponsored noopener" className={cls}>
      See on Amazon
    </a>
  );
}

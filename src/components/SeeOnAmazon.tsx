import { amazonUrl } from "@/lib/amazon";

type Props = {
  asin: string;
  className?: string;
};

export function SeeOnAmazon({ asin, className }: Props) {
  const href = amazonUrl(asin);
  return (
    <a href={href} target="_blank" rel="nofollow sponsored noopener" className={className}>
      See on Amazon
    </a>
  );
}

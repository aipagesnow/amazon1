export const DISCLOSURE =
  "If you buy through a link on this page, I may earn a commission as an Amazon Associate.";

type Props = {
  className?: string;
};

export function DisclosureStrip({ className }: Props) {
  return (
    <p className={className ?? "disclosure"}>
      {DISCLOSURE} That does not change the review. This site is not Amazon, and prices on Amazon
      can change.
    </p>
  );
}
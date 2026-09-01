export const DISCLOSURE = "As an Amazon Associate I earn from qualifying purchases.";

type Props = {
  className?: string;
};

export function DisclosureStrip({ className }: Props) {
  return (
    <p className={className ?? "disclosure"}>
      {DISCLOSURE} This site is not Amazon. Prices and availability change on Amazon.
    </p>
  );
}

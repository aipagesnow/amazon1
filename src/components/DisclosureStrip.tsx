export const DISCLOSURE =
  "As an Amazon Associate, Lock Desk earns from qualifying purchases.";

type Props = {
  className?: string;
};

export function DisclosureStrip({ className }: Props) {
  return (
    <p className={className ?? "disclosure"}>
      {DISCLOSURE} That does not change what we recommend. We are not Amazon —
      prices there can change.
    </p>
  );
}

export const DISCLOSURE =
  "As an Amazon Associate, Lock Desk earns from qualifying purchases.";

/** Site-wide quiet one-liner — full wording lives on About. */
export const DISCLOSURE_SUBTLE =
  "Amazon Associate links may earn Lock Desk a commission.";

type Props = {
  className?: string;
  /** Kept for call-site compat; all strips use the quiet line. */
  subtle?: boolean;
};

export function DisclosureStrip({ className }: Props) {
  return (
    <p className={className ?? "disclosure disclosure-subtle"}>
      {DISCLOSURE_SUBTLE}{" "}
      <a href="/about#disclosure">Disclosure</a>
    </p>
  );
}

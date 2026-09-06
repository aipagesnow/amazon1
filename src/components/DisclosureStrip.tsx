export const DISCLOSURE =
  "As an Amazon Associate, Lock Desk earns from qualifying purchases.";

/** Quieter one-liner for heroes / home — still clear before Amazon links. */
export const DISCLOSURE_SUBTLE =
  "Amazon Associate links may earn Lock Desk a commission.";

type Props = {
  className?: string;
  /** Shorter, quieter line (home hero). Default is the fuller strip. */
  subtle?: boolean;
};

export function DisclosureStrip({ className, subtle = false }: Props) {
  if (subtle) {
    return (
      <p className={className ?? "disclosure disclosure-subtle"}>
        {DISCLOSURE_SUBTLE}{" "}
        <a href="/about#disclosure">Disclosure</a>
      </p>
    );
  }

  return (
    <p className={className ?? "disclosure"}>
      {DISCLOSURE} That does not change what we recommend. We are not Amazon —
      prices there can change.
    </p>
  );
}

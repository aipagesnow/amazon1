export function GradeStamp({ grade, label }: { grade?: string; label?: string }) {
  const text = label ?? (grade ? `Sold Secure ${grade}` : null);
  if (!text) return null;
  const kind = (label ?? grade ?? "").toLowerCase().includes("diamond") ? "diamond" : "gold";
  return <span className={`stamp stamp-${kind}`}>{text}</span>;
}

export function GradeStamp({ grade }: { grade?: string }) {
  if (!grade) return null;
  const kind = grade.toLowerCase().includes("diamond") ? "diamond" : "gold";
  return <span className={`stamp stamp-${kind}`}>Sold Secure {grade}</span>;
}

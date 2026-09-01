import Link from "next/link";

export default function NotFound() {
  return (
    <article className="prose wrap">
      <h1>That page is not here</h1>
      <p>
        Try the <Link href="/">front page</Link>, <Link href="/guide">how to choose</Link>, or{" "}
        <Link href="/best">best bike locks</Link>.
      </p>
    </article>
  );
}

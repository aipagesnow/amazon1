import Link from "next/link";

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <span key={i}>{part}</span>;
        const href = match[2];
        if (href.startsWith("/")) {
          return (
            <Link key={i} href={href}>
              {match[1]}
            </Link>
          );
        }
        return (
          <a key={i} href={href} rel="noopener">
            {match[1]}
          </a>
        );
      })}
    </>
  );
}

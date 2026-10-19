// FAQPage schema is never emitted (keeper rule; the build check fails on it). Visible FAQs stay on the page.
const isFaqPage = (item: unknown) =>
  !!item && typeof item === "object" && (item as Record<string, unknown>)["@type"] === "FAQPage";

export function JsonLd({ data }: { data: unknown | unknown[] }) {
  const payload = (Array.isArray(data) ? data : [data]).filter((item) => item && !isFaqPage(item));
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

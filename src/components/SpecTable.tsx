import {
  displayName,
  Product,
  ProductSpecs,
  specLabel,
  specValue,
} from "@/lib/products";

const DEFAULT_KEYS: (keyof ProductSpecs)[] = [
  "type",
  "soldSecurePedal",
  "soldSecurePowered",
  "shackleMm",
  "chainMm",
  "lockingArea",
  "lockingLength",
  "weightKg",
  "frameMount",
  "cableIncluded",
  "angleGrinderResistant",
  "keys",
];

export function SpecTable({
  product,
  keys = DEFAULT_KEYS,
}: {
  product: Product;
  keys?: (keyof ProductSpecs)[];
}) {
  const rows = keys
    .map((key) => {
      const value = specValue(product, key);
      return value ? { key, value } : null;
    })
    .filter(Boolean) as { key: keyof ProductSpecs; value: string }[];

  if (!rows.length) return null;

  return (
    <table className="spec">
      <tbody>
        {rows.map((row) => (
          <tr key={row.key}>
            <th scope="row">{specLabel(row.key)}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function CompareTable({
  products,
  keys = DEFAULT_KEYS,
}: {
  products: Product[];
  keys?: (keyof ProductSpecs)[];
}) {
  const used = keys.filter((key) => products.some((p) => specValue(p, key)));
  return (
    <table className="spec">
      <thead>
        <tr>
          <th scope="col"> </th>
          {products.map((p) => (
            <th key={p.asin} scope="col">
              {displayName(p)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {used.map((key) => (
          <tr key={key}>
            <th scope="row">{specLabel(key)}</th>
            {products.map((p) => (
              <td key={p.asin}>{specValue(p, key) ?? "—"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

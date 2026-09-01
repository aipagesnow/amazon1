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
    <div className="spec-scroll">
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
    </div>
  );
}

export function SpecFigures({ product }: { product: Product }) {
  const hole = specValue(product, "lockingArea") ?? specValue(product, "lockingLength");
  const bar = specValue(product, "chainMm") ?? specValue(product, "shackleMm");
  const items = [
    { label: "Weight", value: specValue(product, "weightKg") },
    { label: "Sold Secure", value: specValue(product, "soldSecurePedal") },
    {
      label: (product.specs?.type ?? "").toLowerCase().includes("chain") ? "Length" : "Locking area",
      value: hole,
    },
    {
      label: product.specs?.chainMm ? "Chain" : "Shackle",
      value: bar,
    },
  ].filter((item) => item.value);

  if (!items.length) return null;

  return (
    <dl className="spec-figures">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
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
    <div className="spec-scroll">
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
    </div>
  );
}

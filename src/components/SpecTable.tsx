import { Fragment } from "react";
import {
  compareCell,
  displayName,
  Product,
  ProductSpecs,
  specLabel,
  specValue,
} from "@/lib/products";

const GRADE_KEYS: (keyof ProductSpecs)[] = [
  "soldSecurePedal",
  "soldSecurePowered",
  "angleGrinderResistant",
];
const SIZE_KEYS: (keyof ProductSpecs)[] = [
  "type",
  "shackleMm",
  "chainMm",
  "lockingArea",
  "lockingLength",
  "weightKg",
];
const BOX_KEYS: (keyof ProductSpecs)[] = ["frameMount", "cableIncluded", "keys"];

export const SPEC_GROUPS: { label: string; keys: (keyof ProductSpecs)[] }[] = [
  { label: "Grade", keys: GRADE_KEYS },
  { label: "Size & weight", keys: SIZE_KEYS },
  { label: "In the box", keys: BOX_KEYS },
];

export function SpecTable({ product }: { product: Product }) {
  const groups = SPEC_GROUPS.map((group) => ({
    ...group,
    rows: group.keys
      .map((key) => {
        const value = specValue(product, key);
        return value ? { key, value } : null;
      })
      .filter(Boolean) as { key: keyof ProductSpecs; value: string }[],
  })).filter((group) => group.rows.length);

  if (!groups.length) return null;

  return (
    <div className="spec-scroll">
      <table className="spec">
        <tbody>
          {groups.map((group) => (
            <Fragment key={group.label}>
              <tr className="spec-group">
                <th scope="colgroup" colSpan={2}>
                  {group.label}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.key}>
                  <th scope="row">{specLabel(row.key)}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </Fragment>
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
    { label: "Locking area / length", value: hole },
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
  leadWithAntiGrinder,
  caption,
}: {
  products: Product[];
  leadWithAntiGrinder?: boolean;
  caption?: string;
}) {
  const gradeKeys: (keyof ProductSpecs)[] = leadWithAntiGrinder
    ? ["angleGrinderResistant", "soldSecurePedal", "soldSecurePowered"]
    : GRADE_KEYS;
  const groups = [
    { label: "Grade", keys: gradeKeys },
    { label: "Size & weight", keys: SIZE_KEYS },
    { label: "In the box", keys: BOX_KEYS },
  ]
    .map((group) => ({
      ...group,
      keys: group.keys.filter((key) => products.some((p) => specValue(p, key) !== null)),
    }))
    .filter((group) => group.keys.length);

  return (
    <div className="spec-scroll">
      <table className="spec">
        {caption ? <caption>{caption}</caption> : null}
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
          {groups.map((group) => (
            <Fragment key={group.label}>
              <tr className="spec-group">
                <th scope="colgroup" colSpan={products.length + 1}>
                  {group.label}
                </th>
              </tr>
              {group.keys.map((key) => (
                <tr key={key}>
                  <th scope="row">{specLabel(key)}</th>
                  {products.map((p) => (
                    <td key={p.asin}>{compareCell(p, key)}</td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

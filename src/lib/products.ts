import raw from "../../data/products.json";

export type ProductSpecs = {
  type?: string;
  soldSecurePedal?: string;
  soldSecurePowered?: string;
  shackleMm?: number;
  chainMm?: number;
  lockingArea?: string;
  lockingLength?: string;
  weightKg?: number;
  keys?: number;
  frameMount?: boolean;
  cableIncluded?: boolean;
  angleGrinderResistant?: boolean;
};

export type Product = {
  asin: string;
  name: string;
  brand: string;
  category: string;
  specs?: ProductSpecs;
  slug: string;
};

const SLUG_BY_ASIN: Record<string, string> = {
  B074K6KSY5: "kryptonite-evolution-mini-7",
  B0CW175JJ8: "kryptonite-new-york-fahgettaboudit-mini",
  B073W8N26F: "kryptonite-new-york-fahgettaboudit-1410",
  B0D77XJR4Z: "hiplok-d1000",
  B0D7JVP6QL: "hiplok-dx1000",
  B0944HG7MK: "abus-granit-xplus-540",
  B0BLT59NFJ: "litelok-x1",
  B07DXW7YJJ: "onguard-pitbull-dt-8005",
  B01A6ZRMEK: "onguard-pitbull-std-8003",
  B01KT86YWU: "onguard-pitbull-ls-8002",
};

export const REVIEW_SLUGS = [
  "litelok-x1",
  "hiplok-d1000",
  "kryptonite-evolution-mini-7",
  "abus-granit-xplus-540",
  "kryptonite-new-york-fahgettaboudit-mini",
  "kryptonite-new-york-fahgettaboudit-1410",
] as const;

export const BEST_OF_ASINS = [
  "B0BLT59NFJ",
  "B074K6KSY5",
  "B0D77XJR4Z",
  "B0944HG7MK",
  "B073W8N26F",
] as const;

export const EDITOR_PICK_ASIN = "B0BLT59NFJ";

export const products: Product[] = (raw as Omit<Product, "slug">[]).map((p) => ({
  ...p,
  slug: SLUG_BY_ASIN[p.asin] ?? p.asin.toLowerCase(),
}));

export function productByAsin(asin: string): Product | undefined {
  return products.find((p) => p.asin === asin);
}

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function hasReview(slug: string): boolean {
  return (REVIEW_SLUGS as readonly string[]).includes(slug);
}

export function reviewHref(product: Product): string | null {
  return hasReview(product.slug) ? `/reviews/${product.slug}` : null;
}

export function shortName(product: Product): string {
  if (product.asin === "B074K6KSY5") return "Evolution Mini-7";
  if (product.asin === "B0CW175JJ8") return "New York Fahgettaboudit Mini";
  if (product.asin === "B073W8N26F") return "New York 1410 chain";
  if (product.asin === "B0D77XJR4Z") return "D1000";
  if (product.asin === "B0D7JVP6QL") return "DX1000";
  if (product.asin === "B0944HG7MK") return "Granit XPlus 540";
  if (product.asin === "B0BLT59NFJ") return "X1";
  if (product.asin === "B07DXW7YJJ") return "Pitbull DT 8005";
  if (product.asin === "B01A6ZRMEK") return "Pitbull STD 8003";
  if (product.asin === "B01KT86YWU") return "Pitbull LS 8002";
  return product.name;
}

export function displayName(product: Product): string {
  return `${product.brand} ${shortName(product)}`;
}

export function specLabel(key: keyof ProductSpecs): string {
  switch (key) {
    case "type":
      return "Type";
    case "soldSecurePedal":
      return "Sold Secure (pedal)";
    case "soldSecurePowered":
      return "Sold Secure (powered / e-bike)";
    case "shackleMm":
      return "Shackle";
    case "chainMm":
      return "Chain";
    case "lockingArea":
      return "Locking area";
    case "lockingLength":
      return "Locking length";
    case "weightKg":
      return "Weight";
    case "keys":
      return "Keys";
    case "frameMount":
      return "Frame mount";
    case "cableIncluded":
      return "Cable in the box";
    case "angleGrinderResistant":
      return "Sold as angle-grinder resistant";
    default:
      return String(key);
  }
}

export function specValue(product: Product, key: keyof ProductSpecs): string | null {
  const specs = product.specs;
  if (!specs) return null;
  const value = specs[key];
  if (value === undefined) return null;
  if (key === "shackleMm" && typeof value === "number") return `${value} mm`;
  if (key === "chainMm" && typeof value === "number") return `${value} mm`;
  if (key === "weightKg" && typeof value === "number") return `${value} kg`;
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

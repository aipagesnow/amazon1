import { LockTile } from "@/components/LockTile";
import { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return <LockTile product={product} />;
}

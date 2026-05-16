import type { Metadata } from "next";
import CategoryTemplate from "@/components/CategoryTemplate";
import { getCategory } from "@/data/categories";
import { productsByCategory } from "@/data/products";

const cat = getCategory("dump-truck-liners")!;

export const metadata: Metadata = {
  title: cat.seoTitle,
  description: cat.seoDescription,
  alternates: { canonical: "/dump-truck-liners" },
};

export default function Page() {
  return <CategoryTemplate category={cat} items={productsByCategory("dump-truck-liners")} />;
}

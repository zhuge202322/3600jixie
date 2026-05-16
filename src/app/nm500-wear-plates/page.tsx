import type { Metadata } from "next";
import CategoryTemplate from "@/components/CategoryTemplate";
import { getCategory } from "@/data/categories";
import { productsByCategory } from "@/data/products";

const cat = getCategory("nm500-wear-plates")!;

export const metadata: Metadata = {
  title: cat.seoTitle,
  description: cat.seoDescription,
  alternates: { canonical: "/nm500-wear-plates" },
};

export default function Page() {
  return <CategoryTemplate category={cat} items={productsByCategory("nm500-wear-plates")} />;
}

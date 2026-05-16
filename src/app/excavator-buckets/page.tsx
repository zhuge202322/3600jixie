import type { Metadata } from "next";
import CategoryTemplate from "@/components/CategoryTemplate";
import { getCategory } from "@/data/categories";
import { productsByCategory } from "@/data/products";

const cat = getCategory("excavator-buckets")!;

export const metadata: Metadata = {
  title: cat.seoTitle,
  description: cat.seoDescription,
  alternates: { canonical: "/excavator-buckets" },
};

export default function Page() {
  return <CategoryTemplate category={cat} items={productsByCategory("excavator-buckets")} />;
}

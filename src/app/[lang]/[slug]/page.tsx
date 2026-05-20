import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import CategoryTemplate from "@/components/CategoryTemplate";
import { getProduct, getProducts } from "@/data/products";
import { getCategory, getCategories } from "@/data/categories";
import { site } from "@/data/site";

export function generateStaticParams() {
  const categorySlugs = getCategories('en').map((c) => ({ slug: c.slug }));
  const productSlugs = getProducts('en').map((p) => ({ slug: p.slug }));
  return [...categorySlugs, ...productSlugs];
}

export function generateMetadata({ params }: { params: { slug: string, lang: string } }): Metadata {
  const c = getCategory(params.slug, params.lang);
  const p = getProduct(params.slug, params.lang);

  if (c) {
    return {
      title: c.seoTitle,
      description: c.seoDescription,
      keywords: c.keywords,
      alternates: { canonical: `/${params.lang}/${c.slug}` },
    };
  }

  if (p) {
    return {
      title: p.seoTitle,
      description: p.seoDescription,
      keywords: p.keywords,
      alternates: { canonical: `/${params.lang}/${p.slug}` },
      openGraph: {
        title: p.seoTitle,
        description: p.seoDescription,
        url: `${site.url}/${params.lang}/${p.slug}`,
        images: p.images.slice(0, 1),
      },
    };
  }

  return {};
}

export default function DynamicPage({ params }: { params: { slug: string, lang: string } }) {
  const category = getCategory(params.slug, params.lang);
  if (category) {
    return <CategoryTemplate category={category} lang={params.lang} />;
  }

  const product = getProduct(params.slug, params.lang);
  if (product) {
    return (
      <>
        <ProductDetail product={product} lang={params.lang} />
      </>
    );
  }

  notFound();
}

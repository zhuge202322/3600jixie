import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductDetail from "@/components/ProductDetail";
import { getProduct, products } from "@/data/products";
import { site } from "@/data/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: { canonical: `/${p.slug}` },
    openGraph: {
      title: p.seoTitle,
      description: p.seoDescription,
      url: `${site.url}/${p.slug}`,
      images: p.images.slice(0, 1),
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = getProduct(params.slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    sku: p.partNumber,
    brand: { "@type": "Brand", name: site.name },
    description: p.seoDescription,
    image: p.images,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: p.priceRange.replace(/[^\d.\-–]/g, "").split(/[–-]/)[0]?.trim() || "0",
      highPrice: p.priceRange.replace(/[^\d.\-–]/g, "").split(/[–-]/)[1]?.trim() || "0",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetail product={p} />
    </>
  );
}

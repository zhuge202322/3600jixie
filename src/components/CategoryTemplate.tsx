import Image from "next/image";
import ProductCard from "./ProductCard";
import CTASection from "./CTASection";
import SectionDivider from "./SectionDivider";
import { Category } from "@/data/categories";
import { Product } from "@/data/products";

export default function CategoryTemplate({
  category,
  items,
}: {
  category: Category;
  items: Product[];
}) {
  return (
    <main className="pt-20">
      {/* Full-width hero */}
      <section className="relative h-[60vh] min-h-[460px] w-full overflow-hidden">
        <Image
          src={category.cover}
          alt={category.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 grid-mesh opacity-40" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-12">
          <span className="chip w-max">CATEGORY · {category.slug.toUpperCase()}</span>
          <h1 className="mt-4 h-display text-5xl text-bone md:text-7xl">{category.h1}</h1>
          <p className="mt-4 max-w-2xl text-bone/85">{category.intro}</p>
        </div>
        <div className="hazard h-3 w-full absolute bottom-0 left-0" />
      </section>

      <SectionDivider index="01" label="Product List" rightLabel={`${items.length} ITEMS`} />

      <section className="mx-auto max-w-[1400px] px-5 pt-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <CTASection
        title="Need a custom spec? Send drawing or sample."
        primary="Send Inquiry"
      />
    </main>
  );
}

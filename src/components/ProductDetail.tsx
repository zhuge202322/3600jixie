import Link from "next/link";
import { Check, MessageCircle, Phone } from "lucide-react";
import ProductGallery from "./ProductGallery";
import ProductCard from "./ProductCard";
import CTASection from "./CTASection";
import SectionDivider from "./SectionDivider";
import { Product, products } from "@/data/products";
import { site } from "@/data/site";

export default function ProductDetail({ product }: { product: Product }) {
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const specs: [string, string][] = [
    ["Part Number", product.partNumber],
    ["Material", product.material ?? "—"],
    ["Hardness", product.hardness ?? "—"],
    ["Specification", product.specification ?? "—"],
    ["Delivery", product.delivery],
  ];

  return (
    <main className="pt-24">
      {/* Hero strip */}
      <section className="relative overflow-hidden border-b border-line/60 bg-carbon">
        <div className="absolute inset-0 grid-mesh opacity-40" />
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-12">
          <span className="chip w-max">PRODUCT · {product.partNumber}</span>
          <h1 className="h-display text-4xl text-bone md:text-6xl">{product.h1}</h1>
          <p className="max-w-2xl text-ash">{product.short}</p>
        </div>
        <div className="hazard-thin h-1 w-full" />
      </section>

      {/* Body */}
      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-12 lg:grid-cols-2">
        <ProductGallery images={product.images} alt={product.name} />

        <div>
          <div className="border-2 border-line/60 bg-carbon">
            {specs.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-[140px_1fr] ${i === 0 ? "" : "border-t border-line/40"}`}
              >
                <div className="border-r border-line/40 bg-ink px-4 py-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                    {k}
                  </span>
                </div>
                <div className="px-4 py-3 font-display text-base text-bone">{v}</div>
              </div>
            ))}
          </div>

          {/* Price slab */}
          <div className="mt-6 grid grid-cols-[1fr_auto] border-2 border-gold">
            <div className="bg-gold px-5 py-5 text-ink">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest">PRICE RANGE</p>
              <p className="mt-1 font-display text-3xl font-bold uppercase">
                {product.priceRange}
              </p>
            </div>
            <div className="bg-ink px-5 py-5 text-bone">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">DELIVERY</p>
              <p className="mt-1 font-display text-2xl font-bold uppercase">{product.delivery}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
              SUITABLE FOR
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.fitment.map((f) => (
                <span key={f} className="border border-line/60 bg-carbon px-2 py-1 font-mono text-xs text-bone">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
              KEY BENEFITS
            </p>
            <ul className="mt-3 space-y-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-bone">
                  <Check size={16} className="mt-0.5 shrink-0 text-gold" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-line/40 pt-6">
            <p className="font-mono text-xs uppercase tracking-widest text-ash">
              {site.replyPromise}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="border-2 border-gold bg-gold px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-ink hover:bg-ink hover:text-gold"
              >
                Get Quote →
              </Link>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-line/60 px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-bone hover:border-gold hover:text-gold"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href={site.telLink}
                className="inline-flex items-center gap-2 border-2 border-line/60 px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-bone hover:border-gold hover:text-gold"
              >
                <Phone size={14} /> Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <>
          <SectionDivider index="REL" label="Related Products" />
          <section className="mx-auto max-w-[1400px] px-5 pt-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        </>
      )}

      <CTASection />
    </main>
  );
}

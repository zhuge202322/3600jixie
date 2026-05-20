import type { Category } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { site } from "@/data/site";
import Link from "next/link";
import Image from "next/image";
import CTASection from "./CTASection";
import { getDictionary } from "@/i18n/dictionaries";

export default function CategoryTemplate({ category, lang = "en" }: { category: Category; lang?: string }) {
  const dict = getDictionary(lang);
  const categoryProducts = getProductsByCategory(category.slug, lang);

  return (
    <main className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative bg-black py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={category.cover}
            alt={category.name}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-5">
          <div className="inline-block bg-[#FFCC00] px-3 py-1 mb-6">
            <span className="text-[10px] font-black text-[#1A3D8F] tracking-[0.2em] uppercase">
              // {category.name}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
            {category.h1}
          </h1>
          <p className="max-w-2xl text-blue-100 text-lg leading-relaxed">
            {category.intro}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-3xl font-black text-[#1A3D8F] uppercase tracking-tight mb-3" style={{ fontFamily: 'Impact, sans-serif' }}>
                AVAILABLE PRODUCTS
              </h2>
              <div className="h-1 w-16 bg-[#FFCC00]"></div>
            </div>
            <p className="text-gray-500 font-bold tracking-widest text-sm uppercase">
              Showing {categoryProducts.length} Items
            </p>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/${lang}/${product.slug}`}
                  className="group flex flex-col bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full"
                >
                  {/* Top Bar */}
                  <div className="bg-[#FFCC00] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="grid h-5 w-5 place-items-center bg-[#1A3D8F] font-black text-[10px] text-white">
                        RM
                      </span>
                      <span className="text-[11px] font-black text-[#1A3D8F] tracking-widest uppercase">
                        {site.brand} MACHINERY
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-[#1A3D8F]">www.rmloader.com</span>
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-6 border-b border-gray-100">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.images[0] || "/img/about.webp"}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-4 bg-white group-hover:bg-[#1A3D8F] transition-colors duration-300 flex-grow flex flex-col">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 group-hover:border-white/20">
                       <span className="text-[10px] font-bold text-gray-500 group-hover:text-blue-200">
                         {dict.partNumber || "PN"}: {product.partNumber}
                       </span>
                       <span className="text-[10px] font-bold text-[#FFCC00] uppercase tracking-wider">
                         View Details →
                       </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 border border-gray-200">
              <h3 className="text-2xl font-black text-gray-400 mb-4 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                PRODUCTS UPDATING
              </h3>
              <p className="text-gray-500 mb-6">
                We are currently updating our catalog for {category.name}.
              </p>
              <Link href="/contact" className="inline-block bg-[#FFCC00] px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#1A3D8F] hover:bg-[#1A3D8F] hover:text-white transition-colors">
                Contact Sales for Catalog
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTASection lang={lang} />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/data/categories";
import { site } from "@/data/site";
import CTASection from "@/components/CTASection";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getDictionary } from "@/i18n/dictionaries";

export const metadata: Metadata = {
  title: `Heavy Machinery Wear Parts & Attachments Catalog | ${site.brand}`,
  description: "Explore our complete range of excavator buckets, bucket teeth, NM500 wear plates, and dump truck liners. High-quality OEM parts from RM Machinery.",
  keywords: ["excavator wear parts catalog", "construction machinery attachments", "bucket teeth supplier", "undercarriage parts", "Raygoo Parts products", "RM Machinery products"],
  alternates: { canonical: "/products" },
};

export default function ProductsPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = getDictionary(lang);
  const categories = getCategories(lang);

  return (
    <main className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative bg-black py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/raygoo-loader/about-006.jpg"
            alt="Heavy Machinery Wear Parts"
            fill
            className="object-cover opacity-60"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 z-10">
          <div className="inline-block bg-[#E0A24A] px-3 py-1 mb-6 self-start">
            <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
              // {dict.productCatalog}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
            {dict.heavyMachinery} <span className="text-[#E0A24A]">{dict.wearParts}</span>
          </h1>
          
          <p className="max-w-2xl text-lg text-blue-100 leading-relaxed mb-8">
            {dict.catalogDesc}
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider">
              <CheckCircle2 size={16} className="text-[#E0A24A]" /> {dict.oemLevelQuality}
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider">
              <CheckCircle2 size={16} className="text-[#E0A24A]" /> {dict.customEngineering}
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider">
              <CheckCircle2 size={16} className="text-[#E0A24A]" /> {dict.globalDelivery}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black text-[#1A3D8F] uppercase tracking-tight mb-3" style={{ fontFamily: 'Impact, sans-serif' }}>
                {dict.browseAllCategories}
              </h2>
              <div className="h-1 w-24 bg-[#E0A24A]"></div>
            </div>
            <p className="text-gray-500 font-bold tracking-widest text-sm uppercase">
              {dict.showingLines ? `${dict.showingLines} ${categories.length} ${dict.productLinesCount}` : `Showing ${categories.length} Product Lines`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const targetUrl = category.available ? `/${lang}/${category.slug}` : `/${lang}/contact`;
              
              return (
                <Link
                  key={category.slug}
                  href={targetUrl}
                  className="group flex flex-col bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full"
                >
                  {/* Top Bar */}
                  <div className="bg-[#FFCC00] px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="grid h-5 w-5 place-items-center bg-[#1A3D8F] font-black text-[10px] text-white">
                        RG
                      </span>
                      <span className="text-[11px] font-black text-[#1A3D8F] tracking-widest uppercase">
                        {site.brand} MACHINERY
                      </span>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white p-6 border-b border-gray-100">
                    <div className="relative w-full h-full">
                      <Image
                        src={category.cover}
                        alt={category.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Certification Bar */}
                  <div className="flex items-center justify-between border-b-4 border-[#FFCC00] bg-white px-4 py-2">
                    <span className="text-[9px] text-[#1A3D8F] hover:text-[#FFCC00] transition-colors">
                      www.rmloader.com
                    </span>
                    <div className="flex gap-2">
                      <span className="grid h-5 w-5 place-items-center rounded-full border border-gray-800 text-[8px] font-bold text-gray-800">
                        CE
                      </span>
                      <span className="grid h-5 w-5 place-items-center rounded-full border border-gray-800 text-[8px] font-bold text-gray-800">
                        ISO
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-4 bg-white group-hover:bg-[#1A3D8F] transition-colors duration-300 flex-grow flex flex-col">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500 group-hover:text-gray-200 line-clamp-2 leading-relaxed transition-colors duration-300">
                      {category.intro}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reusing the bottom CTA section */}
      <CTASection lang={lang} />
    </main>
  );
}
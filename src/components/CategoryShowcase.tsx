"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/data/categories";
import { site } from "@/data/site";
import { ShieldCheck, Award, BadgeCheck, FileBadge } from "lucide-react";
import { getDictionary } from "@/i18n/dictionaries";

export default function CategoryShowcase({ lang = "en" }: { lang?: string }) {
  const dict = getDictionary(lang);
  const categories = getCategories(lang);
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D8F] mb-4">
            {dict.productCategories || "Product Categories"}
          </h2>
          <div className="h-1 w-16 bg-[#FFCC00] mx-auto"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleCategories.map((c) => (
            <Link
              key={c.slug}
              href={c.available ? `/${lang}/${c.slug}` : `/${lang}/contact`}
              className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              {/* Card Header (Yellow/Blue Style) */}
              <div className="bg-[#FFCC00] flex items-center justify-between px-3 py-2 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="bg-white text-[#1A3D8F] font-black italic px-1.5 text-[10px] tracking-tighter leading-tight border border-[#1A3D8F]">
                    RAYGOO<br/>
                    <span className="text-[8px] not-italic tracking-normal">锐工机械</span>
                  </div>
                </div>
                <div className="font-bold text-[#1A3D8F] text-sm tracking-wide">
                  Raygoo Machinery
                </div>
              </div>

              {/* Image Area */}
              <div className="relative aspect-[4/3] w-full p-4 bg-white flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={c.cover}
                    alt={c.name}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 25vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Certifications Bar */}
              <div className="bg-[#FFCC00] flex items-center justify-between px-3 py-1.5 border-t border-gray-200">
                <div className="text-[9px] text-[#1A3D8F] font-bold leading-tight">
                  <div>www.rmloader.com</div>
                </div>
                <div className="flex items-center gap-1.5 text-[#1A3D8F]">
                  <Award size={14} />
                  <ShieldCheck size={14} />
                  <BadgeCheck size={14} />
                  <FileBadge size={14} />
                </div>
              </div>

              {/* Text Area (Hover Effect) */}
              <div className="p-4 bg-white group-hover:bg-[#1A3D8F] transition-colors duration-300 flex-grow flex flex-col">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  { c.name }
                </h3>
                <p className="mt-2 text-xs text-gray-500 group-hover:text-gray-200 line-clamp-2 leading-relaxed transition-colors duration-300">
                  {c.short}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && categories.length > 8 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center justify-center border-2 border-[#1A3D8F] px-8 py-3 font-bold uppercase tracking-widest text-[#1A3D8F] hover:bg-[#1A3D8F] hover:text-white transition-colors"
            >
              {dict.viewAllCategories || "View All Categories"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

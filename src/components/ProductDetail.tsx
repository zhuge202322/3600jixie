"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { site } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import CTASection from "./CTASection";
import { CheckCircle2, Factory, ShieldCheck, Timer } from "lucide-react";
import { getDictionary } from "@/i18n/dictionaries";

export default function ProductDetail({ product, lang = "en" }: { product: Product; lang?: string }) {
  const dict = getDictionary(lang);
  const [activeImage, setActiveImage] = useState(product.images[0] || "/img/about.webp");

  return (
    <main className="pt-20 bg-white">
      {/* Breadcrumb & Title Area */}
      <section className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
            <Link href={`/${lang}`} className="hover:text-[#1A3D8F]">{dict.home}</Link>
            <span className="text-gray-300">/</span>
            <Link href={`/${lang}/products`} className="hover:text-[#1A3D8F]">{dict.products}</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#1A3D8F]">{product.partNumber}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-[#1A3D8F] uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
            {product.h1}
          </h1>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square w-full border border-gray-200 bg-white p-8 shadow-sm">
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.slice(0, 4).map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveImage(img)}
                      className={`relative aspect-square bg-white p-2 cursor-pointer transition-colors ${
                        activeImage === img 
                          ? "border-2 border-[#1A3D8F]" 
                          : "border border-gray-200 hover:border-[#FFCC00]"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} detail ${idx + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="flex flex-col">
              <div className="mb-8">
                <div className="inline-block bg-[#1A3D8F] text-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase mb-4">
                  PART NO. {product.partNumber}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.short}
                </p>
              </div>

              {/* Specs Table */}
              <div className="border border-gray-200 bg-white mb-8">
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                  <h3 className="font-black text-[#1A3D8F] uppercase tracking-wider">{dict.specification || "Technical Specifications"}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="flex px-6 py-3">
                    <span className="w-1/3 text-xs font-bold text-gray-500 uppercase tracking-wider">{dict.material}</span>
                    <span className="w-2/3 text-sm font-medium text-gray-900">{product.material}</span>
                  </div>
                  <div className="flex px-6 py-3">
                    <span className="w-1/3 text-xs font-bold text-gray-500 uppercase tracking-wider">{dict.hardness}</span>
                    <span className="w-2/3 text-sm font-medium text-gray-900">{product.hardness}</span>
                  </div>
                  <div className="flex px-6 py-3">
                    <span className="w-1/3 text-xs font-bold text-gray-500 uppercase tracking-wider">{dict.specification || "Type"}</span>
                    <span className="w-2/3 text-sm font-medium text-gray-900">{product.specification}</span>
                  </div>
                  <div className="flex px-6 py-3">
                    <span className="w-1/3 text-xs font-bold text-gray-500 uppercase tracking-wider">{dict.fitment || "Fitment"}</span>
                    <span className="w-2/3 text-sm font-medium text-gray-900">{product.fitment.join(", ")}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href={`/${lang}/contact`} className="flex-1 text-center bg-[#FFCC00] text-[#1A3D8F] px-8 py-4 font-black uppercase tracking-widest hover:bg-[#1A3D8F] hover:text-white transition-colors">
                  {dict.getQuote}
                </Link>
                <a href={site.whatsappLink} className="flex-1 text-center border-2 border-[#1A3D8F] text-[#1A3D8F] px-8 py-4 font-black uppercase tracking-widest hover:bg-gray-50 transition-colors">
                  WhatsApp Us
                </a>
              </div>

              {/* Factory Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="flex flex-col items-center text-center gap-2">
                  <Factory className="text-[#1A3D8F]" size={28} />
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Direct Factory<br/>Production</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck className="text-[#1A3D8F]" size={28} />
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">ISO 9001<br/>Certified Quality</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Timer className="text-[#1A3D8F]" size={28} />
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Fast Delivery<br/>{product.delivery}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
         <div className="mx-auto max-w-[900px] px-5">
           <h2 className="text-3xl font-black text-[#1A3D8F] uppercase tracking-tight mb-8 text-center" style={{ fontFamily: 'Impact, sans-serif' }}>
             {dict.productDetails}
           </h2>
           <div className="prose prose-lg max-w-none text-gray-600">
             <p className="whitespace-pre-line leading-relaxed">
               {product.seoDescription.replace("...", "")}
               {"\n\n"}
               {dict.descSuffix ? `Our ${product.name} ${dict.descSuffix}` : `Our ${product.name} are engineered to deliver maximum performance and wear life in the most demanding earthmoving applications. Manufactured in our ISO-certified facility, every part undergoes strict quality control and heat treatment processes.`}
             </p>
             <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{dict.keyAdvantages}</h3>
             <ul className="space-y-2">
               {product.benefits.map((benefit, i) => (
                 <li key={i} className="flex items-start gap-3">
                   <CheckCircle2 className="text-[#FFCC00] shrink-0 mt-1" size={20} />
                   <span>{benefit}</span>
                 </li>
               ))}
             </ul>
           </div>
         </div>
      </section>

      <CTASection lang={lang} />
    </main>
  );
}

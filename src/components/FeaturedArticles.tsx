"use client";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/data/posts";
import { getDictionary } from "@/i18n/dictionaries";

export default function FeaturedArticles({ lang = "en" }: { lang?: string }) {
  const dict = getDictionary(lang);
  const posts = getPosts(lang);
  // Use the first two posts from the blog data, but override their images
  const overrideImages = [
    "/img/raygoo-loader/about-003.jpg",
    "/img/raygoo-loader/about-006.jpg"
  ];

  const articles = posts.slice(0, 2).map((post, index) => ({
    id: `0${index + 1}`,
    category: `${dict.companyNews || "Company News"} · GUIDE`,
    title: post.title,
    description: post.excerpt,
    features: [
      post.date,
      "EXPERT INSIGHTS",
      "MAINTENANCE TIPS",
    ],
    image: overrideImages[index],
    link: `/${lang}/new/${post.slug}`,
    align: index === 0 ? "left" : "right",
  }));

  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden">
      <div className="flex flex-col gap-12 md:gap-24">
        {articles.map((article, index) => (
          <div key={article.id} className="relative w-full h-[800px] md:h-[600px] group cursor-pointer overflow-hidden">
            {/* 
              Background Container 
              We use absolute positioning to overlap image and text.
              Then we slice BOTH of them using complementary clip-paths.
            */}
            
            {/* === IMAGE LAYER === */}
            <div 
              className="absolute inset-0 z-10 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                // Slice the image: Left image keeps left part, Right image keeps right part
                clipPath: article.align === 'left' 
                  ? 'polygon(0 0, 60% 0, 45% 100%, 0% 100%)' // Keeps left
                  : 'polygon(55% 0, 100% 0, 100% 100%, 40% 100%)', // Keeps right
              }}
            >
              {/* Image wrapper for scale effect */}
              <div className="absolute inset-0 transition-transform duration-[1.5s] group-hover:scale-110">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  quality={100}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Number Tag (Pinned to Image) */}
              <div className={`absolute top-10 ${article.align === 'left' ? 'left-10' : 'right-10'} bg-[#E0A24A] px-4 py-2 z-20 shadow-xl transition-transform duration-500 group-hover:-translate-y-2`}>
                <span className="text-white font-bold text-xs tracking-[0.3em] uppercase">
                  // {article.id} - {article.category.split('·')[0].trim()}
                </span>
              </div>
            </div>

            {/* === TEXT LAYER === */}
            <div 
              className="absolute inset-0 bg-gray-50 z-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:bg-gray-100"
              style={{
                // Slice the text: Complementary to the image slice
                clipPath: article.align === 'left' 
                  ? 'polygon(59.5% 0, 100% 0, 100% 100%, 44.5% 100%)' // Keeps right
                  : 'polygon(0 0, 55.5% 0, 40.5% 100%, 0 100%)', // Keeps left
              }}
            >
              <div className={`absolute inset-0 flex items-center ${article.align === 'left' ? 'justify-end pr-[5%]' : 'justify-start pl-[5%]'} p-8 md:p-16`}>
                <div className={`max-w-xl transition-all duration-700 ${article.align === 'left' ? 'group-hover:-translate-x-4' : 'group-hover:translate-x-4'}`}>
                  
                  {/* Category Tag */}
                  <div className="inline-block border border-[#E0A24A] px-3 py-1 mb-6">
                    <span className="text-[10px] font-bold text-[#E0A24A] tracking-[0.2em] uppercase">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A3D8F] uppercase tracking-tight mb-6" style={{ fontFamily: 'Impact, sans-serif' }}>
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base md:pr-10">
                    {article.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-3 mb-10">
                    {article.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[11px] font-bold text-gray-800 tracking-[0.15em] uppercase">
                        <span className="w-3 h-1 bg-[#E0A24A]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={article.link}
                    className="inline-block self-start border border-[#1A3D8F] bg-transparent px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-[#1A3D8F] transition-colors hover:bg-[#1A3D8F] hover:text-white"
                  >
                    {dict.readArticle || "READ ARTICLE"} &rarr;
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

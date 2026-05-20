import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/data/posts";
import { getDictionary } from "@/i18n/dictionaries";

export const metadata: Metadata = {
  title: "News & Technical Guides | RM Machinery",
  description: "Company news, updates, and practical technical guides on excavator buckets, bucket teeth, NM500 wear plates and dump truck liners from RM Machinery.",
  keywords: ["machinery wear parts guide", "excavator bucket maintenance", "bucket teeth selection", "NM500 steel properties", "RM Machinery news", "Raygoo Parts updates"],
  alternates: { canonical: "/blog" },
};

export default function BlogPage({ params: { lang } }: { params: { lang: string } }) {
  const posts = getPosts(lang);
  const dict = getDictionary(lang);
  return (
    <main className="pt-20">
      <section className="relative h-[60vh] min-h-[460px] w-full overflow-hidden bg-black">
        <Image
          src="/img/raygoo-loader/home-019.jpg"
          alt="Company news and updates"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-12">
          <div className="inline-block bg-[#FFCC00] px-3 py-1 mb-6 w-max">
            <span className="text-[10px] font-black text-[#1A3D8F] tracking-[0.2em] uppercase">
              // {dict.companyNewsLabel}
            </span>
          </div>
          <h1 className="mt-4 text-5xl text-white md:text-7xl font-black uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
            {dict.latestUpdates}
          </h1>
          <p className="mt-6 max-w-3xl text-blue-100 text-lg leading-relaxed">
            {dict.latestUpdatesDesc}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/${lang}/new/${p.slug}`}
              className="group flex flex-col border border-gray-200 bg-white hover:border-[#1A3D8F] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {p.date}
                </p>
                <h2 className="mt-3 font-display text-xl font-bold uppercase text-[#1A3D8F] line-clamp-2">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-gray-600 line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-6 flex items-center text-[10px] font-bold uppercase tracking-widest text-[#FFCC00] group-hover:text-[#1A3D8F]">
                  {dict.readArticle}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

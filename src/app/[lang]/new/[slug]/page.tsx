import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/data/posts";
import CTASection from "@/components/CTASection";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  const posts = getPosts('en');
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string, lang: string } }): Metadata {
  const p = getPost(params.slug, params.lang);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    keywords: p.keywords,
    alternates: { canonical: `/${params.lang}/new/${p.slug}` },
    openGraph: { title: p.seoTitle, description: p.seoDescription, images: [p.cover] },
  };
}

export default function BlogPost({ params }: { params: { slug: string, lang: string } }) {
  const p = getPost(params.slug, params.lang);
  if (!p) notFound();
  const allPosts = getPosts(params.lang);
  const dict = getDictionary(params.lang);
  const related = allPosts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <main className="pt-20">
      <article>
        <section className="bg-gray-50 border-b border-gray-200 py-12 md:py-20">
          <div className="mx-auto max-w-[800px] px-5 text-center">
            <div className="mb-6 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
              <span className="text-[#FFCC00]">{dict.companyNewsLabel || "BLOG"}</span>
              <span className="text-gray-300">•</span>
              <span>{p.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1A3D8F] uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
              {p.title}
            </h1>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-5 py-10">
          <div className="relative aspect-[16/9] overflow-hidden border-2 border-line/60">
            <Image
              src={p.cover}
              alt={p.title}
              fill
              priority
              sizes="(max-width:768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div className="mt-8 prose prose-lg max-w-none text-gray-700 prose-headings:text-[#1A3D8F] prose-a:text-[#FFCC00]">
            {p.content.map((para, i) => (
              <p key={i} className="leading-relaxed mb-6">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-[1400px] px-5">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-bone">
          {dict.companyNews || "More Articles"}
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/${params.lang}/new/${r.slug}`}
              className="block border-2 border-line/60 bg-carbon p-4 hover:border-gold"
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                {r.date}
              </p>
              <h3 className="mt-1 font-display text-lg uppercase tracking-wide text-bone">
                {r.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-ash">{r.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTASection lang={params.lang} />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { title: p.seoTitle, description: p.seoDescription, images: [p.cover] },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <main className="pt-20">
      <article>
        <section className="relative border-b border-line/60 bg-carbon">
          <div className="absolute inset-0 grid-mesh opacity-30" />
          <div className="relative mx-auto max-w-3xl px-5 py-14">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
              // BLOG · {p.date}
            </p>
            <h1 className="mt-3 h-display text-3xl text-bone md:text-5xl">{p.title}</h1>
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
          <div className="mt-8 space-y-5 text-bone/90">
            {p.content.map((para, i) => (
              <p key={i} className="text-base leading-7">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-[1400px] px-5">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-bone">
          More Articles
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/blog/${r.slug}`}
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

      <CTASection />
    </main>
  );
}

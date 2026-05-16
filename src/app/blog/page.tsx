import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog — Heavy Machinery Wear Parts Guides",
  description:
    "Practical guides on excavator buckets, bucket teeth, NM500 wear plates and dump truck liners.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="pt-20">
      <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden bg-carbon">
        <div className="absolute inset-0 grid-mesh opacity-40" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-10">
          <span className="chip w-max">KNOWLEDGE BASE</span>
          <h1 className="mt-4 h-display text-5xl text-bone md:text-7xl">
            Wear-Part <span className="text-gold">Insights</span>
          </h1>
          <p className="mt-3 max-w-2xl text-bone/85">
            Field guides for choosing, replacing and maintaining heavy machinery wear parts.
          </p>
        </div>
        <div className="hazard absolute bottom-0 left-0 right-0 h-3" />
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block border-2 border-line/60 bg-carbon transition hover:border-gold"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-gold/40">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 grid-mesh opacity-25" />
              </div>
              <div className="p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                  {p.date}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-bone">
                  {p.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-ash">{p.excerpt}</p>
                <p className="mt-3 inline-flex items-center font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                  Read →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

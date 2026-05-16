"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PanelSplit({
  index,
  eyebrow,
  title,
  body,
  ctaHref,
  ctaLabel,
  image,
  reverse = false,
  bullets,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  ctaHref: string;
  ctaLabel: string;
  image: string;
  reverse?: boolean;
  bullets?: string[];
}) {
  return (
    <section className="relative grid w-full lg:grid-cols-2">
      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative h-[420px] lg:h-[640px] ${reverse ? "lg:order-2" : ""}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 grid-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-ink/10" />
        <div
          className={`absolute top-6 ${reverse ? "right-6" : "left-6"} border-2 border-gold bg-ink px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gold`}
        >
          / {index}
        </div>
      </motion.div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative flex h-[420px] flex-col justify-center bg-carbon px-8 py-10 lg:h-[640px] lg:px-16 ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        <div className="absolute inset-0 grid-mesh opacity-20" />
        <div className="relative">
          <span className="chip">{eyebrow}</span>
          <h2 className="mt-4 h-display text-4xl text-bone md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-lg text-ash">{body}</p>
          {bullets && (
            <ul className="mt-5 space-y-1.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 font-mono text-xs uppercase tracking-widest text-bone">
                  <span className="mt-1 inline-block h-1 w-3 bg-gold" /> {b}
                </li>
              ))}
            </ul>
          )}
          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 border-2 border-gold px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-gold hover:bg-gold hover:text-ink"
          >
            {ctaLabel} <ArrowRight size={14} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

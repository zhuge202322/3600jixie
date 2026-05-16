"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-bone">
      {/* Background image */}
      <Image
        src="https://picsum.photos/seed/excavator-rock-bucket/2400/1500"
        alt="Excavator at work"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />
      {/* Diagonal overlay slabs */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      <div className="absolute inset-0 grid-mesh opacity-50" />

      {/* Right diagonal yellow slab */}
      <div
        className="absolute right-0 top-0 hidden h-full w-[42%] bg-gold lg:block"
        style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="https://picsum.photos/seed/nm500-plate-stack/1200/1500"
            alt="NM500 plate"
            fill
            sizes="50vw"
            className="object-cover mix-blend-multiply"
          />
          <div className="absolute inset-0 grid-mesh-light opacity-50" />
        </div>
      </div>

      {/* Top hazard bar */}
      <div className="hazard-thin absolute left-0 right-0 top-20 h-1" />

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hazard h-3" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-[1400px] items-center px-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[820px]"
        >
          <span className="chip">RAYGOO PARTS · WEAR PARTS DIVISION</span>

          <h1 className="mt-6 h-display text-[15vw] leading-[0.9] text-bone md:text-[7rem]">
            BUILT TO
            <span className="block text-gold">OUTLAST</span>
            THE GROUND.
          </h1>

          <p className="mt-6 max-w-xl text-base text-bone/85 md:text-lg">
            Excavator buckets, drop-forged bucket teeth, NM400/NM500 wear plates and dump truck
            liners — engineered for mining, quarry and earthworks. OEM &amp; aftermarket.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 border-2 border-gold bg-gold px-6 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-ink hover:bg-ink hover:text-gold"
            >
              Request a Quote
              <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </Link>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-bone px-6 py-3.5 font-display text-sm font-bold uppercase tracking-widest text-bone hover:border-gold hover:text-gold"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a
              href={site.telLink}
              className="inline-flex items-center gap-2 border-2 border-bone/40 px-5 py-3.5 font-mono text-xs uppercase tracking-widest text-bone hover:border-gold hover:text-gold"
            >
              <Phone size={12} /> {site.tel}
            </a>
          </div>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
            // {site.replyPromise.toUpperCase()}
          </p>
        </motion.div>
      </div>

      {/* Right corner readouts */}
      <div className="pointer-events-none absolute right-5 top-28 z-10 hidden flex-col items-end gap-2 lg:flex">
        <div className="border border-ink bg-gold px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-ink">
          Q345B + NM500
        </div>
        <div className="border border-gold bg-ink/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
          MILL CERT EN 10204 3.1
        </div>
      </div>

      {/* Capability strip docked above bottom hazard */}
      <div className="absolute bottom-3 left-0 right-0 z-10 border-t-2 border-gold bg-ink/90 backdrop-blur">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-line/40 px-5 md:grid-cols-4">
          {[
            ["68", "COUNTRIES"],
            ["10+", "YEARS EXPORT"],
            ["NM400-NM550", "WEAR GRADES"],
            ["30 MIN", "RFQ REPLY"],
          ].map(([n, l]) => (
            <div key={l} className="px-4 py-4">
              <div className="font-display text-xl font-bold text-gold md:text-2xl">{n}</div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-ash">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

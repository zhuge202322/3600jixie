"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden border border-line/60 bg-carbon">
        <Image
          src={images[active]}
          alt={alt}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 grid-mesh opacity-25" />
        <span className="absolute left-3 top-3 border border-gold bg-ink/80 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
          IMG {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-[4/3] overflow-hidden border ${
              i === active ? "border-gold" : "border-line/40"
            }`}
            aria-label={`thumbnail ${i + 1}`}
          >
            <Image src={src} alt={`${alt} ${i + 1}`} fill sizes="20vw" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

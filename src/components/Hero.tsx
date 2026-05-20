"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";

const images = [
  "/img/20250228111752445d5.webp",
  "/img/202502281119025e5a2.webp",
  "/img/202503110549122a7ad.webp"
];

export default function Hero({ lang = "en" }: { lang?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dict = getDictionary(lang);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-ink">
      {/* Carousel Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
          {/* Subtle overlay for better visibility of controls */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* Controls Container at the bottom */}
      <div className="absolute bottom-12 left-0 right-0 z-10 flex flex-col items-center gap-8">
        {/* Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 px-5">
          <Link
            href={`/${lang}/contact`}
            className="group inline-flex items-center gap-2 bg-gold px-8 py-4 font-bold uppercase tracking-widest text-paper hover:bg-white hover:text-ink transition-colors shadow-lg"
          >
            {dict.requestQuote}
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Link>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white bg-black/30 px-8 py-4 font-bold uppercase tracking-widest text-white hover:border-gold hover:text-gold transition-colors backdrop-blur-sm shadow-lg"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 transition-all ${
                index === currentIndex ? "w-10 bg-gold" : "w-3 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

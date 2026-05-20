"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";

export default function StatsStrip({ lang = "en" }: { lang?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const dict = getDictionary(lang);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#f4f4f4] border-t border-white shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-gray-300 md:grid-cols-4">
        {[
          [site.countries.toString(), dict.stripCountries],
          ["10+", dict.stripYears],
          ["NM400-NM550", dict.stripGrades],
          ["30 MIN", dict.stripReply],
        ].map(([n, l]) => (
          <div key={l} className="px-4 py-8 text-center flex flex-col justify-center items-center hover:bg-white/50 transition-colors">
            <div className="text-3xl md:text-4xl font-bold text-gold drop-shadow-sm">{n}</div>
            <div className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">
              {l}
            </div>
          </div>
        ))}
      </div>
      
      {/* Red Progress Bar (Withdraws to reveal hazard stripe) */}
      <div 
        className="absolute bottom-0 right-0 h-3 bg-[#C0392B] transition-all duration-1000 ease-out z-10 flex justify-start items-center"
        style={{ width: isVisible ? "0%" : "100%" }}
      >
        <div className="w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-[#C0392B] -translate-x-[8px]" />
      </div>

      {/* Industrial Hazard Stripe at the bottom */}
      <div className="h-3 w-full hazard-stripe shadow-inner relative z-0" />
    </section>
  );
}

"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { getDictionary } from "@/i18n/dictionaries";

const MarketingMap = dynamic(() => import("./MarketingMap"), { ssr: false });

const countries = [
  { name: "India", lat: 20.5937, lng: 78.9629 },
  { name: "United States", lat: 37.0902, lng: -95.7129 },
  { name: "Brazil", lat: -14.235, lng: -51.9253 },
  { name: "Pakistan", lat: 30.3753, lng: 69.3451 },
  { name: "Nigeria", lat: 9.082, lng: 8.6753 },
  { name: "Bangladesh", lat: 23.685, lng: 90.3563 },
  { name: "Russia", lat: 61.524, lng: 105.3188 },
  { name: "Mexico", lat: 23.6345, lng: -102.5528 },
  { name: "Japan", lat: 36.2048, lng: 138.2529 },
  { name: "Philippines", lat: 12.8797, lng: 121.774 },
  { name: "Ethiopia", lat: 9.145, lng: 40.4897 },
  { name: "Egypt", lat: 26.8206, lng: 30.8025 },
  { name: "Vietnam", lat: 14.0583, lng: 108.2772 },
  { name: "Germany", lat: 51.1657, lng: 10.4515 },
  { name: "France", lat: 46.2276, lng: 2.2137 },
  { name: "Italy", lat: 41.8719, lng: 12.5674 },
];

export default function MarketingNetwork({ lang = "en" }: { lang?: string }) {
  const dict = getDictionary(lang);
  const [activeCountry, setActiveCountry] = useState(countries[0]);
  const defaultZoom = 3;
  const activeZoom = 4;
  
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When 20% of the section is visible, we trigger the progress bar to 100%
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gray-50 py-20 border-t border-gray-200">
      {/* Top Red Progress Bar (Reverse) */}
      <div 
        className="absolute top-0 right-0 h-3 bg-[#C0392B] z-10 transition-all duration-[1500ms] ease-out" 
        style={{ width: isVisible ? '100%' : '0%' }}
      >
        {/* Progress bar tip arrow (pointing left) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-[#C0392B]"></div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 pb-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E0A24A] px-3 py-1 mb-4">
            <span className="text-xs font-bold text-white tracking-[0.2em] uppercase">
              // {dict.globalReach}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A3D8F] uppercase tracking-tight mb-4" style={{ fontFamily: 'Impact, sans-serif' }}>
            {dict.marketingNetwork}
          </h2>
          <div className="h-1 w-24 bg-[#E0A24A] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Map */}
          <div className="w-full h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-xl border-4 border-white relative z-0">
            <MarketingMap 
              activeCountry={activeCountry} 
              countries={countries} 
              activeZoom={activeZoom} 
            />
          </div>

          {/* Right: Table */}
          <div className="w-full h-full flex flex-col bg-white shadow-xl border border-gray-200">
            <div className="bg-[#1A3D8F] p-4 text-center border-b-4 border-[#E0A24A] shrink-0">
              <p className="text-sm font-bold text-white tracking-widest uppercase">
                {dict.productsSellWell}
              </p>
            </div>
            
            <div className="flex-1 flex flex-col p-4">
              {/* Table Headers */}
              <div className="grid grid-cols-4 shrink-0">
                {Array(4)
                  .fill(dict.country)
                  .map((header, i) => (
                    <div
                      key={i}
                      className="p-3 text-center font-bold text-[#1A3D8F] text-xs uppercase tracking-widest border-b border-gray-200"
                    >
                      {header}
                    </div>
                  ))}
              </div>

              {/* Table Cells */}
              <div className="flex-1 grid grid-cols-4 auto-rows-fr">
                {countries.map((country) => (
                  <div
                    key={country.name}
                    onClick={() => setActiveCountry(country)}
                    className={`
                      flex items-center justify-center p-2 text-center cursor-pointer text-sm font-medium transition-all duration-200 border-b border-r border-gray-100 last:border-r-0
                      ${
                        activeCountry.name === country.name
                          ? "bg-[#1A3D8F] text-white shadow-inner scale-[1.02] relative z-10"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#E0A24A]"
                      }
                    `}
                  >
                    {country.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Red Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-3 bg-[#C0392B] z-10 transition-all duration-[1500ms] ease-out" 
        style={{ width: isVisible ? '100%' : '0%' }}
      >
        {/* Progress bar tip arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-y-[6px] border-y-transparent border-l-[8px] border-l-[#C0392B]"></div>
      </div>
    </section>
  );
}

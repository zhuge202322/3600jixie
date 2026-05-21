"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "th", name: "ไทย" },
  { code: "id", name: "Indonesia" },
  { code: "bn", name: "বাংলা" },
  { code: "fa", name: "فارسی" },
  { code: "ar", name: "العربية" },
  { code: "tr", name: "Türkçe" },
  { code: "pl", name: "Polski" },
];

export default function LanguageSwitcher({ lang, isMobile = false }: { lang: string, isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (code: string) => {
    setIsOpen(false);
    if (code === lang) return;
    
    // Replace the language part of the pathname
    const newPathname = pathname.replace(`/${lang}`, `/${code}`);
    router.push(newPathname || `/${code}`);
  };

  // Flag icon mapping (simplified fallback using emojis or standard SVG icons can be used, here using text for simplicity)
  const getFlag = (code: string) => {
    const flags: Record<string, string> = {
      en: "🇬🇧", vi: "🇻🇳", th: "🇹🇭", id: "🇮🇩", bn: "🇧🇩", fa: "🇮🇷", ar: "🇸🇦", tr: "🇹🇷", pl: "🇵🇱"
    };
    return flags[code] || "🌐";
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-gray-900 hover:text-[#1A3D8F] transition"
      >
        {isMobile ? (
          <span className="text-xl">{getFlag(lang)}</span>
        ) : (
          <Globe size={14} />
        )}
        <span className={`${isMobile ? 'hidden' : 'hidden xl:inline-block'}`}>
          {languages.find(l => l.code === lang)?.name || "Language"}
        </span>
        <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''} ${isMobile ? 'hidden' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-3 w-40 bg-white border border-gray-200 shadow-xl z-50">
          <div className="py-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLanguage(l.code)}
                className={`block w-full text-left px-4 py-2.5 text-xs font-bold tracking-wider hover:bg-[#FFCC00] hover:text-[#1A3D8F] transition-colors ${
                  lang === l.code ? 'bg-gray-100 text-[#1A3D8F]' : 'text-gray-700'
                }`}
              >
                {l.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

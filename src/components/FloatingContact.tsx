"use client";
import { useEffect, useState } from "react";
import { MessageCircle, Mail, Phone, ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export default function FloatingContact({ lang = "en" }: { lang?: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const items = [
    { label: "WhatsApp", icon: MessageCircle, href: site.whatsappLink, external: true },
    { label: "E-Mail", icon: Mail, href: `mailto:${site.email}`, external: false },
    { label: "Phone", icon: Phone, href: site.telLink, external: false },
  ];

  return (
    <div className="fixed right-3 top-1/2 z-50 -translate-y-1/2">
      <div className="flex flex-col border border-gray-200 bg-white shadow-md">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.external ? "_blank" : undefined}
            rel={it.external ? "noreferrer" : undefined}
            className="flex w-[64px] flex-col items-center gap-1 border-b border-gray-200 px-2 py-3 text-[#1A3D8F] last:border-b-0 hover:bg-[#FFCC00] hover:text-[#1A3D8F] transition-colors"
          >
            <it.icon size={18} />
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-center">
              {it.label}
            </span>
          </a>
        ))}
        {show && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex w-[64px] flex-col items-center gap-1 border-t border-gray-200 bg-[#1A3D8F] px-2 py-3 text-white hover:bg-[#FFCC00] hover:text-[#1A3D8F] transition-colors"
            aria-label="Top"
          >
            <ArrowUp size={18} />
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest">Top</span>
          </button>
        )}
      </div>
    </div>
  );
}

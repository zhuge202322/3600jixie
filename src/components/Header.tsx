"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { Menu, X, MessageCircle, Phone } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${
        scrolled
          ? "h-14 border-line/60 bg-ink/95 backdrop-blur"
          : "h-20 border-transparent bg-ink/70 backdrop-blur"
      }`}
    >
      {/* Top safety stripe */}
      <div className="hazard-thin h-1 w-full" />
      <div className="mx-auto flex h-[calc(100%-4px)] max-w-[1400px] items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border-2 border-gold bg-ink font-display text-base font-bold text-gold">
            RG
          </span>
          <div className="leading-none">
            <div className="font-display text-lg font-bold tracking-widest text-bone">
              {site.brand}
              <span className="ml-2 text-gold">PARTS</span>
            </div>
            <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.3em] text-ash">
              Heavy Machinery Wear Parts
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="border-l border-line/40 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ash transition first:border-l-0 hover:bg-gold hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={site.telLink}
            className="hidden items-center gap-2 border border-line/60 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-bone hover:border-gold hover:text-gold xl:inline-flex"
            aria-label="phone"
          >
            <Phone size={12} /> {site.tel}
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border-2 border-gold bg-gold px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-ink hover:bg-ink hover:text-gold"
          >
            Request Quote <span className="transition group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <button
          className="grid h-9 w-9 place-items-center border border-line/60 text-bone lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-line/60 bg-ink lg:hidden">
          <div className="px-5 py-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/30 py-3 font-mono text-xs uppercase tracking-widest text-bone hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 border-2 border-gold bg-gold px-4 py-3 text-center font-display text-xs font-bold uppercase tracking-widest text-ink"
              >
                Request Quote →
              </Link>
              <a
                href={site.whatsappLink}
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center border border-gold text-gold"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

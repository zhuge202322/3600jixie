"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { getCategories } from "@/data/categories";
import { ChevronDown, Phone, Menu, X, MessageCircle } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary } from "@/i18n/dictionaries";

export default function Header({ lang }: { lang: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dict = getDictionary(lang);
  const categories = getCategories(lang);

  const nav = [
    { label: dict.home, href: `/${lang}` },
    { label: dict.products, href: `/${lang}/products`, type: "products" },
    { label: dict.new, href: `/${lang}/new` },
    { label: dict.aboutUs, href: `/${lang}/about` },
    { label: dict.contactUs, href: `/${lang}/contact` },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper transition-all ${
        scrolled ? "h-14 border-b border-line" : "h-20 border-b border-transparent"
      }`}
    >
      <div className="h-0.5 w-full bg-gold" />
      <div className="mx-auto flex h-[calc(100%-2px)] max-w-[1400px] items-center justify-between px-5">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-3 relative z-50">
          <div className="relative h-12 w-48">
            <Image 
              src="/img/raygoo-loader/about-001.png"
              alt="Raygoo Machinery"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) =>
            n.type === "products" ? (
              <div
                key={n.href}
                className="relative"
                onMouseEnter={openProducts}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={n.href}
                  className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-[0.2em] text-gray-900 transition hover:text-[#1A3D8F]"
                >
                  {n.label}
                  <ChevronDown
                    size={14}
                    className={`transition ${productsOpen ? "rotate-180 text-[#1A3D8F]" : ""}`}
                  />
                </Link>
              </div>
            ) : (
              <Link
                key={n.href}
                href={n.href}
                className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-900 transition hover:text-[#1A3D8F]"
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher lang={lang} />
          
          <a
            href={site.telLink}
            className="hidden items-center gap-2 text-[11px] uppercase tracking-widest text-gray-600 hover:text-[#1A3D8F] xl:inline-flex"
          >
            <Phone size={12} /> {site.tel}
          </a>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 bg-[#FFCC00] px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-900 transition hover:bg-[#1A3D8F] hover:text-white"
          >
            {dict.requestQuote}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-9 w-9 place-items-center border border-line text-bone lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Products dropdown — wide mega menu */}
      {productsOpen && (
        <div
          onMouseEnter={openProducts}
          onMouseLeave={scheduleClose}
          className="absolute inset-x-0 top-full hidden border-t border-gray-200 bg-white shadow-lg lg:block"
        >
          <div className="mx-auto max-w-[1400px] px-5 py-6">
            <div className="mb-4 flex items-end justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#1A3D8F]">
                  // Catalogue
                </div>
                <div className="mt-1 text-xl font-bold text-gray-900">Product Categories</div>
              </div>
              <Link
                href={`/${lang}/products`}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFCC00] hover:text-[#1A3D8F]"
              >
                {dict.viewAllCategories || "View all →"}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
              {categories.slice(0, 8).map((c) => (
                    <Link
                      key={c.slug}
                      href={c.available ? `/${lang}/${c.slug}` : `/${lang}/contact`}
                      onClick={() => setProductsOpen(false)}
                      className="group flex items-center gap-3 border border-gray-200 bg-white p-2 transition hover:border-[#1A3D8F] hover:shadow-md"
                    >
                  <div className="relative h-14 w-20 shrink-0 overflow-hidden border border-gray-100">
                    <Image
                      src={c.cover}
                      alt={c.name}
                      fill
                      sizes="80px"
                      className="object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-gray-900 group-hover:text-[#1A3D8F]">
                      {c.name}
                    </div>
                    <div className="mt-0.5 truncate text-[11px] text-gray-500">{c.short}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-0 top-full border-t border-line bg-paper lg:hidden">
          <div className="px-5 py-3">
            {nav.map((n) => (
              <div key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-xs font-bold uppercase tracking-widest text-bone hover:text-gold"
                >
                  {n.label}
                </Link>
                {n.type === "products" && (
                  <div className="grid grid-cols-2 gap-2 border-b border-line py-3">
                    {categories.slice(0, 6).map((c) => (
                      <Link
                        key={c.slug}
                        href={c.available ? `/${lang}/${c.slug}` : `/${lang}/contact`}
                        onClick={() => setOpen(false)}
                        className="truncate border border-line px-2 py-2 text-[11px] font-bold uppercase tracking-wider text-bone hover:border-gold hover:text-gold"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex gap-2">
              <Link
                href={`/${lang}/contact`}
                onClick={() => setOpen(false)}
                className="flex-1 bg-gold px-4 py-3 text-center text-xs font-bold uppercase tracking-widest text-paper"
              >
                {dict.requestQuote}
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

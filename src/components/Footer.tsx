import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { getCategories } from "@/data/categories";
import { Mail, Phone, MapPin, MessageCircle, Printer } from "lucide-react";
import { getDictionary } from "@/i18n/dictionaries";

export default function Footer({ lang }: { lang: string }) {
  const dict = getDictionary(lang);
  const categories = getCategories(lang);

  const nav = [
    { label: dict.home, href: `/${lang}` },
    { label: dict.products, href: `/${lang}/products` },
    { label: dict.new, href: `/${lang}/new` },
    { label: dict.aboutUs, href: `/${lang}/about` },
    { label: dict.contactUs, href: `/${lang}/contact` },
  ];
  return (
    <footer className="mt-32 border-t border-line bg-paper text-bone">
      {/* red accent line */}
      <div className="h-0.5 w-full bg-divider" />

      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-5">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-48">
              <Image 
                src="/img/raygoo-loader/about-001.png"
                alt="Raygoo Machinery"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
          <p className="mt-4 text-sm text-ash">{site.company}</p>
          <p className="mt-3 text-xs text-ash">{site.description}</p>
          <p className="mt-4 chip">REPLY · 30 MIN</p>
        </div>

        <div>
          <h4 className="border-b border-divider pb-2 font-display text-sm font-bold uppercase tracking-widest text-bone">
            Navigate
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ash hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="border-b border-divider pb-2 font-display text-sm font-bold uppercase tracking-widest text-bone">
            Products
          </h4>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${lang}/${c.slug}`} className="text-ash hover:text-gold line-clamp-1" title={c.name}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="border-b border-divider pb-2 font-display text-sm font-bold uppercase tracking-widest text-bone">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <Phone size={14} className="mt-1 shrink-0 text-gold" />
              <a className="text-ash hover:text-gold" href={site.telLink}>{site.tel}</a>
            </li>
            <li className="flex gap-2">
              <Printer size={14} className="mt-1 shrink-0 text-gold" />
              <span className="text-ash">{site.fax}</span>
            </li>
            <li className="flex gap-2">
              <Mail size={14} className="mt-1 shrink-0 text-gold" />
              <a className="text-ash hover:text-gold" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex gap-2">
              <MessageCircle size={14} className="mt-1 shrink-0 text-gold" />
              <a className="text-ash hover:text-gold" href={site.whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp {site.whatsapp}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin size={14} className="mt-1 shrink-0 text-gold" />
              <span className="text-ash">{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-5 py-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
        © {new Date().getFullYear()} {site.company} · ALL RIGHTS RESERVED ·{" "}
        <a href={site.parentSite} className="hover:text-gold" target="_blank" rel="noreferrer">
          {site.parentSiteLabel.toUpperCase()}
        </a>
      </div>
    </footer>
  );
}

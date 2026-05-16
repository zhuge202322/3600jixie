import Link from "next/link";
import { site, nav } from "@/data/site";
import { categories } from "@/data/categories";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line/60 bg-ink text-bone">
      {/* Top hazard stripe */}
      <div className="hazard h-3 w-full" />

      {/* Search bar (Raygoo-style) */}
      <div className="border-b border-line/40 bg-gold">
        <form className="mx-auto flex max-w-[1400px] items-center gap-3 px-5 py-4 text-ink">
          <span className="font-display text-sm font-bold uppercase tracking-widest">
            Search the catalogue
          </span>
          <input
            placeholder="Part number / model / material grade"
            className="flex-1 border-2 border-ink bg-paper px-3 py-2 text-ink placeholder:text-ink/50 focus:outline-none"
          />
          <button
            type="button"
            className="border-2 border-ink bg-ink px-5 py-2 font-display text-sm font-bold uppercase tracking-widest text-gold"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border-2 border-gold font-display text-base font-bold text-gold">
              RG
            </span>
            <div>
              <div className="font-display text-lg font-bold tracking-widest">
                {site.brand}
                <span className="ml-1 text-gold">PARTS</span>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-ash">
                {site.brandCN}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-ash">{site.company}</p>
          <p className="mt-3 text-xs text-ash/80">{site.description}</p>
          <p className="mt-4 chip">REPLY · 30 MIN</p>
        </div>

        <div>
          <h4 className="border-b-2 border-gold pb-2 font-display text-sm font-bold uppercase tracking-widest text-gold">
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

        <div>
          <h4 className="border-b-2 border-gold pb-2 font-display text-sm font-bold uppercase tracking-widest text-gold">
            Products
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-ash hover:text-gold">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="border-b-2 border-gold pb-2 font-display text-sm font-bold uppercase tracking-widest text-gold">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <Phone size={14} className="mt-1 shrink-0 text-gold" />
              <a className="text-ash hover:text-gold" href={site.telLink}>{site.tel}</a>
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

      <div className="border-t border-line/40 px-5 py-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
        © {new Date().getFullYear()} {site.company} · ALL RIGHTS RESERVED ·{" "}
        <a href={site.parentSite} className="hover:text-gold" target="_blank" rel="noreferrer">
          RAYGOO-LOADER.COM
        </a>
      </div>
    </footer>
  );
}

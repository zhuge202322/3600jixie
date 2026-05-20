import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { site } from "@/data/site";
import { Mail, Phone, Building2, MessageCircle, MapPin, Printer, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Contact Us | ${site.brand} Parts Inquiry`,
  description: "Contact RAYGOO Parts for wholesale inquiries. Send your part number, drawing or wear-plate specs. OEM service available. Quick reply within 30 minutes.",
  keywords: ["contact Raygoo Parts", "inquire excavator parts", "heavy machinery parts wholesale", "OEM wear parts supplier contact", "RM Machinery contact", "bucket teeth quote"],
  alternates: { canonical: "/contact" },
};

export default function ContactPage({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden bg-black">
        <Image
          src="/img/raygoo-loader/about-011.jpg"
          alt="Contact Us"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 grid-mesh opacity-20" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-10">
          <span className="chip w-max">CONTACT</span>
          <h1 className="mt-4 h-display text-5xl text-bone md:text-7xl">
            Send Your <span className="text-gold">RFQ</span>
          </h1>
          <p className="mt-3 max-w-xl text-bone/85">{site.replyPromise}.</p>
        </div>
        <div className="hazard absolute bottom-0 left-0 right-0 h-3" />
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 pt-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-3">
          {[
            { icon: Building2, label: "Company", value: site.company },
            { icon: Phone, label: "Phone / WhatsApp", value: site.tel, href: site.telLink },
            { icon: MessageCircle, label: "WhatsApp", value: site.whatsapp, href: site.whatsappLink, ext: true },
            { icon: Printer, label: "Fax", value: site.fax },
            { icon: Mail, label: "Email (Sales)", value: site.email, href: `mailto:${site.email}` },
            { icon: Mail, label: "Email (Info)", value: site.emailAlt, href: `mailto:${site.emailAlt}` },
            { icon: MapPin, label: "Address", value: site.address },
          ].map((it) => (
            <div key={it.label} className="border border-line/60 bg-carbon p-4">
              <div className="flex items-start gap-3">
                <it.icon size={18} className="mt-0.5 text-gold" />
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                    {it.label}
                  </p>
                  {it.href ? (
                    <a
                      href={it.href}
                      target={it.ext ? "_blank" : undefined}
                      rel={it.ext ? "noreferrer" : undefined}
                      className="font-display text-base text-bone hover:text-gold"
                    >
                      {it.value}
                    </a>
                  ) : (
                    <p className="font-display text-base text-bone">{it.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}

          <Link
            href={site.parentSite}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border-2 border-gold bg-gold/10 p-4 hover:bg-gold/20"
          >
            <ExternalLink size={18} className="text-gold" />
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                Group Main Site
              </p>
              <p className="font-display text-base text-bone">{site.parentSiteLabel}</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-ash">
                Wheel loaders / Backhoe / Telescopic / Wheel dozers
              </p>
            </div>
          </Link>
        </div>

        <div className="border-2 border-gold bg-carbon">
          <div className="bg-gold px-5 py-3 text-ink">
            <p className="font-display text-sm font-bold uppercase tracking-widest">
              // INQUIRY FORM · 30 MIN REPLY
            </p>
          </div>
          <div className="p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { site } from "@/data/site";
import { Mail, Phone, Building2, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact ${site.brand} Parts`,
  description:
    "Contact RAYGOO Parts. Send your part number, drawing or wear-plate spec — reply within 30 minutes. WhatsApp, email and inquiry form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden bg-carbon">
        <div className="absolute inset-0 grid-mesh opacity-40" />
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
            { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
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

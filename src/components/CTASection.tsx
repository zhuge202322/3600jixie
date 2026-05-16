import Link from "next/link";
import { site } from "@/data/site";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export default function CTASection({
  title = site.replyPromise,
  primary = "Get Quote Now",
  href = "/contact",
}: {
  title?: string;
  primary?: string;
  href?: string;
}) {
  return (
    <section className="relative mt-24">
      {/* Hazard cap */}
      <div className="hazard h-3 w-full" />
      <div className="bg-gold text-ink">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-14 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-ink/70">
              // RFQ / INQUIRY
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
              {title}
            </h3>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink/70">
              EMAIL · {site.email} &nbsp;//&nbsp; TEL · {site.tel}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={href}
              className="group inline-flex items-center gap-2 border-2 border-ink bg-ink px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-gold hover:bg-gold hover:text-ink"
            >
              {primary} <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </Link>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-ink hover:bg-ink hover:text-gold"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a
              href={site.telLink}
              className="inline-flex items-center gap-2 border-2 border-ink px-5 py-3 font-display text-sm font-bold uppercase tracking-widest text-ink hover:bg-ink hover:text-gold"
            >
              <Phone size={14} /> Call
            </a>
          </div>
        </div>
      </div>
      <div className="hazard h-3 w-full" />
    </section>
  );
}

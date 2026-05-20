import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { getDictionary } from "@/i18n/dictionaries";

export default function CompanyIntro({ lang = "en" }: { lang?: string }) {
  const dict = getDictionary(lang);
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/about.webp"
          alt="Company Facility"
          fill
          className="object-cover"
        />
        {/* Mask Overlay */}
        <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 text-white">
        {/* Centered Company Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {dict.companyTitle}
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              {dict.companyDesc1}
            </p>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              {dict.companyDesc2}
            </p>
            <Link
              href={`/${lang}/about`}
              className="inline-flex items-center gap-2 bg-gold px-8 py-4 font-bold uppercase tracking-widest text-paper hover:bg-white hover:text-ink transition-colors"
            >
              {dict.learnMore}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 border border-white/20 p-6 backdrop-blur-md">
              <div className="text-4xl font-bold text-gold mb-2">{site.countries}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/70">{dict.statsCountries}</div>
            </div>
            <div className="bg-white/10 border border-white/20 p-6 backdrop-blur-md">
              <div className="text-4xl font-bold text-gold mb-2">20+</div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/70">{dict.statsExperience}</div>
            </div>
            <div className="bg-white/10 border border-white/20 p-6 backdrop-blur-md">
              <div className="text-4xl font-bold text-gold mb-2">20k</div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/70">{dict.statsArea}</div>
            </div>
            <div className="bg-white/10 border border-white/20 p-6 backdrop-blur-md">
              <div className="text-4xl font-bold text-gold mb-2">ISO</div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/70">{dict.statsCert}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, Globe2, Factory, Building2, ExternalLink } from "lucide-react";
import { site } from "@/data/site";
import CTASection from "@/components/CTASection";
import SectionDivider from "@/components/SectionDivider";
import { getDictionary } from "@/i18n/dictionaries";

export const metadata: Metadata = {
  title: `About Us | ${site.company}`,
  description: "Fujian Raygoo Machinery Co., Ltd. (RM Machinery) — founded 2002. Leading manufacturer of wheel loader, excavator and heavy-machinery wear parts serving 68 countries. ISO9001/CE certified.",
  keywords: ["Fujian Raygoo Machinery", "RM Machinery", "Raygoo Parts factory", "construction machinery parts manufacturer", "China excavator parts factory", "OEM heavy equipment parts"],
  alternates: { canonical: "/about" },
};

export default function AboutPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = getDictionary(lang);

  const stats: [string, string][] = [
    [String(site.founded), dict.foundedLabel],
    [String(site.countries), dict.statsCountries],
    [site.factoryArea, dict.productionBaseLabel],
    [site.annualCapacity, dict.annualCapacityLabel],
  ];

  const applications = [
    dict.appEarthworks,
    dict.appMining,
    dict.appRoad,
    dict.appTunnel,
    dict.appLogistics,
    dict.appHousing,
    dict.appConcrete,
    dict.appPilling,
    dict.appHighAltitude,
    dict.appSanitation,
    dict.appPort,
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[460px] w-full overflow-hidden bg-black">
        <Image
          src="/img/raygoo-loader/about-007.jpg"
          alt="Raygoo Machinery Factory"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-12">
          <div className="inline-block bg-[#FFCC00] px-3 py-1 mb-6 w-max">
            <span className="text-[10px] font-black text-[#1A3D8F] tracking-[0.2em] uppercase">
              // {dict.companyGroup}
            </span>
          </div>
          <h1 className="mt-4 text-5xl text-white md:text-7xl font-black uppercase tracking-tight" style={{ fontFamily: 'Impact, sans-serif' }}>
            {dict.aboutPrefix} <span className="text-[#FFCC00]">{site.brand}</span>
          </h1>
          <p className="mt-6 max-w-3xl text-blue-100 text-lg leading-relaxed">{site.company}</p>
          <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FFCC00]">
            {dict.parentGroupInfo}
          </p>
        </div>
      </section>

      {/* Stats slab */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-gray-200 lg:grid-cols-4">
          {stats.map(([n, l], i) => (
            <div key={l} className={`px-6 py-8 ${i >= 2 ? "border-t border-gray-200 lg:border-t-0" : ""}`}>
              <div className="font-display text-3xl font-bold text-[#1A3D8F] md:text-5xl">{n}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our History */}
      <SectionDivider index="01" label={dict.ourHistory} rightLabel={dict.estLabel} />
      <section className="mx-auto max-w-[1400px] px-5 pt-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-gray-700 leading-7">
            <p>
              <span className="font-bold text-[#1A3D8F]">{site.company}</span> {dict.historyPara1} {site.productionBases.join(", ")}.
            </p>
            <p>
              {dict.historyPara2} <span className="font-bold text-[#1A3D8F]">{site.countries}</span> {dict.historyPara2_2}
            </p>
            <p>
              {dict.historyPara3}
            </p>
            <p>
              {dict.historyPara4} <span className="font-bold text-[#1A3D8F]">20,000 m²</span>{" "}
              {dict.historyPara4_2} <span className="font-bold text-[#1A3D8F]">9,500+</span> {dict.historyPara4_3}
            </p>
            <p className="border-l-4 border-[#FFCC00] pl-4 italic text-gray-800 bg-gray-50 py-3 pr-3">
              <span className="font-bold text-[#1A3D8F]">RAYGOO Parts</span> {dict.historyPara5}{" "}
              <Link
                href={site.parentSite}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold text-[#1A3D8F] underline-offset-4 hover:underline"
              >
                {site.parentSiteLabel} <ExternalLink size={14} />
              </Link>
              .
            </p>
          </div>

          <aside className="space-y-3">
            <div className="border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Building2 size={18} className="text-[#1A3D8F]" />
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A3D8F]">
                  {dict.groupSubsidiaries}
                </p>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {site.subsidiaries.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-[#FFCC00]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Factory size={18} className="text-[#1A3D8F]" />
                <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1A3D8F]">
                  {dict.productionBasesLabel}
                </p>
              </div>
              <p className="mt-4 font-display text-base font-bold text-gray-900">
                {site.productionBases.join(" · ")}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Application */}
      <SectionDivider index="02" label={dict.productApplication} rightLabel={dict.sectorsLabel} />
      <section className="mx-auto max-w-[1400px] px-5 pt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((a, i) => (
            <div
              key={a}
              className="group flex items-center gap-4 border border-gray-200 bg-white px-5 py-5 hover:border-[#1A3D8F] hover:shadow-md transition-all cursor-default"
            >
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-[#FFCC00] group-hover:text-[#1A3D8F]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-wide text-gray-700 group-hover:text-[#1A3D8F]">{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brand partners */}
      <SectionDivider index="03" label={dict.brandPartners} rightLabel={dict.vehicleTechSupport} />
      <section className="mx-auto max-w-[1400px] px-5 pt-8">
        <div className="relative w-full border border-gray-200 bg-white shadow-sm p-2 flex justify-center">
          <img
            src="/img/raygoo-loader/about-007.jpg"
            alt="Cooperative Factory and Workshop"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Certificates */}
      <SectionDivider index="04" label={dict.qualityCertificates} rightLabel={dict.certLabel} />
      <section className="mx-auto max-w-[1400px] px-5 pt-8 pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-gray-700 leading-7">
            <p className="flex items-start gap-4 bg-gray-50 p-5 border border-gray-200">
              <ShieldCheck size={24} className="mt-1 shrink-0 text-[#1A3D8F]" />
              <span>
                {dict.certPara1}
              </span>
            </p>
            <p className="flex items-start gap-4 bg-gray-50 p-5 border border-gray-200">
              <Award size={24} className="mt-1 shrink-0 text-[#1A3D8F]" />
              <span>
                {dict.certPara2}
              </span>
            </p>
            <p className="flex items-start gap-4 bg-gray-50 p-5 border border-gray-200">
              <Globe2 size={24} className="mt-1 shrink-0 text-[#1A3D8F]" />
              <span>
                {dict.certPara3} <span className="font-bold text-[#1A3D8F]">{site.countries}</span> {dict.certPara3_2}
              </span>
            </p>
            <div className="relative w-full border border-gray-200 bg-white shadow-sm p-2 flex justify-center mt-6">
              <img
                src="/img/raygoo-loader/home-020.png"
                alt="Working Areas"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] w-full border border-gray-200 bg-white p-4 shadow-sm">
              <Image
                src="/img/raygoo-loader/about-011.jpg"
                alt="Quality certification"
                fill
                className="object-cover p-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {site.certificates.map((c) => (
                <div
                  key={c}
                  className="flex h-20 flex-col items-center justify-center border border-gray-200 bg-white shadow-sm"
                >
                  <Award size={18} className="text-[#1A3D8F]" />
                  <span className="mt-1 font-display text-base font-bold uppercase tracking-widest text-gray-700">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection lang={lang} />
    </main>
  );
}

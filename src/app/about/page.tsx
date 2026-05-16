import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import CTASection from "@/components/CTASection";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: `About ${site.brand} Parts`,
  description:
    "Fujian Raygoo Machinary Co., Ltd. — heavy machinery wear parts manufacturer. Excavator buckets, bucket teeth, NM500 wear plates and dump truck liners.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const stats = [
    ["68", "Countries"],
    ["10+", "Years Export"],
    ["500+", "SKUs"],
    ["30 MIN", "Reply Time"],
  ];
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="https://picsum.photos/seed/raygoo-factory/2200/1300"
          alt="Factory"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
        <div className="absolute inset-0 grid-mesh opacity-40" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-12">
          <span className="chip w-max">COMPANY</span>
          <h1 className="mt-4 h-display text-5xl text-bone md:text-7xl">
            About <span className="text-gold">{site.brand}</span> Parts
          </h1>
          <p className="mt-3 max-w-2xl text-bone/85">{site.company}</p>
        </div>
        <div className="hazard absolute bottom-0 left-0 right-0 h-3" />
      </section>

      <SectionDivider index="01" label="Who We Are" />

      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 pt-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-bone/90">
          <p>
            <span className="font-bold text-gold">{site.company}</span> is a Chinese manufacturer
            and exporter of heavy machinery wear parts. Our wear parts division (RAYGOO PARTS)
            specialises in excavator buckets, drop-forged bucket teeth, NM-series wear-resistant
            plates and dump truck body liners.
          </p>
          <p>
            We supply OEM-equivalent and custom-engineered wear components for mining, quarry,
            earthworks and steel/cement plants. Products are exported to {stats[0][0]} countries
            including Southeast Asia, Middle East, South America, Africa, Europe and Oceania.
          </p>
          <p>
            All NM-series wear steel is supplied with EN 10204 3.1 mill test certificates.
            Drop-forged teeth are heat-treated and hardness-controlled per batch. Custom buckets
            and liners are CAD-engineered to fit OEM machine geometry.
          </p>
          <p>
            Sister site:{" "}
            <a className="text-gold underline-offset-4 hover:underline" target="_blank" rel="noreferrer" href={site.parentSite}>
              {site.parentSite.replace("https://", "").replace(/\/$/, "")}
            </a>{" "}
            (full machine sales — wheel loaders, backhoe loaders, telescopic loaders, wheel
            dozers).
          </p>
        </div>
        <div className="grid grid-cols-2 border-2 border-line/60">
          {stats.map(([n, l], i) => (
            <div
              key={l}
              className={`bg-carbon px-5 py-7 text-center ${
                i % 2 === 0 ? "border-r border-line/40" : ""
              } ${i < 2 ? "border-b border-line/40" : ""}`}
            >
              <div className="font-display text-3xl font-bold text-gold md:text-4xl">{n}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ash">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Want to be our distributor or bulk buyer?" primary="Contact Sales" />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Truck, Settings2, Award, HardHat, Mountain, Hammer, Factory, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import PanelSplit from "@/components/PanelSplit";
import SectionDivider from "@/components/SectionDivider";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  const apps = [
    { label: "Mining", icon: Mountain, img: "https://picsum.photos/seed/mining-app/900/700" },
    { label: "Quarry", icon: Hammer, img: "https://picsum.photos/seed/quarry-app/900/700" },
    { label: "Construction", icon: HardHat, img: "https://picsum.photos/seed/construction-app/900/700" },
    { label: "Steel & Cement", icon: Factory, img: "https://picsum.photos/seed/steel-cement-app/900/700" },
  ];

  const advantages = [
    { icon: ShieldCheck, label: "Stable Quality", desc: "Mill-cert NM steel · drop-forged teeth · controlled HRC/HBW per batch." },
    { icon: Award, label: "OEM Engineering", desc: "CAD reverse-engineering, custom hitch, pin centres and bolt pattern." },
    { icon: Truck, label: "Fast Delivery", desc: "Stocked plates ship in 7 days · custom builds 20–35 days." },
    { icon: Settings2, label: "Full Service", desc: "Drawing review, weld procedure, packing list, on-site fitment guide." },
  ];

  return (
    <main>
      {/* S1 — Full-screen Hero */}
      <Hero />

      {/* S2 — Product Lines (panel-cut alternating) */}
      <SectionDivider index="01" label="Product Lines" rightLabel="04 · CATALOGUE" />
      <div className="mt-8 flex flex-col">
        <PanelSplit
          index="01 · EXCAVATOR BUCKETS"
          eyebrow="EXCAVATOR · BUCKETS"
          title="Excavator Buckets"
          body="GP, Heavy-Duty and Rock buckets. Q345B structural shell with NM400/NM500 wear lining, custom hitch and pin centres for CAT, Komatsu, Hitachi, Volvo, SANY and XCMG."
          bullets={[
            "0.5 – 6.0 m³ capacity",
            "NM400/NM500 wear lining",
            "Custom hitch / pin centres",
          ]}
          ctaHref="/excavator-buckets"
          ctaLabel="See Buckets"
          image="https://picsum.photos/seed/excavator-bucket-hero/1400/1000"
        />
        <PanelSplit
          index="02 · BUCKET TEETH"
          eyebrow="DROP-FORGED · TEETH"
          title="Bucket Teeth & Adapters"
          body="Drop-forged alloy-steel teeth and adapters for excavators and wheel loaders. J200/J300/J450, PC200, E330/J400, K-series and OEM cross-references."
          bullets={[
            "HRC 48–54 controlled",
            "Excavator + loader coverage",
            "Tip · adapter · pin packages",
          ]}
          ctaHref="/bucket-teeth"
          ctaLabel="See Teeth"
          image="https://picsum.photos/seed/bucket-teeth-hero/1400/1000"
          reverse
        />
        <PanelSplit
          index="03 · NM500 WEAR PLATES"
          eyebrow="NM SERIES · STEEL"
          title="NM400 / NM500 Wear Plates"
          body="Wear-resistant steel plate from NM360 to NM550. HBW 360–550. Plate 4–80 mm. Mill cert EN 10204 3.1. Laser, plasma and waterjet cut to drawing."
          bullets={[
            "HBW 360 – 550",
            "Cut · drill · bend · weld",
            "EN 10204 3.1 mill cert",
          ]}
          ctaHref="/nm500-wear-plates"
          ctaLabel="See Plates"
          image="https://picsum.photos/seed/nm500-stack-hero/1400/1000"
        />
        <PanelSplit
          index="04 · DUMP TRUCK LINERS"
          eyebrow="DUMP TRUCK · LINERS"
          title="Dump Truck Body Liners"
          body="Bolt-on or weld-on body, tailgate and floor liners in NM450/NM500/NM550. CAD-cut to fit CAT 770/777, Komatsu HD465/785, Volvo A40 and BELAZ trucks."
          bullets={[
            "Bolt-on, no welding",
            "CAT · Komatsu · Volvo · BELAZ",
            "Body / tailgate / floor",
          ]}
          ctaHref="/dump-truck-liners"
          ctaLabel="See Liners"
          image="https://picsum.photos/seed/dump-truck-liner-hero/1400/1000"
          reverse
        />
      </div>

      {/* S3 — Featured Products */}
      <SectionDivider index="02" label="Featured Parts" rightLabel={`${featured.length} UNITS`} />
      <section className="mx-auto max-w-[1400px] px-5 pt-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Reveal key={p.slug}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* S4 — NM500 Material Spec block (panel-cut, dark slab) */}
      <SectionDivider index="03" label="Material Datasheet" rightLabel="NM-SERIES STEEL" />
      <section className="relative mt-8">
        <div className="hazard-thin h-1 w-full" />
        <div className="bg-carbon">
          <div className="mx-auto max-w-[1400px] px-5 py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <span className="chip">SPEC SHEET</span>
                <h2 className="mt-4 h-display text-4xl text-bone md:text-6xl">
                  NM SERIES<br />
                  <span className="text-gold">WEAR STEEL</span>
                </h2>
                <p className="mt-5 max-w-md text-ash">
                  Quenched and tempered low-alloy steel for the highest abrasion duty.
                  Specify by Brinell hardness — we cut, drill, bend and form to drawing.
                </p>
              </div>
              <div className="overflow-x-auto border-2 border-line/60">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gold text-ink">
                      <th className="px-4 py-3 text-left font-display uppercase tracking-widest">Grade</th>
                      <th className="px-4 py-3 text-left font-display uppercase tracking-widest">Hardness HBW</th>
                      <th className="px-4 py-3 text-left font-display uppercase tracking-widest">Plate (mm)</th>
                      <th className="px-4 py-3 text-left font-display uppercase tracking-widest">Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="text-bone">
                    {[
                      ["NM360", "330–390", "6 – 80", "Liners, light-duty wear"],
                      ["NM400", "360–440", "4 – 80", "Bucket bottoms, hopper"],
                      ["NM450", "420–480", "6 – 70", "Truck body, mid-impact"],
                      ["NM500", "470–530", "6 – 60", "Rock bucket lining, mining"],
                      ["NM550", "520–580", "6 – 40", "Crusher, screen, severe wear"],
                    ].map((r, i) => (
                      <tr key={r[0]} className={i % 2 ? "bg-ink" : "bg-carbon"}>
                        <td className="border-t border-line/40 px-4 py-3 font-display font-bold text-gold">{r[0]}</td>
                        <td className="border-t border-line/40 px-4 py-3 font-mono">{r[1]}</td>
                        <td className="border-t border-line/40 px-4 py-3 font-mono">{r[2]}</td>
                        <td className="border-t border-line/40 px-4 py-3">{r[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="hazard-thin h-1 w-full" />
      </section>

      {/* S5 — Why Choose Us */}
      <SectionDivider index="04" label="Why Choose RAYGOO" rightLabel="04 PILLARS" />
      <section className="mx-auto max-w-[1400px] px-5 pt-8">
        <div className="grid gap-0 border-2 border-line/60 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a, i) => (
            <div key={a.label} className={`relative bg-carbon p-6 ${i < 3 ? "border-r border-line/40" : ""}`}>
              <span className="absolute right-3 top-3 font-mono text-[10px] font-bold uppercase tracking-widest text-line">
                0{i + 1}
              </span>
              <a.icon size={28} className="text-gold" />
              <h3 className="mt-4 h-display text-xl text-bone">{a.label}</h3>
              <p className="mt-2 text-sm text-ash">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S6 — Applications */}
      <SectionDivider index="05" label="Applications" rightLabel="HEAVY DUTY" />
      <section className="mx-auto max-w-[1400px] px-5 pt-8">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {apps.map((a) => (
            <Reveal key={a.label}>
              <div className="group relative h-[320px] overflow-hidden border border-line/60">
                <Image src={a.img} alt={a.label} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <div className="absolute inset-0 grid-mesh opacity-25" />
                <div className="absolute bottom-4 left-4 right-4">
                  <a.icon size={22} className="text-gold" />
                  <h3 className="mt-2 h-display text-2xl text-bone">{a.label}</h3>
                </div>
                <span className="absolute right-3 top-3 border border-gold bg-ink/70 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                  USE CASE
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* S7 — Categories overview band */}
      <SectionDivider index="06" label="Browse Catalogue" rightLabel="04 LINES" />
      <section className="mx-auto max-w-[1400px] px-5 pt-8">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group relative block border-2 border-line/60 bg-carbon p-6 hover:border-gold"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                / 0{i + 1}
              </span>
              <h3 className="mt-3 h-display text-2xl text-bone">{c.name}</h3>
              <p className="mt-2 text-sm text-ash">{c.short}</p>
              <span className="mt-6 inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
                Explore <ArrowRight size={12} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* S8 — CTA hazard band */}
      <CTASection />
    </main>
  );
}

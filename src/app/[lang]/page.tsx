import { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import CategoryShowcase from "@/components/CategoryShowcase";
import CompanyIntro from "@/components/CompanyIntro";
import MarketingNetwork from "@/components/MarketingNetwork";
import FeaturedArticles from "@/components/FeaturedArticles";
import CTASection from "@/components/CTASection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Heavy Machinery Wear Parts Manufacturer | ${site.brand} Parts`,
  description: "Global manufacturer of excavator buckets, bucket teeth, NM500 wear plates, and dump truck liners. OEM & aftermarket parts. Reply within 30 minutes.",
  keywords: ["excavator bucket manufacturer", "bucket teeth supplier", "NM500 wear plates", "dump truck liners", "heavy machinery wear parts factory", "China construction machinery parts"],
};

export default function HomePage({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main>
      {/* S1 — Full-screen Hero Carousel */}
      <Hero lang={lang} />

      {/* S2 — Factory Stats Strip */}
      <StatsStrip lang={lang} />

      {/* S3 — Product Categories Showcase */}
      <CategoryShowcase lang={lang} />

      {/* S4 — Company Intro */}
      <CompanyIntro lang={lang} />

      {/* S5 — Marketing Network Map */}
      <MarketingNetwork lang={lang} />

      {/* S6 — Featured Articles (Split Layout) */}
      <FeaturedArticles lang={lang} />

      {/* S7 — CTA */}
      <CTASection lang={lang} />
    </main>
  );
}

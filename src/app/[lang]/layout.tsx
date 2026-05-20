import "../globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ThemePicker from "@/components/ThemePicker";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Excavator Buckets, Bucket Teeth, NM500 Wear Plates & Truck Liners | RAYGOO Parts",
    template: "%s | RAYGOO Parts Manufacturer",
  },
  description: site.description,
  keywords: [
    "Excavator Buckets",
    "Bucket Teeth",
    "NM500 Wear Plates",
    "Dump Truck Liners",
    "Heavy Machinery Wear Parts",
    "Excavator Attachments",
    "RAYGOO Parts",
    "Fujian Raygoo Machinery",
    "RM Machinery",
    "OEM Wear Parts",
    "Construction Machinery Parts"
  ],
  openGraph: {
    title: "RAYGOO Parts — Heavy Machinery Wear Parts Manufacturer",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <head />
      <body>
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
        <FloatingContact lang={lang} />
        <ThemePicker />
      </body>
    </html>
  );
}

export type Product = {
  slug: string;
  name: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  category: string;
  partNumber: string;
  material: string;
  hardness: string;
  specification: string;
  fitment: string[];
  benefits: string[];
  priceRange: string;
  delivery: string;
  images: string[];
  short: string;
  featured?: boolean;
};

// Lazy load the appropriate JSON based on language
export function getProducts(lang: string = 'en'): Product[] {
  let rawData;
  try {
    rawData = require(`../../scripts/scraped/data.clean.${lang}.json`);
  } catch (e) {
    rawData = require(`../../scripts/scraped/data.clean.json`);
  }

  return Object.values(rawData.products).map((p: any) => ({
    slug: p.slug,
    name: p.name,
    h1: `${p.name} | RM Machinery`,
    seoTitle: `${p.name} | Heavy Machinery Wear Parts Factory`,
    seoDescription: `${p.name} from Fujian Raygoo Machinery. OEM quality, high durability. ` + (p.description || "").substring(0, 100) + "...",
    keywords: [
      p.name,
      "excavator parts",
      "OEM wear parts",
      "heavy equipment attachments",
      "RM Machinery",
      "Fujian Raygoo Machinery"
    ],
    category: p.category,
    partNumber: p.name.split(" ").slice(-1)[0] || "Custom", // Fallback for part number
    material: "Alloy Steel / NM400 / NM500", // Standard spec
    hardness: "HRC 48-52", // Standard spec
    specification: "OEM Replacement",
    fitment: ["Caterpillar", "Komatsu", "Hitachi", "Volvo", "SANY", "Hyundai"],
    benefits: [
      "Drop-forged high-strength alloy steel",
      "Heat-treated for maximum wear resistance",
      "OEM-level fitment and dimensional accuracy",
      "Stable batch quality",
    ],
    priceRange: "Get Quote within 30 Min",
    delivery: "15-30 days",
    images: p.images, // The locally downloaded images from the scraper
    short: (p.description || "").substring(0, 80) + "...",
    featured: true,
  }));
}

export function getProduct(slug: string, lang: string = 'en') {
  return getProducts(lang).find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string, lang: string = 'en') {
  return getProducts(lang).filter((p) => p.category === categorySlug);
}

// For backward compatibility
export const products = getProducts('en');

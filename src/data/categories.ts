export type Category = {
  slug: string;
  name: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  intro: string;
  short: string;
  cover: string;
  available?: boolean;
};

// Lazy load the appropriate JSON based on language
export function getCategories(lang: string = 'en'): Category[] {
  let rawData;
  try {
    rawData = require(`../../scripts/scraped/data.clean.${lang}.json`);
  } catch (e) {
    rawData = require(`../../scripts/scraped/data.clean.json`);
  }

  return rawData.categories.map((c: any) => ({
    slug: c.slug,
    name: c.name,
    h1: `${c.name} | Manufacturer & Supplier`,
    seoTitle: `${c.name} | OEM Factory | RM Machinery`,
    seoDescription: `Wholesale high-quality ${c.name} for heavy machinery. OEM replacement and custom wear parts from RM Machinery (Fujian Raygoo). Quick quote in 30 mins.`,
    keywords: [
      c.name,
      `${c.name} manufacturer`,
      `${c.name} supplier`,
      `${c.name} factory`,
      "heavy machinery parts",
      "excavator attachments",
      "RM Machinery",
      "Fujian Raygoo Machinery"
    ],
    intro: `Explore our wide range of ${c.name}. We offer OEM replacement and custom wear parts for global earthmoving applications.`,
    short: `${c.name} - ${c.productSlugs.length} products`,
    cover: c.image,
    available: true,
  }));
}

export function getCategory(slug: string, lang: string = 'en') {
  return getCategories(lang).find((c) => c.slug === slug);
}

// For backward compatibility during migration
export const categories = getCategories('en');

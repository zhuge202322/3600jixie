const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const LANGUAGES = ['vi', 'th', 'id', 'bn', 'fa', 'ar', 'tr', 'pl'];

const baseDict = {
  home: "Home",
  products: "Products",
  new: "New",
  aboutUs: "About Us",
  contactUs: "Contact Us",
  requestQuote: "Request Quote →",
  sendInquiry: "Send Inquiry →",
  sending: "Sending...",
  companyNews: "Company News",
  readArticle: "Read Article →",
  productCategories: "Product Categories",
  viewAllCategories: "View All Categories",
  language: "Language",
  partNumber: "Part Number",
  material: "Material",
  hardness: "Hardness",
  delivery: "Delivery",
  // Company Intro
  companyTitle: "Fujian Raygoo Machinery Co., Ltd.",
  companyDesc1: "Established in 2002, we are a premier manufacturer of heavy machinery wear parts. With over two decades of expertise, we specialize in excavator buckets, drop-forged teeth, and NM-series wear plates.",
  companyDesc2: "Serving 68 countries globally, our 20,000 m² facility ensures stable quality, fast delivery, and OEM-level engineering for all your earthmoving needs.",
  learnMore: "LEARN MORE ABOUT US →",
  statsCountries: "COUNTRIES SERVED",
  statsExperience: "YEARS EXPERIENCE",
  statsArea: "SQUARE METERS",
  statsCert: "CERTIFIED",
  // CTA
  ctaTitle: "READY TO UPGRADE YOUR WEAR PARTS?",
  ctaDesc: "Send us your part number, machine model, or custom drawing. Our engineering team will provide a competitive quote and production timeline within 30 minutes.",
  callUs: "Call or WhatsApp",
  emailUs: "Email Us Directly",
  hq: "Factory Headquarters",
  inquiryForm: "INQUIRY FORM",
  minReply: "30 MIN REPLY",
  name: "Name *",
  company: "Company",
  email: "Email *",
  phone: "Phone / WhatsApp",
  partModel: "Part Number / Model / Material",
  message: "Message *",
  // Product Detail
  productDetails: "PRODUCT DETAILS",
  keyAdvantages: "Key Advantages",
  advantage1: "Drop-forged high-strength alloy steel",
  advantage2: "Heat-treated for maximum wear resistance",
  advantage3: "OEM-level fitment and dimensional accuracy",
  advantage4: "Stable batch quality",
  specification: "Specification",
  fitment: "Fitment",
  priceRange: "Price Range",
  descPrefix: "from Fujian Raygoo Machinery. OEM quality, high durability.",
  descSuffix: "are engineered to deliver maximum performance and wear life in the most demanding earthmoving applications. Manufactured in our ISO-certified facility, every part undergoes strict quality control and heat treatment processes.",
  getQuote: "Get Quote within 30 Min",
  days: "15-30 days",
  oemReplacement: "OEM Replacement",
  standardSpec: "Alloy Steel / NM400 / NM500",
  standardHardness: "HRC 48-52",
  showingLines: "Showing",
  productLines: "Product Lines",
  // newly added
  latestUpdates: "Latest Updates",
  companyNewsLabel: "COMPANY NEWS",
  latestUpdatesDesc: "Stay informed with the latest news, product releases, and technical insights from Raygoo Machinery."
};

async function run() {
  const keys = Object.keys(baseDict);
  const values = Object.values(baseDict);
  
  let finalDict = `const dictionaries: Record<string, Record<string, string>> = {\n  en: {\n`;
  keys.forEach((key, i) => {
    finalDict += `    ${key}: ${JSON.stringify(values[i])},\n`;
  });
  finalDict += `  },\n`;

  for (const lang of LANGUAGES) {
    console.log(`\nTranslating UI to ${lang}...`);
    try {
      const res = await translate(values, { to: lang });
      const translatedTexts = res.map(r => r.text);
      
      finalDict += `  ${lang}: {\n`;
      keys.forEach((key, index) => {
        finalDict += `    ${key}: ${JSON.stringify(translatedTexts[index])},\n`;
      });
      finalDict += `  },\n`;
    } catch (err) {
      console.error(`Failed for ${lang}:`, err.message);
    }
  }

  finalDict += `};

export function getDictionary(lang: string) {
  return dictionaries[lang] || dictionaries['en'];
}
`;

  fs.writeFileSync(path.join(__dirname, '../src/i18n/dictionaries.ts'), finalDict, 'utf-8');
  console.log("Updated dictionaries.ts successfully!");
}

run().catch(console.error);

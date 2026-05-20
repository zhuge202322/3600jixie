const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const LANGUAGES = ['vi', 'th', 'id', 'bn', 'fa', 'ar', 'tr'];

const baseDict = {
  companyTitle: "Fujian Raygoo Machinery Co., Ltd.",
  companyDesc1: "Established in 2002, we are a premier manufacturer of heavy machinery wear parts. With over two decades of expertise, we specialize in excavator buckets, drop-forged teeth, and NM-series wear plates.",
  companyDesc2: "Serving 68 countries globally, our 20,000 m² facility ensures stable quality, fast delivery, and OEM-level engineering for all your earthmoving needs.",
  learnMore: "LEARN MORE ABOUT US →",
  statsCountries: "COUNTRIES SERVED",
  statsExperience: "YEARS EXPERIENCE",
  statsArea: "SQUARE METERS",
  statsCert: "CERTIFIED",
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
  productLines: "Product Lines"
};

async function run() {
  const keys = Object.keys(baseDict);
  const values = Object.values(baseDict);

  for (const lang of LANGUAGES) {
    console.log(`\nTranslating UI to ${lang}...`);
    try {
      const res = await translate(values, { to: lang });
      const translatedTexts = res.map(r => r.text);
      
      let out = "";
      keys.forEach((key, index) => {
        out += `    ${key}: "${translatedTexts[index].replace(/"/g, '\\"')}",\n`;
      });
      
      console.log(`\n--- ${lang} ---\n${out}`);
    } catch (err) {
      console.error(`Failed for ${lang}:`, err.message);
    }
  }
}

run().catch(console.error);

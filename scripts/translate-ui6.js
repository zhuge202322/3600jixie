const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const LANGUAGES = ['vi', 'th', 'id', 'bn', 'fa', 'ar', 'tr', 'pl'];

const extraKeys = {
  // About Page
  companyGroup: "COMPANY · GROUP",
  aboutPrefix: "About",
  parentGroupInfo: "Parent group · rmloader.com (machinery main site)",
  foundedLabel: "Founded",
  productionBaseLabel: "Production Base",
  annualCapacityLabel: "Annual Capacity",
  ourHistory: "Our History",
  estLabel: "EST. 2002",
  historyPara1: "was built in 2002, headquartered in Zhangzhou, Fujian Province. The group includes subsidiaries such as Fujian Kunpeng Heavy Industry Co., Ltd. (the sole distributor of XCMG wheel loaders in Fujian), Fujian Zhongte Supply Chain Co., Ltd. and Zhangzhou Zhuosheng Machinery Co., Ltd., with production bases in",
  historyPara2: "Since foundation, RAYGOO has always kept its professional role in the wheel loader and construction-machinery industry. As of 2024, our products and services have successfully penetrated",
  historyPara2_2: "countries and regions, offering reliable solutions to diverse industrial needs worldwide.",
  historyPara3: "Since 2018, as the market has grown and clients' requirements have strengthened, we have enlarged our business scope into the second-hand machine sector — used machines with or without refurbishment, re-manufactured and well-maintained by a 25-engineer team. To date this division has served clients from over 30 countries.",
  historyPara4: "Our wheel-loader production base owns a",
  historyPara4_2: "facility with an annual production capacity of",
  historyPara4_3: "units. With four assembly lines and a vehicles-supply & technical-support partnership with TOP brands such as XCMG, SDLG, SHANTUI, LIUGONG, DOOSAN, HITACHI, ISUZU, CAT, KOMATSU and VOLVO, we deliver within 15–35 days after deposit.",
  historyPara5: "is the wear-parts division of the same group. All company contacts, addresses and quality systems are shared with the main site",
  groupSubsidiaries: "Group Subsidiaries",
  productionBasesLabel: "Production Bases",
  productApplication: "Product Application",
  sectorsLabel: "11 SECTORS",
  brandPartners: "Brand Partners",
  vehicleTechSupport: "VEHICLE & TECH SUPPORT",
  qualityCertificates: "Quality & Certificates",
  certLabel: "ISO · CE · EPA",
  certPara1: "Strict quality control has always been our pursuit. RAYGOO holds ISO9001, TS16949, ISO14000 and ISO45001 management-system certificates. For the European market we provide CE, EU and EPA certificates as required.",
  certPara2: "The same quality systems and inspection workflow are applied to every wear-part shipment from this division — material certificates (EN 10204 3.1), hardness reports and dimensional inspection are provided on request.",
  certPara3: "Exporting to",
  certPara3_2: "countries across Southeast Asia, Middle East, South America, Africa, Europe and Oceania.",
  
  // Application fields
  appEarthworks: "Earthworks",
  appMining: "Mining Construction",
  appRoad: "Road Construction & Maintenance",
  appTunnel: "Tunnel & Underground",
  appLogistics: "Logistics & Transportation",
  appHousing: "Housing Construction",
  appConcrete: "Concrete Industry",
  appPilling: "Pilling & Non-excavation",
  appHighAltitude: "High-altitude Operation",
  appSanitation: "Sanitation Services",
  appPort: "Port Operation",

  // CTA Section
  getInTouch: "GET IN TOUCH",
  inquirySent: "Inquiry sent successfully! We will reply within 30 minutes.",
  
  // Products Page
  productCatalog: "PRODUCT CATALOG",
  heavyMachinery: "HEAVY MACHINERY",
  wearParts: "WEAR PARTS",
  catalogDesc: "Engineered for maximum durability in mining, quarrying, and earthmoving applications. From custom excavator buckets to drop-forged G.E.T. and high-hardness wear plates.",
  oemLevelQuality: "OEM-Level Quality",
  customEngineering: "Custom Engineering",
  globalDelivery: "Global Delivery",
  browseAllCategories: "BROWSE ALL CATEGORIES",
  productLinesCount: "Product Lines"
};

async function run() {
  const dictPath = path.join(__dirname, '../src/i18n/dictionaries.ts');
  let content = fs.readFileSync(dictPath, 'utf-8');

  // Add to English
  for (const [k, v] of Object.entries(extraKeys)) {
    content = content.replace(/  en: \{/, `  en: {\n    ${k}: ${JSON.stringify(v)},`);
  }

  // Translate and add to other languages
  for (const lang of LANGUAGES) {
    console.log(`Translating for ${lang}...`);
    const values = Object.values(extraKeys);
    try {
      const res = await translate(values, { to: lang });
      const translatedTexts = res.map(r => r.text);
      
      let additions = "";
      Object.keys(extraKeys).forEach((key, index) => {
        additions += `    ${key}: ${JSON.stringify(translatedTexts[index])},\n`;
      });
      
      const regex = new RegExp(`  ${lang}: \\{`);
      content = content.replace(regex, `  ${lang}: {\n${additions}`);
    } catch (err) {
      console.error(err);
    }
  }

  fs.writeFileSync(dictPath, content, 'utf-8');
  console.log("Updated dictionaries.ts with extra keys!");
}

run().catch(console.error);
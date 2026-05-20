// All company information mirrors the parent site www.rmloader.com
// (Fujian Raygoo Machinery Co., Ltd.) — the parts division uses the same contacts.
export const site = {
  name: "RAYGOO Parts",
  brand: "RAYGOO",
  brandCN: "锐工机械",
  company: "Fujian Raygoo Machinery Co., Ltd.",
  founded: 2002,
  // Primary contacts
  email: "info@rmloader.com",
  emailAlt: "sales@rmloader.com",
  tel: "+86 13695940108",
  telLink: "tel:+8613695940108",
  fax: "+86-0596-2183056",
  whatsapp: "+86 13695940108",
  whatsappLink: "https://wa.me/8613695940108",
  wechat: "raygoo",
  address:
    "NO. 1903, WANDA PLAZA 8 BUILDING, LONGWEN AREA, ZHANGZHOU, FUJIAN PROVINCE, CHINA",
  // Sites
  url: "https://www.rmloader.com",
  parentSite: "https://www.rmloader.com",
  parentSiteLabel: "www.rmloader.com",
  // Group facts
  countries: 68,
  factoryArea: "20,000 m²",
  annualCapacity: "9,500+ units / year",
  productionBases: ["Fujian", "Xuzhou", "Shandong", "Anhui", "Tianjin"],
  subsidiaries: [
    "Fujian Kunpeng Heavy Industry Co., Ltd. (Sole XCMG wheel-loader distributor in Fujian)",
    "Fujian Zhongte Supply Chain Co., Ltd.",
    "Zhangzhou Zhuosheng Machinery Co., Ltd.",
  ],
  certificates: ["ISO9001", "TS16949", "ISO14000", "ISO45001", "CE", "EU", "EPA"],
  brandPartners: [
    "XCMG", "SDLG", "SHANTUI", "LIUGONG",
    "DOOSAN", "HITACHI", "ISUZU", "CAT",
    "KOMATSU", "VOLVO",
  ],
  // Parts-site marketing copy
  description:
    "Excavator Buckets, Bucket Teeth, NM500 Wear Plates and Dump Truck Liners — OEM & Aftermarket heavy machinery wear parts from Fujian Raygoo Machinery Co., Ltd. Reply within 30 minutes.",
  replyPromise:
    "Send your part number or model – get reply within 30 minutes",
  tagline: "68 countries strategic business partners",
  taglineSub: "Go hand in hand and achieve win-win cooperation.",
};

// Top-level navigation. The `Products` item carries a dropdown with
// the parts categories – populated at render time from `categories.ts`.
export const nav: { label: string; href: string; type?: "products" }[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", type: "products" },
  { label: "New", href: "/new" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];
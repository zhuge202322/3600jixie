export type Product = {
  slug: string;
  name: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  category:
    | "excavator-buckets"
    | "bucket-teeth"
    | "nm500-wear-plates"
    | "dump-truck-liners";
  partNumber: string;
  material?: string;
  hardness?: string;
  specification?: string;
  fitment: string[];
  benefits: string[];
  priceRange: string;
  delivery: string;
  images: string[];
  short: string;
  featured?: boolean;
};

const img = (q: string, i = 1) =>
  `https://picsum.photos/seed/${encodeURIComponent(q)}-${i}/1200/900`;

export const products: Product[] = [
  // ── Excavator Buckets ───────────────────────────────────────────
  {
    slug: "rock-excavator-bucket",
    name: "Rock Excavator Bucket",
    h1: "Rock Excavator Bucket | Heavy Duty",
    seoTitle: "Rock Excavator Bucket | Heavy Duty Mining Bucket Manufacturer",
    seoDescription:
      "Rock excavator bucket with NM500 lining, side cutters and reinforced lip. 0.8–6 m³ for 20–80 ton excavators. OEM custom build.",
    category: "excavator-buckets",
    partNumber: "RG-EXC-RK",
    material: "Q345B shell + NM500 lining",
    hardness: "Lining HBW 500",
    specification: "0.8–6.0 m³",
    fitment: [
      "CAT 320 / 330 / 349 / 374",
      "Komatsu PC200 / PC300 / PC400",
      "Hitachi ZX240 / ZX350 / ZX470",
      "Volvo EC210 / EC380",
      "SANY SY215 / SY365",
    ],
    benefits: [
      "NM500 wear lining doubles service life",
      "Reinforced lip + side cutters",
      "Custom pin centres and ear width",
      "Drop-forged adapters welded to spec",
    ],
    priceRange: "$1,200–$6,800 / pc",
    delivery: "20–35 days",
    images: [img("rock-bucket", 1), img("rock-bucket", 2), img("rock-bucket", 3)],
    short: "Mining-grade rock bucket with NM500 lining.",
    featured: true,
  },
  {
    slug: "gp-excavator-bucket",
    name: "GP Excavator Bucket",
    h1: "General Purpose Excavator Bucket",
    seoTitle: "General Purpose Excavator Bucket | GP Bucket Supplier",
    seoDescription:
      "General purpose excavator bucket for sand, soil and gravel. Q345B shell, drop-forged teeth, 0.5–4 m³.",
    category: "excavator-buckets",
    partNumber: "RG-EXC-GP",
    material: "Q345B + HARDOX 400 wear strips",
    hardness: "Strips HBW 400",
    specification: "0.5–4.0 m³",
    fitment: [
      "CAT 312 / 320 / 330",
      "Komatsu PC130 / PC200 / PC300",
      "Hitachi ZX120 / ZX240",
      "SANY SY155 / SY215",
      "XCMG XE215 / XE335",
    ],
    benefits: [
      "Optimised lip angle for fast filling",
      "Drop-forged teeth and adapters",
      "Wear strips on bottom and side",
      "Available with or without teeth",
    ],
    priceRange: "$680–$3,200 / pc",
    delivery: "15–30 days",
    images: [img("gp-bucket", 1), img("gp-bucket", 2), img("gp-bucket", 3)],
    short: "All-purpose bucket for sand, soil and gravel.",
    featured: true,
  },
  {
    slug: "heavy-duty-excavator-bucket",
    name: "Heavy Duty Excavator Bucket",
    h1: "Heavy Duty Excavator Bucket (HD)",
    seoTitle: "Heavy Duty Excavator Bucket | HD Bucket Manufacturer",
    seoDescription:
      "Heavy-duty HD excavator bucket with reinforced wear package, side protectors and bolt-on cutting edge. 0.6–5 m³.",
    category: "excavator-buckets",
    partNumber: "RG-EXC-HD",
    material: "Q345B shell + NM450 lining",
    hardness: "Lining HBW 450",
    specification: "0.6–5.0 m³",
    fitment: [
      "CAT 320 / 336 / 349",
      "Komatsu PC200 / PC360",
      "Hitachi ZX350 / ZX470",
      "Volvo EC300 / EC480",
    ],
    benefits: [
      "Side wear protectors",
      "Bolt-on cutting edge for fast change",
      "Heel shroud + bottom shrouds",
      "Custom hitch / pin centres",
    ],
    priceRange: "$950–$4,500 / pc",
    delivery: "18–30 days",
    images: [img("hd-bucket", 1), img("hd-bucket", 2), img("hd-bucket", 3)],
    short: "Reinforced HD bucket for hard digging.",
  },

  // ── Bucket Teeth ────────────────────────────────────────────────
  {
    slug: "j200-bucket-teeth",
    name: "J200 Bucket Teeth",
    h1: "J200 Bucket Teeth | Loader Tooth",
    seoTitle: "J200 Bucket Teeth | Wheel Loader OEM Replacement",
    seoDescription:
      "J200 bucket teeth, drop-forged alloy steel, HRC 48–52. Fits CAT 950, SDLG, XCMG, LiuGong loaders. $5–$12 / pc.",
    category: "bucket-teeth",
    partNumber: "J200",
    material: "Alloy Steel (35CrMnSi / 40MnB)",
    hardness: "HRC 48–52",
    fitment: ["CAT 950", "Komatsu WA320", "SDLG LG953", "XCMG ZL50", "LiuGong 855"],
    benefits: [
      "Drop-forged for fibre integrity",
      "Quench + temper heat treatment",
      "Stable batch hardness",
      "Locking pin included",
    ],
    priceRange: "$5–$12 / pc",
    delivery: "7–15 days",
    images: [img("j200", 1), img("j200", 2), img("j200", 3)],
    short: "J200 loader tooth, drop-forged.",
    featured: true,
  },
  {
    slug: "j300-bucket-teeth",
    name: "J300 Bucket Teeth",
    h1: "J300 Bucket Teeth | Loader Tooth",
    seoTitle: "J300 Bucket Teeth Supplier | Wheel Loader",
    seoDescription:
      "J300 bucket teeth for 5-ton loaders, alloy steel HRC 48–52. $8–$18 / pc. Reply within 30 minutes.",
    category: "bucket-teeth",
    partNumber: "J300",
    material: "Alloy Steel",
    hardness: "HRC 48–52",
    fitment: ["CAT 966", "Komatsu WA380", "Volvo L120", "SDLG LG958"],
    benefits: [
      "Higher impact toughness",
      "Reinforced shank",
      "Drop-forged",
      "OEM equivalent",
    ],
    priceRange: "$8–$18 / pc",
    delivery: "7–15 days",
    images: [img("j300", 1), img("j300", 2), img("j300", 3)],
    short: "J300 loader tooth for 5-ton class.",
    featured: true,
  },
  {
    slug: "j450-bucket-teeth",
    name: "J450 Bucket Teeth",
    h1: "J450 Bucket Teeth | Heavy Duty Loader",
    seoTitle: "J450 Bucket Teeth for Heavy Duty Loaders",
    seoDescription:
      "J450 heavy-duty bucket teeth for 6–8 ton loaders. Alloy steel HRC 50–54. $15–$28 / pc.",
    category: "bucket-teeth",
    partNumber: "J450",
    material: "Alloy Steel",
    hardness: "HRC 50–54",
    fitment: ["CAT 980", "Komatsu WA470", "Volvo L150", "SDLG LG968"],
    benefits: [
      "Heavy-duty wear resistance",
      "Reinforced shank",
      "Long life in mining and quarry",
      "Drop-forged",
    ],
    priceRange: "$15–$28 / pc",
    delivery: "10–20 days",
    images: [img("j450", 1), img("j450", 2), img("j450", 3)],
    short: "J450 heavy-duty loader tooth.",
  },
  {
    slug: "pc200-bucket-teeth",
    name: "PC200 Excavator Teeth",
    h1: "PC200 Excavator Bucket Teeth",
    seoTitle: "PC200 Excavator Bucket Teeth | Komatsu Replacement",
    seoDescription:
      "PC200 excavator bucket teeth, OEM 205-70-19570 / 209-70-54210. Drop-forged, HRC 50–54. $6–$14 / pc.",
    category: "bucket-teeth",
    partNumber: "205-70-19570",
    material: "Alloy Steel",
    hardness: "HRC 50–54",
    fitment: ["Komatsu PC200", "PC220", "PC240", "PC270"],
    benefits: [
      "OEM cross-reference",
      "Drop-forged + heat treated",
      "Tip + adapter + pin combo available",
      "Stable batch hardness",
    ],
    priceRange: "$6–$14 / pc",
    delivery: "7–15 days",
    images: [img("pc200", 1), img("pc200", 2), img("pc200", 3)],
    short: "Komatsu PC200 series excavator tooth.",
    featured: true,
  },
  {
    slug: "e330-bucket-teeth",
    name: "E330 Excavator Teeth (CAT)",
    h1: "CAT E330 / J400 Excavator Bucket Teeth",
    seoTitle: "CAT E330 / J400 Excavator Bucket Teeth Supplier",
    seoDescription:
      "CAT E330 / J400 excavator bucket teeth, OEM 1U3352 / 1U3452 type. Alloy steel HRC 50–54. Reply within 30 minutes.",
    category: "bucket-teeth",
    partNumber: "1U3352 / J400",
    material: "Alloy Steel",
    hardness: "HRC 50–54",
    fitment: ["CAT E330", "E336", "E349", "E365"],
    benefits: [
      "Cross-references CAT 1U3352 series",
      "Tip + adapter + pin available",
      "Drop-forged + quenched",
      "Long service life",
    ],
    priceRange: "$12–$32 / pc",
    delivery: "7–15 days",
    images: [img("e330", 1), img("e330", 2), img("e330", 3)],
    short: "CAT E330 J400 excavator tooth.",
  },

  // ── NM500 Wear Plates ───────────────────────────────────────────
  {
    slug: "nm500-wear-plate",
    name: "NM500 Wear Plate",
    h1: "NM500 Wear-Resistant Steel Plate",
    seoTitle: "NM500 Wear Plate Supplier | HBW 500 Steel Sheet",
    seoDescription:
      "NM500 wear-resistant steel plate, HBW 470–530, thickness 6–60 mm, width up to 2200 mm. Cut to size, mill certificate.",
    category: "nm500-wear-plates",
    partNumber: "NM500",
    material: "Quenched + tempered low-alloy steel",
    hardness: "HBW 470–530",
    specification: "Thickness 6–60 mm, width ≤ 2200 mm",
    fitment: [
      "Excavator buckets",
      "Dump truck body liners",
      "Crusher liners",
      "Chutes & screens",
    ],
    benefits: [
      "3× life vs Q345B",
      "Mill test certificate (EN 10204 3.1)",
      "Laser / plasma / waterjet cut to size",
      "Cold-formable to R = 4×t",
    ],
    priceRange: "$0.95–$1.85 / kg",
    delivery: "7–20 days",
    images: [img("nm500", 1), img("nm500", 2), img("nm500", 3)],
    short: "HBW 500 wear plate, 6–60 mm.",
    featured: true,
  },
  {
    slug: "nm400-wear-plate",
    name: "NM400 Wear Plate",
    h1: "NM400 Wear-Resistant Steel Plate",
    seoTitle: "NM400 Wear Plate Supplier | HBW 400 Steel Sheet",
    seoDescription:
      "NM400 wear-resistant steel plate, HBW 360–440, weldable and formable. Plate 4–80 mm. Mill certificate.",
    category: "nm500-wear-plates",
    partNumber: "NM400",
    material: "Low-alloy quenched steel",
    hardness: "HBW 360–440",
    specification: "Thickness 4–80 mm",
    fitment: [
      "Bucket bottoms",
      "Truck body liners",
      "Conveyor liners",
      "Hopper walls",
    ],
    benefits: [
      "Excellent weldability",
      "Cold-formable to R = 3×t",
      "Tight thickness tolerance",
      "Stock for fast delivery",
    ],
    priceRange: "$0.78–$1.45 / kg",
    delivery: "7–15 days",
    images: [img("nm400", 1), img("nm400", 2), img("nm400", 3)],
    short: "HBW 400 wear plate, weldable.",
  },
  {
    slug: "chromium-carbide-overlay-plate",
    name: "Chromium Carbide Overlay Plate",
    h1: "Chromium Carbide Overlay (CCO) Wear Plate",
    seoTitle: "Chromium Carbide Overlay Plate | CCO Wear Plate Supplier",
    seoDescription:
      "Chromium carbide overlay (CCO) wear plate, HRC 58–65, base + overlay 6+4 to 20+20 mm. Cut, drill, bend.",
    category: "nm500-wear-plates",
    partNumber: "CCO-RG",
    material: "Q235 base + CrC overlay",
    hardness: "Overlay HRC 58–65",
    specification: "Base + overlay 6+4 ~ 20+20 mm",
    fitment: ["Coal chutes", "Cement mills", "Sinter plant liners", "Mining liners"],
    benefits: [
      "10× life vs mild steel in abrasive flow",
      "Bolt holes / countersunk available",
      "Bend radius down to 800 mm",
      "Custom cut shapes",
    ],
    priceRange: "$2.20–$4.80 / kg",
    delivery: "15–25 days",
    images: [img("cco", 1), img("cco", 2), img("cco", 3)],
    short: "CrC overlay plate for high-abrasion flow.",
  },

  // ── Dump Truck Liners ───────────────────────────────────────────
  {
    slug: "dump-truck-body-liner",
    name: "Dump Truck Body Liner",
    h1: "Dump Truck Body Liner | NM500 Bolt-On Liner",
    seoTitle: "Dump Truck Body Liner Supplier | NM500 / Hardox",
    seoDescription:
      "Bolt-on dump truck body liner in NM500 / NM450, fits CAT 770/777, Komatsu HD465/785, Volvo A40, BELAZ.",
    category: "dump-truck-liners",
    partNumber: "RG-DT-BODY",
    material: "NM500 / NM450",
    hardness: "HBW 450–500",
    specification: "Thickness 12–30 mm",
    fitment: ["CAT 770 / 777 / 789", "Komatsu HD465 / HD785", "Volvo A40 / A60", "BELAZ 7530"],
    benefits: [
      "Bolt-on, no welding required",
      "CAD-cut to OEM body shape",
      "Replaces panel-by-panel",
      "Recessed bolt heads",
    ],
    priceRange: "$1,800–$8,500 / set",
    delivery: "25–40 days",
    images: [img("dt-body", 1), img("dt-body", 2), img("dt-body", 3)],
    short: "Bolt-on NM500 body liner set.",
    featured: true,
  },
  {
    slug: "dump-truck-tailgate-liner",
    name: "Dump Truck Tailgate Liner",
    h1: "Dump Truck Tailgate Liner",
    seoTitle: "Dump Truck Tailgate Liner | NM500 Wear Liner",
    seoDescription:
      "Tailgate liner panels in NM500, drilled and cut to OEM tailgate. Bolt-on for fast field replacement.",
    category: "dump-truck-liners",
    partNumber: "RG-DT-TAIL",
    material: "NM500",
    hardness: "HBW 470–530",
    specification: "Thickness 16–25 mm",
    fitment: ["CAT 770 / 777", "Komatsu HD465 / HD785", "Volvo A40", "Scania / MAN bodies"],
    benefits: [
      "High-impact resistance",
      "Pre-drilled bolt pattern",
      "Edge bevelled for tight fit",
      "Drop-in field replacement",
    ],
    priceRange: "$420–$1,800 / pc",
    delivery: "20–30 days",
    images: [img("dt-tail", 1), img("dt-tail", 2), img("dt-tail", 3)],
    short: "NM500 tailgate liner, bolt-on.",
  },
  {
    slug: "dump-truck-floor-liner",
    name: "Dump Truck Floor Liner",
    h1: "Dump Truck Floor Liner | NM500",
    seoTitle: "Dump Truck Floor Liner Supplier | NM500 Bottom Plate",
    seoDescription:
      "Dump truck floor / bottom liner in NM500, takes the highest impact load during loading. CAD cut to OEM shape.",
    category: "dump-truck-liners",
    partNumber: "RG-DT-FLOOR",
    material: "NM500",
    hardness: "HBW 470–530",
    specification: "Thickness 20–30 mm",
    fitment: ["CAT 770 / 777 / 789", "Komatsu HD465 / HD785", "BELAZ 7530"],
    benefits: [
      "Takes loading impact",
      "Wear-life 3–5× mild steel",
      "Plug-welded or bolt-on",
      "Pre-formed if needed",
    ],
    priceRange: "$1,200–$5,500 / set",
    delivery: "25–35 days",
    images: [img("dt-floor", 1), img("dt-floor", 2), img("dt-floor", 3)],
    short: "NM500 floor liner, takes loading impact.",
    featured: true,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(cat: Product["category"]) {
  return products.filter((p) => p.category === cat);
}

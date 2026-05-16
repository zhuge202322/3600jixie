export type Category = {
  slug: "excavator-buckets" | "bucket-teeth" | "nm500-wear-plates" | "dump-truck-liners";
  name: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  short: string;
  cover: string;
};

const cover = (q: string) => `https://picsum.photos/seed/${encodeURIComponent(q)}/1600/1000`;

export const categories: Category[] = [
  {
    slug: "excavator-buckets",
    name: "Excavator Buckets",
    h1: "Excavator Bucket Manufacturer | GP / HD / Rock Buckets",
    seoTitle: "Excavator Bucket Manufacturer | GP / HD / Rock Buckets",
    seoDescription:
      "Excavator buckets for CAT, Komatsu, Hitachi, Volvo, SANY — GP, heavy-duty and rock buckets in Q345B + NM400/NM500 wear lining. Reply within 30 minutes.",
    intro:
      "Custom excavator buckets — General Purpose, Heavy Duty and Rock buckets. Q345B structural shell with NM400/NM500 wear-resistant lining. Sizes 0.5–6 m³ for 5–80 ton excavators.",
    short: "GP / HD / Rock buckets, 0.5–6 m³",
    cover: cover("excavator-bucket-cat"),
  },
  {
    slug: "bucket-teeth",
    name: "Bucket Teeth",
    h1: "Bucket Teeth & Adapters | Excavator and Loader",
    seoTitle: "Bucket Teeth Supplier | Excavator & Loader OEM Replacement",
    seoDescription:
      "Bucket teeth & adapters for excavators and wheel loaders — J200/J300/J450, PC200, E330, K-series. Drop-forged alloy steel, HRC 48–54.",
    intro:
      "Drop-forged bucket teeth and adapters for excavators and wheel loaders. Full coverage from J-series, PC, E, K and OEM types. Stable batch hardness HRC 48–54.",
    short: "Excavator & loader teeth, drop-forged",
    cover: cover("bucket-teeth-set"),
  },
  {
    slug: "nm500-wear-plates",
    name: "NM500 Wear Plates",
    h1: "NM500 / NM400 Wear-Resistant Steel Plate Supplier",
    seoTitle: "NM500 Wear Plate Supplier | NM400 / NM500 / NM550 Steel",
    seoDescription:
      "NM400, NM500, NM550 wear-resistant steel plates for buckets, dump truck liners and chutes. Hardness HBW 400–550, plate 6–60mm. Cut to size.",
    intro:
      "Wear-resistant steel plates — NM360, NM400, NM450, NM500, NM550. Brinell 400–550 HBW. Plate, strip, laser-cut and bent parts. Used in buckets, liners, chutes and screens.",
    short: "NM400 / NM500 / NM550 plates",
    cover: cover("nm500-plate"),
  },
  {
    slug: "dump-truck-liners",
    name: "Dump Truck Liners",
    h1: "Dump Truck Body Liners | NM500 Wear Liner Supplier",
    seoTitle: "Dump Truck Body Liner Supplier | NM500 / Hardox Liner",
    seoDescription:
      "Dump truck body liners in NM500 / NM450, fitting CAT 770/777, Komatsu HD465/785, Volvo A40, BELAZ. Bolt-on or weld-on. Reply within 30 minutes.",
    intro:
      "Bolt-on and weld-on dump truck body, tailgate and floor liners in NM450/NM500/NM550. Custom CAD-cut to fit CAT, Komatsu, Volvo, BELAZ rigid and articulated trucks.",
    short: "Body / tailgate / floor liners",
    cover: cover("dump-truck-liner"),
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

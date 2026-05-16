export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string;
  excerpt: string;
  cover: string;
  content: string[]; // paragraphs (markdown-ish, plain p tags)
};

const img = (q: string) => `https://picsum.photos/seed/${encodeURIComponent(q)}/1200/700`;

export const posts: Post[] = [
  {
    slug: "how-to-choose-bucket-teeth",
    title: "How to Choose Bucket Teeth for Wheel Loader",
    seoTitle: "How to Choose Bucket Teeth for Wheel Loader",
    seoDescription:
      "A practical guide on how to choose bucket teeth for wheel loader by size, material and working condition.",
    date: "2025-09-10",
    excerpt:
      "Choosing the right bucket teeth depends on your loader size, ground material, and working hours. Here is the practical checklist.",
    cover: img("blog-choose"),
    content: [
      "Choosing the right bucket teeth depends on three factors: loader size (J200/J300/J450), the material you dig (sand, gravel, rock), and expected working hours.",
      "For compact loaders working on sand and dirt, J200 is enough. For mid-size loaders in gravel and mixed sites, J300 is the most popular choice. For heavy duty mining and rock work, J450 with reinforced shank is preferred.",
      "Always check the part number first. Material should be alloy steel with HRC 48–54. Lower hardness wears too fast; higher hardness becomes brittle.",
      "Send us your part number — we will reply within 30 minutes with price and delivery.",
    ],
  },
  {
    slug: "j200-vs-j300",
    title: "J200 vs J300 Bucket Teeth: Key Differences",
    seoTitle: "J200 vs J300 Bucket Teeth: Key Differences",
    seoDescription:
      "J200 vs J300 bucket teeth: size, weight, hardness, fitment and price comparison.",
    date: "2025-09-15",
    excerpt:
      "J200 and J300 are the two most common loader teeth. Here is a side-by-side comparison.",
    cover: img("blog-j200vs"),
    content: [
      "J200 is designed for compact and small wheel loaders, weighing around 2.5 kg per piece. J300 is larger, around 4.5 kg, used on 3–5 ton loaders.",
      "Both use alloy steel with HRC 48–52, but J300 has a thicker shank for higher impact loads.",
      "Price: J200 $5–$12/pc, J300 $8–$18/pc.",
      "Pick J200 for light digging, J300 for general construction. Need help matching your loader? Send the part number — reply within 30 minutes.",
    ],
  },
  {
    slug: "replace-bucket-teeth",
    title: "When Should You Replace Bucket Teeth",
    seoTitle: "When Should You Replace Bucket Teeth",
    seoDescription:
      "Signs that bucket teeth need replacement: wear length, cracks, productivity loss.",
    date: "2025-09-20",
    excerpt:
      "Worn teeth slow you down and damage the bucket. Replace them when wear exceeds 50% of original length.",
    cover: img("blog-replace"),
    content: [
      "Inspect bucket teeth every 200 working hours. Replace when wear exceeds 50% of original length or visible cracks appear at the shank.",
      "Worn teeth increase fuel consumption and reduce productivity by up to 25%.",
      "Always replace teeth as a complete set to keep balanced cutting force.",
      "Need quick supply? Send the part number — reply within 30 minutes.",
    ],
  },
  {
    slug: "nm400-vs-nm500",
    title: "NM400 vs NM500 Wear Plate: How to Choose",
    seoTitle: "NM400 vs NM500 Wear Plate: How to Choose",
    seoDescription:
      "NM400 vs NM500 wear-resistant steel — hardness, weldability, formability, cost and use case comparison.",
    date: "2025-09-25",
    excerpt:
      "NM400 is easier to weld and bend, NM500 lasts longer in heavy abrasion. Pick by impact load and forming need.",
    cover: img("blog-nm-grades"),
    content: [
      "NM400 has Brinell hardness around HBW 360–440 and is the most weldable and formable wear-grade steel. It's used for bucket bottoms, hopper walls and conveyor liners with moderate impact.",
      "NM500 has HBW 470–530 and gives roughly 1.5–2× the abrasion life of NM400. It's the standard for rock-bucket lining and dump-truck body liners that take heavy ore impact.",
      "Welding: NM400 needs basic preheat (≥80°C for plates above 16mm). NM500 needs stricter preheat (120–150°C) and low-hydrogen electrodes.",
      "Bending: NM400 can be cold-formed to R = 3×t, NM500 to R = 4×t. For tighter radii, choose NM400 or do hot bending.",
      "Send your application and plate size — we will quote with mill cert in 30 minutes.",
    ],
  },
  {
    slug: "dump-truck-liner-bolt-on",
    title: "Bolt-On vs Weld-On Dump Truck Liners",
    seoTitle: "Bolt-On vs Weld-On Dump Truck Liners",
    seoDescription:
      "Pros and cons of bolt-on vs weld-on NM500 dump truck body liners — installation, replacement and total cost.",
    date: "2025-10-02",
    excerpt:
      "Bolt-on liners replace panel-by-panel in hours. Weld-on are cheaper upfront but slower to swap.",
    cover: img("blog-dump-liner"),
    content: [
      "Weld-on NM450/NM500 liners are the cheapest by kg but require fitting in a workshop with skilled welders. Replacement is slow and downtime is high.",
      "Bolt-on liners are CAD-cut to the OEM body shape with countersunk bolt patterns. Replacement takes hours, not days, and can be done in the field.",
      "For mining fleets running CAT 770/777 or Komatsu HD465/785, bolt-on systems usually pay back within 18 months thanks to lower downtime.",
      "Send the truck model and current panel layout — we will quote a bolt-on set within 30 minutes.",
    ],
  },
  {
    slug: "loader-maintenance",
    title: "Wheel Loader Maintenance Checklist",
    seoTitle: "Wheel Loader Maintenance Checklist",
    seoDescription:
      "Daily, weekly and 500-hour maintenance checklist for wheel loaders.",
    date: "2025-10-10",
    excerpt:
      "A clear checklist for daily, weekly and 500-hour wheel loader maintenance.",
    cover: img("blog-maint"),
    content: [
      "Daily: check engine oil, coolant, hydraulic oil level, tire pressure, and bucket teeth condition.",
      "Weekly: grease all pivot points, check air filter restriction, drain water from fuel filter.",
      "Every 500 hours: replace engine oil filter, fuel filter and air filter; inspect bucket teeth.",
      "Need replacement parts? Send the part number — reply within 30 minutes.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const LANGUAGES = ['vi', 'th', 'id', 'bn', 'fa', 'ar', 'tr', 'pl'];

const enPosts = [
  {
    title: "How to Choose Bucket Teeth for Wheel Loader",
    excerpt: "Choosing the right bucket teeth depends on your loader size, ground material, and working hours. Here is the practical checklist.",
    content: [
      "Choosing the right bucket teeth depends on three factors: loader size (J200/J300/J450), the material you dig (sand, gravel, rock), and expected working hours.",
      "For compact loaders working on sand and dirt, J200 is enough. For mid-size loaders in gravel and mixed sites, J300 is the most popular choice. For heavy duty mining and rock work, J450 with reinforced shank is preferred.",
      "Always check the part number first. Material should be alloy steel with HRC 48–54. Lower hardness wears too fast; higher hardness becomes brittle.",
      "Send us your part number — we will reply within 30 minutes with price and delivery."
    ]
  },
  {
    title: "J200 vs J300 Bucket Teeth: Key Differences",
    excerpt: "J200 and J300 are the two most common loader teeth. Here is a side-by-side comparison.",
    content: [
      "J200 is designed for compact and small wheel loaders, weighing around 2.5 kg per piece. J300 is larger, around 4.5 kg, used on 3–5 ton loaders.",
      "Both use alloy steel with HRC 48–52, but J300 has a thicker shank for higher impact loads.",
      "Price: J200 $5–$12/pc, J300 $8–$18/pc.",
      "Pick J200 for light digging, J300 for general construction. Need help matching your loader? Send the part number — reply within 30 minutes."
    ]
  },
  {
    title: "When Should You Replace Bucket Teeth",
    excerpt: "Worn teeth slow you down and damage the bucket. Replace them when wear exceeds 50% of original length.",
    content: [
      "Inspect bucket teeth every 200 working hours. Replace when wear exceeds 50% of original length or visible cracks appear at the shank.",
      "Worn teeth increase fuel consumption and reduce productivity by up to 25%.",
      "Always replace teeth as a complete set to keep balanced cutting force.",
      "Need quick supply? Send the part number — reply within 30 minutes."
    ]
  },
  {
    title: "NM400 vs NM500 Wear Plate: How to Choose",
    excerpt: "NM400 is easier to weld and bend, NM500 lasts longer in heavy abrasion. Pick by impact load and forming need.",
    content: [
      "NM400 has Brinell hardness around HBW 360–440 and is the most weldable and formable wear-grade steel. It's used for bucket bottoms, hopper walls and conveyor liners with moderate impact.",
      "NM500 has HBW 470–530 and gives roughly 1.5–2× the abrasion life of NM400. It's the standard for rock-bucket lining and dump-truck body liners that take heavy ore impact.",
      "Welding: NM400 needs basic preheat (≥80°C for plates above 16mm). NM500 needs stricter preheat (120–150°C) and low-hydrogen electrodes.",
      "Bending: NM400 can be cold-formed to R = 3×t, NM500 to R = 4×t. For tighter radii, choose NM400 or do hot bending.",
      "Send your application and plate size — we will quote with mill cert in 30 minutes."
    ]
  },
  {
    title: "Bolt-On vs Weld-On Dump Truck Liners",
    excerpt: "Bolt-on liners replace panel-by-panel in hours. Weld-on are cheaper upfront but slower to swap.",
    content: [
      "Weld-on NM450/NM500 liners are the cheapest by kg but require fitting in a workshop with skilled welders. Replacement is slow and downtime is high.",
      "Bolt-on liners are CAD-cut to the OEM body shape with countersunk bolt patterns. Replacement takes hours, not days, and can be done in the field.",
      "For mining fleets running CAT 770/777 or Komatsu HD465/785, bolt-on systems usually pay back within 18 months thanks to lower downtime.",
      "Send the truck model and current panel layout — we will quote a bolt-on set within 30 minutes."
    ]
  },
  {
    title: "Wheel Loader Maintenance Checklist",
    excerpt: "A clear checklist for daily, weekly and 500-hour wheel loader maintenance.",
    content: [
      "Daily: check engine oil, coolant, hydraulic oil level, tire pressure, and bucket teeth condition.",
      "Weekly: grease all pivot points, check air filter restriction, drain water from fuel filter.",
      "Every 500 hours: replace engine oil filter, fuel filter and air filter; inspect bucket teeth.",
      "Need replacement parts? Send the part number — reply within 30 minutes."
    ]
  }
];

async function run() {
  for (const lang of LANGUAGES) {
    console.log(`\nTranslating posts to ${lang}...`);
    const translatedPosts = [];

    try {
      for (const post of enPosts) {
        const texts = [post.title, post.excerpt, ...post.content];
        const res = await translate(texts, { to: lang });
        const translatedTexts = res.map(r => r.text);
        
        translatedPosts.push({
          title: translatedTexts[0],
          excerpt: translatedTexts[1],
          content: translatedTexts.slice(2)
        });
      }
      
      const outPath = path.join(__dirname, 'scraped', `posts.${lang}.json`);
      fs.writeFileSync(outPath, JSON.stringify(translatedPosts, null, 2));
      console.log(`Saved ${outPath}`);

    } catch (err) {
      console.error(`Failed for ${lang}:`, err.message);
    }
  }
}

run().catch(console.error);

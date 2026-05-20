// Deduplicate categories and emit a clean dataset.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = "d:/kehu/jixiepeijian";
const SRC = path.join(ROOT, "scripts/scraped/data.json");
const OUT = path.join(ROOT, "scripts/scraped/data.clean.json");
const SUMMARY = path.join(ROOT, "scripts/scraped/SUMMARY.md");

const KEEP = [
  "caterpillar-bucket-teeth-adapters",
  "komatsu-bucket-teeth-adapters",
  "hyundai-bucket-teeth-adapters",
  "daewoo-bucket-teeth-adapters",
  "kobelco-bucket-teeth-adapters",
  "hensley-bucket-teeth-adapters",
  "liugong-bucket-teeth-adapters",
  "hitachi-bucket-teeth-adapters",
  "xcmg-bucket-teeth-adapters",
  "xgma-bucket-teeth-adapters",
  "case-bucket-teeth-adapters",
  "volvo-bucket-teeth-adapters",
  "jcb-bucket-teeth-adapters",
  "bucket-pins-and-bushings",
  "other-teeth-and-adapters",
  "bulldozer-ripper-teeth",
  "bucket-cutting-edge",
  "bucket-side-cutter",
  "other-castings",
  "carbide-drill",
];

const raw = JSON.parse(await readFile(SRC, "utf8"));
const categories = raw.categories.filter((c) => KEEP.includes(c.slug));
const validSlugs = new Set(categories.flatMap((c) => c.productSlugs));
const products = {};
for (const slug of validSlugs) if (raw.products[slug]) products[slug] = raw.products[slug];

// Re-assign each product.category to the FIRST kept category whose productSlugs include it
for (const c of categories) {
  for (const ps of c.productSlugs) {
    if (products[ps] && !KEEP.includes(products[ps].category)) {
      products[ps].category = c.slug;
    }
  }
}
// Final pass: any product whose category still isn't in KEEP, reassign to first owning cat
for (const slug of Object.keys(products)) {
  if (!KEEP.includes(products[slug].category)) {
    const owner = categories.find((c) => c.productSlugs.includes(slug));
    if (owner) products[slug].category = owner.slug;
  }
}

const clean = {
  source: "https://www.hzteeth.com",
  fetchedAt: raw.fetchedAt,
  categories,
  products,
};
await writeFile(OUT, JSON.stringify(clean, null, 2));

const totalProducts = Object.keys(products).length;
const lines = [
  "# Scraped from hzteeth.com",
  "",
  `Fetched at: ${raw.fetchedAt}`,
  "",
  `**Categories:** ${categories.length}`,
  `**Products:** ${totalProducts}`,
  "",
  "## Category breakdown",
  "",
  "| # | Slug | Name | Products | Cover |",
  "|---|------|------|---------:|-------|",
  ...categories.map(
    (c, i) =>
      `| ${i + 1} | \`${c.slug}\` | ${c.name} | ${c.productSlugs.length} | ${
        c.image ? "✓" : "—"
      } |`
  ),
  "",
  "## Files",
  "",
  "- `scripts/scraped/data.clean.json` — final dataset",
  "- `public/scraped/categories/<slug>/cover.jpg` — category covers",
  "- `public/scraped/products/<slug>/01.jpg ... 05.jpg` — product images",
];
await writeFile(SUMMARY, lines.join("\n"));

console.log("Clean categories:", categories.length);
console.log("Clean products :", totalProducts);
console.log("Output:", OUT);
console.log("Summary:", SUMMARY);

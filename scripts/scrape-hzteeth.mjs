// Scrape https://www.hzteeth.com — categories + products + descriptions + images.
//
// Output:
//   scripts/scraped/data.json
//   public/scraped/categories/<cat-slug>/cover.jpg
//   public/scraped/products/<product-slug>/01.jpg, 02.jpg ...
//
// Usage: node scripts/scrape-hzteeth.mjs

import * as cheerio from "cheerio";
import { mkdir, writeFile } from "node:fs/promises";
import { createWriteStream, existsSync } from "node:fs";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import path from "node:path";

const BASE = "https://www.hzteeth.com";
const ROOT = "d:/kehu/jixiepeijian";
const OUT_DIR = path.join(ROOT, "scripts", "scraped");
const PUB_CAT = path.join(ROOT, "public", "scraped", "categories");
const PUB_PROD = path.join(ROOT, "public", "scraped", "products");

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getHtml(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": UA } });
      if (!res.ok) throw new Error("HTTP " + res.status);
      return await res.text();
    } catch (e) {
      console.warn("  ! retry", i + 1, "for", url, "-", e.message);
      await sleep(800 * (i + 1));
    }
  }
  throw new Error("Fetch failed: " + url);
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/\.htm$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

async function downloadImage(url, destPath) {
  if (existsSync(destPath)) return; // skip if already downloaded
  await mkdir(path.dirname(destPath), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": UA, Referer: BASE + "/" } });
  if (!res.ok) throw new Error("img " + res.status + " " + url);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(destPath));
}

function absUrl(u) {
  if (!u) return null;
  if (u.startsWith("http")) return u;
  if (u.startsWith("//")) return "https:" + u;
  if (u.startsWith("/")) return BASE + u;
  return BASE + "/" + u;
}

// ── 1. Categories ───────────────────────────────────────────
async function getCategories() {
  console.log("→ Fetching /products.htm");
  const html = await getHtml(BASE + "/products.htm");
  const $ = cheerio.load(html);
  const cats = [];
  // Sidebar list "Product Categories"
  $("a[href$='.htm']").each((_, el) => {
    const href = $(el).attr("href");
    const text = $(el).text().trim();
    if (!href || !text) return;
    if (!/Bucket-Teeth-Adapters|Bucket-Pins-And-Bushings|Other-Teeth-and-Adapters|Bulldozer-Ripper-Teeth|Bucket-Cutting-Edge|Bucket-Side-Cutter|Other-Castings|Carbide-Drill/i.test(href)) return;
    // Only sidebar categories (no /products/ detail urls)
    if (/\/products\//i.test(href)) return;
    if (cats.find((c) => c.url === absUrl(href))) return;
    cats.push({
      name: text,
      url: absUrl(href),
      slug: slugify(text),
    });
  });
  return cats;
}

// ── 2. Products per category ────────────────────────────────
async function getCategoryProducts(cat) {
  const visit = new Set();
  const products = [];
  const queue = [cat.url];

  while (queue.length) {
    const url = queue.shift();
    if (visit.has(url)) continue;
    visit.add(url);

    const html = await getHtml(url);
    const $ = cheerio.load(html);

    $(".products_list li, li.cols_3").each((_, li) => {
      const a = $(li).find("a.h20, .image a").first();
      const href = a.attr("href");
      if (!href || !/\/products\//.test(href)) return;
      const img = $(li).find("img").first().attr("src");
      const name =
        $(li).find(".proname").first().text().trim() ||
        $(li).find("a.h20").first().text().trim() ||
        a.attr("title") ||
        "";
      const purl = absUrl(href);
      if (products.find((p) => p.url === purl)) return;
      products.push({
        url: purl,
        name,
        thumb: absUrl(img),
        slug: slugify(href.split("/").pop()),
      });
    });

    // Pagination
    $("a[href]").each((_, el) => {
      const h = $(el).attr("href");
      if (!h) return;
      // Same category pagination patterns like _2.htm or ?page=2
      if (
        (h.includes(cat.url.replace(BASE, "").replace(".htm", "")) ||
          h.startsWith("?page=") ||
          /_\d+\.htm$/.test(h)) &&
        !visit.has(absUrl(h)) &&
        !/\/products\//.test(h)
      ) {
        const a = absUrl(h);
        if (a.startsWith(BASE) && !queue.includes(a)) queue.push(a);
      }
    });
  }

  return products;
}

// ── 3. Product detail page ──────────────────────────────────
async function getProductDetail(p) {
  const html = await getHtml(p.url);
  const $ = cheerio.load(html);

  const name = $("h1").first().text().trim() || p.name;

  // Images: jqzoom main + gallery thumbnails
  const images = new Set();
  $("a.jqzoom").each((_, el) => {
    const h = $(el).attr("href");
    if (h) images.add(absUrl(h));
  });
  $(".image img, .thumbnail img, .pro_pic img, .img_box img").each((_, el) => {
    const s = $(el).attr("src");
    if (s && /uploaded\/products/.test(s)) {
      // Use big version (strip thumb_ prefix) if exists
      images.add(absUrl(s.replace(/\/thumb_/, "/")));
    }
  });
  if (images.size === 0 && p.thumb) images.add(p.thumb);

  // Description block
  let description = "";
  const descAnchor = $("h2:contains('Description')").first();
  const detail = descAnchor.next(".detail");
  if (detail.length) {
    description = detail
      .text()
      .replace(/\s+/g, " ")
      .replace(/\u00a0/g, " ")
      .trim();
  } else {
    // Fallback: take h2 sibling area
    const txt = $("body").text();
    const m = txt.match(/Description:\s*([\s\S]{20,800}?)(Related|Inquiry|Add to Basket)/i);
    if (m) description = m[1].replace(/\s+/g, " ").trim();
  }

  return { name, images: [...images], description };
}

// ── 4. Main ─────────────────────────────────────────────────
async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const cats = await getCategories();
  console.log("✔ Categories:", cats.length);

  const dataset = { fetchedAt: new Date().toISOString(), categories: [], products: {} };

  for (let ci = 0; ci < cats.length; ci++) {
    const cat = cats[ci];
    console.log(`\n[${ci + 1}/${cats.length}] ${cat.name}`);
    const items = await getCategoryProducts(cat);
    console.log("  products:", items.length);

    const catRecord = {
      slug: cat.slug,
      name: cat.name,
      url: cat.url,
      image: null,
      productSlugs: [],
    };

    for (let pi = 0; pi < items.length; pi++) {
      const p = items[pi];
      try {
        const detail = await getProductDetail(p);
        const prodDir = path.join(PUB_PROD, p.slug);
        await mkdir(prodDir, { recursive: true });

        const localImages = [];
        for (let i = 0; i < Math.min(detail.images.length, 5); i++) {
          const src = detail.images[i];
          const ext = (src.match(/\.(jpe?g|png|gif|webp)/i)?.[1] || "jpg").toLowerCase();
          const filename = `${String(i + 1).padStart(2, "0")}.${ext}`;
          const dest = path.join(prodDir, filename);
          try {
            await downloadImage(src, dest);
            localImages.push(`/scraped/products/${p.slug}/${filename}`);
          } catch (e) {
            console.warn("    img fail:", e.message);
          }
          await sleep(120);
        }

        // Category cover = first product first image
        if (!catRecord.image && localImages.length) {
          const catDir = path.join(PUB_CAT, cat.slug);
          await mkdir(catDir, { recursive: true });
          const localCover = path.join(catDir, "cover.jpg");
          try {
            await downloadImage(detail.images[0], localCover);
            catRecord.image = `/scraped/categories/${cat.slug}/cover.jpg`;
          } catch {}
        }

        dataset.products[p.slug] = {
          slug: p.slug,
          name: detail.name,
          url: p.url,
          category: cat.slug,
          description: detail.description,
          images: localImages,
          remoteImages: detail.images,
        };
        catRecord.productSlugs.push(p.slug);

        process.stdout.write(`    [${pi + 1}/${items.length}] ${detail.name.slice(0, 60)} (${localImages.length} imgs)\n`);
      } catch (e) {
        console.warn("    product fail:", p.url, e.message);
      }
      await sleep(150);
    }

    dataset.categories.push(catRecord);
    await writeFile(path.join(OUT_DIR, "data.json"), JSON.stringify(dataset, null, 2));
  }

  console.log("\n✔ Done.");
  console.log("  Data:", path.join(OUT_DIR, "data.json"));
  console.log("  Images: public/scraped/");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

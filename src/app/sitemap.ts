import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { posts } from "@/data/posts";
import { categories } from "@/data/categories";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url.replace(/\/$/, "");
  const staticPaths = ["", "/about", "/contact", "/blog"];
  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.6,
  }));
  for (const c of categories) {
    entries.push({ url: `${base}/${c.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.8 });
  }
  for (const p of products) {
    entries.push({ url: `${base}/${p.slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });
  }
  for (const p of posts) {
    entries.push({ url: `${base}/blog/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.5 });
  }
  return entries;
}

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE_URL = 'https://www.raygoo-loader.com';
const OUT_DIR = path.join(__dirname, '../public/img/raygoo-loader');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function downloadImage(url, filename) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(path.join(OUT_DIR, filename), Buffer.from(buffer));
    console.log(`✅ Downloaded: ${filename} from ${url}`);
  } catch (err) {
    console.error(`❌ Failed to download ${url}: ${err.message}`);
  }
}

async function scrapePage(pageUrl, prefix) {
  try {
    console.log(`Fetching ${pageUrl}...`);
    const res = await fetch(pageUrl);
    const html = await res.text();
    const $ = cheerio.load(html);
    
    const imageUrls = new Set();
    
    $('img').each((i, el) => {
      let src = $(el).attr('src') || $(el).attr('data-src');
      if (src) {
        if (src.startsWith('//')) src = 'https:' + src;
        else if (src.startsWith('/')) src = BASE_URL + src;
        else if (!src.startsWith('http')) src = BASE_URL + '/' + src;
        imageUrls.add(src);
      }
    });

    $('*[style]').each((i, el) => {
        const style = $(el).attr('style');
        const match = style.match(/url\(['"]?(.*?)['"]?\)/);
        if (match && match[1]) {
            let src = match[1];
            if (src.startsWith('//')) src = 'https:' + src;
            else if (src.startsWith('/')) src = BASE_URL + src;
            else if (!src.startsWith('http')) src = BASE_URL + '/' + src;
            imageUrls.add(src);
        }
    });

    console.log(`Found ${imageUrls.size} images on ${pageUrl}.`);
    
    let count = 1;
    for (const url of imageUrls) {
      try {
        const urlObj = new URL(url);
        let ext = path.extname(urlObj.pathname).split('?')[0] || '.jpg';
        if (ext.length > 5) ext = '.jpg';
        const filename = `${prefix}-${count.toString().padStart(3, '0')}${ext}`;
        await downloadImage(url, filename);
        count++;
      } catch (e) {
        console.error(`Invalid URL: ${url}`);
      }
    }
  } catch (err) {
    console.error(`Error scraping ${pageUrl}:`, err);
  }
}

async function run() {
  console.log("Starting image scraping from raygoo-loader.com...");
  await scrapePage(BASE_URL, 'home');
  await scrapePage(`${BASE_URL}/about-us/`, 'about');
  console.log("Finished scraping images.");
}

run();
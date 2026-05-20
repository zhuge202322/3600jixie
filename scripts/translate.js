const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const LANGUAGES = ['vi', 'th', 'id', 'bn', 'fa', 'ar', 'tr', 'pl'];

async function run() {
  const dataPath = path.join(__dirname, 'scraped', 'data.clean.json');
  const rawData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  for (const lang of LANGUAGES) {
    console.log(`\nTranslating to ${lang}...`);
    const translatedData = {
      source: rawData.source,
      fetchedAt: rawData.fetchedAt,
      categories: [],
      products: {}
    };

    try {
      // 1. Collect all texts
      const categoryNames = rawData.categories.map(c => c.name);
      
      const productKeys = Object.keys(rawData.products);
      const productNames = productKeys.map(k => rawData.products[k].name);
      const productDescs = productKeys.map(k => rawData.products[k].description || '');

      // Combine all
      const allTexts = [...categoryNames, ...productNames, ...productDescs];
      
      console.log(`Translating ${allTexts.length} items in batch for ${lang}...`);
      
      // Batch translate in chunks of 50
      const translatedTexts = [];
      const CHUNK_SIZE = 50;
      for (let i = 0; i < allTexts.length; i += CHUNK_SIZE) {
        const chunk = allTexts.slice(i, i + CHUNK_SIZE);
        // translate-google-api-x supports array
        const res = await translate(chunk, { to: lang });
        // res is an array of result objects
        res.forEach(r => translatedTexts.push(r.text));
        process.stdout.write(` ${Math.min(i + CHUNK_SIZE, allTexts.length)}/${allTexts.length}`);
        await new Promise(r => setTimeout(r, 1000)); // 1s pause between chunks
      }
      
      console.log(`\nMapping translated text back...`);
      // Map back
      let ptr = 0;
      
      // Categories
      for (let i = 0; i < rawData.categories.length; i++) {
        translatedData.categories.push({
          ...rawData.categories[i],
          name: translatedTexts[ptr++]
        });
      }
      
      // Products
      for (let i = 0; i < productKeys.length; i++) {
        const key = productKeys[i];
        const prod = rawData.products[key];
        translatedData.products[key] = {
          ...prod,
          name: translatedTexts[ptr++],
          description: translatedTexts[ptr++] || prod.description
        };
      }
      
      const outPath = path.join(__dirname, 'scraped', `data.clean.${lang}.json`);
      fs.writeFileSync(outPath, JSON.stringify(translatedData, null, 2));
      console.log(`Finished ${lang}, saved to ${outPath}`);

    } catch (err) {
      console.error(`\nFailed for language ${lang}:`, err);
    }
  }
}

run().catch(console.error);

const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const LANGUAGES = ['vi', 'th', 'id', 'bn', 'fa', 'ar', 'tr', 'pl'];

const extraKeys = {
  stripCountries: "COUNTRIES",
  stripYears: "YEARS EXPORT",
  stripGrades: "WEAR GRADES",
  stripReply: "RFQ REPLY"
};

async function run() {
  const dictPath = path.join(__dirname, '../src/i18n/dictionaries.ts');
  let content = fs.readFileSync(dictPath, 'utf-8');

  // English
  for (const [k, v] of Object.entries(extraKeys)) {
    content = content.replace(/  en: \{/, `  en: {\n    ${k}: ${JSON.stringify(v)},`);
  }

  // Other langs
  for (const lang of LANGUAGES) {
    console.log(`Translating for ${lang}...`);
    const values = Object.values(extraKeys);
    try {
      const res = await translate(values, { to: lang });
      const translatedTexts = res.map(r => r.text);
      
      let additions = "";
      Object.keys(extraKeys).forEach((key, index) => {
        additions += `    ${key}: ${JSON.stringify(translatedTexts[index])},\n`;
      });
      
      const regex = new RegExp(`  ${lang}: \\{`);
      content = content.replace(regex, `  ${lang}: {\n${additions}`);
    } catch (err) {
      console.error(err);
    }
  }

  fs.writeFileSync(dictPath, content, 'utf-8');
  console.log("Updated dictionaries.ts with extra keys!");
}

run().catch(console.error);
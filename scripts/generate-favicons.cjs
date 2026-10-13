// Session 6: generate favicons + OG share image from the existing logo/hero.
// NOTE: the logo is still the temporary IG profile pic (150x150) — regenerate
// these files when the official logo arrives (docs/DECISIONS.md §Open).
const sharp = require('sharp');
const fs = require('fs');

const overlay = Buffer.from(
  '<svg width="1200" height="630"><rect width="1200" height="630" fill="black" fill-opacity="0.35"/></svg>'
);

(async () => {
  const logo = 'public/images/logo-s150x150.jpg';
  await sharp(logo).resize(32, 32).png().toFile('public/favicon-32.png');
  await sharp(logo).resize(16, 16).png().toFile('public/favicon-16.png');
  await sharp(logo).resize(180, 180).png().toFile('public/apple-touch-icon.png');
  // OG/Twitter share image 1200x630: hero photo, attention-based crop, darkened.
  await sharp('src/assets/images/hero-functional.jpg')
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .composite([{ input: overlay }])
    .jpeg({ quality: 80 })
    .toFile('public/og-image.jpg');

  for (const f of ['favicon-32.png', 'favicon-16.png', 'apple-touch-icon.png', 'og-image.jpg']) {
    console.log(f, Math.round(fs.statSync('public/' + f).size / 1024) + 'KB');
  }
})();

// Session 6: generate favicons + OG share image from the existing logo/hero.
// The logo is a circle on a square JPEG (white corners): the favicons apply a
// circular mask so the corners become transparent.
// NOTE: the logo is still the temporary IG profile pic (150x150) - regenerate
// these files when the official logo arrives (docs/DECISIONS.md §Open).
const sharp = require('sharp');
const fs = require('fs');

const overlay = Buffer.from(
  '<svg width="1200" height="630"><rect width="1200" height="630" fill="black" fill-opacity="0.35"/></svg>'
);

/** Circular mask the size of `size`, so everything outside the circle is cut. */
function circleMask(size) {
  const r = size / 2;
  return Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="white"/></svg>`
  );
}

/** Logo -> square PNG of `size`, white corners made transparent. */
async function maskedIcon(size, file) {
  await sharp('public/images/logo-s150x150.jpg')
    .resize(size, size)
    .ensureAlpha()
    .composite([{ input: circleMask(size), blend: 'dest-in' }])
    .png()
    .toFile(file);
}

(async () => {
  await maskedIcon(32, 'public/favicon-32.png');
  await maskedIcon(16, 'public/favicon-16.png');
  await maskedIcon(180, 'public/apple-touch-icon.png');
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

// Session 3 audit: find (a) standalone tag lines (">" or "/>" alone), (b) emoji-like characters.
const fs = require('fs');
const path = require('path');

const dirs = ['src', 'docs', 'public', '.'];
const exts = new Set(['.astro', '.ts', '.css', '.md', '.mjs', '.json']);
const emojiRe = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{2190}-\u{21FF}\u{1F1E6}-\u{1F1FF}]/u;
const standaloneTag = /^\s*(\/?>|>)\s*$/;

function walk(d, out) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (['node_modules', 'dist', '.git', '.astro'].includes(e.name)) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (exts.has(path.extname(e.name))) out.push(p);
  }
}

const files = [];
for (const d of dirs) {
  try { walk(d, files); } catch {}
}
const seen = new Set();
let hits = 0;
for (const f of files) {
  if (seen.has(f)) continue;
  seen.add(f);
  const lines = fs.readFileSync(f, 'utf8').split(/\r?\n/);
  lines.forEach((line, i) => {
    if (standaloneTag.test(line)) {
      hits++;
      console.log('TAG   ' + f + ':' + (i + 1) + ': ' + JSON.stringify(line));
    }
    const m = line.match(emojiRe);
    if (m) {
      hits++;
      console.log(
        'EMOJI ' + f + ':' + (i + 1) + ': ' + line.trim().slice(0, 110) + '  ==> ' +
        [...m].map((c) => 'U+' + c.codePointAt(0).toString(16).toUpperCase()).join(',')
      );
    }
  });
}
console.log('scan done, ' + hits + ' hit(s), ' + seen.size + ' files scanned');

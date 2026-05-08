import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const outDir = 'dist';
const assetsDir = join(outDir, 'assets');

await rm(outDir, { recursive: true, force: true });
await mkdir(assetsDir, { recursive: true });

const [html, css, js] = await Promise.all([
  readFile('index.html', 'utf8'),
  readFile('src/styles.css', 'utf8'),
  readFile('src/main.ts', 'utf8'),
]);

const builtHtml = html
  .replace('<link rel="stylesheet" href="/src/styles.css" />', '<link rel="stylesheet" href="/assets/styles.css" />')
  .replace('<script type="module" src="/src/main.ts"></script>', '<script type="module" src="/assets/main.js"></script>');

await Promise.all([
  writeFile(join(outDir, 'index.html'), builtHtml),
  writeFile(join(assetsDir, 'styles.css'), css),
  writeFile(join(assetsDir, 'main.js'), js),
]);

console.log(`Built ${dirname(join(assetsDir, 'main.js'))} for Vercel output directory: ${outDir}`);

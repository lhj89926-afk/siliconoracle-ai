import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';

await mkdir('dist/assets', { recursive: true });
await copyFile('src/styles.css', 'dist/assets/styles.css');

const html = await readFile('index.html', 'utf8');
const productionHtml = html
  .replace('/src/styles.css', '/assets/styles.css')
  .replace('/src/main.ts', '/assets/main.js');

await writeFile('dist/index.html', productionHtml);
console.log('Built SiliconOracle AI to dist/');

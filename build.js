#!/usr/bin/env node
/**
 * Build index.html from src/index.template.html + src/app.jsx
 *
 * Why this exists: the site used to ship JSX and load @babel/standalone (~2.5MB)
 * into every visitor's browser to translate it on the fly, on every page load.
 * This does that translation once, here, so visitors get plain JavaScript.
 *
 *   npm install            (once)
 *   node build.js
 *
 * Edit src/app.jsx — never edit index.html directly, it is generated.
 */
const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');

const template = fs.readFileSync(path.join(SRC, 'index.template.html'), 'utf8');
const jsx = fs.readFileSync(path.join(SRC, 'app.jsx'), 'utf8');

const { code } = babel.transformSync(jsx, {
  presets: [[require('@babel/preset-react'), { runtime: 'classic' }]],
  filename: 'app.jsx',
  compact: false,
  comments: false,
  babelrc: false,
  configFile: false,
});

if (!code || !code.includes('React.createElement')) {
  console.error('Build failed: compiled output does not look like React output.');
  process.exit(1);
}

const PLACEHOLDER = '/* __APP__ */';
if (!template.includes(PLACEHOLDER)) {
  console.error(`Build failed: template is missing ${PLACEHOLDER}`);
  process.exit(1);
}

const out = template.replace(PLACEHOLDER, code);
fs.writeFileSync(path.join(ROOT, 'index.html'), out);

const kb = (n) => (n / 1024).toFixed(1) + ' KB';
console.log(`built index.html  ${kb(out.length)}  (jsx source ${kb(jsx.length)} -> js ${kb(code.length)})`);

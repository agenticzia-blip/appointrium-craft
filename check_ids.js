const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');
// very basic regex to check for mismatched IDs
const jsIds = [...js.matchAll(/getElementById\(['`\"]([^'`\"]+)['`\"]\)/g)].map(m => m[1]);
const htmlIds = [...html.matchAll(/id=['\"]([^'\"]+)['\"]/g)].map(m => m[1]);
const missingIds = jsIds.filter(id => !htmlIds.includes(id));
console.log('Missing IDs used in JS but not in HTML:', [...new Set(missingIds)]);

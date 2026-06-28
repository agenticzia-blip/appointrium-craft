const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');
const jsIds = [];
const regex = /getElementById\(['"`]([^'"`]+)['"`]\)/g;
let match;
while ((match = regex.exec(js)) !== null) {
  if (!match[1].includes('$')) {
    jsIds.push(match[1]);
  }
}
for (const id of jsIds) {
  if (!html.includes('id="' + id + '"') && !html.includes("id='" + id + "'")) {
    console.log('MISSING:', id);
  }
}
console.log('DONE');

const fs = require('fs');

function check() {
  let html = fs.readFileSync('index.html');
  if (html[0] === 0xFF && html[1] === 0xFE) {
    html = html.toString('utf16le');
  } else {
    html = html.toString('utf8');
  }

  const idsToCheck = [
    'btn-timer-toggle',
    'session-name',
    'btn-reset',
    'btn-save',
    'btn-export',
    'btn-clear-all',
    'btn-chart-dials',
    'btn-chart-funnel',
    'history-search',
    'history-filter-range'
  ];

  for (const id of idsToCheck) {
    if (!html.includes('id="' + id + '"') && !html.includes("id='" + id + "'")) {
      console.log('MISSING ID:', id);
    }
  }
}
check();

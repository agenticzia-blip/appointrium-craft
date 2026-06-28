// -------------------------------------------------------------------------- //
//              APPOINT FUNNELS - MINIMALIST REACH OUT TRACKER LOGIC          //
// -------------------------------------------------------------------------- //

// Global State
const state = {
  authenticatedUser: null,
  activeSession: {
    total: 0,
    picked: 0,
    pitched: 0,
    hangup: 0,
    owner: 0,
    hangupNoPitch: 0,
    rejected: 0,
    booked: 0,
    name: '',
    startTime: null,
    elapsedTime: 0,
    isPaused: false
  },
  history: [],
  currentChartType: 'Reach Outs', // 'Reach Outs' or 'bookings'
  chartInstance: null
};

// Notification Helper
function showNotification(message) {
  const overlay = document.getElementById('custom-alert-overlay');
  const msgEl = document.getElementById('custom-alert-message');
  if (overlay && msgEl) {
    msgEl.textContent = message;
    overlay.classList.add('active');
  } else {
    alert(message);
  }
}

// Stopwatch interval
let timerInterval = null;
let timerRunning = false;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // No auth required anymore
  state.authenticatedUser = localStorage.getItem('af_auth_user') || 'Team Member';

  // Load from local storage cache
  loadFromLocalStorage();

  // Initialize UI
  updateUI();
  renderCharts();

  // Check if we need to auto-start the stopwatch
  if (!state.activeSession.isPaused) {
    startTimer();
  } else {
    // If paused, just render the frozen elapsed time once
    const totalMs = state.activeSession.elapsedTime || 0;
    const hours = Math.floor(totalMs / (3600 * 1000));
    const minutes = Math.floor((totalMs % (3600 * 1000)) / (60 * 1000));
    const seconds = Math.floor((totalMs % (60 * 1000)) / 1000);
    const pad = (num) => String(num).padStart(2, '0');
    document.getElementById('timer-display').textContent = `${hours.toString().padStart(2, '0')}:${pad(minutes)}:${pad(seconds)}`;
    
    // Also set the button icon to Play since it's paused
    const icon = document.querySelector('#btn-timer-toggle i');
    if (icon) {
      icon.setAttribute('data-lucide', 'play');
    }
  }

  // Setup control listeners
  setupEventListeners();

  // Refresh user interface & draw trends
  updateUI();
});

// -------------------------------------------------------------------------- //
//                          LOCAL STORAGE PERSISTENCE                         //
// -------------------------------------------------------------------------- //

function saveToLocalStorage() {
  localStorage.setItem('af_active_session_min', JSON.stringify(state.activeSession));
  localStorage.setItem('af_history_min', JSON.stringify(state.history));
}

function loadFromLocalStorage() {
  // Load Active Session
  const savedActive = localStorage.getItem('af_active_session_min');
  if (savedActive) {
    state.activeSession = JSON.parse(savedActive);
    if (state.activeSession.name) {
      document.getElementById('session-name').value = state.activeSession.name;
    }
  } else {
    state.activeSession.startTime = Date.now();
  }

  // Load History
  const savedHistory = localStorage.getItem('af_history_min');
  if (savedHistory) {
    state.history = JSON.parse(savedHistory);
  }

  // Apply 365 days retention bounds
  pruneOldLogs();
}

function pruneOldLogs() {
  const oneYearAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
  const originalLength = state.history.length;

  state.history = state.history.filter(log => {
    const logDate = new Date(log.timestamp).getTime();
    return logDate >= oneYearAgo;
  });

  if (state.history.length < originalLength) {
    console.log(`Pruned ${originalLength - state.history.length} old logs from history.`);
    saveToLocalStorage();
  }
}

// -------------------------------------------------------------------------- //
//                            SESSION TIMING CLOCK                            //
// -------------------------------------------------------------------------- //

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerRunning = true;
  state.activeSession.isPaused = false;
  
  let lastTick = Date.now();
  timerInterval = setInterval(() => {
    const now = Date.now();
    state.activeSession.elapsedTime = (state.activeSession.elapsedTime || 0) + (now - lastTick);
    lastTick = now;
    
    saveToLocalStorage();

    const totalMs = state.activeSession.elapsedTime;
    const hours = Math.floor(totalMs / (3600 * 1000));
    const minutes = Math.floor((totalMs % (3600 * 1000)) / (60 * 1000));
    const seconds = Math.floor((totalMs % (60 * 1000)) / 1000);

    const pad = (num) => String(num).padStart(2, '0');
    document.getElementById('timer-display').textContent = `${hours.toString().padStart(2, '0')}:${pad(minutes)}:${pad(seconds)}`;
  }, 1000);
}

function resetTimer() {
  state.activeSession.elapsedTime = 0;
  if (!timerRunning) {
    document.getElementById('timer-display').textContent = '00:00:00';
  } else {
    startTimer();
  }
  saveToLocalStorage();
}

// Toggle timer start/pause
function toggleTimer() {
  if (timerRunning) {
    // Pause timer
    clearInterval(timerInterval);
    timerRunning = false;
    state.activeSession.isPaused = true;
    saveToLocalStorage();

    // Change icon to play
    const icon = document.querySelector('#btn-timer-toggle i');
    if (icon) {
      icon.setAttribute('data-lucide', 'play');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  } else {
    // Start timer
    state.activeSession.isPaused = false;
    saveToLocalStorage();
    startTimer();
    
    // Change icon to pause
    const icon = document.querySelector('#btn-timer-toggle i');
    if (icon) {
      icon.setAttribute('data-lucide', 'pause');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  }
}

// -------------------------------------------------------------------------- //
//                        CONTROLS AND BINDINGS SETUP                         //
// -------------------------------------------------------------------------- //

function setupEventListeners() {
  // Notification close button
  const alertBtn = document.getElementById('custom-alert-btn');
  if (alertBtn) {
    alertBtn.addEventListener('click', () => {
      document.getElementById('custom-alert-overlay').classList.remove('active');
    });
  }

  // Handle manual edits on counters
  document.querySelectorAll('.count-display[contenteditable="true"]').forEach(el => {
    el.addEventListener('blur', (e) => {
      const targetId = e.target.id.replace('count-', '');
      let val = parseInt(e.target.textContent.replace(/[^0-9]/g, ''), 10);
      if (isNaN(val)) val = 0;
      
      state.activeSession[targetId] = val;
      
      saveToLocalStorage();
      updateUI();
    });

    el.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
      }
    });
  });

  // Tab Switching event listeners
  document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', () => {
      const targetTab = link.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Timer toggle button
  const timerToggleBtn = document.getElementById('btn-timer-toggle');
  if (timerToggleBtn) {
    timerToggleBtn.addEventListener('click', () => {
      toggleTimer();
    });
  }

  // Timer reset button
  const timerResetBtn = document.getElementById('btn-timer-reset');
  if (timerResetBtn) {
    timerResetBtn.addEventListener('click', () => {
      if(confirm('Are you sure you want to reset the timer to 00:00:00?')) {
        resetTimer();
      }
    });
  }

  // Session Label input
  const nameInput = document.getElementById('session-name');
  nameInput.addEventListener('input', (e) => {
    state.activeSession.name = e.target.value;
    saveToLocalStorage();
  });

  // Increment click body of cards
  document.querySelectorAll('.minimalist-card .card-click-area').forEach(card => {
    card.addEventListener('click', () => {
      const target = card.getAttribute('data-target');
      adjustCounter(target, true);

      // Satisfying celebration on booked meeting
      if (target === 'booked') {
        triggerConfettiSplash();
      }
    });
  });

  // Decrement minus icon clicks
  document.querySelectorAll('.btn-decrement').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Stop click triggers on card body
      const target = btn.getAttribute('data-target');
      adjustCounter(target, false);
    });
  });

  // Reset Session counters
  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset current active session counters?')) {
      state.activeSession.total = 0;
      state.activeSession.picked = 0;
      state.activeSession.pitched = 0;
      state.activeSession.rejected = 0;
      state.activeSession.hangup = 0;
      state.activeSession.owner = 0;
      state.activeSession.hangupNoPitch = 0;
      state.activeSession.booked = 0;
      state.activeSession.name = '';
      nameInput.value = '';
      resetTimer();
      saveToLocalStorage();
      updateUI();
    }
  });

  // Save Session
  document.getElementById('btn-save').addEventListener('click', () => {
    saveSession();
  });

  // Export CSV
  document.getElementById('btn-export').addEventListener('click', () => {
    exportToCSV();
  });

  // Clear cache logs
  document.getElementById('btn-clear-all').addEventListener('click', () => {
    if (confirm('CAUTION: Permanently clear all campaign logs? This cannot be undone.')) {
      state.history = [];
      saveToLocalStorage();
      updateUI();
      renderCharts();
    }
  });

  // Toggle dynamic charts
  document.getElementById('btn-chart-dials').addEventListener('click', (e) => {
    toggleChart('Reach Outs', e.target);
  });
  document.getElementById('btn-chart-funnel').addEventListener('click', (e) => {
    toggleChart('bookings', e.target);
  });

  // Live text search filters
  document.getElementById('history-search').addEventListener('input', () => {
    renderHistoryTable();
  });

  // Date range filter selects
  document.getElementById('history-filter-range').addEventListener('change', () => {
    renderHistoryTable();
  });
}

// Tab switcher handler
function switchTab(tabName) {
  performTabSwitch(tabName);
}

function performTabSwitch(tabName) {
  // Toggle tab buttons active status
  document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  const activeBtn = Array.from(document.querySelectorAll('.tab-link')).find(btn => btn.getAttribute('data-tab') === tabName);
  if (activeBtn) activeBtn.classList.add('active');

  // Toggle target content panel
  const activeContent = document.getElementById(`tab-content-${tabName}`);
  if (activeContent) activeContent.classList.add('active');

  // Critical redraw for Chart.js canvas sizes when shown inside container
  if (tabName === 'history') {
    setTimeout(() => {
      renderCharts();
    }, 50); // Let CSS display block apply first
  }
}

// -------------------------------------------------------------------------- //
//                       CASCADING BOUNDARY VALIDATIONS                       //
// -------------------------------------------------------------------------- //

function adjustCounter(stage, isIncrement) {
  if (isIncrement) {
    state.activeSession[stage]++;
  } else {
    // Decrement adjustments
    if (state.activeSession[stage] > 0) {
      state.activeSession[stage]--;
    }
  }

  saveToLocalStorage();
  updateUI();
}

// -------------------------------------------------------------------------- //
//                            UI RENDER MANAGERS                              //
// -------------------------------------------------------------------------- //

function safePct(val, total) {
  return total > 0 ? Math.round((val / total) * 100) : 0;
}

function updateUI() {
  const active = state.activeSession;

  // Render Counters
  document.getElementById('count-total').textContent = active.total;
  
  // MISSING COUNTER FIXES
  document.getElementById('count-picked').textContent = active.picked;
  document.getElementById('count-pitched').textContent = active.pitched;

  document.getElementById('count-hangup').textContent = state.activeSession.hangup;
  const pctHangup = safePct(state.activeSession.hangup, state.activeSession.pitched);
  document.getElementById('pct-hangup').textContent = `${pctHangup}% of Pitched`;

  const ownerEl = document.getElementById('count-owner');
  if (ownerEl) {
    ownerEl.textContent = state.activeSession.owner || 0;
    const pctOwner = safePct(state.activeSession.owner || 0, state.activeSession.picked);
    document.getElementById('pct-owner').textContent = `${pctOwner}% of Connects`;
  }

  const hnpEl = document.getElementById('count-hangupNoPitch');
  if (hnpEl) {
    hnpEl.textContent = state.activeSession.hangupNoPitch || 0;
    const pctHnp = safePct(state.activeSession.hangupNoPitch || 0, state.activeSession.picked);
    document.getElementById('pct-hangupNoPitch').textContent = `${pctHnp}% of Connects`;
  }

  document.getElementById('count-rejected').textContent = state.activeSession.rejected;
  document.getElementById('count-booked').textContent = active.booked;

  // Render conversion percentages
  const connRate = active.total > 0 ? Math.round((active.picked / active.total) * 100) : 0;
  const pitchRate = active.picked > 0 ? Math.round((active.pitched / active.picked) * 100) : 0;
  const hangupRate = active.pitched > 0 ? Math.round((active.hangup / active.pitched) * 100) : 0;
  const declineRate = active.pitched > 0 ? Math.round((active.rejected / active.pitched) * 100) : 0;
  const overallRate = active.total > 0 ? Math.round((active.booked / active.total) * 100) : 0;

  document.getElementById('pct-picked').textContent = `${connRate}% Reply Ratio`;
  document.getElementById('pct-pitched-connect').textContent = `${pitchRate}% of Connects`;
  document.getElementById('pct-hangup').textContent = `${hangupRate}% of Pitched`;
  document.getElementById('pct-rejected').textContent = `${declineRate}% of Pitched`;
  document.getElementById('pct-booked').textContent = `${overallRate}% Overall Rate`;

  // Render Visual Funnel stage values
  document.getElementById('funnel-val-total').textContent = active.total;
  document.getElementById('funnel-val-picked').textContent = active.picked;
  document.getElementById('funnel-val-pitched').textContent = active.pitched;
  document.getElementById('funnel-val-booked').textContent = active.booked;

  // Visual Funnel stage width percentages
  const connectVisualPct = active.total > 0 ? (active.picked / active.total) * 100 : 0;
  const pitchVisualPct = active.total > 0 ? (active.pitched / active.total) * 100 : 0;
  const bookVisualPct = active.total > 0 ? (active.booked / active.total) * 100 : 0;

  document.querySelector('#funnel-lvl-total .funnel-fill-bar').style.width = active.total > 0 ? '100%' : '0%';
  document.querySelector('#funnel-lvl-picked .funnel-fill-bar').style.width = `${connectVisualPct}%`;
  document.querySelector('#funnel-lvl-pitched .funnel-fill-bar').style.width = `${pitchVisualPct}%`;
  document.querySelector('#funnel-lvl-booked .funnel-fill-bar').style.width = `${bookVisualPct}%`;

  document.getElementById('funnel-pct-picked').textContent = `${connRate}%`;
  document.getElementById('funnel-pct-pitched').textContent = `${active.total > 0 ? Math.round(pitchVisualPct) : 0}%`;
  document.getElementById('funnel-pct-booked').textContent = `${active.total > 0 ? Math.round(bookVisualPct) : 0}%`;

  // Render Global aggregates
  let gReachOuts = 0;
  let gBookings = 0;
  let gConnects = 0;

  state.history.forEach(log => {
    gReachOuts += log.total;
    gConnects += log.picked;
    gBookings += log.booked;
  });

  const avgConnRate = gReachOuts > 0 ? Math.round((gConnects / gReachOuts) * 100) : 0;
  const avgBookRate = gReachOuts > 0 ? Math.round((gBookings / gReachOuts) * 100) : 0;

  document.getElementById('global-total-dials').textContent = gReachOuts;
  document.getElementById('global-bookings').textContent = gBookings;
  document.getElementById('global-connect-rate').textContent = `${avgConnRate}%`;
  document.getElementById('global-booking-rate').textContent = `${avgBookRate}%`;

  // Render logs
  renderHistoryTable();
}

// -------------------------------------------------------------------------- //
//                       SAVE ACTIVE TRACKER SESSION                          //
// -------------------------------------------------------------------------- //

function saveSession() {
  const active = state.activeSession;

  const userNameInput = document.getElementById('user-name');
  if (userNameInput && !userNameInput.value.trim()) {
    showNotification('Please add your name to submit.');
    return;
  }
  if (userNameInput) {
    state.authenticatedUser = userNameInput.value.trim();
  }

  if (active.total === 0) {
    showNotification('Log some outbound attempts before attempting to save the session.');
    return;
  }

  const notesInput = document.getElementById('session-notes');
  const sessionNotes = notesInput ? notesInput.value.trim() : '';

  const totalElapsedMs = active.elapsedTime || 0;

  const campaignLabel = active.name.trim() || `Outbound Session #${state.history.length + 1}`;
  const logItem = {
    id: 'campaign_log_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toISOString(),
    teamMember: state.authenticatedUser || 'Unknown',
    name: campaignLabel,
    durationMs: totalElapsedMs,
    total: active.total,
    picked: active.picked,
    pitched: active.pitched,
    hangup: active.hangup,
    owner: active.owner,
    hangupNoPitch: active.hangupNoPitch,
    rejected: active.rejected,
    booked: active.booked,
    notes: sessionNotes
  };

  // Add to stack
  state.history.unshift(logItem);

  // Prune older than 365 days
  pruneOldLogs();

  saveToLocalStorage();
  updateUI();

  // Send to Webhook
  const webhookUrl = 'https://ziauddinshah32.app.n8n.cloud/webhook/01716c9b-0e3a-4b0f-951a-456cef464da0';
  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(logItem)
  }).catch(err => console.error('Webhook error:', err));

  // Alert success without switching tabs
  showNotification('Today\'s report submitted successfully!');
}

function deleteHistoryItem(id) {
  if (confirm('Permanently delete this specific outreach log?')) {
    state.history = state.history.filter(log => log.id !== id);
    saveToLocalStorage();
    updateUI();
    renderCharts();
  }
}

// -------------------------------------------------------------------------- //
//                           HISTORY LOG TABLE RENDERING                      //
// -------------------------------------------------------------------------- //

function renderHistoryTable() {
  const tbody = document.getElementById('history-table-body');
  const searchVal = document.getElementById('history-search').value.toLowerCase().trim();
  const rangeVal = document.getElementById('history-filter-range').value;

  tbody.innerHTML = '';

  let filtered = state.history;

  // Filter 1: Date range
  const now = new Date();
  if (rangeVal === 'today') {
    filtered = filtered.filter(l => new Date(l.timestamp).toDateString() === now.toDateString());
  } else if (rangeVal === 'week') {
    const limits = now.getTime() - (7 * 24 * 60 * 60 * 1000);
    filtered = filtered.filter(l => new Date(l.timestamp).getTime() >= limits);
  } else if (rangeVal === 'month') {
    const limits = now.getTime() - (30 * 24 * 60 * 60 * 1000);
    filtered = filtered.filter(l => new Date(l.timestamp).getTime() >= limits);
  }

  // Filter 2: Text search
  if (searchVal !== '') {
    filtered = filtered.filter(l => {
      const dateStr = new Date(l.timestamp).toLocaleDateString();
      return l.name.toLowerCase().includes(searchVal) || dateStr.includes(searchVal);
    });
  }

  // Handle empty lists
  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr class="empty-state-row">
        <td colspan="9" class="text-center">
          <div class="table-empty-display">
            <i data-lucide="inbox"></i>
            <p>${state.history.length === 0 ? 'No historical campaign logs found. complete an active session above and click save!' : 'No entries match your search/filter.'}</p>
          </div>
        </td>
      </tr>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  // Build rows
  filtered.forEach(log => {
    const date = new Date(log.timestamp);
    const dateStr = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    const timeStr = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    const bookRate = log.total > 0 ? Math.round((log.booked / log.total) * 100) : 0;
    
    // Format duration
    const durMs = log.durationMs || 0;
    const hrs = Math.floor(durMs / (3600 * 1000));
    const mins = Math.floor((durMs % (3600 * 1000)) / (60 * 1000));
    const pad = (n) => String(n).padStart(2, '0');
    const durStr = durMs > 0 ? `${hrs}:${pad(mins)}` : '--';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="white-space: nowrap;">
        <strong>${dateStr}</strong><br>
        <span style="font-size: 0.72rem; color: var(--text-muted);">${timeStr}</span>
      </td>
      <td>
        <span style="font-weight:600; color: var(--color-primary);">${escapeHTML(log.teamMember || 'Unknown')}</span>
      </td>
      <td>
        <span style="font-weight:600;">${escapeHTML(log.name)}</span>
      </td>
      <td>
        <span style="font-size: 0.85rem; color: var(--text-secondary); max-width: 200px; display: inline-block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" title="${escapeHTML(log.notes || '')}">${escapeHTML(log.notes || '--')}</span>
      </td>
      <td class="text-center" style="font-weight: 500;">${durStr}</td>
      <td class="text-center info-color" style="font-weight: 600;">${log.total}</td>
      <td class="text-center" style="color: var(--color-primary); font-weight: 600;">${log.picked}</td>
      <td class="text-center warning-color" style="font-weight: 600;">${log.pitched}</td>
      <td class="text-center error-color" style="font-weight: 600;">${log.rejected}</td>
      <td class="text-center success-color" style="font-weight: 700;">${log.booked}</td>
      <td class="text-center font-display" style="font-weight: 700; color: var(--text-main);">
        <span class="${bookRate >= 8 ? 'success-color' : ''}">${bookRate}%</span>
      </td>
      <td class="text-right">
        <button class="btn btn-sm btn-outline-danger btn-delete-row" data-id="${log.id}" title="Delete Log">
          <i data-lucide="trash-2"></i>
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });

  // Re-bind click event triggers
  tbody.querySelectorAll('.btn-delete-row').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      deleteHistoryItem(id);
    });
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// -------------------------------------------------------------------------- //
//                       LIGHT-THEMED CHART.JS TRENDS                         //
// -------------------------------------------------------------------------- //

function toggleChart(type, btnElement) {
  state.currentChartType = type;
  document.querySelectorAll('.toggle-group .btn').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');
  renderCharts();
}

function renderCharts() {
  const canvas = document.getElementById('analytics-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const overlay = document.getElementById('chart-no-data');

  if (state.chartInstance) {
    state.chartInstance.destroy();
    state.chartInstance = null;
  }

  if (state.history.length === 0) {
    overlay.classList.add('show');
    return;
  } else {
    overlay.classList.remove('show');
  }

  // Reverse latest 10 items to plot chronologically
  const recentLogs = [...state.history].slice(0, 10).reverse();
  const labels = recentLogs.map(l => {
    const d = new Date(l.timestamp);
    return `${d.toLocaleDateString(undefined, {month: 'short', day: 'numeric'})} (${l.name.substring(0, 8)}...)`;
  });

  if (state.currentChartType === 'Reach Outs') {
    // Activity line chart
    const reachOutsData = recentLogs.map(l => l.total);
    const connects = recentLogs.map(l => l.picked);

    state.chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Total Reach Outs',
            data: reachOutsData,
            borderColor: '#2563eb', // Royal blue
            backgroundColor: 'rgba(37, 99, 235, 0.03)',
            borderWidth: 3,
            tension: 0.25,
            fill: true,
            pointBackgroundColor: '#2563eb',
            pointRadius: 4
          },
          {
            label: 'Total Connections',
            data: connects,
            borderColor: '#0ea5e9', // Info cyan
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.25,
            pointBackgroundColor: '#0ea5e9',
            pointRadius: 3
          }
        ]
      },
      options: getCommonChartConfig('Daily Outbound Outbound trends')
    });
  } else {
    // Stacked bookings chart
    const bookings = recentLogs.map(l => l.booked);
    const rejections = recentLogs.map(l => l.rejected);

    state.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Closed Bookings',
            data: bookings,
            backgroundColor: 'rgba(16, 185, 129, 0.85)', // Success Green
            borderColor: '#10b981',
            borderWidth: 1,
            borderRadius: 4
          },
          {
            label: 'Not Interested',
            data: rejections,
            backgroundColor: 'rgba(239, 68, 68, 0.8)', // Danger Red
            borderColor: '#ef4444',
            borderWidth: 1,
            borderRadius: 4
          }
        ]
      },
      options: {
        ...getCommonChartConfig('Campaign outcome allocations'),
        scales: {
          x: {
            stacked: true,
            grid: { color: '#f1f5f9' },
            ticks: { color: '#64748b', font: { family: 'Inter', size: 9 } }
          },
          y: {
            stacked: true,
            grid: { color: '#f1f5f9' },
            ticks: { color: '#64748b', stepSize: 2 }
          }
        }
      }
    });
  }
}

function getCommonChartConfig(sub) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#475569',
          font: { family: 'Inter', size: 10, weight: 600 }
        }
      },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#0f172a',
        bodyColor: '#475569',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        titleFont: { family: 'Outfit', weight: 'bold' },
        bodyFont: { family: 'Inter' }
      }
    },
    scales: {
      x: {
        grid: { color: '#f1f5f9' },
        ticks: { color: '#64748b', font: { family: 'Inter', size: 9 } }
      },
      y: {
        grid: { color: '#f1f5f9' },
        ticks: { color: '#64748b' }
      }
    }
  };
}

// -------------------------------------------------------------------------- //
//                       EXPORT HISTORICAL CAMPAIGNS TO CSV                   //
// -------------------------------------------------------------------------- //

function exportToCSV() {
  if (state.history.length === 0) {
    showNotification('No outreach log history available to export.');
    return;
  }

  let csv = 'data:text/csv;charset=utf-8,';
  csv += 'Timestamp,Team Member,Campaign Label,Notes,Duration (Hours:Mins),Sent,Connected,Reached Owner,Hang Up No Pitch,Pitched,Hang Up on Pitch,Not Interested / Something else,Booked,Booking Rate %\n';

  state.history.forEach(l => {
    const time = new Date(l.timestamp).toLocaleString();
    const rate = l.total > 0 ? Math.round((l.booked / l.total) * 100) : 0;
    const labelClean = `"${l.name.replace(/"/g, '""')}"`;
    const notesClean = `"${(l.notes || '').replace(/"/g, '""')}"`;
    const safeHangup = l.hangup || 0;
    const member = `"${(l.teamMember || 'Unknown').replace(/"/g, '""')}"`;
    
    // Format duration
    const durMs = l.durationMs || 0;
    const hrs = Math.floor(durMs / (3600 * 1000));
    const mins = Math.floor((durMs % (3600 * 1000)) / (60 * 1000));
    const pad = (n) => String(n).padStart(2, '0');
    const durStr = durMs > 0 ? `${hrs}:${pad(mins)}` : '--';
    
    csv += `${time},${member},${labelClean},${notesClean},${durStr},${l.total},${l.picked},${l.owner || 0},${l.hangupNoPitch || 0},${l.pitched},${safeHangup},${l.rejected},${l.booked},${rate}%\n`;
  });

  const uri = encodeURI(csv);
  const a = document.createElement('a');
  a.setAttribute('href', uri);
  a.setAttribute('download', `appoint_funnels_history_${Date.now()}.csv`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// -------------------------------------------------------------------------- //
//                         LIGHTWEIGHT PARTICLE CONFETTI                      //
// -------------------------------------------------------------------------- //

function triggerConfettiSplash() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#3b82f6', '#10b981', '#0ea5e9', '#f59e0b', '#ef4444', '#6366f1'];

  // Splash 80 floating elements from the lower half
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 80,
      y: canvas.height * 0.7,
      radius: Math.random() * 4 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 14,
      vy: -Math.random() * 12 - 8,
      gravity: 0.32,
      alpha: 1,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 8
    });
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let count = 0;

    particles.forEach(p => {
      if (p.alpha > 0) {
        count++;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.018;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (Math.random() > 0.5) {
          ctx.fillRect(-p.radius, -p.radius / 2, p.radius * 2, p.radius);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    });

    if (count > 0) {
      requestAnimationFrame(loop);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  loop();
}

// Keep canvas full viewport
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti-canvas');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});


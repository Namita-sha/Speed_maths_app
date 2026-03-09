
const TRICKS = [
  {
    tag: "Multiplication",
    title: "11× Any Number",
    desc: "Multiply any 2-digit number by 11 instantly.",
    example: "11 × 53\n→ split: 5 _ 3\n→ middle = 5+3 = 8\n→ answer: 583",
    full: `<strong>The rule:</strong> For any 2-digit number AB × 11:
    <div class="formula">A &nbsp;|&nbsp; (A+B) &nbsp;|&nbsp; B</div>
    If A+B ≥ 10, carry the 1 to the left digit.
    <div class="step">11 × 53 → 5 | 8 | 3 → <strong>583</strong></div>
    <div class="step">11 × 78 → 7 | 15 | 8 → carry → <strong>858</strong></div>
    <div class="step">11 × 99 → 9 | 18 | 9 → carry → <strong>1089</strong></div>
    <br><strong>Try:</strong> 11×24, 11×67, 11×85`
  },
  {
    tag: "Squaring",
    title: "Numbers Near 50",
    desc: "Square any number close to 50 in under 3 seconds.",
    example: "47² = ?\n→ d = 47 - 50 = -3\n→ (25 + d) = 22  →  hundreds\n→ d² = 09\n→ answer: 2209",
    full: `<strong>The rule:</strong> For n² where n is near 50, let d = n − 50:
    <div class="formula">n² = (25 + d) × 100 + d²</div>
    <div class="step">52² → d=+2 → 2700 + 4 = <strong>2704</strong></div>
    <div class="step">47² → d=−3 → 2200 + 9 = <strong>2209</strong></div>
    <div class="step">44² → d=−6 → 1900 + 36 = <strong>1936</strong></div>
    <br><strong>Try:</strong> 53², 48², 55², 46²`
  },
  {
    tag: "Multiplication",
    title: "2-Digit × 2-Digit",
    desc: "Crack any problem like 34×89 with the cross method.",
    example: "34 × 89\n→ 30×80 = 2400\n→ (30×9 + 4×80) = 590\n→ 4×9 = 36\n→ 2400+590+36 = 3026",
    full: `<strong>The cross method (FOIL):</strong>
    <div class="formula">AB × CD = AC×100 + (AD+BC)×10 + BD</div>
    <div class="step">34 × 89:<br>
    3×8 = 24 → ×100 = 2400<br>
    3×9 + 4×8 = 59 → ×10 = 590<br>
    4×9 = 36<br>
    Total = <strong>3026</strong></div>
    <div class="step">23 × 47:<br>2×4=8 →800 | 2×7+3×4=26 →260 | 3×7=21<br>= <strong>1081</strong></div>
    <br><strong>Tip:</strong> Work left-to-right, hold partial sums mentally.`
  },
  {
    tag: "Percentages",
    title: "Instant Percentages",
    desc: "Find any % of any number using anchor points.",
    example: "35% of 80\n→ 10% = 8\n→ 30% = 24\n→ 5% = 4\n→ 35% = 24 + 4 = 28",
    full: `<strong>The anchor system:</strong> Start from 10%, then build up.
    <div class="formula">10% = shift decimal left once</div>
    <div class="step">15% of 240: 10%=24, 5%=12 → <strong>36</strong></div>
    <div class="step">7% of 300: 1%=3, 7%=<strong>21</strong></div>
    <div class="step">35% of 80: 30%=24, 5%=4 → <strong>28</strong></div>
    <br><strong>Flip trick:</strong> X% of Y = Y% of X
    <div class="step">8% of 25 = 25% of 8 = <strong>2</strong> &nbsp;(way easier!)</div>`
  },
  {
    tag: "Squaring",
    title: "Ends in 5",
    desc: "Square ANY number ending in 5 instantly.",
    example: "85² = ?\n→ take 8, multiply by next number (9)\n→ 8 × 9 = 72\n→ append 25\n→ answer: 7225",
    full: `<strong>The rule:</strong> For any number N5 (ending in 5):
    <div class="formula">N5² = N×(N+1) followed by 25</div>
    <div class="step">25² → 2×3=6 → <strong>625</strong></div>
    <div class="step">35² → 3×4=12 → <strong>1225</strong></div>
    <div class="step">75² → 7×8=56 → <strong>5625</strong></div>
    <div class="step">105² → 10×11=110 → <strong>11025</strong></div>
    <br>Result <strong>always</strong> ends in 25. Works for any size number.`
  },
  {
    tag: "Division",
    title: "Divisibility Rules",
    desc: "Instantly check if any number divides cleanly.",
    example: "Is 7,836 divisible by 9?\n→ 7+8+3+6 = 24\n→ 2+4 = 6 ≠ 9\n→ No",
    full: `<strong>Quick rules to memorise:</strong>
    <div class="step"><strong>÷ 2 :</strong> last digit is even</div>
    <div class="step"><strong>÷ 3 :</strong> digit sum divisible by 3</div>
    <div class="step"><strong>÷ 4 :</strong> last 2 digits divisible by 4</div>
    <div class="step"><strong>÷ 5 :</strong> ends in 0 or 5</div>
    <div class="step"><strong>÷ 9 :</strong> digit sum divisible by 9</div>
    <div class="step"><strong>÷ 11:</strong> alternating digit sum = 0 or ±11<br>
    Ex: 2728 → (2+2)−(7+8) = −11 ✓ → divisible</div>
    <br><strong>Combine:</strong> ÷6 means divisible by both 2 and 3.`
  },
  {
    tag: "Addition",
    title: "Left-to-Right Adding",
    desc: "Add big numbers mentally by going left to right.",
    example: "487 + 356\n→ 400+300 = 700\n→ 80+50  = 130 → 830\n→ 7+6    = 13  → 843",
    full: `<strong>Why left-to-right?</strong> Your brain holds larger numbers better.
    <div class="formula">hundreds → tens → ones</div>
    <div class="step">648 + 275:<br>800 → +110 → 910 → +13 → <strong>923</strong></div>
    <div class="step">1456 + 887:<br>2200 → +130 → 2330 → +13 → <strong>2343</strong></div>
    <br><strong>Rounding shortcut:</strong>
    <div class="step">497 + 356 → 500+356 = 856 → −3 → <strong>853</strong></div>`
  },
  {
    tag: "Multiplication",
    title: "Multiply by 5 / 25 / 125",
    desc: "These are powers of 10 in disguise — exploit it.",
    example: "48 × 25 = ?\n→ 25 = 100 ÷ 4\n→ 48 ÷ 4 = 12\n→ 12 × 100 = 1200",
    full: `<strong>Core insight:</strong> 5=10/2 &nbsp; 25=100/4 &nbsp; 125=1000/8
    <div class="formula">n × 5 &nbsp; = (n ÷ 2) × 10</div>
    <div class="formula">n × 25 &nbsp;= (n ÷ 4) × 100</div>
    <div class="formula">n × 125 = (n ÷ 8) × 1000</div>
    <div class="step">36 × 5 = 18 × 10 = <strong>180</strong></div>
    <div class="step">44 × 25 = 11 × 100 = <strong>1100</strong></div>
    <div class="step">72 × 125 = 9 × 1000 = <strong>9000</strong></div>
    <br>Odd number? Adjust: 37×5 = (36×5)+5 = 180+5 = <strong>185</strong>`
  }
];

// ── State ──────────────────────────────────────────
const state = {
  diff: 'easy',
  qtype: 'mixed',
  score: 0,
  streak: 0,
  best: 0,
  questionNum: 0,
  correctCount: 0,
  currentAnswer: null,
  timerInterval: null,
  timeLeft: 0,
  totalTime: 0,
  scores: []
};

// ── DOM refs ───────────────────────────────────────
const quizBox     = document.getElementById('quiz-box');
const statScore   = document.getElementById('stat-score');
const statStreak  = document.getElementById('stat-streak');
const statBest    = document.getElementById('stat-best');
const scoresList  = document.getElementById('scores-list');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose  = document.getElementById('modal-close');
const modalTag    = document.getElementById('modal-tag');
const modalTitle  = document.getElementById('modal-title');
const modalBody   = document.getElementById('modal-body');

// ── Tab switching ──────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ── Option buttons (diff / type) ───────────────────
document.getElementById('diff-group').addEventListener('click', e => {
  if (!e.target.matches('.opt-btn')) return;
  document.querySelectorAll('#diff-group .opt-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  state.diff = e.target.dataset.value;
});

document.getElementById('type-group').addEventListener('click', e => {
  if (!e.target.matches('.opt-btn')) return;
  document.querySelectorAll('#type-group .opt-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  state.qtype = e.target.dataset.value;
});

// ── Tricks rendering ───────────────────────────────
const tricksGrid = document.getElementById('tricks-grid');

TRICKS.forEach((t, i) => {
  const card = document.createElement('div');
  card.className = 'trick-card';
  card.innerHTML = `
    <div class="card-tag">${t.tag}</div>
    <h3>${t.title}</h3>
    <p>${t.desc}</p>
    <pre>${t.example}</pre>
  `;
  card.addEventListener('click', () => openModal(i));
  tricksGrid.appendChild(card);
});

// ── Modal ──────────────────────────────────────────
function openModal(i) {
  const t = TRICKS[i];
  modalTag.textContent   = t.tag;
  modalTitle.textContent = t.title;
  modalBody.innerHTML    = t.full;
  modalOverlay.classList.add('open');
}

modalClose.addEventListener('click', () => modalOverlay.classList.remove('open'));
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) modalOverlay.classList.remove('open');
});

// ── Question generator ─────────────────────────────
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const types = state.qtype === 'mixed'
    ? ['multiply', 'squares', 'percent', 'add']
    : [state.qtype];
  const type = types[Math.floor(Math.random() * types.length)];
  const d    = state.diff;

  let q, a;

  switch (type) {
    case 'multiply':
      if (d === 'easy')   { let x=randInt(2,9),  y=randInt(2,9);  q=`${x} × ${y}`; a=x*y; }
      else if (d==='medium') { let x=randInt(11,25), y=randInt(2,12); q=`${x} × ${y}`; a=x*y; }
      else                { let x=randInt(12,99), y=randInt(12,30); q=`${x} × ${y}`; a=x*y; }
      break;

    case 'squares':
      if (d === 'easy')   { let n=randInt(2,12);  q=`${n}²`; a=n*n; }
      else if (d==='medium') { let n=randInt(11,30); q=`${n}²`; a=n*n; }
      else                { let n=randInt(25,60);  q=`${n}²`; a=n*n; }
      break;

    case 'percent': {
      const pcts = d==='easy' ? [10,20,25,50] : d==='medium' ? [5,10,15,20,25,30] : [7,11,13,17,22,35];
      const p = pcts[randInt(0, pcts.length-1)];
      const base = d==='easy' ? randInt(2,20)*10 : d==='medium' ? randInt(10,200) : randInt(50,500);
      q = `${p}% of ${base}`;
      a = Math.round(p * base / 100);
      break;
    }

    case 'add':
    default:
      if (d === 'easy')   { let x=randInt(10,99),   y=randInt(10,99);   q=`${x} + ${y}`; a=x+y; }
      else if (d==='medium') { let x=randInt(100,999),  y=randInt(100,999);  q=`${x} + ${y}`; a=x+y; }
      else                { let x=randInt(1000,9999), y=randInt(1000,9999); q=`${x} + ${y}`; a=x+y; }
      break;
  }

  return { q, a };
}

// ── Quiz flow ──────────────────────────────────────
// Use delegation — start-btn lives inside dynamically rerendered quizBox
quizBox.addEventListener('click', e => {
  if (e.target.id === 'start-btn' || e.target.id === 'replay-btn') startQuiz();
});

function startQuiz() {
  state.score        = 0;
  state.streak       = 0;
  state.questionNum  = 0;
  state.correctCount = 0;
  state.totalTime    = 0;
  updateStats();
  nextQuestion();
}

function nextQuestion() {
  if (state.questionNum >= 20) { endQuiz(); return; }

  const { q, a } = generateQuestion();
  state.currentAnswer = a;
  state.questionNum++;
  state.timeLeft = state.diff === 'easy' ? 20 : state.diff === 'medium' ? 15 : 10;

  quizBox.innerHTML = `
    <div class="question-view">
      <div class="q-meta">
        <span>Q ${state.questionNum} / 20</span>
        <span class="q-timer" id="q-timer">${state.timeLeft}</span>
      </div>
      <div class="q-text">${q} = ?</div>
      <input class="q-input" id="q-input" type="number" placeholder="?" autocomplete="off" />
      <div class="q-feedback" id="q-feedback"></div>
    </div>
  `;

  const input = document.getElementById('q-input');
  input.focus();
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submitAnswer(); });

  startTimer();
}

function startTimer() {
  clearInterval(state.timerInterval);
  const total = state.timeLeft;

  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    const el = document.getElementById('q-timer');
    if (!el) { clearInterval(state.timerInterval); return; }

    el.textContent = state.timeLeft;
    el.className = 'q-timer';
    if (state.timeLeft <= 3)  el.classList.add('danger');
    else if (state.timeLeft <= 6) el.classList.add('warn');

    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      markResult(false, `Time's up! Answer: ${state.currentAnswer}`);
      state.streak = 0;
      updateStats();
      setTimeout(nextQuestion, 1500);
    }
  }, 1000);
}

function submitAnswer() {
  clearInterval(state.timerInterval);
  const input = document.getElementById('q-input');
  if (!input) return;

  const val      = parseInt(input.value, 10);
  const timeUsed = (state.diff==='easy' ? 20 : state.diff==='medium' ? 15 : 10) - state.timeLeft;
  state.totalTime += timeUsed;

  if (val === state.currentAnswer) {
    state.correctCount++;
    state.streak++;
    const timeBonus   = Math.max(1, state.timeLeft);
    const streakBonus = state.streak >= 3 ? state.streak : 0;
    const pts         = 10 + timeBonus + streakBonus;
    state.score += pts;
    if (state.score > state.best) state.best = state.score;

    input.classList.add('correct');
    const msg = state.streak >= 3 ? `Streak ×${state.streak}! +${pts} pts` : `Correct! +${pts} pts`;
    markResult(true, msg);
  } else {
    state.streak = 0;
    input.classList.add('wrong');
    markResult(false, `Wrong. Answer: ${state.currentAnswer}`);
  }

  updateStats();
  setTimeout(nextQuestion, 1400);
}

function markResult(ok, msg) {
  const fb = document.getElementById('q-feedback');
  if (!fb) return;
  fb.textContent = msg;
  fb.className   = `q-feedback ${ok ? 'good' : 'bad'}`;
}

function updateStats() {
  statScore.textContent  = state.score;
  statStreak.textContent = state.streak;
  statBest.textContent   = state.best;
}

function endQuiz() {
  const pct    = Math.round(state.correctCount / 20 * 100);
  const avgT   = state.totalTime > 0 ? (state.totalTime / 20).toFixed(1) : '—';
  const grade  = pct >= 90 ? 'Beast Mode' : pct >= 70 ? 'Sharp' : pct >= 50 ? 'Decent' : 'Keep grinding';

  state.scores.unshift({ score: state.score, correct: state.correctCount, pct, avg: avgT, diff: state.diff });
  renderScores();

  quizBox.innerHTML = `
    <div class="result-view">
      <div class="result-score">${state.score}</div>
      <div class="result-grade">${grade}</div>
      <div class="result-stats">
        <div class="rs-item">
          <span class="rs-val">${state.correctCount}/20</span>
          <span class="rs-lbl">Correct</span>
        </div>
        <div class="rs-item">
          <span class="rs-val">${pct}%</span>
          <span class="rs-lbl">Accuracy</span>
        </div>
        <div class="rs-item">
          <span class="rs-val">${avgT}s</span>
          <span class="rs-lbl">Avg time</span>
        </div>
      </div>
      <button class="primary-btn" id="replay-btn">Play Again</button>
    </div>
  `;

}

// ── Scores panel ───────────────────────────────────
function renderScores() {
  if (state.scores.length === 0) {
    scoresList.innerHTML = '<p class="empty-msg">No scores yet. Play a round!</p>';
    return;
  }

  const rankClass = i => i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';

  scoresList.innerHTML = state.scores.slice(0, 10).map((s, i) => `
    <div class="score-row">
      <div class="score-rank ${rankClass(i)}">#${i + 1}</div>
      <div class="score-info">
        <div class="s-main">${s.correct}/20 correct &nbsp;·&nbsp; ${s.pct}% accuracy</div>
        <div class="s-sub">${s.diff} &nbsp;·&nbsp; avg ${s.avg}s per question</div>
      </div>
      <div class="score-pts">${s.score}</div>
    </div>
  `).join('');
}
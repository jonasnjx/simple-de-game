const iconWellSvg = `<svg class="card-icon-svg" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <ellipse cx="28" cy="13" rx="19" ry="6.5" fill="#6b4f33"/>
  <path d="M11 13 v24 q0 8 17 8 t17-8 V13" fill="#c9a06c" stroke="#5c4028" stroke-width="1.2"/>
  <ellipse cx="28" cy="13" rx="14" ry="4.5" fill="#1a2330" opacity="0.45"/>
  <path d="M19 28 q9 10 18 0" fill="none" stroke="#5ec8ff" stroke-width="2.4" stroke-linecap="round"/>
</svg>`;

const iconHoseSvg = `<svg class="card-icon-svg" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M10 30 Q22 6 40 16 T50 42" fill="none" stroke="#1e88e5" stroke-width="5.5" stroke-linecap="round"/>
  <circle cx="10" cy="30" r="5" fill="#4e342e"/>
  <path d="M46 38 L54 46" stroke="#90caf9" stroke-width="3.2" stroke-linecap="round"/>
</svg>`;

const POINTS_STAGE2_STANDARD = 200;
const POINTS_STAGE2_ADDITIONAL = 500;

const stage1Components = [
  {
    id: "source",
    name: "Raw water source",
    icon: iconWellSvg,
    tooltipWater: "A well which contains uncleaned, contaminated water.",
    tooltipDE:
      "In data engineering, this refers to the data source — for example SAP or on-premises SQL servers — where uncleaned data often accumulates before downstream processing.",
    desc: ""
  },
  {
    id: "pipe",
    name: "Water hose",
    icon: iconHoseSvg,
    tooltipWater: "A hose which helps transport this raw water to a destination.",
    tooltipDE:
      "In data engineering, this is like AWS Kinesis or Apache Kafka, which often batch or stream data into data lakes for downstream processing.",
    desc: ""
  },
  {
    id: "bucket",
    name: "Water buckets",
    icon: '<span class="icon-buckets" aria-hidden="true">🪣🪣🪣</span>',
    tooltipWater:
      "Buckets that hold water temporarily before it is sent to the water treatment plant for processing, aggregation, and storage.",
    tooltipDE:
      "In data engineering, this is similar to a data lake environment, which helps temporarily store data in many forms before downstream processing.",
    desc: ""
  },
  {
    id: "plant",
    name: "Water treatment plant",
    icon: "🏭",
    tooltipWater: "A facility that cleans, treats, and stores water for the community.",
    tooltipDE:
      "In data engineering, this is like a data warehouse or lakehouse, where data is processed so it can meet business needs such as reporting, analytics, or AI modelling.",
    desc: ""
  },
  {
    id: "villagers",
    name: "Villagers",
    icon: "🧑‍🤝‍🧑",
    tooltipWater: "The people in the village who rely on clean, reliable water every day.",
    tooltipDE:
      "In data engineering, this refers to business units or AI engineers who rely on clean, reliable data for their operations, models, and decisions.",
    desc: ""
  }
];

const stage2FlowComponents = [
  {
    id: "s2-source",
    name: "Raw water source",
    icon: iconWellSvg,
    tooltipWater: "A well which contains uncleaned, contaminated water.",
    tooltipDE:
      "In data engineering, this refers to the data source — for example SAP or on-premises SQL servers — where uncleaned data often accumulates before downstream processing.",
    points: POINTS_STAGE2_STANDARD
  },
  {
    id: "s2-agreement",
    name: "Water agreement",
    icon: "🤝",
    tooltipWater:
      "A water agreement that enforces how much water the source must supply, and requires the source owner to inform others in advance if anything will change.",
    tooltipDE:
      "In data engineering, this is like a data contract: defined policies on the data schema and expectations, with source owners expected to communicate early about upcoming schema or contract changes.",
    points: POINTS_STAGE2_ADDITIONAL
  },
  {
    id: "s2-hose",
    name: "Water hose",
    icon: iconHoseSvg,
    tooltipWater: "A hose which helps transport this raw water to a destination.",
    tooltipDE:
      "In data engineering, this is like AWS Kinesis or Apache Kafka, which often batch or stream data into data lakes for downstream processing.",
    points: POINTS_STAGE2_STANDARD
  },
  {
    id: "s2-cameras",
    name: "Water hose detection cameras",
    icon: "📹",
    tooltipWater:
      "Cameras that watch the water hose automatically and flag breakages or leaks before they turn into a village-wide outage.",
    tooltipDE:
      "In data engineering, this is like cloud monitoring (for example Amazon CloudWatch): observe pipelines for failures and latency, raise alarms, and in mature setups trigger automated fixes or rollbacks.",
    points: POINTS_STAGE2_ADDITIONAL
  },
  {
    id: "s2-buckets",
    name: "Water buckets",
    icon: '<span class="icon-buckets" aria-hidden="true">🪣🪣🪣</span>',
    tooltipWater:
      "Buckets that hold water temporarily before it is sent to the water treatment plant for processing, aggregation, and storage.",
    tooltipDE:
      "In data engineering, this is similar to a data lake environment, which helps temporarily store data in many forms before downstream processing.",
    points: POINTS_STAGE2_STANDARD
  },
  {
    id: "s2-manager",
    name: "Water manager",
    icon: "🧑‍💼",
    tooltipWater:
      "A manager who supervises transporting buckets to the water treatment plant for downstream processing, keeping day-to-day operations running without breakage.",
    tooltipDE:
      "In data engineering, this is orchestration — tools such as Apache Airflow or dbt workflows that schedule jobs, manage dependencies, and coordinate movement of data through the pipeline.",
    points: POINTS_STAGE2_ADDITIONAL
  },
  {
    id: "s2-plant",
    name: "Water treatment plant",
    icon: "🏭",
    tooltipWater: "A facility that cleans, treats, and stores water for the community.",
    tooltipDE:
      "In data engineering, this is like a data warehouse or lakehouse, where data is processed so it can meet business needs such as reporting, analytics, or AI modelling.",
    points: POINTS_STAGE2_STANDARD
  },
  {
    id: "s2-surveillance",
    name: "Water treatment plant surveillance",
    icon: "🛡️",
    tooltipWater:
      "Monitoring of the treatment plant to catch breakages and outages early, with backups or contingency supply so the village is protected during failures.",
    tooltipDE:
      "In data engineering, this resembles anomaly detection and disaster recovery on critical warehouses or lakehouses: watch for drift or failures, alert early, and rely on backups or failover so reporting and models stay available during outages.",
    points: POINTS_STAGE2_ADDITIONAL
  },
  {
    id: "s2-villagers",
    name: "Villagers",
    icon: "🧑‍🤝‍🧑",
    tooltipWater: "The people in the village who rely on clean, reliable water every day.",
    tooltipDE:
      "In data engineering, this refers to business units or AI engineers who rely on clean, reliable data for their operations, models, and decisions.",
    points: POINTS_STAGE2_STANDARD
  },
  {
    id: "s2-feedback-channel",
    name: "Villagers' feedback channel",
    icon: "💬",
    tooltipWater:
      "A way to ask villagers for feedback even when the water supply seems fine, so subtle issues surface before they become emergencies.",
    tooltipDE:
      "In data engineering, this is a proactive feedback loop with downstream users — regular check-ins and channels for input — so you can strengthen the pipeline before small gaps become incidents.",
    points: POINTS_STAGE2_ADDITIONAL
  }
];

const stage1Order = stage1Components.map((item) => item.id);
const stage2Order = stage2FlowComponents.map((item) => item.id);

function shuffleArray(ids) {
  const copy = ids.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Random order different from canonical pipeline order (when length ≥ 2). */
function jumbledOrder(canonicalIds) {
  if (canonicalIds.length < 2) {
    return canonicalIds.slice();
  }
  let attempt = shuffleArray(canonicalIds);
  let guard = 0;
  while (attempt.join("\0") === canonicalIds.join("\0") && guard < 48) {
    attempt = shuffleArray(canonicalIds);
    guard += 1;
  }
  return attempt;
}

function ordersEqual(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

const POINTS_PER_STAGE1_STEP = 200;
const DAY2_NO_WATER_PENALTY = 2000;

const successMessages = [
  "Great work!",
  "Awesome!",
  "Keep going!",
  "You're rocking it!"
];

const errorMessages = [
  "Wrong order — try again.",
  "Not quite. Check the pipeline.",
  "That one's out of sequence.",
  "Incorrect order. Try another.",
  "Not that one — think about what comes next."
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let displayedScore = 0;
let scoreTweenRaf = null;

const els = {
  cardsContainer: document.getElementById("cardsContainer"),
  stage1Feedback: document.getElementById("stage1Feedback"),
  day1CelebrationOverlay: document.getElementById("day1CelebrationOverlay"),
  day2CrisisOverlay: document.getElementById("day2CrisisOverlay"),
  day1CelebrationContinueBtn: document.getElementById("day1CelebrationContinueBtn"),
  day2CrisisContinueBtn: document.getElementById("day2CrisisContinueBtn"),
  stage2Panel: document.getElementById("stage2Panel"),
  stage2Cards: document.getElementById("stage2Cards"),
  stage2Feedback: document.getElementById("stage2Feedback"),
  gamePanel: document.getElementById("gamePanel"),
  successPanel: document.getElementById("successPanel"),
  stepDay1: document.getElementById("stepDay1"),
  stepDay2: document.getElementById("stepDay2"),
  progressFill: document.getElementById("progressFill"),
  restartBtn: document.getElementById("restartBtn"),
  stage1HintBtn: document.getElementById("stage1HintBtn"),
  stage2HintBtn: document.getElementById("stage2HintBtn"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  scoreValue: document.getElementById("scoreValue"),
  buildSource: document.getElementById("build-source"),
  buildPipe: document.getElementById("build-pipe"),
  buildBucket: document.getElementById("build-bucket"),
  buildPlant: document.getElementById("build-plant"),
  buildVillagers: document.getElementById("build-villagers"),
  d2BuildSource: document.getElementById("d2-build-source"),
  d2BuildAgreement: document.getElementById("d2-build-agreement"),
  d2BuildHose: document.getElementById("d2-build-hose"),
  d2BuildCameras: document.getElementById("d2-build-cameras"),
  d2BuildBuckets: document.getElementById("d2-build-buckets"),
  d2BuildManager: document.getElementById("d2-build-manager"),
  d2BuildPlant: document.getElementById("d2-build-plant"),
  d2BuildSurveillance: document.getElementById("d2-build-surveillance"),
  d2BuildVillagers: document.getElementById("d2-build-villagers"),
  d2BuildFeedbackChannel: document.getElementById("d2-build-feedback-channel")
};

const stage2BuildMap = {
  "s2-source": "d2BuildSource",
  "s2-agreement": "d2BuildAgreement",
  "s2-hose": "d2BuildHose",
  "s2-cameras": "d2BuildCameras",
  "s2-buckets": "d2BuildBuckets",
  "s2-manager": "d2BuildManager",
  "s2-plant": "d2BuildPlant",
  "s2-surveillance": "d2BuildSurveillance",
  "s2-villagers": "d2BuildVillagers",
  "s2-feedback-channel": "d2BuildFeedbackChannel"
};

const state = {
  stage: 1,
  stage1Index: 0,
  stage2Index: 0,
  score: 0,
  stage1CardOrder: jumbledOrder(stage1Order),
  stage2CardOrder: jumbledOrder(stage2Order)
};

let day1CompleteTimeoutId = null;
let day2CrisisPenaltyApplied = false;

function setDay1PlayLocked(locked) {
  els.gamePanel.classList.toggle("day2-phase", locked);
}

const buildStepMap = {
  source: "buildSource",
  pipe: "buildPipe",
  bucket: "buildBucket",
  plant: "buildPlant",
  villagers: "buildVillagers"
};

function renderCard(component, handlers = {}, options = {}) {
  const extraClass = typeof options === "string" ? options : options.extraClass || "";
  const showDesc = options.showDesc !== false && Boolean(component.desc);
  const hasDualTip = Boolean(component.tooltipWater && component.tooltipDE);
  const showHoverTip =
    options.showHoverTip !== false && (hasDualTip || Boolean(component.tooltip));

  const card = document.createElement("button");
  card.type = "button";
  card.className = `card ${extraClass}`.trim();
  card.dataset.id = component.id;
  if (showHoverTip) {
    card.classList.add("card--with-tip");
  }
  const ariaTip = hasDualTip
    ? `${component.tooltipWater} ${component.tooltipDE}`
    : component.tooltip || "";
  card.setAttribute("aria-label", `${component.name}. ${ariaTip}`);

  const tipHtml = showHoverTip
    ? hasDualTip
      ? `<span class="card-tip" role="tooltip"><span class="card-tip-line card-tip-line--water">${component.tooltipWater}</span><span class="card-tip-line card-tip-line--de">${component.tooltipDE}</span></span>`
      : `<span class="card-tip" role="tooltip">${component.tooltip}</span>`
    : "";
  const descHtml = showDesc ? `<p class="desc">${component.desc}</p>` : "";

  card.innerHTML = `
    ${tipHtml}
    <div class="icon">${component.icon}</div>
    <p class="name">${component.name}</p>
    ${descHtml}
  `;

  if (handlers.click) {
    card.addEventListener("click", handlers.click);
  }

  return card;
}

function formatPoints(value) {
  return Number(value).toLocaleString("en-GB");
}

function updateScoreDisplay() {
  if (!els.scoreValue) {
    return;
  }

  els.scoreValue.classList.remove("negative", "positive");
  if (state.score < 0) {
    els.scoreValue.classList.add("negative");
  } else if (state.score > 0) {
    els.scoreValue.classList.add("positive");
  }

  if (state.score === displayedScore) {
    els.scoreValue.textContent = formatPoints(state.score);
    return;
  }

  if (scoreTweenRaf !== null) {
    cancelAnimationFrame(scoreTweenRaf);
    scoreTweenRaf = null;
    const parsed = Number(String(els.scoreValue.textContent).replace(/,/g, ""));
    if (!Number.isNaN(parsed)) {
      displayedScore = parsed;
    }
  }

  const startScore = displayedScore;
  const endScore = state.score;
  const startTime = performance.now();
  const duration = 300;

  function tick(now) {
    const t = Math.min(1, (now - startTime) / duration);
    const current = startScore + (endScore - startScore) * t;
    els.scoreValue.textContent = formatPoints(Math.round(current));
    if (t < 1) {
      scoreTweenRaf = requestAnimationFrame(tick);
    } else {
      displayedScore = endScore;
      scoreTweenRaf = null;
      els.scoreValue.textContent = formatPoints(endScore);
    }
  }

  scoreTweenRaf = requestAnimationFrame(tick);
}

function setFeedback(target, message = "", kind = "") {
  target.textContent = message;
  target.classList.remove("error-text", "success-text");
  if (kind === "error") {
    target.classList.add("error-text");
  }
  if (kind === "success") {
    target.classList.add("success-text");
  }
}

function updateProgress() {
  const d1 = els.stepDay1;
  const d2 = els.stepDay2;

  if (state.stage === 1) {
    d1.classList.add("active");
    d1.classList.remove("done");
    d2.classList.remove("active", "done");
    els.progressFill.style.width = "35%";
    return;
  }

  if (state.stage === 2) {
    d1.classList.remove("active");
    d1.classList.add("done");
    d2.classList.add("active");
    d2.classList.remove("done");
    els.progressFill.style.width = "70%";
    return;
  }

  d1.classList.remove("active");
  d1.classList.add("done");
  d2.classList.remove("active");
  d2.classList.add("done");
  els.progressFill.style.width = "100%";
}

function renderStage1() {
  els.cardsContainer.innerHTML = "";
  const byId = Object.fromEntries(stage1Components.map((c) => [c.id, c]));
  state.stage1CardOrder.forEach((id, index) => {
    const component = byId[id];
    if (!component) {
      return;
    }
    const card = renderCard(
      component,
      {
        click: () => handleStage1Click(component.id)
      },
      { showDesc: false, showHoverTip: true }
    );

    card.style.setProperty("--card-stagger", `${index * 55}ms`);

    const pipelineIndex = stage1Order.indexOf(id);
    if (pipelineIndex !== -1 && pipelineIndex < state.stage1Index) {
      card.classList.add("correct", "locked");
      if (state.stage1Index > 0 && pipelineIndex === state.stage1Index - 1) {
        card.classList.add("card--just-correct");
      }
    }
    els.cardsContainer.appendChild(card);
  });
}

function applyStage1Hint() {
  if (els.gamePanel.classList.contains("day2-phase")) {
    return;
  }
  if (ordersEqual(state.stage1CardOrder, stage1Order)) {
    setFeedback(els.stage1Feedback, "Icons are already in pipeline order.", "");
    return;
  }
  state.stage1CardOrder = stage1Order.slice();
  renderStage1();
  setFeedback(els.stage1Feedback, "Hint applied — components are in pipeline order.", "success");
}

function handleWrongCard(cardId, container) {
  const root = container || els.cardsContainer;
  const card = root.querySelector(`.card[data-id="${cardId}"]`);
  if (!card) {
    return;
  }

  card.classList.add("error");
  setTimeout(() => {
    card.classList.remove("error");
  }, 350);
}

function handleStage1Click(id) {
  if (els.gamePanel.classList.contains("day2-phase")) {
    return;
  }
  const clickedIndex = stage1Order.indexOf(id);
  if (clickedIndex === -1) {
    return;
  }

  if (clickedIndex < state.stage1Index) {
    const oldIdx = state.stage1Index;
    if (day1CompleteTimeoutId !== null) {
      clearTimeout(day1CompleteTimeoutId);
      day1CompleteTimeoutId = null;
    }
    const stepsRemoved = oldIdx - clickedIndex;
    state.score -= POINTS_PER_STAGE1_STEP * stepsRemoved;
    if (
      oldIdx === stage1Order.length &&
      clickedIndex < stage1Order.length &&
      day2CrisisPenaltyApplied
    ) {
      state.score += DAY2_NO_WATER_PENALTY;
      day2CrisisPenaltyApplied = false;
    }
    state.stage = 1;
    state.stage1Index = clickedIndex;
    syncBuildSceneToProgress();
    updateScoreDisplay();
    setDay1PlayLocked(false);
    els.day1CelebrationOverlay.classList.add("hidden");
    els.day2CrisisOverlay.classList.add("hidden");
    setFeedback(
      els.stage1Feedback,
      "That step was removed. The pipeline rewinds from here — try the next step again.",
      ""
    );
    renderStage1();
    return;
  }

  const expected = stage1Order[state.stage1Index];
  if (id !== expected) {
    setFeedback(els.stage1Feedback, pickRandom(errorMessages), "error");
    handleWrongCard(id, els.cardsContainer);
    return;
  }

  state.stage1Index += 1;
  state.score += POINTS_PER_STAGE1_STEP;
  syncBuildSceneToProgress();
  updateScoreDisplay();
  setFeedback(els.stage1Feedback, pickRandom(successMessages), "success");
  renderStage1();

  if (state.stage1Index === stage1Order.length) {
    setFeedback(els.stage1Feedback, "Pipeline completed for Day 1.", "success");
    day1CompleteTimeoutId = setTimeout(() => {
      day1CompleteTimeoutId = null;
      els.day1CelebrationOverlay.classList.remove("hidden");
    }, 420);
  }
}

function showDay2Crisis() {
  els.day1CelebrationOverlay.classList.add("hidden");
  if (!day2CrisisPenaltyApplied) {
    state.score -= DAY2_NO_WATER_PENALTY;
    day2CrisisPenaltyApplied = true;
    updateScoreDisplay();
  }
  state.stage = 2;
  setDay1PlayLocked(true);
  updateProgress();
  els.day2CrisisOverlay.classList.remove("hidden");
}

function syncDay2BuildScene() {
  stage2Order.forEach((stepId, i) => {
    const key = stage2BuildMap[stepId];
    if (!key || !els[key]) {
      return;
    }
    if (i < state.stage2Index) {
      els[key].classList.add("visible");
    } else {
      els[key].classList.remove("visible");
    }
  });
}

function renderStage2() {
  els.stage2Cards.innerHTML = "";
  const byId = Object.fromEntries(stage2FlowComponents.map((c) => [c.id, c]));
  state.stage2CardOrder.forEach((id, index) => {
    const component = byId[id];
    if (!component) {
      return;
    }
    const card = renderCard(
      component,
      {
        click: () => handleStage2Click(component.id)
      },
      { showDesc: false, showHoverTip: true }
    );

    card.style.setProperty("--card-stagger", `${index * 55}ms`);

    const pipelineIndex = stage2Order.indexOf(id);
    if (pipelineIndex !== -1 && pipelineIndex < state.stage2Index) {
      card.classList.add("correct", "locked");
      if (state.stage2Index > 0 && pipelineIndex === state.stage2Index - 1) {
        card.classList.add("card--just-correct");
      }
    }
    els.stage2Cards.appendChild(card);
  });
}

function applyStage2Hint() {
  if (ordersEqual(state.stage2CardOrder, stage2Order)) {
    setFeedback(els.stage2Feedback, "Icons are already in pipeline order.", "");
    return;
  }
  state.stage2CardOrder = stage2Order.slice();
  renderStage2();
  setFeedback(els.stage2Feedback, "Hint applied — components are in pipeline order.", "success");
}

function handleStage2Click(id) {
  const clickedIndex = stage2Order.indexOf(id);
  if (clickedIndex === -1) {
    return;
  }

  if (clickedIndex < state.stage2Index) {
    const oldIdx = state.stage2Index;
    for (let i = clickedIndex; i < oldIdx; i += 1) {
      state.score -= stage2FlowComponents[i].points;
    }
    state.stage2Index = clickedIndex;
    syncDay2BuildScene();
    updateScoreDisplay();
    setFeedback(
      els.stage2Feedback,
      "That step was removed. Continue from here.",
      ""
    );
    renderStage2();
    return;
  }

  const expected = stage2Order[state.stage2Index];
  if (id !== expected) {
    setFeedback(els.stage2Feedback, pickRandom(errorMessages), "error");
    handleWrongCard(id, els.stage2Cards);
    return;
  }

  const pts = stage2FlowComponents[state.stage2Index].points;
  state.stage2Index += 1;
  state.score += pts;
  syncDay2BuildScene();
  updateScoreDisplay();
  setFeedback(els.stage2Feedback, pickRandom(successMessages), "success");
  renderStage2();

  if (state.stage2Index === stage2Order.length) {
    setFeedback(els.stage2Feedback, "The enhanced system is complete. The village is safe!", "success");
    setTimeout(() => {
      els.stage2Panel.classList.add("hidden");
      state.stage = 3;
      updateProgress();
      els.successPanel.classList.remove("hidden");
      els.successPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 420);
  }
}

function goToStage2() {
  state.stage = 2;
  state.stage2Index = 0;
  updateProgress();
  els.day2CrisisOverlay.classList.add("hidden");
  els.stage2Panel.classList.remove("hidden");
  syncDay2BuildScene();
  els.stage2Panel.scrollIntoView({ behavior: "smooth", block: "start" });
  setFeedback(
    els.stage2Feedback,
    "Click components in the correct order to fix and improve the system.",
    ""
  );
  renderStage2();
}

function syncBuildSceneToProgress() {
  stage1Order.forEach((stepId, i) => {
    const key = buildStepMap[stepId];
    if (!key || !els[key]) {
      return;
    }
    if (i < state.stage1Index) {
      els[key].classList.add("visible");
    } else {
      els[key].classList.remove("visible");
    }
  });
}

function resetGame() {
  if (day1CompleteTimeoutId !== null) {
    clearTimeout(day1CompleteTimeoutId);
    day1CompleteTimeoutId = null;
  }

  if (scoreTweenRaf !== null) {
    cancelAnimationFrame(scoreTweenRaf);
    scoreTweenRaf = null;
  }
  displayedScore = 0;

  state.stage = 1;
  state.stage1Index = 0;
  state.stage2Index = 0;
  state.score = 0;
  day2CrisisPenaltyApplied = false;
  state.stage1CardOrder = jumbledOrder(stage1Order);
  state.stage2CardOrder = jumbledOrder(stage2Order);

  setFeedback(els.stage1Feedback, "");
  setFeedback(els.stage2Feedback, "");
  els.day1CelebrationOverlay.classList.add("hidden");
  els.day2CrisisOverlay.classList.add("hidden");
  els.stage2Panel.classList.add("hidden");
  els.successPanel.classList.add("hidden");
  els.gamePanel.classList.remove("hidden");
  setDay1PlayLocked(false);
  syncBuildSceneToProgress();
  syncDay2BuildScene();
  updateScoreDisplay();

  updateProgress();
  renderStage1();
}

function attachEvents() {
  els.day1CelebrationContinueBtn.addEventListener("click", showDay2Crisis);
  els.day2CrisisContinueBtn.addEventListener("click", goToStage2);
  els.restartBtn.addEventListener("click", resetGame);
  els.playAgainBtn.addEventListener("click", resetGame);
  els.stage1HintBtn.addEventListener("click", applyStage1Hint);
  els.stage2HintBtn.addEventListener("click", applyStage2Hint);
}

function init() {
  attachEvents();
  updateProgress();
  updateScoreDisplay();
  renderStage1();
}

init();

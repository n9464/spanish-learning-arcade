const PRONOUNS = [
  { key: "yo", label: "yo" },
  { key: "tu", label: "tu" },
  { key: "el", label: "el / ella / usted" },
  { key: "nosotros", label: "nosotros / nosotras" },
  { key: "vosotros", label: "vosotros / vosotras" },
  { key: "ellos", label: "ellos / ellas / ustedes" },
];
const PRONOUNS_NO_VOSOTROS = PRONOUNS.filter((pronoun) => pronoun.key !== "vosotros");

const PROMPT_PRONOUN = {
  yo: "yo",
  tu: "tu",
  el: "el",
  nosotros: "nosotros",
  vosotros: "vosotros",
  ellos: "ellos",
};

const TENSES = {
  present: { label: "Present", labelEs: "presente" },
  preterite: { label: "Preterite", labelEs: "preterito" },
  imperfect: { label: "Imperfect", labelEs: "imperfecto" },
  future: { label: "Future", labelEs: "futuro" },
  conditional: { label: "Conditional", labelEs: "condicional" },
};

const REGULAR_VERBS = [
  { infinitive: "hablar", meaning: "to speak" },
  { infinitive: "estudiar", meaning: "to study" },
  { infinitive: "trabajar", meaning: "to work" },
  { infinitive: "comprar", meaning: "to buy" },
  { infinitive: "caminar", meaning: "to walk" },
  { infinitive: "ayudar", meaning: "to help" },
  { infinitive: "comer", meaning: "to eat" },
  { infinitive: "beber", meaning: "to drink" },
  { infinitive: "aprender", meaning: "to learn" },
  { infinitive: "correr", meaning: "to run" },
  { infinitive: "vivir", meaning: "to live" },
  { infinitive: "escribir", meaning: "to write" },
  { infinitive: "abrir", meaning: "to open" },
  { infinitive: "recibir", meaning: "to receive" },
  { infinitive: "compartir", meaning: "to share" },
  { infinitive: "leer", meaning: "to read" },
  { infinitive: "escuchar", meaning: "to listen" },
  { infinitive: "mirar", meaning: "to watch" },
];

const IRREGULAR_VERBS = [
  {
    infinitive: "ser",
    meaning: "to be",
    forms: {
      present: {
        yo: "soy",
        tu: "eres",
        el: "es",
        nosotros: "somos",
        vosotros: "sois",
        ellos: "son",
      },
      preterite: {
        yo: "fui",
        tu: "fuiste",
        el: "fue",
        nosotros: "fuimos",
        vosotros: "fuisteis",
        ellos: "fueron",
      },
      imperfect: {
        yo: "era",
        tu: "eras",
        el: "era",
        nosotros: "eramos",
        vosotros: "erais",
        ellos: "eran",
      },
      future: {
        yo: "sere",
        tu: "seras",
        el: "sera",
        nosotros: "seremos",
        vosotros: "sereis",
        ellos: "seran",
      },
    },
  },
  {
    infinitive: "ir",
    meaning: "to go",
    forms: {
      present: {
        yo: "voy",
        tu: "vas",
        el: "va",
        nosotros: "vamos",
        vosotros: "vais",
        ellos: "van",
      },
      preterite: {
        yo: "fui",
        tu: "fuiste",
        el: "fue",
        nosotros: "fuimos",
        vosotros: "fuisteis",
        ellos: "fueron",
      },
      imperfect: {
        yo: "iba",
        tu: "ibas",
        el: "iba",
        nosotros: "ibamos",
        vosotros: "ibais",
        ellos: "iban",
      },
      future: {
        yo: "ire",
        tu: "iras",
        el: "ira",
        nosotros: "iremos",
        vosotros: "ireis",
        ellos: "iran",
      },
    },
  },
  {
    infinitive: "estar",
    meaning: "to be",
    forms: {
      present: {
        yo: "estoy",
        tu: "estas",
        el: "esta",
        nosotros: "estamos",
        vosotros: "estais",
        ellos: "estan",
      },
      preterite: {
        yo: "estuve",
        tu: "estuviste",
        el: "estuvo",
        nosotros: "estuvimos",
        vosotros: "estuvisteis",
        ellos: "estuvieron",
      },
      imperfect: {
        yo: "estaba",
        tu: "estabas",
        el: "estaba",
        nosotros: "estabamos",
        vosotros: "estabais",
        ellos: "estaban",
      },
      future: {
        yo: "estare",
        tu: "estaras",
        el: "estara",
        nosotros: "estaremos",
        vosotros: "estareis",
        ellos: "estaran",
      },
    },
  },
  {
    infinitive: "tener",
    meaning: "to have",
    forms: {
      present: {
        yo: "tengo",
        tu: "tienes",
        el: "tiene",
        nosotros: "tenemos",
        vosotros: "teneis",
        ellos: "tienen",
      },
      preterite: {
        yo: "tuve",
        tu: "tuviste",
        el: "tuvo",
        nosotros: "tuvimos",
        vosotros: "tuvisteis",
        ellos: "tuvieron",
      },
      imperfect: {
        yo: "tenia",
        tu: "tenias",
        el: "tenia",
        nosotros: "teniamos",
        vosotros: "teniais",
        ellos: "tenian",
      },
      future: {
        yo: "tendre",
        tu: "tendras",
        el: "tendra",
        nosotros: "tendremos",
        vosotros: "tendreis",
        ellos: "tendran",
      },
    },
  },
  {
    infinitive: "venir",
    meaning: "to come",
    forms: {
      present: {
        yo: "vengo",
        tu: "vienes",
        el: "viene",
        nosotros: "venimos",
        vosotros: "venis",
        ellos: "vienen",
      },
      preterite: {
        yo: "vine",
        tu: "viniste",
        el: "vino",
        nosotros: "vinimos",
        vosotros: "vinisteis",
        ellos: "vinieron",
      },
      imperfect: {
        yo: "venia",
        tu: "venias",
        el: "venia",
        nosotros: "veniamos",
        vosotros: "veniais",
        ellos: "venian",
      },
      future: {
        yo: "vendre",
        tu: "vendras",
        el: "vendra",
        nosotros: "vendremos",
        vosotros: "vendreis",
        ellos: "vendran",
      },
    },
  },
  {
    infinitive: "hacer",
    meaning: "to do / make",
    forms: {
      present: {
        yo: "hago",
        tu: "haces",
        el: "hace",
        nosotros: "hacemos",
        vosotros: "haceis",
        ellos: "hacen",
      },
      preterite: {
        yo: "hice",
        tu: "hiciste",
        el: "hizo",
        nosotros: "hicimos",
        vosotros: "hicisteis",
        ellos: "hicieron",
      },
      imperfect: {
        yo: "hacia",
        tu: "hacias",
        el: "hacia",
        nosotros: "haciamos",
        vosotros: "haciais",
        ellos: "hacian",
      },
      future: {
        yo: "hare",
        tu: "haras",
        el: "hara",
        nosotros: "haremos",
        vosotros: "hareis",
        ellos: "haran",
      },
    },
  },
  {
    infinitive: "poder",
    meaning: "to be able to",
    forms: {
      present: {
        yo: "puedo",
        tu: "puedes",
        el: "puede",
        nosotros: "podemos",
        vosotros: "podeis",
        ellos: "pueden",
      },
      preterite: {
        yo: "pude",
        tu: "pudiste",
        el: "pudo",
        nosotros: "pudimos",
        vosotros: "pudisteis",
        ellos: "pudieron",
      },
      imperfect: {
        yo: "podia",
        tu: "podias",
        el: "podia",
        nosotros: "podiamos",
        vosotros: "podiais",
        ellos: "podian",
      },
      future: {
        yo: "podre",
        tu: "podras",
        el: "podra",
        nosotros: "podremos",
        vosotros: "podreis",
        ellos: "podran",
      },
    },
  },
  {
    infinitive: "decir",
    meaning: "to say",
    forms: {
      present: {
        yo: "digo",
        tu: "dices",
        el: "dice",
        nosotros: "decimos",
        vosotros: "decis",
        ellos: "dicen",
      },
      preterite: {
        yo: "dije",
        tu: "dijiste",
        el: "dijo",
        nosotros: "dijimos",
        vosotros: "dijisteis",
        ellos: "dijeron",
      },
      imperfect: {
        yo: "decia",
        tu: "decias",
        el: "decia",
        nosotros: "deciamos",
        vosotros: "deciais",
        ellos: "decian",
      },
      future: {
        yo: "dire",
        tu: "diras",
        el: "dira",
        nosotros: "diremos",
        vosotros: "direis",
        ellos: "diran",
      },
    },
  },
  {
    infinitive: "poner",
    meaning: "to put",
    forms: {
      present: {
        yo: "pongo",
        tu: "pones",
        el: "pone",
        nosotros: "ponemos",
        vosotros: "poneis",
        ellos: "ponen",
      },
      preterite: {
        yo: "puse",
        tu: "pusiste",
        el: "puso",
        nosotros: "pusimos",
        vosotros: "pusisteis",
        ellos: "pusieron",
      },
      imperfect: {
        yo: "ponia",
        tu: "ponias",
        el: "ponia",
        nosotros: "poniamos",
        vosotros: "poniais",
        ellos: "ponian",
      },
      future: {
        yo: "pondre",
        tu: "pondras",
        el: "pondra",
        nosotros: "pondremos",
        vosotros: "pondreis",
        ellos: "pondran",
      },
    },
  },
  {
    infinitive: "salir",
    meaning: "to leave / go out",
    forms: {
      present: {
        yo: "salgo",
        tu: "sales",
        el: "sale",
        nosotros: "salimos",
        vosotros: "salis",
        ellos: "salen",
      },
      preterite: {
        yo: "sali",
        tu: "saliste",
        el: "salio",
        nosotros: "salimos",
        vosotros: "salisteis",
        ellos: "salieron",
      },
      imperfect: {
        yo: "salia",
        tu: "salias",
        el: "salia",
        nosotros: "saliamos",
        vosotros: "saliais",
        ellos: "salian",
      },
      future: {
        yo: "saldre",
        tu: "saldras",
        el: "saldra",
        nosotros: "saldremos",
        vosotros: "saldreis",
        ellos: "saldran",
      },
    },
  },
  {
    infinitive: "dormir",
    meaning: "to sleep",
    forms: {
      present: {
        yo: "duermo",
        tu: "duermes",
        el: "duerme",
        nosotros: "dormimos",
        vosotros: "dormis",
        ellos: "duermen",
      },
      preterite: {
        yo: "dormi",
        tu: "dormiste",
        el: "durmio",
        nosotros: "dormimos",
        vosotros: "dormisteis",
        ellos: "durmieron",
      },
      imperfect: {
        yo: "dormia",
        tu: "dormias",
        el: "dormia",
        nosotros: "dormiamos",
        vosotros: "dormiais",
        ellos: "dormian",
      },
      future: {
        yo: "dormire",
        tu: "dormiras",
        el: "dormira",
        nosotros: "dormiremos",
        vosotros: "dormireis",
        ellos: "dormiran",
      },
    },
  },
  {
    infinitive: "pedir",
    meaning: "to ask for",
    forms: {
      present: {
        yo: "pido",
        tu: "pides",
        el: "pide",
        nosotros: "pedimos",
        vosotros: "pedis",
        ellos: "piden",
      },
      preterite: {
        yo: "pedi",
        tu: "pediste",
        el: "pidio",
        nosotros: "pedimos",
        vosotros: "pedisteis",
        ellos: "pidieron",
      },
      imperfect: {
        yo: "pedia",
        tu: "pedias",
        el: "pedia",
        nosotros: "pediamos",
        vosotros: "pediais",
        ellos: "pedian",
      },
      future: {
        yo: "pedire",
        tu: "pediras",
        el: "pedira",
        nosotros: "pediremos",
        vosotros: "pedireis",
        ellos: "pediran",
      },
    },
  },
];

const ACCENT_REGEX = /[\u0300-\u036f]/g;
const STATS_STORAGE_KEY = "zombie-conjugation-survival-stats-v1";
const PROGRESS_STORAGE_KEY = "zombie-conjugation-survival-progress-v1";
const DEFAULT_TENSES = ["present"];
const ZOMBIE_BASE_STEP_MS = 120;
const ZOMBIE_SPAWN_ANIM_MS = 520;
const ZOMBIE_EXPLODE_ANIM_MS = 640;
const SAFEHOUSE_X = 50;
const SAFEHOUSE_Y = 50;
const SAFEHOUSE_HIT_RADIUS = 8.5;
const SAFEHOUSE_SIEGE_RING = 7.6;
const SAFEHOUSE_SIEGE_TICK_MIN_MS = 1400;
const SAFEHOUSE_SIEGE_TICK_MAX_MS = 2000;
const SAFEHOUSE_SIEGE_INITIAL_DELAY_MS = 520;
const SAFEHOUSE_SMASH_ANIM_MS = 360;
const WEBGL_MAX_PIXEL_RATIO = 2;
const WEBGL_ZOMBIE_MODEL_URL = "https://threejs.org/examples/models/gltf/Soldier.glb";
const WEBGL_GROUND_COLOR = 0x0d1521;

const elements = {
  difficultySelect: document.querySelector("#difficultySelect"),
  irregularToggle: document.querySelector("#irregularToggle"),
  vosotrosToggle: document.querySelector("#vosotrosToggle"),
  learningToggle: document.querySelector("#learningToggle"),
  tenseChoices: [...document.querySelectorAll(".tense-choice")],
  startBtn: document.querySelector("#startBtn"),
  setupMessage: document.querySelector("#setupMessage"),

  scoreValue: document.querySelector("#scoreValue"),
  waveValue: document.querySelector("#waveValue"),
  baseValue: document.querySelector("#baseValue"),
  zombieCountValue: document.querySelector("#zombieCountValue"),
  killsValue: document.querySelector("#killsValue"),
  streakValue: document.querySelector("#streakValue"),
  adaptiveValue: document.querySelector("#adaptiveValue"),
  statusValue: document.querySelector("#statusValue"),

  zombieLane: document.querySelector("#zombieLane"),
  targetLabel: document.querySelector("#targetLabel"),
  promptText: document.querySelector("#promptText"),
  metaText: document.querySelector("#metaText"),
  learningHintText: document.querySelector("#learningHintText"),

  answerInput: document.querySelector("#answerInput"),
  revealBtn: document.querySelector("#revealBtn"),
  submitBtn: document.querySelector("#submitBtn"),
  feedbackText: document.querySelector("#feedbackText"),
  safehouse: document.querySelector("#safehouse"),
};

const state = {
  active: false,
  intermission: false,
  difficulty: "survivor",
  includeIrregular: false,
  includeVosotros: false,
  learningMode: false,
  selectedTenses: [...DEFAULT_TENSES],
  verbPool: [],
  profile: null,
  bestWave: 0,
  bestScore: 0,
  totalKills: 0,
  sessionsPlayed: 0,
  lastPlayedAt: "",

  maxCampaignWave: 10,
  wave: 0,
  score: 0,
  streak: 0,
  kills: 0,
  baseHealth: 0,
  maxBaseHealth: 0,

  spawnedThisWave: 0,
  toSpawnThisWave: 0,
  waveSpawnInterval: 1300,
  waveSpeed: 1,
  waveMaxOnField: 3,

  zombies: [],
  nextZombieId: 1,
  challengeCounter: 0,

  spawnTimerId: null,
  tickTimerId: null,
  waveDelayId: null,
  lastTickAt: 0,
  safehouseHitTimerId: null,
  runId: 0,
  menuOpen: false,

  resultText: "",

  conjugationStats: Object.create(null),
};

const webgl = {
  enabled: false,
  initialized: false,
  renderer: null,
  scene: null,
  camera: null,
  rafId: null,
  resizeHandler: null,
  zombieVisuals: new Map(),
  worldHalfX: 20,
  worldHalfZ: 12,
  modelLoadState: "idle",
  zombieTemplate: null,
  zombieClips: [],
  lastFrameAt: 0,
  safehouseRing: null,
  safehouseRingMaterial: null,
};

const REGULAR_BANK = REGULAR_VERBS.map((verb) => ({
  ...verb,
  irregular: false,
  forms: buildRegularForms(verb.infinitive),
}));

const IRREGULAR_BANK = IRREGULAR_VERBS.map((verb) => ({
  ...verb,
  irregular: true,
  forms: withDerivedTenses(verb.forms),
}));

function buildRegularForms(infinitive) {
  const root = infinitive.slice(0, -2);
  const ending = infinitive.slice(-2);

  const present = {
    yo: `${root}o`,
    tu: `${root}${ending === "ar" ? "as" : "es"}`,
    el: `${root}${ending === "ar" ? "a" : "e"}`,
    nosotros: `${root}${ending === "ar" ? "amos" : ending === "er" ? "emos" : "imos"}`,
    vosotros: `${root}${ending === "ar" ? "ais" : ending === "er" ? "eis" : "is"}`,
    ellos: `${root}${ending === "ar" ? "an" : "en"}`,
  };

  const preterite = {
    yo: `${root}${ending === "ar" ? "e" : "i"}`,
    tu: `${root}${ending === "ar" ? "aste" : "iste"}`,
    el: `${root}${ending === "ar" ? "o" : "io"}`,
    nosotros: `${root}${ending === "ar" ? "amos" : "imos"}`,
    vosotros: `${root}${ending === "ar" ? "asteis" : "isteis"}`,
    ellos: `${root}${ending === "ar" ? "aron" : "ieron"}`,
  };

  const imperfect = {
    yo: `${root}${ending === "ar" ? "aba" : "ia"}`,
    tu: `${root}${ending === "ar" ? "abas" : "ias"}`,
    el: `${root}${ending === "ar" ? "aba" : "ia"}`,
    nosotros: `${root}${ending === "ar" ? "abamos" : "iamos"}`,
    vosotros: `${root}${ending === "ar" ? "abais" : "iais"}`,
    ellos: `${root}${ending === "ar" ? "aban" : "ian"}`,
  };

  const future = {
    yo: `${infinitive}e`,
    tu: `${infinitive}as`,
    el: `${infinitive}a`,
    nosotros: `${infinitive}emos`,
    vosotros: `${infinitive}eis`,
    ellos: `${infinitive}an`,
  };

  const conditional = {
    yo: `${infinitive}ia`,
    tu: `${infinitive}ias`,
    el: `${infinitive}ia`,
    nosotros: `${infinitive}iamos`,
    vosotros: `${infinitive}iais`,
    ellos: `${infinitive}ian`,
  };

  return { present, preterite, imperfect, future, conditional };
}

function deriveConditionalFromFuture(forms) {
  const yoFuture = forms?.future?.yo;
  if (!yoFuture) {
    return null;
  }

  const stem = yoFuture.endsWith("e") ? yoFuture.slice(0, -1) : yoFuture;
  return {
    yo: `${stem}ia`,
    tu: `${stem}ias`,
    el: `${stem}ia`,
    nosotros: `${stem}iamos`,
    vosotros: `${stem}iais`,
    ellos: `${stem}ian`,
  };
}

function withDerivedTenses(forms) {
  const nextForms = { ...forms };
  if (!nextForms.conditional) {
    const conditional = deriveConditionalFromFuture(nextForms);
    if (conditional) {
      nextForms.conditional = conditional;
    }
  }
  return nextForms;
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(ACCENT_REGEX, "")
    .replace(/\s+/g, " ")
    .trim();
}

function sanitizeAnswer(text) {
  return normalize(text).replace(
    /^(yo|tu|el|ella|usted|nosotros|nosotras|vosotros|vosotras|ellos|ellas|ustedes)\s+/,
    "",
  );
}

function randomOf(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function weightedPick(items) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  if (total <= 0) {
    return randomOf(items);
  }

  let roll = Math.random() * total;
  for (const item of items) {
    roll -= item.weight;
    if (roll <= 0) {
      return item;
    }
  }

  return items[items.length - 1];
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function collectSelectedTenses() {
  return elements.tenseChoices.filter((box) => box.checked).map((box) => box.value);
}

function sanitizeSelectedTenses(savedTenses) {
  if (!Array.isArray(savedTenses)) {
    return [...DEFAULT_TENSES];
  }

  const validChoices = new Set(elements.tenseChoices.map((choice) => choice.value));
  return [...new Set(savedTenses.filter((tense) => typeof tense === "string" && validChoices.has(tense)))];
}

function buildConfigurationFromControls() {
  return {
    difficulty: elements.difficultySelect.value,
    includeIrregular: elements.irregularToggle.checked,
    includeVosotros: elements.vosotrosToggle.checked,
    learningMode: Boolean(elements.learningToggle?.checked),
    selectedTenses: collectSelectedTenses(),
  };
}

function profileForDifficulty() {
  if (state.difficulty === "nightmare") {
    return {
      baseHealth: 5,
      baseWaveCount: 6,
      spawnInterval: 980,
      zombieSpeed: 0.84,
      maxOnField: 5,
      pointsBase: 14,
      missPush: 20,
      tickMs: 40,
    };
  }

  if (state.difficulty === "hard") {
    return {
      baseHealth: 6,
      baseWaveCount: 5,
      spawnInterval: 1180,
      zombieSpeed: 0.72,
      maxOnField: 4,
      pointsBase: 12,
      missPush: 18,
      tickMs: 46,
    };
  }

  return {
    baseHealth: 8,
    baseWaveCount: 4,
    spawnInterval: 1380,
    zombieSpeed: 0.6,
    maxOnField: 3,
    pointsBase: 10,
    missPush: 15,
    tickMs: 52,
  };
}

function buildVerbPool() {
  const list = [...REGULAR_BANK];
  if (state.includeIrregular) {
    return [...list, ...IRREGULAR_BANK];
  }
  return list;
}

function getActivePronouns() {
  return state.includeVosotros ? PRONOUNS : PRONOUNS_NO_VOSOTROS;
}

function getConjugationKey(verbInfinitive, tense, pronounKey) {
  return `${verbInfinitive}|${tense}|${pronounKey}`;
}

function getConjugationStats(key) {
  if (!state.conjugationStats[key]) {
    state.conjugationStats[key] = {
      seen: 0,
      shown: 0,
      correct: 0,
      wrong: 0,
      timeout: 0,
      pass: 0,
      consecutiveCorrect: 0,
      lastSeenCounter: -1,
    };
  }
  return state.conjugationStats[key];
}

function adaptiveWeightFor(stats) {
  const accuracy = stats.seen === 0 ? 0.55 : stats.correct / stats.seen;
  const pressure = stats.wrong * 1.35 + stats.timeout * 2.2 + stats.pass * 2;
  const lowAccuracyBoost = stats.seen === 0 ? 0.7 : (1 - accuracy) * 2.8;
  const masteryRelief = Math.min(2.7, stats.consecutiveCorrect * 0.45);

  const roundsSinceSeen =
    stats.lastSeenCounter < 0 ? 99 : Math.max(0, state.challengeCounter - stats.lastSeenCounter);

  let recencyFactor = 1;
  if (roundsSinceSeen <= 1) {
    recencyFactor = 0.35;
  } else if (roundsSinceSeen === 2) {
    recencyFactor = 0.7;
  } else if (roundsSinceSeen >= 6) {
    recencyFactor = 1.18;
  }

  return Math.max(0.15, (1 + pressure + lowAccuracyBoost - masteryRelief) * recencyFactor);
}

function updateConjugationStats(challenge, outcome) {
  const stats = getConjugationStats(challenge.adaptiveKey);
  stats.seen += 1;

  if (outcome === "correct") {
    stats.correct += 1;
    stats.consecutiveCorrect += 1;
    persistConjugationStats();
    return;
  }

  stats.wrong += 1;
  stats.consecutiveCorrect = 0;

  if (outcome === "timeout") {
    stats.timeout += 1;
  }

  if (outcome === "pass") {
    stats.pass += 1;
  }

  persistConjugationStats();
}

function persistConjugationStats() {
  try {
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(state.conjugationStats));
  } catch (_err) {
    // Ignore storage failures (private mode / quota / disabled storage).
  }
}

function loadConjugationStats() {
  try {
    const raw = localStorage.getItem(STATS_STORAGE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return;
    }

    state.conjugationStats = Object.create(null);
    for (const [key, value] of Object.entries(parsed)) {
      if (!value || typeof value !== "object") {
        continue;
      }

      state.conjugationStats[key] = {
        seen: Number(value.seen) || 0,
        shown: Number(value.shown) || 0,
        correct: Number(value.correct) || 0,
        wrong: Number(value.wrong) || 0,
        timeout: Number(value.timeout) || 0,
        pass: Number(value.pass) || 0,
        consecutiveCorrect: Number(value.consecutiveCorrect) || 0,
        // Keep recency session-local to avoid stale ordering after reloads.
        lastSeenCounter: -1,
      };
    }
  } catch (_err) {
    state.conjugationStats = Object.create(null);
  }
}

function persistCampaignProgress(configuration = null) {
  const savedConfig = configuration || {
    difficulty: state.difficulty,
    includeIrregular: state.includeIrregular,
    includeVosotros: state.includeVosotros,
    learningMode: state.learningMode,
    selectedTenses: state.selectedTenses,
  };

  try {
    localStorage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify({
        difficulty: savedConfig.difficulty,
        includeIrregular: savedConfig.includeIrregular,
        includeVosotros: savedConfig.includeVosotros,
        learningMode: savedConfig.learningMode,
        selectedTenses: savedConfig.selectedTenses,
        bestWave: state.bestWave,
        bestScore: state.bestScore,
        totalKills: state.totalKills,
        sessionsPlayed: state.sessionsPlayed,
        lastPlayedAt: state.lastPlayedAt,
      }),
    );
  } catch (_err) {
    // Ignore storage failures (private mode / quota / disabled storage).
  }
}

function loadCampaignProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return;
    }

    if (parsed.difficulty === "survivor" || parsed.difficulty === "hard" || parsed.difficulty === "nightmare") {
      state.difficulty = parsed.difficulty;
    }
    state.includeIrregular = Boolean(parsed.includeIrregular);
    state.includeVosotros = Boolean(parsed.includeVosotros);
    state.learningMode = Boolean(parsed.learningMode);
    state.selectedTenses = sanitizeSelectedTenses(parsed.selectedTenses);
    state.bestWave = Math.max(0, Math.floor(Number(parsed.bestWave) || 0));
    state.bestScore = Math.max(0, Math.floor(Number(parsed.bestScore) || 0));
    state.totalKills = Math.max(0, Math.floor(Number(parsed.totalKills) || 0));
    state.sessionsPlayed = Math.max(0, Math.floor(Number(parsed.sessionsPlayed) || 0));
    state.lastPlayedAt = typeof parsed.lastPlayedAt === "string" ? parsed.lastPlayedAt : "";
  } catch (_err) {
    state.difficulty = "survivor";
    state.includeIrregular = false;
    state.includeVosotros = false;
    state.learningMode = false;
    state.selectedTenses = [...DEFAULT_TENSES];
    state.bestWave = 0;
    state.bestScore = 0;
    state.totalKills = 0;
    state.sessionsPlayed = 0;
    state.lastPlayedAt = "";
  }
}

function syncConfigurationFromControls() {
  const configuration = buildConfigurationFromControls();
  state.difficulty = configuration.difficulty;
  state.includeIrregular = configuration.includeIrregular;
  state.includeVosotros = configuration.includeVosotros;
  state.learningMode = configuration.learningMode;
  state.selectedTenses = configuration.selectedTenses;
}

function applySavedConfigurationToControls() {
  if (elements.difficultySelect) {
    elements.difficultySelect.value = state.difficulty;
  }
  if (elements.irregularToggle) {
    elements.irregularToggle.checked = state.includeIrregular;
  }
  if (elements.vosotrosToggle) {
    elements.vosotrosToggle.checked = state.includeVosotros;
  }
  if (elements.learningToggle) {
    elements.learningToggle.checked = state.learningMode;
  }
  for (const tenseChoice of elements.tenseChoices) {
    tenseChoice.checked = state.selectedTenses.includes(tenseChoice.value);
  }
}

function rememberCampaignProgress() {
  state.bestWave = Math.max(state.bestWave, state.wave);
  state.bestScore = Math.max(state.bestScore, state.score);
  persistCampaignProgress();
}

function buildSetupSummary() {
  const stats = [];
  if (state.bestWave > 0) {
    stats.push(`Best wave ${state.bestWave}`);
  }
  if (state.bestScore > 0) {
    stats.push(`Best score ${state.bestScore}`);
  }
  if (state.totalKills > 0) {
    stats.push(`${state.totalKills} total kills`);
  }

  if (stats.length === 0) {
    return state.learningMode
      ? "Example: yo - tener (presente) -> type tengo | Learning mode reveal is ON."
      : "Example: yo - tener (presente) -> type tengo";
  }

  return `Saved progress loaded. ${stats.join(" | ")}.${state.learningMode ? " Learning mode is ON." : ""}`;
}

function buildWeightedPrompt() {
  const candidates = [];
  const activePronouns = getActivePronouns();

  for (const verb of state.verbPool) {
    for (const tense of state.selectedTenses) {
      for (const pronoun of activePronouns) {
        const answer = verb.forms[tense][pronoun.key];
        const adaptiveKey = getConjugationKey(verb.infinitive, tense, pronoun.key);
        const stats = getConjugationStats(adaptiveKey);
        const weight = adaptiveWeightFor(stats);

        candidates.push({
          verb,
          tense,
          pronoun,
          answer,
          adaptiveKey,
          adaptiveWeight: weight,
          stats,
          weight,
        });
      }
    }
  }

  if (candidates.length === 0) {
    return null;
  }

  const chosen = weightedPick(candidates);
  chosen.stats.shown += 1;
  chosen.stats.lastSeenCounter = state.challengeCounter;
  state.challengeCounter += 1;

  return {
    verb: chosen.verb,
    tense: chosen.tense,
    pronoun: chosen.pronoun,
    answer: chosen.answer,
    adaptiveKey: chosen.adaptiveKey,
    adaptiveWeight: chosen.adaptiveWeight,
  };
}

function formatPrompt(challenge) {
  return `${PROMPT_PRONOUN[challenge.pronoun.key]} - ${challenge.verb.infinitive} (${TENSES[challenge.tense].labelEs})`;
}

function setFeedback(message, type = "note") {
  elements.feedbackText.textContent = message;
  elements.feedbackText.className = `feedback ${type}`;
}

function updateLearningUi() {
  if (!elements.revealBtn || !elements.learningHintText) {
    return;
  }

  elements.revealBtn.hidden = !state.learningMode;

  const target = getNearestZombie();
  const canReveal =
    state.learningMode &&
    state.active &&
    !state.intermission &&
    !state.menuOpen &&
    Boolean(target);

  elements.revealBtn.disabled = !canReveal;

  if (
    !state.learningMode ||
    !state.active ||
    state.intermission ||
    !target ||
    !target.answerRevealed
  ) {
    elements.learningHintText.hidden = true;
    elements.learningHintText.textContent = "";
    return;
  }

  elements.learningHintText.hidden = false;
  elements.learningHintText.textContent = `Revealed answer: ${target.challenge.answer} | Practice clear only, no score bonus.`;
}

function addFeed(_type, _text) {
  // Battle log removed by design.
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

function getThree() {
  if (typeof window === "undefined") {
    return null;
  }
  return window.THREE || null;
}

function initWebglIfPossible() {
  if (webgl.initialized) {
    return;
  }

  const THREE = getThree();
  if (!THREE || !elements.zombieLane) {
    return;
  }

  webgl.initialized = true;

  try {
    webgl.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
  } catch (_err) {
    webgl.enabled = false;
    return;
  }

  webgl.enabled = true;
  webgl.renderer.setPixelRatio(Math.min(WEBGL_MAX_PIXEL_RATIO, window.devicePixelRatio || 1));
  webgl.renderer.setClearColor(0x000000, 0);
  if ("outputColorSpace" in webgl.renderer && THREE.SRGBColorSpace) {
    webgl.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }
  webgl.renderer.domElement.className = "zombie-webgl-canvas";

  elements.zombieLane.innerHTML = "";
  elements.zombieLane.appendChild(webgl.renderer.domElement);

  webgl.scene = new THREE.Scene();
  webgl.scene.fog = new THREE.Fog(WEBGL_GROUND_COLOR, 16, 64);

  webgl.camera = new THREE.PerspectiveCamera(46, 1, 0.1, 150);
  webgl.camera.position.set(0, 18, 28);
  webgl.camera.lookAt(0, 0, 0);

  const hemi = new THREE.HemisphereLight(0x9cc5ff, 0x1c2735, 0.72);
  webgl.scene.add(hemi);

  const key = new THREE.DirectionalLight(0xe7f5ff, 0.8);
  key.position.set(10, 24, 11);
  webgl.scene.add(key);

  const fill = new THREE.PointLight(0x76a9d0, 0.34, 56);
  fill.position.set(-13, 11, -11);
  webgl.scene.add(fill);

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(32, 72),
    new THREE.MeshStandardMaterial({
      color: WEBGL_GROUND_COLOR,
      transparent: true,
      opacity: 0.42,
      roughness: 1,
      metalness: 0,
    }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  webgl.scene.add(ground);

  const safehouseRingMaterial = new THREE.MeshBasicMaterial({
    color: 0x65a8d4,
    transparent: true,
    opacity: 0.28,
    side: THREE.DoubleSide,
  });
  const safehouseRing = new THREE.Mesh(
    new THREE.RingGeometry(1.45, 2.6, 56),
    safehouseRingMaterial,
  );
  safehouseRing.rotation.x = -Math.PI / 2;
  safehouseRing.position.y = 0.05;
  webgl.scene.add(safehouseRing);
  webgl.safehouseRing = safehouseRing;
  webgl.safehouseRingMaterial = safehouseRingMaterial;

  webgl.resizeHandler = handleWebglResize;
  window.addEventListener("resize", webgl.resizeHandler);
  handleWebglResize();

  webgl.lastFrameAt =
    typeof performance !== "undefined" && typeof performance.now === "function"
      ? performance.now()
      : Date.now();
  webgl.rafId = requestAnimationFrame(tickWebglFrame);

  loadZombieGltfModel();
}

function handleWebglResize() {
  if (!webgl.enabled || !webgl.renderer || !webgl.camera || !elements.zombieLane) {
    return;
  }

  const rect = elements.zombieLane.getBoundingClientRect();
  const width = Math.max(1, Math.floor(rect.width));
  const height = Math.max(1, Math.floor(rect.height));
  const aspect = width / height;

  webgl.renderer.setSize(width, height, false);
  webgl.camera.aspect = aspect;
  webgl.camera.updateProjectionMatrix();

  webgl.worldHalfX = 10.5 + aspect * 10.4;
  webgl.worldHalfZ = 12;
}

function tintZombieMaterial(material) {
  if (!material) {
    return material;
  }

  const tinted = material.clone();
  if (tinted.color && typeof tinted.color.offsetHSL === "function") {
    tinted.color.offsetHSL(0.2, -0.2, -0.2);
  }
  if ("roughness" in tinted) {
    tinted.roughness = clamp((Number(tinted.roughness) || 0.75) + 0.1, 0, 1);
  }
  if ("metalness" in tinted) {
    tinted.metalness = 0;
  }
  return tinted;
}

function applyZombieTint(root) {
  root.traverse((node) => {
    if (!node.isMesh || !node.material) {
      return;
    }
    if (Array.isArray(node.material)) {
      node.material = node.material.map((material) => tintZombieMaterial(material));
    } else {
      node.material = tintZombieMaterial(node.material);
    }
    node.castShadow = false;
    node.receiveShadow = false;
    node.frustumCulled = false;
  });
}

function loadZombieGltfModel() {
  if (!webgl.enabled || webgl.modelLoadState !== "idle") {
    return;
  }

  const THREE = getThree();
  if (!THREE || typeof THREE.GLTFLoader !== "function") {
    webgl.modelLoadState = "failed";
    return;
  }

  webgl.modelLoadState = "loading";
  const loader = new THREE.GLTFLoader();
  loader.load(
    WEBGL_ZOMBIE_MODEL_URL,
    (gltf) => {
      webgl.modelLoadState = "ready";
      webgl.zombieTemplate = gltf.scene || null;
      webgl.zombieClips = Array.isArray(gltf.animations) ? gltf.animations : [];
      if (webgl.zombieTemplate) {
        applyZombieTint(webgl.zombieTemplate);
      }
      upgradeFallbackVisualsToGltf();
    },
    undefined,
    () => {
      webgl.modelLoadState = "failed";
    },
  );
}

function createFallbackZombieModel() {
  const THREE = getThree();
  if (!THREE) {
    return null;
  }

  const root = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: 0x6f8f62, roughness: 0.9, metalness: 0 });
  const shirt = new THREE.MeshStandardMaterial({ color: 0x445d6a, roughness: 0.88, metalness: 0 });
  const pants = new THREE.MeshStandardMaterial({ color: 0x35495b, roughness: 0.92, metalness: 0 });

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.44, 0.44), skin);
  head.position.set(0, 1.62, 0);
  root.add(head);

  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.72, 0.4), shirt);
  torso.position.set(0, 1.08, 0);
  root.add(torso);

  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.62, 0.2), skin);
  armL.position.set(-0.44, 1.09, 0);
  root.add(armL);
  const armR = armL.clone();
  armR.position.x = 0.44;
  root.add(armR);

  const legL = new THREE.Mesh(new THREE.BoxGeometry(0.23, 0.74, 0.24), pants);
  legL.position.set(-0.16, 0.38, 0);
  root.add(legL);
  const legR = legL.clone();
  legR.position.x = 0.16;
  root.add(legR);

  root.scale.setScalar(randomRange(1, 1.08));
  return root;
}

function cloneZombieModelInstance() {
  const THREE = getThree();
  if (!THREE) {
    return { model: null, mixer: null, isFallback: true };
  }

  if (webgl.modelLoadState === "ready" && webgl.zombieTemplate) {
    let model = null;
    if (THREE.SkeletonUtils && typeof THREE.SkeletonUtils.clone === "function") {
      model = THREE.SkeletonUtils.clone(webgl.zombieTemplate);
    } else {
      model = webgl.zombieTemplate.clone(true);
    }
    if (model) {
      applyZombieTint(model);
      model.scale.setScalar(randomRange(1.03, 1.14));
      model.rotation.y = Math.PI;
      const mixer = webgl.zombieClips.length > 0 ? new THREE.AnimationMixer(model) : null;
      return { model, mixer, isFallback: false };
    }
  }

  return { model: createFallbackZombieModel(), mixer: null, isFallback: true };
}

function findClipByPatterns(patterns) {
  for (const pattern of patterns) {
    const clip = webgl.zombieClips.find((candidate) => pattern.test(candidate.name || ""));
    if (clip) {
      return clip;
    }
  }
  return webgl.zombieClips[0] || null;
}

function setZombieVisualAnimation(visual, mode) {
  if (!visual || !visual.mixer) {
    return;
  }

  let clip = null;
  if (mode === "siege") {
    clip = findClipByPatterns([/attack|punch|kick|melee|hit/i, /run/i, /walk/i, /idle/i]);
  } else {
    clip = findClipByPatterns([/walk/i, /run/i, /idle/i]);
  }
  if (!clip) {
    return;
  }

  const actionKey = `${mode}:${clip.name || "clip"}`;
  if (visual.currentActionKey === actionKey) {
    if (visual.currentAction) {
      visual.currentAction.timeScale = mode === "siege" ? 1.12 : 0.88;
    }
    return;
  }

  let nextAction = visual.actions[actionKey];
  if (!nextAction) {
    nextAction = visual.mixer.clipAction(clip);
    visual.actions[actionKey] = nextAction;
  }

  nextAction.reset();
  nextAction.fadeIn(0.2);
  nextAction.timeScale = mode === "siege" ? 1.12 : 0.88;
  nextAction.play();

  if (visual.currentAction && visual.currentAction !== nextAction) {
    visual.currentAction.fadeOut(0.2);
  }

  visual.currentAction = nextAction;
  visual.currentActionKey = actionKey;
}

function disposeObject3D(root) {
  if (!root) {
    return;
  }
  root.traverse((node) => {
    if (node.geometry) {
      node.geometry.dispose();
    }
    if (!node.material) {
      return;
    }
    if (Array.isArray(node.material)) {
      for (const material of node.material) {
        if (material && typeof material.dispose === "function") {
          material.dispose();
        }
      }
      return;
    }
    if (typeof node.material.dispose === "function") {
      node.material.dispose();
    }
  });
}

function removeZombieVisualById(id) {
  if (!webgl.enabled) {
    return;
  }

  const visual = webgl.zombieVisuals.get(id);
  if (!visual) {
    return;
  }

  if (visual.currentAction) {
    visual.currentAction.stop();
  }
  if (visual.mixer) {
    visual.mixer.stopAllAction();
  }
  if (visual.root && visual.root.parent) {
    visual.root.parent.remove(visual.root);
  }
  disposeObject3D(visual.root);
  webgl.zombieVisuals.delete(id);
}

function clearZombieVisuals() {
  if (!webgl.enabled) {
    return;
  }
  for (const id of [...webgl.zombieVisuals.keys()]) {
    removeZombieVisualById(id);
  }
}

function createZombieVisual(zombie) {
  if (!webgl.enabled || !webgl.scene) {
    return null;
  }

  const THREE = getThree();
  if (!THREE) {
    return null;
  }

  const instance = cloneZombieModelInstance();
  if (!instance.model) {
    return null;
  }

  const root = new THREE.Group();
  root.userData.zombieId = zombie.id;
  root.add(instance.model);
  root.scale.set(1, 1, 1);
  webgl.scene.add(root);

  const visual = {
    root,
    model: instance.model,
    mixer: instance.mixer,
    actions: Object.create(null),
    currentAction: null,
    currentActionKey: "",
    isFallback: instance.isFallback,
    deathStartedAt: 0,
    bobSeed: Math.random() * Math.PI * 2,
  };

  webgl.zombieVisuals.set(zombie.id, visual);
  setZombieVisualAnimation(visual, zombie.sieging ? "siege" : "walk");
  return visual;
}

function upgradeFallbackVisualsToGltf() {
  if (!webgl.enabled || !webgl.scene || webgl.modelLoadState !== "ready") {
    return;
  }

  for (const [id, visual] of webgl.zombieVisuals.entries()) {
    if (!visual.isFallback) {
      continue;
    }

    const zombie = state.zombies.find((item) => item.id === id);
    if (!zombie || zombie.exploding) {
      continue;
    }

    const replacement = cloneZombieModelInstance();
    if (!replacement.model || replacement.isFallback) {
      continue;
    }

    visual.root.remove(visual.model);
    disposeObject3D(visual.model);
    visual.model = replacement.model;
    visual.mixer = replacement.mixer;
    visual.actions = Object.create(null);
    visual.currentAction = null;
    visual.currentActionKey = "";
    visual.isFallback = false;
    visual.root.add(replacement.model);
    setZombieVisualAnimation(visual, zombie.sieging ? "siege" : "walk");
  }
}

function syncZombieVisuals() {
  if (!webgl.enabled) {
    return;
  }

  const liveIds = new Set();
  for (const zombie of state.zombies) {
    liveIds.add(zombie.id);
    if (!webgl.zombieVisuals.has(zombie.id)) {
      createZombieVisual(zombie);
    }
  }

  for (const id of [...webgl.zombieVisuals.keys()]) {
    if (!liveIds.has(id)) {
      removeZombieVisualById(id);
    }
  }
}

function lerpAngle(from, to, amount) {
  let delta = to - from;
  while (delta > Math.PI) {
    delta -= Math.PI * 2;
  }
  while (delta < -Math.PI) {
    delta += Math.PI * 2;
  }
  return from + delta * clamp(amount, 0, 1);
}

function updateZombieVisual(zombie, deltaSec, nowMs) {
  if (!webgl.enabled) {
    return;
  }

  const visual = webgl.zombieVisuals.get(zombie.id) || createZombieVisual(zombie);
  if (!visual) {
    return;
  }

  const worldX = ((zombie.x - 50) / 50) * webgl.worldHalfX;
  const worldZ = ((zombie.y - 50) / 50) * webgl.worldHalfZ;
  const followAmount = 1 - Math.exp(-deltaSec * (zombie.exploding ? 16 : 9));

  visual.root.position.x += (worldX - visual.root.position.x) * followAmount;
  visual.root.position.z += (worldZ - visual.root.position.z) * followAmount;

  if (zombie.exploding) {
    if (!visual.deathStartedAt) {
      visual.deathStartedAt = nowMs;
    }

    const deathProgress = clamp((nowMs - visual.deathStartedAt) / ZOMBIE_EXPLODE_ANIM_MS, 0, 1);
    const scale = Math.max(0.03, (1 - deathProgress) * (1 + deathProgress * 0.38));
    visual.root.scale.setScalar(scale);
    visual.root.position.y = deathProgress * 1.5;
    visual.root.rotation.y += deltaSec * 8;

    if (visual.mixer) {
      visual.mixer.update(deltaSec * 1.18);
    }
    return;
  }

  visual.deathStartedAt = 0;
  const settle = 1 - Math.exp(-deltaSec * 14);
  visual.root.scale.x += (1 - visual.root.scale.x) * settle;
  visual.root.scale.y += (1 - visual.root.scale.y) * settle;
  visual.root.scale.z += (1 - visual.root.scale.z) * settle;
  visual.root.position.y = zombie.sieging
    ? Math.sin(nowMs * 0.012 + visual.bobSeed) * 0.08
    : Math.sin(nowMs * 0.007 + visual.bobSeed) * 0.03;

  let dirX = 0;
  let dirZ = 0;
  if (zombie.sieging) {
    dirX = -worldX;
    dirZ = -worldZ;
  } else {
    dirX = (zombie.vx || 0) * (webgl.worldHalfX / 50);
    dirZ = (zombie.vy || 0) * (webgl.worldHalfZ / 50);
    if (Math.hypot(dirX, dirZ) < 0.0001) {
      dirX = -worldX;
      dirZ = -worldZ;
    }
  }

  const targetYaw = Math.atan2(dirX, dirZ);
  visual.root.rotation.y = lerpAngle(visual.root.rotation.y, targetYaw, 1 - Math.exp(-deltaSec * 8.2));

  setZombieVisualAnimation(visual, zombie.sieging ? "siege" : "walk");
  if (visual.mixer) {
    visual.mixer.update(deltaSec * (zombie.sieging ? 1.12 : 0.9));
  }
}

function tickWebglFrame(nowMs) {
  if (!webgl.enabled || !webgl.renderer || !webgl.scene || !webgl.camera) {
    return;
  }

  const previous = webgl.lastFrameAt || nowMs;
  const deltaSec = clamp((nowMs - previous) / 1000, 0.001, 0.05);
  webgl.lastFrameAt = nowMs;

  syncZombieVisuals();
  for (const zombie of state.zombies) {
    updateZombieVisual(zombie, deltaSec, nowMs);
  }

  if (webgl.safehouseRingMaterial) {
    const sieged = state.zombies.some((zombie) => zombie.sieging && !zombie.exploding);
    if (sieged) {
      const pulse = 0.22 + (Math.sin(nowMs * 0.01) * 0.5 + 0.5) * 0.24;
      webgl.safehouseRingMaterial.opacity = pulse;
      webgl.safehouseRingMaterial.color.setHex(0xff855f);
    } else {
      webgl.safehouseRingMaterial.opacity = 0.22;
      webgl.safehouseRingMaterial.color.setHex(0x65a8d4);
    }
  }

  webgl.renderer.render(webgl.scene, webgl.camera);
  webgl.rafId = requestAnimationFrame(tickWebglFrame);
}

function getDistanceToSafehouse(zombie) {
  return Math.hypot(SAFEHOUSE_X - zombie.x, SAFEHOUSE_Y - zombie.y);
}

function moveZombieTowardSafehouse(zombie, amount) {
  const dx = SAFEHOUSE_X - zombie.x;
  const dy = SAFEHOUSE_Y - zombie.y;
  const distance = Math.hypot(dx, dy);
  if (distance <= 0.0001) {
    return 0;
  }

  // Ease movement near the safehouse and keep inertia for smoother motion.
  const slowFactor = clamp((distance - SAFEHOUSE_HIT_RADIUS) / 28, 0.45, 1);
  const targetStep = Math.min(amount * slowFactor, distance);
  const targetVx = (dx / distance) * targetStep;
  const targetVy = (dy / distance) * targetStep;

  zombie.vx = (zombie.vx || 0) * 0.72 + targetVx * 0.28;
  zombie.vy = (zombie.vy || 0) * 0.72 + targetVy * 0.28;

  const speed = Math.hypot(zombie.vx, zombie.vy);
  const step = Math.min(speed, distance);
  if (step > 0.0001) {
    zombie.x += (zombie.vx / speed) * step;
    zombie.y += (zombie.vy / speed) * step;
    zombie.headingDeg = (Math.atan2(zombie.vy, zombie.vx) * 180) / Math.PI;
  }

  return distance - step;
}

function clampZombieToSiegeRing(zombie) {
  const awayX = zombie.x - SAFEHOUSE_X;
  const awayY = zombie.y - SAFEHOUSE_Y;
  let angle = Math.atan2(awayY, awayX);
  if (!Number.isFinite(angle)) {
    angle = zombie.siegeAngle ?? ((zombie.id * 47) % 360) * (Math.PI / 180);
  }

  zombie.siegeAngle = angle;
  zombie.x = SAFEHOUSE_X + Math.cos(angle) * SAFEHOUSE_SIEGE_RING;
  zombie.y = SAFEHOUSE_Y + Math.sin(angle) * SAFEHOUSE_SIEGE_RING;
  zombie.vx = 0;
  zombie.vy = 0;
}

function startZombieSiege(zombie, reason = "") {
  const target = state.zombies.find((item) => item.id === zombie.id);
  if (!target || target.exploding) {
    return false;
  }

  if (target.sieging) {
    return false;
  }

  target.sieging = true;
  clampZombieToSiegeRing(target);
  const now = Date.now();
  target.nextSmashAt =
    now + randomRange(SAFEHOUSE_SIEGE_INITIAL_DELAY_MS * 0.8, SAFEHOUSE_SIEGE_INITIAL_DELAY_MS * 1.35);
  target.smashAnimUntil = now;
  target.timeoutRecorded = false;

  if (reason) {
    setFeedback(reason, "bad");
  }

  return true;
}

function applyZombieSiegeDamage(zombie, now) {
  if (!state.active || !zombie.sieging || zombie.exploding) {
    return;
  }

  state.baseHealth = Math.max(0, state.baseHealth - 1);
  state.streak = 0;

  if (!zombie.timeoutRecorded) {
    updateConjugationStats(zombie.challenge, "timeout");
    zombie.timeoutRecorded = true;
  }

  zombie.smashAnimUntil = now + SAFEHOUSE_SMASH_ANIM_MS;
  zombie.nextSmashAt = now + randomRange(SAFEHOUSE_SIEGE_TICK_MIN_MS, SAFEHOUSE_SIEGE_TICK_MAX_MS);
  updateSafehouseVisual(true);

  setFeedback(
    `${formatPrompt(zombie.challenge)} is breaking the safehouse! Base ${state.baseHealth}/${state.maxBaseHealth}.`,
    "bad",
  );
  addFeed(
    "bad",
    `${formatPrompt(zombie.challenge)} is breaking the safehouse. Base ${state.baseHealth}/${state.maxBaseHealth}.`,
  );

  if (state.baseHealth <= 0) {
    endGame(false, "Safehouse overrun.");
  }
}

function spawnOffscreenPosition() {
  const side = Math.floor(Math.random() * 4);
  const margin = 18;

  if (side === 0) {
    return { x: -margin, y: randomRange(4, 96) };
  }
  if (side === 1) {
    return { x: 100 + margin, y: randomRange(4, 96) };
  }
  if (side === 2) {
    return { x: randomRange(4, 96), y: -margin };
  }
  return { x: randomRange(4, 96), y: 100 + margin };
}

function getLiveZombieCount() {
  let count = 0;
  for (const zombie of state.zombies) {
    if (!zombie.exploding) {
      count += 1;
    }
  }
  return count;
}

function getNearestZombie() {
  if (state.zombies.length === 0) {
    return null;
  }

  let nearest = null;
  for (const zombie of state.zombies) {
    if (zombie.exploding) {
      continue;
    }
    if (zombie.sieging && nearest && !nearest.sieging) {
      nearest = zombie;
      continue;
    }
    if (!zombie.sieging && nearest && nearest.sieging) {
      continue;
    }
    if (!nearest || getDistanceToSafehouse(zombie) < getDistanceToSafehouse(nearest)) {
      nearest = zombie;
    }
  }
  return nearest;
}

function updateSafehouseVisual(hit = false) {
  if (!elements.safehouse) {
    return;
  }

  const lost = Math.max(0, state.maxBaseHealth - state.baseHealth);
  const ratio = state.maxBaseHealth > 0 ? lost / state.maxBaseHealth : 0;
  let tier = 0;
  if (ratio >= 0.2 && ratio < 0.45) {
    tier = 1;
  } else if (ratio >= 0.45 && ratio < 0.7) {
    tier = 2;
  } else if (ratio >= 0.7 && ratio < 0.95) {
    tier = 3;
  } else if (ratio >= 0.95) {
    tier = 4;
  }

  elements.safehouse.classList.remove("damage-1", "damage-2", "damage-3", "damage-4");
  if (tier > 0) {
    elements.safehouse.classList.add(`damage-${tier}`);
  }

  if (!hit) {
    elements.safehouse.classList.remove("hit");
    return;
  }

  elements.safehouse.classList.add("hit");
  if (state.safehouseHitTimerId) {
    clearTimeout(state.safehouseHitTimerId);
  }
  state.safehouseHitTimerId = setTimeout(() => {
    state.safehouseHitTimerId = null;
    if (elements.safehouse) {
      elements.safehouse.classList.remove("hit");
    }
  }, 260);
}

function renderFallbackZombieCards() {
  if (state.zombies.length === 0) {
    elements.zombieLane.innerHTML = '<p class="lane-placeholder">No zombies in sight.</p>';
    return;
  }

  const nearest = getNearestZombie();
  const now = Date.now();

  const sorted = [...state.zombies].sort((a, b) => getDistanceToSafehouse(b) - getDistanceToSafehouse(a));

  elements.zombieLane.innerHTML = sorted
    .map((zombie) => {
      const left = zombie.x;
      const top = zombie.y;
      const targetClass = nearest && nearest.id === zombie.id ? " target" : "";
      const variantClass = `zombie-variant-${(zombie.id % 4) + 1}`;
      const spawningClass = now - (zombie.spawnedAt || 0) < ZOMBIE_SPAWN_ANIM_MS ? " spawning" : "";
      const explodingClass = zombie.exploding ? " exploding" : "";
      const siegingClass = zombie.sieging ? " sieging" : "";
      const smashingClass = zombie.sieging && now < (zombie.smashAnimUntil || 0) ? " smashing" : "";
      const prompt = escapeHtml(formatPrompt(zombie.challenge));
      const distance = getDistanceToSafehouse(zombie);
      const meters = Math.max(0, Math.ceil(distance * 2.25));
      const distanceText = zombie.sieging ? "breaking safehouse" : `${meters}m away`;
      const scale = (0.76 + (1 - clamp(distance, 0, 122) / 122) * 0.38).toFixed(3);
      const zIndex = 120 + Math.round(top * 10);
      const heading = clamp(zombie.headingDeg || 0, -14, 14).toFixed(2);

      return `<div class="zombie-card${targetClass}${spawningClass}${explodingClass}${siegingClass}${smashingClass} ${variantClass}" style="left:${left}%;top:${top}%;--z-scale:${scale};--z-rot:${heading}deg;z-index:${zIndex}">
        <div class="zombie-shadow"></div>
        <div class="zombie-model">
          <div class="zombie-head">
            <span class="zombie-brow"></span>
            <span class="zombie-eye eye-left"></span>
            <span class="zombie-eye eye-right"></span>
            <span class="zombie-mouth"></span>
          </div>
          <div class="zombie-neck"></div>
          <div class="zombie-torso">
            <span class="zombie-shirt-rip"></span>
          </div>
          <div class="zombie-arm arm-left">
            <span class="zombie-hand"></span>
          </div>
          <div class="zombie-arm arm-right">
            <span class="zombie-hand"></span>
          </div>
          <div class="zombie-leg leg-left">
            <span class="zombie-foot"></span>
          </div>
          <div class="zombie-leg leg-right">
            <span class="zombie-foot"></span>
          </div>
        </div>
        <div class="zombie-blast"></div>
        <div class="zombie-bubble">
          <p class="zombie-prompt">${prompt}</p>
          <span class="zombie-dist">${distanceText}</span>
        </div>
      </div>`;
    })
    .join("");
}

function renderZombies() {
  const hasSiege = state.zombies.some((zombie) => zombie.sieging && !zombie.exploding);
  if (elements.safehouse) {
    elements.safehouse.classList.toggle("under-siege", hasSiege);
  }

  if (webgl.enabled && webgl.renderer) {
    syncZombieVisuals();
    return;
  }

  renderFallbackZombieCards();
}

function renderPrompt() {
  if (!state.active) {
    elements.targetLabel.textContent = "Nearest zombie";
    elements.promptText.textContent = "Start survival to get your first target.";
    elements.metaText.textContent = "Type the conjugation and press Enter.";
    updateLearningUi();
    return;
  }

  if (state.intermission) {
    elements.targetLabel.textContent = "Intermission";
    elements.promptText.textContent = "Wave cleared. Reloading defenses.";
    elements.metaText.textContent = "Next wave starts in a moment.";
    updateLearningUi();
    return;
  }

  const target = getNearestZombie();
  if (!target) {
    elements.targetLabel.textContent = "Scanning";
    elements.promptText.textContent = "No active targets.";
    elements.metaText.textContent = "Hold position.";
    updateLearningUi();
    return;
  }

  elements.targetLabel.textContent = "Nearest zombie";
  elements.promptText.textContent = formatPrompt(target.challenge);

  if (target.sieging) {
    elements.targetLabel.textContent = "Safehouse breach";
    elements.metaText.textContent = `Urgent: this zombie is damaging the safehouse | Meaning: ${target.challenge.verb.meaning}`;
    updateLearningUi();
    return;
  }

  const focusNote =
    target.challenge.adaptiveWeight >= 6
      ? "High-priority review"
      : target.challenge.adaptiveWeight >= 3.5
        ? "Targeted review"
        : "Mixed practice";

  elements.metaText.textContent = `Meaning: ${target.challenge.verb.meaning} | Focus: ${focusNote}`;
  updateLearningUi();
}

function setInputEnabled(enabled) {
  elements.answerInput.disabled = !enabled;
  elements.submitBtn.disabled = !enabled;
}

function syncInputLock() {
  const canType = state.active && !state.intermission && !state.menuOpen;
  setInputEnabled(canType);
  if (canType) {
    elements.answerInput.focus();
  }
  updateLearningUi();
}

function setMenuOpen(open) {
  state.menuOpen = Boolean(open);
  document.body.classList.toggle("menu-open", state.menuOpen);
  syncInputLock();
  updateHud();
}

function revealAnswer() {
  if (!state.learningMode || !state.active || state.intermission || state.menuOpen) {
    return;
  }

  const target = getNearestZombie();
  if (!target) {
    setFeedback("No zombie currently in range.", "note");
    return;
  }

  target.answerRevealed = true;
  setFeedback(
    `Revealed: ${target.challenge.answer}. Learning-mode clears count as practice and do not add score.`,
    "note",
  );
  renderPrompt();
}

function updateHud() {
  elements.scoreValue.textContent = String(state.score);
  elements.waveValue.textContent = `${state.wave}/${state.maxCampaignWave}`;
  elements.baseValue.textContent = `${state.baseHealth}/${state.maxBaseHealth}`;
  elements.zombieCountValue.textContent = `${getLiveZombieCount()}`;
  elements.killsValue.textContent = String(state.kills);
  elements.streakValue.textContent = String(state.streak);
  elements.adaptiveValue.textContent = "ON";

  if (!state.active) {
    elements.statusValue.textContent = state.resultText || "Idle";
  } else if (state.menuOpen) {
    elements.statusValue.textContent = "Paused";
  } else if (state.intermission) {
    elements.statusValue.textContent = "Intermission";
  } else {
    elements.statusValue.textContent = "Wave Live";
  }
}

function removeZombieById(id) {
  const index = state.zombies.findIndex((zombie) => zombie.id === id);
  if (index < 0) {
    return null;
  }
  const [removed] = state.zombies.splice(index, 1);
  removeZombieVisualById(id);
  return removed;
}

function startZombieExplosion(zombie) {
  const target = state.zombies.find((item) => item.id === zombie.id);
  if (!target || target.exploding) {
    return false;
  }

  target.exploding = true;
  const runId = state.runId;
  setTimeout(() => {
    if (runId !== state.runId || target.runId !== runId) {
      return;
    }
    const removed = removeZombieById(target.id);
    if (!removed) {
      return;
    }
    updateHud();
    renderZombies();
    renderPrompt();
    checkWaveCompletion();
  }, ZOMBIE_EXPLODE_ANIM_MS);

  return true;
}

function clearTimers() {
  if (state.spawnTimerId) {
    clearInterval(state.spawnTimerId);
    state.spawnTimerId = null;
  }
  if (state.tickTimerId) {
    clearInterval(state.tickTimerId);
    state.tickTimerId = null;
  }
  if (state.waveDelayId) {
    clearTimeout(state.waveDelayId);
    state.waveDelayId = null;
  }
  if (state.safehouseHitTimerId) {
    clearTimeout(state.safehouseHitTimerId);
    state.safehouseHitTimerId = null;
  }
  state.lastTickAt = 0;
}

function checkWaveCompletion() {
  if (!state.active || state.intermission) {
    return;
  }

  const waveFinished =
    state.spawnedThisWave >= state.toSpawnThisWave &&
    state.zombies.length === 0 &&
    !state.spawnTimerId;

  if (!waveFinished) {
    return;
  }

  state.intermission = true;
  const bonus = 12 + state.wave * 4;
  state.score += bonus;
  rememberCampaignProgress();

  setFeedback(`Wave ${state.wave} cleared. Next wave incoming (+${bonus}).`, "good");
  addFeed("note", `Wave ${state.wave} cleared. Prepare for wave ${state.wave + 1}.`);

  updateHud();
  renderPrompt();

  state.waveDelayId = setTimeout(() => {
    state.waveDelayId = null;
    startWave(state.wave + 1);
  }, 2000);
}

function spawnZombie() {
  if (!state.active || state.intermission || state.menuOpen) {
    return;
  }

  if (state.spawnedThisWave >= state.toSpawnThisWave) {
    if (state.spawnTimerId) {
      clearInterval(state.spawnTimerId);
      state.spawnTimerId = null;
    }
    checkWaveCompletion();
    return;
  }

  if (getLiveZombieCount() >= state.waveMaxOnField) {
    return;
  }

  const challenge = buildWeightedPrompt();
  if (!challenge) {
    endGame(false, "No valid conjugation prompts available.");
    return;
  }

  const spawnPoint = spawnOffscreenPosition();
  const zombie = {
    id: state.nextZombieId,
    challenge,
    x: spawnPoint.x,
    y: spawnPoint.y,
    speed: state.waveSpeed + Math.random() * 0.25,
    vx: 0,
    vy: 0,
    headingDeg: 0,
    sieging: false,
    siegeAngle: null,
    nextSmashAt: 0,
    smashAnimUntil: 0,
    timeoutRecorded: false,
    answerRevealed: false,
    spawnedAt: Date.now(),
    exploding: false,
    runId: state.runId,
  };

  state.nextZombieId += 1;
  state.spawnedThisWave += 1;
  state.zombies.push(zombie);

  if (state.spawnedThisWave >= state.toSpawnThisWave && state.spawnTimerId) {
    clearInterval(state.spawnTimerId);
    state.spawnTimerId = null;
  }

  updateHud();
  renderZombies();
  renderPrompt();
}

function updateZombies() {
  if (!state.active || state.intermission || state.menuOpen) {
    return;
  }

  if (getLiveZombieCount() === 0) {
    checkWaveCompletion();
    return;
  }

  const now =
    typeof performance !== "undefined" && typeof performance.now === "function"
      ? performance.now()
      : Date.now();
  const elapsed = state.lastTickAt ? now - state.lastTickAt : ZOMBIE_BASE_STEP_MS;
  state.lastTickAt = now;
  const stepFactor = clamp(elapsed / ZOMBIE_BASE_STEP_MS, 0.3, 2.3);
  const nowWall = Date.now();
  for (const zombie of state.zombies) {
    if (zombie.exploding) {
      continue;
    }
    if (zombie.sieging) {
      clampZombieToSiegeRing(zombie);
      if (nowWall >= zombie.nextSmashAt) {
        applyZombieSiegeDamage(zombie, nowWall);
        if (!state.active) {
          return;
        }
      }
      continue;
    }

    const remaining = moveZombieTowardSafehouse(zombie, zombie.speed * stepFactor);
    if (remaining <= SAFEHOUSE_HIT_RADIUS) {
      startZombieSiege(zombie, "A zombie reached the safehouse and started breaking it.");
    }
  }

  updateHud();
  renderZombies();
  renderPrompt();
  checkWaveCompletion();
}

function startWave(waveNumber) {
  if (!state.active) {
    return;
  }

  if (waveNumber > state.maxCampaignWave) {
    endGame(true, "Evacuation secured. You survived all waves.");
    return;
  }

  state.wave = waveNumber;
  state.intermission = false;
  state.spawnedThisWave = 0;
  state.toSpawnThisWave = state.profile.baseWaveCount + waveNumber * 2;
  state.waveSpawnInterval = Math.max(380, state.profile.spawnInterval - (waveNumber - 1) * 65);
  state.waveSpeed = state.profile.zombieSpeed + (waveNumber - 1) * 0.085;
  state.waveMaxOnField = state.profile.maxOnField + Math.floor((waveNumber - 1) / 3);
  rememberCampaignProgress();

  if (state.spawnTimerId) {
    clearInterval(state.spawnTimerId);
  }
  state.spawnTimerId = setInterval(spawnZombie, state.waveSpawnInterval);

  spawnZombie();
  if (!state.active) {
    return;
  }

  setFeedback(`Wave ${waveNumber} is live. Keep typing.`, "note");
  addFeed("note", `Wave ${waveNumber} started: ${state.toSpawnThisWave} zombies detected.`);

  updateHud();
  renderZombies();
  renderPrompt();
}

function submitAnswer() {
  if (!state.active || state.intermission || state.menuOpen) {
    return;
  }

  const target = getNearestZombie();
  if (!target) {
    setFeedback("No zombie currently in range.", "note");
    return;
  }

  const raw = elements.answerInput.value.trim();
  if (!raw) {
    setFeedback("Type a conjugation first.", "note");
    return;
  }

  const expected = normalize(target.challenge.answer);
  const given = sanitizeAnswer(raw);
  const usedReveal = state.learningMode && Boolean(target.answerRevealed);

  if (given === expected) {
    startZombieExplosion(target);
    updateConjugationStats(target.challenge, usedReveal ? "pass" : "correct");

    const points = usedReveal
      ? 0
      : state.profile.pointsBase +
        Math.min(12, state.streak * 2) +
        (target.challenge.adaptiveWeight >= 6 ? 2 : 0);

    state.score += points;
    state.kills += 1;
    state.totalKills += 1;
    state.streak = usedReveal ? 0 : state.streak + 1;
    rememberCampaignProgress();
    elements.answerInput.value = "";

    const actionNote = target.sieging ? "Zombie stopped smashing the safehouse." : "Zombie eliminated.";
    if (usedReveal) {
      setFeedback(
        `Revealed answer used: ${target.challenge.answer}. ${actionNote} Practice clear only (+0).`,
        "note",
      );
      addFeed("note", `${formatPrompt(target.challenge)} was cleared in learning mode.`);
    } else {
      setFeedback(`Correct: ${target.challenge.answer}. ${actionNote} (+${points}).`, "good");
      addFeed("good", `${formatPrompt(target.challenge)} was neutralized (+${points}).`);
    }
  } else {
    updateConjugationStats(target.challenge, "wrong");
    state.streak = 0;

    const rush = (state.profile.missPush + Math.min(8, Math.floor(state.wave / 2))) * 0.35;
    const remaining = target.sieging ? 0 : moveZombieTowardSafehouse(target, rush);
    let enteredSiege = false;
    if (remaining <= SAFEHOUSE_HIT_RADIUS) {
      enteredSiege = startZombieSiege(
        target,
        "Missed conjugation. This zombie reached the safehouse and is breaking it.",
      );
    }

    if (!enteredSiege) {
      setFeedback(
        `Missed. Correct form: ${target.challenge.answer}. Zombie rushes forward!`,
        "bad",
      );
    }
    addFeed("bad", `${formatPrompt(target.challenge)} missed. Zombie closed in fast.`);
  }

  updateHud();
  renderZombies();
  renderPrompt();
  checkWaveCompletion();
}

function endGame(won, message) {
  state.active = false;
  state.intermission = false;
  clearTimers();
  document.body.classList.remove("game-live");
  syncInputLock();

  state.resultText = won ? "Victory" : "Defeat";

  if (won) {
    state.score += 40;
    addFeed("good", `${message} Bonus +40.`);
    setFeedback(`${message} Final score: ${state.score}.`, "good");
    elements.setupMessage.textContent =
      "You survived. Start again to sharpen more conjugations.";
  } else {
    addFeed("bad", `${message} Final score: ${state.score}.`);
    setFeedback(`${message} Final score: ${state.score}.`, "bad");
    elements.setupMessage.textContent =
      "The safehouse fell. Start again and target those weak conjugations.";
  }

  state.lastPlayedAt = new Date().toISOString();
  rememberCampaignProgress();

  if (!won) {
    setMenuOpen(true);
  } else {
    syncInputLock();
  }

  elements.startBtn.textContent = "Restart Survival";
  updateHud();
  renderPrompt();
  renderZombies();
}

function startGame() {
  syncConfigurationFromControls();

  if (state.selectedTenses.length === 0) {
    elements.setupMessage.textContent = "Select at least one tense before starting.";
    return;
  }

  clearTimers();
  state.runId += 1;

  state.profile = profileForDifficulty();
  state.active = true;
  state.intermission = false;
  state.wave = 0;
  state.score = 0;
  state.streak = 0;
  state.kills = 0;
  state.resultText = "";
  state.baseHealth = state.profile.baseHealth;
  state.maxBaseHealth = state.profile.baseHealth;
  updateSafehouseVisual(false);
  state.verbPool = buildVerbPool();
  state.zombies = [];
  clearZombieVisuals();
  state.spawnedThisWave = 0;
  state.toSpawnThisWave = 0;
  state.nextZombieId = 1;
  state.challengeCounter = 0;
  state.lastTickAt = 0;
  state.sessionsPlayed += 1;
  state.lastPlayedAt = new Date().toISOString();
  persistCampaignProgress();

  document.body.classList.add("game-live");
  setMenuOpen(true);
  elements.answerInput.value = "";

  if (state.tickTimerId) {
    clearInterval(state.tickTimerId);
  }
  state.tickTimerId = setInterval(updateZombies, state.profile.tickMs);

  elements.startBtn.textContent = "Restart Survival";
  elements.setupMessage.textContent =
    state.learningMode
      ? "Adaptive targeting is ON. Learning mode reveal is available during combat."
      : "Adaptive targeting is ON: missed conjugations are more likely to return.";

  addFeed(
    "note",
    `Survival started on ${state.difficulty.toUpperCase()} (${state.includeIrregular ? "irregular ON" : "irregular OFF"}, ${state.includeVosotros ? "vosotros ON" : "vosotros OFF"}, ${state.selectedTenses.join(", ")}).`,
  );

  setFeedback("Wave 1 incoming.", "note");
  updateHud();
  renderZombies();
  renderPrompt();
  startWave(1);
}

function bindEvents() {
  elements.startBtn.addEventListener("click", startGame);
  elements.difficultySelect.addEventListener("change", () => {
    persistCampaignProgress(buildConfigurationFromControls());
  });
  elements.irregularToggle.addEventListener("change", () => {
    persistCampaignProgress(buildConfigurationFromControls());
  });
  elements.vosotrosToggle.addEventListener("change", () => {
    persistCampaignProgress(buildConfigurationFromControls());
  });
  elements.learningToggle.addEventListener("change", () => {
    persistCampaignProgress(buildConfigurationFromControls());
    syncConfigurationFromControls();
    elements.setupMessage.textContent = buildSetupSummary();
    updateLearningUi();
  });
  elements.tenseChoices.forEach((choice) => {
    choice.addEventListener("change", () => {
      persistCampaignProgress(buildConfigurationFromControls());
    });
  });
  elements.revealBtn.addEventListener("click", revealAnswer);
  elements.submitBtn.addEventListener("click", submitAnswer);
  elements.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      submitAnswer();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || event.repeat) {
      return;
    }

    if (!state.active) {
      setMenuOpen(!state.menuOpen);
      event.preventDefault();
      return;
    }

    setMenuOpen(!state.menuOpen);
    event.preventDefault();
  });
}

function bootstrap() {
  document.body.classList.remove("game-live");
  loadCampaignProgress();
  applySavedConfigurationToControls();
  loadConjugationStats();
  initWebglIfPossible();
  updateSafehouseVisual(false);
  setMenuOpen(true);
  renderPrompt();
  renderZombies();
  updateHud();
  elements.setupMessage.textContent = buildSetupSummary();
  setFeedback("Press Start Survival to begin.", "note");
  bindEvents();
}

bootstrap();

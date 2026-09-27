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
const WEBGL_GROUND_COLOR = 0x171b19;

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
  geometryCache: new Map(),
  sharedGeometries: new Set(),
  surfaceTextures: new Map(),
  modelTemplate: null,
  bunkerRoot: null,
  bunkerAlarm: null,
  bunkerHitUntil: 0,
  bunkerDamageTier: 0,
  bunkerCracks: [],
  promptLayer: null,
  promptElements: new Map(),
  worldHalfX: 20,
  worldHalfZ: 12,
  lastFrameAt: 0,
  safehouseRing: null,
  safehouseRingMaterial: null,
  moonLight: null,
  warmLight: null,
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

function createRoadSurfaceTexture(THREE) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  const image = context.createImageData(canvas.width, canvas.height);

  for (let index = 0; index < image.data.length; index += 4) {
    const grain = Math.random() * 22;
    const shade = 23 + grain;
    image.data[index] = shade * 0.82;
    image.data[index + 1] = shade * 0.9;
    image.data[index + 2] = shade * 0.82;
    image.data[index + 3] = 255;
  }
  context.putImageData(image, 0, 0);

  for (let index = 0; index < 2400; index += 1) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 1.6 + 0.2;
    const value = Math.floor(Math.random() * 42 + 18);
    context.fillStyle = `rgba(${value}, ${value + 3}, ${value + 1}, ${Math.random() * 0.34})`;
    context.beginPath();
    context.ellipse(x, y, radius * 1.7, radius, Math.random() * Math.PI, 0, Math.PI * 2);
    context.fill();
  }

  context.lineCap = "round";
  for (let index = 0; index < 14; index += 1) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = `rgba(4, 7, 7, ${Math.random() * 0.34 + 0.2})`;
    context.lineWidth = Math.random() * 1.7 + 0.6;
    for (let segment = 0; segment < 5; segment += 1) {
      x += randomRange(-32, 32);
      y += randomRange(12, 35);
      context.lineTo(x, y);
    }
    context.stroke();
  }

  for (let index = 0; index < 8; index += 1) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = randomRange(16, 54);
    const puddle = context.createRadialGradient(x, y, radius * 0.1, x, y, radius);
    puddle.addColorStop(0, "rgba(67, 83, 79, 0.24)");
    puddle.addColorStop(0.65, "rgba(49, 65, 63, 0.11)");
    puddle.addColorStop(1, "rgba(35, 46, 45, 0)");
    context.fillStyle = puddle;
    context.beginPath();
    context.ellipse(x, y, radius * 1.4, radius * 0.72, randomRange(-0.8, 0.8), 0, Math.PI * 2);
    context.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(5, 4);
  texture.anisotropy = 4;
  return texture;
}

function getSharedZombieGeometry(key, createGeometry) {
  if (!webgl.geometryCache.has(key)) {
    const geometry = createGeometry();
    webgl.geometryCache.set(key, geometry);
    webgl.sharedGeometries.add(geometry);
  }
  return webgl.geometryCache.get(key);
}

function getZombieSurfaceTexture(THREE, kind) {
  if (webgl.surfaceTextures.has(kind)) {
    return webgl.surfaceTextures.get(kind);
  }

  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  if (!context) {
    return null;
  }

  const palettes = {
    skin: [112, 119, 101],
    cloth: [74, 77, 72],
    denim: [52, 59, 61],
  };
  const base = palettes[kind] || palettes.cloth;
  const image = context.createImageData(canvas.width, canvas.height);
  let seed = kind === "skin" ? 421 : kind === "denim" ? 811 : 617;
  const noise = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };

  for (let index = 0; index < image.data.length; index += 4) {
    const grain = (noise() - 0.5) * (kind === "skin" ? 24 : 36);
    image.data[index] = clamp(base[0] + grain + (kind === "skin" ? 3 : 0), 0, 255);
    image.data[index + 1] = clamp(base[1] + grain, 0, 255);
    image.data[index + 2] = clamp(base[2] + grain - (kind === "skin" ? 2 : 0), 0, 255);
    image.data[index + 3] = 255;
  }
  context.putImageData(image, 0, 0);

  for (let index = 0; index < 110; index += 1) {
    const x = noise() * canvas.width;
    const y = noise() * canvas.height;
    const radius = 1 + noise() * (kind === "skin" ? 8 : 15);
    const color = kind === "skin"
      ? `rgba(${35 + noise() * 30}, ${31 + noise() * 24}, ${27 + noise() * 18}, ${0.035 + noise() * 0.09})`
      : `rgba(${18 + noise() * 40}, ${19 + noise() * 38}, ${18 + noise() * 34}, ${0.04 + noise() * 0.14})`;
    context.fillStyle = color;
    context.beginPath();
    context.ellipse(x, y, radius * (0.55 + noise() * 0.75), radius, noise() * Math.PI, 0, Math.PI * 2);
    context.fill();
  }

  if (kind !== "skin") {
    context.strokeStyle = "rgba(190, 184, 162, 0.14)";
    context.lineWidth = 1;
    for (let seam = 0; seam < 7; seam += 1) {
      const y = 22 + seam * 34;
      context.beginPath();
      context.moveTo(12, y);
      context.lineTo(244, y + (seam % 2 ? 2 : -2));
      context.stroke();
    }
    context.fillStyle = "rgba(18, 20, 19, 0.32)";
    for (let stitch = 0; stitch < 34; stitch += 1) {
      context.fillRect(16 + stitch * 7, 19 + (stitch % 3) * 2, 2, 1);
    }
  } else {
    context.strokeStyle = "rgba(43, 45, 38, 0.22)";
    context.lineWidth = 1.2;
    for (let mark = 0; mark < 20; mark += 1) {
      const x = noise() * canvas.width;
      const y = noise() * canvas.height;
      context.beginPath();
      context.moveTo(x, y);
      context.quadraticCurveTo(x + noise() * 10 - 5, y + 8, x + noise() * 14 - 7, y + 18 + noise() * 14);
      context.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  webgl.surfaceTextures.set(kind, texture);
  return texture;
}

function createGroundDebris(THREE) {
  const stoneMaterial = new THREE.MeshStandardMaterial({
    color: 0x3e4541,
    roughness: 0.96,
    metalness: 0.02,
  });
  const metalMaterial = new THREE.MeshStandardMaterial({
    color: 0x343b3a,
    roughness: 0.68,
    metalness: 0.38,
  });
  const stoneGeometry = new THREE.DodecahedronGeometry(1, 0);
  const scrapGeometry = new THREE.BoxGeometry(1, 1, 1);

  for (let index = 0; index < 54; index += 1) {
    const angle = randomRange(0, Math.PI * 2);
    const radius = randomRange(14, 37);
    const isScrap = index % 4 === 0;
    const debris = new THREE.Mesh(isScrap ? scrapGeometry : stoneGeometry, isScrap ? metalMaterial : stoneMaterial);
    const size = randomRange(0.12, isScrap ? 0.36 : 0.48);
    debris.position.set(Math.cos(angle) * radius, size * 0.32, Math.sin(angle) * radius * 0.66);
    debris.scale.set(size * randomRange(0.7, 1.5), size * randomRange(0.35, 0.8), size);
    debris.rotation.set(randomRange(-0.25, 0.25), randomRange(0, Math.PI), randomRange(-0.25, 0.25));
    debris.castShadow = true;
    debris.receiveShadow = true;
    webgl.scene.add(debris);
  }
}

function createForestBackdrop(THREE) {
  const forest = new THREE.Group();
  const bark = new THREE.MeshStandardMaterial({ color: 0x514439, roughness: 1 });
  const needles = new THREE.MeshStandardMaterial({ color: 0x293b32, roughness: 1 });
  const broadLeaves = new THREE.MeshStandardMaterial({ color: 0x35463a, roughness: 1 });
  const rockMaterial = new THREE.MeshStandardMaterial({ color: 0x50534c, roughness: 1 });
  const woodMaterial = new THREE.MeshStandardMaterial({ color: 0x3e352c, roughness: 1 });
  const dummy = new THREE.Object3D();

  // A soft, distant tree mass prevents the ground plane from ending at a hard edge.
  const backdropCanvas = document.createElement("canvas");
  backdropCanvas.width = 1024;
  backdropCanvas.height = 512;
  const ctx = backdropCanvas.getContext("2d");
  const haze = ctx.createLinearGradient(0, 0, 0, backdropCanvas.height);
  haze.addColorStop(0, "#263431");
  haze.addColorStop(0.58, "#202b27");
  haze.addColorStop(1, "#141b18");
  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, backdropCanvas.width, backdropCanvas.height);
  let seed = 47291;
  const noise = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  for (let i = 0; i < 950; i += 1) {
    const x = noise() * backdropCanvas.width;
    const y = 130 + noise() * 280;
    const r = 8 + noise() * 44;
    ctx.fillStyle = `rgba(${18 + Math.floor(noise() * 23)}, ${30 + Math.floor(noise() * 28)}, ${24 + Math.floor(noise() * 20)}, ${0.08 + noise() * 0.2})`;
    ctx.beginPath();
    ctx.ellipse(x, y, r * (0.5 + noise()), r, noise() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }
  const backdropTexture = new THREE.CanvasTexture(backdropCanvas);
  backdropTexture.colorSpace = THREE.SRGBColorSpace;
  const backdrop = new THREE.Mesh(
    new THREE.PlaneGeometry(150, 34),
    new THREE.MeshBasicMaterial({ map: backdropTexture, fog: false, depthWrite: false }),
  );
  backdrop.position.set(0, 13, -43);
  forest.add(backdrop);

  const conifers = [];
  const broadleafTrees = [];
  // Keep the nearer tree line behind the fighting lanes; the second row fills the skyline.
  for (let i = 0; i < 104; i += 1) {
    const x = randomRange(-54, 54);
    const z = randomRange(-38, -26);
    const h = randomRange(6.2, 12.5);
    conifers.push({ x, z, h, radius: h * randomRange(0.16, 0.23), lean: randomRange(-0.09, 0.09) });
  }
  for (let i = 0; i < 23; i += 1) {
    const x = randomRange(-53, 53);
    const z = randomRange(-37, -29);
    const h = randomRange(5.5, 9.5);
    broadleafTrees.push({ x, z, h, crown: randomRange(1.7, 3.2), lean: randomRange(-0.12, 0.12) });
  }

  const trunkGeometry = new THREE.CylinderGeometry(0.16, 0.38, 1, 7, 2);
  const trunkInstances = new THREE.InstancedMesh(trunkGeometry, bark, conifers.length + broadleafTrees.length);
  trunkInstances.castShadow = true;
  trunkInstances.receiveShadow = true;
  let trunkIndex = 0;
  for (const tree of [...conifers, ...broadleafTrees]) {
    const height = tree.h * 0.66;
    dummy.position.set(tree.x, height / 2, tree.z);
    dummy.rotation.set(0, 0, tree.lean);
    dummy.scale.set(randomRange(0.72, 1.35), height, randomRange(0.72, 1.35));
    dummy.updateMatrix();
    trunkInstances.setMatrixAt(trunkIndex, dummy.matrix);
    trunkInstances.setColorAt(trunkIndex, new THREE.Color().setHSL(0.075, randomRange(0.12, 0.25), randomRange(0.2, 0.34)));
    trunkIndex += 1;
  }
  trunkInstances.instanceMatrix.needsUpdate = true;
  if (trunkInstances.instanceColor) trunkInstances.instanceColor.needsUpdate = true;
  forest.add(trunkInstances);

  const tierGeometry = [0, 1, 2, 3].map((tier) => new THREE.ConeGeometry(1, 1, 8, 2));
  for (let tier = 0; tier < 4; tier += 1) {
    const instances = new THREE.InstancedMesh(tierGeometry[tier], needles, conifers.length);
    instances.castShadow = true;
    instances.receiveShadow = true;
    conifers.forEach((tree, index) => {
      const tierHeight = tree.h * (0.31 - tier * 0.025);
      const radius = tree.radius * (1.22 - tier * 0.2);
      const centerY = tree.h * (0.39 + tier * 0.145);
      dummy.position.set(tree.x, centerY, tree.z);
      dummy.rotation.set(0, randomRange(0, Math.PI * 2), tree.lean * 0.4);
      dummy.scale.set(radius, tierHeight, radius * randomRange(0.82, 1.08));
      dummy.updateMatrix();
      instances.setMatrixAt(index, dummy.matrix);
      instances.setColorAt(index, new THREE.Color().setHSL(0.31 + randomRange(-0.025, 0.025), randomRange(0.22, 0.43), randomRange(0.13, 0.23)));
    });
    instances.instanceMatrix.needsUpdate = true;
    if (instances.instanceColor) instances.instanceColor.needsUpdate = true;
    forest.add(instances);
  }

  const crownGeometry = new THREE.IcosahedronGeometry(1, 1);
  const crownInstances = new THREE.InstancedMesh(crownGeometry, broadLeaves, broadleafTrees.length * 5);
  crownInstances.castShadow = true;
  crownInstances.receiveShadow = true;
  let crownIndex = 0;
  for (const tree of broadleafTrees) {
    for (let clump = 0; clump < 5; clump += 1) {
      const angle = (clump / 5) * Math.PI * 2 + randomRange(-0.28, 0.28);
      const spread = tree.crown * (clump === 4 ? 0.1 : 0.45);
      const size = tree.crown * randomRange(0.38, 0.62);
      dummy.position.set(tree.x + Math.cos(angle) * spread, tree.h * randomRange(0.65, 0.86), tree.z + Math.sin(angle) * spread);
      dummy.rotation.set(randomRange(-0.35, 0.35), randomRange(0, Math.PI * 2), randomRange(-0.25, 0.25));
      dummy.scale.set(size * randomRange(0.8, 1.2), size * randomRange(0.72, 1.15), size * randomRange(0.8, 1.2));
      dummy.updateMatrix();
      crownInstances.setMatrixAt(crownIndex, dummy.matrix);
      crownInstances.setColorAt(crownIndex, new THREE.Color().setHSL(0.29 + randomRange(-0.04, 0.04), randomRange(0.18, 0.36), randomRange(0.16, 0.27)));
      crownIndex += 1;
    }
  }
  crownInstances.instanceMatrix.needsUpdate = true;
  if (crownInstances.instanceColor) crownInstances.instanceColor.needsUpdate = true;
  forest.add(crownInstances);

  const rocks = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), rockMaterial, 46);
  const logs = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.2, 0.29, 1, 8, 1), woodMaterial, 15);
  const stumps = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.3, 0.42, 1, 9, 1), bark, 12);
  for (const mesh of [rocks, logs, stumps]) {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  }
  for (let i = 0; i < rocks.count; i += 1) {
    const side = i % 3 === 0;
    const x = side ? randomRange(-49, 49) : randomRange(-53, 53);
    const z = side ? randomRange(-22, 13) : randomRange(-38, -20);
    const size = randomRange(0.32, 1.05);
    dummy.position.set(x, size * 0.36, z);
    dummy.rotation.set(randomRange(-0.4, 0.4), randomRange(0, Math.PI * 2), randomRange(-0.4, 0.4));
    dummy.scale.set(size * randomRange(0.8, 1.6), size * randomRange(0.45, 0.9), size * randomRange(0.8, 1.4));
    dummy.updateMatrix(); rocks.setMatrixAt(i, dummy.matrix);
    rocks.setColorAt(i, new THREE.Color().setHSL(0.12, randomRange(0.03, 0.12), randomRange(0.22, 0.38)));
  }
  for (let i = 0; i < logs.count; i += 1) {
    const x = randomRange(-50, 50), z = randomRange(-37, -20), length = randomRange(1.8, 4.4);
    dummy.position.set(x, 0.3, z); dummy.rotation.set(0, randomRange(0, Math.PI), Math.PI / 2 + randomRange(-0.1, 0.1));
    dummy.scale.set(randomRange(0.7, 1.2), length, randomRange(0.7, 1.2)); dummy.updateMatrix(); logs.setMatrixAt(i, dummy.matrix);
    logs.setColorAt(i, new THREE.Color().setHSL(0.075, randomRange(0.14, 0.25), randomRange(0.16, 0.27)));
  }
  for (let i = 0; i < stumps.count; i += 1) {
    const x = randomRange(-52, 52), z = randomRange(-38, -21), height = randomRange(0.5, 1.25);
    dummy.position.set(x, height / 2, z); dummy.rotation.set(randomRange(-0.08, 0.08), randomRange(0, Math.PI * 2), randomRange(-0.08, 0.08));
    dummy.scale.set(1, height, 1); dummy.updateMatrix(); stumps.setMatrixAt(i, dummy.matrix);
    stumps.setColorAt(i, new THREE.Color().setHSL(0.08, 0.15, randomRange(0.19, 0.31)));
  }
  for (const mesh of [rocks, logs, stumps]) {
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    forest.add(mesh);
  }
  webgl.scene.add(forest);
  webgl.forest = forest;
}

function createBunkerTexture(THREE, base, seed) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  const image = context.createImageData(canvas.width, canvas.height);
  let value = seed;
  const noise = () => {
    value = (value * 16807) % 2147483647;
    return value / 2147483647;
  };

  for (let index = 0; index < image.data.length; index += 4) {
    const stain = (noise() - 0.5) * 42;
    image.data[index] = clamp(base[0] + stain, 0, 255);
    image.data[index + 1] = clamp(base[1] + stain * 0.94, 0, 255);
    image.data[index + 2] = clamp(base[2] + stain * 0.84, 0, 255);
    image.data[index + 3] = 255;
  }
  context.putImageData(image, 0, 0);
  for (let mark = 0; mark < 160; mark += 1) {
    const x = noise() * 512;
    const y = noise() * 512;
    context.strokeStyle = `rgba(15, 18, 16, ${0.03 + noise() * 0.12})`;
    context.lineWidth = 1 + noise() * 2.4;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + (noise() - 0.5) * 7, y + 5 + noise() * 30);
    context.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

function createSafehouseModel(THREE) {
  const bunker = new THREE.Group();
  bunker.name = "Concrete bunker";
  const concreteTexture = createBunkerTexture(THREE, [101, 105, 94], 9741);
  const steelTexture = createBunkerTexture(THREE, [54, 61, 59], 3721);
  const cargoTexture = createBunkerTexture(THREE, [48, 69, 62], 8821);
  const concrete = new THREE.MeshStandardMaterial({ map: concreteTexture, roughness: 0.98 });
  const steel = new THREE.MeshStandardMaterial({ map: steelTexture, color: 0xb7b9b2, roughness: 0.84, metalness: 0.42 });
  const armor = new THREE.MeshStandardMaterial({ map: steelTexture, color: 0x777c77, roughness: 0.93, metalness: 0.22 });
  const darkSteel = new THREE.MeshStandardMaterial({ color: 0x252c2c, roughness: 0.92, metalness: 0.28 });
  const cargo = new THREE.MeshStandardMaterial({ map: cargoTexture, roughness: 0.96, metalness: 0.12 });
  const hazard = new THREE.MeshStandardMaterial({ color: 0xb39b47, roughness: 0.92 });
  const canvas = new THREE.MeshStandardMaterial({ color: 0x777963, roughness: 1 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x182626, roughness: 0.38, metalness: 0.2 });
  const alarmMat = new THREE.MeshStandardMaterial({ color: 0xe95c42, emissive: 0x78180c, emissiveIntensity: 0.7, roughness: 0.28 });

  const add = (geometry, material, position, scale, name, bevel = 0) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;
    mesh.position.set(...position);
    mesh.scale.set(...scale);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    bunker.add(mesh);
    return mesh;
  };
  const box = (name, pos, size, material = steel, bevel = 0) => {
    return add(new THREE.BoxGeometry(...size), material, pos, [1, 1, 1], name);
  };
  const cylinder = (name, pos, radius, length, material, rotation = [0, 0, 0]) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.9, radius, length, 20), material);
    mesh.name = name;
    mesh.position.set(...pos);
    mesh.rotation.set(...rotation);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    bunker.add(mesh);
    return mesh;
  };
  const sphere = (name, pos, scale, material) => add(new THREE.SphereGeometry(1, 16, 12), material, pos, scale, name);

  const shellShape = new THREE.Shape();
  shellShape.moveTo(-2.36, 0);
  shellShape.lineTo(2.36, 0);
  shellShape.lineTo(2.12, 2.72);
  shellShape.lineTo(-2.12, 2.72);
  shellShape.closePath();
  const shellGeometry = new THREE.ExtrudeGeometry(shellShape, { depth: 3.8, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.055, bevelThickness: 0.055, curveSegments: 1 });
  shellGeometry.translate(0, 0, -1.9);
  const shell = new THREE.Mesh(shellGeometry, concrete);
  shell.name = "Sloped poured-concrete shelter";
  shell.castShadow = true;
  shell.receiveShadow = true;
  bunker.add(shell);

  const crackMaterial = new THREE.LineBasicMaterial({ color: 0x171b18, transparent: true, opacity: 0, depthWrite: false });
  const crackPaths = [
    [[-2.08, 2.44, 2.055], [-1.98, 2.25, 2.06], [-2.02, 2.04, 2.06], [-1.88, 1.91, 2.06]],
    [[1.98, 2.52, 2.055], [2.02, 2.28, 2.06], [1.91, 2.12, 2.06], [1.98, 1.90, 2.06]],
    [[-1.98, 0.76, 2.055], [-1.86, 0.91, 2.06], [-1.91, 1.05, 2.06]],
    [[1.98, 0.82, 2.055], [1.86, 0.97, 2.06], [1.93, 1.12, 2.06]],
  ];
  for (const path of crackPaths) {
    const geometry = new THREE.BufferGeometry().setFromPoints(path.map((point) => new THREE.Vector3(...point)));
    const crack = new THREE.Line(geometry, crackMaterial);
    crack.renderOrder = 3;
    bunker.add(crack);
    webgl.bunkerCracks.push(crack);
  }

  box("Foundation skirt", [0, 0.12, 0], [4.9, 0.24, 4.05], darkSteel, 0.08);
  box("Reinforced roof cap", [0, 2.77, 0], [4.62, 0.18, 4.15], armor, 0.07);
  box("Roof hatch rim", [-1.38, 2.89, -1.05], [0.86, 0.08, 0.78], darkSteel, 0.04);
  box("Roof hatch plate", [-1.38, 2.94, -1.05], [0.70, 0.035, 0.61], armor, 0.03);
  for (const [x, z] of [[-1.65, -1.3], [-1.1, -1.3], [-1.65, -0.8], [-1.1, -0.8]]) {
    sphere("Hatch bolt", [x, 2.97, z], [0.025, 0.015, 0.025], steel);
  }

  const faceZ = 1.96;
  box("Door left jamb", [-0.84, 1.18, faceZ], [0.17, 1.90, 0.24], darkSteel, 0.035);
  box("Door right jamb", [0.84, 1.18, faceZ], [0.17, 1.90, 0.24], darkSteel, 0.035);
  box("Door lintel", [0, 2.08, faceZ], [1.82, 0.17, 0.24], darkSteel, 0.035);
  for (const x of [-0.38, 0.38]) {
    box("Armored pressure door leaf", [x, 1.15, 2.105], [0.72, 1.52, 0.10], armor, 0.03);
    box("Door inset plate", [x, 1.16, 2.164], [0.54, 1.28, 0.018], steel, 0.02);
    box("Door reinforcing spine", [x, 1.16, 2.18], [0.035, 1.24, 0.018], darkSteel);
    for (const y of [0.58, 0.85, 1.44, 1.72]) {
      sphere("Door locking bolt", [x + (x < 0 ? -0.26 : 0.26), y, 2.19], [0.022, 0.022, 0.012], darkSteel);
    }
    box("Door handle", [x + (x < 0 ? 0.20 : -0.20), 1.00, 2.19], [0.035, 0.19, 0.035], darkSteel);
  }
  box("Door center seam", [0, 1.15, 2.18], [0.025, 1.48, 0.025], darkSteel);
  box("Entry sill", [0, 0.19, 2.12], [1.94, 0.13, 0.34], steel, 0.025);
  box("Entry ramp", [0, 0.075, 2.55], [2.10, 0.10, 0.82], darkSteel, 0.03);
  for (const z of [2.30, 2.48, 2.66, 2.82]) box("Ramp anti-slip rib", [0, 0.135, z], [1.96, 0.024, 0.025], steel);
  for (const x of [-0.52, 0.52]) box("Faded door warning stripe", [x, 0.34, 2.17], [0.21, 0.07, 0.018], hazard, 0.01);

  const sticker = (label, pos, size, color) => {
    const canvas = document.createElement("canvas"); canvas.width = 512; canvas.height = 128;
    const ctx = canvas.getContext("2d"); ctx.fillStyle = color; ctx.fillRect(0, 0, 512, 128);
    ctx.fillStyle = "#171b19"; ctx.font = "bold 58px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(label, 256, 64);
    const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(size[0], size[1]), new THREE.MeshStandardMaterial({ map, roughness: 0.94, side: THREE.DoubleSide }));
    sign.position.set(...pos); bunker.add(sign);
  };
  sticker("SHELTER 04", [0, 2.20, 2.13], [0.94, 0.23], "#a39d79");
  sticker("CAUTION", [0, 0.43, 2.188], [0.52, 0.12], "#b49a48");

  box("Vent inset frame", [1.42, 1.27, 2.03], [0.92, 0.83, 0.12], darkSteel, 0.035);
  box("Vent backing", [1.42, 1.27, 2.105], [0.78, 0.68, 0.035], armor, 0.02);
  for (let index = 0; index < 8; index += 1) box("Vent louver", [1.42, 0.99 + index * 0.08, 2.14], [0.72, 0.035, 0.045], darkSteel, 0.01);
  box("Service cabinet", [-1.45, 1.23, 2.04], [0.58, 0.92, 0.14], darkSteel, 0.035);
  box("Service panel face", [-1.45, 1.23, 2.12], [0.46, 0.77, 0.04], armor, 0.025);
  for (let index = 0; index < 4; index += 1) box("Cabinet access seam", [-1.45, 0.91 + index * 0.20, 2.15], [0.36, 0.018, 0.02], darkSteel);
  box("Control console housing", [-1.15, 0.66, 2.07], [0.42, 0.58, 0.20], darkSteel, 0.035);
  box("Control console face", [-1.15, 0.66, 2.18], [0.34, 0.46, 0.035], steel, 0.025);
  box("Smoked control readout", [-1.15, 0.83, 2.205], [0.23, 0.075, 0.018], glass, 0.01);
  for (let row = 0; row < 3; row += 1) for (let col = 0; col < 3; col += 1) {
    sphere("Console status lamp", [-1.25 + col * 0.10, 0.52 + row * 0.095, 2.21], [0.023, 0.023, 0.013], (row + col) % 3 === 0 ? alarmMat : hazard);
  }

  for (const [x, z, height] of [[-1.64, -1.28, 0.78], [-0.94, -1.35, 0.98], [0.20, -1.40, 0.72], [1.53, -1.28, 0.60], [0.82, 0.10, 0.66]]) {
    cylinder("Roof exhaust stack", [x, 2.94 + height / 2, z], 0.19, height, darkSteel);
    cylinder("Exhaust collar", [x, 2.99, z], 0.23, 0.11, steel);
    cylinder("Stack crown", [x, 2.94 + height, z], 0.22, 0.10, armor);
  }
  const roofDuct = cylinder("Horizontal rooftop duct", [0.82, 3.10, 0.16], 0.20, 0.72, armor, [0, 0, Math.PI / 2]);
  cylinder("Duct end rim", [0.82, 3.10, 0.52], 0.22, 0.07, darkSteel, [0, 0, Math.PI / 2]);
  for (const [x, z] of [[-1.95, -1.7], [1.94, 1.65]]) {
    cylinder("Roof antenna", [x, 3.34, z], 0.024, 0.72, steel);
    sphere("Antenna tip", [x, 3.72, z], [0.035, 0.06, 0.035], hazard);
  }

  for (const side of [-1, 1]) {
    const x = side * 3.05;
    box("Flanking military supply container", [x, 0.61, 0.10], [1.08, 1.22, 1.55], cargo, 0.04);
    for (let index = 0; index < 13; index += 1) box("Container corrugation", [x + side * 0.56, 0.17 + index * 0.12, 0.10], [0.035, 0.045, 1.42], steel, 0.008);
    for (let index = 0; index < 8; index += 1) box("Container roof corrugation", [x - 0.47 + index * 0.135, 1.24, 0.10], [0.035, 0.026, 1.43], steel, 0.008);
  }
  for (const [x, z] of [[-3.64, 1.12], [-3.40, 1.50], [-3.18, 1.08], [3.64, 1.18]]) {
    cylinder("Supply drum", [x, 0.27, z], 0.18, 0.50, cargo);
    for (const y of [0.08, 0.47]) cylinder("Drum rim", [x, y, z], 0.19, 0.035, steel);
  }
  for (const [x, z, y] of [[-0.95, 0.20, 2.72], [-0.43, 0.22, 2.91], [0.15, 0.20, 2.75], [0.68, 0.23, 2.90]]) {
    sphere("Stacked canvas sandbag", [x, y, z], [0.42, 0.15, 0.23], canvas);
  }

  const alarm = new THREE.PointLight(0xff573d, 0, 6, 2);
  alarm.position.set(0, 2.55, 2.33); bunker.add(alarm);
  webgl.bunkerAlarm = alarm;
  return bunker;
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
  webgl.renderer.toneMapping = THREE.ACESFilmicToneMapping;
  webgl.renderer.toneMappingExposure = 1.08;
  webgl.renderer.shadowMap.enabled = true;
  webgl.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  if ("outputColorSpace" in webgl.renderer && THREE.SRGBColorSpace) {
    webgl.renderer.outputColorSpace = THREE.SRGBColorSpace;
  }
  webgl.renderer.domElement.className = "zombie-webgl-canvas";

  elements.zombieLane.innerHTML = "";
  elements.zombieLane.appendChild(webgl.renderer.domElement);
  webgl.promptLayer = document.createElement("div");
  webgl.promptLayer.className = "zombie-prompt-layer";
  webgl.promptLayer.setAttribute("aria-live", "polite");
  elements.zombieLane.appendChild(webgl.promptLayer);

  webgl.scene = new THREE.Scene();
  webgl.scene.fog = new THREE.FogExp2(0x111719, 0.018);

  webgl.camera = new THREE.PerspectiveCamera(44, 1, 0.1, 150);
  webgl.camera.position.set(0, 19, 30);
  webgl.camera.lookAt(0, 0, 0);

  const hemi = new THREE.HemisphereLight(0xaabfd0, 0x20231f, 1.05);
  webgl.scene.add(hemi);

  const key = new THREE.DirectionalLight(0xc7d9e3, 2.15);
  key.position.set(-13, 22, 8);
  key.castShadow = true;
  key.shadow.mapSize.set(1536, 1536);
  key.shadow.camera.left = -36;
  key.shadow.camera.right = 36;
  key.shadow.camera.top = 30;
  key.shadow.camera.bottom = -30;
  key.shadow.bias = -0.00045;
  key.shadow.radius = 5;
  webgl.scene.add(key);

  const warmFill = new THREE.PointLight(0xf29459, 110, 42, 2);
  warmFill.position.set(11, 5, 4);
  webgl.scene.add(warmFill);
  webgl.warmLight = warmFill;

  const coldFill = new THREE.PointLight(0x7198a8, 95, 52, 2);
  coldFill.position.set(-15, 7, -13);
  webgl.scene.add(coldFill);
  webgl.moonLight = coldFill;

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(110, 78, 1, 1),
    new THREE.MeshStandardMaterial({
      color: 0xb4bdb3,
      map: createRoadSurfaceTexture(THREE),
      roughness: 0.88,
      metalness: 0.08,
    }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.08;
  ground.receiveShadow = true;
  webgl.scene.add(ground);

  createGroundDebris(THREE);
  createForestBackdrop(THREE);

  webgl.bunkerRoot = createSafehouseModel(THREE);
  webgl.scene.add(webgl.bunkerRoot);
  elements.safehouse.classList.add("has-3d-model");

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
  loadRealisticZombieModel();

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

function makeZombiePart(THREE, parent, geometry, material, position, scale, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}

function createDetailedZombieModel(zombieId) {
  const THREE = getThree();
  if (!THREE) {
    return null;
  }

  const seed = Math.abs(Number(zombieId) || 0);
  const skinTones = [0x737a61, 0x8a8066, 0x65766d, 0x89857a];
  const shirts = [0x35413f, 0x45403a, 0x3b4149, 0x4a4039];
  const trousers = [0x292f30, 0x343333, 0x293139, 0x39342f];
  const skinTexture = getZombieSurfaceTexture(THREE, "skin");
  const clothTexture = getZombieSurfaceTexture(THREE, "cloth");
  const denimTexture = getZombieSurfaceTexture(THREE, "denim");
  const skin = new THREE.MeshStandardMaterial({
    color: skinTones[seed % skinTones.length],
    map: skinTexture,
    bumpMap: skinTexture,
    bumpScale: 0.028,
    roughness: 0.93,
  });
  const skinShadow = new THREE.MeshStandardMaterial({
    color: 0x4c5145,
    map: skinTexture,
    roughness: 0.98,
  });
  const shirt = new THREE.MeshStandardMaterial({
    color: shirts[seed % shirts.length],
    map: clothTexture,
    bumpMap: clothTexture,
    bumpScale: 0.045,
    roughness: 0.97,
  });
  const shirtDark = new THREE.MeshStandardMaterial({ color: 0x1d2424, map: clothTexture, roughness: 1 });
  const pants = new THREE.MeshStandardMaterial({
    color: trousers[seed % trousers.length],
    map: denimTexture,
    bumpMap: denimTexture,
    bumpScale: 0.035,
    roughness: 0.98,
  });
  const hair = new THREE.MeshStandardMaterial({ color: seed % 2 ? 0x171b1a : 0x332b25, roughness: 0.95 });
  const wound = new THREE.MeshStandardMaterial({ color: 0x39211d, map: skinTexture, roughness: 0.99 });
  const driedBlood = new THREE.MeshStandardMaterial({ color: 0x512922, map: skinTexture, roughness: 0.98 });
  const bone = new THREE.MeshStandardMaterial({ color: 0xa59d7c, roughness: 0.8 });
  const socket = new THREE.MeshStandardMaterial({ color: 0x22231d, roughness: 0.65 });
  const eye = new THREE.MeshStandardMaterial({ color: 0xb8ae84, roughness: 0.62 });
  const pupil = new THREE.MeshStandardMaterial({ color: 0x141713, roughness: 0.25 });

  const sphere = getSharedZombieGeometry("sphere", () => new THREE.SphereGeometry(1, 28, 20));
  const capsule = getSharedZombieGeometry("capsule", () => new THREE.CapsuleGeometry(0.5, 0.7, 6, 16));
  const tooth = getSharedZombieGeometry("tooth", () => new THREE.BoxGeometry(1, 1, 1));
  const tornCloth = getSharedZombieGeometry("torn-cloth", () => new THREE.ConeGeometry(0.5, 1, 3, 1));
  const hairCap = getSharedZombieGeometry(
    "hair-cap",
    () => new THREE.SphereGeometry(1, 18, 8, 0, Math.PI * 2, 0, Math.PI * 0.58),
  );

  const model = new THREE.Group();
  model.scale.setScalar(randomRange(0.96, 1.07));

  const torso = new THREE.Group();
  torso.position.y = 1.02;
  model.add(torso);
  makeZombiePart(THREE, torso, sphere, shirt, [0, 0.02, 0], [0.39, 0.54, 0.255]);
  makeZombiePart(THREE, torso, sphere, skinShadow, [0, -0.26, 0.184], [0.22, 0.16, 0.018]);
  for (let rib = 0; rib < 4; rib += 1) {
    makeZombiePart(
      THREE,
      torso,
      capsule,
      bone,
      [0, -0.21 + rib * 0.07, 0.205],
      [0.12, 0.018, 0.013],
      [0, 0, Math.PI / 2],
    );
  }
  makeZombiePart(THREE, torso, sphere, wound, [-0.22, -0.1, 0.199], [0.06, 0.12, 0.014], [0, 0, -0.38]);
  makeZombiePart(THREE, torso, sphere, driedBlood, [0.22, -0.2, 0.2], [0.052, 0.084, 0.012], [0, 0, 0.42]);
  makeZombiePart(THREE, torso, sphere, shirt, [0, 0.47, 0], [0.43, 0.16, 0.27]);

  for (let tear = 0; tear < 3; tear += 1) {
    const shard = makeZombiePart(
      THREE,
      torso,
      tornCloth,
      tear === 1 ? pants : shirt,
      [-0.2 + tear * 0.2, -0.46 + randomRange(-0.025, 0.025), 0.02],
      [0.07, randomRange(0.16, 0.26), 0.05],
      [randomRange(-0.2, 0.2), randomRange(0, Math.PI), Math.PI + randomRange(-0.35, 0.35)],
    );
    shard.castShadow = false;
  }

  const head = new THREE.Group();
  head.position.set(0, 1.48, 0);
  model.add(head);
  makeZombiePart(THREE, head, capsule, skinShadow, [0, -0.05, 0], [0.13, 0.2, 0.13]);
  makeZombiePart(THREE, head, sphere, skin, [0, 0.2, 0], [0.205, 0.25, 0.2]);
  makeZombiePart(THREE, head, sphere, skinShadow, [0, 0.04, 0.052], [0.154, 0.115, 0.177]);
  makeZombiePart(THREE, head, sphere, skin, [0, 0.085, 0.191], [0.045, 0.062, 0.035]);
  makeZombiePart(THREE, head, sphere, wound, [0, 0.015, 0.216], [0.118, 0.039, 0.022]);
  for (let toothIndex = 0; toothIndex < 4; toothIndex += 1) {
    makeZombiePart(
      THREE,
      head,
      tooth,
      bone,
      [-0.072 + toothIndex * 0.048, 0.04, 0.234],
      [0.026, 0.035, 0.012],
      [0, 0, toothIndex % 2 ? 0.08 : -0.08],
    );
  }

  for (const side of [-1, 1]) {
    makeZombiePart(THREE, head, sphere, skinShadow, [side * 0.205, 0.16, 0], [0.052, 0.09, 0.078]);
    makeZombiePart(THREE, head, sphere, socket, [side * 0.082, 0.22, 0.171], [0.064, 0.058, 0.038]);
    makeZombiePart(THREE, head, sphere, eye, [side * 0.082, 0.219, 0.201], [0.034, 0.034, 0.018]);
    makeZombiePart(THREE, head, sphere, pupil, [side * 0.082 + 0.008, 0.219, 0.216], [0.012, 0.024, 0.01]);
    makeZombiePart(THREE, head, capsule, skinShadow, [side * 0.081, 0.285, 0.17], [0.078, 0.018, 0.031], [0, 0, side * -0.12]);
    makeZombiePart(THREE, head, sphere, hair, [side * 0.16, 0.31, -0.015], [0.052, 0.1, 0.19], [0, 0, side * -0.12]);
  }
  makeZombiePart(THREE, head, hairCap, hair, [0, 0.37, -0.01], [0.214, 0.15, 0.21]);
  makeZombiePart(THREE, head, sphere, driedBlood, [-0.13, 0.16, 0.168], [0.045, 0.062, 0.018], [0, 0, 0.3]);

  const makeArm = (side) => {
    const shoulder = new THREE.Group();
    shoulder.position.set(side * 0.35, 1.35, 0.015);
    model.add(shoulder);
    makeZombiePart(THREE, shoulder, sphere, skin, [side * -0.025, -0.015, 0], [0.18, 0.19, 0.19]);
    makeZombiePart(THREE, shoulder, capsule, skin, [0, -0.24, 0.015], [0.145, 0.31, 0.15]);
    makeZombiePart(THREE, shoulder, sphere, skinShadow, [0, -0.49, 0.025], [0.13, 0.13, 0.13]);

    const forearm = new THREE.Group();
    forearm.position.set(0, -0.48, 0.055);
    shoulder.add(forearm);
    makeZombiePart(THREE, forearm, capsule, skin, [0, -0.22, 0], [0.105, 0.3, 0.11], [0, 0, side * -0.08]);
    makeZombiePart(THREE, forearm, sphere, skinShadow, [0, -0.45, 0.035], [0.095, 0.12, 0.1]);
    makeZombiePart(THREE, forearm, sphere, skin, [0, -0.54, 0.075], [0.09, 0.12, 0.1], [0.18, 0, side * 0.12]);
    for (let finger = 0; finger < 3; finger += 1) {
      makeZombiePart(
        THREE,
        forearm,
        capsule,
        skin,
        [-0.052 + finger * 0.052, -0.65, 0.105],
        [0.024, 0.1, 0.024],
        [0.22, 0, (finger - 1) * 0.12],
      );
    }
    makeZombiePart(THREE, forearm, capsule, skin, [side * 0.092, -0.57, 0.08], [0.025, 0.075, 0.025], [0.5, 0, side * 0.5]);
    return { shoulder, forearm };
  };

  const makeLeg = (side) => {
    const hip = new THREE.Group();
    hip.position.set(side * 0.17, 0.67, 0);
    model.add(hip);
    makeZombiePart(THREE, hip, sphere, pants, [0, -0.14, 0], [0.19, 0.23, 0.2]);
    makeZombiePart(THREE, hip, capsule, pants, [0, -0.34, 0], [0.155, 0.32, 0.16]);

    const knee = new THREE.Group();
    knee.position.set(0, -0.6, 0.015);
    hip.add(knee);
    makeZombiePart(THREE, knee, sphere, pants, [0, 0, 0], [0.135, 0.13, 0.14]);
    makeZombiePart(THREE, knee, capsule, pants, [0, -0.27, 0], [0.12, 0.29, 0.13]);
    makeZombiePart(THREE, knee, sphere, skin, [0, -0.5, 0.04], [0.12, 0.13, 0.18]);
    makeZombiePart(THREE, knee, sphere, hair, [0, -0.58, 0.075], [0.14, 0.055, 0.22]);
    return { hip, knee };
  };

  const leftArm = makeArm(-1);
  const rightArm = makeArm(1);
  const leftLeg = makeLeg(-1);
  const rightLeg = makeLeg(1);
  model.userData.rig = { torso, head, leftArm, rightArm, leftLeg, rightLeg };
  return model;
}

function cloneZombieModelInstance(zombieId) {
  if (webgl.modelTemplate) {
    const model = window.SkeletonUtils
      ? window.SkeletonUtils.clone(webgl.modelTemplate)
      : webgl.modelTemplate.clone(true);
    model.rotation.y = Math.PI;
    model.scale.setScalar(randomRange(0.96, 1.04));
    model.userData.sharedAsset = true;
    const bone = (name) => model.getObjectByName(name);
    const leftUpperArm = bone("ArmUpper_L");
    const rightUpperArm = bone("ArmUpper_R");
    const leftThigh = bone("Thigh_L");
    const rightThigh = bone("Thigh_R");
    if (bone("Spine") && bone("Head") && leftUpperArm && rightUpperArm && leftThigh && rightThigh) {
      model.userData.rig = {
        torso: bone("Spine"),
        head: bone("Head"),
        leftArm: { shoulder: leftUpperArm, forearm: bone("ArmLower_L") },
        rightArm: { shoulder: rightUpperArm, forearm: bone("ArmLower_R") },
        leftLeg: { hip: leftThigh, knee: bone("Shin_L") },
        rightLeg: { hip: rightThigh, knee: bone("Shin_R") },
      };
    }
    model.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });
    return { model, mixer: null, isFallback: false };
  }
  return { model: createDetailedZombieModel(zombieId), mixer: null, isFallback: false };
}

function loadRealisticZombieModel() {
  const THREE = getThree();
  if (!THREE || !window.GLTFLoader) return;
  const loader = new window.GLTFLoader();
  const onModelLoaded = (gltf) => {
      const template = gltf.scene;
      template.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
          if (node.material) node.material.side = THREE.FrontSide;
        }
      });
      webgl.modelTemplate = template;

      for (const [id, visual] of webgl.zombieVisuals) {
        const replacement = cloneZombieModelInstance(id).model;
        visual.root.remove(visual.model);
        if (!visual.model.userData.sharedAsset) disposeObject3D(visual.model);
        visual.model = replacement;
        visual.root.add(replacement);
      }
    };
  const onModelError = (error) => console.error("Could not load realistic zombie model; using built-in fallback.", error);

  if (window.ZOMBIE_GLB_BASE64) {
    const binary = window.atob(window.ZOMBIE_GLB_BASE64);
    const buffer = new ArrayBuffer(binary.length);
    const bytes = new Uint8Array(buffer);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    loader.parse(buffer, "", onModelLoaded, onModelError);
    return;
  }

  loader.load("assets/models/zombie-realistic.glb", onModelLoaded, undefined, onModelError);
}

function updateZombiePromptOverlays() {
  if (!webgl.promptLayer || !webgl.camera) return;
  const liveIds = new Set();
  const nearest = getNearestZombie();
  const bounds = elements.zombieLane.getBoundingClientRect();
  const THREE = getThree();

  for (const zombie of state.zombies) {
    liveIds.add(zombie.id);
    let prompt = webgl.promptElements.get(zombie.id);
    if (!prompt) {
      prompt = document.createElement("div");
      prompt.className = "webgl-zombie-prompt";
      prompt.innerHTML = '<span class="webgl-prompt-text"></span><span class="webgl-prompt-meta"></span>';
      webgl.promptLayer.appendChild(prompt);
      webgl.promptElements.set(zombie.id, prompt);
    }

    const isTarget = nearest && nearest.id === zombie.id;
    prompt.classList.toggle("target", Boolean(isTarget));
    prompt.classList.toggle("sieging", Boolean(zombie.sieging));
    prompt.classList.toggle("hidden-zombie", Boolean(zombie.exploding));
    prompt.querySelector(".webgl-prompt-text").textContent = formatPrompt(zombie.challenge);
    const meters = Math.max(0, Math.ceil(getDistanceToSafehouse(zombie) * 2.25));
    prompt.querySelector(".webgl-prompt-meta").textContent = zombie.sieging ? "Breaking safehouse" : `${meters}m to safehouse`;

    const visual = webgl.zombieVisuals.get(zombie.id);
    if (!visual || zombie.exploding) continue;
    const headPoint = new THREE.Vector3(0, 2.18, 0);
    visual.root.localToWorld(headPoint);
    headPoint.project(webgl.camera);
    const x = (headPoint.x * 0.5 + 0.5) * bounds.width;
    const y = (-headPoint.y * 0.5 + 0.5) * bounds.height;
    const onScreen = headPoint.z < 1 && Math.abs(headPoint.x) < 1.12 && Math.abs(headPoint.y) < 1.12;
    prompt.style.display = onScreen ? "grid" : "none";
    prompt.style.left = `${x}px`;
    prompt.style.top = `${y}px`;
  }

  for (const [id, prompt] of webgl.promptElements) {
    if (!liveIds.has(id)) {
      prompt.remove();
      webgl.promptElements.delete(id);
    }
  }
}

function disposeObject3D(root) {
  if (!root) {
    return;
  }
  root.traverse((node) => {
    if (node.geometry && !webgl.sharedGeometries.has(node.geometry)) {
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
  if (visual.shadow && visual.shadow.parent) {
    visual.shadow.parent.remove(visual.shadow);
  }
  if (!visual.model || !visual.model.userData.sharedAsset) disposeObject3D(visual.root);
  if (visual.shadow && visual.shadow.material) {
    visual.shadow.material.dispose();
  }
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

  const instance = cloneZombieModelInstance(zombie.id);
  if (!instance.model) {
    return null;
  }

  const root = new THREE.Group();
  root.userData.zombieId = zombie.id;
  root.add(instance.model);
  root.scale.set(1, 1, 1);
  webgl.scene.add(root);

  const shadowMaterial = new THREE.MeshBasicMaterial({
    color: 0x050807,
    transparent: true,
    opacity: 0.46,
    depthWrite: false,
  });
  const shadow = new THREE.Mesh(
    getSharedZombieGeometry("contact-shadow", () => new THREE.CircleGeometry(1, 24)),
    shadowMaterial,
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.012;
  shadow.scale.set(0.52, 0.83, 1);
  shadow.renderOrder = 2;
  webgl.scene.add(shadow);

  const visual = {
    root,
    model: instance.model,
    shadow,
    mixer: instance.mixer,
    actions: Object.create(null),
    currentAction: null,
    currentActionKey: "",
    deathStartedAt: 0,
    bobSeed: Math.random() * Math.PI * 2,
  };

  webgl.zombieVisuals.set(zombie.id, visual);
  return visual;
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

function updateProceduralZombiePose(visual, zombie, nowMs) {
  const rig = visual.model && visual.model.userData.rig;
  if (!rig) {
    return;
  }

  const phase = nowMs * 0.00215 + visual.bobSeed;
  const gait = zombie.sieging ? 0 : Math.sin(phase);
  const breathing = Math.sin(phase * 0.53 + 1.1);
  const siegeSway = zombie.sieging ? Math.sin(nowMs * 0.0028 + visual.bobSeed) : 0;
  const smashing = zombie.sieging && nowMs < (zombie.smashAnimUntil || 0);
  const impact = smashing ? Math.max(0, Math.sin(nowMs * 0.012)) : 0;

  rig.torso.rotation.x = 0.12 + breathing * 0.018 + impact * 0.11;
  rig.torso.rotation.y = Math.sin(phase * 0.38) * 0.025;
  rig.torso.rotation.z = Math.sin(phase * 0.52) * 0.025;
  rig.head.rotation.x = -0.13 + Math.sin(phase * 0.6) * 0.045 - impact * 0.08;
  rig.head.rotation.y = Math.sin(phase * 0.31) * 0.08;
  rig.head.rotation.z = Math.sin(phase * 0.43) * 0.035;

  rig.leftArm.shoulder.rotation.x = -0.48 + gait * 0.24 - siegeSway * 0.1 - impact * 0.55;
  rig.rightArm.shoulder.rotation.x = -0.63 - gait * 0.24 + siegeSway * 0.1 + impact * 0.48;
  rig.leftArm.shoulder.rotation.z = 0.09 + Math.sin(phase * 0.5) * 0.025;
  rig.rightArm.shoulder.rotation.z = -0.1 + Math.sin(phase * 0.5 + 0.5) * 0.025;
  rig.leftArm.forearm.rotation.x = -0.12 - impact * 0.2;
  rig.rightArm.forearm.rotation.x = -0.18 + impact * 0.16;

  rig.leftLeg.hip.rotation.x = gait * 0.31;
  rig.rightLeg.hip.rotation.x = -gait * 0.31;
  rig.leftLeg.knee.rotation.x = Math.max(0, -gait) * 0.42;
  rig.rightLeg.knee.rotation.x = Math.max(0, gait) * 0.42;
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
    const fall = deathProgress * deathProgress;
    const fallDirection = zombie.id % 2 ? 1 : -1;
    visual.root.scale.set(1 - deathProgress * 0.14, 1 - deathProgress * 0.32, 1 - deathProgress * 0.14);
    visual.root.position.y = Math.sin(deathProgress * Math.PI) * 0.08;
    visual.root.rotation.z = fallDirection * fall * 1.35;
    visual.root.rotation.x = fall * 0.16;
    if (visual.shadow) {
      visual.shadow.position.set(visual.root.position.x, 0.012, visual.root.position.z);
      visual.shadow.material.opacity = 0.46 * (1 - deathProgress * 0.7);
      visual.shadow.scale.set(0.52 + fall * 0.3, 0.83 + fall * 0.16, 1);
    }
    return;
  }

  visual.deathStartedAt = 0;
  const settle = 1 - Math.exp(-deltaSec * 14);
  visual.root.scale.x += (1 - visual.root.scale.x) * settle;
  visual.root.scale.y += (1 - visual.root.scale.y) * settle;
  visual.root.scale.z += (1 - visual.root.scale.z) * settle;
  visual.root.position.y = zombie.sieging
    ? Math.sin(nowMs * 0.003 + visual.bobSeed) * 0.022
    : Math.abs(Math.sin(nowMs * 0.00215 + visual.bobSeed)) * 0.035;

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
  visual.root.rotation.x = 0;
  visual.root.rotation.z = zombie.sieging ? Math.sin(nowMs * 0.0024 + visual.bobSeed) * 0.018 : 0;
  if (visual.shadow) {
    visual.shadow.position.set(visual.root.position.x, 0.012, visual.root.position.z);
    visual.shadow.material.opacity = zombie.sieging ? 0.52 : 0.42;
    visual.shadow.scale.set(0.52, 0.83, 1);
  }
  updateProceduralZombiePose(visual, zombie, nowMs);
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
  updateZombiePromptOverlays();

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

  if (webgl.bunkerAlarm) {
    const sieged = state.zombies.some((zombie) => zombie.sieging && !zombie.exploding);
    webgl.bunkerAlarm.intensity = sieged ? 2.5 + (Math.sin(nowMs * 0.012) * 0.5 + 0.5) * 3.5 : 0;
  }
  if (webgl.bunkerRoot) {
    const impact = webgl.bunkerHitUntil - nowMs;
    webgl.bunkerRoot.position.x = impact > 0
      ? Math.sin(impact * 0.08) * 0.045 * clamp(impact / 260, 0, 1)
      : 0;
  }
  for (const crack of webgl.bunkerCracks) {
    crack.material.opacity = webgl.bunkerDamageTier * 0.14;
  }

  if (webgl.warmLight) {
    webgl.warmLight.intensity = 106 + Math.sin(nowMs * 0.006) * 3.5 + Math.sin(nowMs * 0.017) * 1.2;
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
  webgl.bunkerDamageTier = tier;
  if (tier > 0) {
    elements.safehouse.classList.add(`damage-${tier}`);
  }

  if (!hit) {
    elements.safehouse.classList.remove("hit");
    return;
  }

  webgl.bunkerHitUntil = (performance.now ? performance.now() : Date.now()) + 260;

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

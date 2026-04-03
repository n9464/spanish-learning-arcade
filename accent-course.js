const SKILL_LABELS = {
  foundation: "Foundations",
  agudas: "Agudas",
  graves: "Graves / llanas",
  esdrujulas: "Esdrújulas",
  sobresdrujulas: "Sobresdrújulas",
  vowels: "Hiatos / diphthongs",
  monosyllables: "Monosyllables",
  diacritical: "Diacritical tilde",
  interrogatives: "Question words",
  mixed: "Mixed review",
};

const PRACTICE_BLOCKS = [
  {
    id: "practice-foundations",
    stepIndex: 0,
    title: "Foundation check",
    intro: "Start by separating sound from spelling.",
    questions: [
      {
        id: "f1",
        type: "choice",
        modeLabel: "Multiple choice",
        skill: "foundation",
        prompt: "Which statement is true about stress and the written tilde?",
        options: [
          "Every stressed syllable must carry a written tilde.",
          "Every Spanish word has a stressed syllable, but only some words need a written tilde.",
          "Only long words have a stressed syllable.",
        ],
        answerIndex: 1,
        rule: "Stress vs. written accent",
        explanation:
          "Stress is part of pronunciation, so every word has it. The written tilde appears only when spelling rules or a special accent rule require it.",
        syllables: ["can", "ción"],
        stressedIndex: 1,
        stressLabel: "last syllable",
        correctAnswerText:
          "Every Spanish word has a stressed syllable, but only some words need a written tilde.",
      },
      {
        id: "f2",
        type: "stress",
        modeLabel: "Click the stressed syllable",
        skill: "foundation",
        prompt: 'Click the stressed syllable in "ventana".',
        syllables: ["ven", "ta", "na"],
        answerIndex: 1,
        rule: "Spoken stress",
        explanation:
          "ven-TA-na is stressed on the penultimate syllable. That makes it a grave / llana word in pronunciation, even though there is no written tilde.",
        stressLabel: "penultimate syllable",
        correctAnswerText: "ta",
      },
      {
        id: "f3",
        type: "yesno",
        modeLabel: "Does it need a tilde?",
        skill: "foundation",
        prompt: 'Does "sofá" need a tilde?',
        word: "sofá",
        answer: true,
        answerWord: "sofá",
        rule: "Palabra aguda",
        explanation:
          "so-FÁ is an aguda because the stress falls on the last syllable. It ends in a vowel, so the written tilde is required.",
        syllables: ["so", "fá"],
        stressedIndex: 1,
        stressLabel: "last syllable",
      },
    ],
  },
  {
    id: "practice-agudas-graves",
    stepIndex: 1,
    title: "Agudas and graves drill",
    intro: "Decide the type, then check the ending.",
    questions: [
      {
        id: "ag1",
        type: "yesno",
        modeLabel: "Does it need a tilde?",
        skill: "agudas",
        prompt: 'Does "reloj" need a tilde?',
        word: "reloj",
        answer: false,
        answerWord: "reloj",
        rule: "Palabra aguda",
        explanation:
          "re-LOJ is an aguda because the stress falls on the last syllable. It ends in j, not in vowel, n, or s, so it does not take a tilde.",
        syllables: ["re", "loj"],
        stressedIndex: 1,
        stressLabel: "last syllable",
      },
      {
        id: "ag2",
        type: "fill",
        modeLabel: "Fill in the tilde",
        skill: "agudas",
        prompt: 'Write the correct spelling: "camion"',
        answer: "camión",
        rule: "Palabra aguda",
        explanation:
          "ca-MIÓN is an aguda ending in n, so the last syllable must carry a tilde.",
        syllables: ["ca", "mión"],
        stressedIndex: 1,
        stressLabel: "last syllable",
      },
      {
        id: "ag3",
        type: "yesno",
        modeLabel: "Does it need a tilde?",
        skill: "graves",
        prompt: 'Does "lapiz" need a tilde?',
        word: "lápiz",
        answer: true,
        answerWord: "lápiz",
        rule: "Palabra grave / llana",
        explanation:
          "LÁ-piz is a grave / llana because the stress falls on the penultimate syllable. It ends in z, so it must carry a tilde.",
        syllables: ["lá", "piz"],
        stressedIndex: 0,
        stressLabel: "penultimate syllable",
      },
      {
        id: "ag4",
        type: "stress",
        modeLabel: "Click the stressed syllable",
        skill: "graves",
        prompt: 'Click the stressed syllable in "árbol".',
        syllables: ["ár", "bol"],
        answerIndex: 0,
        rule: "Palabra grave / llana",
        explanation:
          "ÁR-bol is stressed on the penultimate syllable, so it is grave / llana. Because it ends in l, the written tilde is required.",
        stressLabel: "penultimate syllable",
        correctAnswerText: "ár",
      },
    ],
  },
  {
    id: "practice-esdrujulas",
    stepIndex: 2,
    title: "Esdrújulas and sobresdrújulas drill",
    intro: "These are the easiest to spot because they always keep the tilde.",
    questions: [
      {
        id: "es1",
        type: "choice",
        modeLabel: "Multiple choice",
        skill: "esdrujulas",
        prompt: "What do esdrújulas and sobresdrújulas have in common?",
        options: [
          "They take a tilde only if they end in vowel, n, or s.",
          "They never take a tilde.",
          "They always take a tilde.",
        ],
        answerIndex: 2,
        rule: "Esdrújulas and sobresdrújulas",
        explanation:
          "Once the stress moves to the third syllable from the end or farther left, Spanish spelling marks it every time.",
        syllables: ["mú", "si", "ca"],
        stressedIndex: 0,
        stressLabel: "third syllable from the end",
        correctAnswerText: "They always take a tilde.",
      },
      {
        id: "es2",
        type: "fill",
        modeLabel: "Fill in the tilde",
        skill: "esdrujulas",
        prompt: 'Write the correct spelling: "telefono"',
        answer: "teléfono",
        rule: "Palabra esdrújula",
        explanation:
          "te-LÉ-fo-no is an esdrújula, so it always carries a tilde on the stressed syllable.",
        syllables: ["te", "lé", "fo", "no"],
        stressedIndex: 1,
        stressLabel: "third syllable from the end",
      },
      {
        id: "es3",
        type: "fill",
        modeLabel: "Fill in the tilde",
        skill: "sobresdrujulas",
        prompt: 'Write the correct spelling: "explicamelo"',
        answer: "explícamelo",
        rule: "Palabra sobresdrújula",
        explanation:
          "ex-PLÍ-ca-me-lo is stressed before the third syllable from the end. That makes it sobresdrújula, so it always needs a tilde.",
        syllables: ["ex", "plí", "ca", "me", "lo"],
        stressedIndex: 1,
        stressLabel: "before the third syllable from the end",
      },
    ],
  },
  {
    id: "practice-vowels",
    stepIndex: 3,
    title: "Vowel team drill",
    intro: "Watch what happens when weak vowels take the stress.",
    questions: [
      {
        id: "v1",
        type: "choice",
        modeLabel: "Multiple choice",
        skill: "vowels",
        prompt: 'Why does "país" carry a tilde?',
        options: [
          "Because it is monosyllabic.",
          "Because the stressed weak vowel í forms a hiato and breaks the vowel pair.",
          "Because every word ending in s takes a tilde.",
        ],
        answerIndex: 1,
        rule: "Hiato with stressed í / ú",
        explanation:
          "pa-ÍS has a stressed weak vowel. The tilde on í forces a hiato, so the vowels belong to different syllables.",
        syllables: ["pa", "ís"],
        stressedIndex: 1,
        stressLabel: "last syllable",
        correctAnswerText: "Because the stressed weak vowel í forms a hiato and breaks the vowel pair.",
      },
      {
        id: "v2",
        type: "yesno",
        modeLabel: "Does it need a tilde?",
        skill: "vowels",
        prompt: 'Does "rio" need a tilde if you mean the noun "river"?',
        word: "río",
        answer: true,
        answerWord: "río",
        rule: "Hiato with stressed í / ú",
        explanation:
          "RÍ-o has a stressed weak vowel í. The tilde marks that the weak vowel breaks away and forms a hiato.",
        syllables: ["rí", "o"],
        stressedIndex: 0,
        stressLabel: "penultimate syllable",
      },
      {
        id: "v3",
        type: "fill",
        modeLabel: "Fill in the tilde",
        skill: "vowels",
        prompt: 'Write the correct spelling: "baul"',
        answer: "baúl",
        rule: "Hiato with stressed ú",
        explanation:
          "ba-ÚL separates the vowels because ú is stressed. The tilde marks the hiato.",
        syllables: ["ba", "úl"],
        stressedIndex: 1,
        stressLabel: "last syllable",
      },
      {
        id: "v4",
        type: "yesno",
        modeLabel: "Does it need a tilde?",
        skill: "vowels",
        prompt: 'Does "despues" need a tilde?',
        word: "después",
        answer: true,
        answerWord: "después",
        rule: "Diphthong plus aguda rule",
        explanation:
          "des-PUÉS is an aguda ending in s, so it needs a tilde. The mark goes on the strong vowel inside the diphthong.",
        syllables: ["des", "pués"],
        stressedIndex: 1,
        stressLabel: "last syllable",
      },
    ],
  },
  {
    id: "practice-diacritics",
    stepIndex: 4,
    title: "Monosyllables and diacritical tilde drill",
    intro: "Meaning decides the accent here, not the normal stress rule.",
    questions: [
      {
        id: "d1",
        type: "choice",
        modeLabel: "Sentence practice",
        skill: "diacritical",
        prompt: "Choose the correct word for the blank.",
        stem: "___ libro está en la mesa.",
        options: ["Tú", "Tu"],
        answerIndex: 1,
        rule: "Diacritical tilde: tú / tu",
        explanation:
          "The sentence needs the possessive adjective 'your', so it is tu without tilde. Tú with tilde is the subject pronoun 'you'.",
        syllables: ["tu"],
        stressedIndex: 0,
        stressLabel: "only syllable",
        correctAnswerText: "Tu",
      },
      {
        id: "d2",
        type: "choice",
        modeLabel: "Sentence practice",
        skill: "diacritical",
        prompt: "Choose the correct word for the blank.",
        stem: "Quiero ___ con limón.",
        options: ["té", "te"],
        answerIndex: 0,
        rule: "Diacritical tilde: té / te",
        explanation:
          "Here the meaning is the drink 'tea', so the correct form is té with tilde. Te without tilde is the object pronoun.",
        syllables: ["té"],
        stressedIndex: 0,
        stressLabel: "only syllable",
        correctAnswerText: "té",
      },
      {
        id: "d3",
        type: "choice",
        modeLabel: "Sentence practice",
        skill: "diacritical",
        prompt: "Choose the correct word for the blank.",
        stem: "___ quieres venir, avísame.",
        options: ["Sí", "Si"],
        answerIndex: 1,
        rule: "Diacritical tilde: sí / si",
        explanation:
          "The sentence means 'if you want to come', so the word is the conjunction si without tilde. Sí with tilde means 'yes' or refers to oneself.",
        syllables: ["si"],
        stressedIndex: 0,
        stressLabel: "only syllable",
        correctAnswerText: "Si",
      },
      {
        id: "d4",
        type: "choice",
        modeLabel: "Sentence practice",
        skill: "diacritical",
        prompt: "Choose the correct word for the blank.",
        stem: "No ___ la respuesta.",
        options: ["sé", "se"],
        answerIndex: 0,
        rule: "Diacritical tilde: sé / se",
        explanation:
          "The meaning is 'I know', so the form is sé with tilde. Se without tilde is a pronoun.",
        syllables: ["sé"],
        stressedIndex: 0,
        stressLabel: "only syllable",
        correctAnswerText: "sé",
      },
    ],
  },
  {
    id: "practice-interrogatives",
    stepIndex: 5,
    title: "Question-word drill",
    intro: "Direct and indirect questions keep the accent.",
    questions: [
      {
        id: "i1",
        type: "choice",
        modeLabel: "Sentence practice",
        skill: "interrogatives",
        prompt: "Choose the correct word for the blank.",
        stem: "¿___ hora es?",
        options: ["Que", "Qué"],
        answerIndex: 1,
        rule: "Interrogative qué",
        explanation:
          "The word introduces a direct question, so it is qué with tilde.",
        syllables: ["qué"],
        stressedIndex: 0,
        stressLabel: "only syllable",
        correctAnswerText: "Qué",
      },
      {
        id: "i2",
        type: "choice",
        modeLabel: "Sentence practice",
        skill: "interrogatives",
        prompt: "Choose the correct word for the blank.",
        stem: "No sé ___ vive Ana.",
        options: ["donde", "dónde"],
        answerIndex: 1,
        rule: "Indirect question: dónde",
        explanation:
          "There is no question mark, but the sentence still contains an indirect question: 'I do not know where Ana lives.' That keeps the tilde in dónde.",
        syllables: ["dón", "de"],
        stressedIndex: 0,
        stressLabel: "penultimate syllable",
        correctAnswerText: "dónde",
      },
      {
        id: "i3",
        type: "choice",
        modeLabel: "Sentence practice",
        skill: "interrogatives",
        prompt: "Choose the correct word for the blank.",
        stem: "¡___ llueve!",
        options: ["Como", "Cómo"],
        answerIndex: 1,
        rule: "Exclamative cómo",
        explanation:
          "The word introduces an exclamation, so Spanish writes it with a tilde: cómo.",
        syllables: ["có", "mo"],
        stressedIndex: 0,
        stressLabel: "penultimate syllable",
        correctAnswerText: "Cómo",
      },
    ],
  },
  {
    id: "practice-workshop",
    stepIndex: 6,
    title: "Workshop drills",
    intro: "Mix the rules the way they appear in real writing.",
    questions: [
      {
        id: "w1",
        type: "sort",
        modeLabel: "Sorting activity",
        skill: "mixed",
        prompt: "Sort each word into the correct word type.",
        rule: "Word classification",
        categories: [
          { id: "aguda", label: "Aguda" },
          { id: "grave", label: "Grave / llana" },
          { id: "esdrujula", label: "Esdrújula" },
          { id: "sobresdrujula", label: "Sobresdrújula" },
        ],
        items: [
          {
            word: "café",
            correct: "aguda",
            rule: "Palabra aguda",
            explanation:
              "ca-FÉ is stressed on the last syllable, so it is aguda.",
            syllables: ["ca", "fé"],
            stressedIndex: 1,
            stressLabel: "last syllable",
          },
          {
            word: "árbol",
            correct: "grave",
            rule: "Palabra grave / llana",
            explanation:
              "ÁR-bol is stressed on the penultimate syllable, so it is grave / llana.",
            syllables: ["ár", "bol"],
            stressedIndex: 0,
            stressLabel: "penultimate syllable",
          },
          {
            word: "música",
            correct: "esdrujula",
            rule: "Palabra esdrújula",
            explanation:
              "MÚ-si-ca is stressed on the third syllable from the end, so it is esdrújula.",
            syllables: ["mú", "si", "ca"],
            stressedIndex: 0,
            stressLabel: "third syllable from the end",
          },
          {
            word: "explícamelo",
            correct: "sobresdrujula",
            rule: "Palabra sobresdrújula",
            explanation:
              "ex-PLÍ-ca-me-lo is stressed before the third syllable from the end, so it is sobresdrújula.",
            syllables: ["ex", "plí", "ca", "me", "lo"],
            stressedIndex: 1,
            stressLabel: "before the third syllable from the end",
          },
        ],
      },
      {
        id: "w2",
        type: "stress",
        modeLabel: "Click the stressed syllable",
        skill: "mixed",
        prompt: 'Click the stressed syllable in "murciélago".',
        syllables: ["mur", "cié", "la", "go"],
        answerIndex: 1,
        rule: "Palabra esdrújula",
        explanation:
          "mur-CIÉ-la-go is stressed on the third syllable from the end, so it is esdrújula and always takes a tilde.",
        stressLabel: "third syllable from the end",
        correctAnswerText: "cié",
      },
      {
        id: "w3",
        type: "fill",
        modeLabel: "Fill in the tilde",
        skill: "mixed",
        prompt: 'Write the correct spelling: "facilmente"',
        answer: "fácilmente",
        rule: "-mente adverbs keep the base accent",
        explanation:
          "The adjective fácil already carries a tilde, and the adverb in -mente keeps that accent: fácilmente.",
        syllables: ["fá", "cil", "men", "te"],
        stressedIndex: 0,
        stressLabel: "base adjective keeps its written accent",
      },
      {
        id: "w4",
        type: "choice",
        modeLabel: "Sentence practice",
        skill: "mixed",
        prompt: "Choose the correct word for the blank.",
        stem: "___ no termino el ejercicio.",
        options: ["Aun", "Aún"],
        answerIndex: 1,
        rule: "Diacritical tilde: aún / aun",
        explanation:
          "The meaning is 'still', so the correct form is aún with tilde. Aun without tilde usually means 'even' or 'including'.",
        syllables: ["a", "ún"],
        stressedIndex: 1,
        stressLabel: "last syllable",
        correctAnswerText: "Aún",
      },
    ],
  },
  {
    id: "practice-diagnostic",
    stepIndex: 7,
    title: "Diagnostic quiz by rule type",
    intro: "One quick challenge for each major rule family.",
    questions: [
      {
        id: "dg1",
        type: "fill",
        modeLabel: "Agudas diagnostic",
        skill: "agudas",
        prompt: 'Write the correct spelling: "compas"',
        answer: "compás",
        rule: "Palabra aguda",
        explanation:
          "com-PÁS is an aguda ending in s, so it needs a tilde.",
        syllables: ["com", "pás"],
        stressedIndex: 1,
        stressLabel: "last syllable",
      },
      {
        id: "dg2",
        type: "yesno",
        modeLabel: "Graves diagnostic",
        skill: "graves",
        prompt: 'Does "resumen" need a tilde?',
        word: "resumen",
        answer: false,
        answerWord: "resumen",
        rule: "Palabra grave / llana",
        explanation:
          "re-SU-men is grave / llana, but it ends in n, so it does not take a tilde.",
        syllables: ["re", "su", "men"],
        stressedIndex: 1,
        stressLabel: "penultimate syllable",
      },
      {
        id: "dg3",
        type: "fill",
        modeLabel: "Esdrújulas diagnostic",
        skill: "esdrujulas",
        prompt: 'Write the correct spelling: "pajaro"',
        answer: "pájaro",
        rule: "Palabra esdrújula",
        explanation:
          "PÁ-ja-ro is esdrújula, so it always needs a tilde.",
        syllables: ["pá", "ja", "ro"],
        stressedIndex: 0,
        stressLabel: "third syllable from the end",
      },
      {
        id: "dg4",
        type: "fill",
        modeLabel: "Hiato diagnostic",
        skill: "vowels",
        prompt: 'Write the correct spelling: "oir"',
        answer: "oír",
        rule: "Hiato with stressed í",
        explanation:
          "o-ÍR splits the vowels into two syllables because the weak vowel í is stressed.",
        syllables: ["o", "ír"],
        stressedIndex: 1,
        stressLabel: "last syllable",
      },
      {
        id: "dg5",
        type: "choice",
        modeLabel: "Diacritical diagnostic",
        skill: "diacritical",
        prompt: "Choose the correct word for the blank.",
        stem: "Eso es para ___.",
        options: ["mi", "mí"],
        answerIndex: 1,
        rule: "Diacritical tilde: mí / mi",
        explanation:
          "The sentence means 'for me', so the stressed pronoun is mí with tilde. Mi without tilde is usually possessive.",
        syllables: ["mí"],
        stressedIndex: 0,
        stressLabel: "only syllable",
        correctAnswerText: "mí",
      },
      {
        id: "dg6",
        type: "choice",
        modeLabel: "Question-word diagnostic",
        skill: "interrogatives",
        prompt: "Choose the correct word for the blank.",
        stem: "No recuerdo ___ llegó.",
        options: ["cuando", "cuándo"],
        answerIndex: 1,
        rule: "Indirect question: cuándo",
        explanation:
          "The sentence contains an indirect question: 'I do not remember when he arrived.' That requires cuándo with tilde.",
        syllables: ["cuán", "do"],
        stressedIndex: 0,
        stressLabel: "penultimate syllable",
        correctAnswerText: "cuándo",
      },
    ],
  },
  {
    id: "practice-final",
    stepIndex: 7,
    title: "Mixed final test",
    intro: "Finish with a mixed review and check how stable the rules feel.",
    questions: [
      {
        id: "fn1",
        type: "choice",
        modeLabel: "Multiple choice",
        skill: "mixed",
        prompt: 'What type of word is "rápido"?',
        options: ["Aguda", "Grave / llana", "Esdrújula", "Sobresdrújula"],
        answerIndex: 2,
        rule: "Word classification",
        explanation:
          "RÁ-pi-do is stressed on the third syllable from the end, so it is esdrújula and always carries a tilde.",
        syllables: ["rá", "pi", "do"],
        stressedIndex: 0,
        stressLabel: "third syllable from the end",
        correctAnswerText: "Esdrújula",
      },
      {
        id: "fn2",
        type: "yesno",
        modeLabel: "Does it need a tilde?",
        skill: "mixed",
        prompt: 'Does "tambien" need a tilde?',
        word: "también",
        answer: true,
        answerWord: "también",
        rule: "Palabra aguda with diphthong",
        explanation:
          "tam-BIÉN is aguda and ends in n, so it takes a tilde on the strong vowel.",
        syllables: ["tam", "bién"],
        stressedIndex: 1,
        stressLabel: "last syllable",
      },
      {
        id: "fn3",
        type: "fill",
        modeLabel: "Fill in the tilde",
        skill: "mixed",
        prompt: 'Write the correct spelling: "lapiz"',
        answer: "lápiz",
        rule: "Palabra grave / llana",
        explanation:
          "LÁ-piz is grave / llana and ends in z, so it needs a tilde.",
        syllables: ["lá", "piz"],
        stressedIndex: 0,
        stressLabel: "penultimate syllable",
      },
      {
        id: "fn4",
        type: "stress",
        modeLabel: "Click the stressed syllable",
        skill: "mixed",
        prompt: 'Click the stressed syllable in "matemáticas".',
        syllables: ["ma", "te", "má", "ti", "cas"],
        answerIndex: 2,
        rule: "Palabra esdrújula",
        explanation:
          "ma-te-MÁ-ti-cas is stressed on the third syllable from the end, so it is esdrújula and always takes a tilde.",
        stressLabel: "third syllable from the end",
        correctAnswerText: "má",
      },
      {
        id: "fn5",
        type: "choice",
        modeLabel: "Sentence practice",
        skill: "mixed",
        prompt: "Choose the correct word for the blank.",
        stem: "Quiero practicar ___.",
        options: ["mas", "más"],
        answerIndex: 1,
        rule: "Diacritical tilde: más / mas",
        explanation:
          "The sentence means 'more', so the correct form is más with tilde. Mas without tilde means 'but' and is uncommon in everyday speech.",
        syllables: ["más"],
        stressedIndex: 0,
        stressLabel: "only syllable",
        correctAnswerText: "más",
      },
      {
        id: "fn6",
        type: "choice",
        modeLabel: "Sentence practice",
        skill: "mixed",
        prompt: "Choose the correct word for the blank.",
        stem: "___ estudias mucho.",
        options: ["Tu", "Tú"],
        answerIndex: 1,
        rule: "Diacritical tilde: tú / tu",
        explanation:
          "The sentence needs the subject pronoun 'you', so the correct form is tú with tilde.",
        syllables: ["tú"],
        stressedIndex: 0,
        stressLabel: "only syllable",
        correctAnswerText: "Tú",
      },
    ],
  },
];

const allQuestions = PRACTICE_BLOCKS.flatMap((block) => block.questions);
const questionMap = new Map(allQuestions.map((question) => [question.id, question]));
const stepQuestionMap = new Map();
const COURSE_STORAGE_KEY = "accent-course-progress-v1";

for (const block of PRACTICE_BLOCKS) {
  const existing = stepQuestionMap.get(block.stepIndex) || [];
  stepQuestionMap.set(
    block.stepIndex,
    existing.concat(block.questions.map((question) => question.id)),
  );
}

const lessonState = {
  activeStep: 0,
  streak: 0,
  responses: {},
  drafts: {},
};

const elements = {
  steps: [...document.querySelectorAll(".lesson-step")],
  stepNav: document.querySelector("#stepNav"),
  prevStepBtn: document.querySelector("#prevStepBtn"),
  nextStepBtn: document.querySelector("#nextStepBtn"),
  stepCountLabel: document.querySelector("#stepCountLabel"),
  progressText: document.querySelector("#courseProgressText"),
  progressFill: document.querySelector("#courseProgressFill"),
  answeredCount: document.querySelector("#answeredCount"),
  correctCount: document.querySelector("#correctCount"),
  streakCount: document.querySelector("#streakCount"),
  masteryBoard: document.querySelector("#masteryBoard"),
};

function saveLessonState() {
  try {
    localStorage.setItem(
      COURSE_STORAGE_KEY,
      JSON.stringify({
        activeStep: lessonState.activeStep,
        streak: lessonState.streak,
        responses: lessonState.responses,
        drafts: lessonState.drafts,
      }),
    );
  } catch (_error) {
    // Ignore storage failures.
  }
}

function loadLessonState() {
  try {
    const raw = localStorage.getItem(COURSE_STORAGE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return;
    }

    lessonState.activeStep = Math.max(0, Math.min(Number(parsed.activeStep) || 0, elements.steps.length - 1));
    lessonState.streak = Math.max(0, Math.floor(Number(parsed.streak) || 0));

    lessonState.responses = {};
    if (parsed.responses && typeof parsed.responses === "object") {
      for (const [questionId, response] of Object.entries(parsed.responses)) {
        if (!questionMap.has(questionId) || !response || typeof response !== "object") {
          continue;
        }
        lessonState.responses[questionId] = {
          answered: Boolean(response.answered),
          correct: Boolean(response.correct),
        };
      }
    }

    lessonState.drafts = {};
    if (parsed.drafts && typeof parsed.drafts === "object") {
      for (const [questionId, draft] of Object.entries(parsed.drafts)) {
        const question = questionMap.get(questionId);
        if (!question) {
          continue;
        }

        if ((question.type === "choice" || question.type === "yesno" || question.type === "stress") && draft != null) {
          lessonState.drafts[questionId] = String(draft);
          continue;
        }

        if (question.type === "fill" && typeof draft === "string") {
          lessonState.drafts[questionId] = draft;
          continue;
        }

        if (question.type === "sort" && draft && typeof draft === "object" && !Array.isArray(draft)) {
          const validCategories = new Set(question.categories.map((category) => category.id));
          const sanitized = {};
          for (const [index, value] of Object.entries(draft)) {
            if (validCategories.has(value)) {
              sanitized[index] = value;
            }
          }
          lessonState.drafts[questionId] = sanitized;
        }
      }
    }
  } catch (_error) {
    lessonState.activeStep = 0;
    lessonState.streak = 0;
    lessonState.responses = {};
    lessonState.drafts = {};
  }
}

function normalizeForAccentPractice(value) {
  return value.trim().toLowerCase().normalize("NFC").replace(/\s+/g, " ");
}

function getModeLabel(question) {
  if (question.modeLabel) {
    return question.modeLabel;
  }
  if (question.type === "yesno") {
    return "Does it need a tilde?";
  }
  if (question.type === "stress") {
    return "Click the stressed syllable";
  }
  if (question.type === "fill") {
    return "Fill in the tilde";
  }
  if (question.type === "sort") {
    return "Sorting activity";
  }
  return "Practice";
}

function renderPracticeBlocks() {
  for (const block of PRACTICE_BLOCKS) {
    const container = document.querySelector(`#${block.id}`);
    if (!container) {
      continue;
    }

    container.innerHTML = `
      <div class="practice-block-header">
        <h4>${block.title}</h4>
        <p>${block.intro}</p>
      </div>
      <div class="question-list">
        ${block.questions.map((question, index) => renderQuestionCard(question, index + 1)).join("")}
      </div>
    `;
  }
}

function renderQuestionCard(question, number) {
  if (question.type === "sort") {
    return renderSortCard(question, number);
  }

  return `
    <article class="question-card" data-question-card="${question.id}">
      <div class="question-meta">
        <span>${number}. ${getModeLabel(question)}</span>
        <span>${SKILL_LABELS[question.skill]}</span>
      </div>
      <h5>${question.prompt}</h5>
      ${question.stem ? `<p class="question-stem">${question.stem}</p>` : ""}
      ${renderQuestionControls(question)}
      <div class="feedback-box" data-feedback-for="${question.id}"></div>
    </article>
  `;
}

function renderQuestionControls(question) {
  if (question.type === "choice") {
    return `
      <div class="choice-grid">
        ${question.options
          .map(
            (option, index) => `
              <button
                class="option-btn"
                type="button"
                data-choice-question="${question.id}"
                data-choice-value="${index}"
              >
                ${option}
              </button>
            `,
          )
          .join("")}
      </div>
      <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
    `;
  }

  if (question.type === "yesno") {
    return `
      <div class="choice-grid">
        <button class="option-btn" type="button" data-choice-question="${question.id}" data-choice-value="yes">
          Yes, it needs a tilde
        </button>
        <button class="option-btn" type="button" data-choice-question="${question.id}" data-choice-value="no">
          No, it does not
        </button>
      </div>
      <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
    `;
  }

  if (question.type === "stress") {
    return `
      <div class="stress-choice-grid">
        ${question.syllables
          .map(
            (syllable, index) => `
              <button
                class="option-btn"
                type="button"
                data-choice-question="${question.id}"
                data-choice-value="${index}"
              >
                ${syllable}
              </button>
            `,
          )
          .join("")}
      </div>
      <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
    `;
  }

  return `
    <div class="fill-row">
      <input
        class="fill-input"
        type="text"
        autocomplete="off"
        spellcheck="false"
        data-fill-question="${question.id}"
        placeholder="Type the correct spelling"
      />
      <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
    </div>
  `;
}

function renderSortCard(question, number) {
  return `
    <article class="question-card" data-question-card="${question.id}">
      <div class="question-meta">
        <span>${number}. ${getModeLabel(question)}</span>
        <span>${SKILL_LABELS[question.skill]}</span>
      </div>
      <h5>${question.prompt}</h5>
      <div class="sort-board">
        ${question.items
          .map(
            (item, itemIndex) => `
              <div class="sort-row" data-sort-row="${question.id}:${itemIndex}">
                <div class="sort-word">${item.word}</div>
                <div class="sort-choice-grid">
                  ${question.categories
                    .map(
                      (category) => `
                        <button
                          class="sort-choice"
                          type="button"
                          data-sort-question="${question.id}"
                          data-sort-item="${itemIndex}"
                          data-sort-value="${category.id}"
                        >
                          ${category.label}
                        </button>
                      `,
                    )
                    .join("")}
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
      <button class="check-btn" type="button" data-check-question="${question.id}">Check sorting</button>
      <div class="feedback-box" data-feedback-for="${question.id}"></div>
    </article>
  `;
}

function renderStepNavigation() {
  if (!elements.stepNav) {
    return;
  }

  elements.stepNav.innerHTML = elements.steps
    .map((step, index) => {
      const ids = stepQuestionMap.get(index) || [];
      const answered = ids.filter((id) => lessonState.responses[id]?.answered).length;
      const isComplete = ids.length > 0 && answered === ids.length;
      return `
        <button
          class="step-pill${index === lessonState.activeStep ? " is-active" : ""}${isComplete ? " is-complete" : ""}"
          type="button"
          data-step-target="${index}"
        >
          <span class="step-pill-title">${step.dataset.stepTitle}</span>
          <span class="step-pill-meta">${answered}/${ids.length} answered</span>
        </button>
      `;
    })
    .join("");
}

function renderMasteryBoard() {
  if (!elements.masteryBoard) {
    return;
  }

  const stats = {};
  for (const [skill, label] of Object.entries(SKILL_LABELS)) {
    stats[skill] = { label, total: 0, answered: 0, correct: 0 };
  }

  for (const question of allQuestions) {
    stats[question.skill].total += 1;
    const response = lessonState.responses[question.id];
    if (!response || !response.answered) {
      continue;
    }
    stats[question.skill].answered += 1;
    if (response.correct) {
      stats[question.skill].correct += 1;
    }
  }

  elements.masteryBoard.innerHTML = Object.values(stats)
    .map((entry) => {
      const percent = entry.answered === 0 ? 0 : Math.round((entry.correct / entry.answered) * 100);
      return `
        <div class="mastery-chip">
          <div class="mastery-topline">
            <span>${entry.label}</span>
            <strong>${entry.correct}/${entry.answered || entry.total}</strong>
          </div>
          <div class="mastery-bar" aria-hidden="true">
            <span style="width:${percent}%"></span>
          </div>
        </div>
      `;
    })
    .join("");
}

function updateProgress() {
  const answered = Object.values(lessonState.responses).filter((response) => response.answered).length;
  const correct = Object.values(lessonState.responses).filter((response) => response.correct).length;
  const percent = Math.round((answered / allQuestions.length) * 100);

  if (elements.progressText) {
    elements.progressText.textContent = `${percent}% complete`;
  }
  if (elements.progressFill) {
    elements.progressFill.style.width = `${percent}%`;
  }
  if (elements.answeredCount) {
    elements.answeredCount.textContent = String(answered);
  }
  if (elements.correctCount) {
    elements.correctCount.textContent = String(correct);
  }
  if (elements.streakCount) {
    elements.streakCount.textContent = String(lessonState.streak);
  }
  if (elements.stepCountLabel) {
    elements.stepCountLabel.textContent = `Step ${lessonState.activeStep + 1} of ${elements.steps.length}`;
  }

  renderStepNavigation();
  renderMasteryBoard();
}

function setActiveStep(index, options = {}) {
  const shouldScroll = options.scroll !== false;
  const shouldSave = options.save !== false;
  const nextIndex = Math.max(0, Math.min(index, elements.steps.length - 1));
  lessonState.activeStep = nextIndex;
  elements.steps.forEach((step, stepIndex) => {
    step.classList.toggle("is-active", stepIndex === nextIndex);
  });

  if (elements.prevStepBtn) {
    elements.prevStepBtn.disabled = nextIndex === 0;
  }
  if (elements.nextStepBtn) {
    elements.nextStepBtn.disabled = nextIndex === elements.steps.length - 1;
  }

  updateProgress();
  if (shouldSave) {
    saveLessonState();
  }
  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function applyChoiceDraft(questionId, selectedValue) {
  const value = selectedValue == null ? null : String(selectedValue);
  const card = document.querySelector(`[data-question-card="${questionId}"]`);
  if (!card) {
    return;
  }

  card.querySelectorAll(`[data-choice-question="${questionId}"]`).forEach((item) => {
    item.classList.toggle("is-selected", value != null && item.dataset.choiceValue === value);
  });
}

function handleChoiceSelection(button) {
  const questionId = button.dataset.choiceQuestion;
  if (!questionId) {
    return;
  }

  lessonState.drafts[questionId] = button.dataset.choiceValue;
  applyChoiceDraft(questionId, button.dataset.choiceValue);
  saveLessonState();
}

function applySortDraft(questionId, itemIndex, selectedValue) {
  const row = document.querySelector(`[data-sort-row="${questionId}:${itemIndex}"]`);
  if (!row) {
    return;
  }

  row.querySelectorAll(".sort-choice").forEach((item) => {
    item.classList.toggle("is-selected", item.dataset.sortValue === selectedValue);
  });
}

function handleSortSelection(button) {
  const questionId = button.dataset.sortQuestion;
  const itemIndex = button.dataset.sortItem;
  if (!questionId || itemIndex == null) {
    return;
  }

  const draft = lessonState.drafts[questionId] || {};
  draft[itemIndex] = button.dataset.sortValue;
  lessonState.drafts[questionId] = draft;
  applySortDraft(questionId, itemIndex, button.dataset.sortValue);
  saveLessonState();
}

function formatSyllableBreakdown(question) {
  if (!question.syllables || !question.syllables.length) {
    return "";
  }

  return `
    <div class="feedback-breakdown">
      ${question.syllables
        .map(
          (syllable, index) => `
            <span class="break-chip${index === question.stressedIndex ? " is-stress" : ""}">${syllable}</span>
          `,
        )
        .join("")}
    </div>
  `;
}

function getCorrectAnswerText(question) {
  if (question.correctAnswerText) {
    return question.correctAnswerText;
  }
  if (question.type === "fill") {
    return question.answer;
  }
  if (question.type === "choice") {
    return question.options[question.answerIndex];
  }
  if (question.type === "stress") {
    return question.syllables[question.answerIndex];
  }
  if (question.type === "yesno") {
    return question.answer
      ? `Yes. The correct spelling is ${question.answerWord || question.word}.`
      : `No. The correct spelling is ${question.answerWord || question.word}.`;
  }
  return "";
}

function setResponse(questionId, correct) {
  lessonState.responses[questionId] = {
    answered: true,
    correct,
  };
  lessonState.streak = correct ? lessonState.streak + 1 : 0;
  updateProgress();
  saveLessonState();
}

function renderFeedback(question, correct, extraHtml = "") {
  return `
    <div class="feedback-panel ${correct ? "is-correct" : "is-wrong"}">
      <div class="feedback-head">
        <span>${correct ? "Correct" : "Not yet"}</span>
        <span>${question.rule}</span>
      </div>
      <p><strong>Correct answer:</strong> ${getCorrectAnswerText(question)}</p>
      <p>${question.explanation}</p>
      <p><strong>Stress location:</strong> ${question.stressLabel}</p>
      ${formatSyllableBreakdown(question)}
      ${extraHtml}
    </div>
  `;
}

function decorateChoiceCard(question, selectedValue, correct) {
  const card = document.querySelector(`[data-question-card="${question.id}"]`);
  if (!card) {
    return;
  }

  card.querySelectorAll(`[data-choice-question="${question.id}"]`).forEach((button) => {
    button.classList.remove("is-correct", "is-wrong");
    const buttonValue = button.dataset.choiceValue;
    const isCorrectButton =
      (question.type === "choice" || question.type === "stress") && Number(buttonValue) === question.answerIndex;
    const isYesNoCorrect =
      question.type === "yesno" &&
      ((question.answer && buttonValue === "yes") || (!question.answer && buttonValue === "no"));

    if (isCorrectButton || isYesNoCorrect) {
      button.classList.add("is-correct");
    }
    if (buttonValue === selectedValue && !correct) {
      button.classList.add("is-wrong");
    }
  });
}

function buildSortResults(question, draft = {}) {
  return question.items.map((item, index) => ({
    item,
    selected: draft[index],
    correct: draft[index] === item.correct,
  }));
}

function decorateSortCard(question, results) {
  const card = document.querySelector(`[data-question-card="${question.id}"]`);
  if (!card) {
    return;
  }

  results.forEach((entry, index) => {
    const row = card.querySelector(`[data-sort-row="${question.id}:${index}"]`);
    if (!row) {
      return;
    }
    row.querySelectorAll(".sort-choice").forEach((button) => {
      button.classList.remove("is-correct", "is-wrong");
      if (button.dataset.sortValue === entry.item.correct) {
        button.classList.add("is-correct");
      }
      if (button.dataset.sortValue === entry.selected && !entry.correct) {
        button.classList.add("is-wrong");
      }
    });
  });
}

function renderSortFeedback(question, results, correct) {
  const detailHtml = results
    .map(
      (entry) => `
        <p><strong>${entry.item.word}</strong> → ${entry.item.rule}. ${entry.item.explanation}</p>
        ${formatSyllableBreakdown(entry.item)}
        <p><strong>Stress location:</strong> ${entry.item.stressLabel}</p>
      `,
    )
    .join("");

  return `
    <div class="feedback-panel ${correct ? "is-correct" : "is-wrong"}">
      <div class="feedback-head">
        <span>${correct ? "Correct sorting" : "Some cards need another look"}</span>
        <span>${question.rule}</span>
      </div>
      ${detailHtml}
    </div>
  `;
}

function restoreSavedQuestionState(question) {
  const response = lessonState.responses[question.id];
  const feedbackBox = document.querySelector(`[data-feedback-for="${question.id}"]`);
  if (!feedbackBox || !response?.answered) {
    return;
  }

  if (question.type === "sort") {
    const draft = lessonState.drafts[question.id] || {};
    const results = buildSortResults(question, draft);
    decorateSortCard(question, results);
    feedbackBox.innerHTML = renderSortFeedback(question, results, response.correct);
    return;
  }

  if (question.type !== "fill") {
    decorateChoiceCard(question, lessonState.drafts[question.id], response.correct);
  }
  feedbackBox.innerHTML = renderFeedback(question, response.correct);
}

function restoreSavedDrafts() {
  for (const question of allQuestions) {
    const draft = lessonState.drafts[question.id];
    if (draft == null) {
      continue;
    }

    if (question.type === "fill") {
      const input = document.querySelector(`[data-fill-question="${question.id}"]`);
      if (input) {
        input.value = draft;
      }
      continue;
    }

    if (question.type === "sort") {
      for (const [itemIndex, selectedValue] of Object.entries(draft)) {
        applySortDraft(question.id, itemIndex, selectedValue);
      }
      continue;
    }

    applyChoiceDraft(question.id, draft);
  }
}

function evaluateStandardQuestion(question) {
  let correct = false;
  let selectedValue = lessonState.drafts[question.id];

  if (question.type === "fill") {
    const input = document.querySelector(`[data-fill-question="${question.id}"]`);
    if (!input || !input.value.trim()) {
      return { ready: false, message: "Type an answer first." };
    }
    selectedValue = input.value;
    lessonState.drafts[question.id] = input.value;
    correct = normalizeForAccentPractice(input.value) === normalizeForAccentPractice(question.answer);
  } else if (selectedValue == null) {
    return { ready: false, message: "Choose an answer first." };
  } else if (question.type === "choice" || question.type === "stress") {
    correct = Number(selectedValue) === question.answerIndex;
  } else if (question.type === "yesno") {
    correct = (selectedValue === "yes") === question.answer;
  }

  setResponse(question.id, correct);
  if (question.type !== "fill") {
    decorateChoiceCard(question, selectedValue, correct);
  }

  return {
    ready: true,
    html: renderFeedback(question, correct),
  };
}

function evaluateSortQuestion(question) {
  const draft = lessonState.drafts[question.id] || {};
  const allChosen = question.items.every((_, index) => Object.prototype.hasOwnProperty.call(draft, index));
  if (!allChosen) {
    return { ready: false, message: "Assign every word to a category first." };
  }

  const results = buildSortResults(question, draft);
  const correct = results.every((entry) => entry.correct);
  setResponse(question.id, correct);
  decorateSortCard(question, results);

  return {
    ready: true,
    html: renderSortFeedback(question, results, correct),
  };
}

function evaluateQuestion(questionId) {
  const question = questionMap.get(questionId);
  const feedbackBox = document.querySelector(`[data-feedback-for="${questionId}"]`);
  if (!question || !feedbackBox) {
    return;
  }

  let result;
  if (question.type === "sort") {
    result = evaluateSortQuestion(question);
  } else {
    result = evaluateStandardQuestion(question);
  }

  if (!result.ready) {
    feedbackBox.innerHTML = `
      <div class="feedback-panel is-wrong">
        <div class="feedback-head">
          <span>Almost there</span>
          <span>${question.rule}</span>
        </div>
        <p>${result.message}</p>
      </div>
    `;
    return;
  }

  feedbackBox.innerHTML = result.html;
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const choiceButton = event.target.closest("[data-choice-question]");
    if (choiceButton) {
      handleChoiceSelection(choiceButton);
      return;
    }

    const sortButton = event.target.closest("[data-sort-question]");
    if (sortButton) {
      handleSortSelection(sortButton);
      return;
    }

    const checkButton = event.target.closest("[data-check-question]");
    if (checkButton) {
      evaluateQuestion(checkButton.dataset.checkQuestion);
      return;
    }

    const stepButton = event.target.closest("[data-step-target]");
    if (stepButton) {
      setActiveStep(Number(stepButton.dataset.stepTarget));
    }
  });

  document.addEventListener("input", (event) => {
    const fillInput = event.target.closest("[data-fill-question]");
    if (!fillInput) {
      return;
    }
    lessonState.drafts[fillInput.dataset.fillQuestion] = fillInput.value;
    saveLessonState();
  });

  if (elements.prevStepBtn) {
    elements.prevStepBtn.addEventListener("click", () => setActiveStep(lessonState.activeStep - 1));
  }
  if (elements.nextStepBtn) {
    elements.nextStepBtn.addEventListener("click", () => setActiveStep(lessonState.activeStep + 1));
  }
}

function initAccentCourse() {
  renderPracticeBlocks();
  loadLessonState();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    restoreSavedQuestionState(question);
  });
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
}

initAccentCourse();

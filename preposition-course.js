const SKILL_LABELS = {
  foundation: "Foundations",
  core: "Core map",
  motion: "Motion vs location",
  personalA: "Personal a",
  porPara: "Por vs para",
  pairings: "Verb pairings",
  contrast: "Contrast lab",
  review: "Mixed review",
};

const ISSUE_LABELS = {
  foundation: "Meaning map",
  core: "Core preposition",
  motion: "Motion vs location",
  location: "Location choice",
  personalA: "Personal a",
  porPara: "Por vs para",
  pairings: "Verb pairing",
  contrast: "Contrast",
  meaning: "Meaning and use",
};

const COURSE_STORAGE_KEY = "preposition-course-progress-v1";

function sentenceModel(parts, translation) {
  return { parts, translation };
}

const PRACTICE_BLOCKS = [
  {
    id: "practice-foundations",
    stepIndex: 0,
    title: "Relationship drill",
    intro: "Train the habit of asking what relationship the preposition is expressing before choosing a word.",
    questions: [
      {
        id: "fd1",
        type: "choice",
        skill: "foundation",
        prompt: "Before choosing a Spanish preposition, what is the most useful first question?",
        options: [
          "What is the exact English preposition?",
          "What relationship is the sentence showing?",
          "Which preposition is shortest?",
        ],
        answerIndex: 1,
        rule: "Choose by relationship, not by translation",
        explanation:
          "Spanish prepositions work best when you identify the relationship first: destination, location, source, purpose, cause, company, or topic.",
        correctAnswerText: "What relationship is the sentence showing?",
        focusTags: ["foundation", "meaning"],
      },
      {
        id: "fd2",
        type: "sort",
        skill: "foundation",
        modeLabel: "Concept sort",
        prompt: "Sort each question by the relationship it asks about.",
        rule: "Relationship questions",
        categories: [
          { id: "destination", label: "Destination" },
          { id: "location", label: "Location" },
          { id: "source", label: "Source" },
          { id: "purpose", label: "Purpose" },
        ],
        focusTags: ["foundation"],
        items: [
          { word: "to where?", correct: "destination", explanation: "This question usually points toward a destination, often with a." },
          { word: "where?", correct: "location", explanation: "This asks about being in or at a place, often with en." },
          { word: "from where?", correct: "source", explanation: "This asks about origin, commonly expressed with de." },
          { word: "for what purpose?", correct: "purpose", explanation: "This question often points to para." },
        ],
      },
      {
        id: "fd3",
        type: "choice",
        skill: "foundation",
        prompt: "Why can English 'at' not always become the same Spanish preposition?",
        options: [
          "Because Spanish prepositions are random.",
          "Because Spanish chooses based on the relationship, not on one fixed English word.",
          "Because Spanish never uses location prepositions.",
        ],
        answerIndex: 1,
        rule: "Do not translate prepositions mechanically",
        explanation:
          "English at may point to location, destination, event context, or time. Spanish chooses the preposition that matches the exact relationship.",
        correctAnswerText: "Because Spanish chooses based on the relationship, not on one fixed English word.",
        focusTags: ["foundation", "meaning"],
      },
      {
        id: "fd4",
        type: "choice",
        skill: "foundation",
        prompt: "In 'Hablo con Ana', what relationship does con show?",
        options: ["Destination", "Company / interaction", "Cause"],
        answerIndex: 1,
        rule: "Con shows accompaniment or interaction",
        explanation:
          "Con often marks being with someone or using something as an instrument: con Ana, con un lápiz, con mis amigos.",
        correctAnswerText: "Company / interaction",
        focusTags: ["foundation", "core"],
        sentenceModel: sentenceModel(
          [
            { text: "Hablo", role: "verb" },
            { text: "con", role: "preposition" },
            { text: "Ana", role: "person" },
          ],
          "I am speaking with Ana.",
        ),
      },
    ],
  },
  {
    id: "practice-core",
    stepIndex: 1,
    title: "Core preposition map",
    intro: "Get the central meaning of each core preposition into place before the contrast work begins.",
    questions: [
      {
        id: "co1",
        type: "choice",
        skill: "core",
        prompt: "Choose the correct preposition: Estoy __ clase ahora.",
        options: ["a", "en", "de"],
        answerIndex: 1,
        rule: "En for location",
        explanation:
          "The sentence describes location inside a context or place, so en is the natural choice: Estoy en clase.",
        correctAnswerText: "en",
        focusTags: ["core", "location"],
        sentenceModel: sentenceModel(
          [
            { text: "Estoy", role: "verb" },
            { text: "en", role: "preposition" },
            { text: "clase", role: "place" },
          ],
          "I am in class right now.",
        ),
      },
      {
        id: "co2",
        type: "choice",
        skill: "core",
        prompt: "Choose the correct preposition: un libro __ historia",
        options: ["sobre", "sin", "a"],
        answerIndex: 0,
        rule: "Sobre for about / on the topic of",
        explanation:
          "Sobre often means about when a topic is being introduced: un libro sobre historia, un documental sobre ciencia.",
        correctAnswerText: "sobre",
        focusTags: ["core", "meaning"],
      },
      {
        id: "co3",
        type: "choice",
        skill: "core",
        prompt: "Choose the correct preposition: café __ azúcar",
        options: ["con", "sin", "por"],
        answerIndex: 1,
        rule: "Sin for absence",
        explanation:
          "Sin marks lack or absence. Café sin azúcar means coffee without sugar.",
        correctAnswerText: "sin",
        focusTags: ["core", "meaning"],
      },
      {
        id: "co4",
        type: "sort",
        skill: "core",
        modeLabel: "Sort by preposition",
        prompt: "Sort each phrase under the preposition that fits it best.",
        rule: "Core meaning map",
        categories: [
          { id: "a", label: "a" },
          { id: "de", label: "de" },
          { id: "con", label: "con" },
          { id: "sobre", label: "sobre" },
        ],
        focusTags: ["core"],
        items: [
          { word: "voy __ casa", correct: "a", explanation: "Movement toward a destination takes a: voy a casa." },
          { word: "vengo __ casa", correct: "de", explanation: "Origin or source takes de: vengo de casa." },
          { word: "hablo __ Ana", correct: "con", explanation: "Company or interaction takes con: hablo con Ana." },
          { word: "un libro __ arte", correct: "sobre", explanation: "A topic takes sobre: un libro sobre arte." },
        ],
      },
    ],
  },
  {
    id: "practice-motion",
    stepIndex: 2,
    title: "Motion vs location drill",
    intro: "Keep destination and location separate. This fixes a lot of beginner errors quickly.",
    questions: [
      {
        id: "mo1",
        type: "choice",
        skill: "motion",
        prompt: "Choose the correct preposition: Vamos __ la estación.",
        options: ["en", "a", "de"],
        answerIndex: 1,
        rule: "A for destination",
        explanation:
          "Ir, venir, llegar, and similar movement verbs usually take a when they point to a destination: vamos a la estación.",
        correctAnswerText: "a",
        focusTags: ["motion"],
      },
      {
        id: "mo2",
        type: "choice",
        skill: "motion",
        prompt: "Choose the correct preposition: Estamos __ la estación.",
        options: ["a", "en", "para"],
        answerIndex: 1,
        rule: "En for location",
        explanation:
          "This sentence tells you where the subject is, not where it is going, so en is correct: estamos en la estación.",
        correctAnswerText: "en",
        focusTags: ["motion", "location"],
      },
      {
        id: "mo3",
        type: "fill",
        skill: "motion",
        modeLabel: "Fill the preposition",
        prompt: "Complete with the correct preposition only: El tren llega __ Barcelona.",
        answer: "a",
        acceptedAnswers: ["a."],
        rule: "Llegar a",
        explanation:
          "Llegar points to an endpoint or destination, so the verb normally goes with a: llegar a Barcelona.",
        correctAnswerText: "a",
        focusTags: ["motion", "pairings"],
        sentenceModel: sentenceModel(
          [
            { text: "llega", role: "verb" },
            { text: "a", role: "preposition" },
            { text: "Barcelona", role: "place" },
          ],
          "The train arrives in Barcelona.",
        ),
      },
      {
        id: "mo4",
        type: "choice",
        skill: "motion",
        prompt: "Which pair is correct?",
        options: [
          "Ir en la playa / estar a la playa",
          "Ir a la playa / estar en la playa",
          "Ir de la playa / estar para la playa",
        ],
        answerIndex: 1,
        rule: "Destination vs location pair",
        explanation:
          "The first clause needs destination, so it uses a. The second clause needs location, so it uses en.",
        correctAnswerText: "Ir a la playa / estar en la playa",
        focusTags: ["motion", "contrast"],
      },
    ],
  },
  {
    id: "practice-personal-a",
    stepIndex: 3,
    title: "Personal a drill",
    intro: "Train the special marker for specific people so it becomes automatic in real sentences.",
    questions: [
      {
        id: "pa1",
        type: "choice",
        skill: "personalA",
        prompt: "Choose the correct preposition: Veo __ mi amiga todos los días.",
        options: ["a", "en", "no preposition"],
        answerIndex: 0,
        rule: "Personal a before a specific person",
        explanation:
          "Mi amiga is a specific human direct object, so Spanish uses the personal a: veo a mi amiga.",
        correctAnswerText: "a",
        focusTags: ["personalA"],
      },
      {
        id: "pa2",
        type: "choice",
        skill: "personalA",
        prompt: "Choose the correct option: Veo __ la mesa.",
        options: ["a", "en", "no preposition"],
        answerIndex: 2,
        rule: "No personal a with ordinary things",
        explanation:
          "La mesa is a thing, not a person, so the personal a is not used here: veo la mesa.",
        correctAnswerText: "no preposition",
        focusTags: ["personalA", "meaning"],
      },
      {
        id: "pa3",
        type: "choice",
        skill: "personalA",
        prompt: "Choose the correct option: Busco __ mi perro.",
        options: ["a", "de", "no preposition"],
        answerIndex: 0,
        rule: "Personal a with specific animals treated personally",
        explanation:
          "A specific pet often behaves like a person grammatically, so many speakers use the personal a: busco a mi perro.",
        correctAnswerText: "a",
        focusTags: ["personalA", "meaning"],
      },
      {
        id: "pa4",
        type: "fill",
        skill: "personalA",
        modeLabel: "Fill the preposition",
        prompt: "Complete with the correct preposition only: Conozco __ Ana desde hace años.",
        answer: "a",
        acceptedAnswers: ["a."],
        rule: "Personal a with specific named person",
        explanation:
          "Ana is a specific person and the direct object of conozco, so Spanish uses the personal a.",
        correctAnswerText: "a",
        focusTags: ["personalA"],
        sentenceModel: sentenceModel(
          [
            { text: "Conozco", role: "verb" },
            { text: "a", role: "preposition" },
            { text: "Ana", role: "person" },
          ],
          "I have known Ana for years.",
        ),
      },
    ],
  },
  {
    id: "practice-por-para",
    stepIndex: 4,
    title: "Por vs para drill",
    intro: "Use meaning categories, not memorized slogans. This contrast becomes much easier when you know what question each one answers.",
    questions: [
      {
        id: "pp1",
        type: "sort",
        skill: "porPara",
        modeLabel: "Sort by meaning",
        prompt: "Sort each use case under por or para.",
        rule: "Backward-looking por vs forward-looking para",
        categories: [
          { id: "por", label: "por" },
          { id: "para", label: "para" },
        ],
        focusTags: ["porPara"],
        items: [
          { word: "cause / because of", correct: "por", explanation: "Por often introduces cause or motive: Lo hice por ti." },
          { word: "route / through", correct: "por", explanation: "Por marks movement through an area: caminamos por el parque." },
          { word: "recipient", correct: "para", explanation: "Para points to the intended receiver: es para Ana." },
          { word: "purpose / goal", correct: "para", explanation: "Para answers for what purpose?: estudio para aprender." },
          { word: "deadline", correct: "para", explanation: "Para sets a due point in time: la tarea es para mañana." },
          { word: "duration", correct: "por", explanation: "Por commonly expresses duration: trabajé por dos horas." },
        ],
      },
      {
        id: "pp2",
        type: "choice",
        skill: "porPara",
        prompt: "Choose the correct preposition: Estudio __ aprender mejor.",
        options: ["por", "para", "de"],
        answerIndex: 1,
        rule: "Para for purpose",
        explanation:
          "The sentence answers for what purpose? The purpose of studying is to learn better, so para is correct.",
        correctAnswerText: "para",
        focusTags: ["porPara"],
      },
      {
        id: "pp3",
        type: "choice",
        skill: "porPara",
        prompt: "Choose the correct preposition: Gracias __ tu ayuda.",
        options: ["para", "con", "por"],
        answerIndex: 2,
        rule: "Por for cause or motive",
        explanation:
          "The thanks happen because of your help. That causal relationship takes por: gracias por tu ayuda.",
        correctAnswerText: "por",
        focusTags: ["porPara", "meaning"],
      },
      {
        id: "pp4",
        type: "choice",
        skill: "porPara",
        prompt: "Choose the correct preposition: El regalo es __ Luis.",
        options: ["por", "para", "sobre"],
        answerIndex: 1,
        rule: "Para for recipient",
        explanation:
          "Luis is the intended recipient of the gift, so the sentence uses para.",
        correctAnswerText: "para",
        focusTags: ["porPara"],
      },
      {
        id: "pp5",
        type: "choice",
        skill: "porPara",
        prompt: "Choose the correct preposition: Trabajé __ tres horas.",
        options: ["para", "por", "a"],
        answerIndex: 1,
        rule: "Por for duration",
        explanation:
          "A duration of time is one of the standard uses of por: trabajé por tres horas.",
        correctAnswerText: "por",
        focusTags: ["porPara", "meaning"],
      },
    ],
  },
  {
    id: "practice-pairings",
    stepIndex: 5,
    title: "Verb-pairing drill",
    intro: "Treat the verb and preposition as one meaning package. This removes a huge amount of hesitation.",
    questions: [
      {
        id: "vp1",
        type: "choice",
        skill: "pairings",
        prompt: "Choose the correct preposition: Pienso __ mi familia.",
        options: ["en", "de", "para"],
        answerIndex: 0,
        rule: "Pensar en",
        explanation:
          "Pensar en is the common pairing for thinking about something or someone.",
        correctAnswerText: "en",
        focusTags: ["pairings"],
      },
      {
        id: "vp2",
        type: "choice",
        skill: "pairings",
        prompt: "Choose the correct preposition: Depende __ ti.",
        options: ["de", "con", "a"],
        answerIndex: 0,
        rule: "Depender de",
        explanation:
          "Depender is normally followed by de: depende de ti, depende del clima.",
        correctAnswerText: "de",
        focusTags: ["pairings"],
      },
      {
        id: "vp3",
        type: "choice",
        skill: "pairings",
        prompt: "Choose the correct preposition: Soñé __ el examen anoche.",
        options: ["con", "en", "sobre"],
        answerIndex: 0,
        rule: "Soñar con",
        explanation:
          "The usual pairing is soñar con when speaking about dreaming about something.",
        correctAnswerText: "con",
        focusTags: ["pairings"],
      },
      {
        id: "vp4",
        type: "choice",
        skill: "pairings",
        prompt: "Choose the correct preposition: Me preparo __ el examen.",
        options: ["por", "para", "de"],
        answerIndex: 1,
        rule: "Prepararse para",
        explanation:
          "Prepararse para points forward to the purpose or goal: preparing for the exam.",
        correctAnswerText: "para",
        focusTags: ["pairings", "porPara"],
      },
      {
        id: "vp5",
        type: "choice",
        skill: "pairings",
        prompt: "Choose the correct preposition: Hablamos __ la película después.",
        options: ["de", "sin", "a"],
        answerIndex: 0,
        rule: "Hablar de",
        explanation:
          "Hablar de commonly introduces the topic of discussion: hablamos de la película.",
        correctAnswerText: "de",
        focusTags: ["pairings", "meaning"],
      },
    ],
  },
  {
    id: "practice-contrast",
    stepIndex: 6,
    title: "Contrast drill",
    intro: "Now confront the common traps directly and explain the relationship instead of relying on instinct.",
    questions: [
      {
        id: "ct1",
        type: "choice",
        skill: "contrast",
        prompt: "Choose the correct pair: Voy __ casa, pero trabajo __ casa.",
        options: ["en / a", "a / en", "de / sobre"],
        answerIndex: 1,
        rule: "Destination then location",
        explanation:
          "The first blank needs destination, so a. The second blank needs location, so en.",
        correctAnswerText: "a / en",
        focusTags: ["contrast", "motion", "location"],
      },
      {
        id: "ct2",
        type: "choice",
        skill: "contrast",
        prompt: "Choose the correct pair: café __ leche, pero café __ azúcar.",
        options: ["con / sin", "sin / con", "sobre / de"],
        answerIndex: 0,
        rule: "Presence vs absence",
        explanation:
          "Con shows that something is included. Sin shows that it is absent.",
        correctAnswerText: "con / sin",
        focusTags: ["contrast", "core"],
      },
      {
        id: "ct3",
        type: "choice",
        skill: "contrast",
        prompt: "Choose the correct pair: un vaso __ agua, un libro __ ciencia.",
        options: ["sobre / de", "de / sobre", "con / para"],
        answerIndex: 1,
        rule: "Content vs topic",
        explanation:
          "De expresses content, material, or composition: un vaso de agua. Sobre introduces topic: un libro sobre ciencia.",
        correctAnswerText: "de / sobre",
        focusTags: ["contrast", "meaning"],
      },
      {
        id: "ct4",
        type: "choice",
        skill: "contrast",
        prompt: "Which sentence correctly expresses both reason and goal?",
        options: [
          "Trabajo para dinero y por mi familia.",
          "Trabajo por dinero y para mi familia.",
          "Trabajo en dinero y a mi familia.",
        ],
        answerIndex: 1,
        rule: "Por for cause, para for beneficiary or goal",
        explanation:
          "Dinero is the motive or reason, so it takes por. Mi familia is the beneficiary or intended end, so it takes para.",
        correctAnswerText: "Trabajo por dinero y para mi familia.",
        focusTags: ["contrast", "porPara"],
      },
    ],
  },
  {
    id: "practice-mixed-review",
    stepIndex: 7,
    title: "Mixed review",
    intro: "Mix destination, location, purpose, topic, and personal a the way they appear in real writing and speech.",
    questions: [
      {
        id: "rv1",
        type: "choice",
        skill: "review",
        prompt: "Choose the correct preposition: La tarea es __ mañana.",
        options: ["por", "para", "en"],
        answerIndex: 1,
        rule: "Para for deadline",
        explanation:
          "Mañana is the due point in time, so para is the right preposition.",
        correctAnswerText: "para",
        focusTags: ["review", "porPara"],
      },
      {
        id: "rv2",
        type: "choice",
        skill: "review",
        prompt: "Choose the correct preposition: Busco __ mi profesor porque necesito ayuda.",
        options: ["a", "en", "de"],
        answerIndex: 0,
        rule: "Personal a with a specific human object",
        explanation:
          "Mi profesor is a specific person and the direct object of busco, so the personal a is required.",
        correctAnswerText: "a",
        focusTags: ["review", "personalA"],
      },
      {
        id: "rv3",
        type: "choice",
        skill: "review",
        prompt: "Choose the correct preposition: Vivo __ Canadá, pero viajo __ México este verano.",
        options: ["a / en", "en / a", "de / para"],
        answerIndex: 1,
        rule: "Location then destination",
        explanation:
          "The first clause gives a location, so en. The second clause gives a destination, so a.",
        correctAnswerText: "en / a",
        focusTags: ["review", "motion", "location"],
      },
      {
        id: "rv4",
        type: "choice",
        skill: "review",
        prompt: "Choose the correct preposition: Estamos hablando __ el examen final.",
        options: ["sobre", "sin", "a"],
        answerIndex: 0,
        rule: "Sobre for topic",
        explanation:
          "Sobre introduces the topic under discussion, so hablamos sobre el examen final is a clear match.",
        correctAnswerText: "sobre",
        focusTags: ["review", "core", "meaning"],
      },
    ],
  },
  {
    id: "practice-error-lab",
    stepIndex: 7,
    title: "Error lab",
    intro: "Correct the typical English-to-Spanish transfer mistakes and explain the relationship each time.",
    questions: [
      {
        id: "er1",
        type: "fill",
        skill: "review",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: Voy en la universidad.",
        answer: "Voy a la universidad.",
        acceptedAnswers: ["voy a la universidad", "voy a la universidad."],
        rule: "A after movement toward a destination",
        explanation:
          "The verb voy points toward a destination, so the sentence needs a instead of en.",
        correctAnswerText: "Voy a la universidad.",
        focusTags: ["review", "motion"],
      },
      {
        id: "er2",
        type: "fill",
        skill: "review",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: Conozco Ana.",
        answer: "Conozco a Ana.",
        acceptedAnswers: ["conozco a ana", "conozco a ana."],
        rule: "Personal a with a named person",
        explanation:
          "Ana is a specific human direct object, so Spanish marks it with the personal a.",
        correctAnswerText: "Conozco a Ana.",
        focusTags: ["review", "personalA"],
      },
      {
        id: "er3",
        type: "fill",
        skill: "review",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: Trabajo para dos horas.",
        answer: "Trabajo por dos horas.",
        acceptedAnswers: ["trabajo por dos horas", "trabajo por dos horas."],
        rule: "Por for duration",
        explanation:
          "Two hours expresses duration, not goal or purpose, so por is required.",
        correctAnswerText: "Trabajo por dos horas.",
        focusTags: ["review", "porPara"],
      },
      {
        id: "er4",
        type: "fill",
        skill: "review",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: Pienso de mi futuro.",
        answer: "Pienso en mi futuro.",
        acceptedAnswers: ["pienso en mi futuro", "pienso en mi futuro."],
        rule: "Pensar en",
        explanation:
          "The standard pairing is pensar en when the meaning is to think about something.",
        correctAnswerText: "Pienso en mi futuro.",
        focusTags: ["review", "pairings"],
      },
    ],
  },
];

const allQuestions = PRACTICE_BLOCKS.flatMap((block) => block.questions);
const questionMap = new Map(allQuestions.map((question) => [question.id, question]));
const stepQuestionMap = new Map();

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
  steps: [...document.querySelectorAll(".preposition-step")],
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

function normalizeInput(value) {
  return value.trim().toLowerCase().normalize("NFC").replace(/\s+/g, " ");
}

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
    lessonState.drafts = {};

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

    if (parsed.drafts && typeof parsed.drafts === "object") {
      for (const [questionId, draft] of Object.entries(parsed.drafts)) {
        const question = questionMap.get(questionId);
        if (!question) {
          continue;
        }

        if (question.type === "choice" && draft != null) {
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

function getModeLabel(question) {
  if (question.modeLabel) {
    return question.modeLabel;
  }
  if (question.type === "choice") {
    return "Multiple choice";
  }
  if (question.type === "fill") {
    return "Fill the blank";
  }
  if (question.type === "sort") {
    return "Sorting activity";
  }
  return "Practice";
}

function renderSentenceModel(model) {
  if (!model || !Array.isArray(model.parts) || !model.parts.length) {
    return "";
  }

  return `
    <div class="feedback-model">
      <div class="sentence-strip">
        ${model.parts
          .map((part) => `<span class="sentence-part part-${part.role}">${part.text}</span>`)
          .join("")}
      </div>
      ${model.translation ? `<p class="mini-note">${model.translation}</p>` : ""}
    </div>
  `;
}

function renderFeedbackTags(tags = []) {
  if (!tags.length) {
    return "";
  }

  return `
    <div class="feedback-tags">
      ${tags
        .map((tag) => `<span class="feedback-tag issue-${tag}">${ISSUE_LABELS[tag] || tag}</span>`)
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
  return "";
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
        <span>${SKILL_LABELS[question.skill] || "Practice"}</span>
      </div>
      <h5>${question.prompt}</h5>
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

  if (question.type === "fill") {
    return `
      <div class="fill-row">
        <input
          class="fill-input"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Type the correct preposition or correction"
          data-fill-question="${question.id}"
        />
        <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
      </div>
    `;
  }

  return "";
}

function renderSortCard(question, number) {
  return `
    <article class="question-card" data-question-card="${question.id}">
      <div class="question-meta">
        <span>${number}. ${getModeLabel(question)}</span>
        <span>${SKILL_LABELS[question.skill] || "Practice"}</span>
      </div>
      <h5>${question.prompt}</h5>
      <div class="sort-grid">
        ${question.items
          .map(
            (item, itemIndex) => `
              <div class="sort-row" data-sort-row="${question.id}:${itemIndex}">
                <span class="sort-label">${item.word}</span>
                <div class="choice-grid compact-choice-grid">
                  ${question.categories
                    .map(
                      (category) => `
                        <button
                          class="option-btn sort-choice"
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
      <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
      <div class="feedback-box" data-feedback-for="${question.id}"></div>
    </article>
  `;
}

function renderStepNavigation() {
  if (!elements.stepNav) {
    return;
  }

  elements.stepNav.innerHTML = elements.steps
    .map((step, stepIndex) => {
      const ids = stepQuestionMap.get(stepIndex) || [];
      const answered = ids.filter((id) => lessonState.responses[id]?.answered).length;
      const complete = ids.length > 0 && answered === ids.length;
      return `
        <button class="step-pill${stepIndex === lessonState.activeStep ? " is-active" : ""}${complete ? " is-complete" : ""}" type="button" data-step-target="${stepIndex}">
          <span class="step-pill-title">${step.dataset.stepTitle || `Step ${stepIndex + 1}`}</span>
          <span class="step-pill-meta">${answered}/${ids.length} checked</span>
        </button>
      `;
    })
    .join("");
}

function renderMasteryBoard() {
  if (!elements.masteryBoard) {
    return;
  }

  elements.masteryBoard.innerHTML = Object.entries(SKILL_LABELS)
    .map(([skillKey, label]) => {
      const related = allQuestions.filter((question) => question.skill === skillKey);
      const answered = related.filter((question) => lessonState.responses[question.id]?.answered).length;
      const correct = related.filter((question) => lessonState.responses[question.id]?.correct).length;
      const percent = answered === 0 ? 0 : Math.round((correct / answered) * 100);
      return `
        <div class="mastery-chip">
          <div class="mastery-topline">
            <strong>${label}</strong>
            <span>${correct}/${answered || related.length}</span>
          </div>
          <div class="mastery-bar" aria-hidden="true"><span style="width:${percent}%"></span></div>
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

  card.querySelectorAll(`[data-choice-question="${questionId}"]`).forEach((button) => {
    button.classList.toggle("is-selected", value != null && button.dataset.choiceValue === value);
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

  row.querySelectorAll(".sort-choice").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.sortValue === selectedValue);
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

function setResponse(questionId, correct) {
  lessonState.responses[questionId] = {
    answered: true,
    correct,
  };
  lessonState.streak = correct ? lessonState.streak + 1 : 0;
  updateProgress();
  saveLessonState();
}

function renderFeedback(question, correct) {
  return `
    <div class="feedback-panel ${correct ? "is-correct" : "is-wrong"}">
      <div class="feedback-head">
        <span>${correct ? "Correct" : "Not yet"}</span>
        <span>${question.rule}</span>
      </div>
      <p><strong>Correct answer:</strong> ${getCorrectAnswerText(question)}</p>
      <p>${question.explanation}</p>
      ${renderFeedbackTags(question.focusTags)}
      ${renderSentenceModel(question.sentenceModel)}
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
    if (Number(button.dataset.choiceValue) === question.answerIndex) {
      button.classList.add("is-correct");
    }
    if (button.dataset.choiceValue === String(selectedValue) && !correct) {
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
  return `
    <div class="feedback-panel ${correct ? "is-correct" : "is-wrong"}">
      <div class="feedback-head">
        <span>${correct ? "Correct sorting" : "Some entries need another look"}</span>
        <span>${question.rule}</span>
      </div>
      <p>${correct ? "You matched the meaning categories correctly." : "Look again at what question each use case answers."}</p>
      ${renderFeedbackTags(question.focusTags)}
      <div class="sort-detail-grid">
        ${results
          .map(
            (entry) => `
              <div class="sort-detail-card">
                <strong>${entry.item.word}</strong>
                <p><strong>Correct group:</strong> ${question.categories.find((category) => category.id === entry.item.correct)?.label || entry.item.correct}</p>
                <p>${entry.item.explanation}</p>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
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
    const normalizedAnswer = normalizeInput(input.value);
    const accepted = [question.answer].concat(question.acceptedAnswers || []).map(normalizeInput);
    correct = accepted.includes(normalizedAnswer);
  } else if (selectedValue == null) {
    return { ready: false, message: "Choose an answer first." };
  } else if (question.type === "choice") {
    correct = Number(selectedValue) === question.answerIndex;
  }

  setResponse(question.id, correct);
  if (question.type === "choice") {
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
    return { ready: false, message: "Assign every item to a category first." };
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

  const result = question.type === "sort"
    ? evaluateSortQuestion(question)
    : evaluateStandardQuestion(question);

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

  if (question.type === "choice") {
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

function initPrepositionCourse() {
  renderPracticeBlocks();
  loadLessonState();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    restoreSavedQuestionState(question);
  });
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
}

initPrepositionCourse();

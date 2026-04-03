const SKILL_LABELS = {
  foundations: "Foundations",
  verb: "Verb repair",
  agreement: "Agreement repair",
  preposition: "Preposition repair",
  accent: "Accent repair",
  pronoun: "Pronoun repair",
  mixed: "Mixed lab",
  review: "Final review",
};

const ISSUE_LABELS = {
  verb: "Verb",
  agreement: "Agreement",
  preposition: "Preposition",
  accent: "Accent",
  pronoun: "Pronoun",
  mixed: "Mixed",
  review: "Review",
};

const ERROR_TYPE_LABELS = {
  verb: "Verb conjugation",
  agreement: "Agreement",
  preposition: "Preposition",
  accent: "Missing accent",
  pronoun: "Pronoun misuse",
};

const ERROR_TYPE_ORDER = ["verb", "agreement", "preposition", "accent", "pronoun"];
const COURSE_STORAGE_KEY = "error-course-progress-v1";

const PRACTICE_BLOCKS = [
  {
    id: "practice-foundations",
    stepIndex: 0,
    title: "Warm-up correction set",
    intro: "Start with one obvious mistake at a time and build the habit of naming the error family before you rewrite.",
    questions: [
      {
        id: "ec1",
        type: "repair",
        skill: "foundations",
        errorType: "verb",
        prompt: "Find and fix the mistake.",
        sentence: "Yo fue a la tienda ayer.",
        answer: "Yo fui a la tienda ayer.",
        rule: "The first-person singular preterite of ir is fui, not fue.",
        explanation: "The subject yo needs the yo-form fui. Fue is the third-person singular form.",
        whyMistake: "Learners often recognize the irregular past of ir/ser but forget that fue belongs to él / ella / usted, not yo.",
        focusTags: ["verb"],
      },
      {
        id: "ec2",
        type: "repair",
        skill: "foundations",
        errorType: "agreement",
        prompt: "Find and fix the mistake.",
        sentence: "La problema es serio.",
        answer: "El problema es serio.",
        rule: "Problema is a masculine noun, so it takes el, not la.",
        explanation: "The noun problema is one of the common nouns that end in -a but are masculine.",
        whyMistake: "Learners often assume that all nouns ending in -a are feminine, but some Greek-origin nouns like problema and sistema are masculine.",
        focusTags: ["agreement"],
      },
      {
        id: "ec3",
        type: "repair",
        skill: "foundations",
        errorType: "preposition",
        prompt: "Find and fix the mistake.",
        sentence: "Voy en Madrid mañana.",
        answer: "Voy a Madrid mañana.",
        rule: "Use a before a destination when movement is directed toward a place.",
        explanation: "The sentence shows movement toward Madrid, so Spanish uses a, not en.",
        whyMistake: "English often uses in or to in ways that do not map neatly onto Spanish. Learners often overuse en for places.",
        focusTags: ["preposition"],
      },
      {
        id: "ec4",
        type: "repair",
        skill: "foundations",
        errorType: "accent",
        prompt: "Find and fix the mistake.",
        sentence: "Tu eres muy paciente.",
        answer: "Tú eres muy paciente.",
        strictAccents: true,
        rule: "The subject pronoun tú carries an accent to distinguish it from the possessive tu.",
        explanation: "Here the word means you, so it needs the accent: tú.",
        whyMistake: "Learners often skip written accents when typing quickly, even when the accent changes the grammatical role of the word.",
        focusTags: ["accent"],
      },
    ],
  },
  {
    id: "practice-verbs",
    stepIndex: 1,
    title: "Verb conjugation repairs",
    intro: "Check the subject, then the tense clue, then the irregular pattern if needed.",
    questions: [
      {
        id: "ec5",
        type: "repair",
        skill: "verb",
        errorType: "verb",
        prompt: "Fix the verb error.",
        sentence: "Nosotros come en casa los domingos.",
        answer: "Nosotros comemos en casa los domingos.",
        rule: "Nosotros with a present-tense -er verb takes the ending -emos.",
        explanation: "The verb comer must match the subject nosotros: comemos.",
        whyMistake: "Learners often memorize the infinitive and one common form, then forget to change the ending for a new subject.",
        focusTags: ["verb"],
      },
      {
        id: "ec6",
        type: "repair",
        skill: "verb",
        errorType: "verb",
        prompt: "Fix the verb error.",
        sentence: "Ayer ellos van al cine.",
        answer: "Ayer ellos fueron al cine.",
        rule: "Ayer points to a completed past action, so the verb should be in the preterite.",
        explanation: "The present-tense form van does not match the time clue ayer. The correct completed-past form is fueron.",
        whyMistake: "Learners often focus on the meaning of go and miss that the time word has already chosen the tense.",
        focusTags: ["verb"],
      },
      {
        id: "ec7",
        type: "repair",
        skill: "verb",
        errorType: "verb",
        prompt: "Fix the verb error.",
        sentence: "Mi hermana querer aprender italiano.",
        answer: "Mi hermana quiere aprender italiano.",
        rule: "A finite clause needs a conjugated verb, not the infinitive querer.",
        explanation: "With the subject mi hermana, the present-tense form is quiere.",
        whyMistake: "Learners often leave the infinitive unchanged when they know the meaning of the verb but not the conjugated form yet.",
        focusTags: ["verb"],
      },
      {
        id: "ec8",
        type: "repair",
        skill: "verb",
        errorType: "verb",
        prompt: "Fix the verb error.",
        sentence: "Yo sabe la respuesta.",
        answer: "Yo sé la respuesta.",
        strictAccents: true,
        rule: "The yo-form of saber is sé, not sabe.",
        explanation: "Sabe is the third-person singular form. With yo, you need sé.",
        whyMistake: "High-frequency irregular yo-forms are easy to confuse with the much more common él / ella / usted form.",
        focusTags: ["verb"],
      },
    ],
  },
  {
    id: "practice-agreement",
    stepIndex: 2,
    title: "Agreement repairs",
    intro: "Check article + noun + adjective together. Do they all match in gender and number?",
    questions: [
      {
        id: "ec9",
        type: "repair",
        skill: "agreement",
        errorType: "agreement",
        prompt: "Fix the agreement error.",
        sentence: "Las casas blanco están lejos.",
        answer: "Las casas blancas están lejos.",
        rule: "An adjective must agree with a plural feminine noun: blancas.",
        explanation: "Casas is feminine plural, so blanco changes to blancas.",
        whyMistake: "Learners often remember the dictionary form of an adjective and forget to adjust it for the noun it describes.",
        focusTags: ["agreement"],
      },
      {
        id: "ec10",
        type: "repair",
        skill: "agreement",
        errorType: "agreement",
        prompt: "Fix the agreement error.",
        sentence: "Tengo dos hermana menores.",
        answer: "Tengo dos hermanas menores.",
        rule: "A plural quantity like dos requires a plural noun: hermanas.",
        explanation: "The number dos tells you the noun must be plural.",
        whyMistake: "Learners often process the number and the noun separately, then forget that Spanish still marks plural visibly on the noun itself.",
        focusTags: ["agreement"],
      },
      {
        id: "ec11",
        type: "repair",
        skill: "agreement",
        errorType: "agreement",
        prompt: "Fix the agreement error.",
        sentence: "La casa es muy grandes.",
        answer: "La casa es muy grande.",
        rule: "A singular noun takes a singular adjective.",
        explanation: "Casa is singular, so the adjective should also be singular: grande.",
        whyMistake: "Learners often overgeneralize a plural adjective form they have seen recently and forget to reset it for a singular subject.",
        focusTags: ["agreement"],
      },
      {
        id: "ec12",
        type: "repair",
        skill: "agreement",
        errorType: "agreement",
        prompt: "Fix the agreement error.",
        sentence: "El mano izquierda me duele.",
        answer: "La mano izquierda me duele.",
        rule: "Mano is feminine, so it takes la and a feminine adjective.",
        explanation: "The article must match the noun: la mano izquierda.",
        whyMistake: "Learners often trust the final -o and assume the noun is masculine, but mano is a common exception.",
        focusTags: ["agreement"],
      },
    ],
  },
  {
    id: "practice-prepositions",
    stepIndex: 3,
    title: "Preposition repairs",
    intro: "Spanish prepositions depend on the relationship being expressed, not on direct word-for-word translation from English.",
    questions: [
      {
        id: "ec13",
        type: "repair",
        skill: "preposition",
        errorType: "preposition",
        prompt: "Fix the preposition error.",
        sentence: "Estoy a la biblioteca ahora.",
        answer: "Estoy en la biblioteca ahora.",
        rule: "Use en for location inside or at a place.",
        explanation: "The sentence describes where the speaker is, so en is the correct location preposition.",
        whyMistake: "Learners often treat a and en like general place words instead of distinguishing movement toward a destination from being in a location.",
        focusTags: ["preposition"],
      },
      {
        id: "ec14",
        type: "repair",
        skill: "preposition",
        errorType: "preposition",
        prompt: "Fix the preposition error.",
        sentence: "Salimos con casa a las ocho.",
        answer: "Salimos de casa a las ocho.",
        rule: "Use de to show origin or the point something comes from.",
        explanation: "The sentence means leaving from home, so the correct phrase is de casa.",
        whyMistake: "Learners sometimes overuse con because it is familiar, even when the sentence really needs an origin relation.",
        focusTags: ["preposition"],
      },
      {
        id: "ec15",
        type: "repair",
        skill: "preposition",
        errorType: "preposition",
        prompt: "Fix the preposition error.",
        sentence: "Tenemos examen en viernes.",
        answer: "Tenemos examen el viernes.",
        rule: "With days of the week, Spanish usually uses the article rather than en.",
        explanation: "El viernes is the natural way to say on Friday in this sentence.",
        whyMistake: "English uses on Friday, so learners often search for a Spanish preposition instead of using the article pattern.",
        focusTags: ["preposition"],
      },
      {
        id: "ec16",
        type: "repair",
        skill: "preposition",
        errorType: "preposition",
        prompt: "Fix the preposition error.",
        sentence: "Trabajo por una oficina pequeña cerca del centro.",
        answer: "Trabajo en una oficina pequeña cerca del centro.",
        rule: "Use en to say where someone works or where something is located.",
        explanation: "The sentence describes location, not motive or exchange, so en is the correct preposition.",
        whyMistake: "Because por has many uses, learners often overextend it to any relationship that feels vague or general.",
        focusTags: ["preposition"],
      },
    ],
  },
  {
    id: "practice-accents",
    stepIndex: 4,
    title: "Accent repairs",
    intro: "In this section the accents matter. The evaluation expects the tilde when it changes the correct written form.",
    questions: [
      {
        id: "ec17",
        type: "repair",
        skill: "accent",
        errorType: "accent",
        prompt: "Fix the accent error.",
        sentence: "Tu eres muy amable.",
        answer: "Tú eres muy amable.",
        strictAccents: true,
        rule: "Use tú with an accent for the subject pronoun.",
        explanation: "Here the word means you, not your, so it must be tú.",
        whyMistake: "The spoken form sounds the same, so learners often forget that the written accent is what separates the two grammatical meanings.",
        focusTags: ["accent"],
      },
      {
        id: "ec18",
        type: "repair",
        skill: "accent",
        errorType: "accent",
        prompt: "Fix the accent error.",
        sentence: "Que quieres comer esta noche?",
        answer: "¿Qué quieres comer esta noche?",
        strictAccents: true,
        rule: "Question words like qué take an accent in direct questions.",
        explanation: "This is an actual question, so qué needs the written accent.",
        whyMistake: "Learners often know the word que from relative clauses and forget that question and exclamation uses follow a different accent rule.",
        focusTags: ["accent"],
      },
      {
        id: "ec19",
        type: "repair",
        skill: "accent",
        errorType: "accent",
        prompt: "Fix the accent error.",
        sentence: "El cafe esta frio.",
        answer: "El café está frío.",
        strictAccents: true,
        rule: "The written forms café, está, and frío all require their accents.",
        explanation: "Each of these words has a standard written accent mark that belongs to its correct spelling.",
        whyMistake: "Typing fast often causes learners to drop all accents at once, but Spanish spelling still treats them as part of the word.",
        focusTags: ["accent"],
      },
      {
        id: "ec20",
        type: "repair",
        skill: "accent",
        errorType: "accent",
        prompt: "Fix the accent error.",
        sentence: "Mi papa nació en Peru.",
        answer: "Mi papá nació en Perú.",
        strictAccents: true,
        rule: "Papá and Perú both require their written accents in standard spelling.",
        explanation: "The correction keeps the same meaning but restores the missing accents in both words.",
        whyMistake: "Words learners already recognize by sight can feel readable without accents, but readability is not the same as correct spelling.",
        focusTags: ["accent"],
      },
    ],
  },
  {
    id: "practice-pronouns",
    stepIndex: 5,
    title: "Pronoun repairs",
    intro: "Check what the pronoun is doing: receiving the action, receiving something, or attaching to a verb form.",
    questions: [
      {
        id: "ec21",
        type: "repair",
        skill: "pronoun",
        errorType: "pronoun",
        prompt: "Fix the pronoun error.",
        sentence: "Lo di una carta a mi profesor.",
        answer: "Le di una carta a mi profesor.",
        rule: "Use le for an indirect object: the person receiving something.",
        explanation: "The teacher receives the letter, so the indirect-object pronoun le is needed.",
        whyMistake: "Learners often overuse lo because it is familiar, even when the sentence is really about giving something to someone.",
        focusTags: ["pronoun"],
      },
      {
        id: "ec22",
        type: "repair",
        skill: "pronoun",
        errorType: "pronoun",
        prompt: "Fix the pronoun error.",
        sentence: "Voy a me levantar temprano mañana.",
        answer: "Voy a levantarme temprano mañana.",
        acceptedAnswers: ["Me voy a levantar temprano mañana."],
        rule: "With an infinitive, the reflexive pronoun can attach to the infinitive or go before the conjugated verb.",
        explanation: "Voy a me levantar is not a valid placement. The natural fix is voy a levantarme or me voy a levantar.",
        whyMistake: "Learners know that me belongs with levantarse, but pronoun placement around verb chains takes extra practice.",
        focusTags: ["pronoun"],
      },
      {
        id: "ec23",
        type: "repair",
        skill: "pronoun",
        errorType: "pronoun",
        prompt: "Fix the pronoun error.",
        sentence: "Ana es simpática. Le quiero invitar a la fiesta.",
        answer: "Ana es simpática. La quiero invitar a la fiesta.",
        acceptedAnswers: ["Ana es simpática. Quiero invitarla a la fiesta."],
        rule: "Use la as the feminine direct-object pronoun for Ana in standard Spanish.",
        explanation: "Ana is the person directly receiving the action of invite, so la is the standard direct-object pronoun here.",
        whyMistake: "Learners often confuse direct and indirect object pronouns because English does not mark them as consistently in the same position.",
        focusTags: ["pronoun"],
      },
      {
        id: "ec24",
        type: "repair",
        skill: "pronoun",
        errorType: "pronoun",
        prompt: "Fix the pronoun error.",
        sentence: "Puedes decirlo me ahora?",
        answer: "¿Puedes decírmelo ahora?",
        acceptedAnswers: ["¿Me lo puedes decir ahora?"],
        strictAccents: true,
        rule: "Pronouns must stay together in the correct order, and attachment to an infinitive often requires an accent mark.",
        explanation: "The object sequence is me lo, and when attached to decir it becomes decírmelo.",
        whyMistake: "Learners often know the pronouns they need but place them word by word instead of treating the pronoun cluster as one unit.",
        focusTags: ["pronoun"],
      },
    ],
  },
  {
    id: "practice-mixed",
    stepIndex: 6,
    title: "Mixed correction lab",
    intro: "Now the category changes from sentence to sentence. Keep the same correction loop, but identify the right family first.",
    questions: [
      {
        id: "ec25",
        type: "repair",
        skill: "mixed",
        errorType: "verb",
        prompt: "Find the main mistake and repair the sentence.",
        sentence: "Mañana nosotros sale temprano para el aeropuerto.",
        answer: "Mañana nosotros salimos temprano para el aeropuerto.",
        rule: "The present-tense form must match the subject nosotros: salimos.",
        explanation: "Sale is third-person singular, but the subject is nosotros.",
        whyMistake: "Learners often grab a familiar high-frequency form and forget to adjust it when the subject changes.",
        focusTags: ["mixed", "verb"],
      },
      {
        id: "ec26",
        type: "repair",
        skill: "mixed",
        errorType: "agreement",
        prompt: "Find the main mistake and repair the sentence.",
        sentence: "Mis primas son muy simpático.",
        answer: "Mis primas son muy simpáticas.",
        rule: "The adjective must agree with a feminine plural noun.",
        explanation: "Primas is feminine plural, so simpático changes to simpáticas.",
        whyMistake: "Learners often get the noun right but leave the adjective in its default dictionary form.",
        focusTags: ["mixed", "agreement"],
      },
      {
        id: "ec27",
        type: "repair",
        skill: "mixed",
        errorType: "preposition",
        prompt: "Find the main mistake and repair the sentence.",
        sentence: "Estoy a Madrid por trabajo esta semana.",
        answer: "Estoy en Madrid por trabajo esta semana.",
        rule: "Use en for current location in a city.",
        explanation: "The speaker is already in Madrid, so the sentence needs the location preposition en.",
        whyMistake: "Motion and location blur together for learners when the same city name appears in both types of sentences.",
        focusTags: ["mixed", "preposition"],
      },
      {
        id: "ec28",
        type: "repair",
        skill: "mixed",
        errorType: "accent",
        prompt: "Find the main mistake and repair the sentence.",
        sentence: "Que bonito es este cafe!",
        answer: "¡Qué bonito es este café!",
        strictAccents: true,
        rule: "Qué takes an accent in an exclamation, and café keeps its written accent.",
        explanation: "The sentence is exclamative and also includes the noun café, so both accents belong in the final version.",
        whyMistake: "Learners often treat exclamations like ordinary statements and drop accent marks that still matter in careful writing.",
        focusTags: ["mixed", "accent"],
      },
    ],
  },
  {
    id: "practice-review",
    stepIndex: 7,
    title: "Final review set",
    intro: "Finish with common high-frequency traps. By now the goal is speed and confidence without losing accuracy.",
    questions: [
      {
        id: "ec29",
        type: "repair",
        skill: "review",
        errorType: "verb",
        prompt: "Final review repair.",
        sentence: "Mi amigo no pueden venir hoy.",
        answer: "Mi amigo no puede venir hoy.",
        rule: "A singular subject needs a singular verb form: puede.",
        explanation: "Mi amigo is singular, so the verb must also be singular.",
        whyMistake: "Plural forms can feel more familiar because they are common in charts, but the subject still controls the verb.",
        focusTags: ["review", "verb"],
      },
      {
        id: "ec30",
        type: "repair",
        skill: "review",
        errorType: "agreement",
        prompt: "Final review repair.",
        sentence: "Compré una camisa rojo ayer.",
        answer: "Compré una camisa roja ayer.",
        rule: "The adjective must agree with camisa, which is feminine singular.",
        explanation: "Because camisa is feminine singular, rojo changes to roja.",
        whyMistake: "Color adjectives are easy to leave unchanged because learners often memorize them as bare vocabulary items.",
        focusTags: ["review", "agreement"],
      },
      {
        id: "ec31",
        type: "repair",
        skill: "review",
        errorType: "accent",
        prompt: "Final review repair.",
        sentence: "Si, yo tambien quiero ir.",
        answer: "Sí, yo también quiero ir.",
        strictAccents: true,
        rule: "Sí and también both require accents in this sentence.",
        explanation: "Sí means yes here, and también keeps its standard written accent.",
        whyMistake: "Accent marks often disappear when learners type quickly, especially in short, high-frequency words that still feel easy to recognize.",
        focusTags: ["review", "accent"],
      },
      {
        id: "ec32",
        type: "repair",
        skill: "review",
        errorType: "pronoun",
        prompt: "Final review repair.",
        sentence: "Voy a me duchar y despues te llamo.",
        answer: "Voy a ducharme y después te llamo.",
        acceptedAnswers: ["Me voy a duchar y después te llamo."],
        strictAccents: true,
        rule: "Reflexive pronouns cannot sit in the middle of the verb chain, and después keeps its written accent.",
        explanation: "The pronoun must attach to duchar or move before voy, not stay between a and me.",
        whyMistake: "Learners often know the reflexive pronoun belongs somewhere in the phrase, but they place it word by word instead of following Spanish placement patterns.",
        focusTags: ["review", "pronoun"],
      },
      {
        id: "ec33",
        type: "repair",
        skill: "review",
        errorType: "preposition",
        prompt: "Final review repair.",
        sentence: "Llegamos en Barcelona anoche.",
        answer: "Llegamos a Barcelona anoche.",
        rule: "Use a with arrival at a destination.",
        explanation: "The verb llegar normally takes a before the destination place.",
        whyMistake: "Learners often transfer English in Barcelona directly into Spanish even when the verb implies movement toward arrival.",
        focusTags: ["review", "preposition"],
      },
    ],
  },
];

const allQuestions = PRACTICE_BLOCKS.flatMap((block) => block.questions);
const questionMap = new Map(allQuestions.map((question) => [question.id, question]));
const stepQuestionMap = new Map(
  PRACTICE_BLOCKS.map((block) => [block.stepIndex, block.questions.map((question) => question.id)]),
);

const lessonState = {
  activeStep: 0,
  streak: 0,
  responses: {},
  drafts: {},
};

const elements = {
  steps: [...document.querySelectorAll(".error-step")],
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeSentence(value, strictAccents = false) {
  let normalized = value.trim().toLowerCase().normalize("NFC");
  if (!strictAccents) {
    normalized = normalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  return normalized
    .replace(/[¿?¡!.,;:()"']/g, "")
    .replace(/\s+/g, " ");
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
        if (!question || !draft || typeof draft !== "object") {
          continue;
        }

        const sanitized = {
          text: typeof draft.text === "string" ? draft.text : "",
          errorType: ERROR_TYPE_LABELS[draft.errorType] ? draft.errorType : "",
        };
        lessonState.drafts[questionId] = sanitized;
      }
    }
  } catch (_error) {
    lessonState.activeStep = 0;
    lessonState.streak = 0;
    lessonState.responses = {};
    lessonState.drafts = {};
  }
}

function getModeLabel() {
  return "Identify + repair";
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
  return `
    <article class="question-card error-repair-card" data-question-card="${question.id}">
      <div class="question-meta">
        <span>${number}. ${getModeLabel(question)}</span>
        <span>${SKILL_LABELS[question.skill] || "Practice"}</span>
      </div>
      <h5>${question.prompt}</h5>
      <div class="repair-sentence">${escapeHtml(question.sentence)}</div>
      <div class="repair-task-block">
        <p class="repair-instruction">1. Identify the main error family</p>
        <div class="error-type-grid">
          ${ERROR_TYPE_ORDER.map(
            (type) => `
              <button
                class="option-btn error-type-btn"
                type="button"
                data-error-type-question="${question.id}"
                data-error-type-value="${type}"
              >
                ${ERROR_TYPE_LABELS[type]}
              </button>
            `,
          ).join("")}
        </div>
      </div>
      <div class="repair-task-block">
        <p class="repair-instruction">2. Rewrite the sentence correctly</p>
        <textarea
          class="repair-input"
          data-repair-input="${question.id}"
          spellcheck="false"
          placeholder="Rewrite the full sentence correctly"
        ></textarea>
        <p class="repair-note">Tip: rewrite the whole sentence, not just the wrong word.</p>
      </div>
      <button class="check-btn" type="button" data-check-question="${question.id}">Check repair</button>
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

function applyRepairDraft(questionId, draft = {}) {
  const card = document.querySelector(`[data-question-card="${questionId}"]`);
  if (!card) {
    return;
  }

  card.querySelectorAll(`[data-error-type-question="${questionId}"]`).forEach((button) => {
    button.classList.toggle("is-selected", draft.errorType && button.dataset.errorTypeValue === draft.errorType);
  });

  const textarea = card.querySelector(`[data-repair-input="${questionId}"]`);
  if (textarea && typeof draft.text === "string") {
    textarea.value = draft.text;
  }
}

function handleErrorTypeSelection(button) {
  const questionId = button.dataset.errorTypeQuestion;
  if (!questionId) {
    return;
  }

  const draft = lessonState.drafts[questionId] || { text: "", errorType: "" };
  draft.errorType = button.dataset.errorTypeValue || "";
  lessonState.drafts[questionId] = draft;
  applyRepairDraft(questionId, draft);
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

function buildRepairResult(question, draft = {}) {
  const strictAccents = Boolean(question.strictAccents);
  const normalizedAnswer = normalizeSentence(draft.text || "", strictAccents);
  const accepted = [question.answer].concat(question.acceptedAnswers || []).map((answer) => normalizeSentence(answer, strictAccents));
  const typeCorrect = draft.errorType === question.errorType;
  const textCorrect = draft.text && accepted.includes(normalizedAnswer);
  return {
    typeCorrect,
    textCorrect,
    correct: Boolean(typeCorrect && textCorrect),
  };
}

function decorateRepairCard(question, draft = {}, result) {
  const card = document.querySelector(`[data-question-card="${question.id}"]`);
  if (!card) {
    return;
  }

  card.querySelectorAll(`[data-error-type-question="${question.id}"]`).forEach((button) => {
    button.classList.remove("is-selected", "is-correct", "is-wrong");

    if (button.dataset.errorTypeValue === draft.errorType) {
      button.classList.add("is-selected");
    }
    if (button.dataset.errorTypeValue === question.errorType) {
      button.classList.add("is-correct");
    }
    if (draft.errorType && button.dataset.errorTypeValue === draft.errorType && !result.typeCorrect) {
      button.classList.add("is-wrong");
    }
  });
}

function getFeedbackHeadline(result) {
  if (result.typeCorrect && result.textCorrect) {
    return "Correct repair";
  }
  if (result.typeCorrect) {
    return "Right diagnosis, incomplete repair";
  }
  if (result.textCorrect) {
    return "Right sentence, wrong error family";
  }
  return "Needs another pass";
}

function getFeedbackSummary(result) {
  if (result.typeCorrect && result.textCorrect) {
    return "You identified the correct error family and repaired the sentence successfully.";
  }
  if (result.typeCorrect) {
    return "You spotted the right kind of mistake. Now tighten the corrected sentence so every form is fully right.";
  }
  if (result.textCorrect) {
    return "Your corrected sentence works, but the mistake belongs to a different error family than the one you selected.";
  }
  return "The sentence still needs work. Use the rule and the compare box to see exactly what changed.";
}

function renderStatusChip(label, isCorrect) {
  return `<span class="status-chip ${isCorrect ? "is-correct" : "is-wrong"}">${label}: ${isCorrect ? "Correct" : "Needs work"}</span>`;
}

function renderRepairFeedback(question, draft, result) {
  return `
    <div class="feedback-panel ${result.correct ? "is-correct" : "is-wrong"}">
      <div class="feedback-head">
        <span>${getFeedbackHeadline(result)}</span>
        <span>${question.rule}</span>
      </div>
      <p>${getFeedbackSummary(result)}</p>
      <div class="status-row">
        ${renderStatusChip("Error family", result.typeCorrect)}
        ${renderStatusChip("Sentence repair", result.textCorrect)}
      </div>
      <p><strong>Correct error family:</strong> ${ERROR_TYPE_LABELS[question.errorType]}</p>
      <p><strong>Your selected family:</strong> ${draft.errorType ? ERROR_TYPE_LABELS[draft.errorType] : "None selected"}</p>
      <p><strong>Rule:</strong> ${question.rule}</p>
      <p><strong>Correct version:</strong> ${escapeHtml(question.answer)}</p>
      <p><strong>Why this mistake happens:</strong> ${question.whyMistake}</p>
      <div class="error-compare">
        <h5>Compare the change</h5>
        <div class="error-compare-grid">
          <div class="compare-panel is-wrong">
            <strong>Incorrect</strong>
            <p>${escapeHtml(question.sentence)}</p>
          </div>
          <div class="compare-panel is-correct">
            <strong>Correct</strong>
            <p>${escapeHtml(question.answer)}</p>
          </div>
        </div>
      </div>
      <p><strong>Why the correction works:</strong> ${question.explanation}</p>
      ${renderFeedbackTags(question.focusTags)}
    </div>
  `;
}

function evaluateRepairQuestion(question) {
  const card = document.querySelector(`[data-question-card="${question.id}"]`);
  const input = card?.querySelector(`[data-repair-input="${question.id}"]`);
  const draft = lessonState.drafts[question.id] || { text: "", errorType: "" };

  if (input) {
    draft.text = input.value;
    lessonState.drafts[question.id] = draft;
  }

  if (!draft.errorType) {
    return { ready: false, message: "Pick the error family first." };
  }
  if (!draft.text || !draft.text.trim()) {
    return { ready: false, message: "Rewrite the sentence before checking." };
  }

  const result = buildRepairResult(question, draft);
  setResponse(question.id, result.correct);
  decorateRepairCard(question, draft, result);

  return {
    ready: true,
    html: renderRepairFeedback(question, draft, result),
  };
}

function evaluateQuestion(questionId) {
  const question = questionMap.get(questionId);
  const feedbackBox = document.querySelector(`[data-feedback-for="${questionId}"]`);
  if (!question || !feedbackBox) {
    return;
  }

  const result = evaluateRepairQuestion(question);
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
  const draft = lessonState.drafts[question.id] || { text: "", errorType: "" };
  if (!feedbackBox || !response?.answered) {
    return;
  }

  const result = buildRepairResult(question, draft);
  decorateRepairCard(question, draft, result);
  feedbackBox.innerHTML = renderRepairFeedback(question, draft, result);
}

function restoreSavedDrafts() {
  for (const question of allQuestions) {
    const draft = lessonState.drafts[question.id];
    if (!draft) {
      continue;
    }
    applyRepairDraft(question.id, draft);
  }
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const errorTypeButton = event.target.closest("[data-error-type-question]");
    if (errorTypeButton) {
      handleErrorTypeSelection(errorTypeButton);
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
    const repairInput = event.target.closest("[data-repair-input]");
    if (!repairInput) {
      return;
    }
    const questionId = repairInput.dataset.repairInput;
    const draft = lessonState.drafts[questionId] || { text: "", errorType: "" };
    draft.text = repairInput.value;
    lessonState.drafts[questionId] = draft;
    saveLessonState();
  });

  if (elements.prevStepBtn) {
    elements.prevStepBtn.addEventListener("click", () => setActiveStep(lessonState.activeStep - 1));
  }
  if (elements.nextStepBtn) {
    elements.nextStepBtn.addEventListener("click", () => setActiveStep(lessonState.activeStep + 1));
  }
}

function initErrorCourse() {
  renderPracticeBlocks();
  loadLessonState();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    restoreSavedQuestionState(question);
  });
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
}

initErrorCourse();

const SKILL_LABELS = {
  foundations: "Foundations",
  expansion: "Sentence expansion",
  connectors: "Connectors",
  paragraphs: "Paragraph structure",
  tone: "Tone control",
  accuracy: "Accuracy lab",
  workshop: "Writing workshop",
  review: "Mixed review",
};

const ISSUE_LABELS = {
  clarity: "Clarity",
  expansion: "Expansion",
  connector: "Connector",
  paragraph: "Paragraph",
  tone: "Tone",
  formality: "Formality",
  tense: "Tense",
  agreement: "Agreement",
  accuracy: "Accuracy",
};

const COURSE_STORAGE_KEY = "writing-course-progress-v1";

const PRACTICE_BLOCKS = [
  {
    id: "practice-foundations",
    stepIndex: 0,
    title: "Sentence core drill",
    intro: "Start with clear, accurate Spanish before trying to sound more advanced.",
    questions: [
      {
        id: "fd1",
        type: "choice",
        skill: "foundations",
        prompt: "Which sentence is the clearest way to start a short paragraph about your studies?",
        options: [
          "Porque estudio importante.",
          "Estudio español en la universidad.",
          "La universidad porque español.",
        ],
        answerIndex: 1,
        rule: "Clear writing needs a complete sentence",
        explanation:
          "A useful opening sentence has a verb, a clear subject idea, and information that belongs together. 'Estudio español en la universidad' gives a complete, readable idea.",
        correctAnswerText: "Estudio español en la universidad.",
        focusTags: ["clarity", "accuracy"],
      },
      {
        id: "fd2",
        type: "fill",
        skill: "foundations",
        modeLabel: "Agreement drill",
        prompt: "Complete with the correct adjective: Las clases son muy _____.",
        answer: "interesantes",
        rule: "Adjectives must agree in number",
        explanation:
          "Clases is plural, so the adjective also has to be plural: interesantes.",
        correctAnswerText: "interesantes",
        focusTags: ["agreement", "accuracy"],
      },
      {
        id: "fd3",
        type: "sort",
        skill: "foundations",
        modeLabel: "Sentence planning sort",
        prompt: "Sort each piece of the sentence under its role.",
        rule: "Plan the sentence before you expand it",
        categories: [
          { id: "subject", label: "Subject" },
          { id: "verb", label: "Verb" },
          { id: "detail", label: "Detail" },
        ],
        focusTags: ["clarity", "expansion"],
        items: [
          {
            word: "yo",
            correct: "subject",
            explanation: "The subject tells you who performs the action.",
          },
          {
            word: "escribo",
            correct: "verb",
            explanation: "The verb carries the action and tense.",
          },
          {
            word: "en casa",
            correct: "detail",
            explanation: "This adds place information.",
          },
          {
            word: "por la noche",
            correct: "detail",
            explanation: "This adds time information.",
          },
        ],
      },
      {
        id: "fd4",
        type: "choice",
        skill: "foundations",
        prompt: "Which sentence matches the time word ayer correctly?",
        options: [
          "Ayer estudio en la biblioteca.",
          "Ayer estudié en la biblioteca.",
          "Ayer estudiar en la biblioteca.",
        ],
        answerIndex: 1,
        rule: "Time markers guide tense choice",
        explanation:
          "Ayer points to the past, so the verb should also be in the past: estudié.",
        correctAnswerText: "Ayer estudié en la biblioteca.",
        focusTags: ["tense", "accuracy"],
      },
    ],
  },
  {
    id: "practice-expansion",
    stepIndex: 1,
    title: "Expansion workshop",
    intro: "Grow a simple sentence by adding place, time, and reason in a controlled way.",
    questions: [
      {
        id: "ex1",
        type: "choice",
        skill: "expansion",
        prompt: "Which sentence expands 'Trabajo' clearly and naturally?",
        options: [
          "Trabajo porque oficina por la mañana.",
          "Trabajo en una oficina por la mañana porque estudio por la tarde.",
          "Trabajo oficina estudio tarde porque.",
        ],
        answerIndex: 1,
        rule: "Expand one layer at a time",
        explanation:
          "A strong expanded sentence still stays readable. This version adds place, time, and reason without breaking the grammar.",
        correctAnswerText: "Trabajo en una oficina por la mañana porque estudio por la tarde.",
        focusTags: ["expansion", "clarity"],
      },
      {
        id: "ex2",
        type: "rewrite",
        skill: "expansion",
        modeLabel: "Combine the ideas",
        prompt: "Rewrite these ideas as one sentence using porque.",
        originalSentence: "Estudio español. Quiero viajar a México.",
        answer: "Estudio español porque quiero viajar a México.",
        acceptedAnswers: ["estudio español porque quiero viajar a mexico"],
        rule: "Use porque to link reason",
        explanation:
          "One idea can become more natural when the reason is attached directly with porque.",
        correctAnswerText: "Estudio español porque quiero viajar a México.",
        modelAnswer: "Estudio español porque quiero viajar a México.",
        focusTags: ["expansion", "connector"],
      },
      {
        id: "ex3",
        type: "guidedWrite",
        skill: "expansion",
        modeLabel: "Guided sentence build",
        prompt: "Expand the sentence 'Trabajo' into one fuller sentence.",
        situation: "Include where you work, when, and why.",
        scaffold: [
          "Start with Trabajo...",
          "Add a place after en...",
          "Add a time phrase such as por la mañana or por la tarde.",
          "Add a reason with porque.",
        ],
        requirements: [
          { label: "Keep the base idea with trabajo", matchAny: ["trabajo"] },
          { label: "Add a place", matchAny: ["en una oficina", "en un restaurante", "en una tienda", "en casa", "en la universidad"] },
          { label: "Add a time phrase", matchAny: ["por la mañana", "por la tarde", "por la noche", "los fines de semana", "cada día"] },
          { label: "Add a reason with porque", matchAny: ["porque"] },
        ],
        minWords: 10,
        rule: "Sentence expansion adds useful detail without losing control",
        explanation:
          "You are training yourself to add information in layers. The goal is not length by itself, but a sentence that is fuller and still clear.",
        modelAnswer: "Trabajo en una oficina por la mañana porque estudio por la tarde.",
        focusTags: ["expansion", "clarity"],
      },
      {
        id: "ex4",
        type: "choice",
        skill: "expansion",
        prompt: "Which sentence adds detail without becoming messy?",
        options: [
          "Leo en casa porque quiero aprender más y además me gusta practicar cada noche.",
          "Leo porque casa noche aprender gusta más.",
          "Leo además porque y casa aprender más noche.",
        ],
        answerIndex: 0,
        rule: "Details should support the main idea",
        explanation:
          "The best expanded sentence still feels organized. The other choices pile up words without structure.",
        correctAnswerText: "Leo en casa porque quiero aprender más y además me gusta practicar cada noche.",
        focusTags: ["clarity", "expansion"],
      },
    ],
  },
  {
    id: "practice-connectors",
    stepIndex: 2,
    title: "Connector control",
    intro: "Choose connectors by logic: addition, contrast, result, or order.",
    questions: [
      {
        id: "cn1",
        type: "choice",
        skill: "connectors",
        prompt: "Choose the best connector: Me gusta Madrid; _____, prefiero vivir en una ciudad pequeña.",
        options: ["además", "sin embargo", "por lo tanto"],
        answerIndex: 1,
        rule: "Use a contrast connector for opposite ideas",
        explanation:
          "The writer likes Madrid but prefers something different, so the logic is contrast: sin embargo.",
        correctAnswerText: "sin embargo",
        focusTags: ["connector", "clarity"],
      },
      {
        id: "cn2",
        type: "fill",
        skill: "connectors",
        modeLabel: "Connector fill",
        prompt: "Complete with the best connector: Tengo un examen mañana; _____, voy a estudiar esta noche.",
        answer: "por lo tanto",
        acceptedAnswers: ["por tanto"],
        rule: "Use a result connector when one idea leads to another",
        explanation:
          "The exam causes the decision to study, so the connector should show result or consequence.",
        correctAnswerText: "por lo tanto",
        focusTags: ["connector", "clarity"],
      },
      {
        id: "cn3",
        type: "choice",
        skill: "connectors",
        prompt: "Which connector adds another supporting point?",
        options: ["además", "sin embargo", "por eso"],
        answerIndex: 0,
        rule: "Addition connectors add support",
        explanation:
          "Además introduces another point that supports the same direction of the paragraph.",
        correctAnswerText: "además",
        focusTags: ["connector"],
      },
      {
        id: "cn4",
        type: "guidedWrite",
        skill: "connectors",
        modeLabel: "Connector sentence build",
        prompt: "Write one sentence that connects these ideas with contrast: Me gusta Madrid. Prefiero vivir en una ciudad pequeña.",
        situation: "Use a contrast connector naturally.",
        scaffold: [
          "Keep both ideas.",
          "Insert a contrast connector between them.",
          "Make the sentence flow as one unit.",
        ],
        requirements: [
          { label: "Mention Madrid", matchAny: ["madrid"] },
          { label: "Mention the smaller-city preference", matchAny: ["prefiero vivir en una ciudad pequeña", "ciudad pequeña", "pueblo pequeño"] },
          { label: "Use a contrast connector", matchAny: ["sin embargo", "pero", "aunque"] },
        ],
        minWords: 9,
        rule: "Connectors should match the relationship between ideas",
        explanation:
          "This exercise trains you to choose the connector by logic instead of by habit. The two ideas point in different directions, so the link should show contrast.",
        modelAnswer: "Me gusta Madrid; sin embargo, prefiero vivir en una ciudad pequeña.",
        focusTags: ["connector", "clarity"],
      },
    ],
  },
  {
    id: "practice-paragraphs",
    stepIndex: 3,
    title: "Paragraph building",
    intro: "A paragraph becomes easier to write when each sentence has a clear job.",
    questions: [
      {
        id: "pg1",
        type: "sort",
        skill: "paragraphs",
        modeLabel: "Paragraph role sort",
        prompt: "Sort each sentence by its job in the paragraph.",
        rule: "Each paragraph sentence should have a role",
        categories: [
          { id: "topic", label: "Topic sentence" },
          { id: "support", label: "Support" },
          { id: "example", label: "Example" },
          { id: "closing", label: "Closing" },
        ],
        focusTags: ["paragraph", "clarity"],
        items: [
          {
            word: "Aprender español es útil para mi futuro.",
            correct: "topic",
            explanation: "This states the main idea of the paragraph clearly.",
          },
          {
            word: "Me ayuda a comunicarme con más personas.",
            correct: "support",
            explanation: "This supports the topic sentence with a reason.",
          },
          {
            word: "Por ejemplo, ahora entiendo mejor algunos videos.",
            correct: "example",
            explanation: "This makes the support concrete.",
          },
          {
            word: "Por eso quiero seguir estudiándolo.",
            correct: "closing",
            explanation: "This closes the paragraph by returning to the main idea.",
          },
        ],
      },
      {
        id: "pg2",
        type: "choice",
        skill: "paragraphs",
        prompt: "Which sentence works best as a topic sentence for a paragraph about your daily routine?",
        options: [
          "Mi rutina diaria es bastante organizada.",
          "Porque me levanto temprano.",
          "Después en la cocina.",
        ],
        answerIndex: 0,
        rule: "The topic sentence should introduce the main idea",
        explanation:
          "A topic sentence should be broad enough to lead the rest of the paragraph, but still clear and specific.",
        correctAnswerText: "Mi rutina diaria es bastante organizada.",
        focusTags: ["paragraph", "clarity"],
      },
      {
        id: "pg3",
        type: "choice",
        skill: "paragraphs",
        prompt: "Which sentence works best as a closing sentence?",
        options: [
          "Por eso mi rutina me ayuda a empezar bien el día.",
          "Y también el desayuno porque.",
          "En la mañana además después.",
        ],
        answerIndex: 0,
        rule: "A closing sentence should wrap up the idea",
        explanation:
          "The closing sentence should sound complete and show why the paragraph matters overall.",
        correctAnswerText: "Por eso mi rutina me ayuda a empezar bien el día.",
        focusTags: ["paragraph", "connector"],
      },
      {
        id: "pg4",
        type: "guidedWrite",
        skill: "paragraphs",
        modeLabel: "Mini paragraph",
        prompt: "Write a short paragraph about why learning Spanish is important to you.",
        situation: "Aim for 3-4 connected sentences.",
        scaffold: [
          "Sentence 1: state the main idea.",
          "Sentence 2: add a reason with porque or además.",
          "Sentence 3: give an example with por ejemplo or como.",
          "Sentence 4: close with por eso or another concluding idea.",
        ],
        requirements: [
          { label: "Mention learning or studying Spanish", matchAny: ["aprender español", "estudiar español", "el español"] },
          { label: "Include a connector", matchAny: ["porque", "además", "por ejemplo", "por eso"] },
          { label: "Include an example marker", matchAny: ["por ejemplo", "como"] },
          { label: "Add a closing idea", matchAny: ["por eso", "en resumen", "por lo tanto", "así que"] },
        ],
        minWords: 26,
        rule: "A paragraph should move forward in stages",
        explanation:
          "This scaffold helps you build a paragraph that does more than list thoughts. Each sentence should support the one before it.",
        modelAnswer:
          "Aprender español es importante para mí porque quiero comunicarme con más personas. Además, me ayuda a entender mejor la cultura de muchos países. Por ejemplo, ahora puedo seguir canciones y videos con más facilidad. Por eso quiero seguir practicándolo cada semana.",
        focusTags: ["paragraph", "connector", "clarity"],
      },
    ],
  },
  {
    id: "practice-tone",
    stepIndex: 4,
    title: "Tone control",
    intro: "Match the tone to the situation so your writing sounds appropriate, not just grammatical.",
    questions: [
      {
        id: "tn1",
        type: "choice",
        skill: "tone",
        prompt: "Which opening sounds most appropriate for a formal message to a teacher?",
        options: [
          "Hola, profe.",
          "Buenas tardes, profesora.",
          "¿Qué tal, amiga?",
        ],
        answerIndex: 1,
        rule: "Formal writing needs a formal opening",
        explanation:
          "Buenas tardes, profesora is respectful and appropriate for a teacher. The other greetings are too casual.",
        correctAnswerText: "Buenas tardes, profesora.",
        focusTags: ["tone", "formality"],
      },
      {
        id: "tn2",
        type: "choice",
        skill: "tone",
        prompt: "Which request sounds the most formal?",
        options: [
          "¿Me ayudas con la tarea?",
          "Quisiera pedirle ayuda con la tarea.",
          "Ayúdame con la tarea hoy.",
        ],
        answerIndex: 1,
        rule: "Formal tone often uses softer requests",
        explanation:
          "Quisiera pedirle... sounds more polite and more formal than a direct command or casual question.",
        correctAnswerText: "Quisiera pedirle ayuda con la tarea.",
        focusTags: ["tone", "formality"],
      },
      {
        id: "tn3",
        type: "rewrite",
        skill: "tone",
        modeLabel: "Tone rewrite",
        prompt: "Rewrite this sentence in a more formal tone.",
        originalSentence: "Hola, profe. ¿Me ayudas hoy?",
        answer: "Buenas tardes, profesora. ¿Podría ayudarme hoy?",
        acceptedAnswers: [
          "buenas tardes profesora podria ayudarme hoy",
          "buenas tardes profesora ¿podria ayudarme hoy?",
          "buenas tardes profesora. podria ayudarme hoy",
          "buenas tardes profesora. podria ayudarme hoy?",
        ],
        rule: "Formal tone changes both greeting and request",
        explanation:
          "A formal rewrite should avoid casual terms like profe and use a softer request form such as podría ayudarme.",
        correctAnswerText: "Buenas tardes, profesora. ¿Podría ayudarme hoy?",
        modelAnswer: "Buenas tardes, profesora. ¿Podría ayudarme hoy?",
        focusTags: ["tone", "formality"],
      },
      {
        id: "tn4",
        type: "guidedWrite",
        skill: "tone",
        modeLabel: "Formal message",
        prompt: "Write a short formal message to a teacher asking for more time.",
        situation: "Keep the tone respectful and clear.",
        scaffold: [
          "Start with a formal greeting.",
          "State your request politely.",
          "Give a short reason.",
          "End with a polite closing.",
        ],
        requirements: [
          { label: "Use a formal greeting", matchAny: ["buenas tardes", "estimada profesora", "estimado profesor"] },
          { label: "Use a polite request", matchAny: ["quisiera", "podría", "podria"] },
          { label: "Give a reason with porque", matchAny: ["porque"] },
          { label: "Use a polite closing", matchAny: ["gracias", "saludos", "atentamente"] },
        ],
        forbidden: [
          { label: "Avoid casual address", matchAny: ["profe", "hola"] },
        ],
        minWords: 18,
        rule: "Tone should match the relationship",
        explanation:
          "Formal writing is not only about vocabulary. It also depends on greeting, request style, and closing.",
        modelAnswer:
          "Buenas tardes, profesora. Quisiera pedirle un poco más de tiempo para entregar la tarea porque esta semana he tenido un examen importante. Muchas gracias por su comprensión. Saludos cordiales.",
        focusTags: ["tone", "formality", "clarity"],
      },
    ],
  },
  {
    id: "practice-accuracy",
    stepIndex: 5,
    title: "Correction lab",
    intro: "Fix tense and agreement problems before they become writing habits.",
    questions: [
      {
        id: "ac1",
        type: "rewrite",
        skill: "accuracy",
        modeLabel: "Tense correction",
        prompt: "Rewrite the sentence correctly.",
        originalSentence: "Ayer voy a la biblioteca y estudio por tres horas.",
        answer: "Ayer fui a la biblioteca y estudié por tres horas.",
        acceptedAnswers: ["ayer fui a la biblioteca y estudie por tres horas"],
        rule: "Past time words require past verbs",
        explanation:
          "Ayer moves the whole sentence into the past, so both verbs should be past forms.",
        correctAnswerText: "Ayer fui a la biblioteca y estudié por tres horas.",
        modelAnswer: "Ayer fui a la biblioteca y estudié por tres horas.",
        focusTags: ["tense", "accuracy"],
      },
      {
        id: "ac2",
        type: "fill",
        skill: "accuracy",
        modeLabel: "Agreement fix",
        prompt: "Complete the sentence correctly: Mis amigas están muy _____.",
        answer: "cansadas",
        rule: "Plural feminine nouns need plural feminine adjectives",
        explanation:
          "Amigas is feminine plural, so the adjective must match: cansadas.",
        correctAnswerText: "cansadas",
        focusTags: ["agreement", "accuracy"],
      },
      {
        id: "ac3",
        type: "choice",
        skill: "accuracy",
        prompt: "Which sentence keeps the future idea consistent?",
        options: [
          "Mañana voy a terminar la tarea y después voy a descansar.",
          "Mañana terminé la tarea y después descanso.",
          "Mañana terminar la tarea y después descansar.",
        ],
        answerIndex: 0,
        rule: "Keep the tense timeline steady",
        explanation:
          "The best sentence keeps both actions in the same future-oriented plan instead of shifting tenses without reason.",
        correctAnswerText: "Mañana voy a terminar la tarea y después voy a descansar.",
        focusTags: ["tense", "accuracy"],
      },
      {
        id: "ac4",
        type: "choice",
        skill: "accuracy",
        prompt: "Which sentence has correct agreement?",
        options: [
          "Las actividades fue interesante.",
          "Las actividades fueron interesantes.",
          "Las actividades fueron interesante.",
        ],
        answerIndex: 1,
        rule: "Verb and adjective agreement both matter",
        explanation:
          "The subject is plural, so the verb should be fueron, and the adjective should also be plural: interesantes.",
        correctAnswerText: "Las actividades fueron interesantes.",
        focusTags: ["agreement", "accuracy"],
      },
    ],
  },
  {
    id: "practice-workshop",
    stepIndex: 6,
    title: "Guided writing workshop",
    intro: "Now use everything together in short real-life writing tasks.",
    questions: [
      {
        id: "wk1",
        type: "guidedWrite",
        skill: "workshop",
        modeLabel: "Informal message",
        prompt: "Write a short message to a friend explaining why you cannot go out tonight.",
        situation: "Keep the tone informal but clear.",
        scaffold: [
          "Start like you would with a friend.",
          "Say that you cannot go out tonight.",
          "Give a reason with porque.",
          "Suggest another time if possible.",
        ],
        requirements: [
          { label: "Use an informal opening", matchAny: ["hola", "oye"] },
          { label: "Say you cannot go", matchAny: ["no puedo", "no puedo salir"] },
          { label: "Give a reason", matchAny: ["porque"] },
          { label: "Mention tonight or today", matchAny: ["esta noche", "hoy"] },
          { label: "Suggest another time", matchAny: ["mañana", "otro día", "el fin de semana"] },
        ],
        minWords: 16,
        rule: "Informal writing can still be organized and accurate",
        explanation:
          "The message should sound natural for a friend, but it still needs clear tense, a reason, and a complete thought.",
        modelAnswer:
          "Hola, Ana. No puedo salir esta noche porque tengo que terminar una tarea importante. Si quieres, podemos vernos mañana después de clase.",
        focusTags: ["clarity", "tone", "tense"],
      },
      {
        id: "wk2",
        type: "guidedWrite",
        skill: "workshop",
        modeLabel: "Formal email",
        prompt: "Write a short formal email to a teacher asking for help with an assignment.",
        situation: "Use respectful tone and clear structure.",
        scaffold: [
          "Open formally.",
          "State what assignment you need help with.",
          "Ask politely for help or a meeting.",
          "Close politely.",
        ],
        requirements: [
          { label: "Use a formal greeting", matchAny: ["buenas tardes", "estimada profesora", "estimado profesor"] },
          { label: "Mention the assignment", matchAny: ["tarea", "proyecto", "trabajo"] },
          { label: "Ask politely for help", matchAny: ["quisiera", "podría", "podria", "me gustaría", "me gustaria"] },
          { label: "Use a polite closing", matchAny: ["gracias", "saludos", "atentamente"] },
        ],
        forbidden: [
          { label: "Avoid casual vocabulary", matchAny: ["profe", "hola", "oye"] },
        ],
        minWords: 22,
        rule: "Formal writing should be respectful and direct",
        explanation:
          "A formal message needs a respectful opening, a clear request, and a polite closing. It should also avoid casual vocabulary.",
        modelAnswer:
          "Buenas tardes, profesora. Quisiera pedirle ayuda con el proyecto final porque todavía tengo dudas sobre la introducción. ¿Podría reunirse conmigo esta semana? Muchas gracias por su tiempo. Saludos cordiales.",
        focusTags: ["tone", "formality", "clarity"],
      },
    ],
  },
  {
    id: "practice-review",
    stepIndex: 7,
    title: "Mixed mastery check",
    intro: "Finish with a mixed set that forces you to manage logic, grammar, and tone together.",
    questions: [
      {
        id: "rv1",
        type: "choice",
        skill: "review",
        prompt: "Choose the best connector for result: Tengo mucho trabajo; _____, voy a escribir un borrador corto hoy.",
        options: ["además", "por eso", "sin embargo"],
        answerIndex: 1,
        rule: "Match the connector to the logic",
        explanation:
          "The second idea is a consequence of the first one, so por eso is the most natural connector.",
        correctAnswerText: "por eso",
        focusTags: ["connector", "clarity"],
      },
      {
        id: "rv2",
        type: "rewrite",
        skill: "review",
        modeLabel: "Full correction",
        prompt: "Rewrite the sentence correctly.",
        originalSentence: "Mis hermanas está cansado porque ayer estudian mucho.",
        answer: "Mis hermanas están cansadas porque ayer estudiaron mucho.",
        acceptedAnswers: ["mis hermanas estan cansadas porque ayer estudiaron mucho"],
        rule: "Check subject, adjective, and tense together",
        explanation:
          "The subject is plural, the adjective must agree with it, and ayer requires a past verb form.",
        correctAnswerText: "Mis hermanas están cansadas porque ayer estudiaron mucho.",
        modelAnswer: "Mis hermanas están cansadas porque ayer estudiaron mucho.",
        focusTags: ["agreement", "tense", "accuracy"],
      },
      {
        id: "rv3",
        type: "guidedWrite",
        skill: "review",
        modeLabel: "Final paragraph",
        prompt: "Write a short paragraph about your study plan for the weekend.",
        situation: "Use at least 3 connected sentences.",
        scaffold: [
          "Start with your main plan.",
          "Add the order of actions with a connector.",
          "Explain one reason with porque.",
          "Keep the tense consistent.",
        ],
        requirements: [
          { label: "Mention the weekend", matchAny: ["este fin de semana", "el sábado", "el domingo"] },
          { label: "Use a study action", matchAny: ["voy a estudiar", "estudiaré", "quiero estudiar"] },
          { label: "Use a connector", matchAny: ["primero", "después", "además", "por eso"] },
          { label: "Give a reason with porque", matchAny: ["porque"] },
        ],
        minWords: 26,
        rule: "A good paragraph keeps the plan, logic, and grammar aligned",
        explanation:
          "This final task checks whether you can organize a small paragraph while staying accurate with tense, connector use, and clarity.",
        modelAnswer:
          "Este fin de semana voy a estudiar español en casa. Primero voy a terminar mis ejercicios de gramática y después voy a escribir un párrafo corto. Además, quiero repasar los verbos porque tengo una presentación la próxima semana. Por eso necesito organizar bien mi tiempo.",
        focusTags: ["paragraph", "connector", "tense", "clarity"],
      },
    ],
  },
];

const allQuestions = PRACTICE_BLOCKS.flatMap((block) => block.questions);
const questionMap = new Map(allQuestions.map((question) => [question.id, question]));
const stepQuestionMap = new Map(
  PRACTICE_BLOCKS.map((block) => [block.stepIndex, block.questions.map((question) => question.id)]),
);

const elements = {
  steps: Array.from(document.querySelectorAll(".lesson-step")),
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

const lessonState = {
  activeStep: 0,
  streak: 0,
  responses: {},
  drafts: {},
};

function normalizeInput(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!.,;:]/g, "")
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
        if (!question) {
          continue;
        }

        if ((question.type === "fill" || question.type === "rewrite" || question.type === "guidedWrite") && typeof draft === "string") {
          lessonState.drafts[questionId] = draft;
          continue;
        }

        if (question.type === "choice" && draft != null) {
          lessonState.drafts[questionId] = String(draft);
          continue;
        }

        if (question.type === "sort" && draft && typeof draft === "object" && !Array.isArray(draft)) {
          const validCategories = new Set(question.categories.map((category) => category.id));
          const sanitized = {};
          for (const [itemIndex, selectedValue] of Object.entries(draft)) {
            if (validCategories.has(selectedValue)) {
              sanitized[itemIndex] = selectedValue;
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
  if (question.type === "rewrite") {
    return "Correction exercise";
  }
  if (question.type === "guidedWrite") {
    return "Guided writing";
  }
  return "Practice";
}

function renderFeedbackTags(tags = []) {
  if (!tags.length) {
    return "";
  }

  return `
    <div class="feedback-tags">
      ${tags.map((tag) => `<span class="feedback-tag issue-${tag}">${ISSUE_LABELS[tag] || tag}</span>`).join("")}
    </div>
  `;
}

function renderModelAnswer(question) {
  if (!question.modelAnswer) {
    return "";
  }

  return `
    <div class="model-answer-card">
      <h4>Model answer</h4>
      <p class="model-answer-body">${question.modelAnswer}</p>
    </div>
  `;
}

function getCorrectAnswerText(question) {
  if (question.correctAnswerText) {
    return question.correctAnswerText;
  }
  if (question.type === "choice") {
    return question.options[question.answerIndex];
  }
  if (question.type === "fill") {
    return question.answer;
  }
  if (question.type === "rewrite") {
    return question.answer;
  }
  return "";
}

function renderPracticeBlocks() {
  PRACTICE_BLOCKS.forEach((block) => {
    const container = document.querySelector(`#${block.id}`);
    if (!container) {
      return;
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
  });
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
          placeholder="Type the answer"
          data-fill-question="${question.id}"
        />
        <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
      </div>
    `;
  }

  if (question.type === "rewrite") {
    return `
      <div class="rewrite-row">
        <div class="example-output">
          <h4>Rewrite This</h4>
          <p>${question.originalSentence}</p>
        </div>
        <textarea
          class="rewrite-input"
          spellcheck="false"
          placeholder="Rewrite the sentence correctly"
          data-rewrite-question="${question.id}"
        ></textarea>
        <div class="check-actions">
          <button class="check-btn" type="button" data-check-question="${question.id}">Check correction</button>
        </div>
      </div>
    `;
  }

  if (question.type === "guidedWrite") {
    return `
      <div class="guided-write-card">
        ${question.situation
          ? `
            <div class="example-output">
              <h4>Situation</h4>
              <p>${question.situation}</p>
            </div>
          `
          : ""}
        <div class="scaffold-grid">
          <div class="scaffold-card">
            <h4>Scaffold</h4>
            <ul class="scaffold-list">
              ${(question.scaffold || []).map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
          <div class="scaffold-card">
            <h4>Target Features</h4>
            <ul class="requirement-list">
              ${(question.requirements || []).map((item) => `<li>${item.label}</li>`).join("")}
            </ul>
          </div>
        </div>
        <textarea
          class="guided-write-input"
          spellcheck="false"
          placeholder="Write your draft here"
          data-guided-question="${question.id}"
        ></textarea>
        <div class="check-actions">
          <button class="check-btn" type="button" data-check-question="${question.id}">Check draft</button>
        </div>
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
      const answered = ids.filter((questionId) => lessonState.responses[questionId]?.answered).length;
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

function renderBaseFeedback(question, correct, bodyHtml) {
  return `
    <div class="feedback-panel ${correct ? "is-correct" : "is-wrong"}">
      <div class="feedback-head">
        <span>${correct ? "Correct" : "Not yet"}</span>
        <span>${question.rule}</span>
      </div>
      ${bodyHtml}
      ${renderFeedbackTags(question.focusTags)}
      ${renderModelAnswer(question)}
    </div>
  `;
}

function renderStandardFeedback(question, correct) {
  return renderBaseFeedback(
    question,
    correct,
    `
      <p><strong>Correct answer:</strong> ${getCorrectAnswerText(question)}</p>
      <p>${question.explanation}</p>
    `,
  );
}

function renderSortFeedback(question, results, correct) {
  return renderBaseFeedback(
    question,
    correct,
    `
      <p>${correct ? "You matched each sentence role correctly." : "Some items need another look. Check the function of each sentence."}</p>
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
    `,
  );
}

function evaluateGuidedDraft(question, draft) {
  const text = String(draft || "").trim();
  const normalized = normalizeInput(text);
  const wordCount = text ? text.split(/\s+/).filter(Boolean).length : 0;

  const requirementResults = (question.requirements || []).map((requirement) => ({
    ...requirement,
    hit: (requirement.matchAny || []).some((token) => normalized.includes(normalizeInput(token))),
  }));

  const forbiddenResults = (question.forbidden || []).map((forbidden) => ({
    ...forbidden,
    hit: (forbidden.matchAny || []).some((token) => normalized.includes(normalizeInput(token))),
  }));

  const minWords = Math.max(0, Number(question.minWords) || 0);
  const minWordsHit = wordCount >= minWords;
  const correct = minWordsHit
    && requirementResults.every((result) => result.hit)
    && forbiddenResults.every((result) => !result.hit);

  return {
    correct,
    wordCount,
    minWords,
    minWordsHit,
    requirementResults,
    forbiddenResults,
  };
}

function renderGuidedFeedback(question, evaluation) {
  const hits = evaluation.requirementResults.filter((item) => item.hit).length;
  const misses = evaluation.requirementResults.length - hits;
  const forbiddenHits = evaluation.forbiddenResults.filter((item) => item.hit);

  return renderBaseFeedback(
    question,
    evaluation.correct,
    `
      <p class="guided-summary">Your draft hit ${hits} of ${evaluation.requirementResults.length} required features and has ${evaluation.wordCount} words.</p>
      <p>${question.explanation}</p>
      <div class="requirement-status-grid">
        <div class="requirement-status ${evaluation.minWordsHit ? "is-hit" : "is-miss"}">
          ${evaluation.minWordsHit
            ? `Word count target reached (${evaluation.wordCount}/${evaluation.minWords}).`
            : `Add more detail. You need at least ${evaluation.minWords} words.`}
        </div>
        ${evaluation.requirementResults
          .map(
            (item) => `
              <div class="requirement-status ${item.hit ? "is-hit" : "is-miss"}">
                ${item.hit ? `Included: ${item.label}.` : `Missing: ${item.label}.`}
              </div>
            `,
          )
          .join("")}
        ${forbiddenHits
          .map(
            (item) => `
              <div class="requirement-status is-miss">
                Remove this tone problem: ${item.label}.
              </div>
            `,
          )
          .join("")}
      </div>
      ${misses === 0 && forbiddenHits.length === 0 && evaluation.minWordsHit
        ? "<p>Your draft includes the required structure. Now compare it with the model answer and refine style if you want.</p>"
        : "<p>Revise the draft by adding the missing features, then compare with the model answer to tighten the wording.</p>"}
    `,
  );
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
    const acceptedAnswers = [question.answer].concat(question.acceptedAnswers || []).map(normalizeInput);
    correct = acceptedAnswers.includes(normalizeInput(input.value));
  } else if (question.type === "rewrite") {
    const input = document.querySelector(`[data-rewrite-question="${question.id}"]`);
    if (!input || !input.value.trim()) {
      return { ready: false, message: "Rewrite the sentence first." };
    }
    selectedValue = input.value;
    lessonState.drafts[question.id] = input.value;
    const acceptedAnswers = [question.answer].concat(question.acceptedAnswers || []).map(normalizeInput);
    correct = acceptedAnswers.includes(normalizeInput(input.value));
  } else if (question.type === "guidedWrite") {
    const input = document.querySelector(`[data-guided-question="${question.id}"]`);
    if (!input || !input.value.trim()) {
      return { ready: false, message: "Write a draft first." };
    }
    selectedValue = input.value;
    lessonState.drafts[question.id] = input.value;
    const guidedEvaluation = evaluateGuidedDraft(question, input.value);
    setResponse(question.id, guidedEvaluation.correct);
    return {
      ready: true,
      html: renderGuidedFeedback(question, guidedEvaluation),
    };
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
    html: renderStandardFeedback(question, correct),
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
    const results = buildSortResults(question, lessonState.drafts[question.id] || {});
    decorateSortCard(question, results);
    feedbackBox.innerHTML = renderSortFeedback(question, results, response.correct);
    return;
  }

  if (question.type === "choice") {
    decorateChoiceCard(question, lessonState.drafts[question.id], response.correct);
    feedbackBox.innerHTML = renderStandardFeedback(question, response.correct);
    return;
  }

  if (question.type === "guidedWrite") {
    feedbackBox.innerHTML = renderGuidedFeedback(question, evaluateGuidedDraft(question, lessonState.drafts[question.id] || ""));
    return;
  }

  feedbackBox.innerHTML = renderStandardFeedback(question, response.correct);
}

function restoreSavedDrafts() {
  allQuestions.forEach((question) => {
    const draft = lessonState.drafts[question.id];
    if (draft == null) {
      return;
    }

    if (question.type === "fill") {
      const input = document.querySelector(`[data-fill-question="${question.id}"]`);
      if (input) {
        input.value = draft;
      }
      return;
    }

    if (question.type === "rewrite") {
      const input = document.querySelector(`[data-rewrite-question="${question.id}"]`);
      if (input) {
        input.value = draft;
      }
      return;
    }

    if (question.type === "guidedWrite") {
      const input = document.querySelector(`[data-guided-question="${question.id}"]`);
      if (input) {
        input.value = draft;
      }
      return;
    }

    if (question.type === "sort") {
      Object.entries(draft).forEach(([itemIndex, selectedValue]) => {
        applySortDraft(question.id, itemIndex, selectedValue);
      });
      return;
    }

    applyChoiceDraft(question.id, draft);
  });
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
    if (fillInput) {
      lessonState.drafts[fillInput.dataset.fillQuestion] = fillInput.value;
      saveLessonState();
      return;
    }

    const rewriteInput = event.target.closest("[data-rewrite-question]");
    if (rewriteInput) {
      lessonState.drafts[rewriteInput.dataset.rewriteQuestion] = rewriteInput.value;
      saveLessonState();
      return;
    }

    const guidedInput = event.target.closest("[data-guided-question]");
    if (guidedInput) {
      lessonState.drafts[guidedInput.dataset.guidedQuestion] = guidedInput.value;
      saveLessonState();
    }
  });

  if (elements.prevStepBtn) {
    elements.prevStepBtn.addEventListener("click", () => setActiveStep(lessonState.activeStep - 1));
  }
  if (elements.nextStepBtn) {
    elements.nextStepBtn.addEventListener("click", () => setActiveStep(lessonState.activeStep + 1));
  }
}

function initWritingCourse() {
  renderPracticeBlocks();
  loadLessonState();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    restoreSavedQuestionState(question);
  });
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
}

initWritingCourse();

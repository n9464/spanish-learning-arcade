const SKILL_LABELS = {
  foundation: "Foundations",
  present: "Present tense",
  irregularPresent: "Irregular present",
  patterns: "Patterns",
  practicalBuilds: "Verb builds",
  past: "Past tenses",
  future: "Future / conditional / commands",
  subjunctive: "Subjunctive",
  contrasts: "Contrasts",
  review: "Mixed review",
};

const ISSUE_LABELS = {
  person: "Person ending",
  tense: "Tense or mood choice",
  irregularity: "Irregular form",
  pattern: "Pattern recognition",
  meaning: "Meaning and usage",
};

const COURSE_STORAGE_KEY = "verb-course-progress-v1";

function buildChart(title, subtitle, rows) {
  return { title, subtitle, rows };
}

const PRESENT_COMER_CHART = buildChart("comer — present indicative", "Regular -er pattern", [
  ["yo", "como"],
  ["tú", "comes"],
  ["él / ella / usted", "come"],
  ["nosotros", "comemos"],
  ["vosotros", "coméis"],
  ["ellos / ustedes", "comen"],
]);

const PRESENT_VIVIR_CHART = buildChart("vivir — present indicative", "Regular -ir pattern", [
  ["yo", "vivo"],
  ["tú", "vives"],
  ["él / ella / usted", "vive"],
  ["nosotros", "vivimos"],
  ["vosotros", "vivís"],
  ["ellos / ustedes", "viven"],
]);

const PRESENT_TENER_CHART = buildChart("tener — present indicative", "yo irregular + e → ie", [
  ["yo", "tengo"],
  ["tú", "tienes"],
  ["él / ella / usted", "tiene"],
  ["nosotros", "tenemos"],
  ["vosotros", "tenéis"],
  ["ellos / ustedes", "tienen"],
]);

const PRESENT_PODER_CHART = buildChart("poder — present indicative", "o → ue stem changer", [
  ["yo", "puedo"],
  ["tú", "puedes"],
  ["él / ella / usted", "puede"],
  ["nosotros", "podemos"],
  ["vosotros", "podéis"],
  ["ellos / ustedes", "pueden"],
]);

const PRESENT_VENIR_CHART = buildChart("venir — present indicative", "vengo + e → ie", [
  ["yo", "vengo"],
  ["tú", "vienes"],
  ["él / ella / usted", "viene"],
  ["nosotros", "venimos"],
  ["vosotros", "venís"],
  ["ellos / ustedes", "vienen"],
]);

const PRESENT_CONOCER_CHART = buildChart("conocer — present indicative", "yo-form irregular only", [
  ["yo", "conozco"],
  ["tú", "conoces"],
  ["él / ella / usted", "conoce"],
  ["nosotros", "conocemos"],
  ["vosotros", "conocéis"],
  ["ellos / ustedes", "conocen"],
]);

const PRESENT_LEVANTARSE_CHART = buildChart("levantarse — present indicative", "Reflexive pattern", [
  ["yo", "me levanto"],
  ["tú", "te levantas"],
  ["él / ella / usted", "se levanta"],
  ["nosotros", "nos levantamos"],
  ["vosotros", "os levantáis"],
  ["ellos / ustedes", "se levantan"],
]);

const GUSTAR_CHART = buildChart("gustar — core pattern", "Match the thing liked", [
  ["singular thing", "me gusta"],
  ["plural things", "me gustan"],
  ["with names", "A Marta le gusta"],
  ["with pronouns", "nos gusta / les gusta"],
]);

const PROGRESSIVE_COMER_CHART = buildChart("comer — present progressive", "estar + gerund", [
  ["yo", "estoy comiendo"],
  ["tú", "estás comiendo"],
  ["él / ella / usted", "está comiendo"],
  ["nosotros", "estamos comiendo"],
  ["vosotros", "estáis comiendo"],
  ["ellos / ustedes", "están comiendo"],
]);

const PRESENT_PERFECT_VER_CHART = buildChart("ver — present perfect", "haber + past participle", [
  ["yo", "he visto"],
  ["tú", "has visto"],
  ["él / ella / usted", "ha visto"],
  ["nosotros", "hemos visto"],
  ["vosotros", "habéis visto"],
  ["ellos / ustedes", "han visto"],
]);

const PRETERITE_HACER_CHART = buildChart("hacer — preterite", "Irregular preterite stem", [
  ["yo", "hice"],
  ["tú", "hiciste"],
  ["él / ella / usted", "hizo"],
  ["nosotros", "hicimos"],
  ["vosotros", "hicisteis"],
  ["ellos / ustedes", "hicieron"],
]);

const IMPERFECT_IR_CHART = buildChart("ir — imperfect", "One of the three imperfect irregulars", [
  ["yo", "iba"],
  ["tú", "ibas"],
  ["él / ella / usted", "iba"],
  ["nosotros", "íbamos"],
  ["vosotros", "ibais"],
  ["ellos / ustedes", "iban"],
]);

const FUTURE_TENER_CHART = buildChart("tener — simple future", "Irregular stem: tendr-", [
  ["yo", "tendré"],
  ["tú", "tendrás"],
  ["él / ella / usted", "tendrá"],
  ["nosotros", "tendremos"],
  ["vosotros", "tendréis"],
  ["ellos / ustedes", "tendrán"],
]);

const CONDITIONAL_PODER_CHART = buildChart("poder — conditional", "Irregular stem: podr-", [
  ["yo", "podría"],
  ["tú", "podrías"],
  ["él / ella / usted", "podría"],
  ["nosotros", "podríamos"],
  ["vosotros", "podríais"],
  ["ellos / ustedes", "podrían"],
]);

const SUBJUNCTIVE_VENIR_CHART = buildChart("venir — present subjunctive", "Take the yo form and switch endings", [
  ["yo", "venga"],
  ["tú", "vengas"],
  ["él / ella / usted", "venga"],
  ["nosotros", "vengamos"],
  ["vosotros", "vengáis"],
  ["ellos / ustedes", "vengan"],
]);

const SUBJUNCTIVE_HABLAR_CHART = buildChart("hablar — present subjunctive", "Regular -ar subjunctive", [
  ["yo", "hable"],
  ["tú", "hables"],
  ["él / ella / usted", "hable"],
  ["nosotros", "hablemos"],
  ["vosotros", "habléis"],
  ["ellos / ustedes", "hablen"],
]);

const FUTURE_DECIR_CHART = buildChart("decir — simple future", "Irregular stem: dir-", [
  ["yo", "diré"],
  ["tú", "dirás"],
  ["él / ella / usted", "dirá"],
  ["nosotros", "diremos"],
  ["vosotros", "diréis"],
  ["ellos / ustedes", "dirán"],
]);

const PRACTICE_BLOCKS = [
  {
    id: "practice-foundations",
    stepIndex: 0,
    title: "Foundation drill",
    intro: "Get comfortable seeing families, stems, endings, and dropped pronouns.",
    questions: [
      {
        id: "f1",
        type: "choice",
        skill: "foundation",
        prompt: 'Which part of the infinitive "hablar" is the family ending?',
        options: ["habl", "ar", "ha"],
        answerIndex: 1,
        rule: "Infinitives and verb families",
        explanation: "The infinitive ending is -ar. The stem is habl-.",
        correctAnswerText: "ar",
        focusTags: ["pattern"],
      },
      {
        id: "f2",
        type: "sort",
        skill: "foundation",
        modeLabel: "Sort by family",
        prompt: "Sort each infinitive into the correct verb family.",
        rule: "-ar / -er / -ir classification",
        categories: [
          { id: "ar", label: "-ar" },
          { id: "er", label: "-er" },
          { id: "ir", label: "-ir" },
        ],
        focusTags: ["pattern"],
        items: [
          { word: "hablar", correct: "ar", rule: "-ar verb", explanation: "hablar ends in -ar." },
          { word: "comer", correct: "er", rule: "-er verb", explanation: "comer ends in -er." },
          { word: "vivir", correct: "ir", rule: "-ir verb", explanation: "vivir ends in -ir." },
          { word: "poner", correct: "er", rule: "-er verb", explanation: "poner belongs to the -er family even though it becomes irregular later." },
        ],
      },
      {
        id: "f3",
        type: "choice",
        skill: "foundation",
        prompt: "What does conjugating a verb mean?",
        options: [
          "Changing the ending to match person and tense.",
          "Adding a pronoun in front of every verb.",
          "Only changing the spelling in the dictionary.",
        ],
        answerIndex: 0,
        rule: "What conjugation is",
        explanation: "Conjugation changes the verb form so it matches who is doing the action and when.",
        correctAnswerText: "Changing the ending to match person and tense.",
        focusTags: ["pattern", "tense"],
      },
      {
        id: "f4",
        type: "choice",
        skill: "foundation",
        prompt: "Why can Spanish often drop subject pronouns?",
        options: [
          "Because pronouns are ungrammatical in Spanish.",
          "Because the verb ending usually already identifies the subject.",
          "Because only formal speech uses pronouns.",
        ],
        answerIndex: 1,
        rule: "Dropped subject pronouns",
        explanation: "Forms like hablo, comes, and vivimos already signal the subject, so pronouns are often optional.",
        correctAnswerText: "Because the verb ending usually already identifies the subject.",
        focusTags: ["meaning", "person"],
      },
    ],
  },
  {
    id: "practice-present-regular",
    stepIndex: 1,
    title: "Regular present tense drill",
    intro: "Train the three regular families until the endings feel automatic.",
    questions: [
      {
        id: "pr1",
        type: "fill",
        skill: "present",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate comer for yo in the present.",
        answer: "como",
        rule: "Regular -er present endings",
        explanation: "The yo ending in the present is -o, so comer becomes como.",
        focusTags: ["person", "tense"],
        fullConjugation: PRESENT_COMER_CHART,
      },
      {
        id: "pr2",
        type: "fill",
        skill: "present",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate vivir for nosotros in the present.",
        answer: "vivimos",
        rule: "Regular -ir present endings",
        explanation: "The nosotros ending for regular -ir verbs is -imos, so vivir becomes vivimos.",
        focusTags: ["person", "tense"],
        fullConjugation: PRESENT_VIVIR_CHART,
      },
      {
        id: "pr3",
        type: "choice",
        skill: "present",
        prompt: "Which row gives the third-person singular present endings for regular -ar, -er, and -ir verbs?",
        options: ["-a / -e / -e", "-o / -e / -i", "-as / -es / -es"],
        answerIndex: 0,
        rule: "Regular present endings",
        explanation: "Él / ella / usted uses -a for -ar verbs and -e for -er / -ir verbs.",
        correctAnswerText: "-a / -e / -e",
        focusTags: ["person", "pattern"],
      },
      {
        id: "pr4",
        type: "choice",
        skill: "present",
        prompt: "Which sentence is the natural present-tense question?",
        options: ["¿Vives aquí?", "¿Tú vivir aquí?", "¿Viviendo aquí?"],
        answerIndex: 0,
        rule: "Questions in the present",
        explanation: "Spanish usually keeps the normal conjugated form and marks the question with punctuation and intonation.",
        correctAnswerText: "¿Vives aquí?",
        focusTags: ["tense", "meaning"],
      },
    ],
  },
  {
    id: "practice-irregular-present",
    stepIndex: 2,
    title: "Irregular present drill",
    intro: "Focus on the irregular forms you will see and use constantly.",
    questions: [
      {
        id: "ip1",
        type: "fill",
        skill: "irregularPresent",
        modeLabel: "Irregular memory drill",
        prompt: "Conjugate tener for yo in the present.",
        answer: "tengo",
        rule: "-go yo form",
        explanation: "Tener is irregular in yo: tengo. It also stem-changes in most other present forms.",
        focusTags: ["irregularity", "person"],
        fullConjugation: PRESENT_TENER_CHART,
      },
      {
        id: "ip2",
        type: "fill",
        skill: "irregularPresent",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate poder for tú in the present.",
        answer: "puedes",
        rule: "o → ue stem change",
        explanation: "Poder changes o → ue in most present forms, so tú is puedes.",
        focusTags: ["irregularity", "pattern"],
        fullConjugation: PRESENT_PODER_CHART,
      },
      {
        id: "ip3",
        type: "choice",
        skill: "irregularPresent",
        prompt: "How is conocer irregular in the present?",
        options: [
          "It is completely irregular in every form.",
          "Only the yo form changes: conozco.",
          "It changes e → ie in all singular forms.",
        ],
        answerIndex: 1,
        rule: "Yo-form irregulars",
        explanation: "Conocer is regular except in the yo form: conozco.",
        correctAnswerText: "Only the yo form changes: conozco.",
        focusTags: ["irregularity", "pattern"],
        fullConjugation: PRESENT_CONOCER_CHART,
      },
      {
        id: "ip4",
        type: "fill",
        skill: "irregularPresent",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate venir for yo in the present.",
        answer: "vengo",
        rule: "-go yo form + stem change family",
        explanation: "Venir has vengo in yo and also changes e → ie in forms like vienes, viene.",
        focusTags: ["irregularity", "person"],
        fullConjugation: PRESENT_VENIR_CHART,
      },
    ],
  },
  {
    id: "practice-patterns",
    stepIndex: 3,
    title: "Patterns drill",
    intro: "Now connect families, reflexives, and special structures.",
    questions: [
      {
        id: "pa1",
        type: "sort",
        skill: "patterns",
        modeLabel: "Sort by stem-change family",
        prompt: "Sort each verb into the correct stem-changing family.",
        rule: "Stem-changing families",
        categories: [
          { id: "eie", label: "e → ie" },
          { id: "oue", label: "o → ue" },
          { id: "ei", label: "e → i" },
        ],
        focusTags: ["pattern"],
        items: [
          { word: "pensar", correct: "eie", rule: "e → ie", explanation: "pienso, piensas, piensa..." },
          { word: "volver", correct: "oue", rule: "o → ue", explanation: "vuelvo, vuelves, vuelve..." },
          { word: "pedir", correct: "ei", rule: "e → i", explanation: "pido, pides, pide..." },
        ],
      },
      {
        id: "pa2",
        type: "fill",
        skill: "patterns",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate dormir for nosotros in the present.",
        answer: "dormimos",
        rule: "No stem change in nosotros / vosotros",
        explanation: "Dormir changes o → ue in most present forms, but the nosotros form returns to the base stem: dormimos.",
        focusTags: ["pattern", "person"],
      },
      {
        id: "pa3",
        type: "choice",
        skill: "patterns",
        prompt: "Which sentence uses gustar correctly?",
        options: [
          "Yo gusto los libros.",
          "Me gustan los libros.",
          "Me gusta los libros.",
        ],
        answerIndex: 1,
        rule: "Gustar-type verbs",
        explanation: "The plural subject libros makes the verb plural: gustan. The person who likes is expressed with me / te / le, etc.",
        correctAnswerText: "Me gustan los libros.",
        focusTags: ["meaning", "pattern"],
        fullConjugation: GUSTAR_CHART,
      },
      {
        id: "pa4",
        type: "fill",
        skill: "patterns",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate levantarse for yo in the present.",
        answer: "me levanto",
        rule: "Reflexive verbs",
        explanation: "Use the reflexive pronoun me and the regular yo form levanto: me levanto.",
        focusTags: ["pattern", "person"],
        fullConjugation: PRESENT_LEVANTARSE_CHART,
      },
    ],
  },
  {
    id: "practice-practical-builds",
    stepIndex: 4,
    title: "Verb builds drill",
    intro: "Practice the practical structures built from infinitives, gerunds, and participles.",
    questions: [
      {
        id: "pb1",
        type: "choice",
        skill: "practicalBuilds",
        prompt: "What is the gerund of hacer?",
        options: ["haciendo", "hacendo", "hacido"],
        answerIndex: 0,
        rule: "Irregular gerund",
        explanation: "Hacer forms the gerund haciendo. It is not built with *hacido*.",
        correctAnswerText: "haciendo",
        focusTags: ["irregularity", "pattern"],
      },
      {
        id: "pb2",
        type: "fill",
        skill: "practicalBuilds",
        modeLabel: "Sentence completion",
        prompt: "Complete the present progressive: nosotros ____ (comer)",
        answer: "estamos comiendo",
        rule: "Present progressive",
        explanation: "Use estar + gerund. For nosotros, the correct form is estamos comiendo.",
        focusTags: ["tense", "pattern"],
        fullConjugation: PROGRESSIVE_COMER_CHART,
      },
      {
        id: "pb3",
        type: "choice",
        skill: "practicalBuilds",
        prompt: "Which formula gives the near future?",
        options: ["haber + participle", "ir + a + infinitive", "estar + gerund"],
        answerIndex: 1,
        rule: "Near future",
        explanation: "The near future is built with ir + a + infinitive: voy a llamar, vamos a salir.",
        correctAnswerText: "ir + a + infinitive",
        focusTags: ["tense"],
      },
      {
        id: "pb4",
        type: "fill",
        skill: "practicalBuilds",
        modeLabel: "Conjugation drill",
        prompt: "Complete the present perfect: yo ____ (ver)",
        answer: "he visto",
        rule: "Present perfect",
        explanation: "Use haber + past participle. The past participle of ver is visto, so the full form is he visto.",
        focusTags: ["tense", "irregularity"],
        fullConjugation: PRESENT_PERFECT_VER_CHART,
      },
    ],
  },
  {
    id: "practice-past-system",
    stepIndex: 5,
    title: "Past tenses drill",
    intro: "Use time clues and story logic to choose between preterite and imperfect.",
    questions: [
      {
        id: "past1",
        type: "choice",
        skill: "past",
        prompt: "Choose the better sentence for one finished event yesterday: Ayer yo ____ al mercado.",
        options: ["iba", "fui", "voy"],
        answerIndex: 1,
        rule: "Preterite for completed events",
        explanation: "Ayer signals a finished past event, so the preterite fui is the best choice here.",
        correctAnswerText: "fui",
        focusTags: ["tense", "meaning"],
      },
      {
        id: "past2",
        type: "choice",
        skill: "past",
        prompt: "Choose the better sentence for a repeated childhood habit: Cuando era niño, yo ____ con mis primos cada verano.",
        options: ["jugaba", "jugué", "jugaré"],
        answerIndex: 0,
        rule: "Imperfect for habit and background",
        explanation: "Repeated background actions in the past normally use the imperfect: jugaba.",
        correctAnswerText: "jugaba",
        focusTags: ["tense", "meaning"],
      },
      {
        id: "past3",
        type: "fill",
        skill: "past",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate hacer for yo in the preterite.",
        answer: "hice",
        rule: "Irregular preterite",
        explanation: "Hacer has an irregular preterite stem. The yo form is hice.",
        focusTags: ["irregularity", "tense"],
        fullConjugation: PRETERITE_HACER_CHART,
      },
      {
        id: "past4",
        type: "fill",
        skill: "past",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate ir for yo in the imperfect.",
        answer: "iba",
        rule: "Imperfect irregulars",
        explanation: "Ir is one of the three imperfect irregulars. The yo form is iba.",
        focusTags: ["irregularity", "tense"],
        fullConjugation: IMPERFECT_IR_CHART,
      },
    ],
  },
  {
    id: "practice-future-commands",
    stepIndex: 6,
    title: "Future, conditional, and commands drill",
    intro: "Use irregular future stems and command logic with confidence.",
    questions: [
      {
        id: "fc1",
        type: "fill",
        skill: "future",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate tener for yo in the simple future.",
        answer: "tendré",
        rule: "Irregular future stem",
        explanation: "Tener changes to the future stem tendr-, so the yo form is tendré.",
        focusTags: ["irregularity", "tense"],
        fullConjugation: FUTURE_TENER_CHART,
      },
      {
        id: "fc2",
        type: "fill",
        skill: "future",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate poder for yo in the conditional.",
        answer: "podría",
        rule: "Conditional with irregular stem",
        explanation: "Poder uses the stem podr- in the conditional: podría.",
        focusTags: ["irregularity", "tense"],
        fullConjugation: CONDITIONAL_PODER_CHART,
      },
      {
        id: "fc3",
        type: "choice",
        skill: "future",
        prompt: "Which is the positive tú command of hacer?",
        options: ["haga", "haz", "haces"],
        answerIndex: 1,
        rule: "Affirmative tú commands",
        explanation: "The affirmative tú command of hacer is haz, one of the short irregular command forms.",
        correctAnswerText: "haz",
        focusTags: ["irregularity", "tense"],
      },
      {
        id: "fc4",
        type: "choice",
        skill: "future",
        prompt: "What is the best explanation of the difference between voy a llamar and llamaré?",
        options: [
          "They mean exactly the same thing in every context.",
          "Voy a llamar usually sounds more planned or immediate, while llamaré is a more neutral future.",
          "Llamaré is always wrong in conversation.",
        ],
        answerIndex: 1,
        rule: "Near future vs simple future",
        explanation: "Both can talk about the future, but ir + a + infinitive often feels more immediate or planned.",
        correctAnswerText:
          "Voy a llamar usually sounds more planned or immediate, while llamaré is a more neutral future.",
        focusTags: ["meaning", "tense"],
      },
    ],
  },
  {
    id: "practice-subjunctive",
    stepIndex: 7,
    title: "Subjunctive basics drill",
    intro: "Use the subjunctive where Spanish leaves the fact zone.",
    questions: [
      {
        id: "sj1",
        type: "choice",
        skill: "subjunctive",
        prompt: "Which trigger normally calls for the present subjunctive?",
        options: ["Sé que", "Quiero que", "Es obvio que"],
        answerIndex: 1,
        rule: "Subjunctive triggers",
        explanation: "Quiero que expresses desire, so it commonly triggers the subjunctive in the next clause.",
        correctAnswerText: "Quiero que",
        focusTags: ["meaning", "tense"],
      },
      {
        id: "sj2",
        type: "fill",
        skill: "subjunctive",
        modeLabel: "Sentence completion",
        prompt: "Complete the sentence: Quiero que tú ____ (venir).",
        answer: "vengas",
        rule: "Present subjunctive of venir",
        explanation: "Build from the yo form vengo, drop -o, and add subjunctive endings: vengas.",
        focusTags: ["irregularity", "tense"],
        fullConjugation: SUBJUNCTIVE_VENIR_CHART,
      },
      {
        id: "sj3",
        type: "choice",
        skill: "subjunctive",
        prompt: "How do you build most present subjunctive forms?",
        options: [
          "Take the infinitive and add future endings.",
          "Start from the yo present form, drop -o, and add opposite-family endings.",
          "Use the preterite stem and add -ra endings.",
        ],
        answerIndex: 1,
        rule: "Present subjunctive formation",
        explanation: "That yo-form method explains both regular and many irregular subjunctive forms.",
        correctAnswerText:
          "Start from the yo present form, drop -o, and add opposite-family endings.",
        focusTags: ["pattern", "tense"],
      },
      {
        id: "sj4",
        type: "fill",
        skill: "subjunctive",
        modeLabel: "Sentence completion",
        prompt: "Complete the sentence: Espero que nosotros ____ (hablar) con ellos hoy.",
        answer: "hablemos",
        rule: "Regular -ar subjunctive",
        explanation: "Hablar becomes hablemos in the nosotros present subjunctive.",
        focusTags: ["person", "tense"],
        fullConjugation: SUBJUNCTIVE_HABLAR_CHART,
      },
    ],
  },
  {
    id: "practice-contrasts",
    stepIndex: 8,
    title: "Contrast drill",
    intro: "Choose the right verb by meaning, not by guesswork.",
    questions: [
      {
        id: "ct1",
        type: "choice",
        skill: "contrasts",
        prompt: "Choose the better verb: La sopa ____ fría hoy.",
        options: ["es", "está", "sea"],
        answerIndex: 1,
        rule: "ser vs estar",
        explanation: "A temporary condition like being cold today uses estar: está fría.",
        correctAnswerText: "está",
        focusTags: ["meaning"],
      },
      {
        id: "ct2",
        type: "choice",
        skill: "contrasts",
        prompt: "Choose the best pair: No ____ a Marta, pero sí ____ dónde vive.",
        options: ["sé / conozco", "conozco / sé", "sé / sé"],
        answerIndex: 1,
        rule: "saber vs conocer",
        explanation: "Conocer is for knowing a person. Saber is for facts or information such as where someone lives.",
        correctAnswerText: "conozco / sé",
        focusTags: ["meaning"],
      },
      {
        id: "ct3",
        type: "choice",
        skill: "contrasts",
        prompt: "If I am at my house and I ask you to come here, which verb fits best?",
        options: ["ir", "venir", "volver"],
        answerIndex: 1,
        rule: "ir vs venir",
        explanation: "Venir points toward the speaker or destination being treated as the speaker's point.",
        correctAnswerText: "venir",
        focusTags: ["meaning"],
      },
      {
        id: "ct4",
        type: "choice",
        skill: "contrasts",
        prompt: "Choose the better preposition in the verb phrase: Gracias ____ ayudarme.",
        options: ["por", "para", "a"],
        answerIndex: 0,
        rule: "por vs para in verb phrases",
        explanation: "Gracias por + infinitive is the normal pattern for thanking someone for doing something.",
        correctAnswerText: "por",
        focusTags: ["meaning"],
      },
    ],
  },
  {
    id: "practice-tense-quiz",
    stepIndex: 9,
    title: "Quiz by tense",
    intro: "Spot the tense from the time clue and the communicative goal.",
    questions: [
      {
        id: "rv1",
        type: "sort",
        skill: "review",
        modeLabel: "Tense comparison",
        prompt: "Sort each time clue into the tense it most strongly points toward.",
        rule: "Time clues and tense choice",
        categories: [
          { id: "preterite", label: "Preterite" },
          { id: "imperfect", label: "Imperfect" },
          { id: "perfect", label: "Present perfect" },
          { id: "future", label: "Future" },
        ],
        focusTags: ["tense", "meaning"],
        items: [
          { word: "ayer", correct: "preterite", rule: "Finished past event", explanation: "ayer strongly points toward a completed past action." },
          { word: "todos los veranos", correct: "imperfect", rule: "Repeated past habit", explanation: "repeated past habits typically use the imperfect." },
          { word: "ya", correct: "perfect", rule: "Completed with present link", explanation: "ya often pairs naturally with the present perfect in this kind of overview review." },
          { word: "mañana", correct: "future", rule: "Future reference", explanation: "mañana points forward in time." },
        ],
      },
      {
        id: "rv2",
        type: "fill",
        skill: "review",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate decir for yo in the simple future.",
        answer: "diré",
        rule: "Irregular future stem",
        explanation: "Decir takes the irregular future stem dir-, so the yo form is diré.",
        focusTags: ["irregularity", "tense"],
        fullConjugation: FUTURE_DECIR_CHART,
      },
    ],
  },
  {
    id: "practice-pattern-quiz",
    stepIndex: 9,
    title: "Quiz by pattern",
    intro: "Check the families that create the most learner errors.",
    questions: [
      {
        id: "rv3",
        type: "choice",
        skill: "review",
        prompt: "Which sentence correctly uses a reflexive verb?",
        options: ["Levanto a las seis.", "Me levanto a las seis.", "Yo me levantar a las seis."],
        answerIndex: 1,
        rule: "Reflexive verbs",
        explanation: "A reflexive verb needs the reflexive pronoun and a conjugated verb: me levanto.",
        correctAnswerText: "Me levanto a las seis.",
        focusTags: ["pattern", "person"],
      },
      {
        id: "rv4",
        type: "choice",
        skill: "review",
        prompt: "Which sentence correctly uses the subjunctive after a wish?",
        options: ["Quiero que vienes temprano.", "Quiero que vengas temprano.", "Quiero que venir temprano."],
        answerIndex: 1,
        rule: "Subjunctive after desire",
        explanation: "After quiero que, the next verb goes in the subjunctive: vengas.",
        correctAnswerText: "Quiero que vengas temprano.",
        focusTags: ["tense", "meaning"],
      },
    ],
  },
  {
    id: "practice-final-review",
    stepIndex: 9,
    title: "Mixed cumulative review",
    intro: "Mix tense, person, irregularity, and meaning the way real Spanish does.",
    questions: [
      {
        id: "rv5",
        type: "choice",
        skill: "review",
        prompt: "Choose the best sentence for an immediate plan: " +
          "I am going to leave early.",
        options: ["Saldré temprano.", "Voy a salir temprano.", "Salía temprano."],
        answerIndex: 1,
        rule: "Near future for immediate plans",
        explanation: "Voy a + infinitive is the most practical choice for an immediate or already-formed plan.",
        correctAnswerText: "Voy a salir temprano.",
        focusTags: ["tense", "meaning"],
      },
      {
        id: "rv6",
        type: "fill",
        skill: "review",
        modeLabel: "Sentence completion",
        prompt: "Complete the sentence: Es importante que ella ____ (llegar) temprano.",
        answer: "llegue",
        rule: "Subjunctive after importance",
        explanation: "Es importante que triggers the subjunctive. Llegar becomes llegue.",
        focusTags: ["tense", "pattern"],
      },
      {
        id: "rv7",
        type: "choice",
        skill: "review",
        prompt: "Which sentence shows the correct preterite vs imperfect contrast?",
        options: [
          "Cuando era niño, jugué al fútbol todos los días.",
          "Cuando era niño, jugaba al fútbol todos los días.",
          "Cuando era niño, jugaré al fútbol todos los días.",
        ],
        answerIndex: 1,
        rule: "Imperfect for habitual past",
        explanation: "A repeated background habit in childhood uses the imperfect: jugaba.",
        correctAnswerText: "Cuando era niño, jugaba al fútbol todos los días.",
        focusTags: ["tense", "meaning"],
      },
      {
        id: "rv8",
        type: "choice",
        skill: "review",
        prompt: "Which sentence correctly uses ser vs estar and saber vs conocer together?",
        options: [
          "Está médica y sabe a Madrid.",
          "Es médica y conoce Madrid.",
          "Es médica y sabe Madrid.",
        ],
        answerIndex: 1,
        rule: "High-frequency contrasts",
        explanation: "Profession takes ser, and familiarity with a place takes conocer.",
        correctAnswerText: "Es médica y conoce Madrid.",
        focusTags: ["meaning"],
      },
      {
        id: "rv9",
        type: "fill",
        skill: "review",
        modeLabel: "Conjugation drill",
        prompt: "Conjugate quedarse for nosotros in the present.",
        answer: "nos quedamos",
        rule: "Reflexive present forms",
        explanation: "Use the reflexive pronoun nos plus the nosotros form quedamos: nos quedamos.",
        focusTags: ["pattern", "person"],
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
  steps: [...document.querySelectorAll(".verb-step")],
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

        if ((question.type === "choice") && draft != null) {
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
    return "Fill the form";
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
          placeholder="Type the correct form"
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
        <span>${SKILL_LABELS[question.skill]}</span>
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

function renderConjugationChart(chart) {
  if (!chart) {
    return "";
  }

  return `
    <div class="mini-conjugation">
      <h6>${chart.title}</h6>
      ${chart.subtitle ? `<p>${chart.subtitle}</p>` : ""}
      <div class="mini-conjugation-grid">
        ${chart.rows
          .map(
            ([person, form]) => `
              <div class="mini-conjugation-row">
                <span>${person}</span>
                <strong>${form}</strong>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
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
      ${renderConjugationChart(question.fullConjugation)}
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

function initVerbCourse() {
  renderPracticeBlocks();
  loadLessonState();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    restoreSavedQuestionState(question);
  });
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
}

initVerbCourse();

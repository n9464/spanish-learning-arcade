const SKILL_LABELS = {
  foundation: "Pronoun map",
  direct: "Direct objects",
  indirect: "Indirect objects",
  placement: "Placement flow",
  reflexive: "Reflexives",
  relative: "Relatives",
  demonstrative: "Demonstratives",
  doubleObject: "Double objects",
  review: "Mixed review",
};

const ISSUE_LABELS = {
  foundation: "Subject or base role",
  subject: "Subject pronoun",
  direct: "Direct object",
  indirect: "Indirect object",
  placement: "Placement rule",
  reflexive: "Reflexive pronoun",
  relative: "Relative pronoun",
  demonstrative: "Demonstrative pronoun",
  doubleObject: "Double object chain",
  redundancy: "Redundancy error",
  review: "Mixed review",
};

const COURSE_STORAGE_KEY = "pronoun-course-progress-v1";

function sentenceModel(parts, translation) {
  return { parts, translation };
}

const PRACTICE_BLOCKS = [
  {
    id: "practice-foundation",
    stepIndex: 0,
    title: "Pronoun-map drill",
    intro: "Start by identifying what role the pronoun is playing before you worry about the form.",
    questions: [
      {
        id: "fd1",
        type: "choice",
        skill: "foundation",
        prompt: "What is the most important first question before choosing a Spanish pronoun?",
        options: [
          "What role does it play in the sentence?",
          "How many letters does the English word have?",
          "Can I always translate it word for word from English?",
        ],
        answerIndex: 0,
        rule: "Choose by sentence role",
        explanation:
          "Pronouns behave differently depending on whether they are subjects, direct objects, indirect objects, reflexives, or clause connectors.",
        correctAnswerText: "What role does it play in the sentence?",
        focusTags: ["foundation"],
      },
      {
        id: "fd2",
        type: "choice",
        skill: "foundation",
        prompt: "Why does Spanish often omit subject pronouns like yo or nosotros?",
        options: [
          "Because pronouns are incorrect in Spanish.",
          "Because the verb form usually already shows the subject.",
          "Because only commands use pronouns.",
        ],
        answerIndex: 1,
        rule: "Subject omission",
        explanation:
          "Forms like hablo, comemos, and viven already signal the subject, so Spanish often leaves the subject pronoun out unless it adds emphasis or contrast.",
        correctAnswerText: "Because the verb form usually already shows the subject.",
        focusTags: ["foundation", "subject", "redundancy"],
      },
      {
        id: "fd3",
        type: "fill",
        skill: "foundation",
        modeLabel: "Sentence rewrite",
        prompt: "Rewrite more naturally without unnecessary subject pronouns: Yo estudio español y yo trabajo mucho.",
        answer: "Estudio español y trabajo mucho.",
        acceptedAnswers: ["estudio español y trabajo mucho", "estudio español y trabajo mucho."],
        rule: "Avoid redundant subject pronouns",
        explanation:
          "Both verbs already show the first-person subject, so repeating yo makes the sentence heavier than it needs to be.",
        correctAnswerText: "Estudio español y trabajo mucho.",
        focusTags: ["subject", "redundancy"],
      },
      {
        id: "fd4",
        type: "sort",
        skill: "foundation",
        modeLabel: "Role sort",
        prompt: "Sort each label by the sentence role it names.",
        rule: "Main pronoun roles",
        categories: [
          { id: "subject", label: "Subject" },
          { id: "object", label: "Object" },
          { id: "linker", label: "Link / reference" },
        ],
        focusTags: ["foundation"],
        items: [
          { word: "doer of the action", correct: "subject", explanation: "The subject performs the action, even if Spanish later omits the pronoun." },
          { word: "thing directly replaced", correct: "object", explanation: "Direct and indirect object pronouns replace nouns affected by the verb." },
          { word: "word that links a noun to another clause", correct: "linker", explanation: "Relative pronouns like que or quien connect a noun to extra information." },
        ],
      },
    ],
  },
  {
    id: "practice-direct",
    stepIndex: 1,
    title: "Direct-object drill",
    intro: "Replace the noun that is directly affected and move the sentence to a clean pronoun version.",
    questions: [
      {
        id: "dr1",
        type: "choice",
        skill: "direct",
        prompt: "Which direct object pronoun replaces 'la carta'?",
        options: ["lo", "la", "le"],
        answerIndex: 1,
        rule: "Direct object gender and number",
        explanation:
          "La carta is feminine singular, so the direct object pronoun is la.",
        correctAnswerText: "la",
        focusTags: ["direct"],
      },
      {
        id: "dr2",
        type: "fill",
        skill: "direct",
        modeLabel: "Substitution rewrite",
        prompt: "Replace the direct object with a pronoun: Leo las revistas.",
        answer: "Las leo.",
        acceptedAnswers: ["las leo", "las leo."],
        rule: "Direct object substitution",
        explanation:
          "Las replaces las revistas, and the pronoun normally goes before the conjugated verb.",
        correctAnswerText: "Las leo.",
        focusTags: ["direct", "placement"],
        sentenceModel: sentenceModel(
          [
            { text: "Las", role: "pronoun" },
            { text: "leo", role: "verb" },
          ],
          "I read them.",
        ),
      },
      {
        id: "dr3",
        type: "choice",
        skill: "direct",
        prompt: "Which sentence is the correct replacement form?",
        options: ["La veo la película.", "La veo.", "Veo la la."],
        answerIndex: 1,
        rule: "Do not keep the replaced noun in the neutral pattern",
        explanation:
          "Once la replaces la película, the full noun normally disappears unless you are doing a marked topicalized structure.",
        correctAnswerText: "La veo.",
        focusTags: ["direct", "redundancy"],
      },
      {
        id: "dr4",
        type: "sort",
        skill: "direct",
        modeLabel: "Sort by pronoun",
        prompt: "Sort each noun phrase under the direct object pronoun that replaces it.",
        rule: "Direct object agreement",
        categories: [
          { id: "lo", label: "lo" },
          { id: "la", label: "la" },
          { id: "los", label: "los" },
          { id: "las", label: "las" },
        ],
        focusTags: ["direct"],
        items: [
          { word: "el problema", correct: "lo", explanation: "Masculine singular direct object -> lo." },
          { word: "la mesa", correct: "la", explanation: "Feminine singular direct object -> la." },
          { word: "los platos", correct: "los", explanation: "Masculine plural direct object -> los." },
          { word: "las flores", correct: "las", explanation: "Feminine plural direct object -> las." },
        ],
      },
    ],
  },
  {
    id: "practice-indirect",
    stepIndex: 2,
    title: "Indirect-object drill",
    intro: "Separate the person receiving something from the thing being given or shown.",
    questions: [
      {
        id: "in1",
        type: "choice",
        skill: "indirect",
        prompt: "In 'Doy el libro a Ana', which part becomes the indirect object pronoun?",
        options: ["el libro", "a Ana", "doy"],
        answerIndex: 1,
        rule: "Identify the recipient",
        explanation:
          "Ana is the receiver of the book, so a Ana is the indirect object and can be replaced by le.",
        correctAnswerText: "a Ana",
        focusTags: ["indirect"],
      },
      {
        id: "in2",
        type: "fill",
        skill: "indirect",
        modeLabel: "Substitution rewrite",
        prompt: "Replace the indirect object with a pronoun: Escribo a mis padres.",
        answer: "Les escribo.",
        acceptedAnswers: ["les escribo", "les escribo."],
        rule: "Indirect object substitution",
        explanation:
          "Mis padres is the people receiving the action of writing, so it becomes les.",
        correctAnswerText: "Les escribo.",
        focusTags: ["indirect", "placement"],
        sentenceModel: sentenceModel(
          [
            { text: "Les", role: "pronoun" },
            { text: "escribo", role: "verb" },
          ],
          "I write to them.",
        ),
      },
      {
        id: "in3",
        type: "choice",
        skill: "indirect",
        prompt: "Which pronoun replaces 'a Juan' in 'Cuento la verdad a Juan'?",
        options: ["lo", "le", "la"],
        answerIndex: 1,
        rule: "Indirect object pronouns answer to whom?",
        explanation:
          "Juan is the person receiving the information, so the correct indirect object pronoun is le.",
        correctAnswerText: "le",
        focusTags: ["indirect"],
      },
      {
        id: "in4",
        type: "choice",
        skill: "indirect",
        prompt: "Which sentence correctly keeps the direct object but replaces the indirect object?",
        options: ["Le mando una foto.", "Lo mando una foto.", "La mando a él una foto."],
        answerIndex: 0,
        rule: "Indirect object only",
        explanation:
          "The thing sent, una foto, stays as the direct object. The recipient is replaced by le.",
        correctAnswerText: "Le mando una foto.",
        focusTags: ["indirect", "redundancy"],
      },
    ],
  },
  {
    id: "practice-placement",
    stepIndex: 3,
    title: "Placement-flow drill",
    intro: "Use the verb form to decide placement instead of guessing by sound.",
    questions: [
      {
        id: "pl1",
        type: "choice",
        skill: "placement",
        prompt: "Where does the pronoun normally go with a conjugated verb in a statement?",
        options: ["Before the verb", "After the verb", "At the very end of the sentence"],
        answerIndex: 0,
        rule: "Pronouns before conjugated verbs",
        explanation:
          "With normal conjugated verbs, pronouns come before the verb: lo veo, me llamo, les escribo.",
        correctAnswerText: "Before the verb",
        focusTags: ["placement"],
      },
      {
        id: "pl2",
        type: "choice",
        skill: "placement",
        prompt: "Which pair is grammatical with an infinitive?",
        options: ["Lo quiero ver / Quiero verlo", "Quiero lo ver / Quiero verlo", "Lo verlo quiero / Quiero ver lo"],
        answerIndex: 0,
        rule: "Infinitive placement options",
        explanation:
          "With an infinitive, the pronoun can go before the first verb or attach to the infinitive: lo quiero ver / quiero verlo.",
        correctAnswerText: "Lo quiero ver / Quiero verlo",
        focusTags: ["placement"],
      },
      {
        id: "pl3",
        type: "fill",
        skill: "placement",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: Quiero lo comprar.",
        answer: "Lo quiero comprar.",
        acceptedAnswers: ["quiero comprarlo", "lo quiero comprar", "quiero comprarlo.", "lo quiero comprar."],
        rule: "Pronouns cannot sit between querer and the infinitive that way",
        explanation:
          "Quiero lo comprar is not grammatical. Move the pronoun before the first verb or attach it to the infinitive.",
        correctAnswerText: "Lo quiero comprar. / Quiero comprarlo.",
        focusTags: ["placement", "redundancy"],
      },
      {
        id: "pl4",
        type: "sort",
        skill: "placement",
        modeLabel: "Sort by placement",
        prompt: "Sort each sentence by whether the pronoun comes before the verb or attached to it.",
        rule: "Before vs attached placement",
        categories: [
          { id: "before", label: "Before" },
          { id: "attached", label: "Attached" },
        ],
        focusTags: ["placement"],
        items: [
          { word: "Lo veo.", correct: "before", explanation: "The direct object pronoun goes before the conjugated verb veo." },
          { word: "Quiero verlo.", correct: "attached", explanation: "The pronoun is attached to the infinitive verlo." },
          { word: "No me lo digas.", correct: "before", explanation: "Negative commands place pronouns before the verb." },
          { word: "Dímelo.", correct: "attached", explanation: "Affirmative commands attach the pronouns." },
        ],
      },
      {
        id: "pl5",
        type: "choice",
        skill: "placement",
        prompt: "Which sentence correctly places the pronouns in a negative command?",
        options: ["No dímelo.", "No me lo digas.", "Dime no lo."],
        answerIndex: 1,
        rule: "Negative commands take pronouns before the verb",
        explanation:
          "A negative command keeps the pronouns before the verb: no me lo digas.",
        correctAnswerText: "No me lo digas.",
        focusTags: ["placement", "doubleObject"],
      },
    ],
  },
  {
    id: "practice-reflexive",
    stepIndex: 4,
    title: "Reflexive drill",
    intro: "Match the pronoun to the subject and keep the reflexive meaning separate from ordinary object use.",
    questions: [
      {
        id: "rf1",
        type: "choice",
        skill: "reflexive",
        prompt: "Which reflexive pronoun matches nosotros?",
        options: ["me", "nos", "se"],
        answerIndex: 1,
        rule: "Reflexive pronoun agreement",
        explanation:
          "Nosotros pairs with nos in reflexive forms: nos levantamos, nos sentamos.",
        correctAnswerText: "nos",
        focusTags: ["reflexive"],
      },
      {
        id: "rf2",
        type: "fill",
        skill: "reflexive",
        modeLabel: "Sentence rewrite",
        prompt: "Rewrite with the reflexive meaning 'I get up at six': Yo levanto a las seis.",
        answer: "Me levanto a las seis.",
        acceptedAnswers: ["me levanto a las seis", "me levanto a las seis."],
        rule: "Reflexive verbs need the matching pronoun",
        explanation:
          "To express that the subject gets up itself, Spanish uses the reflexive pronoun me: me levanto.",
        correctAnswerText: "Me levanto a las seis.",
        focusTags: ["reflexive", "placement"],
        sentenceModel: sentenceModel(
          [
            { text: "Me", role: "pronoun" },
            { text: "levanto", role: "verb" },
            { text: "a las seis", role: "object" },
          ],
          "I get up at six.",
        ),
      },
      {
        id: "rf3",
        type: "choice",
        skill: "reflexive",
        prompt: "What is the key difference between 'lavo el coche' and 'me lavo'?",
        options: [
          "The second sentence is reflexive; the subject acts on itself.",
          "The second sentence is in the future tense.",
          "The second sentence has no subject.",
        ],
        answerIndex: 0,
        rule: "Reflexive meaning",
        explanation:
          "Lavo el coche affects something else. Me lavo means I wash myself, so the action turns back on the subject.",
        correctAnswerText: "The second sentence is reflexive; the subject acts on itself.",
        focusTags: ["reflexive"],
      },
      {
        id: "rf4",
        type: "choice",
        skill: "reflexive",
        prompt: "Which sentence is correct for 'Ana goes to bed early'?",
        options: ["Ana acuesta temprano.", "Ana se acuesta temprano.", "Ana la acuesta temprano."],
        answerIndex: 1,
        rule: "Reflexive verb form",
        explanation:
          "Acostarse is reflexive when the subject puts itself to bed, so the sentence needs se.",
        correctAnswerText: "Ana se acuesta temprano.",
        focusTags: ["reflexive"],
      },
    ],
  },
  {
    id: "practice-relative",
    stepIndex: 5,
    title: "Relative-pronoun drill",
    intro: "Use pronouns to connect clauses smoothly instead of repeating the noun every time.",
    questions: [
      {
        id: "rl1",
        type: "choice",
        skill: "relative",
        prompt: "Which relative pronoun is the most general and common linker?",
        options: ["que", "cuyo", "aquel"],
        answerIndex: 0,
        rule: "Que as the basic relative pronoun",
        explanation:
          "Que is the most common relative pronoun and works in a very wide range of relative clauses.",
        correctAnswerText: "que",
        focusTags: ["relative"],
      },
      {
        id: "rl2",
        type: "choice",
        skill: "relative",
        prompt: "Which option fits best after a preposition with a person? La mujer con ___ hablo.",
        options: ["quien", "lo", "eso"],
        answerIndex: 0,
        rule: "Quien after prepositions for people",
        explanation:
          "After a preposition, quien is a natural relative-pronoun choice for people: con quien hablo.",
        correctAnswerText: "quien",
        focusTags: ["relative"],
      },
      {
        id: "rl3",
        type: "choice",
        skill: "relative",
        prompt: "What does 'cuyo' express?",
        options: ["location", "possession: whose", "demonstration: this / that"],
        answerIndex: 1,
        rule: "Cuyo expresses possession",
        explanation:
          "Cuyo means whose and agrees with the possessed noun, not with the possessor.",
        correctAnswerText: "possession: whose",
        focusTags: ["relative"],
      },
      {
        id: "rl4",
        type: "fill",
        skill: "relative",
        modeLabel: "Sentence combine",
        prompt: "Combine the two ideas with a relative pronoun: Tengo un amigo. Ese amigo vive en Chile.",
        answer: "Tengo un amigo que vive en Chile.",
        acceptedAnswers: ["tengo un amigo que vive en chile", "tengo un amigo que vive en chile."],
        rule: "Relative clauses with que",
        explanation:
          "Que links the second clause back to un amigo so the noun does not need to be repeated.",
        correctAnswerText: "Tengo un amigo que vive en Chile.",
        focusTags: ["relative", "redundancy"],
        sentenceModel: sentenceModel(
          [
            { text: "un amigo", role: "object" },
            { text: "que", role: "link" },
            { text: "vive", role: "verb" },
            { text: "en Chile", role: "object" },
          ],
          "a friend who lives in Chile",
        ),
      },
    ],
  },
  {
    id: "practice-demonstrative",
    stepIndex: 6,
    title: "Demonstrative-pronoun drill",
    intro: "Point clearly to near, mid, and far items and practice switching from noun phrase to stand-alone pronoun.",
    questions: [
      {
        id: "dm1",
        type: "choice",
        skill: "demonstrative",
        prompt: "Which group points to something near the speaker?",
        options: ["este / esta / esto", "ese / esa / eso", "aquel / aquella / aquello"],
        answerIndex: 0,
        rule: "Near demonstratives",
        explanation:
          "Este, esta, and esto point to something close to the speaker.",
        correctAnswerText: "este / esta / esto",
        focusTags: ["demonstrative"],
      },
      {
        id: "dm2",
        type: "choice",
        skill: "demonstrative",
        prompt: "Which pronoun best fits something far away from both speaker and listener?",
        options: ["ese", "aquel", "este"],
        answerIndex: 1,
        rule: "Far demonstratives",
        explanation:
          "Aquel and its related forms point to something farther away.",
        correctAnswerText: "aquel",
        focusTags: ["demonstrative"],
      },
      {
        id: "dm3",
        type: "fill",
        skill: "demonstrative",
        modeLabel: "Substitution rewrite",
        prompt: "Replace the repeated noun phrase with a pronoun: Quiero este libro, no ese libro.",
        answer: "Quiero este, no ese.",
        acceptedAnswers: ["quiero este, no ese.", "quiero este, no ese", "quiero este no ese"],
        rule: "Use demonstratives as stand-alone pronouns",
        explanation:
          "Once the noun is understood, the demonstrative can stand alone: este, ese, aquel.",
        correctAnswerText: "Quiero este, no ese.",
        focusTags: ["demonstrative", "redundancy"],
        sentenceModel: sentenceModel(
          [
            { text: "Quiero", role: "verb" },
            { text: "este", role: "pronoun" },
            { text: "no", role: "link" },
            { text: "ese", role: "pronoun" },
          ],
          "I want this one, not that one.",
        ),
      },
      {
        id: "dm4",
        type: "choice",
        skill: "demonstrative",
        prompt: "Which statement matches modern standard spelling?",
        options: [
          "Pronoun forms like éste usually need accent marks.",
          "Modern standard Spanish normally writes demonstrative pronouns without accent marks.",
          "Demonstrative pronouns never stand alone.",
        ],
        answerIndex: 1,
        rule: "Modern orthography",
        explanation:
          "Current standard Spanish normally writes these pronouns without accent marks: este, ese, aquel.",
        correctAnswerText: "Modern standard Spanish normally writes demonstrative pronouns without accent marks.",
        focusTags: ["demonstrative"],
      },
    ],
  },
  {
    id: "practice-double-object",
    stepIndex: 7,
    title: "Double-object drill",
    intro: "Now combine the recipient and the thing given without breaking the pronoun chain.",
    questions: [
      {
        id: "db1",
        type: "choice",
        skill: "doubleObject",
        prompt: "What happens to le or les before lo, la, los, or las?",
        options: [
          "Nothing: le lo stays le lo.",
          "It changes to se.",
          "The direct object pronoun disappears.",
        ],
        answerIndex: 1,
        rule: "Le / les becomes se",
        explanation:
          "Spanish avoids combinations like le lo and les la, so le and les become se before direct object pronouns.",
        correctAnswerText: "It changes to se.",
        focusTags: ["doubleObject"],
      },
      {
        id: "db2",
        type: "fill",
        skill: "doubleObject",
        modeLabel: "Transformation rewrite",
        prompt: "Replace both objects with pronouns: Doy el libro a Ana.",
        answer: "Se lo doy.",
        acceptedAnswers: ["se lo doy", "se lo doy."],
        rule: "Indirect + direct pronoun chain",
        explanation:
          "Ana first becomes le, but le changes to se before lo. The chain becomes se lo doy.",
        correctAnswerText: "Se lo doy.",
        focusTags: ["doubleObject", "placement"],
        sentenceModel: sentenceModel(
          [
            { text: "Se", role: "pronoun" },
            { text: "lo", role: "pronoun" },
            { text: "doy", role: "verb" },
          ],
          "I give it to her / him / you.",
        ),
      },
      {
        id: "db3",
        type: "choice",
        skill: "doubleObject",
        prompt: "Which sentence is correct?",
        options: ["Le lo doy.", "Se lo doy.", "Lo se doy."],
        answerIndex: 1,
        rule: "Correct double-object order",
        explanation:
          "The valid order is indirect-object pronoun, then direct-object pronoun, then the verb. With le/les + lo/la/los/las, the first one becomes se.",
        correctAnswerText: "Se lo doy.",
        focusTags: ["doubleObject", "redundancy"],
      },
      {
        id: "db4",
        type: "choice",
        skill: "doubleObject",
        prompt: "Which sentence correctly keeps the noun recipient while also using the pronoun?",
        options: ["Se lo doy a Ana.", "Le lo doy a Ana.", "Lo doy Ana."],
        answerIndex: 0,
        rule: "Double-object pronouns can still keep the recipient phrase",
        explanation:
          "The pronoun chain remains se lo, and the full recipient phrase a Ana can still appear for clarity or emphasis.",
        correctAnswerText: "Se lo doy a Ana.",
        focusTags: ["doubleObject", "indirect"],
      },
    ],
  },
  {
    id: "practice-mixed-review",
    stepIndex: 7,
    title: "Mixed review",
    intro: "Mix substitution, placement, and redundancy control the way they appear in real Spanish.",
    questions: [
      {
        id: "rv1",
        type: "fill",
        skill: "review",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: Yo la veo la película.",
        answer: "La veo.",
        acceptedAnswers: ["la veo", "la veo."],
        rule: "Do not keep the replaced direct object in the neutral sentence",
        explanation:
          "Once la replaces la película, the repeated noun is unnecessary and ungrammatical in the neutral pattern.",
        correctAnswerText: "La veo.",
        focusTags: ["review", "direct", "redundancy"],
      },
      {
        id: "rv2",
        type: "fill",
        skill: "review",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: Doy le las llaves.",
        answer: "Le doy las llaves.",
        acceptedAnswers: ["le doy las llaves", "le doy las llaves."],
        rule: "Indirect object pronouns go before a conjugated verb",
        explanation:
          "The indirect object pronoun le must come before the conjugated verb doy.",
        correctAnswerText: "Le doy las llaves.",
        focusTags: ["review", "indirect", "placement"],
      },
      {
        id: "rv3",
        type: "choice",
        skill: "review",
        prompt: "Which sentence correctly uses a relative pronoun after a preposition with a person?",
        options: ["La profesora con quien estudio", "La profesora que con estudio", "La profesora la cual estudio con"],
        answerIndex: 0,
        rule: "Preposition + relative pronoun with people",
        explanation:
          "Con quien is a natural relative structure after a preposition when the reference is a person.",
        correctAnswerText: "La profesora con quien estudio",
        focusTags: ["review", "relative"],
      },
      {
        id: "rv4",
        type: "choice",
        skill: "review",
        prompt: "Which command is correct?",
        options: ["No dímelo.", "Dímelo.", "Me lo no digas."],
        answerIndex: 1,
        rule: "Affirmative command placement",
        explanation:
          "An affirmative command attaches the pronouns: dímelo. The negative version would be no me lo digas.",
        correctAnswerText: "Dímelo.",
        focusTags: ["review", "placement", "doubleObject"],
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
  steps: [...document.querySelectorAll(".pronoun-step")],
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
    return "Sentence rewrite";
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
          placeholder="Type the corrected sentence or pronoun form"
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
      <p>${correct ? "You matched the categories correctly." : "Check what role each form or sentence is playing before you choose the category."}</p>
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

function initPronounCourse() {
  renderPracticeBlocks();
  loadLessonState();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    restoreSavedQuestionState(question);
  });
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
}

initPronounCourse();

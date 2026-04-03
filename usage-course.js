const SKILL_LABELS = {
  foundations: "Foundations",
  idiom: "Idioms",
  natural: "Natural phrasing",
  region: "Regional basics",
  register: "Formal vs informal",
  speech: "Spoken fillers",
  conversation: "Conversation use",
  review: "Final review",
};

const ISSUE_LABELS = {
  natural: "Natural",
  literal: "Literal",
  idiom: "Idiom",
  region: "Region",
  register: "Register",
  filler: "Filler",
  connector: "Connector",
  conversation: "Conversation",
  review: "Review",
};

const COURSE_STORAGE_KEY = "usage-course-progress-v1";

const PRACTICE_BLOCKS = [
  {
    id: "practice-foundations",
    stepIndex: 0,
    title: "Natural first impressions",
    intro: "Start by noticing that correct grammar is not always the same thing as natural everyday Spanish.",
    questions: [
      {
        id: "us1",
        type: "choice",
        skill: "foundations",
        prompt: "Someone says Gracias por venir. Which answer sounds the most natural in everyday Spanish?",
        options: ["De nada.", "No is from nothing.", "I am agreed with that."],
        answerIndex: 0,
        rule: "High-frequency situations often use short fixed chunks",
        explanation:
          "De nada is a normal ready-made response to thanks. Real speech usually uses compact chunks instead of literal translated logic.",
        correctAnswerText: "De nada.",
        focusTags: ["natural", "conversation"],
      },
      {
        id: "us2",
        type: "choice",
        skill: "foundations",
        prompt: "Which option sounds more natural as a quick way to agree in conversation?",
        options: ["Si, claro.", "Estoy de acuerdo con eso.", "Eso is correct for me."],
        answerIndex: 0,
        rule: "Spoken Spanish often prefers shorter agreement chunks",
        explanation:
          "Estoy de acuerdo con eso can be grammatical, but in fast everyday conversation a shorter chunk like Si, claro is usually more natural.",
        correctAnswerText: "Si, claro.",
        focusTags: ["natural", "literal"],
      },
      {
        id: "us3",
        type: "sort",
        skill: "foundations",
        modeLabel: "Natural or too literal",
        prompt: "Sort each sentence by whether it sounds like natural Spanish or a literal English-style translation.",
        rule: "Naturalness depends on the chunk, not on word-by-word equivalence",
        categories: [
          { id: "natural", label: "Natural Spanish" },
          { id: "literal", label: "Too literal" },
        ],
        focusTags: ["natural", "literal"],
        items: [
          {
            word: "Tengo hambre.",
            correct: "natural",
            explanation: "This is the standard natural way to say you are hungry.",
          },
          {
            word: "Soy 20 años.",
            correct: "literal",
            explanation: "Spanish says Tengo 20 años, not Soy 20 años.",
          },
          {
            word: "Hace frío.",
            correct: "natural",
            explanation: "This is the normal weather expression in Spanish.",
          },
          {
            word: "Estoy de acuerdo con eso en todos los momentos.",
            correct: "literal",
            explanation: "This feels overbuilt and translation-heavy for casual speech.",
          },
        ],
      },
      {
        id: "us4",
        type: "rewrite",
        skill: "foundations",
        modeLabel: "Natural rewrite",
        prompt: "Rewrite the sentence so it sounds natural in Spanish.",
        originalSentence: "Soy 20 años.",
        answer: "Tengo 20 años.",
        acceptedAnswers: ["tengo veinte años", "tengo veinte anos"],
        rule: "Spanish uses tener to express age",
        explanation:
          "English says I am 20, but Spanish uses tener for age: Tengo 20 años.",
        correctAnswerText: "Tengo 20 años.",
        modelAnswer: "Tengo 20 años.",
        focusTags: ["natural", "literal"],
      },
    ],
  },
  {
    id: "practice-idioms",
    stepIndex: 1,
    title: "Chunked idioms",
    intro: "Idioms work best when you learn them as whole answers in real situations.",
    questions: [
      {
        id: "us5",
        type: "choice",
        skill: "idiom",
        prompt: "What does Me da igual usually mean in conversation?",
        options: ["It is all the same to me / I do not mind.", "It gives me the same object.", "I agree completely."],
        answerIndex: 0,
        rule: "Idioms should be learned as meaning chunks",
        explanation:
          "Me da igual is not interpreted word by word in normal conversation. It means that the choice does not matter to the speaker.",
        correctAnswerText: "It is all the same to me / I do not mind.",
        focusTags: ["idiom", "natural"],
      },
      {
        id: "us6",
        type: "choice",
        skill: "idiom",
        prompt: "Your friend says No puedo ir al concierto al final. Which reply sounds most natural?",
        options: ["Qué pena.", "What sadness.", "I have agreement with your problem."],
        answerIndex: 0,
        rule: "Some emotional reactions are fixed Spanish chunks",
        explanation:
          "Qué pena is a normal short reaction for bad news or disappointment. The literal English-shaped options do not sound natural.",
        correctAnswerText: "Qué pena.",
        focusTags: ["idiom", "conversation"],
      },
      {
        id: "us7",
        type: "rewrite",
        skill: "idiom",
        modeLabel: "Idiomatic rewrite",
        prompt: "Rewrite the sentence with a stronger natural Spanish refusal.",
        originalSentence: "No way.",
        answer: "Ni hablar.",
        acceptedAnswers: ["de ninguna manera"],
        rule: "Ni hablar is a common chunk for firm refusal",
        explanation:
          "Ni hablar is a strong conversational way to reject an idea. It sounds much more natural than translating no way word by word.",
        correctAnswerText: "Ni hablar.",
        modelAnswer: "Ni hablar.",
        focusTags: ["idiom", "natural"],
      },
      {
        id: "us8",
        type: "rewrite",
        skill: "idiom",
        modeLabel: "Idiomatic rewrite",
        prompt: "Rewrite the idea with a natural Spanish chunk.",
        originalSentence: "I am running late.",
        answer: "Se me hace tarde.",
        acceptedAnswers: ["voy tarde"],
        rule: "Spanish often uses set chunks instead of direct body-state translations",
        explanation:
          "Se me hace tarde is a common natural chunk for realizing you are getting late. Voy tarde is also natural, but the point is to avoid an English-shaped translation.",
        correctAnswerText: "Se me hace tarde. / Voy tarde.",
        modelAnswer: "Se me hace tarde.",
        focusTags: ["idiom", "conversation"],
      },
    ],
  },
  {
    id: "practice-natural",
    stepIndex: 2,
    title: "Natural phrasing rewrites",
    intro: "In this section, the grammar is not the only issue. The real target is whether the phrase sounds like Spanish or translated English.",
    questions: [
      {
        id: "us9",
        type: "choice",
        skill: "natural",
        prompt: "Which sentence sounds most natural for I am not interested?",
        options: ["No me interesa.", "No estoy interesado en eso always.", "I am not interested translated directly."],
        answerIndex: 0,
        rule: "Spanish often chooses a different structure from English",
        explanation:
          "No me interesa is the cleaner, more natural sentence in ordinary speech. The overbuilt version sounds heavier and more translated.",
        correctAnswerText: "No me interesa.",
        focusTags: ["natural", "literal"],
      },
      {
        id: "us10",
        type: "rewrite",
        skill: "natural",
        modeLabel: "Natural rewrite",
        prompt: "Rewrite this literal-looking sentence more naturally.",
        originalSentence: "Hace sentido.",
        answer: "Tiene sentido.",
        rule: "Standard Spanish says tiene sentido",
        explanation:
          "Hace sentido appears in some contact-influenced usage, but the standard natural phrasing taught most broadly is Tiene sentido.",
        correctAnswerText: "Tiene sentido.",
        modelAnswer: "Tiene sentido.",
        focusTags: ["natural", "literal"],
      },
      {
        id: "us11",
        type: "rewrite",
        skill: "natural",
        modeLabel: "Natural rewrite",
        prompt: "Rewrite the sentence so it sounds more natural in Spanish.",
        originalSentence: "Te llamo para atrás mañana.",
        answer: "Te vuelvo a llamar mañana.",
        acceptedAnswers: [
          "mañana te vuelvo a llamar",
          "manana te vuelvo a llamar",
          "te llamo de nuevo mañana",
          "te llamo de nuevo manana",
          "mañana te llamo de nuevo",
          "manana te llamo de nuevo",
        ],
        rule: "Spanish normally uses volver a + infinitive or de nuevo instead of a direct calque of call back",
        explanation:
          "Te vuelvo a llamar is the more natural structure. Literal back-style phrasing sounds translated.",
        correctAnswerText: "Te vuelvo a llamar mañana.",
        modelAnswer: "Te vuelvo a llamar mañana.",
        focusTags: ["natural", "conversation"],
      },
      {
        id: "us12",
        type: "choice",
        skill: "natural",
        prompt: "At a cafe, which request sounds the most natural and polite?",
        options: ["Quiero un café.", "¿Me pone un café, por favor?", "I can have a coffee?"],
        answerIndex: 1,
        rule: "Real usage depends on the situation, not only on literal meaning",
        explanation:
          "Quiero un café is possible, but in a service situation ¿Me pone un café, por favor? sounds more natural and socially smooth.",
        correctAnswerText: "¿Me pone un café, por favor?",
        focusTags: ["natural", "register"],
      },
    ],
  },
  {
    id: "practice-regional",
    stepIndex: 3,
    title: "Regional basics",
    intro: "You do not need to master every variety at once. The goal here is to notice common broad differences.",
    questions: [
      {
        id: "us13",
        type: "choice",
        skill: "region",
        prompt: "Which word is especially associated with Spain in basic textbooks and common comparisons?",
        options: ["ordenador", "computadora", "carro"],
        answerIndex: 0,
        rule: "Regional vocabulary often changes by default everyday word choice",
        explanation:
          "Ordenador is the classic Spain-side comparison word for computer, while computadora is much more associated with Latin America.",
        correctAnswerText: "ordenador",
        focusTags: ["region"],
      },
      {
        id: "us14",
        type: "sort",
        skill: "region",
        modeLabel: "Spain or Latin America",
        prompt: "Sort each word by the broad region it is most strongly associated with in beginner-level comparisons.",
        rule: "Regional awareness starts with recognition, not memorizing every local variation",
        categories: [
          { id: "spain", label: "Often Spain" },
          { id: "latam", label: "Often Latin America" },
        ],
        focusTags: ["region"],
        items: [
          {
            word: "coche",
            correct: "spain",
            explanation: "Coche is widely associated with Spain in beginner region charts.",
          },
          {
            word: "computadora",
            correct: "latam",
            explanation: "Computadora is a common Latin American default word for computer.",
          },
          {
            word: "vale",
            correct: "spain",
            explanation: "Vale is strongly associated with Spain in many learning materials.",
          },
          {
            word: "jugo",
            correct: "latam",
            explanation: "Jugo is a broad Latin American default where Spain often uses zumo.",
          },
        ],
      },
      {
        id: "us15",
        type: "choice",
        skill: "region",
        prompt: "Which statement is the best broad summary for beginner-level learning?",
        options: [
          "In much of Latin America, ustedes is common for plural you.",
          "Every country in Latin America uses exactly the same words.",
          "Spain and Latin America never understand each other.",
        ],
        answerIndex: 0,
        rule: "Regional basics should stay broad and realistic",
        explanation:
          "The first statement is a useful broad pattern. The others are overgeneralized or simply false.",
        correctAnswerText: "In much of Latin America, ustedes is common for plural you.",
        focusTags: ["region"],
      },
      {
        id: "us16",
        type: "rewrite",
        skill: "region",
        modeLabel: "Regional rewrite",
        prompt: "Rewrite the sentence in a basic Latin America-style version.",
        originalSentence: "Vosotros tenéis razón.",
        answer: "Ustedes tienen razón.",
        acceptedAnswers: ["ustedes tienen razón.", "ustedes tienen razon."],
        rule: "In broad beginner comparisons, ustedes often replaces vosotros in Latin America",
        explanation:
          "The core regional shift here is from vosotros to ustedes, with the matching verb tienen.",
        correctAnswerText: "Ustedes tienen razón.",
        modelAnswer: "Ustedes tienen razón.",
        focusTags: ["region", "conversation"],
      },
    ],
  },
  {
    id: "practice-register",
    stepIndex: 4,
    title: "Register control",
    intro: "Here the question is not just what the sentence means, but whether it fits the social situation.",
    questions: [
      {
        id: "us17",
        type: "choice",
        skill: "register",
        prompt: "You are speaking to a waiter or clerk politely. Which sentence fits best?",
        options: ["Oye, dame un café.", "Me gustaría pedir un café, por favor.", "Tú dame one coffee now."],
        answerIndex: 1,
        rule: "Formal situations usually prefer softer, more respectful phrasing",
        explanation:
          "Me gustaría pedir... sounds appropriately polite for a service interaction. Oye, dame... is much more direct and informal.",
        correctAnswerText: "Me gustaría pedir un café, por favor.",
        focusTags: ["register", "conversation"],
      },
      {
        id: "us18",
        type: "rewrite",
        skill: "register",
        modeLabel: "Register rewrite",
        prompt: "Rewrite this request in a more formal way.",
        originalSentence: "Oye, dame un café.",
        answer: "Disculpe, me gustaría un café, por favor.",
        acceptedAnswers: [
          "disculpe me gustaría un café por favor",
          "disculpe me gustaria un cafe por favor",
          "me gustaría pedir un café por favor",
          "me gustaria pedir un cafe por favor",
          "disculpe podría traerme un café por favor",
          "disculpe podria traerme un cafe por favor"
        ],
        rule: "Formal Spanish often softens requests with disculpe, podría, or me gustaría",
        explanation:
          "The direct command dame feels rough in this situation. A softer request is more natural and socially appropriate.",
        correctAnswerText: "Disculpe, me gustaría un café, por favor.",
        modelAnswer: "Disculpe, me gustaría un café, por favor.",
        focusTags: ["register", "natural"],
      },
      {
        id: "us19",
        type: "choice",
        skill: "register",
        prompt: "Which line sounds more natural when texting a close friend?",
        options: ["Oye, vienes o no?", "Disculpe, me confirma su asistencia?", "Le solicito una respuesta inmediata."],
        answerIndex: 0,
        rule: "Informal relationships allow shorter, lighter, and more direct phrasing",
        explanation:
          "Oye, vienes o no? fits a friend. The other options belong to much more formal situations.",
        correctAnswerText: "Oye, vienes o no?",
        focusTags: ["register", "conversation"],
      },
      {
        id: "us20",
        type: "guidedWrite",
        skill: "register",
        modeLabel: "Formal message build",
        prompt: "Write a short polite line to a teacher saying you will miss class tomorrow.",
        situation: "Use a formal tone, not a friend-to-friend tone.",
        scaffold: [
          "Open politely.",
          "Say you will miss class tomorrow.",
          "Use at least one polite phrase.",
        ],
        requirements: [
          { label: "Include a formal opener", matchAny: ["buenas tardes", "disculpe", "hola profesora", "estimada profesora"] },
          { label: "Mention tomorrow", matchAny: ["mañana", "manana", "mañana no podré", "manana no podre", "no podré asistir mañana", "no podre asistir manana"] },
          { label: "Use a polite expression", matchAny: ["me gustaría", "me gustaria", "le escribo", "disculpe", "podría", "podria"] },
        ],
        minWords: 8,
        rule: "Register is about phrasing choices, not just grammar correctness",
        explanation:
          "A message to a teacher should sound respectful and controlled. The core target is tone as much as content.",
        modelAnswer: "Buenas tardes, profesora. Le escribo porque mañana no podré asistir a clase.",
        focusTags: ["register", "natural"],
      },
    ],
  },
  {
    id: "practice-speech",
    stepIndex: 5,
    title: "Speech fillers and connectors",
    intro: "These words do not usually carry the main meaning, but they shape how speech flows and sounds in real time.",
    questions: [
      {
        id: "us21",
        type: "choice",
        skill: "speech",
        prompt: "What does o sea usually do in spoken Spanish?",
        options: ["It rephrases or clarifies what was just said.", "It marks a destination place.", "It changes a formal message into a command."],
        answerIndex: 0,
        rule: "Fillers and discourse markers manage flow, not core grammar",
        explanation:
          "O sea often means something like I mean or in other words. Speakers use it to restate or clarify an idea.",
        correctAnswerText: "It rephrases or clarifies what was just said.",
        focusTags: ["filler", "connector"],
      },
      {
        id: "us22",
        type: "choice",
        skill: "speech",
        prompt: "Which filler best softens the start of an answer while you think?",
        options: ["pues", "ordenador", "vosotros"],
        answerIndex: 0,
        rule: "Some fillers buy time and soften entry into a response",
        explanation:
          "Pues is a common spoken softener before an answer. The other options are not fillers at all.",
        correctAnswerText: "pues",
        focusTags: ["filler", "conversation"],
      },
      {
        id: "us23",
        type: "rewrite",
        skill: "speech",
        modeLabel: "Make it sound spoken",
        prompt: "Rewrite the reply so it sounds a bit more conversational.",
        originalSentence: "Sí, me gustó la película.",
        answer: "Pues, sí, me gustó la película.",
        acceptedAnswers: [
          "bueno, sí, me gustó la película",
          "bueno, si, me gusto la pelicula",
          "sí, la verdad, me gustó la película",
          "si, la verdad, me gusto la pelicula",
        ],
        rule: "A small filler can make a spoken reply sound less abrupt",
        explanation:
          "The base sentence is correct. The exercise is about spoken nuance: adding a light discourse marker makes it sound more like live conversation.",
        correctAnswerText: "Pues, sí, me gustó la película.",
        modelAnswer: "Pues, sí, me gustó la película.",
        focusTags: ["filler", "natural"],
      },
      {
        id: "us24",
        type: "guidedWrite",
        skill: "speech",
        modeLabel: "Spoken response build",
        prompt: "Write one conversational sentence about a movie you liked.",
        situation: "Include one filler and one connector so it sounds more like speech than like an essay.",
        scaffold: [
          "Start with a filler such as pues, bueno, or o sea.",
          "Mention the movie or the ending.",
          "Add a connector like pero, entonces, or además.",
        ],
        requirements: [
          { label: "Use one filler", matchAny: ["pues", "bueno", "o sea", "la verdad"] },
          { label: "Use one connector", matchAny: ["pero", "entonces", "además", "ademas"] },
          { label: "Mention the movie or ending", matchAny: ["película", "pelicula", "final", "historia"] },
        ],
        minWords: 9,
        rule: "Spoken nuance often comes from discourse markers plus simple content",
        explanation:
          "The point is not to make the sentence longer. It is to make it sound more like something a person would say out loud.",
        modelAnswer: "Pues, la verdad, la película me gustó, pero el final fue raro.",
        focusTags: ["filler", "connector"],
      },
    ],
  },
  {
    id: "practice-conversation",
    stepIndex: 6,
    title: "Conversation examples",
    intro: "Here the target is not isolated sentences anymore. Choose or build the line that fits the situation naturally.",
    questions: [
      {
        id: "us25",
        type: "choice",
        skill: "conversation",
        prompt: "A friend asks ¿Quieres ir por un café? Which answer sounds the most natural?",
        options: ["Sí, claro, vamos.", "I am in agreement with the activity.", "Disculpe, deseo consumir café."],
        answerIndex: 0,
        rule: "Natural conversation usually chooses short situational responses",
        explanation:
          "Si, claro, vamos is the kind of short, fluid answer a real speaker would likely give in that situation.",
        correctAnswerText: "Sí, claro, vamos.",
        focusTags: ["conversation", "natural"],
      },
      {
        id: "us26",
        type: "rewrite",
        skill: "conversation",
        modeLabel: "Conversation rewrite",
        prompt: "Rewrite the line so it sounds natural in conversation.",
        originalSentence: "Tengo hambre. We go eat?",
        answer: "Tengo hambre. Vamos a comer?",
        acceptedAnswers: ["tengo hambre vamos a comer", "tengo hambre comemos"],
        rule: "Conversation often uses compact question chunks rather than translated English order",
        explanation:
          "Vamos a comer? is short, clear, and natural. The main issue is moving away from English word order and code-switching structure.",
        correctAnswerText: "Tengo hambre. Vamos a comer?",
        modelAnswer: "Tengo hambre. Vamos a comer?",
        focusTags: ["conversation", "literal"],
      },
      {
        id: "us27",
        type: "choice",
        skill: "conversation",
        prompt: "Which question sounds most natural if you did not hear someone clearly in a casual conversation?",
        options: ["¿Me lo repites?", "Please repeat your information again for me.", "I request repetition of the message."],
        answerIndex: 0,
        rule: "Conversation prefers short reusable chunks",
        explanation:
          "¿Me lo repites? is natural, compact, and fits casual speech. The others are translation-heavy or overly formal.",
        correctAnswerText: "¿Me lo repites?",
        focusTags: ["conversation", "natural"],
      },
      {
        id: "us28",
        type: "guidedWrite",
        skill: "conversation",
        modeLabel: "Invite-response build",
        prompt: "A friend invites you to dinner. Write a natural informal reply accepting the invitation.",
        situation: "Use one friendly chunk and one connector.",
        scaffold: [
          "Start with a friendly acceptance like claro, dale, vale, or sí, de una.",
          "Add one connector.",
          "Keep the tone informal.",
        ],
        requirements: [
          { label: "Use a friendly acceptance chunk", matchAny: ["claro", "dale", "vale", "de una", "sí, claro", "si, claro"] },
          { label: "Use one connector", matchAny: ["pero", "entonces", "además", "ademas"] },
          { label: "Mention dinner or going", matchAny: ["cena", "cenar", "voy", "vamos"] },
        ],
        minWords: 8,
        rule: "Natural dialogue combines tone, chunk choice, and flow",
        explanation:
          "The line should sound like something you would actually text or say to a friend, not like a grammar exercise.",
        modelAnswer: "Claro, vamos; entonces nos vemos para cenar a las ocho.",
        focusTags: ["conversation", "register"],
      },
    ],
  },
  {
    id: "practice-review",
    stepIndex: 7,
    title: "Mixed nuance review",
    intro: "Finish by mixing idioms, natural rewrites, register, and region in one pass.",
    questions: [
      {
        id: "us29",
        type: "choice",
        skill: "review",
        prompt: "Which phrase is the most natural chunk for It does not matter to me?",
        options: ["Me da igual.", "It gives me the same.", "I have no agreement difference."],
        answerIndex: 0,
        rule: "High-frequency meaning is often stored as a chunk",
        explanation:
          "Me da igual is the natural ready-made expression here. The other choices are word-by-word thinking.",
        correctAnswerText: "Me da igual.",
        focusTags: ["review", "idiom"],
      },
      {
        id: "us30",
        type: "rewrite",
        skill: "review",
        modeLabel: "Natural rewrite",
        prompt: "Rewrite the sentence so it sounds more natural.",
        originalSentence: "Estoy corriendo tarde, entonces te llamo para atras.",
        answer: "Voy tarde, así que te vuelvo a llamar.",
        acceptedAnswers: [
          "voy tarde así que te llamo de nuevo",
          "voy tarde asi que te llamo de nuevo",
          "se me hace tarde así que te vuelvo a llamar",
          "se me hace tarde asi que te vuelvo a llamar",
          "voy tarde entonces te vuelvo a llamar"
        ],
        rule: "Natural Spanish often changes both the chunk and the connector",
        explanation:
          "Voy tarde and te vuelvo a llamar sound more natural than direct translations of running late and call back.",
        correctAnswerText: "Voy tarde, así que te vuelvo a llamar.",
        modelAnswer: "Voy tarde, así que te vuelvo a llamar.",
        focusTags: ["review", "natural"],
      },
      {
        id: "us31",
        type: "sort",
        skill: "review",
        modeLabel: "Formal or informal",
        prompt: "Sort each expression by the register it most naturally fits.",
        rule: "Register awareness is a real-world usage skill",
        categories: [
          { id: "informal", label: "Informal" },
          { id: "formal", label: "More formal" },
        ],
        focusTags: ["review", "register"],
        items: [
          {
            word: "¿Qué tal?",
            correct: "informal",
            explanation: "This is a casual everyday greeting.",
          },
          {
            word: "Disculpe",
            correct: "formal",
            explanation: "This is a common respectful opener.",
          },
          {
            word: "Oye",
            correct: "informal",
            explanation: "This fits a casual call for attention.",
          },
          {
            word: "Me gustaría pedir...",
            correct: "formal",
            explanation: "This softens a request and fits formal service situations well.",
          },
        ],
      },
      {
        id: "us32",
        type: "choice",
        skill: "review",
        prompt: "Which statement is the best overall usage principle from this course?",
        options: [
          "The most literal translation is usually the best Spanish.",
          "Natural Spanish depends on chunks, situation, tone, and sometimes region.",
          "Regional differences mean you should never learn a general default form.",
        ],
        answerIndex: 1,
        rule: "Usage is about fit, not just dictionary meaning",
        explanation:
          "That is the main idea of the entire course: real Spanish depends on what people actually say in a given context.",
        correctAnswerText: "Natural Spanish depends on chunks, situation, tone, and sometimes region.",
        focusTags: ["review", "natural"],
      },
    ],
  },
];

const allQuestions = PRACTICE_BLOCKS.flatMap((block) => block.questions);
const questionMap = new Map(allQuestions.map((question) => [question.id, question]));
const stepQuestionMap = new Map(PRACTICE_BLOCKS.map((block) => [block.stepIndex, block.questions.map((question) => question.id)]));

const lessonState = {
  activeStep: 0,
  streak: 0,
  responses: {},
  drafts: {},
};

const elements = {
  steps: [...document.querySelectorAll(".usage-step")],
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
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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
        if (!question) {
          continue;
        }

        if ((question.type === "choice" || question.type === "fill" || question.type === "rewrite" || question.type === "guidedWrite") && typeof draft === "string") {
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
  if (question.type === "rewrite") {
    return "Rewrite";
  }
  if (question.type === "guidedWrite") {
    return "Build a response";
  }
  if (question.type === "sort") {
    return "Sorting activity";
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
          placeholder="Rewrite the sentence more naturally"
          data-rewrite-question="${question.id}"
        ></textarea>
        <button class="check-btn" type="button" data-check-question="${question.id}">Check rewrite</button>
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
          placeholder="Write your line here"
          data-guided-question="${question.id}"
        ></textarea>
        <button class="check-btn" type="button" data-check-question="${question.id}">Check response</button>
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
      <p>${correct ? "You matched the usage pattern correctly." : "Some items need another look. Check whether the phrase is tied to region, tone, or chunked usage."}</p>
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

  const minWords = Math.max(0, Number(question.minWords) || 0);
  const minWordsHit = wordCount >= minWords;
  const correct = minWordsHit && requirementResults.every((result) => result.hit);

  return {
    correct,
    wordCount,
    minWords,
    minWordsHit,
    requirementResults,
  };
}

function renderGuidedFeedback(question, evaluation) {
  const hits = evaluation.requirementResults.filter((item) => item.hit).length;

  return renderBaseFeedback(
    question,
    evaluation.correct,
    `
      <p class="guided-summary">Your draft hit ${hits} of ${evaluation.requirementResults.length} target features and has ${evaluation.wordCount} words.</p>
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
      </div>
      ${evaluation.correct
        ? "<p>Your line sounds complete for the target situation. Compare with the model answer for another natural option.</p>"
        : "<p>Revise the line by adding the missing usage features, then compare with the model answer.</p>"}
    `,
  );
}

function evaluateStandardQuestion(question) {
  let correct = false;
  let selectedValue = lessonState.drafts[question.id];

  if (question.type === "rewrite") {
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
      return { ready: false, message: "Write a response first." };
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

function initUsageCourse() {
  renderPracticeBlocks();
  loadLessonState();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    restoreSavedQuestionState(question);
  });
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
}

initUsageCourse();

const SKILL_LABELS = {
  mainIdea: "Main idea",
  inference: "Inference",
  tone: "Tone",
  grammar: "Grammar recognition",
  vocab: "Vocabulary in context",
  structure: "Text structure",
  translation: "Translation compare",
  review: "Mixed review",
};

const ISSUE_LABELS = {
  mainIdea: "Main idea",
  inference: "Inference",
  tone: "Tone",
  grammar: "Grammar",
  vocab: "Vocabulary",
  structure: "Structure",
  translation: "Translation",
  tense: "Tense",
  review: "Review",
};

const COURSE_STORAGE_KEY = "reading-course-progress-v1";

const PRACTICE_BLOCKS = [
  {
    id: "practice-foundations",
    stepIndex: 0,
    title: "Read for gist first",
    intro: "Start by getting the broad meaning before worrying about every word.",
    questions: [
      {
        id: "rd1",
        type: "choice",
        skill: "mainIdea",
        modeLabel: "Main idea check",
        prompt: "What is the main idea of Passage 1?",
        options: [
          "Ana dislikes university and stays home most mornings.",
          "Ana follows a clear morning routine before going to university.",
          "Ana waits until the afternoon to start her day.",
        ],
        answerIndex: 1,
        rule: "Main idea = the big picture of the text",
        explanation:
          "The passage gives a sequence of routine actions: she gets up early, makes coffee, leaves at seven, and arrives with time to spare. That adds up to an organized morning routine.",
        correctAnswerText: "Ana follows a clear morning routine before going to university.",
        evidence: "Cada mañana... prepara café... sale de casa... llega a la universidad con tiempo.",
        focusTags: ["mainIdea", "structure"],
      },
      {
        id: "rd2",
        type: "choice",
        skill: "inference",
        modeLabel: "Inference check",
        prompt: "What can you infer from Siempre llega a la universidad con tiempo?",
        options: [
          "She usually arrives without rushing.",
          "She is often late to class.",
          "She lives inside the university.",
        ],
        answerIndex: 0,
        rule: "Inference comes from clues, not exact repetition",
        explanation:
          "Con tiempo suggests she gets there early enough and is not rushing. The sentence does not literally say calm or prepared, but it strongly implies it.",
        correctAnswerText: "She usually arrives without rushing.",
        evidence: "con tiempo = with time to spare, not at the last second.",
        focusTags: ["inference", "translation"],
      },
      {
        id: "rd3",
        type: "choice",
        skill: "grammar",
        modeLabel: "Grammar recognition",
        prompt: "What kind of form is se levanta in Passage 1?",
        options: [
          "A reflexive verb in the present tense",
          "A completed action in the preterite",
          "An indirect-object pronoun plus infinitive",
        ],
        answerIndex: 0,
        rule: "Recognize the structure before interpreting it",
        explanation:
          "Se levanta is a reflexive present-tense form. It describes what Ana does as part of a routine: she gets herself up.",
        correctAnswerText: "A reflexive verb in the present tense",
        evidence: "The pronoun se is attached to levantar in its reflexive use: levantarse.",
        focusTags: ["grammar", "tense"],
      },
      {
        id: "rd4",
        type: "fill",
        skill: "vocab",
        modeLabel: "Find the clue",
        prompt: "Type the Spanish phrase from Passage 1 that shows Ana is not arriving late.",
        answer: "con tiempo",
        acceptedAnswers: ["llega con tiempo"],
        placeholder: "Type the phrase from the passage",
        rule: "Good readers locate the exact clue",
        explanation:
          "The strongest evidence is con tiempo. That phrase tells you Ana arrives early enough, not at the last minute.",
        correctAnswerText: "con tiempo",
        evidence: "This is the exact wording the passage uses as evidence for your inference.",
        focusTags: ["vocab", "inference"],
      },
    ],
  },
  {
    id: "practice-short",
    stepIndex: 1,
    title: "Context clues in short texts",
    intro: "Now read a slightly fuller passage and separate causes from actions.",
    questions: [
      {
        id: "rd5",
        type: "choice",
        skill: "mainIdea",
        modeLabel: "Main idea check",
        prompt: "What is the best summary of Passage 2?",
        options: [
          "Marta spends the whole day in the cafeteria.",
          "Marta follows a practical lunch routine at school and hurries back because of a test.",
          "Marta forgets to bring food and borrows from her friends.",
        ],
        answerIndex: 1,
        rule: "A summary should combine the key ideas, not one small detail",
        explanation:
          "The passage centers on Marta's lunch routine and the reason she goes back quickly: a science exam. A good summary includes both parts.",
        correctAnswerText: "Marta follows a practical lunch routine at school and hurries back because of a test.",
        evidence: "lleva su almuerzo... comparte fruta... vuelve rápido... tiene un examen de ciencias.",
        focusTags: ["mainIdea", "structure"],
      },
      {
        id: "rd6",
        type: "choice",
        skill: "inference",
        modeLabel: "Inference check",
        prompt: "Why does Marta go back to class quickly after lunch?",
        options: [
          "She wants to stand in the cafeteria line again.",
          "She has a science exam coming up.",
          "She does not like sitting with her friends.",
        ],
        answerIndex: 1,
        rule: "Use nearby context to connect action and cause",
        explanation:
          "The text directly gives the reason with porque tiene un examen de ciencias. Her quick return is linked to the upcoming test.",
        correctAnswerText: "She has a science exam coming up.",
        evidence: "vuelve rápido a clase porque tiene un examen de ciencias.",
        focusTags: ["inference", "structure"],
      },
      {
        id: "rd7",
        type: "fill",
        skill: "translation",
        modeLabel: "Vocabulary in context",
        prompt: "In Passage 2, examen is closest to which English word?",
        answer: "exam",
        acceptedAnswers: ["test", "an exam", "a test"],
        placeholder: "Type the English meaning",
        rule: "Use context, not isolated memorization",
        explanation:
          "Because the passage is about school and science class, examen clearly means exam or test in this context.",
        correctAnswerText: "exam / test",
        evidence: "The school setting makes the academic meaning clear.",
        focusTags: ["translation", "vocab"],
      },
      {
        id: "rd8",
        type: "sort",
        skill: "structure",
        modeLabel: "Cause vs action sort",
        prompt: "Sort each clue as a reason or as an action that happens in the passage.",
        rule: "Reading gets easier when you track what causes what",
        categories: [
          { id: "reason", label: "Reason / cause" },
          { id: "action", label: "Action / event" },
        ],
        focusTags: ["structure", "mainIdea"],
        items: [
          {
            word: "no le gusta hacer fila",
            correct: "reason",
            explanation: "This explains why Marta brings lunch from home.",
          },
          {
            word: "lleva su almuerzo a la escuela",
            correct: "action",
            explanation: "This is something Marta does.",
          },
          {
            word: "tiene un examen de ciencias",
            correct: "reason",
            explanation: "This explains why she returns quickly to class.",
          },
          {
            word: "vuelve rápido a clase",
            correct: "action",
            explanation: "This is the action caused by the exam.",
          },
        ],
      },
    ],
  },
  {
    id: "practice-descriptions",
    stepIndex: 2,
    title: "Description and tone",
    intro: "Descriptions tell you more than facts. They also shape how the reader feels about a person.",
    questions: [
      {
        id: "rd9",
        type: "choice",
        skill: "mainIdea",
        modeLabel: "Main idea check",
        prompt: "What is the main idea of Passage 3?",
        options: [
          "Don Ernesto is rude and avoids his neighbors.",
          "Don Ernesto is presented as a warm, memory-filled neighbor.",
          "Don Ernesto is planning to leave the city soon.",
        ],
        answerIndex: 1,
        rule: "Description builds an overall impression",
        explanation:
          "The details about greeting neighbors, watering plants, playing old music, and smiling at memories create a warm, reflective portrait.",
        correctAnswerText: "Don Ernesto is presented as a warm, memory-filled neighbor.",
        evidence: "siempre saluda a todos... sonríe con calma... como si estuviera recordando otra ciudad.",
        focusTags: ["mainIdea", "tone"],
      },
      {
        id: "rd10",
        type: "choice",
        skill: "tone",
        modeLabel: "Tone check",
        prompt: "Which tone best matches Passage 3?",
        options: [
          "Warm and reflective",
          "Cold and suspicious",
          "Hurried and impatient",
        ],
        answerIndex: 0,
        rule: "Tone comes from repeated detail choices",
        explanation:
          "Nothing in the passage sounds hostile or rushed. Instead, calm details and memory imagery create a warm, reflective tone.",
        correctAnswerText: "Warm and reflective",
        evidence: "sonríe con calma and the image of remembering another city soften the whole passage.",
        focusTags: ["tone", "inference"],
      },
      {
        id: "rd11",
        type: "choice",
        skill: "inference",
        modeLabel: "Inference check",
        prompt: "What can you infer about Don Ernesto from the passage?",
        options: [
          "He enjoys contact with others and values memories.",
          "He wants to stay invisible in the neighborhood.",
          "He dislikes talking about the past.",
        ],
        answerIndex: 0,
        rule: "Inference combines several clues into one idea",
        explanation:
          "His constant greetings suggest sociability, and his reaction when speaking about his youth suggests that memories matter to him.",
        correctAnswerText: "He enjoys contact with others and values memories.",
        evidence: "siempre saluda a todos + cuando habla de su juventud, sonríe con calma.",
        focusTags: ["inference", "tone"],
      },
      {
        id: "rd12",
        type: "choice",
        skill: "grammar",
        modeLabel: "Grammar recognition",
        prompt: "What does como si estuviera recordando otra ciudad add to the description?",
        options: [
          "A literal travel plan for next week",
          "An imagined comparison that suggests emotion and memory",
          "A command from the narrator to the reader",
        ],
        answerIndex: 1,
        rule: "Some structures shape mood and interpretation, not just facts",
        explanation:
          "The phrase does not report a direct fact. It creates an image of what Don Ernesto seems to feel, which deepens tone and characterization.",
        correctAnswerText: "An imagined comparison that suggests emotion and memory",
        evidence: "como si introduces an image of appearance or impression.",
        focusTags: ["grammar", "tone"],
      },
    ],
  },
  {
    id: "practice-messages",
    stepIndex: 3,
    title: "Message reading and register",
    intro: "Messages are short, but they carry tone, purpose, and grammar signals very efficiently.",
    questions: [
      {
        id: "rd13",
        type: "choice",
        skill: "mainIdea",
        modeLabel: "Main idea check",
        prompt: "Why is the writer sending the message in Passage 4?",
        options: [
          "To invite the teacher to lunch",
          "To explain an absence and ask about classwork",
          "To complain about the doctor",
        ],
        answerIndex: 1,
        rule: "Find the text purpose, not just isolated details",
        explanation:
          "The writer explains an illness, says they cannot attend class, and asks whether there will be homework. Those details reveal the message purpose.",
        correctAnswerText: "To explain an absence and ask about classwork",
        evidence: "no podré asistir a clase... preguntarle si habrá tarea.",
        focusTags: ["mainIdea", "structure"],
      },
      {
        id: "rd14",
        type: "choice",
        skill: "tone",
        modeLabel: "Tone check",
        prompt: "What register does Passage 4 use?",
        options: [
          "Formal and respectful",
          "Playful and sarcastic",
          "Very casual and slang-heavy",
        ],
        answerIndex: 0,
        rule: "Register comes from word choice and pronoun use",
        explanation:
          "Buenas tardes, profesora, Le escribo, and Muchas gracias por su comprensión all signal formal respect.",
        correctAnswerText: "Formal and respectful",
        evidence: "Le escribo and su comprensión are strong formality markers.",
        focusTags: ["tone", "grammar"],
      },
      {
        id: "rd15",
        type: "choice",
        skill: "grammar",
        modeLabel: "Grammar recognition",
        prompt: "Why does the writer use He tenido fiebre?",
        options: [
          "To describe a past event with no connection to now",
          "To connect an earlier problem with the present situation",
          "To give an order to the teacher",
        ],
        answerIndex: 1,
        rule: "The present perfect often links past experience to a current situation",
        explanation:
          "The fever started earlier that day and still matters now because it explains tomorrow's absence.",
        correctAnswerText: "To connect an earlier problem with the present situation",
        evidence: "desde esta mañana shows the illness began earlier and remains relevant.",
        focusTags: ["grammar", "tense"],
      },
      {
        id: "rd16",
        type: "fill",
        skill: "tone",
        modeLabel: "Find the formality marker",
        prompt: "Type one respectful phrase from Passage 4 that clearly signals formal tone.",
        answer: "le escribo",
        acceptedAnswers: [
          "buenas tardes profesora",
          "muchas gracias por su comprension",
          "para informarle",
          "su comprension"
        ],
        placeholder: "Type a respectful phrase from the passage",
        rule: "Tone is visible in exact wording",
        explanation:
          "Formal reading means noticing the expressions that create respect. Le escribo is a strong example, but several respectful phrases appear in the message.",
        correctAnswerText: "Le escribo (also acceptable: Buenas tardes, profesora / Muchas gracias por su comprensión)",
        evidence: "Look for phrases that would fit a teacher or authority figure, not a close friend.",
        focusTags: ["tone", "translation"],
      },
    ],
  },
  {
    id: "practice-narratives",
    stepIndex: 4,
    title: "Narrative reading with past-time contrast",
    intro: "Stories become clearer when you separate the background from the main events.",
    questions: [
      {
        id: "rd17",
        type: "choice",
        skill: "mainIdea",
        modeLabel: "Main idea check",
        prompt: "Which sentence best captures the main idea of Passage 5?",
        options: [
          "Tomás disliked visiting his grandmother in summer.",
          "A childhood discovery led Tomás to become more curious about his family history.",
          "Tomás spent all summer collecting stones by the river.",
        ],
        answerIndex: 1,
        rule: "In narratives, the main idea often centers on the key change",
        explanation:
          "The important shift is not simply spending summers there. It is the discovery of the box and the curiosity that follows.",
        correctAnswerText: "A childhood discovery led Tomás to become more curious about his family history.",
        evidence: "encontró una caja... vio cartas antiguas... empezó a preguntar más.",
        focusTags: ["mainIdea", "inference"],
      },
      {
        id: "rd18",
        type: "choice",
        skill: "inference",
        modeLabel: "Inference check",
        prompt: "What changed after Tomás found the box?",
        options: [
          "He stopped spending time with his family.",
          "He became more interested in his family's past.",
          "He decided to throw the letters away.",
        ],
        answerIndex: 1,
        rule: "Track the consequence of the main event",
        explanation:
          "The text says Desde entonces, empezó a preguntar más sobre la historia de su familia. That is the clearest consequence.",
        correctAnswerText: "He became more interested in his family's past.",
        evidence: "Desde entonces, empezó a preguntar más sobre la historia de su familia.",
        focusTags: ["inference", "mainIdea"],
      },
      {
        id: "rd19",
        type: "choice",
        skill: "grammar",
        modeLabel: "Grammar recognition",
        prompt: "How do the imperfect and preterite work together in Passage 5?",
        options: [
          "The imperfect tells the main completed events, and the preterite gives background description.",
          "The imperfect sets the background, and the preterite marks the events that move the story forward.",
          "Both tenses are used exactly the same way.",
        ],
        answerIndex: 1,
        rule: "In many narratives, imperfect = background and preterite = event chain",
        explanation:
          "Era, pasaba, eran, and hacía describe the setting. Encontró, abrió, vio, and empezó are the completed events that advance the story.",
        correctAnswerText: "The imperfect sets the background, and the preterite marks the events that move the story forward.",
        evidence: "The passage first paints the scene, then reports the discovery and its results.",
        focusTags: ["grammar", "tense"],
      },
      {
        id: "rd20",
        type: "sort",
        skill: "grammar",
        modeLabel: "Background vs event sort",
        prompt: "Sort each phrase by its narrative function.",
        rule: "Readers follow a story better when they know what is scene-setting and what is event",
        categories: [
          { id: "background", label: "Background / setting" },
          { id: "event", label: "Main event" },
        ],
        focusTags: ["grammar", "tense"],
        items: [
          {
            word: "era niño",
            correct: "background",
            explanation: "This sets the time frame and situation, not a single event.",
          },
          {
            word: "pasaba los veranos en la casa de su abuela",
            correct: "background",
            explanation: "This describes a repeated past pattern.",
          },
          {
            word: "encontró una caja pequeña",
            correct: "event",
            explanation: "This is the sudden event that changes the story.",
          },
          {
            word: "la abrió con cuidado",
            correct: "event",
            explanation: "This is another completed action in the event chain.",
          },
        ],
      },
    ],
  },
  {
    id: "practice-information",
    stepIndex: 5,
    title: "Informational text structure",
    intro: "Informational reading depends on tracking contrast, addition, and result.",
    questions: [
      {
        id: "rd21",
        type: "choice",
        skill: "mainIdea",
        modeLabel: "Main idea check",
        prompt: "What is the central message of Passage 6?",
        options: [
          "The market closed because nobody visited it.",
          "The local market has grown and now benefits both the economy and the community.",
          "Only tourists are interested in San Miguel's market.",
        ],
        answerIndex: 1,
        rule: "Informational texts often build one central claim with supporting details",
        explanation:
          "The text explains how the market changed, attracted more people, and became valuable socially as well as economically.",
        correctAnswerText: "The local market has grown and now benefits both the economy and the community.",
        evidence: "ayuda a la economía del pueblo... crea un espacio de encuentro para la comunidad.",
        focusTags: ["mainIdea", "structure"],
      },
      {
        id: "rd22",
        type: "choice",
        skill: "structure",
        modeLabel: "Connector function",
        prompt: "What job does sin embargo do in Passage 6?",
        options: [
          "It adds another example of the same idea.",
          "It marks a contrast between the old market and the new one.",
          "It asks a question about the market.",
        ],
        answerIndex: 1,
        rule: "Connectors signal the logic of the text",
        explanation:
          "Before, the market opened only on Sundays; now it works four days a week. Sin embargo marks that contrast.",
        correctAnswerText: "It marks a contrast between the old market and the new one.",
        evidence: "Antes solo abría los domingos; sin embargo, ahora funciona cuatro días por semana.",
        focusTags: ["structure", "grammar"],
      },
      {
        id: "rd23",
        type: "choice",
        skill: "inference",
        modeLabel: "Inference check",
        prompt: "What can you infer about the market's role in San Miguel now?",
        options: [
          "It matters more to daily town life than before.",
          "It is less useful than it used to be.",
          "It exists only for wealthy restaurant owners.",
        ],
        answerIndex: 0,
        rule: "Inference often comes from adding several support details together",
        explanation:
          "More opening days, more visitors, restaurant buyers, and community interaction all suggest the market is more central now than before.",
        correctAnswerText: "It matters more to daily town life than before.",
        evidence: "funciona cuatro días por semana... más personas visitan el lugar... crea un espacio de encuentro.",
        focusTags: ["inference", "mainIdea"],
      },
      {
        id: "rd24",
        type: "fill",
        skill: "structure",
        modeLabel: "Result signal",
        prompt: "Type the exact Spanish phrase in Passage 6 that introduces a result or consequence.",
        answer: "por lo tanto",
        acceptedAnswers: ["por lo tanto mas personas visitan el lugar"],
        placeholder: "Type the connector phrase",
        rule: "Good readers spot the words that organize logic",
        explanation:
          "Por lo tanto signals that what follows is the consequence of the changes mentioned earlier in the passage.",
        correctAnswerText: "por lo tanto",
        evidence: "This phrase is a direct result marker.",
        focusTags: ["structure", "translation"],
      },
    ],
  },
  {
    id: "practice-opinion",
    stepIndex: 6,
    title: "Opinion, nuance, and viewpoint",
    intro: "Opinion texts often agree a little, disagree a little, and then land in a balanced position.",
    questions: [
      {
        id: "rd25",
        type: "choice",
        skill: "mainIdea",
        modeLabel: "Main idea check",
        prompt: "What is the writer's main point in Passage 7?",
        options: [
          "Working from home is always the best option for everyone.",
          "Working from home has advantages, but it only works well under certain conditions.",
          "Working from home should be banned completely.",
        ],
        answerIndex: 1,
        rule: "Main idea in opinion writing often includes the writer's final position",
        explanation:
          "The writer admits some advantages, mentions a real problem, and then ends with a conditional positive view.",
        correctAnswerText: "Working from home has advantages, but it only works well under certain conditions.",
        evidence: "Es cierto que... no obstante... puede funcionar bien si...",
        focusTags: ["mainIdea", "tone"],
      },
      {
        id: "rd26",
        type: "choice",
        skill: "tone",
        modeLabel: "Tone check",
        prompt: "Which tone best describes Passage 7?",
        options: [
          "Balanced and thoughtful",
          "Furious and accusatory",
          "Completely enthusiastic and uncritical",
        ],
        answerIndex: 0,
        rule: "Balanced tone often includes concession + qualification",
        explanation:
          "The writer does not reject the idea entirely. Instead, the passage weighs pros and cons before reaching a moderate conclusion.",
        correctAnswerText: "Balanced and thoughtful",
        evidence: "Yo no estoy completamente de acuerdo... Es cierto que... no obstante... Aun así...",
        focusTags: ["tone", "inference"],
      },
      {
        id: "rd27",
        type: "choice",
        skill: "inference",
        modeLabel: "Inference check",
        prompt: "According to Passage 7, when can working from home function well?",
        options: [
          "When the person has clear schedules and a quiet place to focus",
          "When the person never takes breaks",
          "When the person works and rests in the exact same way all day",
        ],
        answerIndex: 0,
        rule: "Inference can also mean identifying the writer's condition or logic",
        explanation:
          "The final sentence gives the condition directly: horarios claros and un lugar tranquilo para concentrarse.",
        correctAnswerText: "When the person has clear schedules and a quiet place to focus",
        evidence: "puede funcionar bien si la persona tiene horarios claros y un lugar tranquilo.",
        focusTags: ["inference", "mainIdea"],
      },
      {
        id: "rd28",
        type: "choice",
        skill: "translation",
        modeLabel: "Nuance in translation",
        prompt: "In Passage 7, Aun así is closest in meaning to which English phrase?",
        options: [
          "for that reason",
          "even so",
          "at dawn",
        ],
        answerIndex: 1,
        rule: "Translation comparison should preserve the logic of the sentence",
        explanation:
          "Aun así keeps the idea of concession: despite the difficulty just mentioned, the writer still sees a possible positive outcome.",
        correctAnswerText: "even so",
        evidence: "The writer keeps a contrastive, concessive meaning here, not cause or time.",
        focusTags: ["translation", "tone"],
      },
    ],
  },
  {
    id: "practice-review",
    stepIndex: 7,
    title: "Long passage mixed review",
    intro: "Finish with a longer passage that mixes narrative, inference, and grammar tracking.",
    questions: [
      {
        id: "rd29",
        type: "choice",
        skill: "review",
        modeLabel: "Main idea check",
        prompt: "What is the best main idea of Passage 8?",
        options: [
          "Lucía moved to Valencia, struggled most with time management, and improved by building a realistic routine.",
          "Lucía immediately adapted to university life without problems.",
          "Lucía's parents forced her to return home every weekend.",
        ],
        answerIndex: 0,
        rule: "A strong main idea captures the problem and the resolution",
        explanation:
          "The passage is about the challenge of organizing her time and the changes that helped her feel calmer and enjoy life more.",
        correctAnswerText: "Lucía moved to Valencia, struggled most with time management, and improved by building a realistic routine.",
        evidence: "lo que más le costó fue aprender a organizar su tiempo... Poco a poco comprendió... Ahora usa una agenda...",
        focusTags: ["review", "mainIdea"],
      },
      {
        id: "rd30",
        type: "choice",
        skill: "inference",
        modeLabel: "Inference check",
        prompt: "What helped Lucía the most in the end?",
        options: [
          "Doing everything at the same time",
          "Creating more realistic habits and planning ahead",
          "Skipping university classes in the morning",
        ],
        answerIndex: 1,
        rule: "Look for the text's turning point and its effect",
        explanation:
          "The passage contrasts her earlier chaotic routine with present habits such as using a planner, preparing food ahead, and protecting Sundays for rest.",
        correctAnswerText: "Creating more realistic habits and planning ahead",
        evidence: "usa una agenda, prepara la comida con anticipación y reserva los domingos para descansar.",
        focusTags: ["inference", "review"],
      },
      {
        id: "rd31",
        type: "choice",
        skill: "grammar",
        modeLabel: "Grammar recognition",
        prompt: "Which group of verbs in Passage 8 shows Lucía's current stable situation rather than earlier events?",
        options: [
          "se mudó / pensó / echó de menos",
          "usa / prepara / reserva / se siente / disfruta",
          "perdió / intentaba / comprendió",
        ],
        answerIndex: 1,
        rule: "Watch how tense shifts signal timeline changes",
        explanation:
          "Those present-tense verbs describe the situation now, after Lucía changed her routine.",
        correctAnswerText: "usa / prepara / reserva / se siente / disfruta",
        evidence: "The passage explicitly marks the change with Ahora.",
        focusTags: ["grammar", "tense"],
      },
      {
        id: "rd32",
        type: "sort",
        skill: "review",
        modeLabel: "Earlier struggle vs current strategy",
        prompt: "Sort each phrase into Lucía's earlier problem or her current solution.",
        rule: "Longer passages become manageable when you map the before-and-after structure",
        categories: [
          { id: "struggle", label: "Earlier struggle" },
          { id: "solution", label: "Current strategy" },
        ],
        focusTags: ["review", "structure"],
        items: [
          {
            word: "intentaba hacer todo al mismo tiempo",
            correct: "struggle",
            explanation: "This belongs to the earlier problem phase.",
          },
          {
            word: "terminaba cansada y frustrada",
            correct: "struggle",
            explanation: "This is the negative result of the old routine.",
          },
          {
            word: "usa una agenda",
            correct: "solution",
            explanation: "This is part of the new, more realistic routine.",
          },
          {
            word: "prepara la comida con anticipación",
            correct: "solution",
            explanation: "This is another concrete strategy that helps her manage time.",
          },
        ],
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
  steps: [...document.querySelectorAll(".reading-step")],
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

function normalizeInput(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!.,;:()]/g, "")
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
    return "Short response";
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
      ${tags
        .map((tag) => `<span class="feedback-tag issue-${tag}">${ISSUE_LABELS[tag] || tag}</span>`)
        .join("")}
    </div>
  `;
}

function renderEvidence(question) {
  if (!question.evidence) {
    return "";
  }

  return `
    <div class="evidence-box">
      <strong>Passage clue</strong>
      <p>${escapeHtml(question.evidence)}</p>
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
          placeholder="${question.placeholder || "Type your answer"}"
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
                <div class="compact-choice-grid">
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
      ${renderEvidence(question)}
      ${renderFeedbackTags(question.focusTags)}
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
      <p>${correct ? "You mapped the reading clues correctly." : "Check how each clue functions inside the passage: some build the setting, some move the meaning forward."}</p>
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
    return { ready: false, message: "Assign every clue to a category first." };
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

function setPassagePanel(kind, passageId, title, body) {
  const panel = document.querySelector(`[data-${kind}-panel="${passageId}"]`);
  if (!panel) {
    return;
  }

  panel.innerHTML = `
    <h5>${escapeHtml(title)}</h5>
    <p>${escapeHtml(body)}</p>
  `;
}

function clearActivePassageButtons(selector, passageId) {
  document.querySelectorAll(`${selector}[data-passage-${selector === ".gloss-chip" ? "gloss" : "grammar"}="${passageId}"]`).forEach((node) => {
    node.classList.remove("is-active");
  });
}

function handleGlossSelection(button) {
  const passageId = button.dataset.passageGloss;
  if (!passageId) {
    return;
  }

  clearActivePassageButtons(".gloss-chip", passageId);
  button.classList.add("is-active");
  setPassagePanel(
    "gloss",
    passageId,
    button.dataset.term || "Vocabulary",
    `${button.dataset.term || "This word"} means ${button.dataset.definition || ""} in this passage.`,
  );
}

function handleGrammarSelection(button) {
  const passageId = button.dataset.passageGrammar;
  if (!passageId) {
    return;
  }

  clearActivePassageButtons(".grammar-mark", passageId);
  button.classList.add("is-active");
  setPassagePanel(
    "grammar",
    passageId,
    button.dataset.label || "Grammar note",
    button.dataset.note || "",
  );
}

function toggleTranslation(button) {
  const passageId = button.dataset.translationToggle;
  if (!passageId) {
    return;
  }

  const panel = document.querySelector(`[data-translation-panel="${passageId}"]`);
  if (!panel) {
    return;
  }

  const nextHidden = !panel.hidden;
  panel.hidden = nextHidden;
  button.textContent = nextHidden ? "Show translation" : "Hide translation";
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const glossButton = event.target.closest("[data-passage-gloss]");
    if (glossButton) {
      handleGlossSelection(glossButton);
      return;
    }

    const grammarButton = event.target.closest("[data-passage-grammar]");
    if (grammarButton) {
      handleGrammarSelection(grammarButton);
      return;
    }

    const translationButton = event.target.closest("[data-translation-toggle]");
    if (translationButton) {
      toggleTranslation(translationButton);
      return;
    }

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

  document.addEventListener("keydown", (event) => {
    const fillInput = event.target.closest("[data-fill-question]");
    if (!fillInput || event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    evaluateQuestion(fillInput.dataset.fillQuestion);
  });

  if (elements.prevStepBtn) {
    elements.prevStepBtn.addEventListener("click", () => setActiveStep(lessonState.activeStep - 1));
  }
  if (elements.nextStepBtn) {
    elements.nextStepBtn.addEventListener("click", () => setActiveStep(lessonState.activeStep + 1));
  }
}

function initReadingCourse() {
  renderPracticeBlocks();
  loadLessonState();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    restoreSavedQuestionState(question);
  });
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
}

initReadingCourse();

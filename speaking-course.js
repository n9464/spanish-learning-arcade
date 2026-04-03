const SKILL_LABELS = {
  foundations: "Conversation foundations",
  meet: "Meeting someone",
  food: "Ordering food",
  help: "Help and directions",
  plans: "Making plans",
  build: "Sentence building",
  roleplay: "Roleplay simulation",
  review: "Mixed mastery",
};

const ISSUE_LABELS = {
  foundations: "Conversation starter",
  pattern: "Pattern frame",
  politeness: "Polite phrasing",
  response: "Response fit",
  question: "Question form",
  roleplay: "Roleplay turn",
  pronunciation: "Spoken wording",
  timing: "Timed response",
  variation: "Natural variation",
  survival: "High-frequency phrase",
  review: "Mixed mastery",
};

const DIFFICULTY_SETTINGS = {
  warmup: { label: "Warm-up", seconds: 18, rate: 0.9 },
  guided: { label: "Guided", seconds: 15, rate: 0.96 },
  natural: { label: "Natural", seconds: 12, rate: 1 },
  timed: { label: "Timed", seconds: 9, rate: 1.04 },
};

const COURSE_STORAGE_KEY = "speaking-course-progress-v1";

const PRACTICE_BLOCKS = [
  {
    id: "practice-foundations",
    stepIndex: 0,
    title: "Warm-up speaking drill",
    intro: "Use short, reliable phrases first. Speed matters less than sounding natural and complete.",
    questions: [
      {
        id: "fd1",
        type: "speak",
        skill: "foundations",
        difficulty: "warmup",
        modeLabel: "Say this in Spanish",
        scene: "Greeting",
        prompt: "Say: Hello, how are you?",
        answer: "Hola, ¿cómo estás?",
        acceptedAnswers: ["Hola, ¿qué tal?", "Buenos días, ¿cómo estás?"],
        acceptanceGroups: [["hola", "como"], ["buenos dias", "como"]],
        rule: "Greeting + check-in",
        explanation:
          "A safe opener needs two parts: a greeting and a quick check-in. That already sounds conversational instead of robotic.",
        focusTags: ["foundations", "pattern", "survival"],
        variations: ["Hola, ¿qué tal?", "Buenos días, ¿cómo estás?"],
      },
      {
        id: "fd2",
        type: "speak",
        skill: "foundations",
        difficulty: "warmup",
        modeLabel: "Roleplay",
        scene: "First meeting",
        partnerLine: "Hola, mucho gusto.",
        prompt: "Respond naturally and briefly.",
        answer: "Mucho gusto.",
        acceptedAnswers: ["Encantado.", "Encantada.", "Igualmente."],
        acceptanceGroups: [["mucho gusto"], ["encantado"], ["encantada"], ["igualmente"]],
        rule: "Short social closer",
        explanation:
          "In first meetings, a short response works better than a long sentence. You are confirming the social tone, not giving information yet.",
        focusTags: ["foundations", "response", "variation"],
        followUp: "Perfecto. Ahora la otra persona probablemente te preguntará algo como ¿de dónde eres?",
        variations: ["Encantado.", "Encantada.", "Igualmente."],
      },
      {
        id: "fd3",
        type: "speak",
        skill: "foundations",
        difficulty: "warmup",
        modeLabel: "Say this in Spanish",
        scene: "Polite basics",
        prompt: "Say: Thank you very much.",
        answer: "Muchas gracias.",
        acceptedAnswers: ["Muchísimas gracias.", "Gracias."],
        acceptanceGroups: [["muchas gracias"], ["muchisimas gracias"], ["gracias"]],
        rule: "High-frequency politeness",
        explanation:
          "These phrases should come out fast and automatically. They are conversation glue, not special vocabulary.",
        focusTags: ["foundations", "politeness", "survival"],
        variations: ["Muchísimas gracias.", "Gracias."],
      },
      {
        id: "fd4",
        type: "build",
        skill: "foundations",
        difficulty: "warmup",
        modeLabel: "Sentence building",
        scene: "Repair strategy",
        prompt: "Build the phrase you use when someone spoke too fast.",
        answer: "¿Puede repetir, por favor?",
        acceptedAnswers: ["Puede repetir por favor"],
        tokens: ["por favor", "¿Puede", "repetir,"],
        rule: "Control the conversation politely",
        explanation:
          "Strong speakers know how to slow the conversation down. This phrase is one of the safest tools in the whole course.",
        focusTags: ["foundations", "politeness", "survival"],
        variations: ["¿Puede hablar más despacio, por favor?"],
      },
    ],
  },
  {
    id: "practice-meet",
    stepIndex: 1,
    title: "Meeting-someone drill",
    intro: "Use identity patterns that come up in almost every first conversation.",
    questions: [
      {
        id: "mt1",
        type: "speak",
        skill: "meet",
        difficulty: "guided",
        modeLabel: "Roleplay",
        scene: "Introductions",
        partnerLine: "Hola, ¿cómo te llamas?",
        prompt: "Answer with your name in Spanish.",
        answer: "Me llamo Sofía.",
        acceptedAnswers: ["Soy Sofía."],
        prefixes: ["me llamo", "soy"],
        minimumWords: 2,
        rule: "Give your name with a reliable frame",
        explanation:
          "Me llamo... is the clearest beginner-safe frame. Soy... also works in casual conversation.",
        focusTags: ["meet", "pattern", "variation"],
        followUp: "Mucho gusto. Yo soy Marta.",
        variations: ["Soy Sofía.", "Mucho gusto, me llamo Sofía."],
      },
      {
        id: "mt2",
        type: "speak",
        skill: "meet",
        difficulty: "guided",
        modeLabel: "Roleplay",
        scene: "Origin",
        partnerLine: "¿De dónde eres?",
        prompt: "Answer with where you are from.",
        answer: "Soy de Canadá.",
        acceptedAnswers: ["Vengo de Canadá."],
        prefixes: ["soy de", "vengo de"],
        minimumWords: 3,
        rule: "Origin pattern",
        explanation:
          "Soy de... is the most useful high-frequency frame for origin in conversation.",
        focusTags: ["meet", "pattern", "survival"],
        followUp: "Qué bien. Yo soy de México.",
        variations: ["Vengo de Canadá.", "Soy canadiense."],
      },
      {
        id: "mt3",
        type: "speak",
        skill: "meet",
        difficulty: "guided",
        modeLabel: "Say this in Spanish",
        scene: "Talking about yourself",
        prompt: "Say: I study Spanish at the university.",
        answer: "Estudio español en la universidad.",
        acceptedAnswers: ["Yo estudio español en la universidad."],
        acceptanceGroups: [["estudio", "espanol", "universidad"]],
        rule: "Simple present for personal facts",
        explanation:
          "In conversation, clean present-tense statements are enough. You do not need to decorate them.",
        focusTags: ["meet", "pattern"],
        variations: ["Estudio español en la universidad ahora.", "Yo estudio español en la universidad."],
      },
      {
        id: "mt4",
        type: "speak",
        skill: "meet",
        difficulty: "guided",
        modeLabel: "Say this in Spanish",
        scene: "Passing the turn back",
        prompt: "Ask: Where are you from?",
        answer: "¿De dónde eres?",
        acceptedAnswers: ["¿De donde eres?"],
        acceptanceGroups: [["de donde", "eres"]],
        rule: "Return-question pattern",
        explanation:
          "A good conversation turn often ends by giving the turn back. This keeps the exchange moving naturally.",
        focusTags: ["meet", "question", "response"],
        variations: ["¿Y tú, de dónde eres?"],
      },
    ],
  },
  {
    id: "practice-food",
    stepIndex: 2,
    title: "Ordering-food drill",
    intro: "Build a small restaurant toolkit you can actually use in real life.",
    questions: [
      {
        id: "fd5",
        type: "speak",
        skill: "food",
        difficulty: "guided",
        modeLabel: "Roleplay",
        scene: "At a cafe",
        partnerLine: "Buenas tardes, ¿qué va a tomar?",
        prompt: "Order a coffee politely.",
        answer: "Quiero un café, por favor.",
        acceptedAnswers: ["Me gustaría un café, por favor.", "Un café, por favor."],
        acceptanceGroups: [["cafe", "por favor"], ["gustaria", "cafe"]],
        rule: "Ordering frame + polite closer",
        explanation:
          "For everyday ordering, the key pieces are the item and a polite closer. Quiero... and Me gustaría... are both high-frequency choices.",
        focusTags: ["food", "politeness", "survival"],
        followUp: "Claro, enseguida se lo traigo.",
        variations: ["Me gustaría un café, por favor.", "Un café, por favor."],
      },
      {
        id: "fd6",
        type: "speak",
        skill: "food",
        difficulty: "guided",
        modeLabel: "Say this in Spanish",
        scene: "Ordering",
        prompt: "Say: I would like a sandwich and water, please.",
        answer: "Me gustaría un sándwich y agua, por favor.",
        acceptedAnswers: ["Quiero un sándwich y agua, por favor."],
        acceptanceGroups: [["sandwich", "agua", "por favor"]],
        rule: "Plug your order into a fixed frame",
        explanation:
          "The frame carries most of the work. Once you own the frame, you only swap the items.",
        focusTags: ["food", "pattern"],
        variations: ["Quiero un sándwich y agua, por favor."],
      },
      {
        id: "fd7",
        type: "speak",
        skill: "food",
        difficulty: "guided",
        modeLabel: "Roleplay",
        scene: "Ready to order",
        partnerLine: "Aquí tiene el menú. ¿Está listo para pedir?",
        prompt: "Say that you are ready to order now.",
        answer: "Sí, quiero pedir ahora.",
        acceptedAnswers: ["Sí, ya estoy listo para pedir.", "Sí, estoy listo para pedir."],
        acceptanceGroups: [["si", "pedir", "ahora"], ["listo", "pedir"]],
        rule: "Confirm and move forward",
        explanation:
          "A natural service interaction often needs a short confirmation before the actual order starts.",
        focusTags: ["food", "response", "roleplay"],
        followUp: "Perfecto. Dígame, por favor.",
        variations: ["Sí, ya estoy listo para pedir.", "Sí, estoy listo para pedir."],
      },
      {
        id: "fd8",
        type: "build",
        skill: "food",
        difficulty: "guided",
        modeLabel: "Sentence building",
        scene: "Paying",
        prompt: "Build the phrase you use to ask for the bill.",
        answer: "Me trae la cuenta, por favor.",
        acceptedAnswers: ["Me trae la cuenta por favor"],
        tokens: ["cuenta,", "por favor.", "Me trae", "la"],
        rule: "Useful restaurant survival phrase",
        explanation:
          "This is a high-frequency real-world phrase. Even if your grammar is still basic, this one earns its place fast.",
        focusTags: ["food", "survival", "politeness"],
        variations: ["La cuenta, por favor."],
      },
    ],
  },
  {
    id: "practice-help",
    stepIndex: 3,
    title: "Help-and-directions drill",
    intro: "Train the phrases that let you survive when you are lost or need the other person to adjust.",
    questions: [
      {
        id: "hp1",
        type: "speak",
        skill: "help",
        difficulty: "natural",
        modeLabel: "Say this in Spanish",
        scene: "Public place",
        prompt: "Say: Excuse me, where is the bathroom?",
        answer: "Perdón, ¿dónde está el baño?",
        acceptedAnswers: ["Disculpe, ¿dónde está el baño?"],
        acceptanceGroups: [["donde esta", "bano"]],
        rule: "Polite opener + location question",
        explanation:
          "A polite opener buys cooperation. Then the fixed frame ¿dónde está...? gives you a usable survival question.",
        focusTags: ["help", "question", "politeness"],
        variations: ["Disculpe, ¿dónde está el baño?"],
      },
      {
        id: "hp2",
        type: "speak",
        skill: "help",
        difficulty: "natural",
        modeLabel: "Roleplay",
        scene: "Asking for help",
        partnerLine: "¿Necesita ayuda?",
        prompt: "Answer that yes, you are looking for the station.",
        answer: "Sí, busco la estación.",
        acceptedAnswers: ["Sí, necesito ayuda. Busco la estación."],
        acceptanceGroups: [["busco", "estacion"], ["necesito ayuda"]],
        rule: "Need + target",
        explanation:
          "A short answer is enough. First say yes, then say what you need or what you are looking for.",
        focusTags: ["help", "response", "survival"],
        followUp: "Claro, siga recto y luego gire a la derecha.",
        variations: ["Sí, necesito ayuda. Busco la estación."],
      },
      {
        id: "hp3",
        type: "speak",
        skill: "help",
        difficulty: "natural",
        modeLabel: "Say this in Spanish",
        scene: "Repair strategy",
        prompt: "Say: Can you speak more slowly, please?",
        answer: "¿Puede hablar más despacio, por favor?",
        acceptedAnswers: ["Puede hablar más despacio, por favor."],
        acceptanceGroups: [["puede", "hablar", "mas despacio"]],
        rule: "Control the speed directly",
        explanation:
          "This is one of the strongest conversation-repair phrases you can own. It lets you stay in the conversation instead of dropping out.",
        focusTags: ["help", "survival", "politeness"],
        variations: ["¿Puede repetir, por favor?"],
      },
      {
        id: "hp4",
        type: "build",
        skill: "help",
        difficulty: "natural",
        modeLabel: "Sentence building",
        scene: "Directions",
        prompt: "Build the question: How do I get downtown?",
        answer: "¿Cómo llego al centro?",
        acceptedAnswers: ["Como llego al centro"],
        tokens: ["llego", "¿Cómo", "al centro?"],
        rule: "Direction question frame",
        explanation:
          "This frame is reusable with many destinations: al hotel, a la estación, al museo.",
        focusTags: ["help", "question", "pattern"],
        variations: ["¿Cómo llego a la estación?"],
      },
    ],
  },
  {
    id: "practice-plans",
    stepIndex: 4,
    title: "Making-plans drill",
    intro: "Practice invitations, time negotiation, and simple confirmations.",
    questions: [
      {
        id: "pl1",
        type: "speak",
        skill: "plans",
        difficulty: "natural",
        modeLabel: "Roleplay",
        scene: "Invitation",
        partnerLine: "¿Quieres salir esta tarde?",
        prompt: "Accept and ask what time.",
        answer: "Sí, claro. ¿A qué hora?",
        acceptedAnswers: ["Sí, claro. ¿Qué hora te va bien?"],
        acceptanceGroups: [["si", "a que hora"], ["si", "que hora", "va bien"]],
        rule: "Accept + ask for time",
        explanation:
          "A natural response often has two moves: accept first, then negotiate the detail that matters.",
        focusTags: ["plans", "response", "question"],
        followUp: "A las siete me va bien.",
        variations: ["Sí, claro. ¿Qué hora te va bien?"],
      },
      {
        id: "pl2",
        type: "speak",
        skill: "plans",
        difficulty: "natural",
        modeLabel: "Say this in Spanish",
        scene: "Availability",
        prompt: "Say: I can meet at seven.",
        answer: "Puedo reunirme a las siete.",
        acceptedAnswers: ["Puedo quedar a las siete."],
        acceptanceGroups: [["puedo", "siete"]],
        rule: "Availability pattern",
        explanation:
          "You do not need a complicated sentence. Puedo + verb + time already sounds natural and useful.",
        focusTags: ["plans", "pattern", "survival"],
        variations: ["Puedo quedar a las siete."],
      },
      {
        id: "pl3",
        type: "speak",
        skill: "plans",
        difficulty: "natural",
        modeLabel: "Say this in Spanish",
        scene: "Time negotiation",
        prompt: "Ask: What time works for you?",
        answer: "¿Qué hora te va bien?",
        acceptedAnswers: ["¿A qué hora te va bien?"],
        acceptanceGroups: [["que hora", "va bien"], ["a que hora", "va bien"]],
        rule: "Ask for the other person's schedule",
        explanation:
          "This pattern makes you sound collaborative instead of rigid. It is one of the most useful planning questions.",
        focusTags: ["plans", "question", "variation"],
        variations: ["¿A qué hora te va bien?"],
      },
      {
        id: "pl4",
        type: "build",
        skill: "plans",
        difficulty: "natural",
        modeLabel: "Sentence building",
        scene: "Confirming the plan",
        prompt: "Build the sentence: We are going to see each other tomorrow.",
        answer: "Vamos a vernos mañana.",
        acceptedAnswers: ["Vamos a vernos manana"],
        tokens: ["vernos", "mañana.", "Vamos a"],
        rule: "Near-future plan frame",
        explanation:
          "Vamos a + infinitive is one of the easiest spoken future patterns to use well.",
        focusTags: ["plans", "pattern", "survival"],
        variations: ["Nos vemos mañana."],
      },
    ],
  },
  {
    id: "practice-build",
    stepIndex: 5,
    title: "Sentence-building drill",
    intro: "These frames let you produce useful spoken Spanish quickly under pressure.",
    questions: [
      {
        id: "bd1",
        type: "build",
        skill: "build",
        difficulty: "natural",
        modeLabel: "Sentence building",
        scene: "Restaurant reservation",
        prompt: "Build the sentence: I want to ask for a table for two.",
        answer: "Quiero pedir una mesa para dos.",
        acceptedAnswers: ["Quiero pedir una mesa para dos"],
        tokens: ["mesa", "Quiero", "para dos.", "una", "pedir"],
        rule: "Want + infinitive + object",
        explanation:
          "Quiero + infinitive is one of the strongest high-frequency speaking frames in Spanish.",
        focusTags: ["build", "pattern", "survival"],
        variations: ["Quisiera una mesa para dos."],
      },
      {
        id: "bd2",
        type: "build",
        skill: "build",
        difficulty: "natural",
        modeLabel: "Sentence building",
        scene: "Making contact",
        prompt: "Build the sentence: I am going to call my friend later.",
        answer: "Voy a llamar a mi amiga luego.",
        acceptedAnswers: ["Voy a llamar a mi amiga despues"],
        tokens: ["Voy a", "mi amiga", "luego.", "llamar", "a"],
        rule: "Near future + object phrase",
        explanation:
          "Voy a + infinitive is ideal for spoken plans because it is simple and common.",
        focusTags: ["build", "pattern"],
        variations: ["Voy a llamar a mi amiga más tarde."],
      },
      {
        id: "bd3",
        type: "speak",
        skill: "build",
        difficulty: "natural",
        modeLabel: "Say this in Spanish",
        scene: "Learning",
        prompt: "Say: I need to practice more.",
        answer: "Necesito practicar más.",
        acceptedAnswers: ["Yo necesito practicar más."],
        acceptanceGroups: [["necesito", "practicar", "mas"]],
        rule: "Need + infinitive",
        explanation:
          "Necesito + infinitive is a high-frequency pattern that lets you talk about obligations and goals with very little grammar load.",
        focusTags: ["build", "pattern", "survival"],
        variations: ["Yo necesito practicar más."],
      },
      {
        id: "bd4",
        type: "speak",
        skill: "build",
        difficulty: "natural",
        modeLabel: "Say this in Spanish",
        scene: "Paying",
        prompt: "Say: Can I pay by card?",
        answer: "¿Puedo pagar con tarjeta?",
        acceptedAnswers: ["Puedo pagar con tarjeta?"],
        acceptanceGroups: [["puedo", "pagar", "tarjeta"]],
        rule: "Can + infinitive for polite practical questions",
        explanation:
          "Puedo + infinitive keeps practical questions clear and compact, which is exactly what you want in real interactions.",
        focusTags: ["build", "question", "survival"],
        variations: ["¿Se puede pagar con tarjeta?"],
      },
    ],
  },
  {
    id: "practice-roleplay",
    stepIndex: 6,
    title: "Roleplay simulation drill",
    intro: "These are longer, more realistic turns. Keep them short and usable rather than perfect and overloaded.",
    questions: [
      {
        id: "rp1",
        type: "speak",
        skill: "roleplay",
        difficulty: "timed",
        modeLabel: "Roleplay",
        scene: "Restaurant check-in",
        partnerLine: "Buenas noches, ¿tiene reserva?",
        prompt: "Answer that yes, you have a reservation.",
        answer: "Sí, tengo una reserva.",
        acceptedAnswers: ["Sí, tengo una reserva a nombre de Sofía."],
        acceptanceGroups: [["si", "tengo", "reserva"]],
        rule: "Short service reply",
        explanation:
          "In service situations, quick clear answers work best. Start with sí, then the key fact.",
        focusTags: ["roleplay", "response", "timing"],
        followUp: "Perfecto. Sígame, por favor.",
        variations: ["Sí, tengo una reserva a nombre de Sofía."],
      },
      {
        id: "rp2",
        type: "speak",
        skill: "roleplay",
        difficulty: "timed",
        modeLabel: "Roleplay",
        scene: "Meeting someone",
        partnerLine: "Hola, soy Marta. ¿Y tú?",
        prompt: "Introduce yourself politely.",
        answer: "Soy Nico, mucho gusto.",
        acceptedAnswers: ["Me llamo Nico. Encantado.", "Soy Nico. Mucho gusto."],
        prefixes: ["me llamo", "soy"],
        minimumWords: 2,
        rule: "Introduce yourself and close politely",
        explanation:
          "A self-introduction becomes more natural when you add a polite closer instead of stopping after your name.",
        focusTags: ["roleplay", "variation", "response"],
        followUp: "Encantada. ¿De dónde eres?",
        variations: ["Me llamo Nico. Encantado.", "Soy Nico. Mucho gusto."],
      },
      {
        id: "rp3",
        type: "speak",
        skill: "roleplay",
        difficulty: "timed",
        modeLabel: "Roleplay",
        scene: "Directions",
        partnerLine: "La estación está lejos. ¿Cómo va a ir?",
        prompt: "Say that you are going to go by bus.",
        answer: "Voy a ir en autobús.",
        acceptedAnswers: ["Voy en autobús."],
        acceptanceGroups: [["voy", "autobus"]],
        rule: "Transport choice",
        explanation:
          "This answer stays simple: subject in the verb, movement frame, transport choice.",
        focusTags: ["roleplay", "pattern", "timing"],
        followUp: "Muy bien. La parada está allí.",
        variations: ["Voy en autobús."],
      },
      {
        id: "rp4",
        type: "speak",
        skill: "roleplay",
        difficulty: "timed",
        modeLabel: "Roleplay",
        scene: "Conversation repair",
        partnerLine: "Lo siento, no entiendo.",
        prompt: "Say that it is okay and that you can repeat.",
        answer: "No pasa nada, puedo repetir.",
        acceptedAnswers: ["No pasa nada, puedo repetir más despacio."],
        acceptanceGroups: [["no pasa nada", "puedo", "repetir"]],
        rule: "Repair without panic",
        explanation:
          "Good speakers manage breakdowns calmly. This phrase keeps the interaction cooperative instead of tense.",
        focusTags: ["roleplay", "survival", "response"],
        followUp: "Gracias. Ahora sí.",
        variations: ["No pasa nada, puedo repetir más despacio."],
      },
    ],
  },
  {
    id: "practice-review",
    stepIndex: 7,
    title: "Mixed speaking review",
    intro: "Now mix fast survival phrases, roleplay, and sentence building under shorter timers.",
    questions: [
      {
        id: "rv1",
        type: "speak",
        skill: "review",
        difficulty: "timed",
        modeLabel: "Say this in Spanish",
        scene: "Ordering",
        prompt: "Say: I would like to order now, please.",
        answer: "Me gustaría pedir ahora, por favor.",
        acceptedAnswers: ["Quiero pedir ahora, por favor."],
        acceptanceGroups: [["pedir", "ahora", "por favor"]],
        rule: "Ordering under time pressure",
        explanation:
          "The goal here is not fancy grammar. It is fast access to a real-life useful frame.",
        focusTags: ["review", "timing", "survival"],
        variations: ["Quiero pedir ahora, por favor."],
      },
      {
        id: "rv2",
        type: "speak",
        skill: "review",
        difficulty: "timed",
        modeLabel: "Roleplay",
        scene: "Invitation",
        partnerLine: "¿Puedes venir mañana?",
        prompt: "Accept and say that you can come tomorrow.",
        answer: "Sí, puedo venir mañana.",
        acceptedAnswers: ["Sí, mañana puedo venir."],
        acceptanceGroups: [["si", "puedo", "venir", "manana"]],
        rule: "Quick agreement response",
        explanation:
          "A strong timed reply keeps the acceptance and the key detail together: yes + can + time.",
        focusTags: ["review", "response", "timing"],
        followUp: "Perfecto. Entonces nos vemos mañana.",
        variations: ["Sí, mañana puedo venir."],
      },
      {
        id: "rv3",
        type: "build",
        skill: "review",
        difficulty: "timed",
        modeLabel: "Sentence building",
        scene: "Call-back phrase",
        prompt: "Build the sentence: I can't speak now, but I'll call you later.",
        answer: "No puedo hablar ahora, pero te llamo luego.",
        acceptedAnswers: ["No puedo hablar ahora pero te llamo luego"],
        tokens: ["te llamo", "No puedo", "pero", "ahora,", "luego.", "hablar"],
        rule: "Short but complete spoken message",
        explanation:
          "This kind of phrase is extremely useful in everyday life because it keeps the message short while still sounding natural.",
        focusTags: ["review", "pattern", "survival"],
        variations: ["No puedo hablar ahora, pero te llamo más tarde."],
      },
      {
        id: "rv4",
        type: "speak",
        skill: "review",
        difficulty: "timed",
        modeLabel: "Say this in Spanish",
        scene: "At a restaurant",
        prompt: "Ask: What do you recommend?",
        answer: "¿Qué me recomienda?",
        acceptedAnswers: ["Que me recomienda?"],
        acceptanceGroups: [["que", "me", "recomienda"]],
        rule: "Useful service question",
        explanation:
          "This is a compact, high-value phrase that can keep a restaurant conversation moving even if your vocabulary is still limited.",
        focusTags: ["review", "question", "survival"],
        variations: ["¿Qué me recomienda hoy?"],
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

const speechState = {
  synthSupported:
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window,
  recognitionCtor:
    typeof window !== "undefined"
      ? window.SpeechRecognition || window.webkitSpeechRecognition || null
      : null,
  recognition: null,
  activeRecognitionQuestionId: null,
  voices: [],
  coachVoice: null,
  speakingQuestionId: null,
  timers: {},
};

const elements = {
  steps: [...document.querySelectorAll(".speaking-step")],
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
  systemStatusPill: document.querySelector("#systemStatusPill"),
  micAvailability: document.querySelector("#micAvailability"),
  coachVoiceAvailability: document.querySelector("#coachVoiceAvailability"),
  systemStatusText: document.querySelector("#systemStatusText"),
  speakingStatus: document.querySelector("#speakingStatus"),
  stopSpeechBtn: document.querySelector("#stopSpeechBtn"),
  stopMicBtn: document.querySelector("#stopMicBtn"),
};

function normalizeInput(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¡!¿?.,;:]/g, "")
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

    lessonState.activeStep = Math.max(
      0,
      Math.min(Number(parsed.activeStep) || 0, elements.steps.length - 1),
    );
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

        if (question.type === "speak" && typeof draft === "string") {
          lessonState.drafts[questionId] = draft;
          continue;
        }

        if (question.type === "build" && Array.isArray(draft)) {
          const valid = draft
            .map((value) => Number(value))
            .filter((value) => Number.isInteger(value) && value >= 0 && value < question.tokens.length);
          lessonState.drafts[questionId] = valid;
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
  return question.modeLabel || (question.type === "build" ? "Sentence building" : "Speaking");
}

function getDifficulty(question) {
  return DIFFICULTY_SETTINGS[question.difficulty] || DIFFICULTY_SETTINGS.guided;
}

function getQuestionTimer(question) {
  return question.timerSeconds || getDifficulty(question).seconds;
}

function setSpeakingStatus(message) {
  if (elements.speakingStatus) {
    elements.speakingStatus.textContent = message;
  }
}

function clearTimer(questionId) {
  const timer = speechState.timers[questionId];
  if (!timer) {
    return;
  }
  if (timer.intervalId) {
    window.clearInterval(timer.intervalId);
  }
  timer.intervalId = null;
}

function ensureTimer(questionId) {
  const question = questionMap.get(questionId);
  if (!question) {
    return null;
  }
  if (!speechState.timers[questionId]) {
    speechState.timers[questionId] = {
      remaining: getQuestionTimer(question),
      intervalId: null,
      expired: false,
    };
  }
  return speechState.timers[questionId];
}

function renderTimer(questionId) {
  const node = document.querySelector(`[data-timer-value="${questionId}"]`);
  const timer = ensureTimer(questionId);
  if (!node || !timer) {
    return;
  }

  node.textContent = `${timer.remaining}s`;
  node.classList.toggle("is-running", Boolean(timer.intervalId));
  node.classList.toggle("is-expired", Boolean(timer.expired));
}

function startTimer(questionId) {
  const timer = ensureTimer(questionId);
  if (!timer) {
    return;
  }

  clearTimer(questionId);
  if (timer.remaining <= 0 || timer.expired) {
    timer.remaining = getQuestionTimer(questionMap.get(questionId));
    timer.expired = false;
  }

  renderTimer(questionId);
  timer.intervalId = window.setInterval(() => {
    timer.remaining -= 1;
    if (timer.remaining <= 0) {
      timer.remaining = 0;
      timer.expired = true;
      clearTimer(questionId);
      setSpeakingStatus("Time is up. You can still answer, but try to respond faster on the next turn.");
    }
    renderTimer(questionId);
  }, 1000);
}

function resetTimer(questionId) {
  const timer = ensureTimer(questionId);
  if (!timer) {
    return;
  }

  clearTimer(questionId);
  timer.remaining = getQuestionTimer(questionMap.get(questionId));
  timer.expired = false;
  renderTimer(questionId);
}

function stopAllTimers() {
  Object.keys(speechState.timers).forEach((questionId) => clearTimer(questionId));
}

function buildSelectedText(question) {
  const selected = lessonState.drafts[question.id] || [];
  return selected.map((index) => question.tokens[index]).join(" ");
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

function renderVariationList(question) {
  if (!Array.isArray(question.variations) || !question.variations.length) {
    return "";
  }

  return `
    <div class="feedback-variation-list">
      <strong>Natural variations</strong>
      <div class="variation-row">
        ${question.variations.map((variation) => `<span class="variation-chip">${variation}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderFollowUp(question) {
  if (!question.followUp) {
    return "";
  }

  return `
    <div class="feedback-followup">
      <strong>Automatic reply</strong>
      <div class="dialogue-bubble is-partner">
        <strong>Partner</strong>
        ${question.followUp}
      </div>
    </div>
  `;
}

function getCorrectAnswerText(question) {
  return question.answer || "";
}

function renderFeedback(question, correct, meta = {}) {
  const missing = meta.missingTokens && meta.missingTokens.length
    ? `<p><strong>What to include:</strong> ${meta.missingTokens.join(", ")}</p>`
    : "";

  return `
    <div class="feedback-panel ${correct ? "is-correct" : "is-wrong"}">
      <div class="feedback-head">
        <span>${correct ? "Good response" : "Try again"}</span>
        <span>${question.rule}</span>
      </div>
      <p>${question.explanation}</p>
      ${renderFeedbackTags(question.focusTags)}
      ${missing}
      <p><strong>Model answer:</strong> ${getCorrectAnswerText(question)}</p>
      ${renderVariationList(question)}
      ${renderFollowUp(question)}
    </div>
  `;
}

function renderSpeakCard(question, number) {
  const difficulty = getDifficulty(question);
  const timer = getQuestionTimer(question);
  return `
    <article class="question-card" data-question-card="${question.id}">
      <div class="question-meta">
        <span>${number}. ${getModeLabel(question)}</span>
        <span>${SKILL_LABELS[question.skill] || "Practice"}</span>
      </div>
      <div class="question-scenario">
        <div class="scene-meta">
          <span class="scene-chip">${question.scene}</span>
          <span class="mode-chip">${getModeLabel(question)}</span>
          <span class="difficulty-badge">${difficulty.label}</span>
          <span class="timer-pill" data-timer-value="${question.id}">${timer}s</span>
        </div>
        <div class="dialogue-thread">
          ${question.partnerLine ? `<div class="dialogue-bubble is-partner"><strong>Partner</strong>${question.partnerLine}</div>` : ""}
          <div class="dialogue-bubble is-task"><strong>Your task</strong>${question.prompt}</div>
        </div>
        <div class="control-bar">
          ${question.partnerLine ? `<button class="coach-btn" type="button" data-play-prompt="${question.id}">Hear partner line</button>` : ""}
          <button class="coach-btn" type="button" data-play-model="${question.id}">Hear model answer</button>
          <button class="timer-btn" type="button" data-start-timer="${question.id}">Start timer</button>
          <button class="timer-btn" type="button" data-reset-timer="${question.id}">Reset timer</button>
        </div>
        <div class="response-field">
          <textarea
            class="speech-input"
            spellcheck="false"
            placeholder="Speak into the mic or type your Spanish answer here"
            data-speak-question="${question.id}"
          ></textarea>
          <div class="input-hint">You can use the microphone if your browser supports it, or type your response and still practice the pattern.</div>
          <div class="mic-actions">
            <button class="mic-btn" type="button" data-start-mic="${question.id}">Start mic</button>
            <button class="mic-btn" type="button" data-stop-mic-question="${question.id}">Stop mic</button>
            <button class="mic-btn" type="button" data-clear-speak="${question.id}">Clear response</button>
            <button class="check-btn" type="button" data-check-question="${question.id}">Check response</button>
          </div>
        </div>
      </div>
      <div class="feedback-box" data-feedback-for="${question.id}"></div>
    </article>
  `;
}

function renderBuildCard(question, number) {
  const difficulty = getDifficulty(question);
  const timer = getQuestionTimer(question);
  return `
    <article class="question-card" data-question-card="${question.id}">
      <div class="question-meta">
        <span>${number}. ${getModeLabel(question)}</span>
        <span>${SKILL_LABELS[question.skill] || "Practice"}</span>
      </div>
      <div class="question-scenario">
        <div class="scene-meta">
          <span class="scene-chip">${question.scene}</span>
          <span class="mode-chip">${getModeLabel(question)}</span>
          <span class="difficulty-badge">${difficulty.label}</span>
          <span class="timer-pill" data-timer-value="${question.id}">${timer}s</span>
        </div>
        <div class="dialogue-thread">
          <div class="dialogue-bubble is-task"><strong>Your task</strong>${question.prompt}</div>
        </div>
        <div class="control-bar">
          <button class="coach-btn" type="button" data-play-model="${question.id}">Hear model answer</button>
          <button class="timer-btn" type="button" data-start-timer="${question.id}">Start timer</button>
          <button class="timer-btn" type="button" data-reset-timer="${question.id}">Reset timer</button>
        </div>
        <div class="build-zone">
          <div class="build-answer is-empty" data-build-answer="${question.id}"></div>
          <div class="build-bank" data-build-bank="${question.id}"></div>
          <div class="build-actions">
            <button class="build-clear-btn" type="button" data-build-clear="${question.id}">Clear sentence</button>
            <button class="check-btn" type="button" data-check-question="${question.id}">Check response</button>
          </div>
        </div>
      </div>
      <div class="feedback-box" data-feedback-for="${question.id}"></div>
    </article>
  `;
}

function renderQuestionCard(question, number) {
  return question.type === "build"
    ? renderBuildCard(question, number)
    : renderSpeakCard(question, number);
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

function renderBuildState(questionId) {
  const question = questionMap.get(questionId);
  const answerNode = document.querySelector(`[data-build-answer="${questionId}"]`);
  const bankNode = document.querySelector(`[data-build-bank="${questionId}"]`);
  if (!question || !answerNode || !bankNode) {
    return;
  }

  const selected = lessonState.drafts[questionId] || [];
  const used = new Set(selected.map((value) => Number(value)));

  answerNode.classList.toggle("is-empty", selected.length === 0);
  answerNode.innerHTML = selected
    .map(
      (tokenIndex, position) => `
        <button class="token-chip" type="button" data-build-remove="${questionId}" data-build-position="${position}">
          ${question.tokens[tokenIndex]}
        </button>
      `,
    )
    .join("");

  bankNode.innerHTML = question.tokens
    .map(
      (token, index) => `
        <button
          class="token-btn ${used.has(index) ? "is-used" : ""}"
          type="button"
          data-build-question="${questionId}"
          data-build-token="${index}"
          ${used.has(index) ? "disabled" : ""}
        >
          ${token}
        </button>
      `,
    )
    .join("");
}

function renderStepNavigation() {
  if (!elements.stepNav) {
    return;
  }

  elements.stepNav.innerHTML = elements.steps
    .map((step, index) => {
      const title = step.dataset.stepTitle || `Step ${index + 1}`;
      const questionIds = stepQuestionMap.get(index) || [];
      const answeredCount = questionIds.filter((questionId) => lessonState.responses[questionId]?.answered).length;
      return `
        <button
          class="step-pill ${index === lessonState.activeStep ? "is-active" : ""} ${answeredCount === questionIds.length && questionIds.length ? "is-complete" : ""}"
          type="button"
          data-step-target="${index}"
        >
          <span class="step-pill-title">Step ${index + 1}: ${title}</span>
          <span class="step-pill-meta">${answeredCount}/${questionIds.length} answered</span>
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
    .map(([skill, label]) => {
      const skillQuestions = allQuestions.filter((question) => question.skill === skill);
      const answered = skillQuestions.filter((question) => lessonState.responses[question.id]?.answered).length;
      const correct = skillQuestions.filter((question) => lessonState.responses[question.id]?.correct).length;
      const percent = answered === 0 ? 0 : Math.round((correct / answered) * 100);

      return `
        <div class="mastery-chip">
          <div class="mastery-topline">
            <strong>${label}</strong>
            <span>${answered === 0 ? "New" : `${correct}/${answered}`}</span>
          </div>
          <div class="mastery-bar" aria-hidden="true">
            <span style="width: ${percent}%"></span>
          </div>
        </div>
      `;
    })
    .join("");
}

function updateProgress() {
  const answered = allQuestions.filter((question) => lessonState.responses[question.id]?.answered).length;
  const correct = allQuestions.filter((question) => lessonState.responses[question.id]?.correct).length;
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

  renderStepNavigation();
  renderMasteryBoard();
}

function setActiveStep(index, options = {}) {
  const { scroll = true, save = true } = options;
  const bounded = Math.max(0, Math.min(index, elements.steps.length - 1));
  lessonState.activeStep = bounded;

  elements.steps.forEach((step, stepIndex) => {
    step.classList.toggle("is-active", stepIndex === bounded);
  });

  if (elements.stepCountLabel) {
    elements.stepCountLabel.textContent = `Step ${bounded + 1} of ${elements.steps.length}`;
  }
  if (elements.prevStepBtn) {
    elements.prevStepBtn.disabled = bounded === 0;
  }
  if (elements.nextStepBtn) {
    elements.nextStepBtn.disabled = bounded === elements.steps.length - 1;
  }

  renderStepNavigation();
  if (save) {
    saveLessonState();
  }
  if (scroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function chooseSpanishVoice(voices) {
  const spanishVoices = voices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("es"));
  if (!spanishVoices.length) {
    return null;
  }

  const preferredLangs = ["es-MX", "es-US", "es-419", "es-ES"];
  for (const lang of preferredLangs) {
    const match = spanishVoices.find((voice) => voice.lang === lang);
    if (match) {
      return match;
    }
  }

  return spanishVoices[0];
}

function updateSystemUi() {
  if (!elements.systemStatusPill || !elements.micAvailability || !elements.coachVoiceAvailability || !elements.systemStatusText) {
    return;
  }

  const micSupported = Boolean(speechState.recognitionCtor);
  const synthSupported = Boolean(speechState.synthSupported);

  elements.micAvailability.textContent = micSupported ? "Available" : "Typed fallback only";
  elements.coachVoiceAvailability.textContent = speechState.coachVoice
    ? speechState.coachVoice.lang
    : synthSupported
      ? "Browser default"
      : "Unavailable";

  if (micSupported && synthSupported) {
    elements.systemStatusPill.textContent = "Full mode";
    elements.systemStatusText.textContent =
      "You can answer by microphone or by typing. The coach can also read prompts and model answers aloud.";
  } else if (micSupported) {
    elements.systemStatusPill.textContent = "Mic only";
    elements.systemStatusText.textContent =
      "Microphone capture is available, but coach playback is limited in this browser.";
  } else if (synthSupported) {
    elements.systemStatusPill.textContent = "Coach only";
    elements.systemStatusText.textContent =
      "Coach playback is available, but microphone capture is not. You can still practice with typed responses.";
  } else {
    elements.systemStatusPill.textContent = "Fallback";
    elements.systemStatusText.textContent =
      "This browser does not expose speech tools, so the page stays in typed speaking-practice mode.";
  }
}

function loadVoices() {
  if (!speechState.synthSupported) {
    updateSystemUi();
    return;
  }

  speechState.voices = window.speechSynthesis.getVoices();
  speechState.coachVoice = chooseSpanishVoice(speechState.voices);
  updateSystemUi();
}

function stopCoachAudio() {
  if (!speechState.synthSupported) {
    return;
  }

  window.speechSynthesis.cancel();
  speechState.speakingQuestionId = null;
  document.querySelectorAll("[data-play-prompt], [data-play-model]").forEach((button) => {
    button.classList.remove("is-playing");
  });
  setSpeakingStatus("Coach audio stopped.");
}

function markCoachButtons(questionId, active) {
  document.querySelectorAll(`[data-play-prompt="${questionId}"], [data-play-model="${questionId}"]`).forEach((button) => {
    button.classList.toggle("is-playing", active);
  });
}

function playCoachText(questionId, text, mode = "prompt") {
  if (!speechState.synthSupported || !text) {
    setSpeakingStatus("Coach audio is not available in this browser.");
    return;
  }

  const question = questionMap.get(questionId);
  const difficulty = question ? getDifficulty(question) : DIFFICULTY_SETTINGS.guided;
  const rate = mode === "model" ? Math.max(0.84, difficulty.rate - 0.06) : difficulty.rate;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = speechState.coachVoice?.lang || "es-ES";
  utterance.rate = rate;
  utterance.pitch = 1;
  if (speechState.coachVoice) {
    utterance.voice = speechState.coachVoice;
  }

  utterance.onstart = () => {
    speechState.speakingQuestionId = questionId;
    markCoachButtons(questionId, true);
    setSpeakingStatus(mode === "model" ? "Playing model answer." : "Playing partner line.");
  };

  utterance.onend = () => {
    speechState.speakingQuestionId = null;
    markCoachButtons(questionId, false);
    setSpeakingStatus("Playback finished. Your turn.");
  };

  utterance.onerror = () => {
    speechState.speakingQuestionId = null;
    markCoachButtons(questionId, false);
    setSpeakingStatus("The browser could not play this audio.");
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function startMic(questionId) {
  if (!speechState.recognitionCtor) {
    setSpeakingStatus("Microphone capture is not available here. Type your answer instead.");
    return;
  }

  stopMic();
  const recognition = new speechState.recognitionCtor();
  recognition.lang = speechState.coachVoice?.lang || "es-ES";
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 3;
  speechState.recognition = recognition;
  speechState.activeRecognitionQuestionId = questionId;

  recognition.onstart = () => {
    document.querySelectorAll(`[data-start-mic="${questionId}"]`).forEach((button) => {
      button.classList.add("is-listening");
    });
    startTimer(questionId);
    setSpeakingStatus("Listening... Speak your Spanish response now.");
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0]?.transcript || "")
      .join(" ")
      .trim();

    const input = document.querySelector(`[data-speak-question="${questionId}"]`);
    if (input) {
      input.value = transcript;
    }
    lessonState.drafts[questionId] = transcript;
    saveLessonState();
  };

  recognition.onend = () => {
    document.querySelectorAll(`[data-start-mic="${questionId}"]`).forEach((button) => {
      button.classList.remove("is-listening");
    });
    speechState.activeRecognitionQuestionId = null;
    speechState.recognition = null;
    setSpeakingStatus("Microphone capture finished. Review the transcript and check your response.");
  };

  recognition.onerror = () => {
    document.querySelectorAll(`[data-start-mic="${questionId}"]`).forEach((button) => {
      button.classList.remove("is-listening");
    });
    speechState.activeRecognitionQuestionId = null;
    speechState.recognition = null;
    setSpeakingStatus("The microphone could not capture your response. You can still type it.");
  };

  recognition.start();
}

function stopMic() {
  if (!speechState.recognition) {
    return;
  }

  try {
    speechState.recognition.stop();
  } catch (_error) {
    // Ignore stop errors.
  }
}

function applySpeakDraft(questionId, value) {
  lessonState.drafts[questionId] = value;
  saveLessonState();
}

function clearSpeakDraft(questionId) {
  const input = document.querySelector(`[data-speak-question="${questionId}"]`);
  if (input) {
    input.value = "";
  }
  lessonState.drafts[questionId] = "";
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

function matchSpeakResponse(question, response) {
  const normalized = normalizeInput(response);
  const exactAnswers = [question.answer].concat(question.acceptedAnswers || []).map(normalizeInput);
  if (exactAnswers.includes(normalized)) {
    return { correct: true, missingTokens: [] };
  }

  if (Array.isArray(question.prefixes) && question.prefixes.length) {
    const wordCount = normalized ? normalized.split(" ").length : 0;
    const minimumWords = question.minimumWords || 1;
    const hasPrefix = question.prefixes.some((prefix) => normalized.startsWith(normalizeInput(prefix)));
    if (hasPrefix && wordCount >= minimumWords) {
      return { correct: true, missingTokens: [] };
    }
  }

  if (Array.isArray(question.acceptanceGroups) && question.acceptanceGroups.length) {
    const matchingGroup = question.acceptanceGroups.find((group) =>
      group.every((token) => normalized.includes(normalizeInput(token))),
    );
    if (matchingGroup) {
      return { correct: true, missingTokens: [] };
    }

    const allTokens = [...new Set(question.acceptanceGroups.flat())];
    const missingTokens = allTokens.filter((token) => !normalized.includes(normalizeInput(token)));
    return { correct: false, missingTokens };
  }

  return { correct: false, missingTokens: [] };
}

function decorateQuestionCard(question, correct) {
  const card = document.querySelector(`[data-question-card="${question.id}"]`);
  if (!card) {
    return;
  }
  card.classList.toggle("is-correct", correct);
  card.classList.toggle("is-wrong", !correct);
}

function evaluateSpeakQuestion(question) {
  const input = document.querySelector(`[data-speak-question="${question.id}"]`);
  if (!input || !input.value.trim()) {
    return { ready: false, message: "Say or type a response first." };
  }

  applySpeakDraft(question.id, input.value);
  const result = matchSpeakResponse(question, input.value);
  setResponse(question.id, result.correct);
  decorateQuestionCard(question, result.correct);
  return {
    ready: true,
    html: renderFeedback(question, result.correct, result),
  };
}

function evaluateBuildQuestion(question) {
  const selected = lessonState.drafts[question.id] || [];
  if (!selected.length) {
    return { ready: false, message: "Build the sentence first." };
  }

  const built = buildSelectedText(question);
  const normalizedBuilt = normalizeInput(built);
  const accepted = [question.answer].concat(question.acceptedAnswers || []).map(normalizeInput);
  const correct = accepted.includes(normalizedBuilt);
  setResponse(question.id, correct);
  decorateQuestionCard(question, correct);
  return {
    ready: true,
    html: renderFeedback(question, correct),
  };
}

function evaluateQuestion(questionId) {
  const question = questionMap.get(questionId);
  const feedbackBox = document.querySelector(`[data-feedback-for="${questionId}"]`);
  if (!question || !feedbackBox) {
    return;
  }

  const result = question.type === "build"
    ? evaluateBuildQuestion(question)
    : evaluateSpeakQuestion(question);

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

  decorateQuestionCard(question, response.correct);
  feedbackBox.innerHTML = renderFeedback(question, response.correct);
}

function restoreSavedDrafts() {
  for (const question of allQuestions) {
    const draft = lessonState.drafts[question.id];
    if (question.type === "speak") {
      const input = document.querySelector(`[data-speak-question="${question.id}"]`);
      if (input && typeof draft === "string") {
        input.value = draft;
      }
      continue;
    }

    renderBuildState(question.id);
  }
}

function handleBuildTokenSelection(button) {
  const questionId = button.dataset.buildQuestion;
  const tokenIndex = Number(button.dataset.buildToken);
  const current = lessonState.drafts[questionId] || [];
  if (current.includes(tokenIndex)) {
    return;
  }
  lessonState.drafts[questionId] = current.concat(tokenIndex);
  renderBuildState(questionId);
  saveLessonState();
}

function handleBuildTokenRemoval(button) {
  const questionId = button.dataset.buildRemove;
  const position = Number(button.dataset.buildPosition);
  const current = lessonState.drafts[questionId] || [];
  lessonState.drafts[questionId] = current.filter((_, index) => index !== position);
  renderBuildState(questionId);
  saveLessonState();
}

function clearBuildDraft(questionId) {
  lessonState.drafts[questionId] = [];
  renderBuildState(questionId);
  saveLessonState();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const promptButton = event.target.closest("[data-play-prompt]");
    if (promptButton) {
      const question = questionMap.get(promptButton.dataset.playPrompt);
      if (question?.partnerLine) {
        playCoachText(question.id, question.partnerLine, "prompt");
        startTimer(question.id);
      }
      return;
    }

    const modelButton = event.target.closest("[data-play-model]");
    if (modelButton) {
      const question = questionMap.get(modelButton.dataset.playModel);
      if (question?.answer) {
        playCoachText(question.id, question.answer, "model");
      }
      return;
    }

    const timerStartButton = event.target.closest("[data-start-timer]");
    if (timerStartButton) {
      startTimer(timerStartButton.dataset.startTimer);
      return;
    }

    const timerResetButton = event.target.closest("[data-reset-timer]");
    if (timerResetButton) {
      resetTimer(timerResetButton.dataset.resetTimer);
      return;
    }

    const micStartButton = event.target.closest("[data-start-mic]");
    if (micStartButton) {
      startMic(micStartButton.dataset.startMic);
      return;
    }

    const micStopButton = event.target.closest("[data-stop-mic-question]");
    if (micStopButton) {
      stopMic();
      return;
    }

    const clearSpeakButton = event.target.closest("[data-clear-speak]");
    if (clearSpeakButton) {
      clearSpeakDraft(clearSpeakButton.dataset.clearSpeak);
      return;
    }

    const buildButton = event.target.closest("[data-build-question]");
    if (buildButton) {
      handleBuildTokenSelection(buildButton);
      return;
    }

    const buildRemove = event.target.closest("[data-build-remove]");
    if (buildRemove) {
      handleBuildTokenRemoval(buildRemove);
      return;
    }

    const buildClear = event.target.closest("[data-build-clear]");
    if (buildClear) {
      clearBuildDraft(buildClear.dataset.buildClear);
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
    const input = event.target.closest("[data-speak-question]");
    if (!input) {
      return;
    }
    applySpeakDraft(input.dataset.speakQuestion, input.value);
  });

  if (elements.prevStepBtn) {
    elements.prevStepBtn.addEventListener("click", () => setActiveStep(lessonState.activeStep - 1));
  }
  if (elements.nextStepBtn) {
    elements.nextStepBtn.addEventListener("click", () => setActiveStep(lessonState.activeStep + 1));
  }
  if (elements.stopSpeechBtn) {
    elements.stopSpeechBtn.addEventListener("click", stopCoachAudio);
  }
  if (elements.stopMicBtn) {
    elements.stopMicBtn.addEventListener("click", stopMic);
  }
}

function initSpeakingCourse() {
  renderPracticeBlocks();
  loadLessonState();
  bindEvents();

  allQuestions
    .filter((question) => question.type === "build")
    .forEach((question) => {
      if (!Array.isArray(lessonState.drafts[question.id])) {
        lessonState.drafts[question.id] = [];
      }
      renderBuildState(question.id);
    });

  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    renderTimer(question.id);
    restoreSavedQuestionState(question);
  });

  updateProgress();
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
  loadVoices();
  if (speechState.synthSupported) {
    window.speechSynthesis.addEventListener?.("voiceschanged", loadVoices);
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  updateSystemUi();
}

initSpeakingCourse();

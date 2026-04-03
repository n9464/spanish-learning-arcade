const SKILL_LABELS = {
  foundations: "System basics",
  food: "Food and daily life",
  school: "School and work",
  emotions: "Emotions and states",
  travel: "Travel and movement",
  families: "Word families",
  collocations: "Collocations and context",
  review: "Adaptive review",
};

const ISSUE_LABELS = {
  theme: "Theme map",
  frequency: "High-frequency first",
  family: "Word family",
  collocation: "Collocation",
  context: "Context clue",
  recall: "Active recall",
  meaning: "Meaning in use",
};

const COURSE_STORAGE_KEY = "vocabulary-course-progress-v1";

const WORD_BANK = {
  hambre: {
    id: "hambre",
    word: "hambre",
    theme: "Food",
    frequency: "Very high",
    frequencyRank: 1,
    meaning: "hunger",
    visual: "An empty plate and a stomach asking for food.",
    exampleEs: "Tengo hambre después de clase.",
    exampleEn: "I am hungry after class.",
    collocations: ["tener hambre", "mucha hambre"],
    family: ["hambriento"],
    clozeEs: "Tengo _____ después de clase.",
    reviewOptions: ["hambre", "miedo", "tarea", "mapa"],
    reviewable: true,
  },
  pedir: {
    id: "pedir",
    word: "pedir",
    theme: "Food",
    frequency: "Very high",
    frequencyRank: 1,
    meaning: "to ask for / to order",
    visual: "A hand raised to order something.",
    exampleEs: "Quiero pedir un café.",
    exampleEn: "I want to order a coffee.",
    collocations: ["pedir comida", "pedir agua", "pedir la cuenta"],
    family: ["pedido"],
    clozeEs: "Quiero _____ un café.",
    reviewOptions: ["pedir", "llegar", "aprender", "viajar"],
    reviewable: true,
  },
  agua: {
    id: "agua",
    word: "agua",
    theme: "Food",
    frequency: "Very high",
    frequencyRank: 1,
    meaning: "water",
    visual: "A clear glass of water on a table.",
    exampleEs: "¿Me trae un vaso de agua, por favor?",
    exampleEn: "Could you bring me a glass of water, please?",
    collocations: ["vaso de agua", "beber agua"],
    family: [],
    clozeEs: "¿Me trae un vaso de _____, por favor?",
    reviewOptions: ["agua", "tarea", "boleto", "miedo"],
    reviewable: true,
  },
  comida: {
    id: "comida",
    word: "comida",
    theme: "Food",
    frequency: "High",
    frequencyRank: 2,
    meaning: "food / meal",
    visual: "A full plate on a kitchen table.",
    exampleEs: "La comida está en la cocina.",
    exampleEn: "The food is in the kitchen.",
    collocations: ["pedir comida", "preparar comida"],
    family: ["comer"],
    clozeEs: "La _____ está en la cocina.",
    reviewOptions: ["comida", "alegría", "estación", "clase"],
    reviewable: true,
  },
  estudiar: {
    id: "estudiar",
    word: "estudiar",
    theme: "School",
    frequency: "Very high",
    frequencyRank: 1,
    meaning: "to study",
    visual: "Open notebook and focused eyes at night.",
    exampleEs: "Estudio por la noche.",
    exampleEn: "I study at night.",
    collocations: ["estudiar mucho", "estudiar español"],
    family: ["estudiante"],
    clozeEs: "Yo _____ por la noche.",
    reviewContextAnswer: "estudio",
    reviewOptions: ["estudio", "aprendo", "viajo", "pido"],
    reviewable: true,
  },
  aprender: {
    id: "aprender",
    word: "aprender",
    theme: "School",
    frequency: "High",
    frequencyRank: 2,
    meaning: "to learn",
    visual: "A light-bulb moment during class.",
    exampleEs: "Aprendo mucho en esta clase.",
    exampleEn: "I learn a lot in this class.",
    collocations: ["aprender rápido", "aprender una lengua"],
    family: ["aprendizaje"],
    clozeEs: "En esta clase _____ mucho.",
    reviewContextAnswer: "aprendo",
    reviewOptions: ["aprendo", "estudio", "llego", "viajo"],
    reviewable: true,
  },
  examen: {
    id: "examen",
    word: "examen",
    theme: "School",
    frequency: "High",
    frequencyRank: 2,
    meaning: "exam",
    visual: "A test paper waiting on a desk.",
    exampleEs: "Tengo un examen mañana.",
    exampleEn: "I have an exam tomorrow.",
    collocations: ["tener un examen", "aprobar un examen"],
    family: [],
    clozeEs: "Tengo un _____ mañana.",
    reviewOptions: ["examen", "boleto", "mapa", "agua"],
    reviewable: true,
  },
  tarea: {
    id: "tarea",
    word: "tarea",
    theme: "School",
    frequency: "Very high",
    frequencyRank: 1,
    meaning: "homework / task",
    visual: "A worksheet that needs to be finished.",
    exampleEs: "Tengo que hacer la tarea hoy.",
    exampleEn: "I have to do the homework today.",
    collocations: ["hacer la tarea", "terminar la tarea"],
    family: [],
    clozeEs: "Tengo que hacer la _____ hoy.",
    reviewOptions: ["tarea", "alegría", "hambre", "estación"],
    reviewable: true,
  },
  cansado: {
    id: "cansado",
    word: "cansado",
    theme: "Emotions",
    frequency: "Very high",
    frequencyRank: 1,
    meaning: "tired",
    visual: "Heavy shoulders after a long day.",
    exampleEs: "Estoy cansado después del trabajo.",
    exampleEn: "I am tired after work.",
    collocations: ["estar cansado", "sentirse cansado"],
    family: ["cansancio"],
    clozeEs: "Estoy _____ después del trabajo.",
    reviewOptions: ["cansado", "feliz", "viajero", "hablador"],
    reviewable: true,
  },
  miedo: {
    id: "miedo",
    word: "miedo",
    theme: "Emotions",
    frequency: "Very high",
    frequencyRank: 1,
    meaning: "fear",
    visual: "A small step back from something uncertain.",
    exampleEs: "Tengo miedo de hablar en público.",
    exampleEn: "I am afraid of speaking in public.",
    collocations: ["tener miedo", "dar miedo"],
    family: ["miedoso"],
    clozeEs: "Tengo _____ de hablar en público.",
    reviewOptions: ["miedo", "hambre", "alegría", "boleto"],
    reviewable: true,
  },
  feliz: {
    id: "feliz",
    word: "feliz",
    theme: "Emotions",
    frequency: "Very high",
    frequencyRank: 1,
    meaning: "happy",
    visual: "A wide smile after good news.",
    exampleEs: "Ana está feliz porque aprobó el examen.",
    exampleEn: "Ana is happy because she passed the exam.",
    collocations: ["estar feliz", "muy feliz"],
    family: ["felicidad"],
    clozeEs: "Ana está muy _____ porque aprobó el examen.",
    reviewOptions: ["feliz", "cansado", "miedo", "tarea"],
    reviewable: true,
  },
  alegria: {
    id: "alegria",
    word: "alegría",
    theme: "Emotions",
    frequency: "High",
    frequencyRank: 2,
    meaning: "joy",
    visual: "Bright energy after hearing good news.",
    exampleEs: "La noticia le dio mucha alegría.",
    exampleEn: "The news gave her a lot of joy.",
    collocations: ["mucha alegría", "sentir alegría"],
    family: ["alegre"],
    clozeEs: "La noticia le dio mucha _____.",
    reviewOptions: ["alegría", "hambre", "tarea", "estación"],
    reviewable: true,
  },
  viajar: {
    id: "viajar",
    word: "viajar",
    theme: "Travel",
    frequency: "High",
    frequencyRank: 2,
    meaning: "to travel",
    visual: "A train leaving one city for another.",
    exampleEs: "Mañana voy a viajar a México.",
    exampleEn: "Tomorrow I am going to travel to Mexico.",
    collocations: ["viajar a", "viajar en tren"],
    family: ["viaje", "viajero"],
    clozeEs: "Mañana voy a _____ a México.",
    reviewOptions: ["viajar", "llegar", "pedir", "aprender"],
    reviewable: true,
  },
  llegar: {
    id: "llegar",
    word: "llegar",
    theme: "Travel",
    frequency: "Very high",
    frequencyRank: 1,
    meaning: "to arrive",
    visual: "Someone reaching the station right on time.",
    exampleEs: "Llego a la estación a tiempo.",
    exampleEn: "I arrive at the station on time.",
    collocations: ["llegar a", "llegar tarde", "llegar a tiempo"],
    family: ["llegada"],
    clozeEs: "_____ a la estación a tiempo.",
    reviewContextAnswer: "Llego",
    reviewOptions: ["Llego", "Viajo", "Pido", "Aprendo"],
    reviewable: true,
  },
  boleto: {
    id: "boleto",
    word: "boleto",
    theme: "Travel",
    frequency: "High",
    frequencyRank: 2,
    meaning: "ticket",
    visual: "A train ticket in your hand.",
    exampleEs: "Necesito comprar un boleto.",
    exampleEn: "I need to buy a ticket.",
    collocations: ["comprar un boleto", "boleto de tren"],
    family: [],
    clozeEs: "Necesito comprar un _____.",
    reviewOptions: ["boleto", "mapa", "agua", "examen"],
    reviewable: true,
  },
  estacion: {
    id: "estacion",
    word: "estación",
    theme: "Travel",
    frequency: "High",
    frequencyRank: 2,
    meaning: "station",
    visual: "A busy platform with trains and signs.",
    exampleEs: "La estación está cerca de aquí.",
    exampleEn: "The station is close to here.",
    collocations: ["la estación", "llegar a la estación"],
    family: [],
    clozeEs: "La _____ está cerca de aquí.",
    reviewOptions: ["estación", "alegría", "clase", "cocina"],
    reviewable: true,
  },
  mapa: {
    id: "mapa",
    word: "mapa",
    theme: "Travel",
    frequency: "High",
    frequencyRank: 2,
    meaning: "map",
    visual: "A folded city map before you start walking.",
    exampleEs: "Miro el mapa antes de salir.",
    exampleEn: "I look at the map before leaving.",
    collocations: ["mirar el mapa", "un mapa de la ciudad"],
    family: [],
    clozeEs: "Miro el _____ antes de salir.",
    reviewOptions: ["mapa", "boleto", "tarea", "hambre"],
    reviewable: true,
  },
  hablar: {
    id: "hablar",
    word: "hablar",
    theme: "Families",
    frequency: "Very high",
    frequencyRank: 1,
    meaning: "to speak",
    visual: "A speech bubble coming out clearly.",
    exampleEs: "Quiero hablar contigo.",
    exampleEn: "I want to speak with you.",
    collocations: ["hablar con", "hablar de"],
    family: ["hablado", "hablador"],
    clozeEs: "Quiero _____ contigo.",
    reviewOptions: ["hablar", "viajar", "pedir", "aprender"],
    reviewable: false,
  },
  hablado: {
    id: "hablado",
    word: "hablado",
    theme: "Families",
    frequency: "Medium",
    frequencyRank: 3,
    meaning: "spoken / talked",
    visual: "Words already said in a conversation.",
    exampleEs: "Hemos hablado mucho hoy.",
    exampleEn: "We have spoken a lot today.",
    collocations: ["haber hablado"],
    family: ["hablar", "hablador"],
    reviewable: false,
  },
  hablador: {
    id: "hablador",
    word: "hablador",
    theme: "Families",
    frequency: "Medium",
    frequencyRank: 3,
    meaning: "talkative",
    visual: "Someone who always has another story ready.",
    exampleEs: "Mi primo es muy hablador.",
    exampleEn: "My cousin is very talkative.",
    collocations: ["muy hablador"],
    family: ["hablar", "hablado"],
    reviewable: false,
  },
  viaje: {
    id: "viaje",
    word: "viaje",
    theme: "Families",
    frequency: "High",
    frequencyRank: 2,
    meaning: "trip",
    visual: "The whole journey planned on a board.",
    exampleEs: "Fue un viaje largo en tren.",
    exampleEn: "It was a long trip by train.",
    collocations: ["un viaje largo", "viaje de tren"],
    family: ["viajar", "viajero"],
    reviewable: false,
  },
  viajero: {
    id: "viajero",
    word: "viajero",
    theme: "Families",
    frequency: "Medium",
    frequencyRank: 3,
    meaning: "traveler",
    visual: "A person with a backpack at a station.",
    exampleEs: "El viajero llegó temprano.",
    exampleEn: "The traveler arrived early.",
    collocations: ["viajero frecuente"],
    family: ["viajar", "viaje"],
    reviewable: false,
  },
  estudiante: {
    id: "estudiante",
    word: "estudiante",
    theme: "Families",
    frequency: "High",
    frequencyRank: 2,
    meaning: "student",
    visual: "A learner with books under one arm.",
    exampleEs: "Marta es una buena estudiante.",
    exampleEn: "Marta is a good student.",
    collocations: ["buen estudiante", "estudiante de español"],
    family: ["estudiar"],
    reviewable: false,
  },
};

const BASE_PRACTICE_BLOCKS = [
  {
    id: "practice-foundations",
    stepIndex: 0,
    title: "System setup drill",
    intro: "Start with the logic of the system so every later word has a place.",
    questions: [
      {
        id: "fd1",
        type: "choice",
        skill: "foundations",
        prompt: "Which learning order builds usable vocabulary fastest?",
        options: [
          "Rare words first, then common phrases.",
          "Themes + high-frequency words + word families.",
          "Alphabetical lists without context.",
        ],
        answerIndex: 1,
        rule: "Organize vocabulary by use, not by alphabet",
        explanation:
          "Theme gives the situation, frequency gives priority, and family links help you grow several words from one root.",
        correctAnswerText: "Themes + high-frequency words + word families.",
        focusTags: ["theme", "frequency", "family"],
      },
      {
        id: "fd2",
        type: "choice",
        skill: "foundations",
        prompt: "Why is learning tener hambre stronger than memorizing hambre by itself?",
        options: [
          "Because longer phrases always mean more advanced Spanish.",
          "Because natural partners make the word usable in real speech.",
          "Because nouns should never be learned alone.",
        ],
        answerIndex: 1,
        rule: "Collocations make vocabulary usable",
        explanation:
          "Words become active faster when you connect them to the phrase they naturally live in, like tener hambre or hacer la tarea.",
        correctAnswerText: "Because natural partners make the word usable in real speech.",
        focusTags: ["collocation", "meaning"],
        wordIds: ["hambre", "tarea"],
      },
      {
        id: "fd3",
        type: "sort",
        skill: "foundations",
        modeLabel: "Concept sort",
        prompt: "Sort each study idea into the system it belongs to.",
        rule: "Separate the organizing tools",
        categories: [
          { id: "theme", label: "Theme" },
          { id: "frequency", label: "Frequency" },
          { id: "family", label: "Family" },
          { id: "collocation", label: "Collocation" },
        ],
        focusTags: ["theme", "frequency", "family", "collocation"],
        items: [
          {
            word: "food and travel",
            correct: "theme",
            explanation: "Themes group words by situation, such as food, school, emotions, or travel.",
          },
          {
            word: "very high frequency",
            correct: "frequency",
            explanation: "Frequency tells you which words deserve attention first in real-life Spanish.",
          },
          {
            word: "hablar -> hablador",
            correct: "family",
            explanation: "A family connection shows how one root can grow into related forms.",
            wordIds: ["hablar", "hablador"],
          },
          {
            word: "hacer la tarea",
            correct: "collocation",
            explanation: "A collocation is a natural word partnership that native speakers expect.",
            wordIds: ["tarea"],
          },
        ],
      },
      {
        id: "fd4",
        type: "choice",
        skill: "foundations",
        prompt: "If two words feel equally easy, which one should you learn first?",
        options: [
          "The one you hear and need every day.",
          "The one that looks more literary.",
          "The one with more syllables.",
        ],
        answerIndex: 0,
        rule: "High-frequency words first",
        explanation:
          "A frequency-first system gets you useful Spanish faster. Common words should become automatic before rarer ones.",
        correctAnswerText: "The one you hear and need every day.",
        focusTags: ["frequency", "meaning"],
      },
    ],
  },
  {
    id: "practice-food",
    stepIndex: 1,
    title: "Food recall drill",
    intro: "Recall the core food words and their natural partners, not just a translation.",
    questions: [
      {
        id: "fo1",
        type: "fill",
        skill: "food",
        modeLabel: "Active recall",
        prompt: "Type the missing Spanish noun: Tengo _____ después de clase.",
        answer: "hambre",
        rule: "The natural phrase is tener hambre",
        explanation:
          "Spanish says tener hambre, literally to have hunger. The target word is the noun hambre.",
        correctAnswerText: "hambre",
        focusTags: ["recall", "collocation"],
        wordIds: ["hambre"],
      },
      {
        id: "fo2",
        type: "choice",
        skill: "food",
        prompt: "At a cafe, which verb fits best? Quiero _____ un café.",
        options: ["pedir", "llegar", "estudiar"],
        answerIndex: 0,
        rule: "Use pedir to ask for or order",
        explanation:
          "Pedir is the high-frequency verb for asking for something or ordering it in a cafe or restaurant.",
        correctAnswerText: "pedir",
        focusTags: ["context", "meaning"],
        wordIds: ["pedir"],
      },
      {
        id: "fo3",
        type: "choice",
        skill: "food",
        prompt: "Which phrase sounds natural in Spanish?",
        options: ["tener hambre", "hacer hambre", "estar hambre"],
        answerIndex: 0,
        rule: "Collocations matter more than direct translation",
        explanation:
          "Spanish uses tener hambre, not a direct copy of English 'to be hungry.' Learn the phrase as a unit.",
        correctAnswerText: "tener hambre",
        focusTags: ["collocation", "meaning"],
        wordIds: ["hambre"],
      },
      {
        id: "fo4",
        type: "choice",
        skill: "food",
        prompt: "Choose the best word for the blank: ¿Me trae un vaso de _____, por favor?",
        options: ["agua", "tarea", "boleto"],
        answerIndex: 0,
        rule: "Use context and situation",
        explanation:
          "A restaurant request plus vaso de points naturally to agua. This is why situation-based learning helps.",
        correctAnswerText: "agua",
        focusTags: ["context", "theme"],
        wordIds: ["agua"],
      },
    ],
  },
  {
    id: "practice-school",
    stepIndex: 2,
    title: "School and work drill",
    intro: "Separate studying, learning, and school collocations so they do not blur together.",
    questions: [
      {
        id: "sc1",
        type: "choice",
        skill: "school",
        prompt: "Which verb means 'to study' as an activity? Yo _____ por la noche.",
        options: ["aprendo", "estudio", "viajo"],
        answerIndex: 1,
        rule: "Estudiar is the activity",
        explanation:
          "Estudiar names the act of studying. Aprender focuses on gaining knowledge or learning something new.",
        correctAnswerText: "estudio",
        focusTags: ["context", "meaning"],
        wordIds: ["estudiar", "aprender"],
      },
      {
        id: "sc2",
        type: "choice",
        skill: "school",
        prompt: "Which verb focuses on gaining knowledge? En esta clase _____ mucho.",
        options: ["aprendo", "llego", "pido"],
        answerIndex: 0,
        rule: "Aprender focuses on new knowledge",
        explanation:
          "Aprender means to learn. In a classroom context, it emphasizes what enters your knowledge, not the act of studying itself.",
        correctAnswerText: "aprendo",
        focusTags: ["context", "meaning"],
        wordIds: ["aprender"],
      },
      {
        id: "sc3",
        type: "fill",
        skill: "school",
        modeLabel: "Active recall",
        prompt: "Complete the sentence with one Spanish word: Tengo un _____ mañana.",
        answer: "examen",
        rule: "High-frequency school noun",
        explanation:
          "The situation points to examen. Learn it with the common phrase tener un examen.",
        correctAnswerText: "examen",
        focusTags: ["recall", "theme"],
        wordIds: ["examen"],
      },
      {
        id: "sc4",
        type: "choice",
        skill: "school",
        prompt: "Which phrase is natural?",
        options: ["hacer la tarea", "tomar la tarea", "llegar la tarea"],
        answerIndex: 0,
        rule: "Homework takes hacer",
        explanation:
          "Spanish naturally says hacer la tarea. This is a core collocation worth treating as one chunk.",
        correctAnswerText: "hacer la tarea",
        focusTags: ["collocation", "meaning"],
        wordIds: ["tarea"],
      },
    ],
  },
  {
    id: "practice-emotions",
    stepIndex: 3,
    title: "Emotions and states drill",
    intro: "Connect emotional words to the patterns they actually appear in: estoy..., tengo..., and natural adjective use.",
    questions: [
      {
        id: "em1",
        type: "choice",
        skill: "emotions",
        prompt: "Choose the best word: Estoy _____ después del trabajo.",
        options: ["feliz", "cansado", "viajero"],
        answerIndex: 1,
        rule: "Use an adjective of state with estar",
        explanation:
          "Cansado describes a current state, so it fits naturally after estar.",
        correctAnswerText: "cansado",
        focusTags: ["context", "meaning"],
        wordIds: ["cansado"],
      },
      {
        id: "em2",
        type: "choice",
        skill: "emotions",
        prompt: "Choose the best word: Tengo _____ de hablar en público.",
        options: ["hambre", "miedo", "alegría"],
        answerIndex: 1,
        rule: "Fear takes tener miedo",
        explanation:
          "Spanish uses the noun miedo inside the phrase tener miedo de + infinitive or noun.",
        correctAnswerText: "miedo",
        focusTags: ["collocation", "context"],
        wordIds: ["miedo"],
      },
      {
        id: "em3",
        type: "fill",
        skill: "emotions",
        modeLabel: "Active recall",
        prompt: "Ana está muy _____ porque aprobó el examen.",
        answer: "feliz",
        rule: "Positive emotion adjective",
        explanation:
          "The passing-exam context signals feliz. The sentence gives you meaning through situation, not translation alone.",
        correctAnswerText: "feliz",
        focusTags: ["recall", "context"],
        wordIds: ["feliz"],
      },
      {
        id: "em4",
        type: "choice",
        skill: "emotions",
        prompt: "Which sentence sounds natural?",
        options: [
          "Tengo miedo de esa película.",
          "Estoy miedo de esa película.",
          "Soy miedo de esa película.",
        ],
        answerIndex: 0,
        rule: "Learn the full pattern, not the single noun",
        explanation:
          "Miedo is normally used inside the phrase tener miedo. This is exactly why collocations should be learned as units.",
        correctAnswerText: "Tengo miedo de esa película.",
        focusTags: ["collocation", "meaning"],
        wordIds: ["miedo"],
      },
    ],
  },
  {
    id: "practice-travel",
    stepIndex: 4,
    title: "Travel and movement drill",
    intro: "Practice the travel words that actually show up in stations, maps, and movement sentences.",
    questions: [
      {
        id: "tr1",
        type: "choice",
        skill: "travel",
        prompt: "Choose the best word: Necesito comprar un _____.",
        options: ["mapa", "boleto", "examen"],
        answerIndex: 1,
        rule: "Ticket in travel context",
        explanation:
          "A station or train context plus comprar points naturally to boleto.",
        correctAnswerText: "boleto",
        focusTags: ["context", "theme"],
        wordIds: ["boleto"],
      },
      {
        id: "tr2",
        type: "fill",
        skill: "travel",
        modeLabel: "Active recall",
        prompt: "Complete the sentence with one Spanish word: Llego a la _____ a tiempo.",
        answer: "estación",
        acceptedAnswers: ["estacion"],
        rule: "Arrival point vocabulary",
        explanation:
          "The place of arrival here is the estación. It also appears in the useful phrase llegar a la estación.",
        correctAnswerText: "estación",
        focusTags: ["recall", "context"],
        wordIds: ["estacion", "llegar"],
      },
      {
        id: "tr3",
        type: "choice",
        skill: "travel",
        prompt: "Before walking through the city, I check the _____.",
        options: ["tarea", "mapa", "alegría"],
        answerIndex: 1,
        rule: "Context beats translation guessing",
        explanation:
          "A city-navigation context strongly points to mapa, especially in the phrase mirar el mapa.",
        correctAnswerText: "mapa",
        focusTags: ["context", "collocation"],
        wordIds: ["mapa"],
      },
      {
        id: "tr4",
        type: "choice",
        skill: "travel",
        prompt: "Choose the verb for moving between places: Mañana voy a _____ a México.",
        options: ["llegar", "viajar", "aprender"],
        answerIndex: 1,
        rule: "Viajar means to travel",
        explanation:
          "Viajar names the movement between places. Llegar focuses on arrival at the endpoint.",
        correctAnswerText: "viajar",
        focusTags: ["meaning", "context"],
        wordIds: ["viajar", "llegar"],
      },
    ],
  },
  {
    id: "practice-families",
    stepIndex: 5,
    title: "Word-family growth drill",
    intro: "Grow one root into several useful forms so vocabulary expands by pattern, not by isolated memorization.",
    questions: [
      {
        id: "fa1",
        type: "choice",
        skill: "families",
        prompt: "Which word belongs to the hablar family?",
        options: ["hablador", "viajero", "tarea"],
        answerIndex: 0,
        rule: "Recognize related forms from the same root",
        explanation:
          "Hablador comes from the same root as hablar. Family recognition helps you decode new words faster.",
        correctAnswerText: "hablador",
        focusTags: ["family", "meaning"],
        wordIds: ["hablar", "hablador"],
      },
      {
        id: "fa2",
        type: "choice",
        skill: "families",
        prompt: "If viajar is the verb, which noun means 'trip'?",
        options: ["viaje", "viajero", "viajando"],
        answerIndex: 0,
        rule: "Roots can grow into related nouns",
        explanation:
          "Viaje is the noun trip. Viajero is a traveler. Seeing the family makes both easier to retain.",
        correctAnswerText: "viaje",
        focusTags: ["family", "meaning"],
        wordIds: ["viajar", "viaje", "viajero"],
      },
      {
        id: "fa3",
        type: "sort",
        skill: "families",
        modeLabel: "Family sort",
        prompt: "Sort each word under its family root.",
        rule: "Group by root, not by translation",
        categories: [
          { id: "hablar", label: "hablar" },
          { id: "viajar", label: "viajar" },
          { id: "estudiar", label: "estudiar" },
        ],
        focusTags: ["family"],
        items: [
          {
            word: "hablado",
            correct: "hablar",
            explanation: "Hablado is a family member built from the root hablar.",
            wordIds: ["hablar", "hablado"],
          },
          {
            word: "viajero",
            correct: "viajar",
            explanation: "Viajero belongs to the viajar family and means traveler.",
            wordIds: ["viajar", "viajero"],
          },
          {
            word: "estudiante",
            correct: "estudiar",
            explanation: "Estudiante grows from the same study root as estudiar.",
            wordIds: ["estudiar", "estudiante"],
          },
          {
            word: "hablador",
            correct: "hablar",
            explanation: "Hablador also belongs to the hablar family.",
            wordIds: ["hablar", "hablador"],
          },
        ],
      },
      {
        id: "fa4",
        type: "fill",
        skill: "families",
        modeLabel: "Family recall",
        prompt: "Complete with one family member of estudiar: Marta es buena _____.",
        answer: "estudiante",
        rule: "Use the family to predict new forms",
        explanation:
          "If estudiar is the root, estudiante is the person-word that naturally fits this sentence.",
        correctAnswerText: "estudiante",
        focusTags: ["family", "recall"],
        wordIds: ["estudiar", "estudiante"],
      },
    ],
  },
  {
    id: "practice-collocations",
    stepIndex: 6,
    title: "Collocation and context lab",
    intro: "Push the words into real combinations so they are easier to retrieve under pressure.",
    questions: [
      {
        id: "co1",
        type: "choice",
        skill: "collocations",
        prompt: "Which restaurant phrase is natural?",
        options: ["pedir la cuenta", "estudiar la cuenta", "llegar la cuenta"],
        answerIndex: 0,
        rule: "Restaurants use pedir la cuenta",
        explanation:
          "This is a real-life collocation: pedir la cuenta. Learning the pair prevents awkward literal choices.",
        correctAnswerText: "pedir la cuenta",
        focusTags: ["collocation", "meaning"],
        wordIds: ["pedir"],
      },
      {
        id: "co2",
        type: "fill",
        skill: "collocations",
        modeLabel: "Active recall",
        prompt: "Do not translate word-by-word. Complete the natural phrase: Tengo _____.",
        answer: "hambre",
        rule: "Chunk the expression",
        explanation:
          "The natural phrase is tengo hambre. Treating it as a chunk makes it faster to retrieve in conversation.",
        correctAnswerText: "hambre",
        focusTags: ["recall", "collocation"],
        wordIds: ["hambre"],
      },
      {
        id: "co3",
        type: "choice",
        skill: "collocations",
        prompt: "Which sentence sounds natural?",
        options: [
          "Estoy cansado después de correr.",
          "Tengo cansado después de correr.",
          "Pido cansado después de correr.",
        ],
        answerIndex: 0,
        rule: "Words live inside patterns",
        explanation:
          "Cansado works naturally with estar because it describes a state. The pattern matters as much as the word itself.",
        correctAnswerText: "Estoy cansado después de correr.",
        focusTags: ["context", "collocation"],
        wordIds: ["cansado"],
      },
      {
        id: "co4",
        type: "sort",
        skill: "collocations",
        modeLabel: "Collocation sort",
        prompt: "Match each phrase piece to the verb it naturally goes with.",
        rule: "Use the natural partner, not a literal guess",
        categories: [
          { id: "tener", label: "tener" },
          { id: "hacer", label: "hacer" },
          { id: "comprar", label: "comprar" },
          { id: "pedir", label: "pedir" },
        ],
        focusTags: ["collocation", "meaning"],
        items: [
          {
            word: "hambre",
            correct: "tener",
            explanation: "Spanish says tener hambre, not a literal copy of English be hungry.",
            wordIds: ["hambre"],
          },
          {
            word: "la tarea",
            correct: "hacer",
            explanation: "Homework takes hacer in the most common everyday phrase.",
            wordIds: ["tarea"],
          },
          {
            word: "un boleto",
            correct: "comprar",
            explanation: "In travel context, the natural action is comprar un boleto.",
            wordIds: ["boleto"],
          },
          {
            word: "la cuenta",
            correct: "pedir",
            explanation: "At a restaurant, the natural phrase is pedir la cuenta.",
            wordIds: ["pedir"],
          },
        ],
      },
    ],
  },
];

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
  reviewFocusBoard: document.querySelector("#reviewFocusBoard"),
};

const lessonState = {
  activeStep: 0,
  streak: 0,
  responses: {},
  drafts: {},
  wordStats: {},
  reviewTick: 0,
  reviewPlan: [],
};

let practiceBlocks = [];
let allQuestions = [];
let questionMap = new Map();
let stepQuestionMap = new Map();

function normalizeInput(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!.,;:]/g, "")
    .replace(/\s+/g, " ");
}

function getWord(wordId) {
  return WORD_BANK[wordId] || null;
}

function getWordStats(wordId) {
  if (!lessonState.wordStats[wordId]) {
    lessonState.wordStats[wordId] = {
      attempts: 0,
      correct: 0,
      streak: 0,
      lastSeen: 0,
    };
  }
  return lessonState.wordStats[wordId];
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
        wordStats: lessonState.wordStats,
        reviewTick: lessonState.reviewTick,
        reviewPlan: lessonState.reviewPlan,
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

    lessonState.activeStep = Math.max(0, Math.floor(Number(parsed.activeStep) || 0));
    lessonState.streak = Math.max(0, Math.floor(Number(parsed.streak) || 0));
    lessonState.reviewTick = Math.max(0, Math.floor(Number(parsed.reviewTick) || 0));

    lessonState.responses = parsed.responses && typeof parsed.responses === "object" ? parsed.responses : {};
    lessonState.drafts = parsed.drafts && typeof parsed.drafts === "object" ? parsed.drafts : {};
    lessonState.reviewPlan = Array.isArray(parsed.reviewPlan) ? parsed.reviewPlan : [];
    lessonState.wordStats = {};

    if (parsed.wordStats && typeof parsed.wordStats === "object") {
      for (const [wordId, stats] of Object.entries(parsed.wordStats)) {
        if (!WORD_BANK[wordId] || !stats || typeof stats !== "object") {
          continue;
        }
        lessonState.wordStats[wordId] = {
          attempts: Math.max(0, Math.floor(Number(stats.attempts) || 0)),
          correct: Math.max(0, Math.floor(Number(stats.correct) || 0)),
          streak: Math.max(0, Math.floor(Number(stats.streak) || 0)),
          lastSeen: Math.max(0, Math.floor(Number(stats.lastSeen) || 0)),
        };
      }
    }
  } catch (_error) {
    lessonState.activeStep = 0;
    lessonState.streak = 0;
    lessonState.responses = {};
    lessonState.drafts = {};
    lessonState.wordStats = {};
    lessonState.reviewTick = 0;
    lessonState.reviewPlan = [];
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

function validateReviewPlan(plan) {
  return Array.isArray(plan) && plan.length > 0 && plan.every((entry) => {
    const word = getWord(entry.wordId);
    return word && word.reviewable && (entry.kind === "recall" || entry.kind === "context") && typeof entry.id === "string";
  });
}

function clearReviewQuestionState() {
  Object.keys(lessonState.responses).forEach((questionId) => {
    if (questionId.startsWith("review-")) {
      delete lessonState.responses[questionId];
    }
  });
  Object.keys(lessonState.drafts).forEach((questionId) => {
    if (questionId.startsWith("review-")) {
      delete lessonState.drafts[questionId];
    }
  });
}

function getAccuracy(stats) {
  return stats.attempts === 0 ? 0 : stats.correct / stats.attempts;
}

function getWordPriority(wordId) {
  const word = getWord(wordId);
  const stats = getWordStats(wordId);
  const accuracy = getAccuracy(stats);
  const gap = Math.max(0, lessonState.reviewTick - stats.lastSeen);
  const newWordBonus = stats.attempts === 0 ? 52 : 0;
  const accuracyPenalty = (1 - accuracy) * 42;
  const streakPenalty = Math.max(0, 3 - stats.streak) * 7;
  const gapBonus = Math.min(18, gap * 2.5);
  const lowAttemptBonus = stats.attempts < 2 ? 12 : 0;
  const frequencyBonus = Math.max(0, 4 - (word?.frequencyRank || 3)) * 3;
  return newWordBonus + accuracyPenalty + streakPenalty + gapBonus + lowAttemptBonus + frequencyBonus;
}

function getWeakWordEntries(limit = 6) {
  return Object.values(WORD_BANK)
    .filter((word) => word.reviewable)
    .map((word) => ({
      word,
      stats: getWordStats(word.id),
      priority: getWordPriority(word.id),
    }))
    .sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      if (a.word.frequencyRank !== b.word.frequencyRank) {
        return a.word.frequencyRank - b.word.frequencyRank;
      }
      return a.word.word.localeCompare(b.word.word);
    })
    .slice(0, limit);
}

function getReviewReason(entry) {
  const { stats } = entry;
  const accuracy = getAccuracy(stats);
  if (stats.attempts === 0) {
    return "New word. It has not been recalled yet.";
  }
  if (accuracy < 0.6) {
    return "Low accuracy. Bring it back quickly before it hardens into a miss.";
  }
  if (stats.streak < 2) {
    return "Unstable recall. It needs another clean answer soon.";
  }
  return "Stable, but due again so the memory stays active.";
}

function getReviewBadge(entry) {
  const stats = entry.stats;
  const accuracy = getAccuracy(stats);
  if (stats.attempts === 0 || accuracy < 0.6) {
    return { label: "Review now", className: "review-badge is-high" };
  }
  if (stats.streak < 2) {
    return { label: "Review soon", className: "review-badge is-mid" };
  }
  return { label: "Keep warm", className: "review-badge" };
}

function buildReviewPlan() {
  const weakWords = getWeakWordEntries(6);
  return weakWords.map((entry, index) => ({
    id: `review-${entry.word.id}-${index % 2 === 0 ? "recall" : "context"}-${index + 1}`,
    wordId: entry.word.id,
    kind: index % 2 === 0 ? "recall" : "context",
  }));
}

function buildReviewIntro() {
  const focus = getWeakWordEntries(3).map((entry) => entry.word.word).join(", ");
  if (!focus) {
    return "The review queue will surface the least stable words first.";
  }
  return `Current focus words: ${focus}. Review priority comes from accuracy, streak, and how recently each word was seen.`;
}

function buildReviewQuestion(entry) {
  const word = getWord(entry.wordId);
  if (!word) {
    return null;
  }

  const contextAnswer = word.reviewContextAnswer || word.word;

  if (entry.kind === "context") {
    return {
      id: entry.id,
      type: "choice",
      skill: "review",
      modeLabel: "Adaptive context review",
      prompt: `Choose the best word for the blank: ${word.clozeEs}`,
      options: word.reviewOptions,
      answerIndex: word.reviewOptions.findIndex((option) => normalizeInput(option) === normalizeInput(contextAnswer)),
      rule: "Review weak words in context",
      explanation: `The sentence context points to ${contextAnswer}. Adaptive review brings back weak words in real sentence frames so recall becomes usable, not isolated.`,
      correctAnswerText: contextAnswer,
      focusTags: ["review", "context"].filter((tag) => ISSUE_LABELS[tag]),
      wordIds: [word.id],
    };
  }

  return {
    id: entry.id,
    type: "fill",
    skill: "review",
    modeLabel: "Adaptive active recall",
    prompt: `Type the Spanish word for '${word.meaning}'. Visual clue: ${word.visual}`,
    answer: word.word,
    rule: "Pull the word out of memory",
    explanation: `Active recall is stronger than rereading. The target word is ${word.word}, and the visual clue helps tie meaning to an image instead of to English only.`,
    correctAnswerText: word.word,
    focusTags: ["review", "recall"].filter((tag) => ISSUE_LABELS[tag]),
    wordIds: [word.id],
  };
}

function initializeCourseData() {
  const storedPlanIsValid = validateReviewPlan(lessonState.reviewPlan);
  const storedPlanAnswered = storedPlanIsValid
    && lessonState.reviewPlan.every((entry) => lessonState.responses[entry.id]?.answered);

  if (!storedPlanIsValid || storedPlanAnswered) {
    clearReviewQuestionState();
    lessonState.reviewPlan = buildReviewPlan();
  }

  const reviewQuestions = lessonState.reviewPlan
    .map((entry) => buildReviewQuestion(entry))
    .filter(Boolean);

  practiceBlocks = BASE_PRACTICE_BLOCKS.concat({
    id: "practice-review",
    stepIndex: 7,
    title: "Adaptive recall queue",
    intro: buildReviewIntro,
    questions: reviewQuestions,
  });

  allQuestions = practiceBlocks.flatMap((block) => block.questions);
  questionMap = new Map(allQuestions.map((question) => [question.id, question]));
  stepQuestionMap = new Map();

  practiceBlocks.forEach((block) => {
    stepQuestionMap.set(block.stepIndex, block.questions.map((question) => question.id));
  });

  lessonState.activeStep = Math.max(0, Math.min(lessonState.activeStep, elements.steps.length - 1));

  Object.keys(lessonState.responses).forEach((questionId) => {
    if (!questionMap.has(questionId)) {
      delete lessonState.responses[questionId];
    }
  });

  Object.keys(lessonState.drafts).forEach((questionId) => {
    const question = questionMap.get(questionId);
    if (!question) {
      delete lessonState.drafts[questionId];
      return;
    }

    const draft = lessonState.drafts[questionId];
    if (question.type === "fill") {
      if (typeof draft !== "string") {
        delete lessonState.drafts[questionId];
      }
      return;
    }

    if (question.type === "choice") {
      if (typeof draft !== "string") {
        delete lessonState.drafts[questionId];
      }
      return;
    }

    if (question.type === "sort") {
      if (!draft || typeof draft !== "object" || Array.isArray(draft)) {
        delete lessonState.drafts[questionId];
        return;
      }
      const validCategories = new Set(question.categories.map((category) => category.id));
      const sanitized = {};
      for (const [itemIndex, selectedValue] of Object.entries(draft)) {
        if (validCategories.has(selectedValue)) {
          sanitized[itemIndex] = selectedValue;
        }
      }
      lessonState.drafts[questionId] = sanitized;
    }
  });
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

function renderWordDetails(wordIds = []) {
  const uniqueWords = Array.from(new Set(wordIds))
    .map((wordId) => getWord(wordId))
    .filter(Boolean);

  if (!uniqueWords.length) {
    return "";
  }

  return `
    <div class="feedback-word-stack">
      <div class="word-detail-grid">
        ${uniqueWords
          .map((word) => `
            <div class="word-detail-card">
              <strong>${word.word}</strong>
              <span class="word-detail-meta">${word.theme} • ${word.frequency}</span>
              <p><span class="mini-note-strong">Visual:</span> ${word.visual}</p>
              <p><span class="mini-note-strong">Example:</span> ${word.exampleEs}</p>
              <p><span class="mini-note-strong">Meaning:</span> ${word.exampleEn}</p>
              <div class="word-chip-grid">
                ${word.collocations.map((item) => `<span class="word-chip">${item}</span>`).join("")}
                ${(word.family || []).map((item) => `<span class="word-chip">${item}</span>`).join("")}
              </div>
            </div>
          `)
          .join("")}
      </div>
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
  return "";
}

function getQuestionWordIds(question) {
  if (Array.isArray(question.wordIds)) {
    return question.wordIds;
  }
  if (question.type === "sort") {
    return question.items.flatMap((item) => item.wordIds || []);
  }
  return [];
}

function renderPracticeBlocks() {
  practiceBlocks.forEach((block) => {
    const container = document.querySelector(`#${block.id}`);
    if (!container) {
      return;
    }

    const introText = typeof block.intro === "function" ? block.intro() : block.intro;

    container.innerHTML = `
      <div class="practice-block-header">
        <h4>${block.title}</h4>
        <p>${introText}</p>
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
          placeholder="Type the Spanish word"
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

function renderReviewFocusBoard() {
  if (!elements.reviewFocusBoard) {
    return;
  }

  const focusEntries = getWeakWordEntries(5);
  elements.reviewFocusBoard.innerHTML = focusEntries
    .map((entry) => {
      const stats = entry.stats;
      const accuracy = stats.attempts === 0 ? "new" : `${Math.round(getAccuracy(stats) * 100)}%`;
      const badge = getReviewBadge(entry);
      return `
        <div class="review-focus-card">
          <div class="review-focus-top">
            <strong>${entry.word.word}</strong>
            <span class="${badge.className}">${badge.label}</span>
          </div>
          <span>${entry.word.theme} • accuracy ${accuracy} • streak ${stats.streak}</span>
          <p>${getReviewReason(entry)}</p>
        </div>
      `;
    })
    .join("");
}

function updateProgress() {
  const answered = Object.values(lessonState.responses).filter((response) => response?.answered).length;
  const correct = Object.values(lessonState.responses).filter((response) => response?.correct).length;
  const percent = allQuestions.length === 0 ? 0 : Math.round((answered / allQuestions.length) * 100);

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
  renderReviewFocusBoard();
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

function updateWordStat(wordId, correct) {
  if (!getWord(wordId)) {
    return;
  }
  const stats = getWordStats(wordId);
  lessonState.reviewTick += 1;
  stats.attempts += 1;
  if (correct) {
    stats.correct += 1;
  }
  stats.streak = correct ? stats.streak + 1 : 0;
  stats.lastSeen = lessonState.reviewTick;
}

function setResponse(questionId, correct) {
  lessonState.responses[questionId] = {
    answered: true,
    correct,
  };
  lessonState.streak = correct ? lessonState.streak + 1 : 0;
}

function updateWordStatsForQuestion(question, correct) {
  getQuestionWordIds(question).forEach((wordId) => updateWordStat(wordId, correct));
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
      ${renderWordDetails(getQuestionWordIds(question))}
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
  const relatedWordIds = results.flatMap((entry) => entry.item.wordIds || []);
  return `
    <div class="feedback-panel ${correct ? "is-correct" : "is-wrong"}">
      <div class="feedback-head">
        <span>${correct ? "Correct sorting" : "Some entries need another look"}</span>
        <span>${question.rule}</span>
      </div>
      <p>${correct ? "You grouped the vocabulary by the right pattern." : "Look again at the relationship each item belongs to before you place it."}</p>
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
      ${renderWordDetails(relatedWordIds)}
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
    const accepted = [question.answer].concat(question.acceptedAnswers || []).map(normalizeInput);
    correct = accepted.includes(normalizeInput(input.value));
  } else if (selectedValue == null) {
    return { ready: false, message: "Choose an answer first." };
  } else if (question.type === "choice") {
    correct = Number(selectedValue) === question.answerIndex;
  }

  setResponse(question.id, correct);
  updateWordStatsForQuestion(question, correct);

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
  results.forEach((entry) => {
    (entry.item.wordIds || []).forEach((wordId) => updateWordStat(wordId, entry.correct));
  });
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
  updateProgress();
  saveLessonState();
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

function initVocabularyCourse() {
  loadLessonState();
  initializeCourseData();
  renderPracticeBlocks();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    restoreSavedQuestionState(question);
  });
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
  saveLessonState();
}

initVocabularyCourse();

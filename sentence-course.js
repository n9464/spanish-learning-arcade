const SKILL_LABELS = {
  order: "Word order",
  omission: "Subject omission",
  adjectives: "Adjectives",
  negation: "Negation",
  questions: "Questions",
  objectPronouns: "Object pronouns",
  placement: "Placement + clitics",
  review: "Mixed review",
};

const ISSUE_LABELS = {
  order: "Word order",
  omission: "Subject omission",
  adjectives: "Adjective placement",
  negation: "Negation",
  questions: "Question formation",
  objectPronouns: "Object pronouns",
  placement: "Pronoun placement",
  clitic: "Clitic doubling",
  nuance: "Meaning or emphasis",
};

const COURSE_STORAGE_KEY = "sentence-course-progress-v1";

function sentenceModel(parts, translation) {
  return { parts, translation };
}

const PRACTICE_BLOCKS = [
  {
    id: "practice-basic-order",
    stepIndex: 0,
    title: "Order builder",
    intro: "Start with the neutral Spanish sentence before you start bending order for emphasis.",
    questions: [
      {
        id: "bo1",
        type: "choice",
        skill: "order",
        prompt: "Which sentence shows the most neutral Spanish order?",
        options: ["El café lo toma Ana.", "Ana toma el café.", "Toma Ana el café."],
        answerIndex: 1,
        rule: "Neutral S + V + O order",
        explanation:
          "Spanish often starts with the same basic order as English: subject, then verb, then object. Start there unless you have a reason to front something.",
        correctAnswerText: "Ana toma el café.",
        focusTags: ["order"],
        sentenceModel: sentenceModel(
          [
            { text: "Ana", role: "subject" },
            { text: "toma", role: "verb" },
            { text: "el café", role: "object" },
          ],
          "Ana drinks the coffee.",
        ),
      },
      {
        id: "bo2",
        type: "order",
        skill: "order",
        modeLabel: "Sentence builder",
        prompt: "Build the neutral sentence: María buys flowers.",
        tokens: ["María", "compra", "flores"],
        acceptedOrders: [["María", "compra", "flores"]],
        rule: "Basic declarative order",
        explanation:
          "In a plain statement, Spanish normally puts the doer first, then the action, then the thing affected.",
        correctAnswerText: "María compra flores.",
        focusTags: ["order"],
        sentenceModel: sentenceModel(
          [
            { text: "María", role: "subject" },
            { text: "compra", role: "verb" },
            { text: "flores", role: "object" },
          ],
          "María buys flowers.",
        ),
      },
      {
        id: "bo3",
        type: "choice",
        skill: "order",
        prompt: "Why can Spanish move sentence parts more freely than English?",
        options: [
          "Because Spanish ignores grammar order entirely.",
          "Because Spanish uses verb endings, context, and pronouns to keep meaning clear.",
          "Because Spanish always inverts the verb and subject.",
        ],
        answerIndex: 1,
        rule: "Flexible order with clear signals",
        explanation:
          "Spanish still follows grammar, but verb endings, context, and pronouns let speakers move pieces for topic or emphasis without losing the meaning.",
        correctAnswerText: "Because Spanish uses verb endings, context, and pronouns to keep meaning clear.",
        focusTags: ["order", "nuance"],
      },
      {
        id: "bo4",
        type: "choice",
        skill: "order",
        prompt: "Which fronted sentence sounds marked because the object is moved forward for emphasis?",
        options: ["La profesora explica la lección.", "La lección la explica la profesora.", "Explica la profesora."],
        answerIndex: 1,
        rule: "Fronting for emphasis",
        explanation:
          "La lección la explica la profesora brings the object to the front, then uses la to keep the sentence clear. That makes the object feel topical or emphasized.",
        correctAnswerText: "La lección la explica la profesora.",
        focusTags: ["order", "clitic"],
        sentenceModel: sentenceModel(
          [
            { text: "La lección", role: "object" },
            { text: "la", role: "pronoun" },
            { text: "explica", role: "verb" },
            { text: "la profesora", role: "subject" },
          ],
          "The lesson, the teacher explains it.",
        ),
      },
    ],
  },
  {
    id: "practice-subject-omission",
    stepIndex: 1,
    title: "Subject omission drill",
    intro: "Train yourself to stop overusing yo, tú, él when the verb already tells the story.",
    questions: [
      {
        id: "so1",
        type: "choice",
        skill: "omission",
        prompt: "Which sentence sounds more natural with no special emphasis?",
        options: ["Yo hablo español en casa.", "Hablo español en casa.", "Yo yo hablo español en casa."],
        answerIndex: 1,
        rule: "Drop the subject when the verb ending is enough",
        explanation:
          "Hablo already tells you the subject is yo, so the pronoun is usually omitted unless you want contrast or emphasis.",
        correctAnswerText: "Hablo español en casa.",
        focusTags: ["omission"],
        sentenceModel: sentenceModel(
          [
            { text: "Hablo", role: "verb" },
            { text: "español", role: "object" },
            { text: "en casa", role: "object" },
          ],
          "I speak Spanish at home.",
        ),
      },
      {
        id: "so2",
        type: "choice",
        skill: "omission",
        prompt: "When is it especially useful to keep the subject pronoun in Spanish?",
        options: [
          "When you want contrast or emphasis: Yo no, pero ella sí.",
          "In every sentence, because Spanish needs the subject stated.",
          "Only in the future tense.",
        ],
        answerIndex: 0,
        rule: "Pronouns for contrast",
        explanation:
          "Spanish keeps pronouns when the speaker wants to contrast people, avoid ambiguity, or add emphasis.",
        correctAnswerText: "When you want contrast or emphasis: Yo no, pero ella sí.",
        focusTags: ["omission", "nuance"],
      },
      {
        id: "so3",
        type: "fill",
        skill: "omission",
        modeLabel: "Correction exercise",
        prompt: "Rewrite more naturally without unnecessary subject pronouns: Yo estudio español y yo trabajo por la noche.",
        answer: "Estudio español y trabajo por la noche.",
        acceptedAnswers: ["estudio español y trabajo por la noche"],
        rule: "Subject omission in connected statements",
        explanation:
          "Because both verbs already show the first-person subject, repeating yo in both clauses sounds heavy and unnecessary.",
        focusTags: ["omission"],
        correctAnswerText: "Estudio español y trabajo por la noche.",
      },
      {
        id: "so4",
        type: "order",
        skill: "omission",
        modeLabel: "Sentence builder",
        prompt: "Build the sentence that uses pronouns for contrast: I do not cook, but he does.",
        tokens: ["Yo", "no", "cocino,", "pero", "él", "sí"],
        acceptedOrders: [["Yo", "no", "cocino,", "pero", "él", "sí"]],
        rule: "Keep pronouns when contrast matters",
        explanation:
          "Here the pronouns yo and él matter because the sentence compares two different people.",
        correctAnswerText: "Yo no cocino, pero él sí.",
        focusTags: ["omission", "nuance"],
        sentenceModel: sentenceModel(
          [
            { text: "Yo", role: "subject" },
            { text: "no", role: "negation" },
            { text: "cocino", role: "verb" },
            { text: "pero", role: "object" },
            { text: "él", role: "subject" },
            { text: "sí", role: "object" },
          ],
          "I do not cook, but he does.",
        ),
      },
    ],
  },
  {
    id: "practice-adjectives",
    stepIndex: 2,
    title: "Adjective placement drills",
    intro: "See the default pattern first, then train the meaning shifts that happen when adjectives move before the noun.",
    questions: [
      {
        id: "ad1",
        type: "choice",
        skill: "adjectives",
        prompt: "Where do most descriptive adjectives normally go in Spanish?",
        options: ["Before the noun", "After the noun", "Only at the end of the sentence"],
        answerIndex: 1,
        rule: "Default adjective position",
        explanation:
          "The regular, descriptive pattern is noun + adjective: casa roja, libro interesante, profesor amable.",
        correctAnswerText: "After the noun",
        focusTags: ["adjectives"],
      },
      {
        id: "ad2",
        type: "order",
        skill: "adjectives",
        modeLabel: "Phrase builder",
        prompt: "Build the usual phrase: a red house.",
        tokens: ["una", "casa", "roja"],
        acceptedOrders: [["una", "casa", "roja"]],
        rule: "Noun + adjective default",
        explanation:
          "Roja comes after casa because this is a basic descriptive adjective, not a special meaning shift.",
        correctAnswerText: "una casa roja",
        focusTags: ["adjectives"],
        sentenceModel: sentenceModel(
          [
            { text: "una casa", role: "object" },
            { text: "roja", role: "adjective" },
          ],
          "a red house",
        ),
      },
      {
        id: "ad3",
        type: "choice",
        skill: "adjectives",
        prompt: "Which phrase means a great man rather than a big man?",
        options: ["un hombre grande", "un gran hombre", "un hombre gran"],
        answerIndex: 1,
        rule: "Meaning shift with adjective position",
        explanation:
          "Gran before the noun often gives a figurative or evaluative meaning: un gran hombre = a great man. After the noun, grande usually means physically big.",
        correctAnswerText: "un gran hombre",
        focusTags: ["adjectives", "nuance"],
      },
      {
        id: "ad4",
        type: "fill",
        skill: "adjectives",
        modeLabel: "Correction exercise",
        prompt: "Rewrite with the usual adjective order: blanca casa",
        answer: "casa blanca",
        acceptedAnswers: ["la casa blanca", "una casa blanca"],
        rule: "Default descriptive adjective order",
        explanation:
          "Without a special stylistic reason, color adjectives normally follow the noun in Spanish.",
        correctAnswerText: "casa blanca",
        focusTags: ["adjectives"],
        sentenceModel: sentenceModel(
          [
            { text: "casa", role: "object" },
            { text: "blanca", role: "adjective" },
          ],
          "white house",
        ),
      },
    ],
  },
  {
    id: "practice-negation",
    stepIndex: 3,
    title: "Negation drills",
    intro: "Spanish negation is systematic: put no before the conjugated verb, and let negative words stack naturally.",
    questions: [
      {
        id: "ng1",
        type: "choice",
        skill: "negation",
        prompt: "Where does no normally go in a basic negative sentence?",
        options: ["Right before the conjugated verb", "At the end of the sentence", "After the object"],
        answerIndex: 0,
        rule: "Placement of no",
        explanation:
          "No goes directly before the conjugated verb: No estudio, no viene, no lo sé.",
        correctAnswerText: "Right before the conjugated verb",
        focusTags: ["negation"],
      },
      {
        id: "ng2",
        type: "order",
        skill: "negation",
        modeLabel: "Sentence builder",
        prompt: "Build the natural negative sentence: I do not see anything.",
        tokens: ["No", "veo", "nada"],
        acceptedOrders: [["No", "veo", "nada"]],
        rule: "No + verb + negative word",
        explanation:
          "After no, Spanish often uses another negative word like nada, nadie, nunca, or tampoco. That is standard Spanish, not an error.",
        correctAnswerText: "No veo nada.",
        focusTags: ["negation"],
        sentenceModel: sentenceModel(
          [
            { text: "No", role: "negation" },
            { text: "veo", role: "verb" },
            { text: "nada", role: "negation" },
          ],
          "I do not see anything.",
        ),
      },
      {
        id: "ng3",
        type: "choice",
        skill: "negation",
        prompt: "Which sentence is correct when the negative word comes before the verb?",
        options: ["No nunca llego tarde.", "Nunca llego tarde.", "Llego no nunca tarde."],
        answerIndex: 1,
        rule: "Negative words before the verb",
        explanation:
          "If nunca, nadie, nada, or tampoco comes before the verb, Spanish usually does not add no as well: Nunca llego tarde.",
        correctAnswerText: "Nunca llego tarde.",
        focusTags: ["negation"],
      },
      {
        id: "ng4",
        type: "fill",
        skill: "negation",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: No veo algo.",
        answer: "No veo nada.",
        acceptedAnswers: ["no veo nada"],
        rule: "Use negative words, not positive indefinites",
        explanation:
          "In a negative sentence, algo changes to nada, alguien to nadie, and también to tampoco.",
        correctAnswerText: "No veo nada.",
        focusTags: ["negation"],
      },
    ],
  },
  {
    id: "practice-questions",
    stepIndex: 4,
    title: "Question formation drills",
    intro: "Train yourself to stop building Spanish questions with English do-support.",
    questions: [
      {
        id: "qu1",
        type: "choice",
        skill: "questions",
        prompt: "How do you normally ask 'Do you live here?' in Spanish?",
        options: ["¿Haces vivir aquí?", "¿Vives aquí?", "¿Tú haces vivir aquí?"],
        answerIndex: 1,
        rule: "No do-support in Spanish",
        explanation:
          "Spanish does not add an extra helper like do. It simply uses the normal verb form with question punctuation and intonation.",
        correctAnswerText: "¿Vives aquí?",
        focusTags: ["questions"],
        sentenceModel: sentenceModel(
          [
            { text: "¿Vives", role: "verb" },
            { text: "aquí?", role: "object" },
          ],
          "Do you live here?",
        ),
      },
      {
        id: "qu2",
        type: "order",
        skill: "questions",
        modeLabel: "Question builder",
        prompt: "Build the information question: Where does Ana study?",
        tokens: ["¿Dónde", "estudia", "Ana?"],
        acceptedOrders: [["¿Dónde", "estudia", "Ana?"]],
        rule: "Question word at the front",
        explanation:
          "Question words like dónde, qué, cuándo, and cómo typically appear near the front of the sentence.",
        correctAnswerText: "¿Dónde estudia Ana?",
        focusTags: ["questions", "order"],
        sentenceModel: sentenceModel(
          [
            { text: "¿Dónde", role: "negation" },
            { text: "estudia", role: "verb" },
            { text: "Ana?", role: "subject" },
          ],
          "Where does Ana study?",
        ),
      },
      {
        id: "qu3",
        type: "choice",
        skill: "questions",
        prompt: "Which question sounds more neutral when you do not need special emphasis?",
        options: ["¿Vienes?", "¿Tú vienes?", "¿Haces venir?"],
        answerIndex: 0,
        rule: "Pronouns stay optional in questions too",
        explanation:
          "Spanish often omits the subject pronoun in questions just as it does in statements. Adding tú is possible, but it sounds more emphatic or contrastive.",
        correctAnswerText: "¿Vienes?",
        focusTags: ["questions", "omission"],
      },
      {
        id: "qu4",
        type: "fill",
        skill: "questions",
        modeLabel: "Correction exercise",
        prompt: "Correct the question: ¿Dónde tú vives?",
        answer: "¿Dónde vives?",
        acceptedAnswers: ["¿dónde vives tú?", "dónde vives", "dónde vives tú"],
        rule: "Natural question order",
        explanation:
          "Spanish usually prefers the question word first and does not need the subject pronoun unless you want emphasis.",
        correctAnswerText: "¿Dónde vives?",
        focusTags: ["questions", "omission", "order"],
      },
    ],
  },
  {
    id: "practice-object-pronouns",
    stepIndex: 5,
    title: "Object pronoun drills",
    intro: "Learn to separate what is affected from who receives something.",
    questions: [
      {
        id: "op1",
        type: "sort",
        skill: "objectPronouns",
        modeLabel: "Sort by function",
        prompt: "Sort the pronouns into direct and indirect object groups.",
        rule: "Direct vs indirect object pronouns",
        categories: [
          { id: "direct", label: "Direct object" },
          { id: "indirect", label: "Indirect object" },
        ],
        focusTags: ["objectPronouns"],
        items: [
          { word: "lo", correct: "direct", explanation: "lo replaces a masculine singular direct object." },
          { word: "la", correct: "direct", explanation: "la replaces a feminine singular direct object." },
          { word: "los", correct: "direct", explanation: "los replaces a masculine plural direct object." },
          { word: "las", correct: "direct", explanation: "las replaces a feminine plural direct object." },
          { word: "le", correct: "indirect", explanation: "le replaces the recipient or beneficiary in singular." },
          { word: "les", correct: "indirect", explanation: "les replaces the recipient or beneficiary in plural." },
        ],
      },
      {
        id: "op2",
        type: "choice",
        skill: "objectPronouns",
        prompt: "In the sentence 'Le doy el libro', what does le represent?",
        options: ["The book itself", "The person receiving the book", "The subject doing the action"],
        answerIndex: 1,
        rule: "Indirect object meaning",
        explanation:
          "Le answers 'to whom?' or 'for whom?'. In Le doy el libro, the book is the direct object and le is the recipient.",
        correctAnswerText: "The person receiving the book",
        focusTags: ["objectPronouns"],
        sentenceModel: sentenceModel(
          [
            { text: "Le", role: "pronoun" },
            { text: "doy", role: "verb" },
            { text: "el libro", role: "object" },
          ],
          "I give the book to him / her / you.",
        ),
      },
      {
        id: "op3",
        type: "fill",
        skill: "objectPronouns",
        modeLabel: "Pronoun swap",
        prompt: "Replace the direct object with a pronoun: Veo la película.",
        answer: "La veo.",
        acceptedAnswers: ["la veo"],
        rule: "Direct object pronouns replace the thing seen or affected",
        explanation:
          "La replaces la película, and direct object pronouns normally come before the conjugated verb.",
        correctAnswerText: "La veo.",
        focusTags: ["objectPronouns", "placement"],
        sentenceModel: sentenceModel(
          [
            { text: "La", role: "pronoun" },
            { text: "veo", role: "verb" },
          ],
          "I see it.",
        ),
      },
      {
        id: "op4",
        type: "choice",
        skill: "objectPronouns",
        prompt: "What happens when le or les appears before lo, la, los, or las?",
        options: [
          "Nothing changes: le lo doy.",
          "Le or les changes to se: se lo doy.",
          "The direct object pronoun disappears.",
        ],
        answerIndex: 1,
        rule: "se before direct object pronouns",
        explanation:
          "Spanish avoids le lo and les lo combinations. Instead, le and les become se: Se lo doy.",
        correctAnswerText: "Le or les changes to se: se lo doy.",
        focusTags: ["objectPronouns", "placement"],
      },
    ],
  },
  {
    id: "practice-placement",
    stepIndex: 6,
    title: "Placement and clitic drills",
    intro: "This is where learners usually break sentence flow. Train the placement pattern until it feels automatic.",
    questions: [
      {
        id: "pl1",
        type: "choice",
        skill: "placement",
        prompt: "Which sentence places the direct object pronoun correctly before a conjugated verb?",
        options: ["Quiero lo.", "Lo quiero.", "Quiero él lo."],
        answerIndex: 1,
        rule: "Pronouns before conjugated verbs",
        explanation:
          "With a conjugated verb like quiero, the object pronoun normally comes before it: lo quiero, la veo, le escribo.",
        correctAnswerText: "Lo quiero.",
        focusTags: ["placement"],
        sentenceModel: sentenceModel(
          [
            { text: "Lo", role: "pronoun" },
            { text: "quiero", role: "verb" },
          ],
          "I want it.",
        ),
      },
      {
        id: "pl2",
        type: "choice",
        skill: "placement",
        prompt: "Which sentence correctly attaches the pronoun to the infinitive?",
        options: ["Quiero verlo.", "Quiero lo ver.", "Lo quiero verlo."],
        answerIndex: 0,
        rule: "Pronouns can attach to infinitives",
        explanation:
          "When an infinitive follows another verb, the pronoun can attach to the infinitive: quiero verlo. It can also go before the conjugated verb: lo quiero ver.",
        correctAnswerText: "Quiero verlo.",
        focusTags: ["placement"],
        sentenceModel: sentenceModel(
          [
            { text: "Quiero", role: "verb" },
            { text: "verlo", role: "object" },
          ],
          "I want to see it.",
        ),
      },
      {
        id: "pl3",
        type: "fill",
        skill: "placement",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: Doy le el libro a Ana.",
        answer: "Le doy el libro a Ana.",
        acceptedAnswers: ["le doy el libro a ana", "le doy el libro a ana."],
        rule: "Indirect object pronouns before conjugated verbs",
        explanation:
          "Le must come before the conjugated verb doy. The recipient can still appear later as a + noun: a Ana.",
        correctAnswerText: "Le doy el libro a Ana.",
        focusTags: ["placement", "objectPronouns"],
        sentenceModel: sentenceModel(
          [
            { text: "Le", role: "pronoun" },
            { text: "doy", role: "verb" },
            { text: "el libro", role: "object" },
            { text: "a Ana", role: "object" },
          ],
          "I give Ana the book.",
        ),
      },
      {
        id: "pl4",
        type: "choice",
        skill: "placement",
        prompt: "Which sentence shows natural clitic doubling with a person?",
        options: ["A María veo.", "A María la veo.", "La veo María a."],
        answerIndex: 1,
        rule: "Clitic doubling with topicalized or animate objects",
        explanation:
          "When a person is introduced with a + noun, Spanish often also uses the matching pronoun: A María la veo.",
        correctAnswerText: "A María la veo.",
        focusTags: ["placement", "clitic"],
        sentenceModel: sentenceModel(
          [
            { text: "A María", role: "object" },
            { text: "la", role: "pronoun" },
            { text: "veo", role: "verb" },
          ],
          "I see María.",
        ),
      },
      {
        id: "pl5",
        type: "order",
        skill: "placement",
        modeLabel: "Sentence builder",
        prompt: "Build the correct double-pronoun sentence: I give it to him / her.",
        tokens: ["Se", "lo", "doy"],
        acceptedOrders: [["Se", "lo", "doy"]],
        rule: "Indirect + direct pronoun order",
        explanation:
          "When le or les comes before lo, la, los, or las, it changes to se. The usual order is indirect pronoun + direct pronoun + verb.",
        correctAnswerText: "Se lo doy.",
        focusTags: ["placement", "objectPronouns"],
        sentenceModel: sentenceModel(
          [
            { text: "Se", role: "pronoun" },
            { text: "lo", role: "pronoun" },
            { text: "doy", role: "verb" },
          ],
          "I give it to him / her / you.",
        ),
      },
    ],
  },
  {
    id: "practice-mixed-review",
    stepIndex: 7,
    title: "Mixed review",
    intro: "Now mix order, omission, negation, adjectives, and pronouns the way real sentences do.",
    questions: [
      {
        id: "rv1",
        type: "choice",
        skill: "review",
        prompt: "Which sentence is the best neutral translation of 'We do not know the answer'?",
        options: ["Nosotros no sabemos la respuesta.", "No sabemos la respuesta.", "La respuesta no sabemos."],
        answerIndex: 1,
        rule: "Omit the subject when not needed",
        explanation:
          "No sabemos already shows the subject clearly. The neutral Spanish sentence does not need nosotros unless you want contrast.",
        correctAnswerText: "No sabemos la respuesta.",
        focusTags: ["omission", "negation"],
      },
      {
        id: "rv2",
        type: "order",
        skill: "review",
        modeLabel: "Sentence builder",
        prompt: "Build the sentence: I never buy expensive books.",
        tokens: ["Nunca", "compro", "libros", "caros"],
        acceptedOrders: [["Nunca", "compro", "libros", "caros"]],
        rule: "Negative word + verb + noun + adjective",
        explanation:
          "Nunca can stand before the verb, so no is unnecessary. Caros follows libros because it is a descriptive adjective.",
        correctAnswerText: "Nunca compro libros caros.",
        focusTags: ["negation", "adjectives", "order"],
        sentenceModel: sentenceModel(
          [
            { text: "Nunca", role: "negation" },
            { text: "compro", role: "verb" },
            { text: "libros", role: "object" },
            { text: "caros", role: "adjective" },
          ],
          "I never buy expensive books.",
        ),
      },
      {
        id: "rv3",
        type: "choice",
        skill: "review",
        prompt: "Which question is built naturally in Spanish?",
        options: ["¿Qué tú quieres?", "¿Qué quieres?", "¿Haces querer qué?"],
        answerIndex: 1,
        rule: "Question word + natural verb structure",
        explanation:
          "Spanish usually puts the question word first and drops the subject pronoun unless it is needed for emphasis.",
        correctAnswerText: "¿Qué quieres?",
        focusTags: ["questions", "omission"],
      },
      {
        id: "rv4",
        type: "choice",
        skill: "review",
        prompt: "Which sentence correctly combines clitic doubling and object pronoun placement?",
        options: ["A Luis le doy las llaves.", "A Luis doy le las llaves.", "Le las doy a Luis."],
        answerIndex: 0,
        rule: "Recipient doubling + pronoun before verb",
        explanation:
          "Le doubles the recipient A Luis and appears before doy. The direct object stays as las llaves in the full sentence.",
        correctAnswerText: "A Luis le doy las llaves.",
        focusTags: ["placement", "clitic", "objectPronouns"],
      },
    ],
  },
  {
    id: "practice-correction-lab",
    stepIndex: 7,
    title: "Correction lab",
    intro: "Fix the kinds of mistakes English speakers make when they map English structure directly onto Spanish.",
    questions: [
      {
        id: "cr1",
        type: "fill",
        skill: "review",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: Ella no ve nadie.",
        answer: "Ella no ve a nadie.",
        acceptedAnswers: ["no ve a nadie", "ella no ve a nadie", "no ve a nadie."],
        rule: "Negative structure with a person object",
        explanation:
          "After no, Spanish uses the negative word nadie, and when nadie refers to a person as a direct object, a is standard: no ve a nadie.",
        correctAnswerText: "Ella no ve a nadie.",
        focusTags: ["negation", "objectPronouns"],
      },
      {
        id: "cr2",
        type: "fill",
        skill: "review",
        modeLabel: "Correction exercise",
        prompt: "Correct the sentence: Quiero lo comprar.",
        answer: "Lo quiero comprar.",
        acceptedAnswers: ["quiero comprarlo", "lo quiero comprar", "quiero comprarlo."],
        rule: "Pronoun placement with infinitives",
        explanation:
          "With an infinitive after a conjugated verb, Spanish allows two good placements: lo quiero comprar or quiero comprarlo. Quiero lo comprar is not grammatical.",
        correctAnswerText: "Lo quiero comprar. / Quiero comprarlo.",
        focusTags: ["placement"],
      },
      {
        id: "cr3",
        type: "fill",
        skill: "review",
        modeLabel: "Correction exercise",
        prompt: "Correct the phrase: interesante libro",
        answer: "libro interesante",
        acceptedAnswers: ["un libro interesante", "el libro interesante"],
        rule: "Default adjective placement",
        explanation:
          "Most descriptive adjectives, including interesante, normally go after the noun unless you have a specific stylistic reason.",
        correctAnswerText: "libro interesante",
        focusTags: ["adjectives"],
      },
      {
        id: "cr4",
        type: "choice",
        skill: "review",
        prompt: "Which sentence fixes the English-style mistake in '¿Tú haces estudiar aquí?'",
        options: ["¿Tú estudias aquí?", "¿Estudias aquí?", "Both A and B are grammatical, but B is more neutral."],
        answerIndex: 2,
        rule: "No do-support + optional subject",
        explanation:
          "Spanish asks the question with the normal verb: ¿Estudias aquí? The version with tú is also grammatical, but it sounds more marked. The wrong part is the helper verb pattern.",
        correctAnswerText: "Both A and B are grammatical, but B is more neutral.",
        focusTags: ["questions", "omission"],
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
  steps: [...document.querySelectorAll(".sentence-step")],
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

function normalizeOrderSequence(sequence) {
  return normalizeInput(sequence.join(" "));
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
          continue;
        }

        if (question.type === "order" && Array.isArray(draft)) {
          const valid = [];
          const seen = new Set();
          draft.forEach((value) => {
            const index = Number(value);
            if (Number.isInteger(index) && index >= 0 && index < question.tokens.length && !seen.has(index)) {
              valid.push(index);
              seen.add(index);
            }
          });
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
  if (question.modeLabel) {
    return question.modeLabel;
  }
  if (question.type === "choice") {
    return "Multiple choice";
  }
  if (question.type === "fill") {
    return "Fill the sentence";
  }
  if (question.type === "sort") {
    return "Sorting activity";
  }
  if (question.type === "order") {
    return "Sentence builder";
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

function renderComparison(question) {
  if (!question.comparison) {
    return "";
  }

  return `
    <div class="compare-card feedback-compare">
      <div class="compare-line"><span>English</span><strong>${question.comparison.english}</strong></div>
      <div class="compare-line"><span>Spanish</span><strong>${question.comparison.spanish}</strong></div>
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
  if (question.type === "order" && question.acceptedOrders?.[0]) {
    return question.acceptedOrders[0].join(" ");
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
          placeholder="Type the correct sentence or form"
          data-fill-question="${question.id}"
        />
        <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
      </div>
    `;
  }

  if (question.type === "sort") {
    return `
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
    `;
  }

  if (question.type === "order") {
    return `
      <div class="order-builder">
        <p class="question-helper">Tap the chunks in the order you want them to appear.</p>
        <div class="order-bank" data-order-bank="${question.id}">${renderOrderBank(question, [])}</div>
        <div class="order-result" data-order-result="${question.id}">${renderOrderResult(question, [])}</div>
        <div class="order-controls">
          <button class="btn-secondary" type="button" data-order-clear="${question.id}">Clear</button>
          <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
        </div>
      </div>
    `;
  }

  return "";
}

function renderOrderBank(question, selectedIndexes) {
  const selectedSet = new Set(selectedIndexes);
  const buttons = question.tokens
    .map((token, index) => {
      if (selectedSet.has(index)) {
        return "";
      }
      return `
        <button class="order-token" type="button" data-order-question="${question.id}" data-order-index="${index}">
          ${token}
        </button>
      `;
    })
    .join("");

  return buttons || `<span class="order-placeholder">All chunks are in your sentence.</span>`;
}

function renderOrderResult(question, selectedIndexes) {
  if (!selectedIndexes.length) {
    return `<span class="order-placeholder">Your sentence will appear here.</span>`;
  }

  return selectedIndexes
    .map(
      (index, resultIndex) => `
        <button
          class="order-chip"
          type="button"
          data-order-remove="${question.id}"
          data-order-result-index="${resultIndex}"
        >
          ${question.tokens[index]}
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

function applyOrderDraft(questionId) {
  const question = questionMap.get(questionId);
  if (!question || question.type !== "order") {
    return;
  }

  const draft = Array.isArray(lessonState.drafts[questionId]) ? lessonState.drafts[questionId] : [];
  const bank = document.querySelector(`[data-order-bank="${questionId}"]`);
  const result = document.querySelector(`[data-order-result="${questionId}"]`);
  if (bank) {
    bank.innerHTML = renderOrderBank(question, draft);
  }
  if (result) {
    result.innerHTML = renderOrderResult(question, draft);
  }
}

function handleOrderAdd(button) {
  const questionId = button.dataset.orderQuestion;
  const index = Number(button.dataset.orderIndex);
  const question = questionMap.get(questionId);
  if (!question || question.type !== "order" || !Number.isInteger(index)) {
    return;
  }

  const draft = Array.isArray(lessonState.drafts[questionId]) ? [...lessonState.drafts[questionId]] : [];
  if (!draft.includes(index)) {
    draft.push(index);
    lessonState.drafts[questionId] = draft;
    applyOrderDraft(questionId);
    saveLessonState();
  }
}

function handleOrderRemove(button) {
  const questionId = button.dataset.orderRemove;
  const resultIndex = Number(button.dataset.orderResultIndex);
  const question = questionMap.get(questionId);
  if (!question || question.type !== "order" || !Number.isInteger(resultIndex)) {
    return;
  }

  const draft = Array.isArray(lessonState.drafts[questionId]) ? [...lessonState.drafts[questionId]] : [];
  draft.splice(resultIndex, 1);
  lessonState.drafts[questionId] = draft;
  applyOrderDraft(questionId);
  saveLessonState();
}

function clearOrderDraft(questionId) {
  const question = questionMap.get(questionId);
  if (!question || question.type !== "order") {
    return;
  }

  lessonState.drafts[questionId] = [];
  applyOrderDraft(questionId);
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
      ${renderComparison(question)}
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
      <p>${correct ? "You matched all the pronouns correctly." : "Check which words answer what? and which answer to whom? / for whom?."}</p>
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

function evaluateOrderQuestion(question) {
  const draft = Array.isArray(lessonState.drafts[question.id]) ? lessonState.drafts[question.id] : [];
  if (draft.length !== question.tokens.length) {
    return { ready: false, message: "Build the full sentence first." };
  }

  const builtSequence = draft.map((index) => question.tokens[index]);
  const builtNormalized = normalizeOrderSequence(builtSequence);
  const accepted = (question.acceptedOrders || []).map((order) => normalizeOrderSequence(order));
  const correct = accepted.includes(builtNormalized);
  setResponse(question.id, correct);

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

  let result;
  if (question.type === "sort") {
    result = evaluateSortQuestion(question);
  } else if (question.type === "order") {
    result = evaluateOrderQuestion(question);
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

    if (question.type === "order") {
      applyOrderDraft(question.id);
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

    const orderButton = event.target.closest("[data-order-question]");
    if (orderButton) {
      handleOrderAdd(orderButton);
      return;
    }

    const removeOrderButton = event.target.closest("[data-order-remove]");
    if (removeOrderButton) {
      handleOrderRemove(removeOrderButton);
      return;
    }

    const clearOrderButton = event.target.closest("[data-order-clear]");
    if (clearOrderButton) {
      clearOrderDraft(clearOrderButton.dataset.orderClear);
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

function initSentenceCourse() {
  renderPracticeBlocks();
  loadLessonState();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    restoreSavedQuestionState(question);
  });
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });
}

initSentenceCourse();

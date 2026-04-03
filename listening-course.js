const SKILL_LABELS = {
  foundations: "Listening foundations",
  conjugation: "Conjugation hearing",
  droppedSubject: "Dropped subjects",
  soundContrast: "Sound contrast",
  reconstruction: "Reconstruction",
  dictation: "Dictation",
  speed: "Faster chunks",
  review: "Mixed review",
};

const ISSUE_LABELS = {
  foundations: "Listening routine",
  conjugation: "Conjugation clue",
  subject: "Subject clue",
  droppedSubject: "Dropped subject",
  sound: "Similar sound",
  soundContrast: "Sound contrast",
  transcript: "Transcript clue",
  reconstruction: "Reconstruction",
  dictation: "Dictation",
  spelling: "Spelling detail",
  tense: "Tense recognition",
  speed: "Speed ladder",
  review: "Mixed review",
};

const DIFFICULTY_SETTINGS = {
  slow: { label: "Slow warm-up", rate: 0.72 },
  guided: { label: "Guided speed", rate: 0.86 },
  natural: { label: "Natural speed", rate: 1.0 },
  challenge: { label: "Fast catch-it", rate: 1.12 },
};

const COURSE_STORAGE_KEY = "listening-course-progress-v1";

function transcriptModel(parts, translation, note) {
  return { parts, translation, note };
}

const PRACTICE_BLOCKS = [
  {
    id: "practice-foundations",
    stepIndex: 0,
    title: "Slow-start listening drill",
    intro: "Work slowly. Train your ear to catch the verb ending before you worry about every word.",
    questions: [
      {
        id: "fd1",
        type: "choice",
        skill: "foundations",
        difficulty: "slow",
        modeLabel: "Listen and identify",
        prompt: "Listen, then choose the subject the verb form points to.",
        audioText: "Hablo con mi vecina todas las tardes.",
        options: ["yo", "ella", "nosotros"],
        answerIndex: 0,
        rule: "-o normally signals yo",
        explanation:
          "The verb hablo ends in -o, so the listener should hear a first-person singular subject even though yo is not spoken.",
        correctAnswerText: "yo",
        focusTags: ["conjugation", "subject"],
        transcript: transcriptModel(
          [
            { text: "Hablo", role: "verb" },
            { text: "con mi vecina", role: "cue" },
            { text: "todas las tardes", role: "cue" },
          ],
          "I speak with my neighbor every afternoon.",
          "The ending -o gives the subject away before the rest of the sentence finishes.",
        ),
      },
      {
        id: "fd2",
        type: "choice",
        skill: "foundations",
        difficulty: "slow",
        modeLabel: "Listen and identify",
        prompt: "Which subject is understood in the audio?",
        audioText: "Vivimos cerca del parque.",
        options: ["nosotros", "ellos", "ella"],
        answerIndex: 0,
        rule: "-mos usually signals nosotros",
        explanation:
          "Vivimos carries the -mos ending, so the listener should infer nosotros / nosotras even with no pronoun spoken.",
        correctAnswerText: "nosotros",
        focusTags: ["conjugation", "droppedSubject"],
        transcript: transcriptModel(
          [
            { text: "Vivimos", role: "verb" },
            { text: "cerca del parque", role: "cue" },
          ],
          "We live near the park.",
          "Spanish often omits the subject pronoun because the verb ending already identifies it.",
        ),
      },
      {
        id: "fd3",
        type: "build",
        skill: "foundations",
        difficulty: "slow",
        modeLabel: "What did you hear?",
        prompt: "Listen and rebuild the sentence in order.",
        audioText: "Tengo una clase ahora.",
        answer: "Tengo una clase ahora.",
        acceptedAnswers: ["Tengo una clase ahora"],
        tokens: ["clase", "Tengo", "ahora", "una"],
        rule: "Catch the verb first, then rebuild",
        explanation:
          "The strongest clue is tengo. Once that lands, the rest of the sentence is easier to place around it.",
        correctAnswerText: "Tengo una clase ahora.",
        focusTags: ["foundations", "reconstruction", "conjugation"],
        transcript: transcriptModel(
          [
            { text: "Tengo", role: "verb" },
            { text: "una clase", role: "cue" },
            { text: "ahora", role: "cue" },
          ],
          "I have a class now.",
          "Start with the verb shape, then lock in the short noun phrase and time word.",
        ),
      },
      {
        id: "fd4",
        type: "choice",
        skill: "foundations",
        difficulty: "slow",
        modeLabel: "Listen and identify",
        prompt: "What should your ear catch first in this clip?",
        audioText: "Estudian en la biblioteca.",
        options: [
          "The ending -an on the verb",
          "A subject pronoun before the verb",
          "Only the place word biblioteca",
        ],
        answerIndex: 0,
        rule: "Verb ending first",
        explanation:
          "Estudian gives you the main structural clue right away: the final -an points to ellos / ellas / ustedes.",
        correctAnswerText: "The ending -an on the verb",
        focusTags: ["foundations", "conjugation"],
        transcript: transcriptModel(
          [
            { text: "Estudian", role: "verb" },
            { text: "en la biblioteca", role: "cue" },
          ],
          "They study in the library.",
          "The first useful listening move is catching the verb ending, not waiting for a subject pronoun.",
        ),
      },
    ],
  },
  {
    id: "practice-conjugation",
    stepIndex: 1,
    title: "Conjugation hearing drill",
    intro: "Now zoom in on the ending and use it to identify the person quickly.",
    questions: [
      {
        id: "cg1",
        type: "choice",
        skill: "conjugation",
        difficulty: "guided",
        modeLabel: "Listen and identify",
        prompt: "Which conjugation did you hear?",
        audioText: "Comen tarde los domingos.",
        options: ["ellos / ellas / ustedes comen", "yo como", "él come"],
        answerIndex: 0,
        rule: "-en often signals plural third person or ustedes",
        explanation:
          "Comen ends with -en, so your ear should hear a plural or ustedes-style subject, not yo or él.",
        correctAnswerText: "ellos / ellas / ustedes comen",
        focusTags: ["conjugation"],
        transcript: transcriptModel(
          [
            { text: "Comen", role: "verb" },
            { text: "tarde", role: "cue" },
            { text: "los domingos", role: "cue" },
          ],
          "They eat late on Sundays.",
          "The final -n matters. Missing it changes the subject completely.",
        ),
      },
      {
        id: "cg2",
        type: "choice",
        skill: "conjugation",
        difficulty: "guided",
        modeLabel: "Listen and identify",
        prompt: "Which ending gives the subject away here?",
        audioText: "Escribo mensajes a mi hermano.",
        options: ["-o", "-mos", "-n"],
        answerIndex: 0,
        rule: "-o marks first person singular in the present",
        explanation:
          "Escribo ends in -o, so the speaker is yo, even though yo never appears in the sentence.",
        correctAnswerText: "-o",
        focusTags: ["conjugation", "subject"],
        transcript: transcriptModel(
          [
            { text: "Escribo", role: "verb" },
            { text: "mensajes", role: "cue" },
            { text: "a mi hermano", role: "cue" },
          ],
          "I write messages to my brother.",
          "The first-person clue is in the ending, not in a spoken pronoun.",
        ),
      },
      {
        id: "cg3",
        type: "build",
        skill: "conjugation",
        difficulty: "guided",
        modeLabel: "What did you hear?",
        prompt: "Rebuild the sentence after listening.",
        audioText: "Aprendemos rápido en este curso.",
        answer: "Aprendemos rápido en este curso.",
        acceptedAnswers: ["Aprendemos rápido en este curso"],
        tokens: ["curso", "Aprendemos", "en", "rápido", "este"],
        rule: "Hear the -mos ending and anchor the sentence around it",
        explanation:
          "Aprendemos gives you the subject clue immediately. After that, rápido and en este curso complete the thought.",
        correctAnswerText: "Aprendemos rápido en este curso.",
        focusTags: ["conjugation", "reconstruction", "subject"],
        transcript: transcriptModel(
          [
            { text: "Aprendemos", role: "verb" },
            { text: "rápido", role: "cue" },
            { text: "en este curso", role: "cue" },
          ],
          "We learn quickly in this course.",
          "The plural subject is not spoken, but the ending gives it to you.",
        ),
      },
      {
        id: "cg4",
        type: "choice",
        skill: "conjugation",
        difficulty: "guided",
        modeLabel: "Listen and identify",
        prompt: "Which subject fits the audio best?",
        audioText: "Quiere salir temprano hoy.",
        options: ["él / ella / usted", "yo", "nosotros"],
        answerIndex: 0,
        rule: "Quiere is third-person singular / usted",
        explanation:
          "Quiere does not sound like quiero or queremos. The final -e points to él, ella, or usted.",
        correctAnswerText: "él / ella / usted",
        focusTags: ["conjugation", "soundContrast"],
        transcript: transcriptModel(
          [
            { text: "Quiere", role: "contrast" },
            { text: "salir", role: "cue" },
            { text: "temprano", role: "cue" },
            { text: "hoy", role: "cue" },
          ],
          "He / she wants to leave early today.",
          "This is where similar stems can trick you. The last syllable is doing the subject work.",
        ),
      },
    ],
  },
  {
    id: "practice-dropped-subject",
    stepIndex: 2,
    title: "Dropped-subject drill",
    intro: "Infer the subject from the verb when the pronoun never shows up.",
    questions: [
      {
        id: "ds1",
        type: "choice",
        skill: "droppedSubject",
        difficulty: "guided",
        modeLabel: "Listen and identify",
        prompt: "Who is the understood subject?",
        audioText: "Vamos al mercado después.",
        options: ["nosotros", "yo", "ellos"],
        answerIndex: 0,
        rule: "-mos points to nosotros",
        explanation:
          "Vamos already tells you the speaker means we. No separate nosotros is necessary.",
        correctAnswerText: "nosotros",
        focusTags: ["droppedSubject", "subject"],
        transcript: transcriptModel(
          [
            { text: "Vamos", role: "verb" },
            { text: "al mercado", role: "cue" },
            { text: "después", role: "cue" },
          ],
          "We are going to the market later.",
          "The pronoun is absent, but the ending still gives you the subject.",
        ),
      },
      {
        id: "ds2",
        type: "choice",
        skill: "droppedSubject",
        difficulty: "guided",
        modeLabel: "Listen and identify",
        prompt: "Which subject best matches the audio?",
        audioText: "Tienen mucha energía hoy.",
        options: ["ellos / ellas / ustedes", "yo", "nosotros"],
        answerIndex: 0,
        rule: "-en can signal plural third person or ustedes",
        explanation:
          "Tienen ends in -en, so your ear should infer a plural subject or ustedes.",
        correctAnswerText: "ellos / ellas / ustedes",
        focusTags: ["droppedSubject", "conjugation"],
        transcript: transcriptModel(
          [
            { text: "Tienen", role: "verb" },
            { text: "mucha energía", role: "cue" },
            { text: "hoy", role: "cue" },
          ],
          "They have a lot of energy today.",
          "You do not need a spoken pronoun if the verb ending already signals the subject.",
        ),
      },
      {
        id: "ds3",
        type: "choice",
        skill: "droppedSubject",
        difficulty: "guided",
        modeLabel: "Listen and identify",
        prompt: "Why does this clip not need a subject pronoun?",
        audioText: "Soy de Calgary, pero trabajo en Edmonton.",
        options: [
          "Because both verb forms already identify the speaker",
          "Because Spanish never uses subject pronouns",
          "Because cities replace subject pronouns",
        ],
        answerIndex: 0,
        rule: "Verb forms can carry the subject alone",
        explanation:
          "Soy and trabajo both point to first-person singular, so yo would add emphasis, not essential information.",
        correctAnswerText: "Because both verb forms already identify the speaker",
        focusTags: ["droppedSubject", "subject"],
        transcript: transcriptModel(
          [
            { text: "Soy", role: "verb" },
            { text: "de Calgary", role: "cue" },
            { text: "pero", role: "cue" },
            { text: "trabajo", role: "verb" },
            { text: "en Edmonton", role: "cue" },
          ],
          "I am from Calgary, but I work in Edmonton.",
          "Both verbs identify the same speaker without any spoken yo.",
        ),
      },
      {
        id: "ds4",
        type: "build",
        skill: "droppedSubject",
        difficulty: "guided",
        modeLabel: "What did you hear?",
        prompt: "Rebuild the sentence and infer the subject from the verb form.",
        audioText: "Estamos listos para salir.",
        answer: "Estamos listos para salir.",
        acceptedAnswers: ["Estamos listos para salir"],
        tokens: ["salir", "Estamos", "listos", "para"],
        rule: "The subject is hidden in estamos",
        explanation:
          "Estamos already signals nosotros / nosotras. The sentence never needs to say it directly.",
        correctAnswerText: "Estamos listos para salir.",
        focusTags: ["droppedSubject", "reconstruction", "subject"],
        transcript: transcriptModel(
          [
            { text: "Estamos", role: "verb" },
            { text: "listos", role: "subject" },
            { text: "para salir", role: "cue" },
          ],
          "We are ready to leave.",
          "The -mos ending and the plural adjective both point to a we-subject.",
        ),
      },
    ],
  },
  {
    id: "practice-sound-contrast",
    stepIndex: 3,
    title: "Similar-sound drill",
    intro: "Train your ear on the tiny sound detail that changes the subject or tense.",
    questions: [
      {
        id: "sc1",
        type: "choice",
        skill: "soundContrast",
        difficulty: "natural",
        modeLabel: "Listen and identify",
        prompt: "Which form did you hear?",
        audioText: "Hoy hablo con Ana.",
        options: ["hablo", "habló", "hablas"],
        answerIndex: 0,
        rule: "Stress and ending change the form",
        explanation:
          "The clip says hablo, first-person present. Habló would shift the stress and meaning to a completed past action.",
        correctAnswerText: "hablo",
        focusTags: ["soundContrast", "conjugation", "tense"],
        transcript: transcriptModel(
          [
            { text: "Hoy", role: "cue" },
            { text: "hablo", role: "contrast" },
            { text: "con Ana", role: "cue" },
          ],
          "Today I speak with Ana.",
          "The time word hoy also supports the present-tense reading.",
        ),
      },
      {
        id: "sc2",
        type: "choice",
        skill: "soundContrast",
        difficulty: "natural",
        modeLabel: "Listen and identify",
        prompt: "Did you hear a singular or plural subject?",
        audioText: "Viven en una casa pequeña.",
        options: ["singular", "plural", "there is no subject clue"],
        answerIndex: 1,
        rule: "Do not lose the final -n",
        explanation:
          "Viven is plural. If you miss the final -n, you can mistake it for vive and misread the whole sentence.",
        correctAnswerText: "plural",
        focusTags: ["soundContrast", "subject"],
        transcript: transcriptModel(
          [
            { text: "Viven", role: "contrast" },
            { text: "en una casa pequeña", role: "cue" },
          ],
          "They live in a small house.",
          "The plural ending is short, but it changes the subject completely.",
        ),
      },
      {
        id: "sc3",
        type: "choice",
        skill: "soundContrast",
        difficulty: "natural",
        modeLabel: "Listen and identify",
        prompt: "Which verb form is in the clip?",
        audioText: "Quiere más café.",
        options: ["quiero", "quiere", "queremos"],
        answerIndex: 1,
        rule: "Hear the final syllable, not only the stem",
        explanation:
          "Quiero and quiere share the stem, but the last vowel changes the subject. The clip uses third-person singular quiere.",
        correctAnswerText: "quiere",
        focusTags: ["soundContrast", "conjugation"],
        transcript: transcriptModel(
          [
            { text: "Quiere", role: "contrast" },
            { text: "más café", role: "cue" },
          ],
          "He / she wants more coffee.",
          "Stem-changing verbs still need the ending heard clearly.",
        ),
      },
      {
        id: "sc4",
        type: "choice",
        skill: "soundContrast",
        difficulty: "natural",
        modeLabel: "Listen and identify",
        prompt: "What meaning matches the audio best?",
        audioText: "Vienen mañana por la tarde.",
        options: [
          "More than one person is coming tomorrow afternoon",
          "One person is coming tomorrow afternoon",
          "I am coming tomorrow afternoon",
        ],
        answerIndex: 0,
        rule: "Plural ending = plural subject",
        explanation:
          "Vienen is plural. If the sentence were singular, it would be viene.",
        correctAnswerText: "More than one person is coming tomorrow afternoon",
        focusTags: ["soundContrast", "subject"],
        transcript: transcriptModel(
          [
            { text: "Vienen", role: "contrast" },
            { text: "mañana", role: "cue" },
            { text: "por la tarde", role: "cue" },
          ],
          "They are coming tomorrow afternoon.",
          "The final -n carries the plural idea under speed.",
        ),
      },
    ],
  },
  {
    id: "practice-reconstruction",
    stepIndex: 4,
    title: "Reconstruction drill",
    intro: "Rebuild the audio after listening. Use the transcript only after you commit to a guess.",
    questions: [
      {
        id: "rc1",
        type: "build",
        skill: "reconstruction",
        difficulty: "natural",
        modeLabel: "What did you hear?",
        prompt: "Listen and rebuild the sentence.",
        audioText: "Nos vemos después de clase.",
        answer: "Nos vemos después de clase.",
        acceptedAnswers: ["Nos vemos después de clase"],
        tokens: ["clase", "Nos", "vemos", "de", "después"],
        rule: "Catch the clitic and the verb together",
        explanation:
          "Nos and vemos travel as a unit in the sound. After that, después de clase completes the timing.",
        correctAnswerText: "Nos vemos después de clase.",
        focusTags: ["reconstruction", "transcript"],
        transcript: transcriptModel(
          [
            { text: "Nos", role: "subject" },
            { text: "vemos", role: "verb" },
            { text: "después", role: "cue" },
            { text: "de clase", role: "cue" },
          ],
          "See you after class / We will see each other after class.",
          "Short words at the front are easy to miss, so reconstruction slows you down enough to hear them.",
        ),
      },
      {
        id: "rc2",
        type: "choice",
        skill: "reconstruction",
        difficulty: "natural",
        modeLabel: "What did you hear?",
        prompt: "Which transcript matches the audio?",
        audioText: "Se queda en casa porque está cansado.",
        options: [
          "Se queda en casa porque está cansado.",
          "Se queda en clase porque está cansado.",
          "Se quedan en casa porque está cansado.",
        ],
        answerIndex: 0,
        rule: "Reconstruct by meaning and sound together",
        explanation:
          "Casa and clase are close enough to confuse if you only half-hear the sentence. The singular se queda also matters.",
        correctAnswerText: "Se queda en casa porque está cansado.",
        focusTags: ["reconstruction", "soundContrast"],
        transcript: transcriptModel(
          [
            { text: "Se queda", role: "verb" },
            { text: "en casa", role: "contrast" },
            { text: "porque", role: "cue" },
            { text: "está cansado", role: "cue" },
          ],
          "He / she stays home because he / she is tired.",
          "This task pushes you to hold both the sound shape and the meaning in working memory.",
        ),
      },
      {
        id: "rc3",
        type: "build",
        skill: "reconstruction",
        difficulty: "natural",
        modeLabel: "What did you hear?",
        prompt: "Listen and rebuild the sentence with the right word order.",
        audioText: "Voy a llamarte mañana por la noche.",
        answer: "Voy a llamarte mañana por la noche.",
        acceptedAnswers: ["Voy a llamarte mañana por la noche"],
        tokens: ["mañana", "Voy", "noche", "la", "llamarte", "por", "a"],
        rule: "Anchor the near future first",
        explanation:
          "Voy a marks the near future. Once that chunk lands, llamarte and por la noche are easier to place.",
        correctAnswerText: "Voy a llamarte mañana por la noche.",
        focusTags: ["reconstruction", "tense", "transcript"],
        transcript: transcriptModel(
          [
            { text: "Voy", role: "verb" },
            { text: "a", role: "cue" },
            { text: "llamarte", role: "cue" },
            { text: "mañana", role: "cue" },
            { text: "por la noche", role: "cue" },
          ],
          "I am going to call you tomorrow night.",
          "Listening gets easier when you recognize whole grammar chunks instead of isolated words.",
        ),
      },
      {
        id: "rc4",
        type: "choice",
        skill: "reconstruction",
        difficulty: "natural",
        modeLabel: "Listen and identify",
        prompt: "Which word in the clip carries the negation?",
        audioText: "No puedo abrir la puerta ahora.",
        options: ["no", "puedo", "ahora"],
        answerIndex: 0,
        rule: "Negation is small but important",
        explanation:
          "No is easy to miss because it is short, but it changes the entire meaning of the sentence.",
        correctAnswerText: "no",
        focusTags: ["reconstruction", "dictation", "transcript"],
        transcript: transcriptModel(
          [
            { text: "No", role: "cue" },
            { text: "puedo", role: "verb" },
            { text: "abrir la puerta", role: "cue" },
            { text: "ahora", role: "cue" },
          ],
          "I cannot open the door right now.",
          "Short function words often carry the biggest meaning difference.",
        ),
      },
    ],
  },
  {
    id: "practice-dictation",
    stepIndex: 5,
    title: "Dictation drill",
    intro: "Type exactly what you hear. Missing one small word is often the whole lesson.",
    questions: [
      {
        id: "dt1",
        type: "fill",
        skill: "dictation",
        difficulty: "natural",
        modeLabel: "Dictation",
        prompt: "Listen and type the full sentence.",
        audioText: "Tengo que salir ahora.",
        answer: "Tengo que salir ahora.",
        acceptedAnswers: ["Tengo que salir ahora"],
        rule: "Write back the full structure",
        explanation:
          "The dictation works only if you catch the whole structure: tengo + que + infinitive + time word.",
        correctAnswerText: "Tengo que salir ahora.",
        focusTags: ["dictation", "conjugation", "spelling"],
        transcript: transcriptModel(
          [
            { text: "Tengo", role: "verb" },
            { text: "que", role: "cue" },
            { text: "salir", role: "cue" },
            { text: "ahora", role: "cue" },
          ],
          "I have to leave now.",
          "Que is a small word, but dictation should force you to catch it.",
        ),
      },
      {
        id: "dt2",
        type: "fill",
        skill: "dictation",
        difficulty: "natural",
        modeLabel: "Dictation",
        prompt: "Listen and type the full sentence.",
        audioText: "No podemos llegar temprano hoy.",
        answer: "No podemos llegar temprano hoy.",
        acceptedAnswers: ["No podemos llegar temprano hoy"],
        rule: "Do not lose negation or the -mos ending",
        explanation:
          "No changes the meaning, and podemos tells you the subject is nosotros. Both details matter in dictation.",
        correctAnswerText: "No podemos llegar temprano hoy.",
        focusTags: ["dictation", "droppedSubject", "spelling"],
        transcript: transcriptModel(
          [
            { text: "No", role: "cue" },
            { text: "podemos", role: "verb" },
            { text: "llegar", role: "cue" },
            { text: "temprano", role: "cue" },
            { text: "hoy", role: "cue" },
          ],
          "We cannot arrive early today.",
          "Short negatives and plural endings are classic dictation trouble spots.",
        ),
      },
      {
        id: "dt3",
        type: "fill",
        skill: "dictation",
        difficulty: "natural",
        modeLabel: "Dictation",
        prompt: "Listen and type the full sentence.",
        audioText: "Ellos quieren aprender español.",
        answer: "Ellos quieren aprender español.",
        acceptedAnswers: ["Ellos quieren aprender español"],
        rule: "Catch the spoken subject and the stem-changing verb",
        explanation:
          "Here the subject pronoun is spoken, so your dictation should include it. Quieren also needs the plural ending.",
        correctAnswerText: "Ellos quieren aprender español.",
        focusTags: ["dictation", "conjugation", "subject"],
        transcript: transcriptModel(
          [
            { text: "Ellos", role: "subject" },
            { text: "quieren", role: "verb" },
            { text: "aprender español", role: "cue" },
          ],
          "They want to learn Spanish.",
          "Sometimes the pronoun is spoken for clarity, so dictation has to reflect that too.",
        ),
      },
      {
        id: "dt4",
        type: "fill",
        skill: "dictation",
        difficulty: "natural",
        modeLabel: "Dictation",
        prompt: "Listen and type the full sentence.",
        audioText: "Me levanto a las seis.",
        answer: "Me levanto a las seis.",
        acceptedAnswers: ["Me levanto a las seis"],
        rule: "Do not miss reflexive pronouns",
        explanation:
          "Me is short and easy to lose, but it changes the whole meaning of the sentence.",
        correctAnswerText: "Me levanto a las seis.",
        focusTags: ["dictation", "spelling", "transcript"],
        transcript: transcriptModel(
          [
            { text: "Me", role: "cue" },
            { text: "levanto", role: "verb" },
            { text: "a las seis", role: "cue" },
          ],
          "I get up at six.",
          "Reflexive words are tiny, so dictation trains you not to skip them.",
        ),
      },
    ],
  },
  {
    id: "practice-speed",
    stepIndex: 6,
    title: "Speed-ladder drill",
    intro: "Now the clips are longer and faster. Focus on the tense shape before you chase every word.",
    questions: [
      {
        id: "sp1",
        type: "choice",
        skill: "speed",
        difficulty: "challenge",
        modeLabel: "Listen and identify",
        prompt: "Which structure do you hear in the clip?",
        audioText: "Estamos estudiando porque mañana hay un examen.",
        options: ["present progressive", "simple future", "imperative"],
        answerIndex: 0,
        rule: "Estar + gerund forms the present progressive",
        explanation:
          "Estamos estudiando is the clear present progressive pattern. Catching this chunk fast makes the whole sentence easier.",
        correctAnswerText: "present progressive",
        focusTags: ["speed", "tense", "conjugation"],
        transcript: transcriptModel(
          [
            { text: "Estamos", role: "verb" },
            { text: "estudiando", role: "cue" },
            { text: "porque", role: "cue" },
            { text: "mañana", role: "cue" },
            { text: "hay un examen", role: "cue" },
          ],
          "We are studying because there is an exam tomorrow.",
          "This is a good example of hearing a whole grammar chunk instead of isolated words.",
        ),
      },
      {
        id: "sp2",
        type: "fill",
        skill: "speed",
        difficulty: "challenge",
        modeLabel: "Dictation",
        prompt: "Listen at speed and type the full sentence.",
        audioText: "Voy a llamar a mi madre esta noche.",
        answer: "Voy a llamar a mi madre esta noche.",
        acceptedAnswers: ["Voy a llamar a mi madre esta noche"],
        rule: "Voy a + infinitive signals the near future",
        explanation:
          "The clue is the chunk voy a llamar. If you catch that early, the rest of the sentence becomes manageable.",
        correctAnswerText: "Voy a llamar a mi madre esta noche.",
        focusTags: ["speed", "dictation", "tense"],
        transcript: transcriptModel(
          [
            { text: "Voy", role: "verb" },
            { text: "a llamar", role: "cue" },
            { text: "a mi madre", role: "cue" },
            { text: "esta noche", role: "cue" },
          ],
          "I am going to call my mother tonight.",
          "Near-future chunks are worth learning as one listening unit.",
        ),
      },
      {
        id: "sp3",
        type: "choice",
        skill: "speed",
        difficulty: "challenge",
        modeLabel: "Listen and identify",
        prompt: "Which tense did you hear?",
        audioText: "Ayer tuve mucha suerte.",
        options: ["preterite", "present", "conditional"],
        answerIndex: 0,
        rule: "Time word + verb form reveal the tense",
        explanation:
          "Ayer and tuve work together: this is a completed past event in the preterite.",
        correctAnswerText: "preterite",
        focusTags: ["speed", "tense", "soundContrast"],
        transcript: transcriptModel(
          [
            { text: "Ayer", role: "cue" },
            { text: "tuve", role: "verb" },
            { text: "mucha suerte", role: "cue" },
          ],
          "Yesterday I was very lucky.",
          "The time marker and the verb shape confirm each other.",
        ),
      },
      {
        id: "sp4",
        type: "choice",
        skill: "speed",
        difficulty: "challenge",
        modeLabel: "Listen and identify",
        prompt: "What time frame does the clip express?",
        audioText: "Mañana tendremos más tiempo.",
        options: ["future", "present", "past"],
        answerIndex: 0,
        rule: "Future forms often arrive as a single word",
        explanation:
          "Tendremos is a future form, and mañana supports that reading immediately.",
        correctAnswerText: "future",
        focusTags: ["speed", "tense"],
        transcript: transcriptModel(
          [
            { text: "Mañana", role: "cue" },
            { text: "tendremos", role: "verb" },
            { text: "más tiempo", role: "cue" },
          ],
          "Tomorrow we will have more time.",
          "Try to recognize the future ending before the sentence is over.",
        ),
      },
    ],
  },
  {
    id: "practice-mixed-review",
    stepIndex: 7,
    title: "Mixed mastery drill",
    intro: "Now combine everything: verb recognition, dropped subjects, short words, and faster playback.",
    questions: [
      {
        id: "rv1",
        type: "choice",
        skill: "review",
        difficulty: "challenge",
        modeLabel: "Listen and identify",
        prompt: "Which subject is understood in the audio?",
        audioText: "Lo vemos mañana.",
        options: ["nosotros", "yo", "ellos"],
        answerIndex: 0,
        rule: "The ending -mos still rules the subject",
        explanation:
          "Even with the object pronoun lo at the front, vemos still tells you the subject is nosotros.",
        correctAnswerText: "nosotros",
        focusTags: ["review", "subject", "conjugation"],
        transcript: transcriptModel(
          [
            { text: "Lo", role: "cue" },
            { text: "vemos", role: "verb" },
            { text: "mañana", role: "cue" },
          ],
          "We will see it / him tomorrow.",
          "Do not let the short object word distract you from the verb ending.",
        ),
      },
      {
        id: "rv2",
        type: "build",
        skill: "review",
        difficulty: "challenge",
        modeLabel: "What did you hear?",
        prompt: "Listen and rebuild the sentence.",
        audioText: "No tengo tiempo, pero quiero intentarlo.",
        answer: "No tengo tiempo, pero quiero intentarlo.",
        acceptedAnswers: [
          "No tengo tiempo, pero quiero intentarlo",
          "No tengo tiempo pero quiero intentarlo",
        ],
        tokens: ["pero", "No", "tiempo", "quiero", "intentarlo", "tengo"],
        rule: "Hold two linked clauses in memory",
        explanation:
          "This sentence asks you to keep negation, first-person forms, and a clause break in working memory at the same time.",
        correctAnswerText: "No tengo tiempo, pero quiero intentarlo.",
        focusTags: ["review", "reconstruction", "dictation"],
        transcript: transcriptModel(
          [
            { text: "No", role: "cue" },
            { text: "tengo", role: "verb" },
            { text: "tiempo", role: "cue" },
            { text: "pero", role: "cue" },
            { text: "quiero", role: "verb" },
            { text: "intentarlo", role: "cue" },
          ],
          "I do not have time, but I want to try it.",
          "The two verb forms both point to yo, even though yo never appears.",
        ),
      },
      {
        id: "rv3",
        type: "fill",
        skill: "review",
        difficulty: "challenge",
        modeLabel: "Dictation",
        prompt: "Listen and type the full sentence.",
        audioText: "Dicen que viene tarde.",
        answer: "Dicen que viene tarde.",
        acceptedAnswers: ["Dicen que viene tarde"],
        rule: "Track both verbs, not only the first one",
        explanation:
          "Dicen is plural, but viene is singular. Good listeners keep both verb forms separate in memory.",
        correctAnswerText: "Dicen que viene tarde.",
        focusTags: ["review", "dictation", "soundContrast"],
        transcript: transcriptModel(
          [
            { text: "Dicen", role: "verb" },
            { text: "que", role: "cue" },
            { text: "viene", role: "contrast" },
            { text: "tarde", role: "cue" },
          ],
          "They say that he / she is coming late.",
          "This is a good final check that you can hear more than one verb form inside the same sentence.",
        ),
      },
      {
        id: "rv4",
        type: "choice",
        skill: "review",
        difficulty: "challenge",
        modeLabel: "Listen and identify",
        prompt: "Who is the subject in the clip?",
        audioText: "Fuimos al centro y compramos pan.",
        options: ["nosotros", "ellos", "ella"],
        answerIndex: 0,
        rule: "Two -mos forms, one we-subject",
        explanation:
          "Fuimos and compramos both point to nosotros, so the whole sentence stays anchored on we.",
        correctAnswerText: "nosotros",
        focusTags: ["review", "subject", "tense"],
        transcript: transcriptModel(
          [
            { text: "Fuimos", role: "verb" },
            { text: "al centro", role: "cue" },
            { text: "y", role: "cue" },
            { text: "compramos", role: "verb" },
            { text: "pan", role: "cue" },
          ],
          "We went downtown and bought bread.",
          "Your ear should notice that both verbs point to the same plural speaker.",
        ),
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

const audioState = {
  supported:
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window,
  voices: [],
  voice: null,
  speakingQuestionId: null,
};

const elements = {
  steps: [...document.querySelectorAll(".listening-step")],
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
  voiceAvailability: document.querySelector("#voiceAvailability"),
  voiceStatusText: document.querySelector("#voiceStatusText"),
  playbackStatus: document.querySelector("#playbackStatus"),
  stopAudioBtn: document.querySelector("#stopAudioBtn"),
};

function normalizeInput(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFC")
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

        if (question.type === "choice" && draft != null) {
          lessonState.drafts[questionId] = String(draft);
          continue;
        }

        if (question.type === "fill" && typeof draft === "string") {
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
  if (question.modeLabel) {
    return question.modeLabel;
  }
  if (question.type === "choice") {
    return "Listen and identify";
  }
  if (question.type === "fill") {
    return "Dictation";
  }
  if (question.type === "build") {
    return "What did you hear?";
  }
  return "Practice";
}

function getDifficultyLabel(question) {
  return DIFFICULTY_SETTINGS[question.difficulty]?.label || DIFFICULTY_SETTINGS.slow.label;
}

function getAudioRate(question, mode = "lesson") {
  const baseRate = DIFFICULTY_SETTINGS[question.difficulty]?.rate || DIFFICULTY_SETTINGS.slow.rate;
  if (mode === "slower") {
    return Math.max(0.6, baseRate - 0.16);
  }
  if (mode === "faster") {
    return Math.min(1.2, baseRate + 0.14);
  }
  return baseRate;
}

function renderTranscript(question) {
  const transcript = question.transcript;
  if (!transcript?.parts?.length) {
    return "";
  }

  return `
    <div class="transcript-drawer" data-transcript-for="${question.id}" hidden>
      <h6>Transcript</h6>
      <div class="transcript-inline">
        ${transcript.parts
          .map(
            (part) =>
              `<span class="transcript-part transcript-${part.role || "cue"}">${part.text}</span>`,
          )
          .join("")}
      </div>
      ${transcript.translation ? `<p class="transcript-note"><strong>Meaning:</strong> ${transcript.translation}</p>` : ""}
      ${transcript.note ? `<p class="transcript-note">${transcript.note}</p>` : ""}
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
  if (question.type === "choice") {
    return question.options[question.answerIndex];
  }
  return question.answer || "";
}

function renderTranscriptPreview(question) {
  const transcript = question.transcript;
  if (!transcript?.parts?.length) {
    return "";
  }

  return `
    <div class="feedback-transcript">
      <h6>Transcript</h6>
      <div class="transcript-inline">
        ${transcript.parts
          .map(
            (part) =>
              `<span class="transcript-part transcript-${part.role || "cue"}">${part.text}</span>`,
          )
          .join("")}
      </div>
      ${transcript.translation ? `<p class="transcript-note"><strong>Meaning:</strong> ${transcript.translation}</p>` : ""}
      ${transcript.note ? `<p class="transcript-note">${transcript.note}</p>` : ""}
    </div>
  `;
}

function renderFeedback(question, correct) {
  return `
    <div class="feedback-panel ${correct ? "is-correct" : "is-wrong"}">
      <div class="feedback-head">
        <span>${correct ? "Correct" : "Not quite"}</span>
        <span>${question.rule}</span>
      </div>
      <p>${question.explanation}</p>
      ${renderFeedbackTags(question.focusTags)}
      <p><strong>Correct answer:</strong> ${getCorrectAnswerText(question)}</p>
      ${renderTranscriptPreview(question)}
    </div>
  `;
}

function renderAudioControls(question) {
  const lessonRate = getAudioRate(question, "lesson").toFixed(2);
  return `
    <div class="audio-control-bar">
      <button class="audio-btn" type="button" data-play-question="${question.id}" data-play-mode="lesson">Play audio</button>
      <button class="audio-btn" type="button" data-play-question="${question.id}" data-play-mode="slower">Replay slower</button>
      <button class="audio-btn" type="button" data-play-question="${question.id}" data-play-mode="faster">Challenge speed</button>
      <span class="audio-rate-badge">Lesson speed ${lessonRate}x</span>
      <button class="transcript-toggle" type="button" data-transcript-toggle="${question.id}">Show transcript</button>
    </div>
    ${renderTranscript(question)}
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
    <article class="question-card" data-question-card="${question.id}">
      <div class="question-meta">
        <span>${number}. ${getModeLabel(question)}</span>
        <span>${SKILL_LABELS[question.skill] || "Practice"}</span>
      </div>
      <div class="question-tools">
        <div class="audio-control-bar">
          <span class="difficulty-badge">${getDifficultyLabel(question)}</span>
          <span class="listening-hint">Replay as much as you need before you answer.</span>
        </div>
        ${renderAudioControls(question)}
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
          placeholder="Type exactly what you heard"
          data-fill-question="${question.id}"
        />
        <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
      </div>
    `;
  }

  if (question.type === "build") {
    return `
      <div class="build-zone" data-build-zone="${question.id}">
        <div class="build-answer is-empty" data-build-answer="${question.id}"></div>
        <div class="build-bank" data-build-bank="${question.id}"></div>
        <div class="build-actions">
          <button class="build-clear-btn" type="button" data-build-clear="${question.id}">Clear sentence</button>
          <button class="check-btn" type="button" data-check-question="${question.id}">Check answer</button>
        </div>
      </div>
    `;
  }

  return "";
}

function buildSelectedText(question) {
  const selected = lessonState.drafts[question.id] || [];
  return selected.map((index) => question.tokens[index]).join(" ");
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
        <button
          class="token-chip"
          type="button"
          data-build-remove="${questionId}"
          data-build-position="${position}"
        >
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

  const cards = Object.entries(SKILL_LABELS).map(([skill, label]) => {
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
  });

  elements.masteryBoard.innerHTML = cards.join("");
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

function applyChoiceDraft(questionId, value) {
  lessonState.drafts[questionId] = String(value);
  document.querySelectorAll(`[data-choice-question="${questionId}"]`).forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.choiceValue === String(value));
  });
  saveLessonState();
}

function handleChoiceSelection(button) {
  applyChoiceDraft(button.dataset.choiceQuestion, button.dataset.choiceValue);
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
  document.querySelectorAll(`[data-choice-question="${question.id}"]`).forEach((button) => {
    button.classList.remove("is-correct", "is-wrong");
    if (button.dataset.choiceValue === String(question.answerIndex)) {
      button.classList.add("is-correct");
    }
    if (button.dataset.choiceValue === String(selectedValue) && !correct) {
      button.classList.add("is-wrong");
    }
  });
}

function evaluateChoiceQuestion(question) {
  const selectedValue = lessonState.drafts[question.id];
  if (selectedValue == null) {
    return { ready: false, message: "Choose an answer first." };
  }

  const correct = Number(selectedValue) === question.answerIndex;
  setResponse(question.id, correct);
  decorateChoiceCard(question, selectedValue, correct);
  return {
    ready: true,
    html: renderFeedback(question, correct),
  };
}

function evaluateFillQuestion(question) {
  const input = document.querySelector(`[data-fill-question="${question.id}"]`);
  if (!input || !input.value.trim()) {
    return { ready: false, message: "Type what you heard first." };
  }

  lessonState.drafts[question.id] = input.value;
  const normalizedAnswer = normalizeInput(input.value);
  const accepted = [question.answer].concat(question.acceptedAnswers || []).map(normalizeInput);
  const correct = accepted.includes(normalizedAnswer);
  setResponse(question.id, correct);
  return {
    ready: true,
    html: renderFeedback(question, correct),
  };
}

function evaluateBuildQuestion(question) {
  const selected = lessonState.drafts[question.id] || [];
  if (!selected.length) {
    return { ready: false, message: "Tap the words in order to rebuild the sentence first." };
  }

  const built = buildSelectedText(question);
  const normalizedBuilt = normalizeInput(built);
  const accepted = [question.answer].concat(question.acceptedAnswers || []).map(normalizeInput);
  const correct = accepted.includes(normalizedBuilt);
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
  if (question.type === "choice") {
    result = evaluateChoiceQuestion(question);
  } else if (question.type === "fill") {
    result = evaluateFillQuestion(question);
  } else {
    result = evaluateBuildQuestion(question);
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

    if (question.type === "choice") {
      applyChoiceDraft(question.id, draft);
      continue;
    }

    if (question.type === "fill") {
      const input = document.querySelector(`[data-fill-question="${question.id}"]`);
      if (input) {
        input.value = draft;
      }
      continue;
    }

    renderBuildState(question.id);
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

function updateVoiceUi() {
  if (!elements.voiceAvailability || !elements.voiceStatusText || !elements.playbackStatus) {
    return;
  }

  if (!audioState.supported) {
    elements.voiceAvailability.textContent = "Unavailable";
    elements.voiceStatusText.textContent =
      "This browser does not expose speech synthesis, so audio playback is unavailable here.";
    document.querySelectorAll("[data-play-question]").forEach((button) => {
      button.disabled = true;
    });
    return;
  }

  if (audioState.voice) {
    elements.voiceAvailability.textContent = audioState.voice.lang;
    elements.voiceStatusText.textContent = `Using ${audioState.voice.name} for Spanish playback.`;
  } else {
    elements.voiceAvailability.textContent = "Fallback";
    elements.voiceStatusText.textContent =
      "No dedicated Spanish system voice was found. The lesson will still request Spanish pronunciation from the browser default voice.";
  }
}

function loadVoices() {
  if (!audioState.supported) {
    updateVoiceUi();
    return;
  }

  audioState.voices = window.speechSynthesis.getVoices();
  audioState.voice = chooseSpanishVoice(audioState.voices);
  updateVoiceUi();
}

function setPlaybackStatus(message) {
  if (elements.playbackStatus) {
    elements.playbackStatus.textContent = message;
  }
}

function highlightActiveAudio(questionId) {
  document.querySelectorAll("[data-play-question]").forEach((button) => {
    button.classList.toggle("is-playing", button.dataset.playQuestion === questionId);
  });
}

function stopAudio() {
  if (!audioState.supported) {
    return;
  }
  window.speechSynthesis.cancel();
  audioState.speakingQuestionId = null;
  highlightActiveAudio(null);
  setPlaybackStatus("Playback stopped.");
}

function playAudio(questionId, mode = "lesson") {
  const question = questionMap.get(questionId);
  if (!question) {
    return;
  }

  if (!audioState.supported) {
    setPlaybackStatus("Audio playback is not available in this browser.");
    return;
  }

  const rate = getAudioRate(question, mode);
  const utterance = new SpeechSynthesisUtterance(question.audioText);
  utterance.lang = audioState.voice?.lang || "es-ES";
  utterance.rate = rate;
  utterance.pitch = 1;
  if (audioState.voice) {
    utterance.voice = audioState.voice;
  }

  utterance.onstart = () => {
    audioState.speakingQuestionId = questionId;
    highlightActiveAudio(questionId);
    setPlaybackStatus(`Playing ${getDifficultyLabel(question)} at ${rate.toFixed(2)}x.`);
  };

  utterance.onend = () => {
    audioState.speakingQuestionId = null;
    highlightActiveAudio(null);
    setPlaybackStatus("Clip finished. Replay it or answer when ready.");
  };

  utterance.onerror = () => {
    audioState.speakingQuestionId = null;
    highlightActiveAudio(null);
    setPlaybackStatus("The browser could not play this clip.");
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function toggleTranscript(questionId) {
  const drawer = document.querySelector(`[data-transcript-for="${questionId}"]`);
  const button = document.querySelector(`[data-transcript-toggle="${questionId}"]`);
  if (!drawer || !button) {
    return;
  }

  const shouldShow = drawer.hidden;
  drawer.hidden = !shouldShow;
  button.textContent = shouldShow ? "Hide transcript" : "Show transcript";
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const playButton = event.target.closest("[data-play-question]");
    if (playButton) {
      playAudio(playButton.dataset.playQuestion, playButton.dataset.playMode || "lesson");
      return;
    }

    const transcriptButton = event.target.closest("[data-transcript-toggle]");
    if (transcriptButton) {
      toggleTranscript(transcriptButton.dataset.transcriptToggle);
      return;
    }

    const choiceButton = event.target.closest("[data-choice-question]");
    if (choiceButton) {
      handleChoiceSelection(choiceButton);
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
  if (elements.stopAudioBtn) {
    elements.stopAudioBtn.addEventListener("click", stopAudio);
  }
}

function initListeningCourse() {
  renderPracticeBlocks();
  allQuestions
    .filter((question) => question.type === "build")
    .forEach((question) => {
      if (!Array.isArray(lessonState.drafts[question.id])) {
        lessonState.drafts[question.id] = [];
      }
      renderBuildState(question.id);
    });

  loadLessonState();
  bindEvents();
  restoreSavedDrafts();
  allQuestions.forEach((question) => {
    if (question.type === "build") {
      renderBuildState(question.id);
    }
    restoreSavedQuestionState(question);
  });
  updateProgress();
  setActiveStep(lessonState.activeStep, { scroll: false, save: false });

  loadVoices();
  if (audioState.supported) {
    window.speechSynthesis.addEventListener?.("voiceschanged", loadVoices);
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

initListeningCourse();

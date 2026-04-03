const HUB_STORAGE_KEYS = {
  zombie: "zombie-conjugation-survival-progress-v1",
  accent: "accent-course-progress-v1",
  verb: "verb-course-progress-v1",
  sentence: "sentence-course-progress-v1",
  preposition: "preposition-course-progress-v1",
  pronoun: "pronoun-course-progress-v1",
  listening: "listening-course-progress-v1",
  speaking: "speaking-course-progress-v1",
  vocabulary: "vocabulary-course-progress-v1",
  writing: "writing-course-progress-v1",
  reading: "reading-course-progress-v1",
  error: "error-course-progress-v1",
  usage: "usage-course-progress-v1",
};

function readStoredJson(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (_error) {
    return null;
  }
}

function countAnsweredResponses(responses) {
  if (!responses || typeof responses !== "object") {
    return 0;
  }

  return Object.values(responses).filter((entry) => entry && entry.answered).length;
}

function buildZombieProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.zombie);
  if (!progress) {
    return "Loadout and best runs will be remembered.";
  }

  const parts = [];
  const bestWave = Math.max(0, Math.floor(Number(progress.bestWave) || 0));
  const bestScore = Math.max(0, Math.floor(Number(progress.bestScore) || 0));
  const totalKills = Math.max(0, Math.floor(Number(progress.totalKills) || 0));

  if (bestWave > 0) {
    parts.push(`Best wave ${bestWave}`);
  }
  if (bestScore > 0) {
    parts.push(`Best score ${bestScore}`);
  }
  if (parts.length === 0 && totalKills > 0) {
    parts.push(`${totalKills} total kills`);
  }

  if (parts.length === 0) {
    return "Saved loadout ready for your next run.";
  }

  return parts.slice(0, 2).join(" • ");
}

function buildAccentProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.accent);
  if (!progress) {
    return "Lesson progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));

  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions answered`;
}

function buildVerbProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.verb);
  if (!progress) {
    return "Verb-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 10));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 10 • ${answered} questions answered`;
}

function buildSentenceProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.sentence);
  if (!progress) {
    return "Sentence-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions answered`;
}

function buildPrepositionProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.preposition);
  if (!progress) {
    return "Preposition-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions answered`;
}

function buildPronounProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.pronoun);
  if (!progress) {
    return "Pronoun-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions answered`;
}

function buildListeningProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.listening);
  if (!progress) {
    return "Listening-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions answered`;
}

function buildSpeakingProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.speaking);
  if (!progress) {
    return "Speaking-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions answered`;
}

function buildVocabularyProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.vocabulary);
  if (!progress) {
    return "Vocabulary-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions answered`;
}

function buildWritingProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.writing);
  if (!progress) {
    return "Writing-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions answered`;
}

function buildReadingProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.reading);
  if (!progress) {
    return "Reading-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions answered`;
}

function buildErrorProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.error);
  if (!progress) {
    return "Error-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions checked`;
}

function buildUsageProgressText() {
  const progress = readStoredJson(HUB_STORAGE_KEYS.usage);
  if (!progress) {
    return "Usage-course progress will be remembered.";
  }

  const answered = countAnsweredResponses(progress.responses);
  const step = Math.max(1, Math.min((Math.floor(Number(progress.activeStep) || 0) + 1), 8));
  if (answered === 0) {
    return `Ready to continue from step ${step}.`;
  }

  return `Step ${step} of 8 • ${answered} questions answered`;
}

function applyHubProgress() {
  const copy = {
    zombie: buildZombieProgressText(),
    accent: buildAccentProgressText(),
    verb: buildVerbProgressText(),
    sentence: buildSentenceProgressText(),
    preposition: buildPrepositionProgressText(),
    pronoun: buildPronounProgressText(),
    listening: buildListeningProgressText(),
    speaking: buildSpeakingProgressText(),
    vocabulary: buildVocabularyProgressText(),
    writing: buildWritingProgressText(),
    reading: buildReadingProgressText(),
    error: buildErrorProgressText(),
    usage: buildUsageProgressText(),
  };

  document.querySelectorAll("[data-progress-meta]").forEach((node) => {
    const key = node.dataset.progressMeta;
    if (key && copy[key]) {
      node.textContent = copy[key];
    }
  });
}

applyHubProgress();

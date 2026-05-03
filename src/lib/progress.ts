// Lightweight localStorage-based progress tracker for games and quizzes.

const KEY = "prophecy-kids-progress-v1";



export type ProgressEntry = {
  id: string;
  name?: string;
  type: "game" | "quiz";
  correctCount: number;
  attempts: number;
  bestScore: number; // 0-100
  lastPlayed: number;
};

export type ProgressState = {
  entries: Record<string, ProgressEntry>;
  totalCorrect: number;
};

const empty = (): ProgressState => ({ entries: {}, totalCorrect: 0 });

export const getProgress = (): ProgressState => {
  if (typeof localStorage === "undefined") return empty();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    return JSON.parse(raw);
  } catch {
    return empty();
  }
};

const save = (s: ProgressState) => {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* ignore */ }
  if (typeof window !== "undefined") window.dispatchEvent(new Event("progress-updated"));
};

const ensure = (s: ProgressState, id: string, type: "game" | "quiz", name?: string): ProgressEntry => {
  if (!s.entries[id]) {
    s.entries[id] = { id, name, type, correctCount: 0, attempts: 0, bestScore: 0, lastPlayed: Date.now() };
  } else if (name && !s.entries[id].name) {
    s.entries[id].name = name;
  }
  return s.entries[id];
};

export const recordCorrect = (id: string, type: "game" | "quiz", name?: string) => {
  const s = getProgress();
  const e = ensure(s, id, type, name);
  e.correctCount += 1;
  e.lastPlayed = Date.now();
  s.totalCorrect += 1;
  save(s);
};

export const recordCompletion = (id: string, type: "game" | "quiz", scorePct: number, name?: string) => {
  const s = getProgress();
  const e = ensure(s, id, type, name);
  e.attempts += 1;
  e.bestScore = Math.max(e.bestScore, Math.round(scorePct));
  e.lastPlayed = Date.now();
  save(s);
};

export const resetProgress = () => save(empty());

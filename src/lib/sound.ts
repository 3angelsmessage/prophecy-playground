// Simple sound effects using the Web Audio API (no assets required).

let ctx: AudioContext | null = null;
const getCtx = () => {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  return ctx;
};

const tone = (freq: number, time: number, duration: number, type: OscillatorType = "sine", gain = 0.15) => {
  const c = getCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, c.currentTime + time);
  g.gain.setValueAtTime(0, c.currentTime + time);
  g.gain.linearRampToValueAtTime(gain, c.currentTime + time + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + time + duration);
  osc.connect(g).connect(c.destination);
  osc.start(c.currentTime + time);
  osc.stop(c.currentTime + time + duration + 0.02);
};

export const playCorrect = () => {
  // Cheerful ascending chime
  tone(523.25, 0, 0.15, "triangle"); // C5
  tone(659.25, 0.1, 0.15, "triangle"); // E5
  tone(783.99, 0.2, 0.25, "triangle"); // G5
};

export const playWin = () => {
  tone(523.25, 0, 0.12);
  tone(659.25, 0.12, 0.12);
  tone(783.99, 0.24, 0.12);
  tone(1046.5, 0.36, 0.3);
};

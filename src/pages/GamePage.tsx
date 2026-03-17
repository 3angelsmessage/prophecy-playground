import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw, Trophy } from "lucide-react";
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLanguagePrefix } from "@/hooks/useLanguagePrefix";
import {
  getGameUI, getBeastMatchData, getStatuePieces, getTimelineEvents,
  getHiddenSymbols, getVerseScrambleData, getProphetQuizData,
  getBibleBooksData, getMemoryVerseData, getSanctuaryParts,
  getSanctuaryLocations, getFruitOfSpirit, getCommandments,
  getCreationDays, getDanielsVisions, getDaniel7Beasts,
  getDaniel11Events, getRevelation10Elements, getJudgmentElements,
  getTimeOfEndElements, getGameContentMeta,
} from "@/data/gameTranslations";

// Helper hook for game UI strings
const useGameUI = () => {
  const { i18n } = useTranslation();
  return getGameUI(i18n.language);
};

// ==================== Match the Beasts ====================
const MatchTheBeastsGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const beastData = useMemo(() => getBeastMatchData(i18n.language), [i18n.language]);
  const [beasts] = useState(beastData.map(b => ({ ...b, id: Math.random() })));
  const [shuffledEmpires] = useState([...beastData].sort(() => Math.random() - 0.5).map(b => ({ empire: b.empire, id: Math.random() })));
  const [selectedBeast, setSelectedBeast] = useState<number | null>(null);
  const [matches, setMatches] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleBeastClick = (index: number) => setSelectedBeast(index);

  const handleEmpireClick = (empire: string) => {
    if (selectedBeast === null) return;
    const beast = beasts[selectedBeast];
    if (beast.empire === empire) {
      setMatches(prev => ({ ...prev, [beast.beast]: empire }));
      setScore(prev => prev + 25);
    }
    setSelectedBeast(null);
    if (Object.keys(matches).length + 1 === 4) {
      setTimeout(() => setShowResult(true), 500);
    }
  };

  const resetGame = () => { setMatches({}); setScore(0); setSelectedBeast(null); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">{score === 100 ? "🏆" : "⭐"}</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{score === 100 ? ui.perfectScore : ui.greatTry}</h3>
        <p className="text-muted-foreground mb-6">{ui.youScored} {score} {ui.outOf} 100 {ui.points}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.selectBeast}</h3>
        <div className="space-y-3">
          {beasts.map((beast, index) => (
            <motion.button key={beast.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => !matches[beast.beast] && handleBeastClick(index)}
              className={`w-full p-4 rounded-xl text-left font-semibold transition-all ${matches[beast.beast] ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : selectedBeast === index ? "bg-primary text-primary-foreground" : "bg-card border-2 border-border hover:border-primary"}`}
              disabled={!!matches[beast.beast]}
            >{beast.beast} {matches[beast.beast] && "✓"}</motion.button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.matchEmpire}</h3>
        <div className="space-y-3">
          {shuffledEmpires.map((item) => (
            <motion.button key={item.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => handleEmpireClick(item.empire)}
              disabled={Object.values(matches).includes(item.empire)}
              className={`w-full p-4 rounded-xl text-left font-semibold transition-all ${Object.values(matches).includes(item.empire) ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-card border-2 border-border hover:border-secondary"}`}
            >{item.empire} {Object.values(matches).includes(item.empire) && "✓"}</motion.button>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 text-center"><p className="text-lg font-bold">{ui.score}: {score}/100</p></div>
    </div>
  );
};

// ==================== Kingdom Builder ====================
const KingdomBuilderGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const statuePieces = useMemo(() => getStatuePieces(i18n.language), [i18n.language]);
  const [shuffledPieces] = useState(() => [...statuePieces].sort(() => Math.random() - 0.5));
  const [placedPieces, setPlacedPieces] = useState<string[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongAttempt, setWrongAttempt] = useState<number | null>(null);

  const nextPosition = placedPieces.length;

  const handlePieceClick = (pieceId: string) => { if (!placedPieces.includes(pieceId)) setSelectedPiece(pieceId); };

  const handlePlaceClick = () => {
    if (!selectedPiece) return;
    const piece = statuePieces.find(p => p.id === selectedPiece);
    if (!piece) return;
    if (piece.position === nextPosition) {
      setPlacedPieces(prev => [...prev, selectedPiece]);
      setScore(prev => prev + 20);
      setSelectedPiece(null);
      if (placedPieces.length + 1 === 5) setTimeout(() => setShowResult(true), 800);
    } else {
      setWrongAttempt(nextPosition);
      setTimeout(() => setWrongAttempt(null), 500);
    }
  };

  const resetGame = () => { setPlacedPieces([]); setScore(0); setSelectedPiece(null); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">{score === 100 ? "🏆" : "⭐"}</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{score === 100 ? ui.youBuiltStatue : ui.greatTry}</h3>
        <p className="text-muted-foreground mb-2">{ui.youScored} {score} {ui.outOf} 100 {ui.points}</p>
        <p className="text-sm text-muted-foreground mb-6">{ui.statueDescription}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="order-2 md:order-1">
        <h3 className="font-bold mb-4 text-center">{ui.buildStatue}</h3>
        <div className="bg-muted/50 rounded-2xl p-4 min-h-[400px] flex flex-col items-center justify-end">
          <div className="w-full max-w-[200px] space-y-1">
            {statuePieces.map((piece, index) => {
              const isPlaced = placedPieces.includes(piece.id);
              const isNext = index === nextPosition;
              const isWrong = wrongAttempt === index;
              return (
                <motion.div key={piece.id}
                  initial={isPlaced ? { scale: 0, opacity: 0 } : {}}
                  animate={isPlaced ? { scale: 1, opacity: 1 } : isWrong ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                  className={`relative rounded-lg transition-all overflow-hidden
                    ${index === 0 ? "h-16 w-20 mx-auto rounded-t-full" : ""}
                    ${index === 1 ? "h-14 w-32 mx-auto" : ""}
                    ${index === 2 ? "h-16 w-28 mx-auto" : ""}
                    ${index === 3 ? "h-20 w-24 mx-auto" : ""}
                    ${index === 4 ? "h-12 w-28 mx-auto rounded-b-lg" : ""}
                    ${isPlaced ? `bg-gradient-to-b ${piece.color} shadow-lg` : isNext ? "border-2 border-dashed border-primary bg-primary/10" : "border-2 border-dashed border-muted-foreground/30 bg-muted/30"}`}
                >
                  {isPlaced && <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs text-center px-1">{piece.name}</div>}
                  {isNext && !isPlaced && <div className="absolute inset-0 flex items-center justify-center text-primary text-xs font-medium">{ui.placeHere}</div>}
                </motion.div>
              );
            })}
          </div>
          {selectedPiece && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
              <Button onClick={handlePlaceClick} variant="hero" size="lg">{ui.placePiece}</Button>
            </motion.div>
          )}
        </div>
      </div>
      <div className="order-1 md:order-2">
        <h3 className="font-bold mb-4 text-center">{ui.choosePiece}</h3>
        <div className="space-y-3">
          {shuffledPieces.map((piece) => {
            const isPlaced = placedPieces.includes(piece.id);
            const isSelected = selectedPiece === piece.id;
            return (
              <motion.button key={piece.id} whileHover={!isPlaced ? { scale: 1.02 } : {}} whileTap={!isPlaced ? { scale: 0.98 } : {}}
                onClick={() => handlePieceClick(piece.id)} disabled={isPlaced}
                className={`w-full p-4 rounded-xl text-left transition-all ${isPlaced ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 opacity-60" : isSelected ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2" : "bg-card border-2 border-border hover:border-primary"}`}
              >
                <div className="flex items-center justify-between">
                  <div><span className="font-bold">{piece.metal}</span><p className="text-sm opacity-80">{piece.empire}</p></div>
                  {isPlaced && <span className="text-lg">✓</span>}
                </div>
              </motion.button>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-bold">{ui.score}: {score}/100</p>
          <p className="text-xs text-muted-foreground mt-1">{ui.buildTopToBottom}</p>
        </div>
      </div>
    </div>
  );
};

// ==================== Prophecy Timeline ====================
const ProphecyTimelineGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const timelineEvents = useMemo(() => getTimelineEvents(i18n.language), [i18n.language]);
  const [shuffledEvents] = useState(() => [...timelineEvents].sort(() => Math.random() - 0.5));
  const [placedEvents, setPlacedEvents] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongAttempt, setWrongAttempt] = useState<number | null>(null);
  const [slidingEvent, setSlidingEvent] = useState<string | null>(null);

  const nextPosition = placedEvents.length;

  const handleEventClick = (eventId: string) => {
    if (placedEvents.includes(eventId) || slidingEvent) return;
    const event = timelineEvents.find(e => e.id === eventId);
    if (!event) return;
    if (event.order === nextPosition) {
      setSlidingEvent(eventId);
      setTimeout(() => {
        setPlacedEvents(prev => [...prev, eventId]);
        setScore(prev => prev + Math.round(100 / timelineEvents.length));
        setSlidingEvent(null);
        if (placedEvents.length + 1 === timelineEvents.length) setTimeout(() => setShowResult(true), 800);
      }, 500);
    } else {
      setWrongAttempt(nextPosition);
      setTimeout(() => setWrongAttempt(null), 500);
    }
  };

  const resetGame = () => { setPlacedEvents([]); setScore(0); setShowResult(false); setSlidingEvent(null); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">{score >= 96 ? "🏆" : "⭐"}</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{score >= 96 ? ui.timelineMaster : ui.greatTry}</h3>
        <p className="text-muted-foreground mb-2">{ui.youScored} {score} {ui.outOf} 100 {ui.points}</p>
        <p className="text-sm text-muted-foreground mb-6">{ui.timelineDescription}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Event choices */}
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.chooseEvent}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <AnimatePresence>
            {shuffledEvents.map((event) => {
              const isPlaced = placedEvents.includes(event.id);
              const isSliding = slidingEvent === event.id;
              if (isPlaced || isSliding) return null;
              return (
                <motion.button
                  key={event.id}
                  layout
                  exit={{ opacity: 0, y: 60, scale: 0.8, transition: { duration: 0.4, ease: "easeIn" } }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleEventClick(event.id)}
                  className="w-full p-4 rounded-xl text-left transition-colors bg-card border-2 border-border hover:border-primary"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{event.emoji}</span>
                    <div className="flex-1"><span className="font-bold">{event.event}</span><p className="text-sm opacity-80">{event.description}</p></div>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg font-bold">{ui.score}: {score}/100</p>
          <p className="text-xs text-muted-foreground mt-1">{ui.chronologicalOrder}</p>
        </div>
      </div>

      {/* Timeline answer area */}
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.buildTimeline}</h3>
        <div className="bg-muted/50 rounded-2xl p-4 min-h-[200px]">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />
            <div className="space-y-3">
              {timelineEvents.map((event, index) => {
                const isPlaced = placedEvents.includes(event.id);
                const isNext = index === nextPosition;
                const isWrong = wrongAttempt === index;
                return (
                  <motion.div key={event.id}
                    initial={isPlaced ? { opacity: 0, x: -50, y: -30 } : {}}
                    animate={isPlaced ? { opacity: 1, x: 0, y: 0 } : isWrong ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                    transition={isPlaced ? { duration: 0.5, type: "spring", stiffness: 120, damping: 14 } : {}}
                    className="relative pl-14"
                  >
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 transition-all ${isPlaced ? "bg-primary border-primary" : isNext ? "bg-background border-primary animate-pulse" : "bg-muted border-muted-foreground/30"}`} />
                    <div className={`p-3 rounded-xl transition-all ${isPlaced ? "bg-card border-2 border-primary/30 shadow-sm" : isNext ? "border-2 border-dashed border-primary bg-primary/5" : "border-2 border-dashed border-muted-foreground/20 bg-muted/30"}`}>
                      {isPlaced ? (
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{event.emoji}</span>
                          <div><p className="font-bold text-sm">{event.event}</p><p className="text-xs text-muted-foreground">{event.year}</p></div>
                        </div>
                      ) : (
                        <div className="text-center text-sm text-muted-foreground py-1">{isNext ? ui.placeNextEvent : "..."}</div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== Symbol Hunter ====================
const SymbolHunterGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const hiddenSymbols = useMemo(() => getHiddenSymbols(i18n.language), [i18n.language]);
  const [foundSymbols, setFoundSymbols] = useState<string[]>([]);
  const [selectedSymbol, setSelectedSymbol] = useState<typeof hiddenSymbols[0] | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSymbolClick = (symbol: typeof hiddenSymbols[0]) => {
    if (foundSymbols.includes(symbol.id)) return;
    setFoundSymbols(prev => [...prev, symbol.id]);
    setSelectedSymbol(symbol);
    if (foundSymbols.length + 1 === hiddenSymbols.length) setTimeout(() => setShowResult(true), 1500);
  };

  const resetGame = () => { setFoundSymbols([]); setSelectedSymbol(null); setShowHint(false); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">🏆</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{ui.symbolMaster}</h3>
        <p className="text-muted-foreground mb-2">{ui.foundAll} {hiddenSymbols.length} {ui.symbols}</p>
        <p className="text-sm text-muted-foreground mb-6">{ui.symbolDescription}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl aspect-video overflow-hidden border-2 border-dashed border-primary/30">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-32 h-20 bg-muted rounded-lg" />
          <div className="absolute top-5 right-32 w-24 h-28 bg-muted rounded-lg" />
          <div className="absolute bottom-20 left-40 w-40 h-16 bg-muted rounded-lg" />
          <div className="absolute bottom-10 right-20 w-28 h-24 bg-muted rounded-lg" />
        </div>
        {hiddenSymbols.map((symbol) => {
          const isFound = foundSymbols.includes(symbol.id);
          return (
            <motion.button key={symbol.id} onClick={() => handleSymbolClick(symbol)}
              className={`absolute text-3xl md:text-4xl transition-all duration-300 ${isFound ? "opacity-100 scale-110" : "opacity-40 hover:opacity-70 hover:scale-125"}`}
              style={{ left: `${symbol.x}%`, top: `${symbol.y}%`, transform: 'translate(-50%, -50%)' }}
              whileHover={!isFound ? { scale: 1.3 } : {}} whileTap={!isFound ? { scale: 0.9 } : {}}
              animate={isFound ? { scale: [1, 1.3, 1] } : {}}
            >
              {symbol.emoji}
              {isFound && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 text-xs bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center">✓</motion.span>}
            </motion.button>
          );
        })}
        {showHint && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-background/80 flex items-center justify-center p-4">
            <div className="bg-card p-6 rounded-2xl max-w-sm text-center shadow-lg">
              <p className="text-lg font-bold mb-2">{ui.hints}</p>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                {hiddenSymbols.filter(s => !foundSymbols.includes(s.id)).slice(0, 3).map(s => (<li key={s.id}>• {s.hint}</li>))}
              </ul>
              <Button onClick={() => setShowHint(false)} variant="outline" size="sm" className="mt-4">{ui.gotIt}</Button>
            </div>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {selectedSymbol && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-accent/10 border border-accent rounded-xl p-4 text-center">
            <p className="text-2xl mb-1">{selectedSymbol.emoji}</p>
            <p className="font-bold">{selectedSymbol.name} ✓</p>
            <p className="text-sm text-muted-foreground">{selectedSymbol.hint}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">{ui.found}: {foundSymbols.length}/{hiddenSymbols.length}</p>
          <p className="text-xs text-muted-foreground">{ui.clickHidden}</p>
        </div>
        <Button onClick={() => setShowHint(true)} variant="outline" size="sm">{ui.hint}</Button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {hiddenSymbols.map((symbol) => {
          const isFound = foundSymbols.includes(symbol.id);
          return (
            <div key={symbol.id} className={`p-2 rounded-lg text-center text-sm transition-all ${isFound ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
              <span className="text-lg">{isFound ? symbol.emoji : "❓"}</span>
              <p className="text-xs truncate">{isFound ? symbol.name : "???"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==================== Verse Scramble ====================
const VerseScrambleGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const verseData = useMemo(() => getVerseScrambleData(i18n.language), [i18n.language]);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useState(() => { setShuffledWords([...verseData[0].words].sort(() => Math.random() - 0.5)); });

  const handleWordClick = (word: string, fromSelected: boolean) => {
    if (fromSelected) {
      setSelectedWords(prev => prev.filter((w, i) => i !== prev.lastIndexOf(word)));
      setShuffledWords(prev => [...prev, word]);
    } else {
      setShuffledWords(prev => prev.filter((w, i) => i !== prev.indexOf(word)));
      setSelectedWords(prev => [...prev, word]);
    }
  };

  const checkAnswer = () => {
    if (selectedWords.join(" ") === verseData[currentVerse].verse) setScore(prev => prev + 1);
    if (currentVerse < verseData.length - 1) {
      setCurrentVerse(prev => prev + 1);
      setShuffledWords([...verseData[currentVerse + 1].words].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
    } else setShowResult(true);
  };

  const resetGame = () => { setCurrentVerse(0); setShuffledWords([...verseData[0].words].sort(() => Math.random() - 0.5)); setSelectedWords([]); setScore(0); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">{score === verseData.length ? "🏆" : "⭐"}</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{ui.greatJob}</h3>
        <p className="text-muted-foreground mb-6">{score} {ui.outOf} {verseData.length} {ui.versesCorrect}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">{ui.verse} {currentVerse + 1} {ui.of} {verseData.length}</p>
        <p className="font-bold">{verseData[currentVerse].reference}</p>
      </div>
      <div className="min-h-[60px] p-4 bg-muted/50 rounded-xl border-2 border-dashed border-primary/30 flex flex-wrap gap-2">
        {selectedWords.map((word, index) => (
          <motion.button key={`${word}-${index}`} initial={{ scale: 0 }} animate={{ scale: 1 }}
            onClick={() => handleWordClick(word, true)} className="px-3 py-2 bg-primary text-primary-foreground rounded-lg font-semibold">{word}</motion.button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {shuffledWords.map((word, index) => (
          <motion.button key={`${word}-${index}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => handleWordClick(word, false)} className="px-3 py-2 bg-card border-2 border-border rounded-lg font-semibold hover:border-primary">{word}</motion.button>
        ))}
      </div>
      {selectedWords.length === verseData[currentVerse].words.length && (
        <div className="text-center"><Button onClick={checkAnswer} variant="hero">{ui.checkAnswer}</Button></div>
      )}
    </div>
  );
};

// ==================== Prophet Quiz ====================
const ProphetQuizGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const quizData = useMemo(() => getProphetQuizData(i18n.language), [i18n.language]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelected(answer);
    if (answer === quizData[current].answer) setScore(prev => prev + 1);
    setTimeout(() => {
      if (current < quizData.length - 1) { setCurrent(prev => prev + 1); setSelected(null); }
      else setShowResult(true);
    }, 1000);
  };

  const resetGame = () => { setCurrent(0); setScore(0); setSelected(null); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">{score === quizData.length ? "🏆" : "⭐"}</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{ui.quizComplete}</h3>
        <p className="text-muted-foreground mb-6">{score}/{quizData.length} {ui.correct}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">{ui.question} {current + 1}/{quizData.length}</p>
        <h3 className="text-xl font-bold mt-2">{quizData[current].question}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {quizData[current].options.map((option) => (
          <motion.button key={option} whileHover={!selected ? { scale: 1.02 } : {}}
            onClick={() => !selected && handleAnswer(option)}
            className={`p-4 rounded-xl font-semibold transition-all ${selected === option ? option === quizData[current].answer ? "bg-accent text-accent-foreground" : "bg-destructive text-destructive-foreground" : "bg-card border-2 border-border hover:border-primary"}`}
          >{option}</motion.button>
        ))}
      </div>
      <p className="text-center font-bold">{ui.score}: {score}/{quizData.length}</p>
    </div>
  );
};

// ==================== Bible Books Order ====================
const BibleBooksGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const booksData = useMemo(() => getBibleBooksData(i18n.language), [i18n.language]);
  const [shuffled] = useState(() => [...booksData].sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handlePlace = () => {
    if (!selected) return;
    const book = booksData.find(b => b.name === selected);
    if (book && book.order === placed.length + 1) {
      setPlaced(prev => [...prev, selected]);
      if (placed.length + 1 === booksData.length) setTimeout(() => setShowResult(true), 500);
    }
    setSelected(null);
  };

  const resetGame = () => { setPlaced([]); setSelected(null); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">🏆</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{ui.perfect}</h3>
        <p className="text-muted-foreground mb-6">{ui.youKnowBooks}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.orderBooks}</h3>
        <div className="space-y-2">
          {booksData.map((_, index) => (
            <div key={index} className={`p-3 rounded-lg ${placed[index] ? "bg-accent/20 text-accent font-bold" : "bg-muted/50 border-2 border-dashed border-muted-foreground/30"}`}>
              {placed[index] || `${ui.book} ${index + 1}`}
            </div>
          ))}
        </div>
        {selected && <Button onClick={handlePlace} variant="hero" className="w-full mt-4">{ui.placeBook}</Button>}
      </div>
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.chooseBook}</h3>
        <div className="space-y-2">
          {shuffled.map((book) => (
            <motion.button key={book.name} disabled={placed.includes(book.name)} onClick={() => setSelected(book.name)}
              className={`w-full p-3 rounded-lg text-left font-semibold ${placed.includes(book.name) ? "opacity-50 bg-muted" : selected === book.name ? "bg-primary text-primary-foreground" : "bg-card border-2 border-border hover:border-primary"}`}
            >{book.name}</motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== Memory Verse ====================
const MemoryVerseGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const memoryData = useMemo(() => getMemoryVerseData(i18n.language), [i18n.language]);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => { setShowAll(false); setGameStarted(true); setRevealed([]); };
  const revealWord = (index: number) => { if (!revealed.includes(index)) setRevealed(prev => [...prev, index]); };

  return (
    <div className="space-y-6 text-center">
      <p className="font-bold">{memoryData.reference}</p>
      <div className="flex flex-wrap gap-2 justify-center min-h-[80px] p-4 bg-muted/50 rounded-xl">
        {memoryData.words.map((word, index) => (
          <motion.button key={index} onClick={() => revealWord(index)}
            className={`px-3 py-2 rounded-lg font-semibold ${showAll || revealed.includes(index) ? "bg-primary text-primary-foreground" : "bg-muted text-muted"}`}
          >{showAll || revealed.includes(index) ? word : "____"}</motion.button>
        ))}
      </div>
      {!gameStarted ? (
        <Button onClick={startGame} variant="hero">{ui.startMemorizing}</Button>
      ) : (
        <div>
          <p className="text-sm text-muted-foreground">{ui.clickBlanks}</p>
          {revealed.length === memoryData.words.length && (
            <Button onClick={() => { setShowAll(true); setGameStarted(false); }} variant="outline" className="mt-4">{ui.reset}</Button>
          )}
        </div>
      )}
    </div>
  );
};

// ==================== Sanctuary ====================
const SanctuaryGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const sanctuaryParts = useMemo(() => getSanctuaryParts(i18n.language), [i18n.language]);
  const locations = useMemo(() => getSanctuaryLocations(i18n.language), [i18n.language]);
  const [shuffled] = useState(() => [...sanctuaryParts].sort(() => Math.random() - 0.5));
  const [matched, setMatched] = useState<{ [key: string]: string }>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleLocationClick = (location: string) => {
    if (!selected) return;
    const part = sanctuaryParts.find(p => p.id === selected);
    if (part && part.location === location) {
      setMatched(prev => ({ ...prev, [selected]: location }));
      if (Object.keys(matched).length + 1 === sanctuaryParts.length) setTimeout(() => setShowResult(true), 500);
    }
    setSelected(null);
  };

  const resetGame = () => { setMatched({}); setSelected(null); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">🏆</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{ui.sanctuaryExpert}</h3>
        <p className="text-muted-foreground mb-6">{ui.youKnowSanctuary}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.sanctuaryItems}</h3>
        <div className="space-y-2">
          {shuffled.map((part) => (
            <motion.button key={part.id} disabled={!!matched[part.id]} onClick={() => setSelected(part.id)}
              className={`w-full p-3 rounded-lg text-left font-semibold flex items-center gap-2 ${matched[part.id] ? "opacity-50 bg-accent/20" : selected === part.id ? "bg-primary text-primary-foreground" : "bg-card border-2 border-border hover:border-primary"}`}
            ><span className="text-xl">{part.emoji}</span> {part.name}</motion.button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.placeInLocation}</h3>
        <div className="space-y-3">
          {locations.map((location) => (
            <motion.button key={location} onClick={() => handleLocationClick(location)} whileHover={{ scale: 1.02 }}
              className="w-full p-4 rounded-lg bg-card border-2 border-border hover:border-secondary font-semibold">{location}</motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== Fruit of Spirit ====================
const FruitSpiritGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const fruitOfSpirit = useMemo(() => getFruitOfSpirit(i18n.language), [i18n.language]);
  const [found, setFound] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = input.trim().toLowerCase();
    const match = fruitOfSpirit.find(f => f.toLowerCase() === normalized && !found.includes(f));
    if (match) {
      setFound(prev => [...prev, match]);
      if (found.length + 1 === fruitOfSpirit.length) setTimeout(() => setShowResult(true), 500);
    }
    setInput("");
  };

  const resetGame = () => { setFound([]); setInput(""); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">🏆</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{ui.fruitExpert}</h3>
        <p className="text-muted-foreground mb-6">{ui.youKnowFruits}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-lg font-bold">{ui.nameNineFruits}</p>
        <p className="text-sm text-muted-foreground">Galatians 5:22-23</p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={ui.typeFruit}
          className="flex-1 px-4 py-2 rounded-lg border-2 border-border bg-background focus:border-primary outline-none" />
        <Button type="submit" variant="hero">{ui.submit}</Button>
      </form>
      <div className="grid grid-cols-3 gap-2">
        {fruitOfSpirit.map((fruit, i) => (
          <div key={i} className={`p-3 rounded-lg text-center text-sm font-semibold ${found.includes(fruit) ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
            {found.includes(fruit) ? fruit : "?"}
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">{ui.found}: {found.length}/9</p>
    </div>
  );
};

// ==================== Ten Commandments ====================
const CommandmentsGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const commandments = useMemo(() => getCommandments(i18n.language), [i18n.language]);
  const [shuffled] = useState(() => [...commandments].sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handlePlace = () => {
    if (!selected) return;
    const index = commandments.indexOf(selected);
    if (index === placed.length) {
      setPlaced(prev => [...prev, selected]);
      if (placed.length + 1 === 10) setTimeout(() => setShowResult(true), 500);
    }
    setSelected(null);
  };

  const resetGame = () => { setPlaced([]); setSelected(null); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">🏆</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{ui.youKnowLaw}</h3>
        <p className="text-muted-foreground mb-6">{ui.allTenInOrder}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.orderCommandments}</h3>
        <div className="space-y-1 text-sm">
          {commandments.map((_, index) => (
            <div key={index} className={`p-2 rounded-lg ${placed[index] ? "bg-accent/20 text-accent font-bold" : "bg-muted/50 border border-dashed border-muted-foreground/30"}`}>
              {index + 1}. {placed[index] || "..."}
            </div>
          ))}
        </div>
        {selected && <Button onClick={handlePlace} variant="hero" className="w-full mt-4">{ui.place}</Button>}
      </div>
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.chooseNext}</h3>
        <div className="space-y-1 text-sm">
          {shuffled.map((cmd) => (
            <motion.button key={cmd} disabled={placed.includes(cmd)} onClick={() => setSelected(cmd)}
              className={`w-full p-2 rounded-lg text-left ${placed.includes(cmd) ? "opacity-50 bg-muted" : selected === cmd ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:border-primary"}`}
            >{cmd}</motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== Creation Days ====================
const CreationGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const creationDays = useMemo(() => getCreationDays(i18n.language), [i18n.language]);
  const [shuffled] = useState(() => [...creationDays].sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handlePlace = () => {
    if (selected === null) return;
    if (selected === placed.length + 1) {
      setPlaced(prev => [...prev, selected]);
      if (placed.length + 1 === 7) setTimeout(() => setShowResult(true), 500);
    }
    setSelected(null);
  };

  const resetGame = () => { setPlaced([]); setSelected(null); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">🌍</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{ui.creationMaster}</h3>
        <p className="text-muted-foreground mb-6">{ui.youKnowCreation}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.creationWeek}</h3>
        <div className="space-y-2">
          {creationDays.map((day) => (
            <div key={day.day} className={`p-3 rounded-lg flex items-center gap-2 ${placed.includes(day.day) ? "bg-accent/20 text-accent font-bold" : "bg-muted/50 border-2 border-dashed border-muted-foreground/30"}`}>
              <span>{ui.day} {day.day}:</span>
              {placed.includes(day.day) ? <><span className="text-xl">{day.emoji}</span> {day.created}</> : "???"}
            </div>
          ))}
        </div>
        {selected && <Button onClick={handlePlace} variant="hero" className="w-full mt-4">{ui.placeDay} {selected} 🌟</Button>}
      </div>
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.chooseDay}</h3>
        <div className="space-y-2">
          {shuffled.map((day) => (
            <motion.button key={day.day} disabled={placed.includes(day.day)} onClick={() => setSelected(day.day)}
              className={`w-full p-3 rounded-lg text-left font-semibold flex items-center gap-2 ${placed.includes(day.day) ? "opacity-50 bg-muted" : selected === day.day ? "bg-primary text-primary-foreground" : "bg-card border-2 border-border hover:border-primary"}`}
            ><span className="text-xl">{day.emoji}</span> {day.created}</motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== Daniel's Visions (Ch 8 & 10) ====================
const DanielsVisionsGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const visions = useMemo(() => getDanielsVisions(i18n.language), [i18n.language]);
  const [shuffledMeanings] = useState(() => visions.map(v => v.meaning).sort(() => Math.random() - 0.5));
  const [selectedSymbol, setSelectedSymbol] = useState<number | null>(null);
  const [matches, setMatches] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSymbolClick = (index: number) => { if (!matches[visions[index].symbol]) setSelectedSymbol(index); };

  const handleMeaningClick = (meaning: string) => {
    if (selectedSymbol === null) return;
    const vision = visions[selectedSymbol];
    if (vision.meaning === meaning) {
      setMatches(prev => ({ ...prev, [vision.symbol]: meaning }));
      setScore(prev => prev + Math.round(100 / visions.length));
    }
    setSelectedSymbol(null);
    if (Object.keys(matches).length + 1 === visions.length) setTimeout(() => setShowResult(true), 500);
  };

  const resetGame = () => { setMatches({}); setScore(0); setSelectedSymbol(null); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">{score >= 96 ? "🏆" : "⭐"}</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{score >= 96 ? ui.visionMaster : ui.greatStudy}</h3>
        <p className="text-muted-foreground mb-2">{ui.youScored} {score} {ui.outOf} 100 {ui.points}</p>
        <p className="text-sm text-muted-foreground mb-6">{ui.visionsDescription}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.selectSymbol}</h3>
        <div className="space-y-2">
          {visions.map((vision, index) => (
            <motion.button key={vision.symbol} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => handleSymbolClick(index)} disabled={!!matches[vision.symbol]}
              className={`w-full p-3 rounded-xl text-left transition-all ${matches[vision.symbol] ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : selectedSymbol === index ? "bg-primary text-primary-foreground" : "bg-card border-2 border-border hover:border-primary"}`}
            >
              <div className="flex items-center justify-between"><span className="font-semibold text-sm">{vision.symbol}</span>{matches[vision.symbol] && <span>✓</span>}</div>
              <p className="text-xs opacity-70 mt-1">Daniel {vision.chapter}</p>
            </motion.button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.matchMeaning}</h3>
        <div className="space-y-2">
          {shuffledMeanings.map((meaning) => (
            <motion.button key={meaning} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => handleMeaningClick(meaning)} disabled={Object.values(matches).includes(meaning)}
              className={`w-full p-3 rounded-xl text-left font-semibold transition-all ${Object.values(matches).includes(meaning) ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-card border-2 border-border hover:border-secondary"}`}
            >{meaning} {Object.values(matches).includes(meaning) && "✓"}</motion.button>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 text-center">
        <p className="text-lg font-bold">{ui.score}: {score}/100</p>
        <p className="text-xs text-muted-foreground mt-1">{ui.matchSymbolsHint}</p>
      </div>
    </div>
  );
};

// ==================== Daniel 7 Beasts ====================
const Daniel7BeastsGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const beasts = useMemo(() => getDaniel7Beasts(i18n.language), [i18n.language]);
  const [shuffledMeanings] = useState(() => beasts.map(b => b.meaning).sort(() => Math.random() - 0.5));
  const [selectedBeast, setSelectedBeast] = useState<number | null>(null);
  const [matches, setMatches] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleBeastClick = (index: number) => { if (!matches[beasts[index].beast]) setSelectedBeast(index); };

  const handleMeaningClick = (meaning: string) => {
    if (selectedBeast === null) return;
    const beast = beasts[selectedBeast];
    if (beast.meaning === meaning) {
      setMatches(prev => ({ ...prev, [beast.beast]: meaning }));
      setScore(prev => prev + Math.round(100 / beasts.length));
    }
    setSelectedBeast(null);
    if (Object.keys(matches).length + 1 === beasts.length) setTimeout(() => setShowResult(true), 500);
  };

  const resetGame = () => { setMatches({}); setScore(0); setSelectedBeast(null); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">{score >= 96 ? "🏆" : "⭐"}</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{score >= 96 ? ui.daniel7Master : ui.greatStudy}</h3>
        <p className="text-muted-foreground mb-2">{ui.youScored} {score} {ui.outOf} 100 {ui.points}</p>
        <p className="text-sm text-muted-foreground mb-6">{ui.daniel7Description}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.selectSymbolD7}</h3>
        <div className="space-y-2">
          {beasts.map((item, index) => (
            <motion.button key={item.beast} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => handleBeastClick(index)} disabled={!!matches[item.beast]}
              className={`w-full p-3 rounded-xl text-left transition-all ${matches[item.beast] ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : selectedBeast === index ? "bg-primary text-primary-foreground" : "bg-card border-2 border-border hover:border-primary"}`}
            >
              <div className="flex items-center justify-between"><span className="font-semibold text-sm">{item.beast}</span>{matches[item.beast] && <span>✓</span>}</div>
              <p className="text-xs opacity-70 mt-1">Daniel {item.verse}</p>
            </motion.button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-4 text-center">{ui.matchMeaning}</h3>
        <div className="space-y-2">
          {shuffledMeanings.map((meaning) => (
            <motion.button key={meaning} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => handleMeaningClick(meaning)} disabled={Object.values(matches).includes(meaning)}
              className={`w-full p-3 rounded-xl text-left font-semibold transition-all ${Object.values(matches).includes(meaning) ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-card border-2 border-border hover:border-secondary"}`}
            >{meaning} {Object.values(matches).includes(meaning) && "✓"}</motion.button>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 text-center">
        <p className="text-lg font-bold">{ui.score}: {score}/100</p>
        <p className="text-xs text-muted-foreground mt-1">{ui.matchBeastsHint}</p>
      </div>
    </div>
  );
};

// ==================== Generic Timeline Game Component ====================
const GenericTimelineGame = ({ elements, buildLabel, chooseLabel, placeLabel, masterTitle, description, hintText, gradientColors }: {
  elements: { id: string; name?: string; event?: string; emoji: string; description: string; order: number; meaning?: string }[];
  buildLabel: string; chooseLabel: string; placeLabel: string; masterTitle: string; description: string; hintText: string;
  gradientColors?: string;
}) => {
  const ui = useGameUI();
  const [shuffledElements] = useState(() => [...elements].sort(() => Math.random() - 0.5));
  const [placedElements, setPlacedElements] = useState<string[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wrongAttempt, setWrongAttempt] = useState<number | null>(null);

  const nextPosition = placedElements.length;
  const getId = (el: typeof elements[0]) => el.id || (el.event ?? "");

  const handleElementClick = (el: typeof elements[0]) => {
    const id = getId(el);
    if (!placedElements.includes(id)) setSelectedElement(id);
  };

  const handlePlaceClick = () => {
    if (!selectedElement) return;
    const element = elements.find(e => getId(e) === selectedElement);
    if (!element) return;
    if (element.order === nextPosition) {
      setPlacedElements(prev => [...prev, selectedElement]);
      setScore(prev => prev + Math.round(100 / elements.length));
      setSelectedElement(null);
      if (placedElements.length + 1 === elements.length) setTimeout(() => setShowResult(true), 800);
    } else {
      setWrongAttempt(nextPosition);
      setTimeout(() => setWrongAttempt(null), 500);
    }
  };

  const resetGame = () => { setPlacedElements([]); setScore(0); setSelectedElement(null); setShowResult(false); };

  if (showResult) {
    return (
      <div className="text-center py-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl mb-4">{score >= 96 ? "🏆" : "⭐"}</motion.div>
        <h3 className="text-2xl font-display font-bold mb-2">{score >= 96 ? masterTitle : ui.greatTry}</h3>
        <p className="text-muted-foreground mb-2">{ui.youScored} {score} {ui.outOf} 100 {ui.points}</p>
        <p className="text-sm text-muted-foreground mb-6">{description}</p>
        <Button onClick={resetGame} variant="hero" className="gap-2"><RotateCcw className="w-4 h-4" /> {ui.playAgain}</Button>
      </div>
    );
  }

  const gc = gradientColors || "from-primary via-secondary to-accent";

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="order-2 md:order-1">
        <h3 className="font-bold mb-4 text-center">{buildLabel}</h3>
        <div className="bg-muted/50 rounded-2xl p-4 min-h-[400px]">
          <div className="relative">
            <div className={`absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b ${gc} rounded-full`} />
            <div className="space-y-2">
              {elements.map((element, index) => {
                const id = getId(element);
                const isPlaced = placedElements.includes(id);
                const isNext = index === nextPosition;
                const isWrong = wrongAttempt === index;
                return (
                  <motion.div key={id}
                    initial={isPlaced ? { opacity: 0, x: -20 } : {}}
                    animate={isPlaced ? { opacity: 1, x: 0 } : isWrong ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                    className="relative pl-14"
                  >
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 transition-all ${isPlaced ? "bg-primary border-primary" : isNext ? "bg-background border-primary animate-pulse" : "bg-muted border-muted-foreground/30"}`} />
                    <div className={`p-3 rounded-xl transition-all ${isPlaced ? "bg-card border-2 border-primary/30 shadow-sm" : isNext ? "border-2 border-dashed border-primary bg-primary/5" : "border-2 border-dashed border-muted-foreground/20 bg-muted/30"}`}>
                      {isPlaced ? (
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{element.emoji}</span>
                          <div>
                            <p className="font-bold text-sm">{element.name || element.event}</p>
                            <p className="text-xs text-muted-foreground">{element.meaning || element.description}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center text-sm text-muted-foreground py-1">
                          {isNext ? `${ui.step} ${index + 1}: ${ui.placeNextEvent}` : `${ui.step} ${index + 1}`}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          {selectedElement && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-center">
              <Button onClick={handlePlaceClick} variant="hero">{placeLabel}</Button>
            </motion.div>
          )}
        </div>
      </div>
      <div className="order-1 md:order-2">
        <h3 className="font-bold mb-4 text-center">{chooseLabel}</h3>
        <div className="space-y-2">
          {shuffledElements.map((element) => {
            const id = getId(element);
            const isPlaced = placedElements.includes(id);
            const isSelected = selectedElement === id;
            return (
              <motion.button key={id} whileHover={!isPlaced ? { scale: 1.02 } : {}} whileTap={!isPlaced ? { scale: 0.98 } : {}}
                onClick={() => handleElementClick(element)} disabled={isPlaced}
                className={`w-full p-3 rounded-xl text-left transition-all ${isPlaced ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 opacity-60" : isSelected ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2" : "bg-card border-2 border-border hover:border-primary"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{element.emoji}</span>
                  <div className="flex-1">
                    <span className="font-bold text-sm">{element.name || element.event}</span>
                    <p className="text-xs opacity-80">{element.description}</p>
                  </div>
                  {isPlaced && <span>✓</span>}
                </div>
              </motion.button>
            );
          })}
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg font-bold">{ui.score}: {score}/100</p>
          <p className="text-xs text-muted-foreground mt-1">{hintText}</p>
        </div>
      </div>
    </div>
  );
};

// Wrapper components that use the generic timeline
const Daniel11KingsGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const events = useMemo(() => getDaniel11Events(i18n.language), [i18n.language]);
  return <GenericTimelineGame elements={events} buildLabel={ui.buildTimelineD11} chooseLabel={ui.chooseEventD11}
    placeLabel={ui.placeEventD11} masterTitle={ui.historyMaster} description={ui.daniel11Description} hintText={ui.putEventsOrder} />;
};

const Revelation10Game = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const elements = useMemo(() => getRevelation10Elements(i18n.language), [i18n.language]);
  return <GenericTimelineGame elements={elements} buildLabel={ui.buildStory} chooseLabel={ui.chooseElement}
    placeLabel={ui.placeElement} masterTitle={ui.revelationExpert} description={ui.littleBookDescription} hintText={ui.putElementsOrder} />;
};

const InvestigativeJudgmentGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const elements = useMemo(() => getJudgmentElements(i18n.language), [i18n.language]);
  return <GenericTimelineGame elements={elements} buildLabel={ui.buildProphecy} chooseLabel={ui.chooseElementIJ}
    placeLabel={ui.placeElementIJ} masterTitle={ui.prophecyScholar} description={ui.judgmentDescription} hintText={ui.putProphecyOrder} />;
};

const TimeOfEndGame = () => {
  const { i18n } = useTranslation();
  const ui = useGameUI();
  const elements = useMemo(() => getTimeOfEndElements(i18n.language), [i18n.language]);
  return <GenericTimelineGame elements={elements} buildLabel={ui.buildDaniel12} chooseLabel={ui.chooseEventTE}
    placeLabel={ui.placeOnTimeline} masterTitle={ui.endTimeScholar} description={ui.daniel12Description}
    hintText={ui.putDaniel12Order} gradientColors="from-orange-500 via-yellow-500 to-amber-500" />;
};

// ==================== Game Page ====================
const gameComponents: { [key: string]: React.ReactNode } = {
  "match-the-beasts": <MatchTheBeastsGame />,
  "prophecy-timeline": <ProphecyTimelineGame />,
  "symbol-hunter": <SymbolHunterGame />,
  "kingdom-builder": <KingdomBuilderGame />,
  "verse-scramble": <VerseScrambleGame />,
  "prophet-quiz": <ProphetQuizGame />,
  "bible-books": <BibleBooksGame />,
  "memory-verse": <MemoryVerseGame />,
  "sanctuary-explorer": <SanctuaryGame />,
  "fruit-of-spirit": <FruitSpiritGame />,
  "ten-commandments": <CommandmentsGame />,
  "creation-days": <CreationGame />,
  "daniels-visions": <DanielsVisionsGame />,
  "daniel-7-beasts": <Daniel7BeastsGame />,
  "daniel-11-kings": <Daniel11KingsGame />,
  "revelation-10": <Revelation10Game />,
  "investigative-judgment": <InvestigativeJudgmentGame />,
  "time-of-end": <TimeOfEndGame />,
};

const GamePage = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { prefix } = useLanguagePrefix();
  
  const gameMeta = getGameContentMeta(i18n.language);
  const meta = gameMeta[gameId || ""];
  const component = gameComponents[gameId || ""];

  if (!meta || !component) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t("gamePage.notFound")}</h1>
          <Button onClick={() => navigate(prefix)} variant="hero">{t("gamePage.goHome")}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate(`${prefix}/#games`)} className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" /> {t("gamePage.backToGames")}
        </Button>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">🎮 {meta.title}</h1>
            <p className="text-muted-foreground">{meta.description}</p>
          </div>
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
            {component}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GamePage;

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Check, X, ArrowRight, RotateCcw, Trophy, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguagePrefix } from "@/hooks/useLanguagePrefix";

const QUESTION_TIME_LIMIT = 15;

const sampleQuiz = [
  { question: "In Daniel's dream, what was the head of the statue made of?", options: ["Silver", "Gold", "Bronze", "Iron"], correct: 1, explanation: "The golden head represented Babylon, the first great kingdom!" },
  { question: "How many beasts did Daniel see coming out of the sea?", options: ["Two", "Three", "Four", "Seven"], correct: 2, explanation: "Daniel saw four beasts: a lion, bear, leopard, and a terrifying fourth beast!" },
  { question: "In Revelation, how many seals does the Lamb open?", options: ["Three", "Five", "Seven", "Twelve"], correct: 2, explanation: "Jesus (the Lamb) opens seven seals on the scroll!" },
  { question: "What did the chest and arms of Daniel's statue represent?", options: ["Babylon", "Medo-Persia", "Greece", "Rome"], correct: 1, explanation: "The silver chest and arms represented the Medo-Persian Empire!" },
  { question: "Which beast in Daniel 7 had four wings like a bird?", options: ["Lion", "Bear", "Leopard", "Fourth Beast"], correct: 2, explanation: "The leopard had four wings, representing the swift conquests of Greece!" },
  { question: "How many horns did the fourth beast have?", options: ["Two", "Seven", "Ten", "Twelve"], correct: 2, explanation: "The fourth beast had ten horns, representing ten kingdoms from Rome!" },
  { question: "What color was the first horse in Revelation?", options: ["Red", "Black", "White", "Pale"], correct: 2, explanation: "The first horse was white, representing the spread of the gospel!" },
  { question: "How many churches are addressed in Revelation?", options: ["Three", "Five", "Seven", "Twelve"], correct: 2, explanation: "Jesus sends messages to seven churches in Asia Minor!" },
  { question: "What did the stone that struck the statue become?", options: ["Dust", "A great mountain", "A river", "Nothing"], correct: 1, explanation: "The stone became a great mountain that filled the whole earth - God's eternal kingdom!" },
  { question: "Who interpreted King Nebuchadnezzar's dreams?", options: ["The wise men", "Daniel", "The magicians", "An angel"], correct: 1, explanation: "God gave Daniel the wisdom to interpret the king's dreams!" },
  { question: "What were the feet of Daniel's statue made of?", options: ["Gold and silver", "Bronze and iron", "Iron and clay", "Pure iron"], correct: 2, explanation: "The feet were iron mixed with clay, representing a divided kingdom!" },
  { question: "How many angels give messages in Revelation 14?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "Three angels proclaim important messages before Jesus returns!" },
  { question: "What is the first angel's message in Revelation 14?", options: ["Fear God and give glory", "Babylon is fallen", "Don't take the mark", "Jesus is coming"], correct: 0, explanation: "The first angel says: 'Fear God and give Him glory, for the hour of His judgment has come!'" },
  { question: "What does 'Babylon is fallen' mean in Revelation 14?", options: ["A city destroyed", "False religion rejected", "An earthquake", "The end of time"], correct: 1, explanation: "Babylon represents false religious systems that have turned away from God's truth!" },
  { question: "What happens when the seventh seal is opened?", options: ["Thunder", "Silence in heaven", "An earthquake", "A rainbow appears"], correct: 1, explanation: "There was silence in heaven for about half an hour when the seventh seal opened!" },
  { question: "Who is described as 'the Ancient of Days' in Daniel 7?", options: ["Daniel", "An angel", "God the Father", "Gabriel"], correct: 2, explanation: "God the Father is the Ancient of Days with white hair and garments!" },
  { question: "What was written on the wall during Belshazzar's feast?", options: ["HOLY HOLY HOLY", "MENE MENE TEKEL UPHARSIN", "THE END IS NEAR", "REPENT NOW"], correct: 1, explanation: "These words meant Babylon was numbered, weighed, and would be divided!" },
  { question: "How many times did Daniel pray each day?", options: ["Once", "Twice", "Three times", "Seven times"], correct: 2, explanation: "Daniel prayed three times a day, kneeling toward Jerusalem!" },
  { question: "What did the stone that hit the statue represent?", options: ["An earthquake", "God's eternal kingdom", "A meteor", "Rome falling"], correct: 1, explanation: "The stone represents God's kingdom that will never be destroyed!" },
  { question: "Who is the 'Lamb slain from the foundation of the world'?", options: ["Abraham's ram", "The Passover lamb", "Jesus Christ", "A temple sacrifice"], correct: 2, explanation: "Jesus is the Lamb whose sacrifice was planned before creation!" },
];

const QuizSection = () => {
  const { t } = useTranslation();
  const { prefix } = useLanguagePrefix();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [timedOut, setTimedOut] = useState(false);

  const handleAnswer = useCallback((index: number) => {
    if (selectedAnswer !== null || timedOut) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === sampleQuiz[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  }, [selectedAnswer, timedOut, currentQuestion]);

  const handleTimeout = useCallback(() => {
    if (selectedAnswer === null && !timedOut) {
      setTimedOut(true);
      setShowResult(true);
    }
  }, [selectedAnswer, timedOut]);

  useEffect(() => {
    if (showResult || quizComplete) return;
    if (timeLeft <= 0) { handleTimeout(); return; }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showResult, quizComplete, handleTimeout]);

  const nextQuestion = () => {
    if (currentQuestion < sampleQuiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(QUESTION_TIME_LIMIT);
      setTimedOut(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0); setSelectedAnswer(null); setShowResult(false);
    setScore(0); setQuizComplete(false); setTimeLeft(QUESTION_TIME_LIMIT); setTimedOut(false);
  };

  const question = sampleQuiz[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;
  const timerPercentage = (timeLeft / QUESTION_TIME_LIMIT) * 100;
  const isTimerCritical = timeLeft <= 5;

  return (
    <section id="quizzes" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            <Trophy size={16} />
            {t("quiz.badge")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-[hsl(120,80%,30%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("quiz.title")}</span>{" "}
            <span className="text-[hsl(330,80%,45%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("quiz.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("quiz.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
            {/* Progress bar */}
            <div className="h-2 bg-muted">
              <motion.div
                className="h-full gradient-hero"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + (quizComplete ? 1 : 0)) / sampleQuiz.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {quizComplete ? (
                  <motion.div key="complete" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="text-7xl mb-6">
                      {score === sampleQuiz.length ? "🏆" : score >= sampleQuiz.length * 0.7 ? "🌟" : "📚"}
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
                      {score === sampleQuiz.length ? t("quiz.perfectScore") : score >= sampleQuiz.length * 0.7 ? t("quiz.greatJob") : t("quiz.keepLearning")}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {t("quiz.youGot")} {score} {t("quiz.outOf")} {sampleQuiz.length} {t("quiz.questionsCorrect")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button onClick={resetQuiz} variant="hero" className="gap-2">
                        <RotateCcw className="w-4 h-4" /> {t("quiz.tryAgain")}
                      </Button>
                      <Link to={`${prefix}/quizzes`}>
                        <Button variant="heroOutline" className="gap-2">
                          {t("quiz.browseAll")}
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key={currentQuestion} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                    {/* Timer + Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-muted-foreground">
                        {t("quiz.question")} {currentQuestion + 1} {t("quiz.of")} {sampleQuiz.length}
                      </span>
                      <div className="flex items-center gap-2">
                        <Clock className={`w-4 h-4 ${isTimerCritical ? "text-destructive animate-pulse" : "text-muted-foreground"}`} />
                        <span className={`text-sm font-bold ${isTimerCritical ? "text-destructive" : "text-muted-foreground"}`}>
                          {timeLeft}s {isTimerCritical && t("quiz.hurry")}
                        </span>
                      </div>
                    </div>

                    {/* Timer bar */}
                    <div className="h-1.5 bg-muted rounded-full mb-6 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${isTimerCritical ? "bg-destructive" : "bg-primary"}`}
                        animate={{ width: `${timerPercentage}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>

                    <h3 className="text-xl font-display font-bold mb-6 text-foreground">{question.question}</h3>

                    <div className="space-y-3">
                      {question.options.map((option, index) => {
                        const isSelected = selectedAnswer === index;
                        const isCorrectAnswer = index === question.correct;
                        const showCorrect = showResult && isCorrectAnswer;
                        const showWrong = showResult && isSelected && !isCorrectAnswer;

                        return (
                          <motion.button
                            key={index}
                            whileHover={!showResult ? { scale: 1.02 } : {}}
                            whileTap={!showResult ? { scale: 0.98 } : {}}
                            onClick={() => handleAnswer(index)}
                            disabled={showResult}
                            className={`w-full p-4 rounded-xl text-left font-semibold transition-all flex items-center justify-between
                              ${showCorrect ? "bg-green-100 text-green-700 border-2 border-green-400 dark:bg-green-900/30 dark:text-green-400" :
                                showWrong ? "bg-red-100 text-red-700 border-2 border-red-400 dark:bg-red-900/30 dark:text-red-400" :
                                isSelected ? "bg-primary text-primary-foreground" :
                                "bg-muted hover:bg-muted/80 border-2 border-transparent hover:border-primary/30"}`}
                          >
                            <span>{option}</span>
                            {showCorrect && <Check className="w-5 h-5" />}
                            {showWrong && <X className="w-5 h-5" />}
                          </motion.button>
                        );
                      })}
                    </div>

                    {showResult && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                        <div className={`p-4 rounded-xl ${isCorrect ? "bg-green-50 dark:bg-green-900/20" : "bg-amber-50 dark:bg-amber-900/20"}`}>
                          <p className="font-bold text-sm mb-1">
                            {timedOut ? t("quiz.timesUp") : isCorrect ? t("quiz.correct") : t("quiz.notQuite")}
                          </p>
                          {!isCorrect && !timedOut && (
                            <p className="text-sm text-muted-foreground mb-1">
                              {t("quiz.correctAnswerWas")} <strong>{question.options[question.correct]}</strong>
                            </p>
                          )}
                          <p className="text-sm text-muted-foreground">{question.explanation}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-sm font-bold text-muted-foreground">
                            {t("quiz.score")}: {score}/{currentQuestion + 1}
                          </span>
                          <Button onClick={nextQuestion} variant="hero" className="gap-2">
                            {currentQuestion < sampleQuiz.length - 1 ? t("quiz.nextQuestion") : t("quiz.seeResults")}
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-6 text-muted-foreground text-sm"
          >
            {t("quiz.moreQuizzes")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuizSection;
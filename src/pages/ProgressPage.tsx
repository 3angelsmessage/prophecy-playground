import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Trophy, Gamepad2, Brain, RotateCcw, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { useLanguagePrefix } from "@/hooks/useLanguagePrefix";
import { getProgress, resetProgress, type ProgressState } from "@/lib/progress";

const ProgressPage = () => {
  const { t } = useTranslation();
  const { prefix } = useLanguagePrefix();
  const [state, setState] = useState<ProgressState>(() => getProgress());

  useEffect(() => {
    const refresh = () => setState(getProgress());
    window.addEventListener("progress-updated", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("progress-updated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const entries = Object.values(state.entries).sort((a, b) => b.lastPlayed - a.lastPlayed);
  const games = entries.filter(e => e.type === "game");
  const quizzes = entries.filter(e => e.type === "quiz");
  const totalAttempts = entries.reduce((s, e) => s + e.attempts, 0);
  const avgScore = entries.length
    ? Math.round(entries.reduce((s, e) => s + e.bestScore, 0) / entries.length)
    : 0;

  const handleReset = () => {
    if (window.confirm(t("progress.confirmReset", "Reset all progress? This cannot be undone."))) {
      resetProgress();
      setState(getProgress());
    }
  };

  const Card = ({ icon: Icon, title, value, sub }: any) => (
    <div className="bg-card rounded-2xl p-6 border border-border shadow-card text-center">
      <Icon className="w-8 h-8 mx-auto mb-2 text-primary" />
      <div className="text-3xl font-bold text-[hsl(120,80%,30%)]">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{title}</div>
      {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
    </div>
  );

  const Section = ({ title, items, emptyText, linkLabel, linkTo }: any) => (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-display font-bold text-[hsl(120,80%,30%)]">{title}</h2>
        <Link to={linkTo}><Button variant="heroOutline" size="sm">{linkLabel}</Button></Link>
      </div>
      {items.length === 0 ? (
        <div className="bg-muted/40 rounded-xl p-6 text-center text-muted-foreground">{emptyText}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((e: any) => (
            <div key={e.id} className="bg-card rounded-xl p-4 border border-border">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-bold">{e.name || e.id}</div>
                  <div className="text-xs text-muted-foreground">
                    {e.attempts} {t("progress.attempts", "attempts")} · {e.correctCount} {t("progress.correct", "correct")}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4" /> {e.bestScore}%
                </div>
              </div>
              <Progress value={e.bestScore} />
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link to={prefix}>
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" /> {t("progress.backToHome", "Back to Home")}
              </Button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
              <span className="text-[hsl(120,80%,30%)]" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                {t("progress.title", "Your")}
              </span>{" "}
              <span className="text-[hsl(330,80%,45%)]" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                {t("progress.titleHighlight", "Progress")}
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              {t("progress.subtitle", "Track every game and quiz you've played.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card icon={Trophy} title={t("progress.totalCorrect", "Correct Answers")} value={state.totalCorrect} />
            <Card icon={Gamepad2} title={t("progress.gamesPlayed", "Games Played")} value={games.length} />
            <Card icon={Brain} title={t("progress.quizzesTaken", "Quizzes Taken")} value={quizzes.length} />
            <Card icon={Star} title={t("progress.avgBest", "Avg Best Score")} value={`${avgScore}%`} sub={`${totalAttempts} ${t("progress.attempts", "attempts")}`} />
          </div>

          <Section
            title={t("progress.gamesSection", "🎮 Games")}
            items={games}
            emptyText={t("progress.noGames", "No games played yet — pick one and start playing!")}
            linkLabel={t("progress.allGames", "Browse Games")}
            linkTo={`${prefix}/#games`}
          />

          <Section
            title={t("progress.quizzesSection", "🧠 Quizzes")}
            items={quizzes}
            emptyText={t("progress.noQuizzes", "No quizzes taken yet — try one!")}
            linkLabel={t("progress.allQuizzes", "Browse Quizzes")}
            linkTo={`${prefix}/quizzes`}
          />

          <div className="text-center mt-8">
            <Button variant="ghost" onClick={handleReset} className="gap-2 text-muted-foreground">
              <RotateCcw className="w-4 h-4" /> {t("progress.reset", "Reset Progress")}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgressPage;

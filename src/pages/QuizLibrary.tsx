import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Clock, Star, BookOpen, Scroll, Crown, Flame, Church, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { useLanguagePrefix } from "@/hooks/useLanguagePrefix";

const quizCategoryMeta = [
  { id: "daniel-basics", icon: Crown, questions: 12, difficulty: "Easy", color: "from-amber-400 to-yellow-500" },
  { id: "revelation-seals", icon: Scroll, questions: 8, difficulty: "Medium", color: "from-purple-400 to-indigo-500" },
  { id: "revelation-trumpets", icon: Flame, questions: 10, difficulty: "Hard", color: "from-red-400 to-orange-500" },
  { id: "three-angels", icon: Sparkles, questions: 8, difficulty: "Medium", color: "from-sky-400 to-blue-500" },
  { id: "sanctuary", icon: Church, questions: 10, difficulty: "Medium", color: "from-emerald-400 to-teal-500" },
  { id: "beasts", icon: BookOpen, questions: 15, difficulty: "Hard", color: "from-rose-400 to-pink-500" },
  { id: "timeline", icon: Clock, questions: 10, difficulty: "Hard", color: "from-violet-400 to-purple-500" },
  { id: "mixed", icon: Brain, questions: 53, difficulty: "Expert", color: "from-gradient-start to-gradient-end" },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-green-100 text-green-700";
    case "Medium": return "bg-yellow-100 text-yellow-700";
    case "Hard": return "bg-orange-100 text-orange-700";
    case "Expert": return "bg-red-100 text-red-700";
    default: return "bg-muted text-muted-foreground";
  }
};

const QuizLibrary = () => {
  const { t } = useTranslation();
  const { prefix } = useLanguagePrefix();
  const categories = t("quizLibrary.categories", { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="mb-8">
            <Link to={`${prefix}/#quiz`}>
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t("quizLibrary.backToHome")}
              </Button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
              {t("quizLibrary.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t("quizLibrary.title")}{" "}
              <span className="text-gradient-hero">{t("quizLibrary.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("quizLibrary.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {quizCategoryMeta.map((meta, index) => {
              const cat = categories[index];
              if (!cat) return null;
              return (
                <motion.div key={meta.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Link to={`${prefix}/quiz/${meta.id}`}>
                    <div className="group bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className={`p-6 bg-gradient-to-br ${meta.color}`}>
                        <meta.icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{cat.description}</p>
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(meta.difficulty)}`}>
                            {meta.difficulty}
                          </span>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Star className="w-4 h-4 text-amber-400" />
                            {meta.questions} {t("quizLibrary.questions")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 bg-card rounded-2xl p-6 border border-border shadow-card">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">53+</div>
                <div className="text-sm text-muted-foreground">{t("quizLibrary.totalQuestions")}</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">{t("quizLibrary.quizCategories")}</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">{t("quizLibrary.difficultyLevels")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuizLibrary;

import { motion } from "framer-motion";
import { Trophy, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const quizzes = [
  {
    title: "Daniel's Visions",
    questions: 15,
    badge: "🦁 Lion Master",
    completed: 67,
  },
  {
    title: "Revelation Symbols",
    questions: 20,
    badge: "📖 Scripture Scholar",
    completed: 45,
  },
  {
    title: "Prophecy Timeline",
    questions: 12,
    badge: "⏳ Time Keeper",
    completed: 89,
  },
  {
    title: "Beasts & Kingdoms",
    questions: 18,
    badge: "👑 Kingdom Expert",
    completed: 34,
  },
];

const QuizSection = () => {
  return (
    <section id="quizzes" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              <Trophy size={16} />
              Test Your Knowledge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Challenge Yourself with{" "}
              <span className="text-gradient">Fun Quizzes!</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Put your prophecy knowledge to the test! Answer questions, earn
              badges, and become a Bible prophecy expert. Track your progress and
              compete with friends!
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {["🏆 Earn Badges", "📊 Track Progress", "🎯 Beat High Scores"].map(
                (feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full"
                  >
                    <CheckCircle2 size={16} className="text-prophecy-green" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                )
              )}
            </div>

            <Button variant="hero" size="xl">
              Start Quiz Challenge
              <ArrowRight size={20} />
            </Button>
          </motion.div>

          {/* Right - Quiz Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="space-y-4">
              {quizzes.map((quiz, index) => (
                <motion.div
                  key={quiz.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="bg-card p-5 rounded-2xl shadow-card flex items-center justify-between cursor-pointer group hover:shadow-glow transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Trophy className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {quiz.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {quiz.questions} questions • {quiz.badge}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Progress circle */}
                    <div className="relative w-12 h-12">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          className="stroke-muted fill-none"
                          strokeWidth="4"
                        />
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          className="stroke-primary fill-none"
                          strokeWidth="4"
                          strokeDasharray={`${quiz.completed * 1.256} 126`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
                        {quiz.completed}%
                      </span>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;

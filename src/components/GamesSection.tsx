import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Gamepad2, Puzzle, Target, Layers, Scroll } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguagePrefix } from "@/hooks/useLanguagePrefix";

const gameMeta = [
  { icon: Puzzle, color: "from-prophecy-gold/80", slug: "match-the-beasts", difficulty: "easy", time: "5 min" },
  { icon: Layers, color: "from-prophecy-teal/80", difficulty: "medium", time: "10 min", slug: "prophecy-timeline" },
  { icon: Target, color: "from-prophecy-purple/80", difficulty: "easy", time: "5 min", slug: "symbol-hunter" },
  { icon: Gamepad2, color: "from-prophecy-gold/80", difficulty: "hard", time: "15 min", slug: "kingdom-builder" },
  { icon: Puzzle, color: "from-prophecy-coral/80", difficulty: "medium", time: "8 min", slug: "daniels-visions" },
  { icon: Target, color: "from-prophecy-blue/80", difficulty: "medium", time: "6 min", slug: "daniel-7-beasts" },
  { icon: Layers, color: "from-prophecy-gold/80", difficulty: "hard", time: "10 min", slug: "daniel-11-kings" },
  { icon: Target, color: "from-prophecy-blue/80", difficulty: "easy", time: "3 min", slug: "prophet-quiz" },
  { icon: Layers, color: "from-prophecy-green/80", difficulty: "easy", time: "5 min", slug: "bible-books" },
  { icon: Gamepad2, color: "from-prophecy-gold/80", difficulty: "medium", time: "5 min", slug: "memory-verse" },
  { icon: Target, color: "from-prophecy-coral/80", difficulty: "medium", time: "8 min", slug: "sanctuary-explorer" },
  { icon: Puzzle, color: "from-prophecy-green/80", difficulty: "medium", time: "5 min", slug: "fruit-of-spirit" },
  { icon: Layers, color: "from-prophecy-blue/80", difficulty: "hard", time: "10 min", slug: "ten-commandments" },
  { icon: Gamepad2, color: "from-prophecy-gold/80", difficulty: "easy", time: "5 min", slug: "creation-days" },
  { icon: Scroll, color: "from-prophecy-purple/80", difficulty: "medium", time: "7 min", slug: "revelation-10" },
  { icon: Target, color: "from-prophecy-gold/80", difficulty: "hard", time: "10 min", slug: "investigative-judgment" },
  { icon: Layers, color: "from-prophecy-coral/80", difficulty: "hard", time: "8 min", slug: "time-of-end" },
];

const vibrantBorders: Record<string, string> = {
  "from-prophecy-gold/80": "border-b-prophecy-gold",
  "from-prophecy-coral/80": "border-b-prophecy-coral",
  "from-prophecy-blue/80": "border-b-prophecy-blue",
  "from-prophecy-purple/80": "border-b-prophecy-purple",
  "from-prophecy-teal/80": "border-b-prophecy-teal",
  "from-prophecy-green/80": "border-b-prophecy-green",
};

const vibrantBg: Record<string, string> = {
  "from-prophecy-gold/80": "bg-prophecy-gold/10 hover:bg-prophecy-gold/20",
  "from-prophecy-coral/80": "bg-prophecy-coral/10 hover:bg-prophecy-coral/20",
  "from-prophecy-blue/80": "bg-prophecy-blue/10 hover:bg-prophecy-blue/20",
  "from-prophecy-purple/80": "bg-prophecy-purple/10 hover:bg-prophecy-purple/20",
  "from-prophecy-teal/80": "bg-prophecy-teal/10 hover:bg-prophecy-teal/20",
  "from-prophecy-green/80": "bg-prophecy-green/10 hover:bg-prophecy-green/20",
};

const vibrantHeaderBg: Record<string, string> = {
  "from-prophecy-gold/80": "bg-prophecy-gold/30",
  "from-prophecy-coral/80": "bg-prophecy-coral/30",
  "from-prophecy-blue/80": "bg-prophecy-blue/30",
  "from-prophecy-purple/80": "bg-prophecy-purple/30",
  "from-prophecy-teal/80": "bg-prophecy-teal/30",
  "from-prophecy-green/80": "bg-prophecy-green/30",
};

const GamesSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { prefix } = useLanguagePrefix();
  const items = t("games.items", { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section id="games" className="py-20 bg-muted/50 relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 text-6xl opacity-20"
      >
        🎮
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 text-5xl opacity-20"
      >
        🎲
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-[hsl(120,80%,30%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("games.title")}</span>{" "}
            <span className="text-[hsl(330,80%,45%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("games.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("games.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameMeta.map((meta, index) => {
            const item = items[index];
            if (!item) return null;
            const difficultyLabel = t(`games.difficulty.${meta.difficulty}`);
            return (
              <motion.div
                key={meta.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => navigate(`${prefix}/games/${meta.slug}`)}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
                  <div className={`h-28 ${meta.gradient} relative flex items-center justify-center`}>
                    <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                      <meta.icon className="w-14 h-14 text-foreground opacity-60" />
                    </motion.div>
                    <span className="absolute top-3 right-3 bg-card/90 text-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {difficultyLabel}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-[hsl(330,80%,45%)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">⏱️ {meta.time}</span>
                      <Button variant="game" size="sm">
                        {t("games.playNow")}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
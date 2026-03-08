import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import heroLion from "@/assets/hero-lion.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-20 text-5xl hidden lg:block"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 left-20 text-4xl hidden lg:block"
      >
        🦁
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-48 left-32 text-3xl hidden lg:block"
      >
        📜
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6"
            >
              <Sparkles size={16} />
              {t("hero.badge", "SDA Bible Prophecy for Kids")}
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-[hsl(120,100%,45%)]">{t("hero.title1")}</span>{" "}
              <span className="text-[hsl(0,100%,50%)]">{t("hero.titleHighlight")}</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-[hsl(120,100%,45%)]">{t("hero.title2")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}>
                <Play size={20} />
                {t("hero.startPlaying")}
              </Button>
              <Button variant="heroOutline" size="xl" onClick={() => document.getElementById('learn')?.scrollIntoView({ behavior: 'smooth' })}>
                {t("hero.learnFirst")}
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { number: "50+", label: t("hero.statGames") },
                { number: "100+", label: t("hero.statQuizzes") },
                { number: "7", label: t("hero.statTopics", "Prophecy Topics") },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl scale-90" />
              <img
                src={heroLion}
                alt="Winged Lion from Daniel's Prophecy"
                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-card"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

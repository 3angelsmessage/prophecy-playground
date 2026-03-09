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
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroLion}
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full object-cover drop-shadow-[0_0_80px_hsl(var(--primary)/0.3)]"
        />
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl z-[1]" />
      

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Text Content - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center max-w-3xl"
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

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-[hsl(120,100%,45%)]" style={{ WebkitTextStroke: '3px white', paintOrder: 'stroke fill' }}>{t("hero.title1")}</span>{" "}
              <span className="text-[hsl(330,80%,45%)]">{t("hero.titleHighlight")}</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-[hsl(120,100%,45%)]" style={{ WebkitTextStroke: '3px white', paintOrder: 'stroke fill' }}>{t("hero.title2")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="sm" className="sm:h-11 sm:px-6 sm:text-sm" onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}>
                <Play size={16} />
                {t("hero.startPlaying")}
              </Button>
              <Button variant="heroOutline" size="sm" className="sm:h-11 sm:px-6 sm:text-sm" onClick={() => document.getElementById('learn')?.scrollIntoView({ behavior: 'smooth' })}>
                {t("hero.learnFirst")}
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12 justify-center"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;

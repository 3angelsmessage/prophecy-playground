import { motion } from "framer-motion";
import { Play } from "lucide-react";
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
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover drop-shadow-[0_0_80px_hsl(var(--primary)/0.3)]"
        />
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl z-[1]" />
      

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-between min-h-[calc(100vh-6rem)]">
        {/* Text Content - Centered */}
        <div className="flex-1 flex items-end pb-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl"
          >

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-[hsl(120,80%,30%)]" style={{ WebkitTextStroke: '10px white', paintOrder: 'stroke fill' }}>{t("hero.title1")}</span>{" "}
              <span className="text-[hsl(330,80%,45%)]" style={{ WebkitTextStroke: '10px white', paintOrder: 'stroke fill' }}>{t("hero.titleHighlight")}</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-[hsl(120,80%,30%)]" style={{ WebkitTextStroke: '10px white', paintOrder: 'stroke fill' }}>{t("hero.title2")}</span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-white mb-8 max-w-lg mx-auto" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              {t("hero.subtitle")}
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 justify-center"
            >
              {[
                { number: "50+", label: t("hero.statGames") },
                { number: "100+", label: t("hero.statQuizzes") },
                { number: "7", label: t("hero.statTopics", "Prophecy Topics") },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-[hsl(120,80%,30%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7), -1px -1px 3px rgba(0,0,0,0.5)' }}>
                    {stat.number}
                  </p>
                  <p className="text-sm text-[hsl(330,80%,45%)] font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Buttons - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center pb-24"
        >
          <Button variant="hero" size="sm" className="w-auto px-5 h-10 text-sm" onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}>
            <Play size={14} />
            {t("hero.startPlaying")}
          </Button>
          <Button variant="heroOutline" size="sm" className="w-auto px-5 h-10 text-sm" onClick={() => document.getElementById('learn')?.scrollIntoView({ behavior: 'smooth' })}>
            {t("hero.learnFirst")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

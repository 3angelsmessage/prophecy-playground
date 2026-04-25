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
      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl z-[1]" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Lion at the top */}
        <motion.img
          src={heroLion}
          alt=""
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain mt-8 sm:mt-12 drop-shadow-[0_0_80px_hsl(var(--primary)/0.3)]"
        />

        {/* "Amazing Bible prophecies" heading below the lion */}

        {/* Existing texts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-3xl"
        >
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
            <span
              className="text-[hsl(120,80%,30%)]"
              style={{ WebkitTextStroke: "8px white", paintOrder: "stroke fill" }}
            >
              {t("hero.title1")}
            </span>{" "}
            <span
              className="text-[hsl(330,80%,45%)]"
              style={{ WebkitTextStroke: "8px white", paintOrder: "stroke fill" }}
            >
              {t("hero.titleHighlight")}
            </span>{" "}
            <br className="hidden sm:block" />
            <span
              className="text-[hsl(120,80%,30%)]"
              style={{ WebkitTextStroke: "8px white", paintOrder: "stroke fill" }}
            >
              {t("hero.title2")}
            </span>
          </h1>

          <p
            className="text-base sm:text-lg font-bold text-white mb-8 max-w-lg mx-auto"
            style={{
              textShadow:
                "2px 2px 0 #404040, -2px -2px 0 #404040, 2px -2px 0 #404040, -2px 2px 0 #404040, 3px 3px 8px rgba(64,64,64,0.9)",
            }}
          >
            {t("hero.subtitle")}
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-6 sm:gap-8 justify-center mb-8"
          >
            {[
              { number: "50+", label: t("hero.statGames") },
              { number: "100+", label: t("hero.statQuizzes") },
              { number: "7", label: t("hero.statTopics", "Prophecy Topics") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-display text-3xl sm:text-4xl font-bold text-[hsl(120,80%,30%)]"
                  style={{
                    textShadow:
                      "2px 2px 4px rgba(0,0,0,0.7), -1px -1px 3px rgba(0,0,0,0.5)",
                  }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-sm sm:text-base text-[hsl(330,80%,45%)] font-semibold"
                  style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Buttons - smaller, Learn left / Play right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-row gap-3 justify-center items-center w-full max-w-md"
        >
          <Button
            variant="heroOutline"
            size="sm"
            className="flex-1 px-4 h-10 text-sm"
            onClick={() =>
              document.getElementById("learn")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("hero.learnFirst")}
          </Button>
          <Button
            variant="hero"
            size="sm"
            className="flex-1 px-4 h-10 text-sm"
            onClick={() =>
              document.getElementById("games")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Play size={16} />
            {t("hero.startPlaying")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

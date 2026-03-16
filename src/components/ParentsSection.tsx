import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Heart, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const featureIcons = [Shield, Heart, Users, BookOpen];

const ParentsSection = () => {
  const { t } = useTranslation();
  const [showGuide, setShowGuide] = useState(false);
  const rawItems = t("parents.features", { returnObjects: true });
  const features = Array.isArray(rawItems) ? rawItems as Array<{ title: string; description: string }> : [];

  return (
    <section id="parents" className="py-20 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-[hsl(120,80%,30%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("parents.title")}</span> <span className="text-[hsl(330,80%,45%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("parents.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("parents.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" onClick={() => setShowGuide(!showGuide)}>
                {t("parents.guideBtn")}
              </Button>
              <Button variant="heroOutline" size="lg">
                {t("parents.learnMoreBtn")}
              </Button>
            </div>

            <AnimatePresence>
              {showGuide && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 p-6 bg-card rounded-2xl border border-border shadow-card">
                    <p className="text-foreground leading-relaxed text-base">
                      As parents we want to ensure our children have access to the truth, and God's word is where we can search and find real truth.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = featureIcons[index] || BookOpen;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-5 rounded-2xl shadow-card hover:shadow-glow transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;

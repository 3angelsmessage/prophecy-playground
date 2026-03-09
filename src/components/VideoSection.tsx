import { motion } from "framer-motion";
import { Play, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const videoGradients = ["gradient-hero", "gradient-hero"];

const VideoSection = () => {
  const { t } = useTranslation();
  const rawItems = t("videos.items", { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems as Array<{
    title: string; reference: string; description: string; scripture: string; scriptureRef: string;
  }> : [];

  return (
    <section id="videos" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-4">
            {t("videos.badge")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-[hsl(120,100%,45%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("videos.title")}</span>{" "}
            <span className="text-[hsl(330,80%,45%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("videos.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("videos.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {items.map((lesson, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
                <div className={`${videoGradients[index] || "gradient-hero"} p-6 flex items-center gap-4`}>
                  <div className="w-14 h-14 rounded-2xl bg-card/20 flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary-foreground">{lesson.title}</h3>
                    <span className="text-primary-foreground/80 text-sm flex items-center gap-1">
                      <BookOpen className="w-4 h-4" /> {lesson.reference}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-foreground leading-relaxed mb-6">{lesson.description}</p>
                  <div className="bg-muted/50 rounded-2xl p-6 border-l-4 border-primary">
                    <p className="text-foreground italic leading-relaxed text-sm md:text-base">{lesson.scripture}</p>
                    <span className="block mt-3 text-xs font-bold text-muted-foreground">📖 {lesson.scriptureRef}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
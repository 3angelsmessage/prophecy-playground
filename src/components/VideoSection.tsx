import { motion } from "framer-motion";
import { Play, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const videoGradients = ["gradient-hero", "gradient-hero", "gradient-hero"];

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
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-[hsl(120,80%,30%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("videos.title")}</span>{" "}
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

        {/* Future video topics grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-16"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-center mb-8">
            <span className="text-[hsl(120,80%,30%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Coming</span>{" "}
            <span className="text-[hsl(330,80%,45%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>Soon</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl shadow-card border-2 border-primary/30 overflow-hidden hover:border-primary/60 transition-colors">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/vHKkAfl0cec"
                  title="The Story of Young Ellen G. White"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </AspectRatio>
              <div className="p-5">
                <h4 className="font-display font-bold text-base mb-1">The Story of Young Ellen G. White</h4>
                <p className="text-sm text-muted-foreground">Discover the early life of God's end-time messenger.</p>
              </div>
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl shadow-card border-2 border-dashed border-border overflow-hidden hover:border-primary/50 transition-colors"
              >
                <AspectRatio ratio={16 / 9}>
                  <div className="w-full h-full gradient-hero flex items-center justify-center">
                    <Play className="w-12 h-12 text-primary-foreground/60" />
                  </div>
                </AspectRatio>
                <div className="p-5">
                  <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted/60 rounded w-full mb-1" />
                  <div className="h-4 bg-muted/60 rounded w-5/6" />
                  <p className="mt-4 text-xs font-bold text-muted-foreground uppercase tracking-wide">Coming soon</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
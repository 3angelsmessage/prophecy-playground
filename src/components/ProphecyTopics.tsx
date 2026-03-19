import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import TopicCard from "./TopicCard";
import danielBeasts from "@/assets/daniel-beasts.png";
import revelationDragon from "@/assets/revelation-dragon.png";
import sanctuary from "@/assets/sanctuary.png";
import prophecyTimeline from "@/assets/prophecy-timeline.png";
import lambZion from "@/assets/lamb-zion.png";
import threeAngels from "@/assets/three-angels.png";
import nebuchadnezzarStatue from "@/assets/nebuchadnezzar-statue.png";
import newJerusalem from "@/assets/new-jerusalem.png";
import investigativeJudgment from "@/assets/investigative-judgment.png";
import ellenWhite from "@/assets/ellen-white.png";
import sabbathDay from "@/assets/sabbath-day.png";

const topicImages = [
  { image: nebuchadnezzarStatue, color: "from-prophecy-gold/80", slug: "daniels-statue" },
  { image: danielBeasts, color: "from-prophecy-coral/80", slug: "four-beasts" },
  { image: lambZion, color: "from-prophecy-blue/80", slug: "seven-seals" },
  { image: threeAngels, color: "from-prophecy-gold/80", slug: "three-angels" },
  { image: sanctuary, color: "from-prophecy-purple/80", slug: "sanctuary" },
  { image: investigativeJudgment, color: "from-prophecy-teal/80", slug: "investigative-judgment" },
  { image: prophecyTimeline, color: "from-prophecy-coral/80", slug: "time-of-end" },
  { image: newJerusalem, color: "from-prophecy-gold/80", slug: "new-jerusalem" },
  { image: ellenWhite, color: "from-prophecy-purple/80", slug: "ellen-white" },
  { image: sabbathDay, color: "from-prophecy-teal/80", slug: "sabbath-day" },
];

const ProphecyTopics = () => {
  const { t } = useTranslation();
  const { lang = "en" } = useParams();
  const rawItems = t("topics.items", { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems as Array<{ title: string; description: string; book: string }> : [];

  return (
    <section id="learn" className="py-20 relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-[hsl(120,80%,30%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("topics.title")}</span> <span className="text-[hsl(330,80%,45%)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>{t("topics.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("topics.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const meta = topicImages[index] || topicImages[0];
            return (
              <TopicCard
                key={item.title}
                title={item.title}
                description={item.description}
                image={meta.image}
                color={meta.color}
                slug={meta.slug}
                lang={lang}
                delay={index * 0.1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProphecyTopics;

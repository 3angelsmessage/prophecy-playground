import { motion } from "framer-motion";
import TopicCard from "./TopicCard";
import danielBeasts from "@/assets/daniel-beasts.png";
import revelationDragon from "@/assets/revelation-dragon.png";
import sanctuary from "@/assets/sanctuary.png";
import prophecyTimeline from "@/assets/prophecy-timeline.png";
import lambZion from "@/assets/lamb-zion.png";
import threeAngels from "@/assets/three-angels.png";

const topics = [
  {
    title: "Daniel's Four Beasts",
    description:
      "Learn about the lion, bear, leopard, and terrifying beast that represent world empires in God's prophecy!",
    image: danielBeasts,
    color: "from-prophecy-gold/80",
  },
  {
    title: "The Great Dragon",
    description:
      "Discover the seven-headed dragon from Revelation and what it means for the end times!",
    image: revelationDragon,
    color: "from-prophecy-coral/80",
  },
  {
    title: "Heavenly Sanctuary",
    description:
      "Explore the beautiful sanctuary in heaven where Jesus ministers for us today!",
    image: sanctuary,
    color: "from-prophecy-purple/80",
  },
  {
    title: "Prophecy Timeline",
    description:
      "See how Daniel's statue reveals the rise and fall of world kingdoms through history!",
    image: prophecyTimeline,
    color: "from-prophecy-teal/80",
  },
  {
    title: "The Lamb of God",
    description:
      "Meet the Lamb on Mount Zion and learn about the 144,000 special followers of Jesus!",
    image: lambZion,
    color: "from-prophecy-blue/80",
  },
];

const ProphecyTopics = () => {
  return (
    <section id="learn" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4">
            📚 Explore Prophecy Topics
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Amazing <span className="text-gradient">Bible Adventures</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dive into the exciting world of Bible prophecy with these amazing
            topics from the books of Daniel and Revelation!
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <TopicCard
              key={topic.title}
              title={topic.title}
              description={topic.description}
              image={topic.image}
              color={topic.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProphecyTopics;

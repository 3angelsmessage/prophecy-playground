import { motion } from "framer-motion";
import GameCard from "./GameCard";
import { Gamepad2 } from "lucide-react";

const games = [
  {
    title: "Beast Match Memory",
    category: "Daniel 7",
    difficulty: "Easy" as const,
    duration: "5 min",
    players: "1 player",
    emoji: "🦁",
    colorClass: "bg-prophecy-gold/30",
  },
  {
    title: "Statue Builder",
    category: "Daniel 2",
    difficulty: "Medium" as const,
    duration: "10 min",
    players: "1-2 players",
    emoji: "🗿",
    colorClass: "bg-prophecy-teal/30",
  },
  {
    title: "Seven Seals Adventure",
    category: "Revelation",
    difficulty: "Medium" as const,
    duration: "15 min",
    players: "1 player",
    emoji: "📜",
    colorClass: "bg-prophecy-purple/30",
  },
  {
    title: "Dragon Escape",
    category: "Revelation 12",
    difficulty: "Hard" as const,
    duration: "20 min",
    players: "1-4 players",
    emoji: "🐉",
    colorClass: "bg-prophecy-coral/30",
  },
  {
    title: "Sanctuary Explorer",
    category: "Hebrews & Revelation",
    difficulty: "Easy" as const,
    duration: "8 min",
    players: "1 player",
    emoji: "⛪",
    colorClass: "bg-prophecy-blue/30",
  },
  {
    title: "Timeline Challenge",
    category: "Daniel & Revelation",
    difficulty: "Hard" as const,
    duration: "12 min",
    players: "1-2 players",
    emoji: "⏰",
    colorClass: "bg-prophecy-green/30",
  },
];

const GamesSection = () => {
  return (
    <section id="games" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Decorative elements */}
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-4">
            <Gamepad2 size={16} />
            Fun Learning Games
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Play & <span className="text-gradient">Learn</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Master Bible prophecy through exciting interactive games! Each game
            teaches important truths from Daniel and Revelation.
          </p>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <GameCard key={game.title} {...game} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;

import { motion } from "framer-motion";
import { Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GameCardProps {
  title: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  duration: string;
  players: string;
  emoji: string;
  colorClass: string;
  delay?: number;
}

const difficultyColors = {
  Easy: "bg-prophecy-green/20 text-prophecy-green",
  Medium: "bg-prophecy-gold/20 text-prophecy-gold",
  Hard: "bg-prophecy-coral/20 text-prophecy-coral",
};

const GameCard = ({
  title,
  category,
  difficulty,
  duration,
  players,
  emoji,
  colorClass,
  delay = 0,
}: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          className={`w-16 h-16 rounded-2xl ${colorClass} flex items-center justify-center text-3xl`}
        >
          {emoji}
        </motion.div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColors[difficulty]}`}
        >
          {difficulty}
        </span>
      </div>

      {/* Content */}
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {category}
      </span>
      <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-3">
        {title}
      </h3>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={14} />
          <span>{players}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < 4 ? "fill-primary text-primary" : "text-muted"}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-1">4.8</span>
      </div>

      {/* CTA */}
      <Button variant="game" className="w-full">
        Play Now! 🎮
      </Button>
    </motion.div>
  );
};

export default GameCard;

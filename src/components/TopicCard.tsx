import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TopicCardProps {
  title: string;
  description: string;
  image: string;
  color: string;
  slug: string;
  lang: string;
  delay?: number;
}

const TopicCard = ({ title, description, image, color, slug, lang, delay = 0 }: TopicCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <Link to={`/${lang}/topics/${slug}`}>
        <div className="relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${color} to-transparent opacity-60`}
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {description}
            </p>
            <div className="flex items-center gap-2 text-[hsl(330,80%,45%)] font-semibold">
              <span>Explore</span>
              <ChevronRight
                size={18}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-primary/30 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
};

export default TopicCard;

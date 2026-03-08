import { motion } from "framer-motion";
import { Shield, Heart, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Safe Environment",
    description: "100% ad-free and kid-safe content. No in-app purchases or external links.",
  },
  {
    icon: Heart,
    title: "Faith-Based Learning",
    description: "Age-appropriate Bible lessons that nurture spiritual growth and character.",
  },
  {
    icon: Users,
    title: "Family Time",
    description: "Discussion guides and activities perfect for family devotions together.",
  },
  {
    icon: BookOpen,
    title: "Progress Tracking",
    description: "Track your child's learning journey through prophecy topics and games.",
  },
];

const ParentsSection = () => {
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
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4">
              👨‍👩‍👧‍👦 For Parents
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Place You Can <span className="text-gradient">Trust</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We know how important it is to provide safe, meaningful content for your children.
              Prophecy Kids is designed with both kids and parents in mind, teaching SDA Bible prophecy
              in fun, engaging ways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Parent's Guide
              </Button>
              <Button variant="heroOutline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-5 rounded-2xl shadow-card hover:shadow-glow transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
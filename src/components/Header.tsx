import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, BookOpen, Gamepad2, Trophy, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "Learn", icon: BookOpen, href: "#learn" },
    { name: "Games", icon: Gamepad2, href: "#games" },
    { name: "Quizzes", icon: Trophy, href: "#quizzes" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md shadow-soft"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-2xl">📖</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-foreground leading-none">
                Prophecy Kids
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                Learn Bible Prophecy
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all font-semibold"
              >
                <link.icon size={18} />
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Start Learning! 🚀
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted text-foreground font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <link.icon size={20} />
                {link.name}
              </a>
            ))}
            <Button variant="hero" className="w-full mt-4">
              Start Learning! 🚀
            </Button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, Gamepad2, Trophy, Home, Play, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), icon: Home, href: "#home" },
    { name: t("nav.learn"), icon: BookOpen, href: "#learn" },
    { name: t("nav.videos"), icon: Play, href: "#videos" },
    { name: t("nav.games"), icon: Gamepad2, href: "#games" },
    { name: t("nav.quiz"), icon: Trophy, href: "#quizzes" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md shadow-soft"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
            <img src={logo} alt="Prophecy Kids Logo" className="w-12 h-12 rounded-full object-cover" />
            <div className="hidden sm:block">
              <h1 className="font-display text-2xl font-extrabold leading-none" style={{ color: 'hsl(120, 100%, 40%)' }}>
                Prophecy Kids
              </h1>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all font-semibold"
              >
                <link.icon size={18} />
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="hero" size="lg" onClick={() => document.getElementById('learn')?.scrollIntoView({ behavior: 'smooth' })}>
              {t("nav.startLearning")}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2 rounded-lg bg-muted"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
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
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  <link.icon size={20} />
                  {link.name}
                </a>
              ))}
              <Button variant="hero" className="w-full mt-4" onClick={() => { setIsOpen(false); document.getElementById('learn')?.scrollIntoView({ behavior: 'smooth' }); }}>
                {t("nav.startLearning")}
              </Button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
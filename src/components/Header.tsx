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
    const id = href.replace('#', '');
    // Defer to allow mobile menu to close before measuring
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const headerOffset = 96; // ~6rem to clear the fixed header
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 50);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FCFAF6] backdrop-blur-md shadow-soft"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 ml-[5px]">
            <img src={logo} alt="Prophecy Kids Logo" className="w-28 h-28 sm:w-32 sm:h-32 object-contain" />
          </motion.div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xl text-[hsl(120,80%,30%)] hover:text-[hsl(120,80%,25%)] hover:bg-[hsl(120,80%,30%)]/10 transition-all font-extrabold"
              >
                <link.icon size={20} />
                {link.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="hero" size="lg" className="text-base px-6 py-3 h-12" onClick={() => document.getElementById('learn')?.scrollIntoView({ behavior: 'smooth' })}>
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
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted text-[hsl(120,80%,30%)] font-semibold"
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
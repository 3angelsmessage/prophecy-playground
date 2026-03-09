import { motion } from "framer-motion";
import { Heart, BookOpen, Mail, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLanguagePrefix } from "@/hooks/useLanguagePrefix";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();
  const { prefix } = useLanguagePrefix();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(330,80%,45%)] text-[hsl(120,100%,45%)] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Prophecy Kids Logo" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="font-display text-xl font-bold">{t("footer.brand")}</h3>
                <p className="text-sm opacity-80">Learn Bible Prophecy</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-sm mb-4">{t("footer.brandDesc")}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-display font-bold text-lg mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#home" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><BookOpen className="w-4 h-4" /> {t("footer.home")}</a></li>
              <li><a href="#learn" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><BookOpen className="w-4 h-4" /> {t("footer.learnProphecies")}</a></li>
              <li><a href="#games" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Star className="w-4 h-4" /> {t("footer.playGames")}</a></li>
              <li><a href="#quizzes" className="flex items-center gap-2 hover:opacity-100 transition-opacity"><BookOpen className="w-4 h-4" /> {t("footer.takeQuizzes")}</a></li>
              <li><Link to={`${prefix}/contact`} className="flex items-center gap-2 hover:opacity-100 transition-opacity"><Mail className="w-4 h-4" /> {t("footer.contactUs")}</Link></li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-display font-bold text-lg mb-4">{t("footer.scripturePromise")}</h4>
            <blockquote className="text-sm text-white opacity-90 italic border-l-2 border-white pl-4">
              {t("footer.scriptureText")}
              <footer className="mt-2 text-white font-semibold not-italic">{t("footer.scriptureRef")}</footer>
            </blockquote>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-[hsl(120,100%,45%)]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            {t("footer.copyright")} <Heart size={14} className="inline text-white" /> {t("footer.forStudents")}
          </p>
          <p className="text-sm opacity-80">{t("footer.sdaBased")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
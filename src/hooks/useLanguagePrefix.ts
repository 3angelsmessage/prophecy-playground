import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const useLanguagePrefix = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const validLangs = ["en", "fr", "es", "ht"];
    const validLang = validLangs.includes(lang || "") ? lang! : "en";
    if (i18n.language !== validLang && typeof i18n.changeLanguage === 'function') {
      i18n.changeLanguage(validLang);
    }
  }, [lang, i18n]);

  const validLangs = ["en", "fr", "es", "ht"];
  const currentLang = validLangs.includes(lang || "") ? lang! : "en";
  const prefix = `/${currentLang}`;

  return { lang: currentLang, prefix };
};

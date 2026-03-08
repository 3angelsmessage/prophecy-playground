import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "ht", label: "HT" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = lang || i18n.language || "en";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|fr|es|ht)/, "") || "/";
    navigate(`/${newLang}${pathWithoutLang === "/" ? "" : pathWithoutLang}`);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-foreground text-sm font-semibold border border-border"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4" />
        {currentLang.toUpperCase()}
      </button>
      {open && (
        <div className="absolute right-0 mt-1 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {languages
            .filter((l) => l.code !== currentLang)
            .map((l) => (
              <button
                key={l.code}
                onClick={() => switchLanguage(l.code)}
                className="block w-full px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors text-left"
              >
                {l.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

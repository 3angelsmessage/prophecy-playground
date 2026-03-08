import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
  { code: "ht", label: "HT" },
] as const;

const validLangs = languages.map((l) => l.code);

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = validLangs.includes((lang || "") as (typeof validLangs)[number])
    ? (lang as (typeof validLangs)[number])
    : ((i18n.resolvedLanguage || i18n.language || "en").slice(0, 2) as (typeof validLangs)[number]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLanguage = (newLang: string) => {
    if (newLang === currentLang) {
      setOpen(false);
      return;
    }

    const segments = location.pathname.split("/").filter(Boolean);
    const restSegments = validLangs.includes((segments[0] || "") as (typeof validLangs)[number])
      ? segments.slice(1)
      : segments;
    const newPath = `/${newLang}${restSegments.length ? `/${restSegments.join("/")}` : ""}`;

    i18n.changeLanguage(newLang);
    navigate({
      pathname: newPath,
      search: location.search,
      hash: location.hash,
    });
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

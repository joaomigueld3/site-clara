"use client"

export type Language = "pt" | "en" | "es"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

const languages: { code: Language; name: string; flag: string; label: string }[] = [
  { code: "pt", name: "Português", flag: "🇧🇷", label: "BR" },
  { code: "es", name: "Español", flag: "🇪🇸", label: "ES" },
  { code: "en", name: "English", flag: "🇬🇧", label: "UK" },
]

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div
      role="group"
      aria-label="Idioma"
      className="inline-flex items-center gap-1 rounded-full border border-border bg-card/70 p-1 backdrop-blur"
    >
      {languages.map((language) => {
        const active = currentLanguage === language.code
        return (
          <button
            key={language.code}
            type="button"
            onClick={() => onLanguageChange(language.code)}
            title={language.name}
            aria-label={language.name}
            aria-pressed={active}
            className={`flex h-8 items-center gap-1.5 rounded-full px-2.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <span className={`text-base leading-none transition-transform duration-300 ${active ? "scale-110" : "hover:scale-125"}`}>
              {language.flag}
            </span>
            <span className="text-xs tracking-wide">{language.label}</span>
          </button>
        )
      })}
    </div>
  )
}

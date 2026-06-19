"use client"

import Image from "next/image"

export type Language = "pt" | "en" | "es"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

const languages: { code: Language; name: string; flagSrc: string }[] = [
  { code: "pt", name: "Português", flagSrc: "/flags/brasil.png" },
  { code: "es", name: "Español", flagSrc: "/flags/espanha.png" },
  { code: "en", name: "English", flagSrc: "/flags/uk.png" },
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
            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <span className={`overflow-hidden rounded-full transition-transform duration-300 ${active ? "scale-110" : "hover:scale-125"}`}>
              <Image src={language.flagSrc} alt="" aria-hidden width={20} height={20} className="h-5 w-5 object-cover" />
            </span>
          </button>
        )
      })}
    </div>
  )
}

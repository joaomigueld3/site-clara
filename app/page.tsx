"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Heart,
  Instagram,
  MessageCircle,
  ExternalLink,
  HeartHandshake,
  Menu,
  X,
  Github,
  Globe,
  Linkedin,
  Utensils,
  Leaf,
  Wind,
  Moon,
  Brain,
  Quote,
  ArrowRight,
  GraduationCap,
  Monitor,
  Home,
  Clock,
  Sparkles,
} from "lucide-react"
import { LanguageSwitcher, type Language } from "@/components/language-switcher"
import { Reveal } from "@/components/reveal"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollProgress } from "@/components/scroll-progress"
import { translations } from "@/lib/translations"

const WHATSAPP = "https://wa.me/+558191873346"
const EMAIL = "consultorio.claradescendente@gmail.com"
const INSTAGRAM = "https://www.instagram.com/claradescendente/"
const LINKBIO = "https://lnk.bio/claradescedente"

export default function PsychologistLanding() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[currentLanguage]
  const logoPicture = "/clara-logo.jpg"

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const complementaryServices = [
    { icon: Leaf, title: t.mindfulnessTitle, desc: t.mindfulnessDesc },
    { icon: Wind, title: t.anxietyTitle, desc: t.anxietyDesc },
    { icon: Moon, title: t.depressionTitle, desc: t.depressionDesc },
    { icon: Brain, title: t.adhdTitle, desc: t.adhdDesc },
    { icon: Users, title: t.relationshipsTitle, desc: t.relationshipsDesc },
  ]

  const steps = [
    { title: t.step1Title, desc: t.step1Desc, meta: t.step1Meta },
    { title: t.step2Title, desc: t.step2Desc, meta: t.step2Meta },
    { title: t.step3Title, desc: t.step3Desc, meta: t.step3Meta },
    { title: t.step4Title, desc: t.step4Desc, meta: t.step4Meta },
  ]

  const seals = ["UFPE", "Duke University", "University of Sydney", "CEBRATA", "CBT Ohio"]

  return (
    <div className="theme-watercolor min-h-screen text-foreground overflow-x-hidden">
      <ScrollProgress />
      {/* ---------- Navegação ---------- */}
      <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-2 py-3">
            <a href="#top" onClick={closeMobileMenu} className="group flex min-w-0 items-center gap-2.5">
              <span className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-full bg-primary/10 ring-1 ring-border transition-transform duration-300 group-hover:scale-105">
                <img src={logoPicture} alt="Logo Maria Clara Descendente" className="h-full w-full object-cover" />
              </span>
              <span className="truncate font-serif text-lg font-semibold tracking-tight">{t.drName}</span>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              <a href="#about" className="nav-link">
                {t.about}
              </a>
              <a href="#services" className="nav-link">
                {t.services}
              </a>
              <a href="#approach" className="nav-link">
                {t.approach}
              </a>
              <a href="#contact" className="nav-link">
                {t.contact}
              </a>
            </div>

            <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden md:inline-block">
                <Button className="btn-shine rounded-full">{t.bookConsultation}</Button>
              </a>
              <div className="hidden md:block">
                <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
              </div>
              <ThemeToggle className="hidden md:inline-flex" />
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-0 px-4 py-4">
              {[
                { href: "#about", label: t.about },
                { href: "#services", label: t.services },
                { href: "#approach", label: t.approach },
                { href: "#contact", label: t.contact },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex min-h-[44px] items-center rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:text-foreground active:bg-muted/50"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-border pt-4">
                <div className="flex items-center justify-between gap-2 px-1">
                  <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
                  <ThemeToggle />
                </div>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                  <Button className="min-h-11 w-full rounded-full" size="lg">
                    <Calendar className="mr-2 h-4 w-4 shrink-0" />
                    {t.bookConsultation}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ---------- Hero ---------- */}
      <section id="top" className="relative px-4 pt-10 pb-12 sm:px-6 sm:pt-16 lg:pt-24 lg:pb-20">
        {/* manchas orgânicas */}
        <div
          aria-hidden
          className="animate-float-slower pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-float-slow pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="animate-fade-in-up space-y-7">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              {t.heroBadge}
            </span>

            <h1 className="text-display text-balance text-4xl sm:text-5xl lg:text-[3.4rem]">
              {t.heroHeadline}
            </h1>

            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-shine group min-h-12 w-full rounded-full px-7 text-base sm:w-auto">
                  <Calendar className="mr-2 h-4 w-4" />
                  {t.scheduleConsultation}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#about" className="inline-block">
                <Button
                  variant="outline"
                  size="lg"
                  className="min-h-12 w-full rounded-full border-primary/30 bg-transparent px-7 text-base sm:w-auto"
                >
                  {t.learnMore}
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-gentle-pulse rounded-full bg-primary" />
                {t.heroBadgeAccepting}
              </span>
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span className="flex items-center gap-2">
                <Monitor className="h-3.5 w-3.5 text-primary" />
                {t.heroBadgeOnline}
              </span>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <SocialLinks size="lg" />
            </div>
          </div>

          {/* Foto + cartão de credenciais */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 via-secondary/30 to-accent/20 blur-xl"
            />
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-border/60">
              <Image
                src="/pessoal-1.jpg"
                alt="Maria Clara Descendente, psicóloga clínica"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 480px"
                className="img-zoom object-cover"
              />
            </div>

            <div className="animate-float-slow absolute -bottom-6 -left-4 max-w-[16rem] sm:-left-8">
              <Card className="gap-0 border-border/70 bg-card/95 p-4 shadow-lg backdrop-blur sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </span>
                  <div className="leading-tight">
                    <p className="font-serif text-sm font-semibold">Mestrado · UFPE</p>
                    <p className="text-xs text-muted-foreground">Neuropsiquiatria e Comportamento</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Acolhimento (ponte de empatia) ---------- */}
      <section className="px-4 py-6 sm:px-6 sm:py-10">
        <Reveal className="mx-auto max-w-3xl">
          <figure className="relative rounded-2xl border border-border/60 bg-card/60 px-6 py-8 text-center sm:px-12 sm:py-12">
            <Quote className="mx-auto mb-4 h-8 w-8 text-accent" />
            <blockquote className="text-pretty font-serif text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              {t.empathyText}
            </blockquote>
          </figure>
        </Reveal>
      </section>

      {/* ---------- Serviços ---------- */}
      <section id="services" className="px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <span className="eyebrow mb-4">
              <Heart className="h-3.5 w-3.5" />
              {t.servicesEyebrow}
            </span>
            <h2 className="text-display text-balance text-3xl sm:text-4xl lg:text-[2.75rem]">{t.servicesTitle}</h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.servicesIntro}
            </p>
          </Reveal>

          {/* Bloco principal em destaque */}
          <Reveal variant="scale">
            <Card className="card-glow group relative gap-0 overflow-hidden border-primary/20 bg-gradient-to-br from-primary/8 via-card to-secondary/20 p-6 shadow-md hover:shadow-xl sm:p-9">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/10 blur-2xl"
              />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Utensils className="h-7 w-7" />
                </span>
                <div className="space-y-3">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">{t.edTag}</span>
                  <h3 className="font-serif text-2xl font-semibold leading-snug sm:text-[1.7rem]">{t.edTitle}</h3>
                  <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">{t.edDesc}</p>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Blocos complementares */}
          <div className="mt-10 sm:mt-12" />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {complementaryServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <Card className="card-glow group h-full gap-0 border-border/70 p-6 hover:border-primary/30 hover:shadow-lg">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/50 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 font-serif text-lg font-semibold leading-snug">{service.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                </Card>
              </Reveal>
            ))}

            {/* Bloco especial: família / Maudsley */}
            <Reveal delay={complementaryServices.length * 80} className="sm:col-span-2 lg:col-span-1">
              <Card className="card-glow group h-full gap-0 border-accent/40 bg-accent/8 p-6 hover:shadow-lg">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <HeartHandshake className="h-6 w-6" />
                </span>
                <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.14em] text-accent-foreground/80">
                  {t.familyTag}
                </span>
                <h3 className="mb-2 font-serif text-lg font-semibold leading-snug">{t.familyTitle}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{t.familyDesc}</p>
              </Card>
            </Reveal>
          </div>

          {/* Texto de fechamento */}
          <Reveal className="mx-auto mt-12 max-w-3xl text-center sm:mt-14">
            <p className="text-pretty leading-relaxed text-muted-foreground">{t.servicesClosing}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Sobre ---------- */}
      <section id="about" className="px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Foto */}
            <Reveal variant="scale" className="lg:sticky lg:top-24">
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                <div
                  aria-hidden
                  className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-secondary/30 to-primary/15 blur-xl"
                />
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-xl ring-1 ring-border/60">
                  <Image
                    src="/pessoal-2.jpg"
                    alt="Maria Clara Descendente em seu ambiente de atendimento"
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="img-zoom object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* Texto */}
            <Reveal className="space-y-5">
              <span className="eyebrow">
                <Leaf className="h-3.5 w-3.5" />
                {t.aboutEyebrow}
              </span>
              <h2 className="text-display text-balance text-3xl sm:text-4xl lg:text-[2.75rem]">{t.aboutTitle}</h2>

              <p className="border-l-2 border-accent/50 pl-4 text-pretty font-serif text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
                {t.aboutLead}
              </p>

              <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
                <p>{t.aboutP3}</p>

                <ul className="space-y-2.5 border-l-2 border-primary/30 pl-5">
                  {[t.aboutRef1, t.aboutRef2, t.aboutRef3, t.aboutRef4].map((ref, i) => (
                    <li key={i} className="flex gap-2.5 text-sm sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{ref}</span>
                    </li>
                  ))}
                </ul>

                <p>{t.aboutP4}</p>
              </div>

              {/* Selos de confiança */}
              <div className="pt-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {t.aboutSeals}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {seals.map((seal) => (
                    <span
                      key={seal}
                      className="rounded-full border border-border/70 bg-card/70 px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
                    >
                      {seal}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Abordagem / Jornada ---------- */}
      <section id="approach" className="relative px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-12 text-center sm:mb-16">
            <span className="eyebrow mb-4">
              <ArrowRight className="h-3.5 w-3.5" />
              {t.approachEyebrow}
            </span>
            <h2 className="text-display text-balance text-3xl sm:text-4xl lg:text-[2.75rem]">{t.approachTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.approachIntro}
            </p>
          </Reveal>

          {/* Linha do tempo vertical */}
          <ol className="relative space-y-6 sm:space-y-8">
            <span
              aria-hidden
              className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-primary/25 to-transparent sm:left-6"
            />
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90} className="group relative pl-16 sm:pl-20">
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-serif text-base font-semibold text-primary-foreground shadow-md ring-4 ring-background transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:text-lg">
                  {i + 1}
                </span>
                <Card className="card-glow gap-0 border-border/70 p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-semibold leading-snug sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.desc}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs font-medium text-primary sm:text-sm">
                    <Clock className="h-3.5 w-3.5" />
                    {step.meta}
                  </p>
                </Card>
              </Reveal>
            ))}
          </ol>

          {/* Formatos de atendimento */}
          <Reveal className="mt-14 sm:mt-16">
            <h3 className="mb-5 text-center font-serif text-xl font-semibold sm:text-2xl">{t.formatsTitle}</h3>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <Card className="card-glow group gap-0 border-border/70 p-6">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/50 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Monitor className="h-5 w-5" />
                </span>
                <h4 className="mb-1.5 font-serif text-lg font-semibold">{t.formatOnlineTitle}</h4>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{t.formatOnlineDesc}</p>
              </Card>
              <Card className="card-glow group gap-0 border-border/70 p-6">
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Home className="h-5 w-5" />
                </span>
                <h4 className="mb-1.5 font-serif text-lg font-semibold">{t.formatPresencialTitle}</h4>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{t.formatPresencialDesc}</p>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA final ---------- */}
      <section className="px-4 py-12 sm:px-6 sm:py-16">
        <Reveal variant="scale" className="mx-auto max-w-5xl">
          <div className="group relative overflow-hidden rounded-[2rem] border border-primary/20 shadow-lg">
            <Image
              src="/pessoal-3.jpg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="img-zoom object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/80 to-primary/55" />
            <div className="relative px-6 py-12 text-center sm:px-12 sm:py-16">
              <h2 className="text-display text-balance text-3xl text-primary-foreground sm:text-4xl lg:text-[2.6rem]">
                {t.finalCtaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85 sm:text-lg">
                {t.finalCtaText}
              </p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
                <Button
                  size="lg"
                  variant="secondary"
                  className="btn-shine group min-h-12 rounded-full bg-background px-8 text-base text-foreground hover:bg-background/90"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {t.scheduleConsultation}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Contato ---------- */}
      <section id="contact" className="px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10 text-center sm:mb-14">
            <span className="eyebrow mb-4">
              <MessageCircle className="h-3.5 w-3.5" />
              {t.contactEyebrow}
            </span>
            <h2 className="text-display text-balance text-3xl sm:text-4xl lg:text-[2.6rem]">{t.contactTitle}</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="h-full gap-0 border-border/70 p-6 sm:p-8">
                <h3 className="mb-6 font-serif text-xl font-semibold">{t.contactInfo}</h3>
                <div className="space-y-5">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3.5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="text-sm sm:text-base">+55 81 9187-3346</span>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="group flex items-center gap-3.5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="break-all text-sm transition-colors group-hover:text-primary sm:text-base">{EMAIL}</span>
                  </a>
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="pt-2 text-sm sm:text-base">
                      {t.locationLabel} <span className="text-muted-foreground">{t.locationOnline}</span>
                    </span>
                  </div>
                  <div className="border-t border-border pt-5">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      {t.socialNetworks}
                    </p>
                    <SocialLinks />
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={100}>
              <Card className="flex h-full flex-col gap-0 border-border/70 bg-gradient-to-br from-secondary/25 to-card p-6 sm:p-8">
                <h3 className="mb-4 font-serif text-xl font-semibold">{t.bookConsultation}</h3>
                <div className="mb-2 flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">{t.officeHours}</span>
                </div>
                <p className="text-sm text-muted-foreground">{t.mondayThursday}</p>

                <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>
                    {t.locationLabel} {t.locationOnline}
                  </span>
                </div>

                <div className="mt-auto space-y-3 pt-6">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="btn-shine min-h-12 w-full rounded-full text-base">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {t.bookAppointment}
                    </Button>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="block">
                    <Button variant="outline" className="min-h-12 w-full rounded-full border-primary/30 bg-transparent text-base">
                      <Mail className="mr-2 h-4 w-4" />
                      {t.emailLabel}
                    </Button>
                  </a>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Rodapé ---------- */}
      <footer className="border-t border-border px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:gap-0 md:text-left">
            <div className="flex items-center gap-2.5">
              <span className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-full bg-primary/10 ring-1 ring-border">
                <img src={logoPicture} alt="Logo Maria Clara Descendente" className="h-full w-full object-cover" />
              </span>
              <div className="leading-tight">
                <p className="font-serif text-sm font-semibold">{t.drName}</p>
                <p className="text-xs text-muted-foreground">{t.licenseNumber}</p>
              </div>
            </div>

            <div className="text-xs text-muted-foreground md:text-right">
              <p>{t.copyright}</p>
              <div className="mt-2 flex items-center justify-center gap-2 md:justify-end">
                <span>{t.developedBy}</span>
                <span className="flex gap-1">
                  <a href="https://joaodescendente.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Site">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:text-primary">
                      <Globe className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://github.com/joaomigueld3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:text-primary">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/joaomigueld3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:text-primary">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SocialLinks({ size = "md" }: { size?: "md" | "lg" }) {
  const dim = size === "lg" ? "h-12 w-12" : "h-11 w-11"
  const icon = size === "lg" ? "h-6 w-6" : "h-5 w-5"
  return (
    <div className="flex items-center gap-3">
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`flex ${dim} items-center justify-center rounded-full bg-muted/60 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
      >
        <Instagram className={icon} />
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`flex ${dim} items-center justify-center rounded-full bg-muted/60 text-[#25D366] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2`}
      >
        <MessageCircle className={icon} />
      </a>
      <a
        href={LINKBIO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link-in-bio"
        className={`flex ${dim} items-center justify-center rounded-full bg-muted/60 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
      >
        <ExternalLink className={icon} />
      </a>
    </div>
  )
}

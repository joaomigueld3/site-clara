"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, Award, BookOpen, Users, Heart, Instagram, MessageCircle, ExternalLink, HeartHandshake, Presentation, Menu, X } from "lucide-react"
import { LanguageSwitcher, type Language } from "@/components/language-switcher"
import { RichText } from "@/components/rich-text"
import { translations } from "@/lib/translations"

export default function PsychologistLanding() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[currentLanguage]
  const profilePicture = '/clara-profile-picture.jpg'
  const logoPicture = '/clara-logo.jpg'

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen theme-watercolor text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <a href="#" onClick={closeMobileMenu} className="flex items-center space-x-2 min-w-0">
              <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full overflow-hidden bg-primary flex-shrink-0 flex items-center justify-center">
                <img
                  src={logoPicture}
                  alt="Logo Maria Clara M. Descendente"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-base sm:text-lg truncate">{t.drName}</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.about}
              </a>
              <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.services}
              </a>
              <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.approach}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                {t.contact}
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="hidden md:block">
                <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
              </div>
              <a
                href="https://wa.me/+558191873346"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block"
              >
                <Button>{t.bookConsultation}</Button>
              </a>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-10 w-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu (expande abaixo da nav) */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm">
            <div className="flex flex-col px-4 py-4 gap-0">
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="py-3 px-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-lg active:bg-muted/50 min-h-[44px] flex items-center"
              >
                {t.about}
              </a>
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="py-3 px-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-lg active:bg-muted/50 min-h-[44px] flex items-center"
              >
                {t.services}
              </a>
              <a
                href="#approach"
                onClick={closeMobileMenu}
                className="py-3 px-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-lg active:bg-muted/50 min-h-[44px] flex items-center"
              >
                {t.approach}
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="py-3 px-3 text-base text-muted-foreground hover:text-foreground transition-colors rounded-lg active:bg-muted/50 min-h-[44px] flex items-center"
              >
                {t.contact}
              </a>
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-3">
                <div className="px-1">
                  <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
                </div>
                <a
                  href="https://wa.me/+558191873346"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  <Button className="w-full min-h-11" size="lg">
                    <Calendar className="w-4 h-4 mr-2 shrink-0" />
                    {t.bookConsultation}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <Badge variant="secondary" className="w-fit text-xs sm:text-sm">
                  {t.clinicalPsychologist}
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">{t.drName}</h1>
                <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">{t.credentials}</p>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                <RichText>{t.heroDescription}</RichText>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="https://wa.me/+558191873346"
                  target="_blank"                        //  abre em nova aba
                  rel="noopener noreferrer"              // Prática de segurança
              >
                <Button size="lg" className="text-base">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.scheduleConsultation}
                </Button>
              </a>                
                <a href="#about" className="inline-block">
                  <Button variant="outline" size="lg" className="text-base bg-transparent w-full sm:w-auto min-h-11">
                    {t.learnMore}
                  </Button>
                </a>
              </div>
              {/* Redes sociais */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/claradescendente/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/60 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/+558191873346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/60 text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a
                  href="https://lnk.bio/claradescedente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/60 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  aria-label="Link-in-bio"
                >
                  <ExternalLink className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:w-120 aspect-[4/5] rounded-2xl overflow-hidden bg-muted/20 mb-6">
                <img
                  src={profilePicture}
                  alt="Maria Clara M. Descendente - Psicóloga Clínica"
                  className="w-full h-full object-cover"
                />
              </div>

              <Card className="p-4 sm:p-6 bg-card border-border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-medium">{t.licensedPsychologist}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="font-medium">{t.mscNeuropsychiatry}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">{t.professorSpeaker}</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">{t.acceptingPatients}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">{t.specializationTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-0">
              <RichText>{t.specializationSubtitle}</RichText>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{t.eatingDisorders}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <RichText>{t.eatingDisordersDesc}</RichText>
                </p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{t.cbt}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <RichText>{t.cbtDesc}</RichText>
                </p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{t.act}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <RichText>{t.actDesc}</RichText>
                </p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{t.mindfulness}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <RichText>{t.mindfulnessDesc}</RichText>
                </p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{t.workshopMaudsley}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <RichText>{t.workshopMaudsleyDesc}</RichText>
                </p>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Presentation className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{t.trainingSessions}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <RichText>{t.trainingSessionsDesc}</RichText>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">{t.aboutTitle}</h2>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <RichText as="p">{t.aboutIntro}</RichText>
                <ul className="list-disc list-inside space-y-2 pl-1">
                  <li>{t.aboutFormation1}</li>
                  <li>{t.aboutFormation2}</li>
                  <li>{t.aboutFormation3}</li>
                  <li>{t.aboutFormation4}</li>
                  <li>{t.aboutFormation5}</li>
                </ul>
                <RichText as="p">{t.aboutPosture}</RichText>
                <RichText as="p">{t.aboutGoal}</RichText>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card className="p-4 sm:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{t.educationCredentials}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">{t.mscNeuropsychiatry}</p>
                      <p className="text-sm text-muted-foreground">{t.universityEdinburgh}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">{t.licensedPsychologist}</p>
                      <p className="text-sm text-muted-foreground">{t.stateBoardCertified}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium">{t.eatingDisordersSpecialist}</p>
                      <p className="text-sm text-muted-foreground">{t.iaedpCertified}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{t.professionalRoles}</h3>
                <div className="space-y-2">
                  <p className="text-sm">{t.professorClinical}</p>
                  <p className="text-sm">{t.conferenceSpeaker}</p>
                  <p className="text-sm">{t.researchContributor}</p>
                  <p className="text-sm">{t.clinicalSupervisor}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">{t.approachTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              <RichText>{t.approachIntro}</RichText>
            </p>
          </div>

          <Card className="p-5 sm:p-8 space-y-3 sm:space-y-4">
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <li>• <RichText>{t.approachItem1}</RichText></li>
              <li>• <RichText>{t.approachItem2}</RichText></li>
              <li>• <RichText>{t.approachItem3}</RichText></li>
              <li>• <RichText>{t.approachItem4}</RichText></li>
              <li>• <RichText>{t.approachItem5}</RichText></li>
            </ul>
          </Card>

          <p className="text-center text-sm sm:text-base text-muted-foreground leading-relaxed">
            <RichText>{t.approachClosing}</RichText>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">{t.contactTitle}</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              <RichText>{t.contactSubtitle}</RichText>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-5 sm:p-8">
              <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6">{t.contactInfo}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+55 81 9187-3346</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>clara@example.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p>Recife, Pernambuco</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground mb-3">{t.socialNetworks}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.instagram.com/claradescendente/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-muted/60 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://wa.me/+558191873346"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-muted/60 text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </a>
                    <a
                      href="https://lnk.bio/claradescedente"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-muted/60 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                      aria-label="Link-in-bio"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-5 sm:p-8">
              <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6">{t.scheduleConsultationTitle}</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <RichText>{t.consultationDesc}</RichText>
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">{t.officeHours}</p>
                  <p className="text-sm text-muted-foreground">{t.mondayThursday}</p>
                </div>
                <a 
                  href="https://wa.me/+558191873346" // Substitua pelo link de agendamento/WhatsApp
                  target="_blank"                        // Opcional: abre em nova aba
                  rel="noopener noreferrer"              // Prática de segurança
              >
                <Button className="w-full mt-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.bookAppointment}
                </Button>
              </a>                
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center md:text-left">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full overflow-hidden bg-primary flex-shrink-0 flex items-center justify-center">
                <img
                  src={logoPicture} // ALtere o caminho para onde sua imagem está
                  alt="Logo Maria Clara M. Descendente"
                  className="w-full h-full object-cover" // Faz a imagem preencher o container de 32x32px
                />
              </div>
              <span className="font-medium text-sm sm:text-base">
                {t.drName}, {t.clinicalPsychologist}
              </span>
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              <p>{t.licenseNumber}</p>
              <p className="mt-1">{t.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

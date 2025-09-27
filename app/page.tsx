"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, Award, BookOpen, Users, Heart } from "lucide-react"
import { LanguageSwitcher, type Language } from "@/components/language-switcher"
import { translations } from "@/lib/translations"

export default function PsychologistLanding() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt")
  const t = translations[currentLanguage]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">{t.drName}</span>
            </div>
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
            <div className="flex items-center space-x-3">
              <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
              <Button>{t.bookConsultation}</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  {t.clinicalPsychologist}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">{t.drName}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{t.credentials}</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{t.heroDescription}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.scheduleConsultation}
                </Button>
                <Button variant="outline" size="lg" className="text-base bg-transparent">
                  {t.learnMore}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted/20 mb-6">
                <img
                  src="/professional-female-psychologist-in-office-setting.jpg"
                  alt="Dra. Sarah Mitchell - Psicóloga Clínica"
                  className="w-full h-full object-cover"
                />
              </div>

              <Card className="p-6 bg-card border-border">
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
      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">{t.specializationTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.specializationSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{t.eatingDisorders}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.eatingDisordersDesc}</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">{t.cbt}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.cbtDesc}</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{t.act}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.actDesc}</p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">{t.mindfulness}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.mindfulnessDesc}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">{t.aboutTitle}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
                <p>{t.aboutP3}</p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">{t.educationCredentials}</h3>
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

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">{t.professionalRoles}</h3>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">{t.contactTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.contactSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-6">{t.contactInfo}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>dr.mitchell@example.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p>123 Wellness Center Drive</p>
                    <p>Suite 200</p>
                    <p>San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-semibold text-xl mb-6">{t.scheduleConsultationTitle}</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{t.consultationDesc}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">{t.officeHours}</p>
                  <p className="text-sm text-muted-foreground">{t.mondayThursday}</p>
                  <p className="text-sm text-muted-foreground">{t.friday}</p>
                </div>
                <Button className="w-full mt-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.bookAppointment}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Heart className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-medium">
                {t.drName}, {t.clinicalPsychologist}
              </span>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>{t.licenseNumber}</p>
              <p className="mt-1">{t.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

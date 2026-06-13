export type Language = "pt" | "en" | "es"

export const translations = {
  pt: {
    // ---------- Navegação ----------
    about: "Sobre",
    services: "Serviços",
    approach: "A jornada",
    contact: "Contato",
    bookConsultation: "Agendar conversa",

    // ---------- Hero ----------
    heroBadge: "Psicóloga clínica · CRP 02/18166",
    drName: "Maria Clara Descendente",
    heroHeadline: "Reconstrua sua relação com a comida e redescubra quem você é para além do espelho.",
    heroSubtitle:
      "Atendimento especializado em transtornos alimentares, com base em evidências. Sem julgamento, sem atalhos.",
    scheduleConsultation: "Agendar uma conversa inicial",
    learnMore: "Conhecer meu trabalho",
    heroBadgeOnline: "Atendimento online em todo o Brasil",
    heroBadgePresencial: "Consultório em Boa Viagem, Recife",
    heroBadgeAccepting: "Agenda aberta para novos pacientes",

    // ---------- Acolhimento ----------
    empathyText:
      "Se a sua relação com o corpo e a comida tem sido uma batalha solitária, aqui a sua dor é ouvida sem julgamentos. Respeito o seu ritmo e a sua história, e ofereço um espaço seguro para você, enfim, respirar com leveza.",

    // ---------- Serviços ----------
    servicesEyebrow: "Cuidado integral",
    servicesTitle: "Um cuidado que enxerga você por inteiro",
    servicesIntro:
      "Muitas vezes, o conflito com a comida não vem sozinho: ele aparece junto de outras dores, ou de forma independente. O meu foco é cuidar de você como um todo.",
    servicesBridge: "Entendo que você é um universo inteiro, e não apenas um sintoma.",

    edTitle: "Psicoterapia especializada em transtornos alimentares",
    edDesc:
      "Para quando a relação com a comida e o corpo virou um peso. Tratamento dedicado a anorexia, bulimia, compulsão alimentar e TARE, com o que há de mais avançado no mundo, adaptado à sua realidade.",
    edTag: "Especialidade principal",

    mindfulnessTitle: "Mindfulness e autocompaixão",
    mindfulnessDesc:
      "Ferramentas práticas para acalmar a mente, regular as emoções e cultivar uma relação mais gentil consigo mesma(o).",

    anxietyTitle: "Ansiedade, fobias e TOC",
    anxietyDesc:
      "O excesso de futuro, o medo paralisante e a necessidade de controle cansam. Com a TCC e abordagens contextuais, devolvemos o manejo das emoções e a liberdade de viver.",

    depressionTitle: "Depressão e regulação emocional",
    depressionDesc:
      "Para quando a vida perde a cor ou o peso emocional fica insuportável. Um espaço seguro para resgatar sentido, vitalidade e conexão com o que importa.",

    adhdTitle: "TDAH",
    adhdDesc:
      "O TDAH traz desafios de organização, foco e autoestima. Construímos estratégias práticas, entendendo como o cérebro impacta a rotina e as emoções.",

    relationshipsTitle: "Problemas de relacionamento",
    relationshipsDesc:
      "Nossa saúde mental floresce ou adoece nos vínculos. Apoio na comunicação, em limites saudáveis e na compreensão de padrões que se repetem.",

    familyTitle: "Apoio à família e cuidadores: Novo Modelo Maudsley",
    familyDesc:
      "Você não sabe mais como ajudar seu filho ou ente querido? Orientar pais e familiares é essencial. Com o Novo Modelo Maudsley, preparamos quem está ao redor para ser uma rede de apoio ativa, reduzindo o estresse e fortalecendo os laços.",
    familyTag: "Para famílias e cuidadores",

    servicesClosing:
      "Muitas vezes, ansiedade, TDAH e desregulação emocional alimentam o transtorno alimentar. Em outros casos, são a demanda principal. A minha formação me permite enxergar essas conexões e cuidar da estrutura emocional como um todo, não apenas apagar incêndios.",

    // ---------- Sobre ----------
    aboutEyebrow: "Sobre mim",
    aboutTitle: "Ciência a serviço do cuidado",
    aboutP1:
      "Há mais de 10 anos, escolhi a psicologia como o meu modo de estar no mundo. Sempre me moveu a curiosidade pelo comportamento humano e o desejo genuíno de ajudar as pessoas a encontrarem sentido e resiliência diante das dificuldades.",
    aboutP2:
      "Para mim, a clínica é mais que um espaço de tratamento: é um lugar de encontro pautado pela ética e pela autenticidade. Como acredito que cada pessoa é única, ao longo da última década mergulhei nos estudos para que o meu acolhimento tivesse o suporte da ciência mais avançada.",
    aboutP3:
      "Cursei o Mestrado em Neuropsiquiatria e Ciências do Comportamento na UFPE, com especializações em Terapia Cognitivo Comportamental e Neurociência Aplicada. Como transtornos alimentares pedem um olhar muito especializado, me formei com as maiores referências do mundo:",
    aboutRef1: "Casos complexos com Lucene Wisniewski (CBT Ohio) e Rhonda Merwin (Duke University)",
    aboutRef2: "Terapia de Aceitação e Compromisso (ACT) com o seu criador, Steven Hayes",
    aboutRef3: "Protocolos para anorexia: MANTRA (CEBRATA) e SSCM (University of Sydney)",
    aboutRef4: "Novo Modelo Maudsley, para que as famílias também saibam ser um porto seguro",
    aboutP4:
      "Toda essa bagagem existe por um motivo: oferecer a você um cuidado seguro, humano e eficaz. Quero que, por meio dessa ciência feita com afeto, você resgate a sua autonomia e descubra quem é para além de qualquer diagnóstico.",
    aboutSeals: "Formação com referências internacionais",

    // ---------- Abordagem / Jornada ----------
    approachEyebrow: "Como funciona",
    approachTitle: "A nossa jornada, passo a passo",
    approachIntro:
      "Dar o primeiro passo pode assustar, ainda mais depois de experiências difíceis. Por isso, o nosso processo se apoia em três pilares: clareza, segurança e colaboração.",

    step1Title: "O encontro inicial: acolhimento e escuta",
    step1Desc:
      "A nossa primeira conversa é um espaço protegido. Mais que o diagnóstico, quero entender quem você é, o que te dói e o que você busca.",
    step1Meta: "50 minutos · criar vínculo e entender o seu contexto",

    step2Title: "Avaliação e planejamento personalizado",
    step2Desc:
      "Aqui a ciência se adapta à sua vida, não o contrário. Com base em protocolos comprovados (ACT, DBT, TCC), traçamos juntos um caminho claro.",
    step2Meta: "Transparência em cada estratégia · metas reais, no seu ritmo",

    step3Title: "Sessões de psicoterapia: o trabalho contínuo",
    step3Desc:
      "As sessões são semanais e desenvolvem ferramentas práticas para o dia a dia, unindo a fala ao treino de habilidades como regulação emocional e mindfulness.",
    step3Meta: "Abordagem integrativa · foco na sua autonomia",

    step4Title: "Suporte multidisciplinar e familiar, quando necessário",
    step4Desc:
      "Casos complexos pedem uma rede. Quando faz sentido, trabalho com nutricionistas e psiquiatras e ofereço o Novo Modelo Maudsley para a família apoiar de forma efetiva.",
    step4Meta: "Rede de apoio coordenada em torno de você",

    formatsTitle: "Formatos de atendimento",
    formatOnlineTitle: "Online",
    formatOnlineDesc:
      "Plataforma de vídeo segura, com a mesma proximidade e ética do consultório. Para todo o Brasil.",
    formatPresencialTitle: "Presencial",
    formatPresencialDesc: "Consultório em Boa Viagem, Recife, um refúgio de tranquilidade.",

    // ---------- CTA final ----------
    finalCtaTitle: "Vamos dar o primeiro passo juntos?",
    finalCtaText:
      "Você não precisa carregar isso sozinha(o). Agende uma conversa inicial e descubra como posso te ajudar.",

    // ---------- Contato ----------
    contactEyebrow: "Contato",
    contactTitle: "Estou por perto quando você decidir começar",
    contactSubtitle:
      "Sem formulários longos. Escolha o canal mais confortável para você que eu respondo pessoalmente.",
    contactInfo: "Como falar comigo",
    socialNetworks: "Redes",
    officeHours: "Horário de atendimento",
    mondayThursday: "Segunda a sexta · 10h às 22h (GMT-3)",
    locationLabel: "Boa Viagem, Recife — PE",
    locationOnline: "e online para todo o Brasil",
    bookAppointment: "Conversar pelo WhatsApp",
    emailLabel: "Enviar um email",

    // ---------- Rodapé ----------
    footerClosing: "Você não precisa carregar isso sozinha(o). Vamos conversar?",
    licenseNumber: "Psicóloga clínica · CRP 02/18166",
    copyright: "© 2025 Maria Clara Descendente. Todos os direitos reservados.",
    developedBy: "Desenvolvido por João Miguel Descendente",
  },

  en: {
    about: "About",
    services: "Services",
    approach: "The journey",
    contact: "Contact",
    bookConsultation: "Book a talk",

    heroBadge: "Clinical psychologist · CRP 02/18166",
    drName: "Maria Clara Descendente",
    heroHeadline: "Rebuild your relationship with food and rediscover who you are beyond the mirror.",
    heroSubtitle: "Specialized care for eating disorders, grounded in evidence. No judgment, no shortcuts.",
    scheduleConsultation: "Book a first conversation",
    learnMore: "See how I work",
    heroBadgeOnline: "Online sessions across Brazil",
    heroBadgePresencial: "In person in Boa Viagem, Recife",
    heroBadgeAccepting: "Currently accepting new patients",

    empathyText:
      "If your journey with your body and food has felt like a lonely battle, here your pain is heard without judgment. I respect your pace and your story, and I offer a safe space where you can finally breathe with ease.",

    servicesEyebrow: "Integral care",
    servicesTitle: "Care that sees the whole of you",
    servicesIntro:
      "Often the conflict with food does not come alone: it shows up with other pains, or on its own. My focus is to care for you as a whole.",
    servicesBridge: "I understand that you are an entire universe, not just a symptom.",

    edTitle: "Specialized psychotherapy for eating disorders",
    edDesc:
      "For when your relationship with food and your body has become a weight. Dedicated treatment for anorexia, bulimia, binge eating and ARFID, using the most advanced approaches in the world, adapted to your reality.",
    edTag: "Main specialty",

    mindfulnessTitle: "Mindfulness and self compassion",
    mindfulnessDesc:
      "Practical tools to calm the mind, regulate emotions and build a kinder relationship with yourself.",

    anxietyTitle: "Anxiety, phobias and OCD",
    anxietyDesc:
      "Too much future, paralyzing fear and the need for control are exhausting. With CBT and contextual approaches, we restore emotional balance and the freedom to live.",

    depressionTitle: "Depression and emotional regulation",
    depressionDesc:
      "For when life loses its color or the emotional weight feels unbearable. A safe space to recover meaning, vitality and connection with what matters.",

    adhdTitle: "ADHD",
    adhdDesc:
      "ADHD brings challenges with organization, focus and self esteem. We build practical strategies, understanding how the brain shapes routine and emotions.",

    relationshipsTitle: "Relationship difficulties",
    relationshipsDesc:
      "Our mental health blooms or suffers within our bonds. Support with communication, healthy boundaries and the patterns that keep repeating.",

    familyTitle: "Support for family and caregivers: New Maudsley Model",
    familyDesc:
      "Do you no longer know how to help your child or loved one? Guiding parents and family is essential. With the New Maudsley Model, we prepare those around the patient to be an active support network, easing stress and strengthening bonds.",
    familyTag: "For families and caregivers",

    servicesClosing:
      "Often anxiety, ADHD and emotional dysregulation fuel an eating disorder. At other times, they are the main concern. My training lets me see these connections and care for the whole emotional structure, not just put out fires.",

    aboutEyebrow: "About me",
    aboutTitle: "Science in the service of care",
    aboutP1:
      "More than 10 years ago, I chose psychology as my way of being in the world. I have always been driven by curiosity about human behavior and a genuine wish to help people find meaning and resilience in their struggles.",
    aboutP2:
      "To me, the clinic is more than a place of treatment: it is a meeting place built on ethics and authenticity. Because I believe each person is unique, over the last decade I immersed myself in study so my care would be backed by the most advanced science.",
    aboutP3:
      "I hold a Master's in Neuropsychiatry and Behavioral Sciences from UFPE, with specializations in Cognitive Behavioral Therapy and Applied Neuroscience. Because eating disorders demand a highly specialized view, I trained with the world's leading references:",
    aboutRef1: "Complex cases with Lucene Wisniewski (CBT Ohio) and Rhonda Merwin (Duke University)",
    aboutRef2: "Acceptance and Commitment Therapy (ACT) with its creator, Steven Hayes",
    aboutRef3: "Anorexia protocols: MANTRA (CEBRATA) and SSCM (University of Sydney)",
    aboutRef4: "New Maudsley Model, so families can also be a safe harbor",
    aboutP4:
      "All of this exists for one reason: to offer you safe, human and effective care. I want this science, made with affection, to help you reclaim your autonomy and discover who you are beyond any diagnosis.",
    aboutSeals: "Training with international references",

    approachEyebrow: "How it works",
    approachTitle: "Our journey, step by step",
    approachIntro:
      "Taking the first step can feel daunting, especially after hard experiences. That is why our process rests on three pillars: clarity, safety and collaboration.",

    step1Title: "The first meeting: welcome and listening",
    step1Desc:
      "Our first conversation is a protected space. More than a diagnosis, I want to understand who you are, what hurts and what you are looking for.",
    step1Meta: "50 minutes · building trust and understanding your context",

    step2Title: "Assessment and personalized planning",
    step2Desc:
      "Here science adapts to your life, not the other way around. Based on proven protocols (ACT, DBT, CBT), we map out a clear path together.",
    step2Meta: "Transparency on every strategy · real goals, at your pace",

    step3Title: "Therapy sessions: the ongoing work",
    step3Desc:
      "Sessions are weekly and build practical tools for everyday life, joining conversation with skills like emotional regulation and mindfulness.",
    step3Meta: "Integrative approach · focused on your autonomy",

    step4Title: "Multidisciplinary and family support, when needed",
    step4Desc:
      "Complex cases call for a network. When it makes sense, I work with nutritionists and psychiatrists and offer the New Maudsley Model so the family can support effectively.",
    step4Meta: "A support network coordinated around you",

    formatsTitle: "Ways to meet",
    formatOnlineTitle: "Online",
    formatOnlineDesc: "A secure video platform, with the same closeness and ethics of the office. Across Brazil.",
    formatPresencialTitle: "In person",
    formatPresencialDesc: "Office in Boa Viagem, Recife, a refuge of calm.",

    finalCtaTitle: "Shall we take the first step together?",
    finalCtaText: "You don't have to carry this alone. Book a first conversation and discover how I can help.",

    contactEyebrow: "Contact",
    contactTitle: "I'm here whenever you decide to begin",
    contactSubtitle:
      "No long forms. Choose the channel you're most comfortable with and I'll reply personally.",
    contactInfo: "How to reach me",
    socialNetworks: "Social",
    officeHours: "Office hours",
    mondayThursday: "Monday to Friday · 10am to 10pm (GMT-3)",
    locationLabel: "Boa Viagem, Recife — PE",
    locationOnline: "and online across Brazil",
    bookAppointment: "Chat on WhatsApp",
    emailLabel: "Send an email",

    footerClosing: "You don't have to carry this alone. Shall we talk?",
    licenseNumber: "Clinical psychologist · CRP 02/18166",
    copyright: "© 2025 Maria Clara Descendente. All rights reserved.",
    developedBy: "Developed by João Miguel Descendente",
  },

  es: {
    about: "Sobre mí",
    services: "Servicios",
    approach: "El proceso",
    contact: "Contacto",
    bookConsultation: "Agendar charla",

    heroBadge: "Psicóloga clínica · CRP 02/18166",
    drName: "Maria Clara Descendente",
    heroHeadline: "Reconstruye tu relación con la comida y redescubre quién eres más allá del espejo.",
    heroSubtitle:
      "Atención especializada en trastornos alimentarios, basada en evidencia. Sin juicios, sin atajos.",
    scheduleConsultation: "Agendar una primera charla",
    learnMore: "Conocer mi trabajo",
    heroBadgeOnline: "Atención en línea en todo Brasil",
    heroBadgePresencial: "Presencial en Boa Viagem, Recife",
    heroBadgeAccepting: "Agenda abierta para nuevos pacientes",

    empathyText:
      "Si tu relación con el cuerpo y la comida ha sido una batalla solitaria, aquí tu dolor se escucha sin juicios. Respeto tu ritmo y tu historia, y te ofrezco un espacio seguro para que, por fin, respires con ligereza.",

    servicesEyebrow: "Cuidado integral",
    servicesTitle: "Un cuidado que te ve por completo",
    servicesIntro:
      "Muchas veces el conflicto con la comida no viene solo: aparece junto a otros dolores, o de forma independiente. Mi foco es cuidarte como un todo.",
    servicesBridge: "Entiendo que eres un universo entero, y no solo un síntoma.",

    edTitle: "Psicoterapia especializada en trastornos alimentarios",
    edDesc:
      "Para cuando la relación con la comida y el cuerpo se volvió un peso. Tratamiento dedicado a anorexia, bulimia, atracones y TARE/ARFID, con lo más avanzado del mundo, adaptado a tu realidad.",
    edTag: "Especialidad principal",

    mindfulnessTitle: "Mindfulness y autocompasión",
    mindfulnessDesc:
      "Herramientas prácticas para calmar la mente, regular las emociones y crear una relación más amable contigo misma(o).",

    anxietyTitle: "Ansiedad, fobias y TOC",
    anxietyDesc:
      "El exceso de futuro, el miedo paralizante y la necesidad de control agotan. Con la TCC y enfoques contextuales, devolvemos el manejo de las emociones y la libertad de vivir.",

    depressionTitle: "Depresión y regulación emocional",
    depressionDesc:
      "Para cuando la vida pierde color o el peso emocional se vuelve insoportable. Un espacio seguro para recuperar sentido, vitalidad y conexión con lo que importa.",

    adhdTitle: "TDAH",
    adhdDesc:
      "El TDAH trae desafíos de organización, foco y autoestima. Construimos estrategias prácticas, entendiendo cómo el cerebro impacta la rutina y las emociones.",

    relationshipsTitle: "Problemas de relación",
    relationshipsDesc:
      "Nuestra salud mental florece o enferma en los vínculos. Apoyo en la comunicación, en límites sanos y en los patrones que se repiten.",

    familyTitle: "Apoyo a la familia y cuidadores: Nuevo Modelo Maudsley",
    familyDesc:
      "¿Ya no sabes cómo ayudar a tu hijo o ser querido? Orientar a padres y familiares es esencial. Con el Nuevo Modelo Maudsley, preparamos a quienes están alrededor para ser una red de apoyo activa, reduciendo el estrés y fortaleciendo los lazos.",
    familyTag: "Para familias y cuidadores",

    servicesClosing:
      "Muchas veces la ansiedad, el TDAH y la desregulación emocional alimentan el trastorno alimentario. En otros casos, son la demanda principal. Mi formación me permite ver esas conexiones y cuidar toda la estructura emocional, no solo apagar incendios.",

    aboutEyebrow: "Sobre mí",
    aboutTitle: "Ciencia al servicio del cuidado",
    aboutP1:
      "Hace más de 10 años elegí la psicología como mi modo de estar en el mundo. Siempre me movió la curiosidad por el comportamiento humano y el deseo genuino de ayudar a las personas a encontrar sentido y resiliencia ante las dificultades.",
    aboutP2:
      "Para mí, la clínica es más que un espacio de tratamiento: es un lugar de encuentro guiado por la ética y la autenticidad. Como creo que cada persona es única, en la última década me sumergí en el estudio para que mi acogida tuviera el respaldo de la ciencia más avanzada.",
    aboutP3:
      "Cursé el Máster en Neuropsiquiatría y Ciencias del Comportamiento en la UFPE, con especializaciones en Terapia Cognitivo Conductual y Neurociencia Aplicada. Como los trastornos alimentarios exigen una mirada muy especializada, me formé con las mayores referencias del mundo:",
    aboutRef1: "Casos complejos con Lucene Wisniewski (CBT Ohio) y Rhonda Merwin (Duke University)",
    aboutRef2: "Terapia de Aceptación y Compromiso (ACT) con su creador, Steven Hayes",
    aboutRef3: "Protocolos para anorexia: MANTRA (CEBRATA) y SSCM (University of Sydney)",
    aboutRef4: "Nuevo Modelo Maudsley, para que las familias también sepan ser un puerto seguro",
    aboutP4:
      "Todo esto existe por una razón: ofrecerte un cuidado seguro, humano y eficaz. Quiero que, mediante esta ciencia hecha con afecto, recuperes tu autonomía y descubras quién eres más allá de cualquier diagnóstico.",
    aboutSeals: "Formación con referencias internacionales",

    approachEyebrow: "Cómo funciona",
    approachTitle: "Nuestro proceso, paso a paso",
    approachIntro:
      "Dar el primer paso puede asustar, más aún tras experiencias difíciles. Por eso nuestro proceso se apoya en tres pilares: claridad, seguridad y colaboración.",

    step1Title: "El primer encuentro: acogida y escucha",
    step1Desc:
      "Nuestra primera conversación es un espacio protegido. Más que el diagnóstico, quiero entender quién eres, qué te duele y qué buscas.",
    step1Meta: "50 minutos · crear vínculo y entender tu contexto",

    step2Title: "Evaluación y planificación personalizada",
    step2Desc:
      "Aquí la ciencia se adapta a tu vida, no al revés. Con base en protocolos comprobados (ACT, DBT, TCC), trazamos juntos un camino claro.",
    step2Meta: "Transparencia en cada estrategia · metas reales, a tu ritmo",

    step3Title: "Sesiones de psicoterapia: el trabajo continuo",
    step3Desc:
      "Las sesiones son semanales y desarrollan herramientas prácticas para el día a día, uniendo la palabra al entrenamiento de habilidades como la regulación emocional y el mindfulness.",
    step3Meta: "Enfoque integrativo · centrado en tu autonomía",

    step4Title: "Apoyo multidisciplinario y familiar, cuando es necesario",
    step4Desc:
      "Los casos complejos piden una red. Cuando tiene sentido, trabajo con nutricionistas y psiquiatras y ofrezco el Nuevo Modelo Maudsley para que la familia apoye de forma efectiva.",
    step4Meta: "Una red de apoyo coordinada en torno a ti",

    formatsTitle: "Formatos de atención",
    formatOnlineTitle: "En línea",
    formatOnlineDesc: "Plataforma de video segura, con la misma cercanía y ética del consultorio. Para todo Brasil.",
    formatPresencialTitle: "Presencial",
    formatPresencialDesc: "Consultorio en Boa Viagem, Recife, un refugio de tranquilidad.",

    finalCtaTitle: "¿Damos el primer paso juntos?",
    finalCtaText:
      "No tienes que cargar con esto sola(o). Agenda una primera charla y descubre cómo puedo ayudarte.",

    contactEyebrow: "Contacto",
    contactTitle: "Estoy cerca cuando decidas empezar",
    contactSubtitle:
      "Sin formularios largos. Elige el canal con el que te sientas más cómoda(o) y te respondo personalmente.",
    contactInfo: "Cómo hablar conmigo",
    socialNetworks: "Redes",
    officeHours: "Horario de atención",
    mondayThursday: "Lunes a viernes · 10h a 22h (GMT-3)",
    locationLabel: "Boa Viagem, Recife — PE",
    locationOnline: "y en línea para todo Brasil",
    bookAppointment: "Hablar por WhatsApp",
    emailLabel: "Enviar un correo",

    footerClosing: "No tienes que cargar con esto sola(o). ¿Conversamos?",
    licenseNumber: "Psicóloga clínica · CRP 02/18166",
    copyright: "© 2025 Maria Clara Descendente. Todos los derechos reservados.",
    developedBy: "Desarrollado por João Miguel Descendente",
  },
}

"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "en" | "es";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  const toggleLang = () => {
    setLang(l => {
      const next = l === "en" ? "es" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

// ─── All site copy in EN + ES ─────────────────────────────────────────────────
export const ui = {
  nav: {
    home:       { en: "Home",         es: "Inicio" },
    work:       { en: "Work",         es: "Proyectos" },
    about:      { en: "About",        es: "Perfil" },
    contact:    { en: "Contact",      es: "Contacto" },
    getInTouch: { en: "Get in touch", es: "Hablemos" },
  },

  home: {
    pill: {
      en: "Available for new projects · Santo Domingo, DR",
      es: "Disponible para nuevos proyectos · Santo Domingo, RD",
    },
    h1a: { en: "Designing systems",  es: "Tecnología con" },
    h1b: { en: "people trust.",      es: "propósito humano." },
    bio: {
      en: "I'm Luis — a Systems Engineer and Project Leader at Banco Popular Dominicano, transitioning into UX Design. I bring technical depth, delivery experience, and a genuine obsession with interfaces that are clear, trusted, and built for humans.",
      es: "Soy Luis — Ingeniero en Sistemas y Líder de Proyectos en Banco Popular Dominicano. Mi transición hacia el diseño no nació de un curso: nació de años observando cómo los sistemas fallaban a las personas que debían servirles. Eso es lo que diseño ahora.",
    },
    cta1: { en: "View case studies", es: "Ver mi trabajo" },
    cta2: { en: "About me",          es: "Conoce mi historia" },
    stats: [
      { value: "5+",            en: "Years of professional experience",      es: "Años de trayectoria profesional" },
      { value: "Banco Popular", en: "Current employer — largest bank in DR", es: "El banco más grande de la República Dominicana" },
      { value: "2M+",           en: "Bank customers impacted",               es: "Clientes que interactúan con sistemas que lidero" },
      { value: "Bilingüe",      en: "English & Spanish",                     es: "Inglés nativo y español profesional" },
    ],
    workLabel:   { en: "Selected work",  es: "Trabajo destacado" },
    workHeading: { en: "Case studies",   es: "Casos de diseño" },
    workAll:     { en: "All projects",   es: "Ver todos los proyectos" },
    bringLabel:  { en: "What I bring",   es: "Mi propuesta de valor" },
    brings: [
      {
        number: "01",
        title: { en: "Leadership under complexity",  es: "Liderazgo donde otros ven caos" },
        body: {
          en: "I lead systems development projects in a regulated financial institution — aligning compliance, engineering, and operations around a shared goal. Stakeholder alignment is not a soft skill for me; it is the job.",
          es: "Dirijo proyectos de desarrollo de sistemas en un entorno financiero altamente regulado, donde alinear cumplimiento normativo, ingeniería y operaciones no es opcional — es la diferencia entre un producto que funciona y uno que nunca llega a producción.",
        },
      },
      {
        number: "02",
        title: { en: "Systems-level thinking",  es: "Diseño que entiende el sistema completo" },
        body: {
          en: "A Systems Engineering degree and years of delivery work means I see the whole picture. I design for edge cases, error states, and the people who'll maintain the product — not just the happy path.",
          es: "Formado como ingeniero en sistemas, no diseño solo para el flujo ideal. Diseño para los casos límite, los estados de error y los equipos que van a mantener ese producto en el tiempo — porque eso es lo que hace que un sistema realmente funcione.",
        },
      },
      {
        number: "03",
        title: { en: "Technical fluency",  es: "Habla el idioma del equipo de desarrollo" },
        body: {
          en: "I've written production code in C# and SQL, worked inside banking systems, and managed dev teams. My handoffs are precise, my specs are buildable, and I don't treat constraints as blockers.",
          es: "He escrito código de producción en C# y SQL, trabajado dentro de arquitecturas bancarias complejas y gestionado equipos de desarrollo. Cuando entrego un diseño, el equipo no tiene que adivinar — porque yo entiendo lo que les cuesta implementar.",
        },
      },
    ],
    ctaLabel:   { en: "Let's work together",     es: "¿Construimos algo?" },
    ctaHeading: { en: "Have a project in mind?", es: "¿Tienes un reto que resolver?" },
    ctaBody: {
      en: "I'm open to freelance design projects, full-time product design roles, and collaborations with teams building complex, meaningful products.",
      es: "Estoy abierto a proyectos freelance, posiciones de diseño de producto y colaboraciones con equipos que trabajan en soluciones que realmente importan — especialmente en industrias exigentes como la banca, la tecnología y los servicios.",
    },
    ctaBtn1: { en: "Get in touch", es: "Escríbeme" },
    ctaBtn2: { en: "View work",    es: "Ver proyectos" },
  },

  work: {
    label:   { en: "Portfolio",      es: "Portafolio" },
    heading: { en: "Selected work",  es: "Proyectos de diseño" },
    body: {
      en: "Case studies from systems development leadership and self-directed UX projects — each one rooted in real constraints, real users, and measurable outcomes.",
      es: "Proyectos desarrollados desde la trinchera del liderazgo técnico y el diseño autodidacta — cada uno con restricciones reales, usuarios reales y resultados que se pueden medir.",
    },
  },

  caseStudy: {
    back:       { en: "Work",              es: "Proyectos" },
    overview:   { en: "Overview",          es: "Visión general" },
    context:    { en: "Context",           es: "Contexto del proyecto" },
    problem:    { en: "The real problem",  es: "El verdadero desafío" },
    insights:   { en: "Research insights", es: "Hallazgos clave" },
    decisions:  { en: "Design decisions",  es: "Decisiones de diseño" },
    outcome:    { en: "Outcome",           es: "Impacto" },
    reflection: { en: "Reflection",        es: "Aprendizajes" },
    tools:      { en: "Tools & methods",   es: "Herramientas y métodos" },
    allStudies: { en: "All case studies",  es: "Volver al portafolio" },
    workWithMe: { en: "Work with me →",    es: "Hablemos →" },
    role:       { en: "Role",              es: "Rol" },
    duration:   { en: "Duration",          es: "Duración" },
    year:       { en: "Year",              es: "Año" },
  },

  about: {
    label: { en: "About", es: "Perfil" },
    h1a:   { en: "Systems Engineer.", es: "Ingeniero de sistemas." },
    h1b:   { en: "Now designing.",    es: "Diseñador UX en crecimiento." },
    bio: {
      en: "I build systems for a living. I lead projects inside one of the largest banks in the Dominican Republic — navigating compliance, engineering constraints, and stakeholder politics every day. What I keep noticing is the gap between what we build and what people actually need. That gap is now my design practice.",
      es: "Diseñador UX/UI en crecimiento con formación en ingeniería de sistemas y experiencia liderando proyectos tecnológicos. Enfocado en la creación de experiencias digitales centradas en el usuario, combinando pensamiento analítico, diseño funcional y colaboración con equipos de desarrollo. Fortaleciendo habilidades en investigación de usuarios, wireframing, prototipado y diseño centrado en el usuario cada día.",
    },
    glanceLabel: { en: "At a glance",  es: "De un vistazo" },
    glanceRows: [
      { label: { en: "Experience",    es: "Trayectoria" },       value: { en: "5+ years",          es: "Más de 5 años" } },
      { label: { en: "Domain",        es: "Industria" },         value: { en: "Banking & Systems",  es: "Banca y Tecnología" } },
      { label: { en: "Current focus", es: "Transición hacia" },  value: { en: "Product Design",    es: "Diseño de Producto" } },
      { label: { en: "Location",      es: "Ubicación" },         value: { en: "Santo Domingo, DR", es: "Santo Domingo, RD" } },
      { label: { en: "Status",        es: "Disponibilidad" },    value: { en: "Open to roles",     es: "Abierto a nuevas oportunidades" } },
    ],
    strengthsLabel: { en: "What I bring to a design team", es: "Lo que no encontrarás fácilmente en otro diseñador" },
    strengths: [
      { en: "Leading systems projects in regulated environments",     es: "Experiencia liderando proyectos de tecnología en entornos regulados" },
      { en: "Translating technical constraints into design decisions", es: "Capacidad de convertir restricciones técnicas en decisiones de diseño acertadas" },
      { en: "Bridging engineering, product, and business",            es: "Puente natural entre equipos de ingeniería, producto y negocio" },
      { en: "Writing code — C#, SQL, and frontend tools",             es: "Perfil técnico activo: C#, SQL y herramientas de frontend" },
      { en: "Conducting user research and journey mapping",            es: "Investigación de usuarios y mapeo de experiencia aplicados a contextos complejos" },
      { en: "Bilingual delivery — English and Spanish",               es: "Comunicación profesional en inglés y español" },
    ],
    storyLabel: { en: "My story", es: "De la ingeniería al diseño" },
    story: [
      {
        en: "I graduated as a Systems Engineer from PUCMM in 2023 and have been working in technology since 2018 — starting with technical support, moving through data analysis and operations management, and now leading systems development projects at Banco Popular Dominicano.",
        es: "Me gradué como Ingeniero en Sistemas de la PUCMM en 2023, aunque llevo trabajando en tecnología desde 2018. Pasé por soporte técnico, análisis de datos y gestión de operaciones hasta llegar a mi rol actual como Líder de Proyectos en Desarrollo de Sistemas en Banco Popular Dominicano.",
      },
      {
        en: "What drew me to UX Design was a realization I kept arriving at from the technical side: most product failures are not engineering failures. They are failures to understand who is using the product and what they actually need. I wanted to work on that problem directly.",
        es: "Mi interés por el diseño no surgió de una tendencia — surgió de una frustración profesional. Después de años entregando soluciones técnicas correctas que las personas no sabían cómo usar, entendí que el problema no estaba en el código. Estaba en la comprensión del usuario. Quería trabajar directamente en eso.",
      },
      {
        en: "In 2024 I began formally studying design while leading my current role — building this portfolio, taking courses, and embedding myself in every design conversation I could get access to. This work represents that transition.",
        es: "En 2024 comencé a estudiar diseño de manera formal sin abandonar mi rol actual — construyendo este portafolio, tomando cursos y participando activamente en procesos de diseño dentro de mi organización. Este trabajo es el registro de esa transición.",
      },
    ],
    expLabel:    { en: "Experience",    es: "Experiencia profesional" },
    skillsLabel: { en: "Skills & tools", es: "Competencias y herramientas" },
    skillGroups: [
      { category: { en: "Design",    es: "Diseño" },    items: ["Figma", "FigJam", "Prototyping", "Wireframing", "Journey Mapping"] },
      { category: { en: "Technical", es: "Técnico" },   items: ["C#", "SQL", ".NET", "GitHub", "Visual Studio Code"] },
      { category: { en: "Delivery",  es: "Gestión" },   items: ["Agile / Scrum", "Project Leadership", "Stakeholder Mgmt", "Jira", "Confluence"] },
    ],
    eduLabel:  { en: "Education", es: "Formación académica" },
    findLabel: { en: "Find me",   es: "Presencia digital" },
    links: [
      { label: { en: "LinkedIn",     es: "LinkedIn" },  href: "https://linkedin.com" },
      { label: { en: "GitHub",       es: "GitHub" },    href: "https://github.com" },
      { label: { en: "Resume (PDF)", es: "CV (PDF)" },  href: "/resume.pdf" },
    ],
  },

  contact: {
    label: { en: "Contact",       es: "Contacto" },
    h1a:   { en: "Let's build",   es: "Hablemos de" },
    h1b:   { en: "something together.", es: "lo que estás construyendo." },
    body: {
      en: "I'm open to freelance design projects, full-time product design roles, and collaboration with teams working on complex, meaningful products.",
      es: "Estoy disponible para proyectos freelance, posiciones de diseño a tiempo completo y colaboraciones con equipos que trabajan en productos que vale la pena construir bien.",
    },
    availLabel: { en: "Available for",   es: "Áreas de colaboración" },
    avail: [
      { en: "Freelance projects",  es: "Proyectos independientes" },
      { en: "Full-time roles",     es: "Posiciones de tiempo completo" },
      { en: "Design consulting",   es: "Consultoría de diseño" },
      { en: "Advisory",            es: "Asesoría estratégica" },
    ],
    formName:   { en: "Name",                           es: "Nombre" },
    formEmail:  { en: "Email",                          es: "Correo electrónico" },
    formMsg:    { en: "Message",                        es: "Mensaje" },
    formNamePh: { en: "Your full name",                 es: "Tu nombre completo" },
    formEmailPh:{ en: "you@company.com",                es: "tu@empresa.com" },
    formMsgPh:  { en: "Tell me about your project...",  es: "Cuéntame sobre tu proyecto u oportunidad..." },
    formSend:   { en: "Send message",                   es: "Enviar mensaje" },
    formNote:   { en: "Typically responds within 48 hours", es: "Respondo en menos de 48 horas" },
    sentTitle:  { en: "Message sent!",                  es: "Mensaje recibido" },
    sentBody:   { en: "Thanks for reaching out. I'll get back to you within 48 hours.", es: "Gracias por escribirme. Te responderé en las próximas 48 horas." },
  },

  footer: {
    role: { en: "Product Designer", es: "Diseñador de Producto" },
    links: [
      { label: { en: "Email",    es: "Correo" },    href: "mailto:luiseduardobaezlapaix@gmail.com" },
      { label: { en: "LinkedIn", es: "LinkedIn" },  href: "https://linkedin.com", external: true },
      { label: { en: "GitHub",   es: "GitHub" },    href: "https://github.com", external: true },
    ],
  },

  deepl: { en: "Switch to Spanish", es: "Cambiar a inglés" },
} as const;

export type UIKey = typeof ui;

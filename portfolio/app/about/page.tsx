"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { useLanguage, ui } from "@/lib/i18n";

const experience = [
  {
    company: "Banco Popular Dominicano",
    role: { en: "Project Leader – Systems Development", es: "Líder de Proyectos – Desarrollo de Sistemas" },
    period: "Sept 2024 — Present",
    highlights: [
      { en: "Leading digital systems development projects at the largest commercial bank in the Dominican Republic", es: "Lidero la ejecución de proyectos tecnológicos, asegurando alineación con objetivos de negocio y cumplimiento de estándares técnicos" },
      { en: "Coordinating between engineering, compliance, legal, and operations stakeholders", es: "Participo en la planificación estratégica de proyectos mediante estimación de costos, tiempos y recursos" },
      { en: "Driving UX-informed design proposals within the systems development pipeline", es: "Coordino la integración de sistemas y aplicaciones, garantizando calidad, estabilidad y continuidad operativa" },
      { es: "Gestiono stakeholders técnicos y de negocio, facilitando la toma de decisiones y claridad en los requerimientos" },
      { es: "Monitoreo riesgos, avances y dependencias, implementando acciones para asegurar cumplimiento de plazos" },
      { es: "Contribuyo a la definición de soluciones digitales con enfoque en experiencia del usuario y valor para el negocio" },
      { es: "Impulso mejoras en procesos y productos, optimizando eficiencia y resultados" },
    ],
  },
  {
    company: "DEXTRA",
    role: { en: "Junior Developer – SQL, C#, .NET", es: "Desarrollador Junior – SQL, C#, .NET" },
    period: "Feb 2024 — Apr 2024",
    langs: ["en"] as const,
    highlights: [
      { en: "Developed and maintained backend systems using SQL, C#, and the .NET framework" },
      { en: "Gained hands-on experience with enterprise software development practices" },
    ],
  },
  {
    company: "Grupo Leconte LLC",
    role: { en: "Operations Manager", es: "Líder de Operaciones" },
    period: "Oct 2022 — May 2023",
    highlights: [
      { en: "Managed operational workflows across multiple teams", es: "Lideré un equipo de instalación de electrodomésticos, asegurando la correcta ejecución de los servicios en campo" },
      { en: "Developed and implemented process improvements that reduced operational friction", es: "Planifiqué y optimicé rutas de instalación a nivel ciudad, mejorando la eficiencia operativa y tiempos de entrega" },
      { es: "Gestioné la comunicación directa con clientes para coordinación y agendamiento de servicios" },
      { es: "Supervisé el cumplimiento de estándares de calidad en cada instalación realizada" },
      { es: "Elaboré documentación de constancia de servicios completados para procesos de facturación" },
      { es: "Coordiné la validación y seguimiento de servicios para garantizar el cobro oportuno a la empresa contratante" },
    ],
  },
  {
    company: "Nextpoint S.R.L.",
    role: { en: "Data Analyst / Technical Support (Internship)", es: "Analista de Datos / Soporte Técnico (Pasantía)" },
    period: "Jul 2022 — Oct 2022",
    langs: ["en"] as const,
    highlights: [
      { en: "Data analysis and technical support across internal systems" },
    ],
  },
  {
    company: "Gerdau Metaldom",
    role: { en: "Technical Support (Internship)", es: "Soporte Técnico (Pasantía)" },
    period: "Jun 2018 — Jul 2018",
    langs: ["en"] as const,
    highlights: [
      { en: "First professional experience in technical systems support" },
    ],
  },
];

const education = [
  {
    name: { en: "Bachelor's in Systems Engineering", es: "Ingeniería en Sistemas" },
    org: "Pontificia Universidad Católica Madre y Maestra (PUCMM)",
    year: "2019 — 2023",
  },
  {
    name: { en: "Google UX Design Certificate", es: "Certificado de Diseño UX de Google" },
    org: "Coursera / Google",
    year: "2024",
  },
  {
    name: { en: "English as a Second Language", es: "Inglés como Segunda Lengua" },
    org: "Progressive English School",
    year: "2012 — 2018",
  },
];

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = ui.about;

  return (
    <section className="container-wide py-20 pb-32">

      {/* Header */}
      <div className="max-w-[680px] mb-20">
        <p className="label mb-5 anim-fade-up">{t.label[lang]}</p>
        <h1 className="heading-xl mb-7 anim-fade-up anim-delay-1">
          <span className="text-fg">{t.h1a[lang]}</span>
          <br />
          <span className="text-accent">{t.h1b[lang]}</span>
        </h1>
        <p className="text-[16px] text-fg-2 leading-[1.7] anim-fade-up anim-delay-2">
          {t.bio[lang]}
        </p>
      </div>

      {/* At a glance */}
      <div className="rounded-xl border border-line bg-surface p-7 md:p-10 mb-16 anim-fade-up anim-delay-3">
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          <div className="md:w-1/3">
            <p className="label mb-4">{t.glanceLabel[lang]}</p>
            <div className="space-y-3">
              {t.glanceRows.map(({ label, value }) => (
                <div key={label.en} className="flex items-baseline justify-between gap-4 pb-3 border-b border-surface last:border-0 last:pb-0">
                  <span className="text-[12px] text-fg-3">{label[lang]}</span>
                  <span className="text-[13px] font-medium text-fg-5">{value[lang]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="label mb-5">{t.strengthsLabel[lang]}</p>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {t.strengths.map((s) => (
                <div key={s.en} className="flex items-start gap-2.5">
                  <CheckCircle2 size={13} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-[13px] text-fg-2 leading-snug">{s[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_340px] gap-16">
        {/* Left */}
        <div className="space-y-16">

          {/* Story */}
          <div>
            <p className="label mb-6">{t.storyLabel[lang]}</p>
            <div className="space-y-4 text-[14px] text-fg-2 leading-[1.75]">
              {t.story.map((p, i) => <p key={i}>{p[lang]}</p>)}
            </div>
          </div>

          {/* Experience */}
          <div>
            <p className="label mb-8">{t.expLabel[lang]}</p>
            <div className="space-y-10">
              {experience
                .filter(exp => !exp.langs || exp.langs.includes(lang))
                .map((exp, i, arr) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center gap-1 pt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-line min-h-[40px]" />}
                  </div>
                  <div className="pb-2">
                    <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                      <h3 className="text-[14px] font-semibold text-fg tracking-[-0.01em]">{exp.role[lang]}</h3>
                      <span className="text-fg-4 text-xs">·</span>
                      <span className="text-[13px] text-fg-2">{exp.company}</span>
                    </div>
                    <p className="text-[11px] font-mono text-fg-4 mb-3">{exp.period}</p>
                    <ul className="space-y-1.5">
                      {exp.highlights.filter(h => h[lang]).map((h, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-fg-4 mt-1.5 text-[8px]">▸</span>
                          <span className="text-[13px] text-fg-2 leading-snug">{h[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">

          {/* Skills */}
          <div className="rounded-xl border border-line bg-surface p-6">
            <p className="label mb-6">{t.skillsLabel[lang]}</p>
            <div className="space-y-5">
              {t.skillGroups.map((group) => (
                <div key={group.category.en}>
                  <p className="text-[11px] font-medium text-fg-4 uppercase tracking-[0.08em] mb-2.5">{group.category[lang]}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => <Tag key={item} variant="default">{item}</Tag>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="rounded-xl border border-line bg-surface p-6">
            <p className="label mb-6">{t.eduLabel[lang]}</p>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.name.en} className="flex justify-between items-start gap-4 pb-4 border-b border-surface last:border-0 last:pb-0">
                  <div>
                    <p className="text-[13px] font-medium text-fg-5 leading-snug">{edu.name[lang]}</p>
                    <p className="text-[11px] text-fg-3 mt-0.5">{edu.org}</p>
                  </div>
                  <span className="text-[11px] font-mono text-fg-4 flex-shrink-0">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="rounded-xl border border-line bg-surface p-6">
            <p className="label mb-5">{t.findLabel[lang]}</p>
            <div className="space-y-1">
              {t.links.map(({ label, href }) => (
                <Link
                  key={label.en}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between py-2.5 border-b border-surface last:border-0 group"
                >
                  <span className="text-[13px] text-fg-2 group-hover:text-fg transition-colors">{label[lang]}</span>
                  <ArrowUpRight size={12} className="text-fg-4 group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

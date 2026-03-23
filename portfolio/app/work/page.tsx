"use client";

import { caseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import { useLanguage, ui } from "@/lib/i18n";

export default function WorkPage() {
  const { lang } = useLanguage();
  const t = ui.work;

  return (
    <section className="container-wide section-spacing">
      <div className="mb-16 anim-fade-up">
        <p className="label mb-4">{t.label[lang]}</p>
        <h1 className="heading-lg mb-5">{t.heading[lang]}</h1>
        <p className="text-[15px] text-fg-2 max-w-[560px] leading-relaxed">{t.body[lang]}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.slug} study={study} index={i} />
        ))}
      </div>
    </section>
  );
}

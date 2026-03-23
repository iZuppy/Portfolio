"use client";

import { notFound, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getCaseStudy } from "@/lib/case-studies";
import Tag from "@/components/ui/Tag";
import { useLanguage, ui } from "@/lib/i18n";

export default function CaseStudyPage() {
  const params = useParams();
  const { lang } = useLanguage();
  const t = ui.caseStudy;
  const study = getCaseStudy(params.slug as string);
  if (!study) return notFound();

  return (
    <article className="pb-32">
      {/* ─── Hero ─── */}
      <div className={`bg-gradient-to-br ${study.coverGradient} relative overflow-hidden`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="container-wide py-20 relative">
          <Link href="/work" className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 mb-12 transition-colors">
            <ArrowLeft size={13} /> {t.back[lang]}
          </Link>
          <p className="label text-white/30 mb-5">{study.tag[lang]}</p>
          <h1 className="heading-xl text-white max-w-[720px] mb-6">{study.title[lang]}</h1>
          <p className="text-[16px] text-white/55 max-w-[560px] leading-relaxed">{study.subtitle[lang]}</p>
          <div className="flex flex-wrap gap-10 mt-14">
            {[
              { label: t.role[lang],     value: study.role[lang] },
              { label: t.duration[lang], value: study.duration[lang] },
              { label: t.year[lang],     value: study.year },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/25 mb-1.5">{label}</p>
                <p className="text-[14px] font-medium text-white/70">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Metrics bar ─── */}
      <div className="border-b border-line bg-surface">
        <div className="container-wide py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.metrics.map((m) => (
              <div key={m.label.en}>
                <p className="text-[28px] font-semibold tracking-[-0.03em] text-fg leading-none mb-1.5">{m.value}</p>
                <p className="text-[11px] text-fg-3 uppercase tracking-[0.08em] font-medium">{m.label[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Body ─── */}
      <div className="container-narrow mt-16 space-y-16">
        <section>
          <p className="label mb-5">{t.overview[lang]}</p>
          <p className="text-[16px] text-fg-5 leading-[1.7]">{study.overview[lang]}</p>
        </section>

        <section>
          <p className="label mb-5">{t.context[lang]}</p>
          <p className="text-[15px] text-fg-2 leading-[1.7]">{study.context[lang]}</p>
        </section>

        <section>
          <p className="label mb-5">{t.problem[lang]}</p>
          <div className="rounded-xl border border-line bg-surface p-7 md:p-9">
            <p className="text-[15px] text-fg-5 leading-[1.7]">{study.problem[lang]}</p>
          </div>
        </section>

        <section>
          <p className="label mb-8">{t.insights[lang]}</p>
          <div className="space-y-6">
            {study.insights.map((insight, i) => (
              <div key={i} className="flex gap-5 pb-6 border-b border-line last:border-0 last:pb-0">
                <div className="flex-shrink-0 pt-0.5">
                  <div className="w-6 h-6 rounded-md bg-surface border border-line flex items-center justify-center">
                    <span className="text-[9px] font-mono text-fg-3">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-fg tracking-[-0.01em] mb-2">{insight.title[lang]}</h3>
                  <p className="text-[14px] text-fg-2 leading-relaxed">{insight.body[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="label mb-8">{t.decisions[lang]}</p>
          <ol className="space-y-4">
            {study.designDecisions[lang].map((decision, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 text-[11px] font-mono text-fg-4 mt-1 w-5 text-right">{i + 1}.</span>
                <p className="text-[14px] text-fg-2 leading-relaxed">{decision}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <p className="label mb-5">{t.outcome[lang]}</p>
          <p className="text-[15px] text-fg-5 leading-[1.7]">{study.outcome[lang]}</p>
        </section>

        <section className="rounded-xl border border-accent/10 bg-accent/[0.03] p-7 md:p-9">
          <p className="label mb-5 text-accent/60">{t.reflection[lang]}</p>
          <p className="text-[15px] text-fg-5 leading-[1.7] italic">{study.reflection[lang]}</p>
        </section>

        <section>
          <p className="label mb-5">{t.tools[lang]}</p>
          <div className="flex flex-wrap gap-2">
            {study.tools.map((tool) => <Tag key={tool} variant="default">{tool}</Tag>)}
          </div>
        </section>
      </div>

      {/* Footer nav */}
      <div className="container-narrow mt-16 pt-10 border-t border-line flex items-center justify-between">
        <Link href="/work" className="inline-flex items-center gap-2 text-[13px] text-fg-2 hover:text-fg transition-colors">
          <ArrowLeft size={13} /> {t.allStudies[lang]}
        </Link>
        <Link href="/contact" className="text-[13px] font-medium text-fg-2 hover:text-fg transition-colors">
          {t.workWithMe[lang]}
        </Link>
      </div>
    </article>
  );
}

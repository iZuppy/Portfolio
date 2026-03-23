"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import { useLanguage, ui } from "@/lib/i18n";

export default function Home() {
  const { lang } = useLanguage();
  const t = ui.home;
  const featured = caseStudies.filter((cs) => cs.status === "featured");

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="container-wide pt-20 pb-28">
        <div className="max-w-[780px]">

          <div className="mb-10 anim-fade-up">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium text-fg-2 border border-line rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              {t.pill[lang]}
            </span>
          </div>

          <h1 className="heading-xl mb-7 anim-fade-up anim-delay-1">
            <span className="text-fg">{t.h1a[lang]}</span>
            <br />
            <span className="text-accent">{t.h1b[lang]}</span>
          </h1>

          <p className="text-[17px] text-fg-2 leading-[1.65] max-w-[560px] mb-10 anim-fade-up anim-delay-2">
            {t.bio[lang]}
          </p>

          <div className="flex items-center gap-5 anim-fade-up anim-delay-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-accent text-black text-[13px] font-semibold px-4 py-2.5 rounded-lg hover:bg-accent-dim transition-colors duration-150"
            >
              {t.cta1[lang]}
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-fg-2 hover:text-fg transition-colors duration-150"
            >
              {t.cta2[lang]}
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-8 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-8 anim-fade-up anim-delay-4">
          {t.stats.map((stat) => (
            <div key={stat.value}>
              <p className="text-[28px] font-semibold tracking-[-0.03em] text-fg leading-none mb-1.5">
                {stat.value}
              </p>
              <p className="text-[12px] text-fg-3 leading-snug">{stat[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Selected Work ─── */}
      <section className="container-wide pb-28">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="label mb-2.5">{t.workLabel[lang]}</p>
            <h2 className="heading-lg">{t.workHeading[lang]}</h2>
          </div>
          <Link
            href="/work"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13px] text-fg-2 hover:text-fg transition-colors"
          >
            {t.workAll[lang]} <ArrowRight size={13} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {featured.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>

      {/* ─── What I bring ─── */}
      <section className="container-wide pb-28">
        <p className="label mb-10">{t.bringLabel[lang]}</p>
        <div className="grid md:grid-cols-3 gap-px bg-line">
          {t.brings.map((item, i) => (
            <div
              key={item.number}
              className="bg-bg p-8 lg:p-10 anim-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="text-[11px] font-mono text-fg-4 mb-6 tracking-wider">{item.number}</p>
              <h3 className="heading-sm mb-3">{item.title[lang]}</h3>
              <p className="text-[13px] text-fg-2 leading-relaxed">{item.body[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="container-wide pb-32">
        <div className="rounded-xl border border-line bg-surface p-10 md:p-14 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-lg">
            <p className="label mb-5">{t.ctaLabel[lang]}</p>
            <h2 className="heading-lg mb-4">{t.ctaHeading[lang]}</h2>
            <p className="text-[14px] text-fg-2 leading-relaxed">{t.ctaBody[lang]}</p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-black text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-dim transition-colors whitespace-nowrap"
            >
              {t.ctaBtn1[lang]}
              <ArrowUpRight size={13} />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 border border-line-2 text-fg-5 text-[13px] font-medium px-5 py-2.5 rounded-lg hover:text-fg hover:border-fg-4 transition-colors whitespace-nowrap"
            >
              {t.ctaBtn2[lang]}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";
import { useLanguage } from "@/lib/i18n";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const { lang } = useLanguage();

  return (
    <div
      className="anim-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Link
        href={`/work/${study.slug}`}
        className="group block rounded-xl border border-line bg-surface overflow-hidden hover:border-line-2 hover:bg-surface-2 transition-all duration-200"
      >
        {/* Cover */}
        <div className={`relative h-44 bg-gradient-to-br ${study.coverGradient} overflow-hidden`}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 inline-flex items-center text-[11px] font-medium text-white/60 bg-white/[0.06] border border-white/[0.08] px-2.5 py-1 rounded-md tracking-wide">
            {study.tag[lang].split("·")[0].trim()}
          </span>
          <div className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 group-hover:text-white/80 group-hover:bg-white/[0.1] transition-all duration-200">
            <ArrowUpRight size={13} />
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <h3 className="heading-sm text-fg mb-1.5 group-hover:text-fg transition-colors">
            {study.title[lang]}
          </h3>
          <p className="text-[13px] text-fg-2 leading-relaxed mb-5">
            {study.subtitle[lang]}
          </p>
          <div className="flex items-center gap-5 pt-4 border-t border-line">
            {study.metrics.slice(0, 3).map((m) => (
              <div key={m.label.en}>
                <p className="text-[15px] font-semibold text-fg tracking-[-0.02em]">{m.value}</p>
                <p className="text-[11px] text-fg-3 mt-0.5 leading-none">{m.label[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

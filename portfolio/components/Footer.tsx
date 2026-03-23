"use client";

import Link from "next/link";
import { useLanguage, ui } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLanguage();
  const t = ui.footer;

  return (
    <footer className="border-t border-line mt-20">
      <div className="container-wide py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md border border-line bg-surface flex items-center justify-center">
              <span className="text-[9px] font-semibold text-fg-3">LB</span>
            </div>
            <span className="text-[13px] font-semibold text-fg tracking-[-0.01em]">Luis Báez</span>
            <span className="text-fg-4 text-[13px]">·</span>
            <span className="text-[12px] text-fg-3">{t.role[lang]}</span>
          </div>

          <div className="flex items-center gap-6">
            {t.links.map(({ label, href, external }) => (
              <Link key={label.en} href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-[12px] text-fg-3 hover:text-fg-5 transition-colors">
                {label[lang]}
              </Link>
            ))}
          </div>

          <p className="text-[12px] text-fg-4">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

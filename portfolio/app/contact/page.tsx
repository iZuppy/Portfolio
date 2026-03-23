"use client";

import { useState } from "react";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import { useLanguage, ui } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = ui.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="container-wide section-spacing">
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div className="anim-fade-up">
          <p className="label mb-4">{t.label[lang]}</p>
          <h1 className="heading-xl mb-6">
            <span className="text-fg">{t.h1a[lang]}</span>
            <br />
            <span className="text-accent">{t.h1b[lang]}</span>
          </h1>
          <p className="text-[14px] text-fg-2 leading-relaxed mb-10 max-w-sm">{t.body[lang]}</p>

          <div className="space-y-4 mb-10">
            {[
              { icon: <Mail size={15} />,    label: "Email",    value: "luiseduardobaezlapaix@gmail.com", href: "mailto:luiseduardobaezlapaix@gmail.com" },
              { icon: <Linkedin size={15} />, label: "LinkedIn", value: "linkedin.com/in/luisbaez",          href: "https://linkedin.com" },
              { icon: <Github size={15} />,   label: "GitHub",   value: "github.com/luisbaez",               href: "https://github.com" },
            ].map(({ icon, label, value, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg border border-line bg-surface flex items-center justify-center text-fg-3 group-hover:border-accent group-hover:text-accent transition-all duration-200">
                  {icon}
                </div>
                <div>
                  <p className="text-[10px] text-fg-4 uppercase tracking-wider font-semibold">{label}</p>
                  <p className="text-[13px] text-fg-2 group-hover:text-fg transition-colors">{value}</p>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <p className="text-[12px] text-fg-4 mb-3">{t.availLabel[lang]}</p>
            <div className="flex flex-wrap gap-2">
              {t.avail.map((item) => <Tag key={item.en} variant="default">{item[lang]}</Tag>)}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-xl border border-line bg-surface p-8 anim-fade-up anim-delay-2">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-2">
                <span className="text-accent text-xl">✓</span>
              </div>
              <h3 className="text-[18px] font-semibold tracking-[-0.02em]">{t.sentTitle[lang]}</h3>
              <p className="text-[13px] text-fg-2">{t.sentBody[lang]}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: "name",  label: t.formName[lang],  placeholder: t.formNamePh[lang],  type: "text" },
                { key: "email", label: t.formEmail[lang], placeholder: t.formEmailPh[lang], type: "email" },
              ].map(({ key, label, placeholder, type }) => (
                <div key={key}>
                  <label className="text-[11px] font-semibold text-fg-3 uppercase tracking-wider block mb-2">{label}</label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={form[key as "name" | "email"]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-[13px] text-fg placeholder:text-fg-4 focus:outline-none focus:border-line-2 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="text-[11px] font-semibold text-fg-3 uppercase tracking-wider block mb-2">{t.formMsg[lang]}</label>
                <textarea
                  required
                  rows={5}
                  placeholder={t.formMsgPh[lang]}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-bg border border-line rounded-xl px-4 py-3 text-[13px] text-fg placeholder:text-fg-4 focus:outline-none focus:border-line-2 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-accent text-black font-semibold text-[13px] py-3 rounded-xl hover:bg-accent-dim transition-colors"
              >
                {t.formSend[lang]} <ArrowRight size={13} />
              </button>
              <p className="text-center text-[11px] text-fg-4">{t.formNote[lang]}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

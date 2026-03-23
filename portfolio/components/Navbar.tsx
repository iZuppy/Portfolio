"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Sun, Moon } from "lucide-react";
import { useLanguage, ui } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

const navLinks = [
  { href: "/",        key: "home"    },
  { href: "/work",    key: "work"    },
  { href: "/about",   key: "about"   },
  { href: "/contact", key: "contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 anim-fade-in">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between h-14 mt-3 rounded-xl bg-bg/90 backdrop-blur-2xl border border-line px-4 sm:px-5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-6 h-6 rounded-md border border-line-2 bg-surface flex items-center justify-center flex-shrink-0">
              <span className="text-[9px] font-semibold text-fg-2 leading-none tracking-wide group-hover:text-fg transition-colors">
                LB
              </span>
            </div>
            <span className="text-[13px] font-semibold text-fg tracking-[-0.01em] hidden sm:block">
              Luis Báez
            </span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center">
            {navLinks.map(({ href, key }) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "relative px-3 py-1.5 text-[13px] rounded-lg transition-colors duration-150",
                    isActive ? "text-fg" : "text-fg-2 hover:text-fg-5"
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-line" />
                  )}
                  <span className="relative z-10">{ui.nav[key][lang]}</span>
                </Link>
              );
            })}
          </div>

          {/* Right: theme + language toggle + contact */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
              className="w-8 h-8 rounded-lg border border-line flex items-center justify-center text-fg-3 hover:text-fg hover:border-line-2 transition-all duration-150"
            >
              {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
            </button>

            <button
              type="button"
              onClick={toggleLang}
              title={ui.deepl[lang]}
              className="text-[11px] font-semibold text-fg-3 hover:text-fg-5 border border-line hover:border-fg-4 px-2.5 py-1.5 rounded-lg tracking-wider transition-all duration-150"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>

            <Link
              href="/contact"
              className="hidden sm:flex items-center text-[13px] font-medium text-fg-2 hover:text-fg transition-colors duration-150"
            >
              {ui.nav.getInTouch[lang]}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

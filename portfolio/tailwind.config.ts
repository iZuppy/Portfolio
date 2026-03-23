import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg:           "rgb(var(--bg) / <alpha-value>)",
        surface:      "rgb(var(--surface) / <alpha-value>)",
        "surface-2":  "rgb(var(--surface-2) / <alpha-value>)",
        line:         "rgb(var(--line) / <alpha-value>)",
        "line-2":     "rgb(var(--line-2) / <alpha-value>)",
        accent:       "rgb(var(--accent) / <alpha-value>)",
        "accent-dim": "rgb(var(--accent-dim) / <alpha-value>)",
        fg:           "rgb(var(--fg) / <alpha-value>)",
        "fg-2":       "rgb(var(--fg-2) / <alpha-value>)",
        "fg-3":       "rgb(var(--fg-3) / <alpha-value>)",
        "fg-4":       "rgb(var(--fg-4) / <alpha-value>)",
        "fg-5":       "rgb(var(--fg-5) / <alpha-value>)",
      },
      letterSpacing: {
        "heading-xl": "-0.04em",
        "heading-lg": "-0.03em",
        "heading-md": "-0.02em",
        "heading-sm": "-0.015em",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};

export default config;

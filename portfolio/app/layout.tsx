import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Luis Báez — Product Designer",
    template: "%s | Luis Báez",
  },
  description:
    "Systems Engineer and Project Leader at Banco Popular Dominicano, transitioning into Product Design. Santo Domingo, DR.",
  keywords: ["UX design", "product design", "fintech", "banking", "portfolio", "Dominican Republic"],
  authors: [{ name: "Luis Báez" }],
  openGraph: {
    title: "Luis Báez — Product Designer",
    description: "Systems Engineer transitioning into Product Design. Banco Popular Dominicano.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

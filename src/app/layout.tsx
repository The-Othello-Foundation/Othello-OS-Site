import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { BackgroundDecor } from "../components/BackgroundDecor";
import { site } from "../lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Bare-metal OS`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-black text-white antialiased [font-family:var(--font-sans)]">
        <BackgroundDecor />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

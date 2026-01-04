import Link from "next/link";
import { BookOpen, Download, Route } from "lucide-react";

const cards = [
  {
    href: "/docs/getting-started",
    title: "Getting Started",
    desc: "Prereqs, build scripts, and running in QEMU.",
    icon: BookOpen,
  },
  {
    href: "/download",
    title: "Download",
    desc: "Get the latest release artifacts from GitHub.",
    icon: Download,
  },
  {
    href: "/roadmap",
    title: "Roadmap",
    desc: "Where Othello OS is headed next.",
    icon: Route,
  },
];

export default function DocsIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Docs</h1>
        <p className="mt-2 max-w-2xl text-white/70 md:text-lg">
          Everything you need to build, run, and explore Othello OS.
        </p>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-white/15 via-violet-400/20 to-transparent" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link key={c.href} href={c.href} className="gradient-border">
              <div className="glass h-full rounded-2xl p-5 hover:bg-white/[0.08] transition">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                  <Icon className="h-5 w-5 text-white/85" />
                </div>
                <div className="text-base font-semibold">{c.title}</div>
                <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                <div className="mt-4 text-sm text-white underline underline-offset-4">
                  Open →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

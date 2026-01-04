import Link from "next/link";

const cards = [
  {
    href: "/download",
    title: "Download",
    desc: "Get the latest release (auto-pulled from GitHub Releases).",
  },
  {
    href: "/docs/getting-started",
    title: "Getting Started",
    desc: "Prereqs, build scripts, and running in QEMU.",
  },
  {
    href: "/roadmap",
    title: "Roadmap",
    desc: "Where Othello OS is headed next.",
  },
];

export default function DocsIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Docs</h1>
      <p className="mt-2 max-w-2xl text-white/70">
        Everything you need to build, run, and explore Othello OS.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="text-base font-semibold">{c.title}</div>
            <p className="mt-2 text-sm text-white/70">{c.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

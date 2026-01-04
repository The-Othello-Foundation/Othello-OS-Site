import Link from "next/link";
import { site } from "@/lib/site";
import { Section } from "@/components/Section";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ArrowRight, Github } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              BIOS + UEFI • Long Mode • Rust kernel
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              {site.name}
            </h1>
            <p className="mt-4 text-lg text-white/70 md:text-xl">
              {site.tagline}
            </p>
            <p className="mt-3 text-white/60">
              {site.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={site.repo.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> View on GitHub
              </a>

              <Link
                href="/docs/readme"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Read the README
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Section
        title="What Othello focuses on"
        subtitle="Designed to be educational, modular, and extensible—so you can trace the whole boot-to-desktop story end-to-end."
      >
        <FeatureGrid />
      </Section>

      <Section
        title="Docs"
        subtitle="Quickstart, roadmap, and the live README rendered from GitHub."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/docs/getting-started"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="text-base font-semibold">Getting Started</div>
            <p className="mt-2 text-sm text-white/70">
              Toolchain prereqs + build & run scripts.
            </p>
          </Link>

          <Link
            href="/docs/readme"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="text-base font-semibold">README (Live)</div>
            <p className="mt-2 text-sm text-white/70">
              Auto-fetched from GitHub and rendered here.
            </p>
          </Link>

          <Link
            href="/roadmap"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="text-base font-semibold">Roadmap</div>
            <p className="mt-2 text-sm text-white/70">
              Short-, medium-, and long-term direction.
            </p>
          </Link>
        </div>
      </Section>
    </main>
  );
}

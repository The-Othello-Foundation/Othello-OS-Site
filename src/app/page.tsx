import Link from "next/link";
import { site } from "../lib/site";
import { Section } from "../components/Section";
import { FeatureGrid } from "../components/FeatureGrid";
import { BootPipeline } from "../components/BootPipeline";
import { StatStrip } from "../components/StatStrip";
import { CTA } from "../components/CTA";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { fetchLatestRelease } from "../lib/releases";

export default async function HomePage() {
  const rel = await fetchLatestRelease();

  return (
    <main>
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <Sparkles className="h-3.5 w-3.5 text-white/70" />
                BIOS + UEFI • Long Mode • Rust kernel
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  {site.name}
                </span>
              </h1>

              <p className="mt-4 text-lg text-white/70 md:text-xl">
                {site.tagline}
              </p>

              <p className="mt-3 max-w-2xl text-white/60">
                {site.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Download latest <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/docs/getting-started"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Getting Started <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href={site.repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>

              {rel ? (
                <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70">
                  <span className="font-semibold text-white">{rel.tag_name}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60">{rel.name ?? "Latest release"}</span>
                  <span className="text-white/40">•</span>
                  <a
                    className="text-white underline underline-offset-4 hover:text-white/90"
                    href={rel.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Release notes
                  </a>
                </div>
              ) : (
                <div className="mt-6 text-sm text-white/55">
                  No GitHub Releases published yet — once you publish one, this site will automatically show the latest version here.
                </div>
              )}
            </div>

            {/* RIGHT PANEL */}
            <div className="lg:col-span-5">
              <div className="gradient-border">
                <div className="glass rounded-2xl p-6 overflow-hidden">
                  <div className="text-sm font-semibold text-white">At a glance</div>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed break-words max-w-prose">
                    Educational and experimental OS work—from firmware handoff to a graphical desktop—designed to be readable, modular, and hackable.
                  </p>

                  <div className="mt-5">
                    <StatStrip />
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-xs text-white/55">Quick run</div>
                    <pre className="mt-2 overflow-x-auto text-xs leading-relaxed text-white/80 [font-family:var(--font-mono)]">
{`git clone ${site.repo.url}
cd Othello-OS
cd OS_Build
./build-and-run.sh`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section
        eyebrow="Pipeline"
        title="Boot → Kernel → Desktop"
        subtitle="A full traceable path through the CPU boot process, long mode entry, kernel initialization, and a usable UI layer."
      >
        <BootPipeline />
      </Section>

      <Section
        eyebrow="Focus areas"
        title="What Othello focuses on"
        subtitle="Designed to be educational, modular, and extensible—so you can trace the whole boot-to-desktop story end-to-end."
      >
        <FeatureGrid />
      </Section>

      <Section
        eyebrow="Docs & downloads"
        title="Everything you need to try it"
        subtitle="Build from source, or download the latest release artifacts."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/download" className="gradient-border">
            <div className="glass h-full rounded-2xl p-5 hover:bg-white/[0.08] transition">
              <div className="text-base font-semibold text-white">Download</div>
              <p className="mt-2 text-sm text-white/70">
                Latest release + assets, auto-pulled from GitHub.
              </p>
              <div className="mt-4 text-sm text-white underline underline-offset-4">
                Open downloads →
              </div>
            </div>
          </Link>

          <Link href="/docs/getting-started" className="gradient-border">
            <div className="glass h-full rounded-2xl p-5 hover:bg-white/[0.08] transition">
              <div className="text-base font-semibold text-white">Getting Started</div>
              <p className="mt-2 text-sm text-white/70">
                Toolchain prerequisites and build scripts.
              </p>
              <div className="mt-4 text-sm text-white underline underline-offset-4">
                Read guide →
              </div>
            </div>
          </Link>

          <Link href="/roadmap" className="gradient-border">
            <div className="glass h-full rounded-2xl p-5 hover:bg-white/[0.08] transition">
              <div className="text-base font-semibold text-white">Roadmap</div>
              <p className="mt-2 text-sm text-white/70">
                Direction, milestones, and experimental work.
              </p>
              <div className="mt-4 text-sm text-white underline underline-offset-4">
                View roadmap →
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-8">
          <CTA />
        </div>
      </Section>
    </main>
  );
}

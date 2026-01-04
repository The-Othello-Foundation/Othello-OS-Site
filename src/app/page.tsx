import { site } from "../lib/site";
import { ArrowRight, Github } from "lucide-react";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { FeatureGrid } from "../components/FeatureGrid";
import { BootPipeline } from "../components/BootPipeline";
import { ButtonA, ButtonLink } from "../components/ui/Button";
import { Card, CardBody } from "../components/ui/Card";

export default function HomePage() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-[-220px] right-[-160px] h-[560px] w-[560px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <Container className="py-16 md:py-24">
          <div className="grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                BIOS + UEFI • Long Mode • Rust kernel
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
                {site.name}
              </h1>

              <p className="mt-4 text-lg text-white/70 md:text-xl">
                {site.tagline}
              </p>

              <p className="mt-3 max-w-2xl text-white/60">
                {site.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/docs/getting-started" variant="primary">
                  Get Started <ArrowRight className="h-4 w-4" />
                </ButtonLink>

                <ButtonA
                  href={site.repo.url}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                >
                  <Github className="h-4 w-4" /> View on GitHub
                </ButtonA>

                <ButtonLink href="/docs/readme" variant="secondary">
                  Read the README
                </ButtonLink>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["x86_64", "Rust + ASM + C", "Desktop + Shell", "Networking"].map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <BootPipeline />

              <div className="mt-4">
                <Card>
                  <CardBody>
                    <div className="text-sm font-semibold text-white">
                      What you can do on day one
                    </div>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
                      <li>Boot into long mode and land in Rust cleanly.</li>
                      <li>Use the desktop + shell + built-in utilities.</li>
                      <li>Experiment with networking and protocols.</li>
                      <li>Extend kernel subsystems in small, testable steps.</li>
                    </ul>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Section
        title="What Othello focuses on"
        subtitle="Educational, modular, and extensible—so you can trace the whole boot-to-desktop story end-to-end."
      >
        <FeatureGrid />
      </Section>

      <Section
        title="Docs"
        subtitle="Quickstart, roadmap, and the live README rendered from GitHub."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="/docs/getting-started"
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition"
          >
            <div className="text-base font-semibold text-white">Getting Started</div>
            <p className="mt-2 text-sm text-white/70">
              Toolchain prereqs + build & run scripts.
            </p>
          </a>

          <a
            href="/docs/readme"
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition"
          >
            <div className="text-base font-semibold text-white">README (Live)</div>
            <p className="mt-2 text-sm text-white/70">
              Auto-fetched from GitHub and rendered here.
            </p>
          </a>

          <a
            href="/roadmap"
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition"
          >
            <div className="text-base font-semibold text-white">Roadmap</div>
            <p className="mt-2 text-sm text-white/70">
              Short-, medium-, and long-term direction.
            </p>
          </a>
        </div>
      </Section>
    </main>
  );
}

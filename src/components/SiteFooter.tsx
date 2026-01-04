import { site } from "../lib/site";

export function SiteFooter() {
  // Handy for verifying you're looking at the latest deployment.
  const sha = (process.env.VERCEL_GIT_COMMIT_SHA || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "dev").slice(0, 7);
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3 md:items-start">
          <div>
            <div className="text-sm font-semibold text-white">{site.name}</div>
            <p className="mt-2 text-sm text-white/60">
              Bare-metal experimentation: firmware handoff, long mode, Rust kernel work, drivers, networking, and a desktop experience.
            </p>
          </div>

          <div className="text-sm text-white/70">
            <div className="font-semibold text-white">Pages</div>
            <div className="mt-2 space-y-2">
              <a className="block hover:text-white" href="/download">Download</a>
              <a className="block hover:text-white" href="/docs">Docs</a>
              <a className="block hover:text-white" href="/docs/getting-started">Getting Started</a>
              <a className="block hover:text-white" href="/roadmap">Roadmap</a>
            </div>
          </div>

          <div className="text-sm text-white/70">
            <div className="font-semibold text-white">Repository</div>
            <div className="mt-2 space-y-2">
              <a className="block hover:text-white" href={site.repo.url} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="block hover:text-white" href={`${site.repo.url}/releases`} target="_blank" rel="noreferrer">
                Releases
              </a>
              <a className="block hover:text-white" href={`${site.repo.url}/issues`} target="_blank" rel="noreferrer">
                Issues
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {site.name}. Source-available.</div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/40">
            <span>Built with Next.js + Tailwind.</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">build {sha}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

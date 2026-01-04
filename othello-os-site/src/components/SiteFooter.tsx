import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-2 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-white/80">{site.name}</span> — build from firmware
            to long mode to Rust.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="/docs">
              Docs
            </a>
            <a
              className="hover:text-white"
              href={site.repo.url}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

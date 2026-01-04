import { site } from "../lib/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-10">
        <div className="flex flex-col gap-2 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-white/80">{site.name}</span> — build from firmware
            to long mode to Rust.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="/docs">
              Docs
            </a>
            <a className="hover:text-white" href={site.repo.url} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

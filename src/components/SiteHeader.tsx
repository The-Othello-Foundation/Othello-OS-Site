import Link from "next/link";
import { site } from "../lib/site";
import { cn } from "../lib/utils";
import { ArrowUpRight, Github, Menu } from "lucide-react";

const nav = [
  { href: "/docs", label: "Docs" },
  { href: "/download", label: "Download" },
  { href: "/docs/getting-started", label: "Getting Started" },
  { href: "/roadmap", label: "Roadmap" },
];

function NavLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col gap-1 md:flex-row md:items-center md:gap-1", className)}>
      {nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm font-black text-white">
            O
          </div>
<div className="leading-tight">
            <div className="text-sm font-semibold text-white">{site.name}</div>
            <div className="text-xs text-white/60">Bare-metal OS</div>
          </div>
        </Link>

        <nav className="hidden md:block">
          <NavLinks className="md:flex-row" />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/download"
            className="hidden rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-white/90 md:inline-flex"
          >
            Download
          </Link>

          <a
            href={site.repo.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-4 w-4 text-white/60" />
          </a>

          {/* Mobile menu without client JS */}
          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer rounded-xl border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-white/10 bg-black/80 p-2 shadow-xl backdrop-blur">
              <NavLinks />
              <div className="mt-2 border-t border-white/10 pt-2">
                <Link
                  href="/download"
                  className="block rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Download
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

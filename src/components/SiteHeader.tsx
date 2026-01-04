import Link from "next/link";
import { site } from "../lib/site";
import { cn } from "../lib/utils";
import { ArrowUpRight, BookOpen, Github } from "lucide-react";

const nav = [
  { href: "/docs", label: "Docs", icon: BookOpen },
  { href: "/download", label: "Download" },
  { href: "/docs/getting-started", label: "Getting Started" },
  { href: "/roadmap", label: "Roadmap" },
];

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
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
        </div>
      </div>
    </header>
  );
}

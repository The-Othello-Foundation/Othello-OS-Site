"use client";

import Link from "next/link";
import { site } from "../lib/site";
import { cn } from "../lib/utils";
import { ArrowUpRight, Github, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Container } from "./Container";
import { ButtonA, ButtonLink } from "./ui/Button";

const nav = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/getting-started", label: "Getting Started" },
  { href: "/roadmap", label: "Roadmap" },
];

export function SiteHeader({ className }: { className?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const active = useMemo(() => new Set([pathname]), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur supports-[backdrop-filter]:bg-black/25",
        className,
      )}
    >
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* Put your icon at public/othello.png */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/othello.png"
            alt="Othello OS"
            className="h-9 w-9 rounded-xl border border-white/10 bg-white/5"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">{site.name}</div>
            <div className="text-xs text-white/60">bare-metal • x86_64 • rust</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-3 py-2 text-sm transition",
                active.has(item.href)
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="/docs/readme"
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
          >
            Read README
          </ButtonLink>

          <ButtonA
            href={site.repo.url}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            size="sm"
            className="hidden md:inline-flex"
          >
            <Github className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-4 w-4 text-white/60" />
          </ButtonA>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-white/10 md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm transition",
                    pathname === item.href
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 flex gap-2">
                <ButtonLink href="/docs/readme" variant="secondary" size="sm">
                  Read README
                </ButtonLink>
                <ButtonA
                  href={site.repo.url}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  GitHub <ArrowUpRight className="h-4 w-4 text-white/60" />
                </ButtonA>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

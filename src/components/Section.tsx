import { cn } from "../lib/utils";

export function Section({
  title,
  subtitle,
  eyebrow,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400/90" />
              {eyebrow}
            </div>
          ) : null}

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>

          {subtitle ? (
            <p className="mt-3 max-w-2xl text-white/70 md:text-lg">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-6 h-px w-full bg-gradient-to-r from-white/15 via-violet-400/20 to-transparent" />
        </div>

        {children}
      </div>
    </section>
  );
}

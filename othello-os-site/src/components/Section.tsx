import { cn } from "@/lib/utils";

export function Section({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-14", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-white/70">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

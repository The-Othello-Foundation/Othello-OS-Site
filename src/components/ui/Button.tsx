import * as React from "react";
import Link from "next/link";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 " +
  "disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-base",
};

export function Button({
  variant = "secondary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function ButtonLink({
  href,
  variant = "secondary",
  size = "md",
  className,
  ...props
}: React.ComponentProps<typeof Link> & { variant?: Variant; size?: Size }) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}

export function ButtonA({
  href,
  variant = "secondary",
  size = "md",
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: Variant; size?: Size }) {
  return (
    <a href={href} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}

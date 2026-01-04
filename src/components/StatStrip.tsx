import { Code2, Cpu, Network, Layers } from "lucide-react";

const stats = [
  { label: "Target", value: "x86_64", icon: Cpu },
  { label: "Core language", value: "Rust + ASM", icon: Code2 },
  { label: "Boot paths", value: "BIOS + UEFI", icon: Layers },
  { label: "Networking", value: "IPv4 stack", icon: Network },
];

export function StatStrip() {
  return (
    <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(12rem,1fr))]">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="glass rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="shrink-0 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/30">
                <Icon className="h-5 w-5 text-white/80" />
              </div>

              <div className="min-w-0">
                <div className="text-xs text-white/55 leading-tight">{s.label}</div>
                <div className="mt-0.5 text-sm font-semibold text-white leading-snug whitespace-normal break-words">
                  {s.value}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

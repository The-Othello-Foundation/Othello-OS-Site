import { Cpu, HardDrive, Shield, TerminalSquare, Monitor } from "lucide-react";

const steps = [
  {
    title: "Firmware",
    body: "Power-on → BIOS/UEFI initializes hardware and hands off to the loader path.",
    icon: Cpu,
  },
  {
    title: "Boot path (BIOS or UEFI)",
    body: "Legacy stages (MBR → Stage-2 → PM → LM) or a UEFI loader—both converge in long mode.",
    icon: HardDrive,
  },
  {
    title: "Kernel bring-up",
    body: "Rust entry point, memory setup, interrupts, drivers, and core services.",
    icon: Shield,
  },
  {
    title: "Userland + shell",
    body: "Interactive terminal utilities and OS tooling for debugging and iteration.",
    icon: TerminalSquare,
  },
  {
    title: "Desktop experience",
    body: "Framebuffer GUI desktop and apps—aiming for a complete boot-to-desktop story.",
    icon: Monitor,
  },
];

export function BootPipeline() {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {steps.map((s, idx) => {
        const Icon = s.icon;
        return (
          <div key={s.title} className="gradient-border">
            <div className="glass h-full rounded-2xl p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                  <Icon className="h-5 w-5 text-white/85" />
                </div>
                <div className="text-xs text-white/50">Step {idx + 1}</div>
              </div>
              <div className="text-base font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

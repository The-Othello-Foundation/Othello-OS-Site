import { cn } from "../lib/utils";
import { Cpu, Monitor, Network, Shield, Folder, Globe } from "lucide-react";

const features = [
  {
    title: "Assembly-first boot → Rust kernel",
    body: "BIOS (MBR→Stage-2→PM→LM) + UEFI loader, both converging in long mode at _start(boot_info).",
    icon: Cpu,
  },
  {
    title: "Desktop + apps",
    body: "Framebuffer desktop, login flow, terminal shell, editor, registry viewer, and a browser UI scaffold.",
    icon: Monitor,
  },
  {
    title: "Networking experiments",
    body: "RTL8139 NIC + ARP/IPv4/UDP/DHCP/ICMP, plus DNS/TCP/HTTP for real I/O.",
    icon: Network,
  },
  {
    title: "Security-first mindset",
    body: "Rust-first kernel logic with defensive parsing, bounded operations, and traceable error paths.",
    icon: Shield,
  },
  {
    title: "RAM FS + optional persistence",
    body: "In-kernel filesystem with optional append-only persistence log replayed at boot.",
    icon: Folder,
  },
  {
    title: "Browser scaffolding",
    body: "Text-first rendering today; web stack stubs for future DOM/layout/JS evolution.",
    icon: Globe,
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <div key={f.title} className="gradient-border">
            <div
              className={cn(
                "glass group h-full rounded-2xl p-5 transition",
                "hover:bg-white/[0.08] hover:translate-y-[-1px]",
              )}
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                <Icon className="h-5 w-5 text-white/85 transition group-hover:scale-[1.03]" />
              </div>
              <div className="text-base font-semibold text-white">{f.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

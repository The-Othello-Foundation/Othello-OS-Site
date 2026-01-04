import { cn } from "../lib/utils";
import { Cpu, Monitor, Network, Shield, Folder, Globe } from "lucide-react";

const features = [
  {
    title: "Assembly-first boot → Rust kernel",
    body: "BIOS (MBR→Stage-2→PM→LM) + UEFI loader, both converging in long mode at _start(boot_info).",
    icon: Cpu,
  },
  {
    title: "Real GUI desktop + apps",
    body: "Framebuffer desktop, login flow, terminal shell, editor, registry viewer, and a browser UI.",
    icon: Monitor,
  },
  {
    title: "Networking experiments",
    body: "RTL8139 NIC + ARP/IPv4/UDP/DHCP/ICMP, plus DNS/TCP/HTTP for real I/O.",
    icon: Network,
  },
  {
    title: "Security-first mindset",
    body: "Rust-first kernel logic, defensive parsing, bounded operations, and traceable error paths.",
    icon: Shield,
  },
  {
    title: "RAM FS + optional persistence",
    body: "In-kernel filesystem with optional append-only persistence log replayed at boot.",
    icon: Folder,
  },
  {
    title: "Browser scaffolding",
    body: "Text-first rendering today; web/ contains HTML/CSS/DOM/layout/JS stubs for future evolution.",
    icon: Globe,
  },
];

export function FeatureGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.title}
            className={cn(
              "rounded-2xl border border-white/10 bg-white/5 p-5",
              "hover:bg-white/[0.07] transition",
            )}
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30">
              <Icon className="h-5 w-5 text-white/80" />
            </div>
            <div className="text-base font-semibold text-white">{f.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{f.body}</p>
          </div>
        );
      })}
    </div>
  );
}

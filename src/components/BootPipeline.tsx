import { Card, CardBody } from "./ui/Card";

const steps = [
  { title: "Power on", desc: "Firmware hands off to the loader." },
  { title: "BIOS / UEFI", desc: "Bootloader path for your environment." },
  { title: "Long Mode", desc: "x86_64 paging + 64-bit execution." },
  { title: "Rust kernel", desc: "_start(boot_info) → init → desktop." },
];

export function BootPipeline() {
  return (
    <Card className="overflow-hidden">
      <CardBody>
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-white">Boot pipeline</div>
            <div className="mt-1 text-sm text-white/60">
              Trace the full CPU boot story end-to-end.
            </div>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 md:block">
            firmware → loader → kernel
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-black/30 p-4"
            >
              <div className="flex items-center gap-2">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-white/80">
                  {i + 1}
                </div>
                <div className="text-sm font-semibold text-white">{s.title}</div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

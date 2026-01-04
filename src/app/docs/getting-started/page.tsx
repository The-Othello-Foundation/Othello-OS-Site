export default function GettingStarted() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Getting Started</h1>
        <p className="mt-2 max-w-2xl text-white/70 md:text-lg">
          Clone the repo, build the disk image, and boot it in QEMU.
        </p>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-white/15 via-violet-400/20 to-transparent" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="gradient-border">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Prerequisites</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-white/70">
              <li>Rust toolchain (bare-metal target like <code className="rounded bg-white/10 px-1 py-0.5">x86_64-unknown-none</code>)</li>
              <li>Assembler (nasm/yasm)</li>
              <li>C toolchain (gcc/clang)</li>
              <li>QEMU (or another x86_64 emulator/hypervisor)</li>
            </ul>
          </div>
        </section>

        <section className="gradient-border">
          <div className="glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Clone & Build</h2>
            <pre className="mt-3 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/85 [font-family:var(--font-mono)]">
{`git clone https://github.com/The-Othello-Foundation/Othello-OS.git
cd Othello-OS
cd OS_Build

# Linux/macOS
./build-and-run.sh

# Windows PowerShell
./build-and-run.ps1`}
            </pre>
            <p className="mt-3 text-sm text-white/60">
              Tip: OS_Build/BUILDING.md in the repo is the canonical build reference.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-6 gradient-border">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-lg font-semibold">Run & Iterate</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            If you’re iterating quickly, keep a second terminal open for logs and serial output. When something breaks early in boot,
            add small stage markers and error codes so you can pinpoint exactly where the handoff failed.
          </p>
        </div>
      </div>
    </main>
  );
}

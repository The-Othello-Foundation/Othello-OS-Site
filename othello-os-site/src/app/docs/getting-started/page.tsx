export default function GettingStarted() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Getting Started</h1>
      <p className="mt-2 max-w-2xl text-white/70">
        Clone the repo, build the disk image, and boot it in QEMU.
      </p>

      <div className="mt-8 space-y-6">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Prerequisites</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/70">
            <li>Rust (bare-metal target like x86_64-unknown-none)</li>
            <li>Assembler (nasm/yasm)</li>
            <li>C toolchain (gcc/clang)</li>
            <li>QEMU (or another x86_64 emulator/hypervisor)</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Clone & Build</h2>
          <pre className="mt-3 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-sm">
{`# Clone the repository
git clone https://github.com/The-Othello-Foundation/Othello-OS.git
cd Othello-OS

# Go to the build orchestration directory
cd OS_Build

# Build the disk image and run it (Linux/macOS)
./build-and-run.sh

# Or on Windows (PowerShell)
# ./build-and-run.ps1`}
          </pre>
          <p className="mt-3 text-sm text-white/60">
            Tip: OS_Build/BUILDING.md is the canonical build reference.
          </p>
        </section>
      </div>
    </main>
  );
}

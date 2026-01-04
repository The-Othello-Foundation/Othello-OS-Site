export default function Roadmap() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Roadmap</h1>
        <p className="mt-2 max-w-2xl text-white/70 md:text-lg">
          Short-term polish, medium-term expansion, and long-term experiments like SMP and stronger isolation.
        </p>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-white/15 via-violet-400/20 to-transparent" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="gradient-border">
          <div className="glass rounded-2xl p-5">
            <div className="text-base font-semibold">Short-term</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>Polish boot-stage logs + error codes</li>
              <li>Stabilize shell commands + UI behavior</li>
              <li>Harden interrupt/exception paths</li>
              <li>Improve DHCP reliability + net diagnostics</li>
            </ul>
          </div>
        </div>

        <div className="gradient-border">
          <div className="glass rounded-2xl p-5">
            <div className="text-base font-semibold">Medium-term</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>Minimal scheduler + task abstraction</li>
              <li>Expand filesystem (dirs, metadata, compaction)</li>
              <li>Improve browser toward real layout</li>
              <li>Better networking observability</li>
            </ul>
          </div>
        </div>

        <div className="gradient-border">
          <div className="glass rounded-2xl p-5">
            <div className="text-base font-semibold">Long-term / Experimental</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>RTOS-style scheduling experiments</li>
              <li>SMP bring-up + inter-CPU comms</li>
              <li>Higher-half kernel + stronger isolation</li>
              <li>Native TLS/crypto stack experiments</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

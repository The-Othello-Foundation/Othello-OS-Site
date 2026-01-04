import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <div className="gradient-border">
      <div className="glass rounded-2xl p-6 md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              Ready to boot Othello OS?
            </div>
            <p className="mt-2 max-w-2xl text-white/70">
              Download the newest release, or jump straight into the build-and-run instructions.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/download"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
            >
              Download <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Getting Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

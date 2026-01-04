import Link from "next/link";
import { site } from "@/lib/site";
import { fetchLatestRelease, pickPrimaryAssets } from "@/lib/releases";

function formatBytes(bytes: number) {
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let n = bytes;
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024;
    i++;
  }
  return `${n.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default async function DownloadPage() {
  const rel = await fetchLatestRelease();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white">Download</h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Grab the latest Othello OS release from GitHub. If you don’t see a release here yet, publish one on the repo’s Releases page.
        </p>
      </div>

      {rel ? (
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm text-white/60">Latest release</div>
                <div className="mt-1 text-xl font-semibold text-white">
                  {rel.name ?? rel.tag_name}
                  <span className="ml-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                    {rel.tag_name}
                  </span>
                </div>
                <div className="mt-2 text-sm text-white/60">
                  Published {formatDate(rel.published_at)} •{" "}
                  <a className="text-white underline underline-offset-4" href={rel.html_url} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </div>
              </div>

              <a
                href={rel.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 md:mt-0"
              >
                Open Release
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">Assets</h2>
            <p className="mt-2 text-sm text-white/60">
              These are the files attached to the latest GitHub release.
            </p>

            {rel.assets?.length ? (
              <div className="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10">
                {pickPrimaryAssets(rel.assets).map((a) => (
                  <div key={a.id} className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="font-semibold text-white">{a.name}</div>
                      <div className="mt-1 text-xs text-white/60">
                        {formatBytes(a.size)} • {a.download_count} downloads • {a.content_type}
                      </div>
                    </div>

                    <a
                      href={a.browser_download_url}
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
                No assets attached to this release yet.
              </div>
            )}
          </div>

          {rel.body ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Release notes</h2>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/80">
                {rel.body}
              </pre>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-semibold text-white">No releases found</div>
          <p className="mt-2 text-white/70">
            Publish a GitHub Release for the OS repo and this page will automatically show the newest one.
          </p>
          <a
            href={`${site.repo.url}/releases`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Go to Releases
          </a>
        </div>
      )}

      <div className="mt-10 text-sm text-white/60">
        Want to build from source instead? Head to{" "}
        <a className="text-white underline underline-offset-4" href={site.repo.url} target="_blank" rel="noreferrer">
          the repository
        </a>{" "}
        or the{" "}
        <Link className="text-white underline underline-offset-4" href="/docs/getting-started">
          Getting Started
        </Link>{" "}
        page.
      </div>
    </main>
  );
}

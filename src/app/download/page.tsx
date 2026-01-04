import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { site } from "@/lib/site";
import { fetchLatestRelease, pickPrimaryAssets } from "@/lib/releases";
import { ArrowUpRight, Download, Package } from "lucide-react";

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
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Package className="h-3.5 w-3.5 text-white/70" />
          Releases & artifacts
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Download
        </h1>

        <p className="mt-2 max-w-2xl text-white/70 md:text-lg">
          Grab the latest {site.name} release from GitHub. This page updates automatically when you publish a new release.
        </p>
      </div>

      {rel ? (
        <div className="space-y-6">
          <div className="gradient-border">
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm text-white/60">Latest release</div>
                  <div className="mt-1 text-xl font-semibold text-white">
                    {rel.name ?? rel.tag_name}
                  </div>
                  <div className="mt-2 text-sm text-white/60">
                    Tag <span className="text-white/80">{rel.tag_name}</span> • Published{" "}
                    <span className="text-white/80">{formatDate(rel.published_at)}</span>
                  </div>
                </div>

                <a
                  href={rel.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Release page <ArrowUpRight className="h-4 w-4 text-white/70" />
                </a>
              </div>
            </div>
          </div>

          {rel.body ? (
            <div className="gradient-border">
              <div className="glass rounded-2xl p-6">
                <div className="text-sm font-semibold text-white">Release notes</div>
                <div className="mt-3 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => <h2 className="mb-2 text-lg font-semibold text-white">{children}</h2>,
                      h2: ({ children }) => <h3 className="mb-2 mt-4 text-base font-semibold text-white">{children}</h3>,
                      h3: ({ children }) => <h4 className="mb-2 mt-4 text-sm font-semibold text-white">{children}</h4>,
                      p: ({ children }) => <p className="mt-2 text-sm leading-relaxed text-white/75">{children}</p>,
                      a: ({ children, href }) => (
                        <a href={href} className="text-white underline underline-offset-4 hover:text-white/90" target="_blank" rel="noreferrer">
                          {children}
                        </a>
                      ),
                      ul: ({ children }) => <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/75">{children}</ul>,
                      ol: ({ children }) => <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-white/75">{children}</ol>,
                      li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                      code: ({ children }) => (
                        <code className="rounded bg-white/10 px-1 py-0.5 text-white/85 [font-family:var(--font-mono)]">
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <pre className="mt-3 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/85 [font-family:var(--font-mono)]">
                          {children}
                        </pre>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {rel.body}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ) : null}

          <div className="grid gap-4 md:grid-cols-2">
            {pickPrimaryAssets(rel.assets).map((a) => (
              <div key={a.id} className="gradient-border">
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="truncate text-base font-semibold text-white">
                        {a.name}
                      </div>
                      <div className="mt-1 text-sm text-white/60">
                        {formatBytes(a.size)} • {a.download_count} downloads
                      </div>
                    </div>
                    <a
                      href={a.browser_download_url}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {rel.assets.length > 0 ? (
            <div className="gradient-border">
              <div className="glass rounded-2xl p-6">
                <div className="text-sm font-semibold text-white">All assets</div>
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-black/40 text-white/70">
                      <tr>
                        <th className="px-4 py-3 font-medium">Asset</th>
                        <th className="px-4 py-3 font-medium">Size</th>
                        <th className="px-4 py-3 font-medium">Downloads</th>
                        <th className="px-4 py-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-black/20">
                      {rel.assets.map((a) => (
                        <tr key={a.id} className="border-t border-white/10">
                          <td className="px-4 py-3 text-white/85">{a.name}</td>
                          <td className="px-4 py-3 text-white/70">{formatBytes(a.size)}</td>
                          <td className="px-4 py-3 text-white/70">{a.download_count}</td>
                          <td className="px-4 py-3">
                            <a
                              href={a.browser_download_url}
                              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                            >
                              Download <Download className="h-4 w-4" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-sm text-white/60">
                  Tip: publish a GitHub Release with attached <span className="text-white/80">.iso</span>, <span className="text-white/80">.img</span>, or <span className="text-white/80">.zip</span> files.
                </div>
              </div>
            </div>
          ) : (
            <div className="gradient-border">
              <div className="glass rounded-2xl p-6 text-white/70">
                This release has no attached assets. Add files in the GitHub Release editor so people can download an ISO/IMG/ZIP directly.
              </div>
            </div>
          )}

          <div className="mt-8 text-sm text-white/60">
            Looking to build from source instead?{" "}
            <Link className="text-white underline underline-offset-4 hover:text-white/90" href="/docs/getting-started">
              Follow Getting Started →
            </Link>
          </div>
        </div>
      ) : (
        <div className="gradient-border">
          <div className="glass rounded-2xl p-6">
            <div className="text-base font-semibold text-white">No releases yet</div>
            <p className="mt-2 max-w-2xl text-white/70">
              Publish a GitHub Release on the OS repository, then this page will automatically show the latest version and downloadable assets.
            </p>
            <a
              href={`${site.repo.url}/releases`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
            >
              Open Releases <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

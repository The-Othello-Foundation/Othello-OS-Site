import { site } from "../lib/site";

export const dynamic = "force-static";
export const revalidate = 60 * 60;

function absolutize(html: string) {
  // Make relative image/src and href work when embedded.
  const { owner, name, branch } = site.repo;
  const rawBase = `https://raw.githubusercontent.com/${owner}/${name}/${branch}/`;
  const blobBase = `https://github.com/${owner}/${name}/blob/${branch}/`;

  return html
    // images: src="..." -> raw URL
    .replace(/src="(?!https?:\/\/)([^"]+)"/g, (_m, p1) => `src="${rawBase}${p1.replace(/^\.?\//, "")}"`)
    // links: href="..." -> blob URL
    .replace(/href="(?!https?:\/\/|#)([^"]+)"/g, (_m, p1) => `href="${blobBase}${p1.replace(/^\.?\//, "")}"`);
}

export default async function ReadmePage() {
  const { owner, name, branch } = site.repo;

  // This endpoint returns HTML for README (GitHub’s own renderer)
  const url = `https://github.com/${owner}/${name}?tab=readme-ov-file`;

  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error("Failed to fetch README HTML");

  const html = await res.text();

  // Grab just the README article region from the page HTML.
  // This selector is stable enough for GitHub’s readme container.
  const match = html.match(/<article[^>]*class="markdown-body[^"]*"[^>]*>[\s\S]*?<\/article>/i);

  const readmeHtml = match ? absolutize(match[0]) : "<p>README not found.</p>";

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">README</h1>
        <p className="mt-2 text-white/70">
          Rendered using GitHub’s HTML (no markdown plugins required).
        </p>
      </div>

      <div
        className="rounded-2xl border border-white/10 bg-white/5 p-6"
        dangerouslySetInnerHTML={{ __html: readmeHtml }}
      />

      {/* Minimal CSS to make GitHub’s markdown look good in your theme */}
      <style>{`
        .markdown-body { color: rgba(255,255,255,.88); }
        .markdown-body a { color: rgba(255,255,255,.92); text-decoration: underline; }
        .markdown-body pre, .markdown-body code { background: rgba(0,0,0,.35) !important; color: white; }
        .markdown-body table { color: rgba(255,255,255,.88); }
        .markdown-body img { border-radius: 14px; border: 1px solid rgba(255,255,255,.12); }
      `}</style>
    </main>
  );
}

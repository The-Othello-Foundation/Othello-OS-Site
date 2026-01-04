import { site } from "./site";

export type ReleaseAsset = {
  id: number;
  name: string;
  size: number;
  download_count: number;
  content_type: string;
  browser_download_url: string;
};

export type ReleaseInfo = {
  id: number;
  name: string | null;
  tag_name: string;
  html_url: string;
  published_at: string;
  body: string | null;
  assets: ReleaseAsset[];
};

export async function fetchLatestRelease(): Promise<ReleaseInfo | null> {
  const { owner, name } = site.repo;

  const url = `https://api.github.com/repos/${owner}/${name}/releases/latest`;
  const res = await fetch(url, {
    // cache on Vercel, refresh every 15 minutes
    next: { revalidate: 60 * 15 },
    headers: {
      // GitHub recommends a UA; also helps some edge cases.
      "User-Agent": "Othello-OS-Site",
      "Accept": "application/vnd.github+json",
    },
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);

  return (await res.json()) as ReleaseInfo;
}

export function pickPrimaryAssets(assets: ReleaseAsset[]) {
  const wantedExt = [".iso", ".img", ".bin", ".efi", ".zip", ".tar.gz"];
  const score = (name: string) => {
    const lower = name.toLowerCase();
    const extScore = wantedExt.findIndex((e) => lower.endsWith(e));
    // Prefer disk images first, then zip/tar
    const base = extScore === -1 ? 999 : extScore;
    // Prefer shorter names (usually nicer) as tie-breaker
    return base * 1000 + lower.length;
  };

  return [...assets].sort((a, b) => score(a.name) - score(b.name));
}

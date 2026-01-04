import { site } from "@/lib/site";

export async function fetchRepoFile(path: string) {
  const { owner, name, branch } = site.repo;

  const url = `https://raw.githubusercontent.com/${owner}/${name}/${branch}/${path}`;

  const res = await fetch(url, {
    // Revalidate hourly on Vercel (keeps README reasonably fresh)
    next: { revalidate: 60 * 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
  }

  return res.text();
}

export function toRawFileUrl(path: string) {
  const { owner, name, branch } = site.repo;
  return `https://raw.githubusercontent.com/${owner}/${name}/${branch}/${path}`;
}

export function toBlobFileUrl(path: string) {
  const { owner, name, branch } = site.repo;
  return `https://github.com/${owner}/${name}/blob/${branch}/${path}`;
}

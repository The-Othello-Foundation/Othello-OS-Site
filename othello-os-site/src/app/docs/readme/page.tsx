import { fetchRepoFile } from "@/lib/github";
import { Markdown } from "@/components/Markdown";

export const dynamic = "force-static";

export default async function ReadmePage() {
  const md = await fetchRepoFile("README.md");

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">README</h1>
        <p className="mt-2 text-white/70">
          This page fetches README.md from GitHub and renders it here.
        </p>
      </div>

      <Markdown content={md} />
    </main>
  );
}

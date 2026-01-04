import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/docs`, lastModified: new Date() },
    { url: `${base}/docs/getting-started`, lastModified: new Date() },
    { url: `${base}/download`, lastModified: new Date() },
        { url: `${base}/roadmap`, lastModified: new Date() },
  ];
}

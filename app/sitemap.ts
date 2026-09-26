import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/markdown";
import { page_routes } from "@/lib/routes-config";

const BASE = "https://learn-git-with-me.vercel.app";

// No lastModified: everything is prerendered at build time, so a build-date
// stamp would tell crawlers every page changed on every deploy and burn crawl
// budget. Add it per route only when content actually carries a git date.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getAllBlogs();

  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.9 },
    ...blogs.map((blog) => ({
      url: `${BASE}/blog/${blog.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...page_routes.map((route) => ({
      url: `${BASE}/docs${route.href}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}

import type { MetadataRoute } from "next";
import { getAllBlogStaticPaths } from "@/lib/markdown";
import { page_routes } from "@/lib/routes-config";

const BASE = "https://learn-git-with-me.vercel.app";

// No lastModified: a build-date stamp would tell crawlers every page changed on every deploy.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = (await getAllBlogStaticPaths()) ?? [];

  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.9 },
    ...blogs.map((slug) => ({
      url: `${BASE}/blog/${slug}`,
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

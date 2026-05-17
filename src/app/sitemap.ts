import type { MetadataRoute } from "next";

import { getAllInsights } from "@/lib/content";
import { pagePaths, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pagePaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const insights = getAllInsights().map((insight) => ({
    url: `${siteConfig.url}/insights/${insight.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.72,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticPages, ...insights];
}

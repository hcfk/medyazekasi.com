import type { MetadataRoute } from "next";

import { getAllInsights } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly";
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/platform", changeFrequency: "monthly", priority: 0.9 },
    { path: "/mobil-uygulama", changeFrequency: "monthly", priority: 0.9 },
    { path: "/kamu-kurumlari", changeFrequency: "monthly", priority: 0.8 },
    { path: "/belediyeler", changeFrequency: "monthly", priority: 0.8 },
    { path: "/basin-yayin", changeFrequency: "monthly", priority: 0.8 },
    { path: "/ozellikler", changeFrequency: "monthly", priority: 0.8 },
    { path: "/guvenlik", changeFrequency: "monthly", priority: 0.7 },
    { path: "/demo", changeFrequency: "monthly", priority: 0.7 },
    { path: "/iletisim", changeFrequency: "monthly", priority: 0.7 },
    { path: "/cerez-politikasi", changeFrequency: "monthly", priority: 0.6 },
    { path: "/yasal-bilgiler", changeFrequency: "monthly", priority: 0.6 },
    { path: "/mobil-izinler", changeFrequency: "monthly", priority: 0.6 },
    { path: "/yas-siniflandirmasi", changeFrequency: "monthly", priority: 0.6 },
    { path: "/insights", changeFrequency: "weekly", priority: 0.7 },
  ];

  const insightRoutes = getAllInsights().map((insight) => ({
    path: `/insights/${insight.slug}`,
    changeFrequency: "weekly" as const,
    priority:
      insight.slug === "desifre-transkripsiyon-kamu-veri-guvenligi" ? 0.7 : 0.6,
  }));

  return [...routes, ...insightRoutes].map((route) => ({
    url: route.path === "/" ? siteConfig.url : `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

import type { MetadataRoute } from "next";

import { getAllInsights } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const insightSlugs = [
  "basin-bulteni-transkripsiyon",
  "belediye-basinyayin-otomasyon",
  "belediye-meclis-tutanagi",
  "canli-yayin-transkripsiyon",
  "dijital-cagda-kamu-iletisimi-medya-zekasi",
  "manuel-kaostan-yapay-zeka-destekli-medya-duzenine-gecis",
  "medya-zekasi-operasyonel-tuzugu",
  "desifre-transkripsiyon-kamu-veri-guvenligi",
  "kamu-kurumsal-hafiza",
  "kamu-video-altyazi-zorunlulugu",
  "kurumsal-medya-arsivi",
  "saha-ekipleri-mobil-ses-kaydi",
  "toplanti-kaydi-transkripsiyon",
  "universite-ders-kaydi-transkripsiyon",
  "yapay-zeka-ile-ozetleme",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const insights = getAllInsights();
  const insightDateMap = new Map(
    insights.map((insight) => [insight.slug, insight.dateModified || insight.datePublished]),
  );
  const defaultLastModified = "2026-05-19T00:00:00.000Z";

  const routes: Array<{
    path: string;
    changeFrequency: "weekly" | "monthly";
    priority: number;
    lastModified: string;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1, lastModified: defaultLastModified },
    {
      path: "/platform",
      changeFrequency: "monthly",
      priority: 0.9,
      lastModified: defaultLastModified,
    },
    {
      path: "/mobil-uygulama",
      changeFrequency: "monthly",
      priority: 0.9,
      lastModified: defaultLastModified,
    },
    {
      path: "/kamu-kurumlari",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: defaultLastModified,
    },
    {
      path: "/belediyeler",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: defaultLastModified,
    },
    {
      path: "/basin-yayin",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: defaultLastModified,
    },
    {
      path: "/ozellikler",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: defaultLastModified,
    },
    {
      path: "/guvenlik",
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: defaultLastModified,
    },
    {
      path: "/demo",
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: defaultLastModified,
    },
    {
      path: "/iletisim",
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: defaultLastModified,
    },
    {
      path: "/cerez-politikasi",
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: defaultLastModified,
    },
    {
      path: "/yasal-bilgiler",
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: defaultLastModified,
    },
    {
      path: "/mobil-izinler",
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: defaultLastModified,
    },
    {
      path: "/yas-siniflandirmasi",
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: defaultLastModified,
    },
    {
      path: "/insights",
      changeFrequency: "weekly",
      priority: 0.7,
      lastModified: insights[0]?.dateModified || insights[0]?.datePublished || defaultLastModified,
    },
  ];

  const insightRoutes = insightSlugs.map((slug) => ({
    path: `/insights/${slug}`,
    changeFrequency: "weekly" as const,
    priority: slug === "desifre-transkripsiyon-kamu-veri-guvenligi" ? 0.7 : 0.6,
    lastModified: insightDateMap.get(slug) || defaultLastModified,
  }));

  return [...routes, ...insightRoutes].map((route) => ({
    url: route.path === "/" ? siteConfig.url : `${siteConfig.url}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

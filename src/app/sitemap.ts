import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const insightSlugs = [
  "basin-bulteni-transkripsiyon",
  "belediye-basinyayin-otomasyon",
  "belediye-meclis-tutanagi",
  "canli-yayin-transkripsiyon",
  "dijital-cagda-kamu-iletisimi-medya-zekasi",
  "manuel-kaostan-yapay-zeka-destekli-medya-duzenine-gecis",
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

  const insightRoutes = insightSlugs.map((slug) => ({
    path: `/insights/${slug}`,
    changeFrequency: "weekly" as const,
    priority: slug === "desifre-transkripsiyon-kamu-veri-guvenligi" ? 0.7 : 0.6,
  }));

  return [...routes, ...insightRoutes].map((route) => ({
    url: route.path === "/" ? siteConfig.url : `${siteConfig.url}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

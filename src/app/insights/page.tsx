import { InsightCard } from "@/components/site/insight-card";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { getAllInsights } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Insights | Kurumsal Medya Yönetimi Rehberleri | Medya Zekâsı",
  description:
    "Kamu kurumları, belediyeler ve basın-yayın ekipleri için kurumsal medya yönetimi, transkripsiyon, özetleme ve arşivleme rehberleri.",
  path: "/insights",
});

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <PageHero
        eyebrow="Insights"
        title="Kurumsal medya yönetimi üzerine içerik merkezi."
        description="Toplantı kaydı transkripsiyonu, belediye basın akışı, kamu kurumlarında kurumsal hafıza, yapay zekâ ile özetleme ve arşiv stratejileri üzerine SEO odaklı makaleler."
      />
      <section className="mt-12 grid gap-5 lg:grid-cols-2">
        {insights.map((insight, index) => (
          <Reveal key={insight.slug} delay={index * 0.05}>
            <InsightCard insight={insight} />
          </Reveal>
        ))}
      </section>
    </main>
  );
}

import {
  BellRing,
  DatabaseZap,
  FileOutput,
  FileSearch,
  FileText,
  LockKeyhole,
  MessageSquareText,
  PlaySquare,
  ShieldCheck,
  Upload,
} from "lucide-react";

import { CTASection } from "@/components/site/cta-section";
import { FeatureCard } from "@/components/site/feature-card";
import { PageHero } from "@/components/site/page-hero";
import { RelatedInsightsSection } from "@/components/site/related-insights-section";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { getInsightsBySlugs } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { features } from "@/lib/site";

const icons = [
  Upload,
  DatabaseZap,
  MessageSquareText,
  FileText,
  PlaySquare,
  FileOutput,
  LockKeyhole,
  BellRing,
  ShieldCheck,
  FileSearch,
];

export const metadata = buildMetadata({
  title: "Özellikler | Transkripsiyon, Özetleme, Altyazı ve Arşiv | Medya Zekâsı",
  description:
    "Medya Zekâsı; medya yükleme, kuyruk yönetimi, ses ve video transkripsiyonu, yapay zekâ ile özetleme, altyazı üretimi, bildirimler ve istatistikler sunar.",
  path: "/ozellikler",
});

export default function FeaturesPage() {
  const relatedInsights = getInsightsBySlugs([
    "toplanti-kaydi-transkripsiyon",
    "yapay-zeka-ile-ozetleme",
    "kurumsal-medya-arsivi",
  ]);
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Özellikler", path: "/ozellikler" },
        ])}
      />
      <PageHero
        eyebrow="Özellikler"
        title="Toplantı, konuşma ve yayın kayıtlarınızı aranabilir bilgiye dönüştürün."
        description="Medya Zekâsı; medya toplama, kuyruk yönetimi, transkripsiyon, yapay zekâ ile özetleme, altyazı ve kurumsal arşiv akışını modüler ama bütünleşik biçimde sunar."
      />
      <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = icons[index] ?? FileText;

          return (
            <Reveal key={feature.title} delay={index * 0.05}>
              <FeatureCard
                icon={Icon}
                title={feature.title}
                description={feature.description}
              />
            </Reveal>
          );
        })}
      </section>
      <section className="mt-12">
        <RelatedInsightsSection
          title="Özelliklerin gerçek kullanımını anlatan transkripsiyon ve arşiv içerikleri."
          description="Toplantı kaydı, yapay zekâ ile özetleme ve kurumsal medya arşivi odaklı makaleler özellikler sayfasına daha güçlü semantik bağ kurar."
          insights={relatedInsights}
        />
      </section>
      <section className="mt-12">
        <CTASection
          title="Özelliklerin kurumunuzdaki karşılığını birlikte değerlendirelim."
          description="İhtiyacınız belediye, kamu kurumu veya basın-yayın operasyonu olsun; doğru modülleri birlikte konumlandıralım."
          primaryHref="/demo"
          primaryLabel="Demo Talep Et"
          secondaryHref="/platform"
          secondaryLabel="Platformu Gör"
        />
      </section>
    </main>
  );
}

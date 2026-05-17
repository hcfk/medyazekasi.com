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
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
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
  title: "Özellikler",
  description:
    "Medya toplama, kuyruk tabanlı işleme, transkripsiyon, özetleme, altyazı, arşiv ve rol bazlı yetkilendirme özelliklerini keşfedin.",
  path: "/ozellikler",
});

export default function FeaturesPage() {
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

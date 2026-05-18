import {
  BellRing,
  DatabaseZap,
  FileText,
  LockKeyhole,
  MessageSquareText,
  PlaySquare,
  ShieldCheck,
  Smartphone,
  Upload,
} from "lucide-react";

import { AudienceCard } from "@/components/site/audience-card";
import { CTASection } from "@/components/site/cta-section";
import { FeatureCard } from "@/components/site/feature-card";
import { HeroSection } from "@/components/site/hero-section";
import { InsightCard } from "@/components/site/insight-card";
import { MobileMockup } from "@/components/site/mobile-mockup";
import { RelatedInsightsSection } from "@/components/site/related-insights-section";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { WorkflowStep } from "@/components/site/workflow-step";
import { Badge } from "@/components/ui/badge";
import { getAllInsights } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import {
  audiences,
  features,
  mobileFeatures,
  problemPoints,
  securityHighlights,
  siteConfig,
  solutionSteps,
  trustItems,
  workflowSteps,
} from "@/lib/site";

export const metadata = buildMetadata({
  title: "Medya Zekâsı | Yapay Zekâ Destekli Kurumsal Medya Yönetim Platformu",
  description: siteConfig.description,
  path: "/",
});

const homeFeatureIcons = [
  Upload,
  DatabaseZap,
  MessageSquareText,
  FileText,
  PlaySquare,
  FileText,
  LockKeyhole,
  BellRing,
  BellRing,
  ShieldCheck,
];

export default function HomePage() {
  const insights = getAllInsights().slice(0, 8);

  return (
    <main>
      <SeoJsonLd data={buildBreadcrumbJsonLd([{ name: "Ana Sayfa", path: "/" }])} />
      <HeroSection />

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10">
        <div className="rounded-[1.8rem] border border-slate-200/80 bg-white/84 p-5 shadow-[0_16px_45px_rgba(20,33,61,0.05)]">
          <div className="flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-950"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-7 text-white shadow-[0_24px_65px_rgba(15,23,42,0.18)] md:p-8">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-200">Problem</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Dağınık medya kayıtları kurumlar için görünmeyen bir iş yüküdür.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-200/88 md:text-lg">
            Toplantılar dosya olarak kalır, açıklamalar yeniden kullanılamaz, saha içerikleri
            farklı kanallarda birikir ve arşiv aranabilir bilgiye dönüşmez.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {problemPoints.map((point, index) => (
            <Reveal
              key={point}
              delay={index * 0.04}
              className="rounded-[1.6rem] border border-slate-200/80 bg-white/86 p-5 shadow-[0_14px_38px_rgba(20,33,61,0.05)]"
            >
              <p className="text-base leading-8 text-slate-700">{point}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-900">Çözüm</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Tek merkezde medya toplama, yapay zekâ ile işleme ve kurumsal hafızaya dönüştürme.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {solutionSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <WorkflowStep
                index={index + 1}
                title={step.title}
                description={step.description}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div>
          <Reveal className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-900">
              Web + Mobil İş Akışı
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Saha mobilde başlar, operasyon web panelinde tamamlanır.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
              Saha personeli Android ve iOS uygulamalarından yükleme yapar. Merkez ekip web
              panelinden işleri takip eder. Yapay zekâ transkript, özet ve altyazı üretir.
              Editörler düzenler, kurum arşivi yetkili erişimle büyür.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4">
            {workflowSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="rounded-[1.6rem] border border-slate-200/80 bg-white/86 p-5 shadow-[0_14px_38px_rgba(20,33,61,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-900">
                    Adım {index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950 md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.08}>
          <div className="mx-auto max-w-sm">
            <MobileMockup />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-900">
              Özellikler
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Web ve mobil üzerinden uçtan uca kurumsal medya yönetimi.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-700">
            Medya toplama, kuyruk tabanlı işleme, transkripsiyon, özetleme, altyazı ve
            arşiv süreçleri tek ürün akışı içinde yönetilir.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = homeFeatureIcons[index] ?? FileText;

            return (
              <Reveal key={feature.title} delay={index * 0.04}>
                <FeatureCard
                  icon={Icon}
                  title={feature.title}
                  description={feature.description}
                />
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-900">
            Kimler İçin
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Belediyelerden saha ekiplerine kadar farklı kurumsal yapılara uyarlanabilir.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 0.04}>
              <AudienceCard {...audience} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-7 text-white shadow-[0_24px_65px_rgba(15,23,42,0.18)] md:p-8">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-200">Güvenlik</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Hassas medya içerikleri kontrolsüz dış araçlara dağılmasın.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-200/88 md:text-lg">
            Kurum politikalarına göre yapılandırılabilir veri yönetimi, rol bazlı erişim
            ve denetlenebilir operasyon akışı ile daha kontrollü medya yönetimi.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {securityHighlights.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.04}
              className="rounded-[1.6rem] border border-slate-200/80 bg-white/86 p-5 shadow-[0_14px_38px_rgba(20,33,61,0.05)]"
            >
              <p className="text-base leading-8 text-slate-700">{item}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-900">
            Mobil Uygulama
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Android ve iOS uygulamalarıyla sahadan anında içerik aktarımı.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
            Mobil istemci; yükleme, iş takibi ve transkript görüntüleme akışını tek
            uygulamada toplayarak saha operasyonunu merkeze bağlar.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {mobileFeatures.map((feature, index) => (
            <Reveal
              key={feature}
              delay={index * 0.04}
              className="rounded-[1.5rem] border border-slate-200/80 bg-white/86 p-5 shadow-[0_14px_38px_rgba(20,33,61,0.05)]"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-cyan-100 text-cyan-950">
                <Smartphone className="size-5" />
              </div>
              <p className="mt-4 text-base font-semibold text-slate-950">{feature}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-900">
              Insights
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Toplantı, transkripsiyon, özetleme ve arşiv süreçleri için içerik merkezi.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-700">
            Kurumların gerçek operasyon yüklerini anlatan içerikler, arama motoru
            görünürlüğünü ürün odaklı bilgi mimarisiyle destekler.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {insights.map((insight, index) => (
            <Reveal key={insight.slug} delay={index * 0.04}>
              <InsightCard insight={insight} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-4 md:px-10">
        <RelatedInsightsSection
          title="Çözüm sayfalarından makalelere uzanan içerik ağını güçlendirin."
          description="Transkripsiyon, deşifre, belediye basın-yayın süreçleri, saha kayıtları ve kurumsal hafıza konularındaki makaleler ürün sayfalarına düzenli iç link akışı sağlar."
          insights={getAllInsights().slice(8, 11)}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">
        <CTASection
          title="Kurumunuzun medya süreçlerini tek merkezde yönetin."
          description="Toplantı, konuşma ve yayın kayıtlarınızı aranabilir bilgiye dönüştürmek; web ve mobil üzerinden uçtan uca kurumsal medya yönetimi kurmak için demo akışını başlatın."
          primaryHref="/demo"
          primaryLabel="Demo Talep Et"
          secondaryHref="/iletisim"
          secondaryLabel="İletişime Geç"
        />
      </section>
    </main>
  );
}

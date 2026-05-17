import { BadgeCheck, FileOutput, LayoutDashboard, Smartphone } from "lucide-react";

import { CTASection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { features, workflowSteps } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Platform | Medya Zekâsı",
  description:
    "Medya Zekâsı platformu medya toplama, kuyruk tabanlı işleme, transkripsiyon, yapay zekâ ile özetleme, altyazı, bildirim ve kurumsal arşiv süreçlerini tek merkezde yönetir.",
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Platform", path: "/platform" },
        ])}
      />
      <PageHero
        eyebrow="Platform"
        title="Web, mobil ve yapay zekâ katmanlarını tek operasyon modelinde birleştirin."
        description="Medya Zekâsı, kurumsal medya yönetimi için web yönetim paneli, Android/iOS mobil uygulamaları, kuyruk tabanlı işleme, transkripsiyon, özetleme ve arşiv katmanlarını aynı platformda toplar."
        badge="Enterprise AI SaaS / GovTech"
      />

      <section className="mt-10 grid gap-5 lg:grid-cols-4">
        {[
          {
            icon: LayoutDashboard,
            title: "Web paneli",
            text: "Kuyruk, kullanıcı, istatistik ve çıktı yönetimi için merkez operasyon arayüzü.",
          },
          {
            icon: Smartphone,
            title: "Mobil uygulama",
            text: "Sahadan içerik aktarımı, iş takibi ve transkript görüntüleme akışı.",
          },
          {
            icon: BadgeCheck,
            title: "Yapay zekâ işleme",
            text: "Transkripsiyon, düzeltme, özetleme ve altyazı üretimi için operasyonel yapı.",
          },
          {
            icon: FileOutput,
            title: "Kurumsal çıktı",
            text: "DOCX, TXT, SRT, VTT ve aranabilir arşiv kayıtları ile yeniden kullanım.",
          },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal
              key={item.title}
              delay={index * 0.06}
              className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_18px_55px_rgba(20,33,61,0.06)]"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-950">
                <Icon className="size-6" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-slate-950">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
            </Reveal>
          );
        })}
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-950 p-8 text-white">
          <h2 className="text-3xl font-semibold">Operasyon akışı</h2>
          <div className="mt-6 space-y-4">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Adım {index + 1}
                </p>
                <p className="mt-2 text-xl font-semibold">{step.title}</p>
                <p className="mt-2 leading-7 text-slate-200/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-8 shadow-[0_18px_55px_rgba(20,33,61,0.06)]">
          <h2 className="text-3xl font-semibold text-slate-950">Platform kabiliyetleri</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {features.slice(0, 8).map((feature) => (
              <div key={feature.title} className="rounded-[1.4rem] bg-slate-50 p-5">
                <p className="text-lg font-semibold text-slate-950">{feature.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <CTASection
          title="Platform katmanlarını kurum yapınıza göre konumlandırın."
          description="Web paneli, mobil uygulamalar ve yapay zekâ işleme süreçlerini kurum yapınıza uygun demo akışıyla değerlendirin."
          primaryHref="/demo"
          primaryLabel="Demo Talep Et"
          secondaryHref="/ozellikler"
          secondaryLabel="Özellikleri İncele"
        />
      </section>
    </main>
  );
}

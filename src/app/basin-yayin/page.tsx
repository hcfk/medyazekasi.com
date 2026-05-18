import { CTASection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { RelatedInsightsSection } from "@/components/site/related-insights-section";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { getInsightsBySlugs } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Basın-Yayın Birimleri İçin Medya Otomasyonu | Medya Zekâsı",
  description:
    "Basın-yayın ekipleri Medya Zekâsı ile toplantı, röportaj, canlı yayın ve etkinlik kayıtlarını hızlıca yazıya, özete, altyazıya ve yayıma hazır içeriğe dönüştürür.",
  path: "/basin-yayin",
});

export default function PressMediaPage() {
  const relatedInsights = getInsightsBySlugs([
    "basin-bulteni-transkripsiyon",
    "belediye-basinyayin-otomasyon",
    "canli-yayin-transkripsiyon",
  ]);
  const points = [
    "Konuşma ve açıklamaları daha hızlı yazıya çevirir.",
    "Uzun kayıtları haber, duyuru ve sosyal medya taslağına dönüştürmeye yardımcı olur.",
    "Canlı yayın ve röportaj kayıtlarının tekrar kullanılabilir içerik değerini artırır.",
    "Basın-yayın ekipleri için dağınık klasörleri operasyon görünürlüğüne çevirir.",
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Basın-Yayın Birimleri", path: "/basin-yayin" },
        ])}
      />
      <PageHero
        eyebrow="Çözümler"
        title="Basın-yayın ekipleri için daha hızlı içerik üretimi ve daha düzenli medya arşivi."
        description="Toplantı, açıklama, etkinlik ve canlı yayın kayıtları yalnızca dosya olarak kalmasın. Medya Zekâsı, basın-yayın ekiplerinin yazı üretim ve arşiv süreçlerini merkezileştirir."
      />
      <section className="mt-12 grid gap-5 md:grid-cols-2">
        {points.map((point, index) => (
          <Reveal
            key={point}
            delay={index * 0.06}
            className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_18px_55px_rgba(20,33,61,0.06)]"
          >
            <p className="text-lg leading-8 text-slate-700">{point}</p>
          </Reveal>
        ))}
      </section>
      <section className="mt-12">
        <RelatedInsightsSection
          title="Basın-yayın ekipleri için içerik üretimi ve arşiv akışı rehberleri."
          description="Bülten üretimi, canlı yayın tekrar kullanımı ve belediye basın operasyonu konularındaki makaleler basın-yayın çözüm sayfasını destekler."
          insights={relatedInsights}
        />
      </section>
      <section className="mt-12">
        <CTASection
          title="Basın-yayın iş yükünü daha yönetilebilir hale getirin."
          description="Konuşma metni, özet, altyazı ve arşiv süreçlerini aynı operasyon panelinde toplayan modeli demo üzerinden görün."
          primaryHref="/demo"
          primaryLabel="Demo Talep Et"
          secondaryHref="/insights/belediye-basinyayin-otomasyon"
          secondaryLabel="İlgili Makale"
        />
      </section>
    </main>
  );
}

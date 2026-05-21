import { CTASection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { RelatedInsightsSection } from "@/components/site/related-insights-section";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { getInsightsBySlugs } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Belediyeler İçin Yapay Zekâ Destekli Medya Yönetimi | Medya Zekâsı",
  description:
    "Medya Zekâsı belediyelerin başkan konuşmaları, meclis toplantıları, canlı yayınları, saha kayıtları ve basın süreçlerini web ve mobil üzerinden yönetmesine yardımcı olur.",
  path: "/belediyeler",
});

export default function MunicipalitiesPage() {
  const relatedInsights = getInsightsBySlugs([
    "belediye-basinyayin-otomasyon",
    "belediye-meclis-tutanagi",
    "canli-yayin-transkripsiyon",
  ]);

  const cards = [
    {
      title: "Başkanlık ve özel kalem",
      text: "Başkan konuşmaları, ziyaretler ve değerlendirme kayıtları daha hızlı erişilebilir hale gelir.",
    },
    {
      title: "Meclis ve komisyonlar",
      text: "Toplantı kayıtları yazıya dökülür, özetlenir ve geri dönük aranabilir yapıya taşınır.",
    },
    {
      title: "Basın-yayın ekipleri",
      text: "Haber metni, sosyal medya özeti ve altyazı üretim süresi kısalır.",
    },
    {
      title: "Saha ve etkinlik ekipleri",
      text: "Açılış, saha ziyareti ve röportaj kayıtları mobil uygulama ile merkezi kuyruğa bağlanır.",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Belediyeler", path: "/belediyeler" },
        ])}
      />
      <PageHero
        eyebrow="Çözümler"
        title="Belediyeler için medya, yayın ve kurumsal hafıza akışını tek merkezde yönetin."
        description="Meclis, başkanlık, canlı yayın, basın açıklaması, saha röportajı ve etkinlik içerikleri belediyelerde yoğun operasyon üretir. Medya Zekâsı bu medya yükünü daha düzenli, daha görünür ve daha aranabilir hale getirir."
      />
      <section className="mt-12 grid gap-5 md:grid-cols-2">
        {cards.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.06}
            className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_18px_55px_rgba(20,33,61,0.06)]"
          >
            <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
          </Reveal>
        ))}
      </section>
      <section className="mt-12">
        <RelatedInsightsSection
          title="Belediye operasyonlarına özel rehberler ve kullanım senaryoları."
          description="Meclis toplantıları, canlı yayınlar ve basın-yayın akışlarında hangi içerik modelinin daha verimli çalıştığını ilgili makaleler üzerinden inceleyin."
          insights={relatedInsights}
        />
      </section>
      <section className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white/85 p-8 shadow-[0_18px_55px_rgba(20,33,61,0.06)]">
        <h2 className="text-3xl font-semibold text-slate-950">Belediye odaklı ilgili içerikler</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Belediye meclis toplantıları, canlı yayın arşivi, başkan konuşmaları ve basın-yayın
          operasyonlarının metne dönüşmesiyle ilgili detayları aşağıdaki içeriklerde derinlemesine
          inceleyebilirsiniz.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          <li>
            <a className="font-semibold text-cyan-900 hover:text-cyan-700" href="/insights/belediye-meclis-tutanagi">
              Belediye Meclis Tutanağı Nasıl Hazırlanır?
            </a>
          </li>
          <li>
            <a className="font-semibold text-cyan-900 hover:text-cyan-700" href="/insights/canli-yayin-transkripsiyon">
              Canlı Yayın Transkripsiyon Rehberi
            </a>
          </li>
          <li>
            <a className="font-semibold text-cyan-900 hover:text-cyan-700" href="/insights/belediye-basinyayin-otomasyon">
              Belediye Basın-Yayın İçerik Otomasyonu
            </a>
          </li>
          <li>
            <a className="font-semibold text-cyan-900 hover:text-cyan-700" href="/insights/kurumsal-medya-arsivi">
              Kurumsal Medya Arşivi Neden Önemlidir?
            </a>
          </li>
        </ul>
      </section>
      <section className="mt-12">
        <CTASection
          title="Belediye medya süreçlerini kurum hafızasına dönüştürün."
          description="Başkanlık, basın-yayın ve saha ekipleri için web + mobil medya yönetim senaryosunu birlikte planlayalım."
          primaryHref="/demo"
          primaryLabel="Demo Talep Et"
          secondaryHref="/basin-yayin"
          secondaryLabel="Basın-Yayın Çözümü"
        />
      </section>
    </main>
  );
}

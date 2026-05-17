import { CTASection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Belediyeler İçin",
  description:
    "Belediyeler için başkanlık, meclis, basın-yayın, canlı yayın ve saha kayıtlarını yöneten yapay zekâ destekli medya yönetim platformu.",
  path: "/belediyeler",
});

export default function MunicipalitiesPage() {
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

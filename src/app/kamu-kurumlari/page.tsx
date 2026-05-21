import { CTASection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { RelatedInsightsSection } from "@/components/site/related-insights-section";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { getInsightsBySlugs } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kamu Kurumları İçin Medya Yönetim Platformu | Medya Zekâsı",
  description:
    "Kamu kurumları toplantı, kurul, eğitim, basın açıklaması ve saha kayıtlarını Medya Zekâsı ile metne, özete, altyazıya ve kurumsal hafızaya dönüştürebilir.",
  path: "/kamu-kurumlari",
});

export default function PublicInstitutionsPage() {
  const relatedInsights = getInsightsBySlugs([
    "kamu-kurumsal-hafiza",
    "desifre-transkripsiyon-kamu-veri-guvenligi",
    "kamu-video-altyazi-zorunlulugu",
  ]);

  const sections = [
    "Toplantı, kurul, komisyon ve eğitim kayıtlarını metne ve özetlere dönüştürür.",
    "Kurumsal hafızayı kişilerden bağımsız, aranabilir bilgi yapısına taşır.",
    "Kullanıcı, bölüm ve rol ayrıştırması ile kontrollü medya erişimi sunar.",
    "Kurum politikalarına göre yapılandırılabilir veri yönetimi yaklaşımı sağlar.",
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Kamu Kurumları", path: "/kamu-kurumlari" },
        ])}
      />
      <PageHero
        eyebrow="Çözümler"
        title="Kamu kurumları için medya yönetimi ve kurumsal hafıza altyapısı."
        description="Medya Zekâsı; bakanlıklar, genel müdürlükler, üniversiteler, yerel yönetimler ve farklı kamu yapıları için medya kayıtlarını merkezi, denetlenebilir ve yeniden kullanılabilir bilgiye dönüştürür."
      />
      <section className="mt-12 grid gap-5 md:grid-cols-2">
        {sections.map((item, index) => (
          <Reveal
            key={item}
            delay={index * 0.06}
            className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_18px_55px_rgba(20,33,61,0.06)]"
          >
            <p className="text-lg leading-8 text-slate-700">{item}</p>
          </Reveal>
        ))}
      </section>
      <section className="mt-12">
        <RelatedInsightsSection
          title="Kamu kurumları için kurumsal hafıza, erişilebilirlik ve veri yönetimi içerikleri."
          description="Toplantı kayıtlarının yazıya dökülmesi, altyazı süreçleri ve kontrollü arşiv yaklaşımı için ilgili içeriklerden ürün sayfalarına geçiş kurun."
          insights={relatedInsights}
        />
      </section>
      <section className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white/85 p-8 shadow-[0_18px_55px_rgba(20,33,61,0.06)]">
        <h2 className="text-3xl font-semibold text-slate-950">Kamu kurumları için okunması gereken içerikler</h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-700">
          Kurumsal hafıza, veri güvenliği, erişilebilir video içerikleri ve toplantı kayıtlarının
          metne dönüşmesi gibi başlıklarda derinleşmek için aşağıdaki insight içeriklerini
          inceleyin.
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          <li>
            <a className="font-semibold text-cyan-900 hover:text-cyan-700" href="/insights/desifre-transkripsiyon-kamu-veri-guvenligi">
              Kamu Kurumları için Deşifre ve Transkripsiyon Rehberi
            </a>
          </li>
          <li>
            <a className="font-semibold text-cyan-900 hover:text-cyan-700" href="/insights/kamu-kurumsal-hafiza">
              Kamu Kurumlarında Kurumsal Hafıza
            </a>
          </li>
          <li>
            <a className="font-semibold text-cyan-900 hover:text-cyan-700" href="/insights/kamu-video-altyazi-zorunlulugu">
              Kamu Video İçeriklerinde Altyazı ve Erişilebilirlik
            </a>
          </li>
          <li>
            <a className="font-semibold text-cyan-900 hover:text-cyan-700" href="/insights/kurumsal-medya-arsivi">
              Kurumsal Medya Arşivi Rehberi
            </a>
          </li>
        </ul>
      </section>
      <section className="mt-12">
        <CTASection
          title="Kamu kurumu operasyonunuzu daha görünür ve daha aranabilir hale getirin."
          description="Toplantı, eğitim ve bilgilendirme kayıtlarını kurumsal hafızaya dönüştüren modeli birlikte değerlendirelim."
          primaryHref="/demo"
          primaryLabel="Demo Talep Et"
          secondaryHref="/guvenlik"
          secondaryLabel="Güvenlik Yaklaşımı"
        />
      </section>
    </main>
  );
}

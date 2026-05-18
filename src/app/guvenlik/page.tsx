import { CTASection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { RelatedInsightsSection } from "@/components/site/related-insights-section";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { getInsightsBySlugs } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { securityHighlights } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Güvenlik ve Veri Kontrolü | Medya Zekâsı",
  description:
    "Medya Zekâsı rol bazlı erişim, kullanıcı ve birim ayrıştırması, kontrollü arşiv ve kurum politikalarına göre yapılandırılabilir veri yönetimi yaklaşımı sunar.",
  path: "/guvenlik",
});

export default function SecurityPage() {
  const relatedInsights = getInsightsBySlugs([
    "desifre-transkripsiyon-kamu-veri-guvenligi",
    "kamu-kurumsal-hafiza",
    "kurumsal-medya-arsivi",
  ]);
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Güvenlik", path: "/guvenlik" },
        ])}
      />
      <PageHero
        eyebrow="Güvenlik"
        title="Hassas medya içerikleri kontrolsüz dış araçlara dağılmasın."
        description="Medya Zekâsı, kurum politikalarına göre yapılandırılabilir veri yönetimi, rol bazlı erişim, kullanıcı ve bölüm ayrıştırması ile daha kontrollü medya operasyonları için konumlanır."
      />
      <section className="mt-12 grid gap-5 md:grid-cols-2">
        {securityHighlights.map((item, index) => (
          <Reveal
            key={item}
            delay={index * 0.05}
            className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_18px_55px_rgba(20,33,61,0.06)]"
          >
            <p className="text-lg leading-8 text-slate-700">{item}</p>
          </Reveal>
        ))}
      </section>
      <section className="mt-12">
        <RelatedInsightsSection
          title="Veri yönetimi, kurumsal hafıza ve arşiv kontrolü üzerine ilgili makaleler."
          description="Güvenlik yaklaşımını yalnızca ürün metniyle değil, veri işleme ve arşiv mantığını açıklayan içeriklerle de destekleyin."
          insights={relatedInsights}
        />
      </section>
      <section className="mt-12">
        <CTASection
          title="Veri yönetişimi yaklaşımını kurum yapınıza göre değerlendirin."
          description="Kurumsal medya süreçlerinde kontrollü erişim, denetim izi ve operasyon görünürlüğü nasıl sağlanır, birlikte inceleyelim."
          primaryHref="/demo"
          primaryLabel="Demo Talep Et"
          secondaryHref="/iletisim"
          secondaryLabel="İletişime Geç"
        />
      </section>
    </main>
  );
}

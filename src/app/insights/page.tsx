import Link from "next/link";

import { InsightCard } from "@/components/site/insight-card";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { getAllInsights } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights | Kurumsal Medya Yönetimi Rehberleri | Medya Zekâsı",
  description:
    "Kamu kurumları, belediyeler ve basın-yayın ekipleri için kurumsal medya yönetimi, transkripsiyon, özetleme ve arşivleme rehberleri.",
  path: "/insights",
});

export default function InsightsPage() {
  const insights = getAllInsights();
  const insightMap = new Map(insights.map((insight) => [insight.slug, insight]));
  const groupedInsights = [
    {
      title: "Kamu kurumları ve güvenli transkripsiyon",
      description:
        "Deşifre, transkripsiyon, kurumsal hafıza, medya arşivi ve veri güvenliği eksenindeki içerikler.",
      slugs: [
        "desifre-transkripsiyon-kamu-veri-guvenligi",
        "kamu-kurumsal-hafiza",
        "kurumsal-medya-arsivi",
        "yapay-zeka-ile-ozetleme",
      ],
    },
    {
      title: "Belediye ve basın-yayın operasyonları",
      description:
        "Belediye meclis kayıtları, canlı yayınlar ve basın-yayın iş akışları üzerine odaklanan rehberler.",
      slugs: [
        "belediye-meclis-tutanagi",
        "canli-yayin-transkripsiyon",
        "basin-bulteni-transkripsiyon",
        "belediye-basinyayin-otomasyon",
      ],
    },
    {
      title: "Saha, eğitim ve operasyon modeli",
      description:
        "Mobil saha kayıtları, üniversite ders kayıtları ve medya operasyon standardizasyonuna odaklanan içerikler.",
      slugs: [
        "saha-ekipleri-mobil-ses-kaydi",
        "universite-ders-kaydi-transkripsiyon",
        "toplanti-kaydi-transkripsiyon",
        "kamu-video-altyazi-zorunlulugu",
        "dijital-cagda-kamu-iletisimi-medya-zekasi",
        "manuel-kaostan-yapay-zeka-destekli-medya-duzenine-gecis",
        "medya-zekasi-operasyonel-tuzugu",
      ],
    },
  ];

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

      <section className="mt-10 rounded-[2rem] border border-slate-200/80 bg-white/88 p-7 shadow-[0_18px_55px_rgba(20,33,61,0.06)] md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
          Insights merkezi neden önemli?
        </h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <p className="text-base leading-8 text-slate-700">
            Bu merkez, Medya Zekâsı&apos;nın yalnızca ürün sayfalarını destekleyen bir blog alanı
            değil; belediyeler, kamu kurumları, basın-yayın ekipleri, üniversiteler ve saha
            operasyonları için problem odaklı bilgi mimarisi sunan editoryal katmandır.
          </p>
          <p className="text-base leading-8 text-slate-700">
            Her makale belirli bir kullanım senaryosunu ele alır, ilgili çözüm sayfalarına
            bağlanır ve diğer insight içerikleriyle metinsel ilişki kurar. Bu yapı hem
            kullanıcıların doğru içeriğe daha hızlı ulaşmasına hem de arama motorlarının konu
            kümelerini daha net anlamasına yardımcı olur.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6">
        {groupedInsights.map((group, index) => (
          <Reveal
            key={group.title}
            delay={index * 0.05}
            className="rounded-[2rem] border border-slate-200/80 bg-white/88 p-7 shadow-[0_18px_55px_rgba(20,33,61,0.06)] md:p-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              {group.title}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-700">
              {group.description}
            </p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {group.slugs
                .map((slug) => insightMap.get(slug))
                .filter((insight): insight is NonNullable<typeof insight> => Boolean(insight))
                .map((insight) => (
                  <li
                    key={insight.slug}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/90 p-4"
                  >
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="text-base font-semibold text-slate-950 transition hover:text-cyan-900"
                    >
                      {insight.title}
                    </Link>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{insight.description}</p>
                  </li>
                ))}
            </ul>
          </Reveal>
        ))}
      </section>

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

import Link from "next/link";

import { CTASection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { contactCards, siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "İletişim | Medya Zekâsı",
  description:
    "Medya Zekâsı hakkında bilgi almak, demo talep etmek veya kurumunuza özel kurulum seçeneklerini görüşmek için iletişime geçin.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ])}
      />
      <PageHero
        eyebrow="İletişim"
        title="Kurumunuzun medya süreçleri için doğru kurguya birlikte karar verelim."
        description="Demo talebi, ürün yönlendirmesi veya genel iletişim için aşağıdaki kanalları kullanabilirsiniz."
      />
      <section className="mt-12 grid gap-5 lg:grid-cols-2">
        {contactCards.map((card, index) => (
          <Reveal
            key={card.title}
            delay={index * 0.05}
            className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_18px_55px_rgba(20,33,61,0.06)]"
          >
            <h2 className="text-2xl font-semibold text-slate-950">{card.title}</h2>
            <p className="mt-3 leading-7 text-slate-700">{card.description}</p>
            <Link href={card.href} className="mt-6 inline-block font-semibold text-cyan-800">
              {card.label}
            </Link>
          </Reveal>
        ))}
      </section>
      <section className="mt-12 rounded-[2rem] border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)]">
        <h2 className="text-3xl font-semibold">Genel iletişim bilgileri</h2>
        <div className="mt-5 space-y-3 text-slate-200/85">
          <p>Web: {siteConfig.url}</p>
          <p>E-posta: {siteConfig.email}</p>
          <p>Telefon: {siteConfig.phone}</p>
          <p>Adres: {siteConfig.address}</p>
        </div>
      </section>
      <section className="mt-12">
        <CTASection
          title="Ürün akışını canlı görmek isterseniz demo sayfasına geçin."
          description="Kurumsal kullanım senaryonuzu form üzerinden paylaşın; uygun demo akışını planlayalım."
          primaryHref="/demo"
          primaryLabel="Demo Talep Et"
          secondaryHref="/platform"
          secondaryLabel="Platformu İncele"
        />
      </section>
    </main>
  );
}

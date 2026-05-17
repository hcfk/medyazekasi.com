import { Mic, PlaySquare, Smartphone, UploadCloud, View, BellRing } from "lucide-react";

import { CTASection } from "@/components/site/cta-section";
import { MobileMockup } from "@/components/site/mobile-mockup";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mobil Uygulama",
  description:
    "Medya Zekâsı Android ve iOS uygulamaları ile sahadan ses, video ve bağlantı yükleme; iş takibi ve transkript görüntüleme süreçlerini yönetin.",
  path: "/mobil-uygulama",
});

export default function MobilePage() {
  const mobileCards = [
    {
      icon: UploadCloud,
      title: "Ses/video yükleme",
      description: "Sahadan gelen kayıtları doğrudan mobil uygulama üzerinden sisteme aktarın.",
    },
    {
      icon: Mic,
      title: "Uygulama içi kayıt",
      description: "Yeni medya işi oluştururken uygulama içinde ses kaydı başlatın.",
    },
    {
      icon: PlaySquare,
      title: "YouTube bağlantısı gönderme",
      description: "Canlı yayın veya video bağlantılarını doğrudan iş akışına ekleyin.",
    },
    {
      icon: BellRing,
      title: "İş durumunu takip etme",
      description: "Kuyruktaki işlerin durumunu ve tamamlanma bilgisini mobilde görün.",
    },
    {
      icon: View,
      title: "Transkript görüntüleme",
      description: "Tamamlanan işlerde oluşan metni mobil cihaz üzerinden inceleyin.",
    },
    {
      icon: Smartphone,
      title: "Kurumsal erişim modeli",
      description: "Mobil istemci, mevcut kurum hesabı ile kontrollü ve rol odaklı kullanıma uygundur.",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Mobil Uygulama", path: "/mobil-uygulama" },
        ])}
      />
      <PageHero
        eyebrow="Android ve iOS"
        title="Sahadan yükleyin, merkezden yönetin, yapay zekâ ile işleyin."
        description="Medya Zekâsı mobil uygulamaları; kurum sahasından ses, video ve bağlantı aktarımını hızlandırır. Kayıt mobilde başlar, merkez operasyonu web panelinde tamamlanır."
        badge="Mobil medya yönetimi"
      />

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <MobileMockup />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {mobileCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal
                key={card.title}
                delay={index * 0.06}
                className="rounded-[1.7rem] border border-slate-200/80 bg-white/84 p-6 shadow-[0_16px_50px_rgba(20,33,61,0.06)]"
              >
                <div className="flex size-11 items-center justify-center rounded-full bg-cyan-100 text-cyan-900">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">{card.title}</h2>
                <p className="mt-3 leading-7 text-slate-700">{card.description}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mt-12 grid gap-5 lg:grid-cols-3">
        {[
          "Android ve iOS istemcileri mevcut kurum hesabı ile giriş modeline uygundur.",
          "Mobil iş akışı, web panelindeki operasyonel görünürlüğü tamamlayan saha katmanıdır.",
          "Transkript ve iş takibi sayesinde kullanıcılar yalnızca yükleme değil sonuç erişimi de sağlar.",
        ].map((item, index) => (
          <Reveal
            key={item}
            delay={index * 0.05}
            className="rounded-[1.7rem] border border-slate-200/80 bg-slate-950 p-6 text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)]"
          >
            <p className="text-lg leading-8 text-slate-200/85">{item}</p>
          </Reveal>
        ))}
      </section>

      <section className="mt-12">
        <CTASection
          title="Mobil iş akışını kurumunuzda nasıl kurgulayabileceğimizi görün."
          description="Android ve iOS uygulamalarının saha ekipleri, basın birimleri ve yönetim akışı ile nasıl birleştiğini canlı demo üzerinden inceleyin."
          primaryHref="/demo"
          primaryLabel="Demo Talep Et"
          secondaryHref="/platform"
          secondaryLabel="Platformu İncele"
        />
      </section>
    </main>
  );
}

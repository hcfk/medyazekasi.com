import Link from "next/link";
import { BellRing, FileBadge2, Mic, PlaySquare, ShieldCheck, Smartphone, UploadCloud, View } from "lucide-react";

import { CTASection } from "@/components/site/cta-section";
import { MobileMockup } from "@/components/site/mobile-mockup";
import { PageHero } from "@/components/site/page-hero";
import { RelatedInsightsSection } from "@/components/site/related-insights-section";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { Card, CardContent } from "@/components/ui/card";
import { getInsightsBySlugs } from "@/lib/content";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mobil Uygulama | Android ve iOS Medya Yönetimi | Medya Zekâsı",
  description:
    "Medya Zekâsı mobil uygulamasıyla saha ekipleri Android ve iOS üzerinden ses, video ve bağlantıları kurumsal medya kuyruğuna aktarabilir, iş durumlarını takip edebilir.",
  path: "/mobil-uygulama",
});

export default function MobilePage() {
  const relatedInsights = getInsightsBySlugs([
    "saha-ekipleri-mobil-ses-kaydi",
    "canli-yayin-transkripsiyon",
    "desifre-transkripsiyon-kamu-veri-guvenligi",
  ]);
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

  const releasePages = [
    {
      icon: ShieldCheck,
      title: "Gizlilik Politikası",
      href: "/gizlilik-politikasi",
      description: "Veri işleme, güvenlik yaklaşımı ve geliştirici iletişim bilgileri.",
    },
    {
      icon: FileBadge2,
      title: "Mobil İzinler",
      href: "/mobil-izinler",
      description: "Android ve iOS izinlerinin neden istendiği ve hangi akışta kullanıldığı.",
    },
    {
      icon: Smartphone,
      title: "Yaş Sınıflandırması",
      href: "/yas-siniflandirmasi",
      description: "App Store ve Google Play için önerilen yaş derecelendirme açıklamaları.",
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
        <Reveal className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-900">
            Yayın Sayfaları
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            App Store ve Google Play için gerekli yardımcı sayfalar hazır.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
            Mağaza metinleri, gizlilik politikası, uygulama izinleri ve yaş sınıflandırması için
            gerekli kamuya açık sayfalara aşağıdan ulaşabilirsiniz.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {releasePages.map((page, index) => {
            const Icon = page.icon;
            return (
              <Reveal key={page.href} delay={index * 0.05}>
                <Card className="rounded-[1.8rem] border-slate-200/80 bg-white/88 py-0 shadow-[0_16px_45px_rgba(20,33,61,0.06)]">
                  <CardContent className="p-6">
                    <div className="flex size-11 items-center justify-center rounded-full bg-cyan-100 text-cyan-900">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-950">{page.title}</h3>
                    <p className="mt-3 leading-7 text-slate-700">{page.description}</p>
                    <Link
                      href={page.href}
                      className="mt-5 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-900"
                    >
                      Sayfayı Aç
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <RelatedInsightsSection
          title="Mobil saha akışı, ses kaydı ve canlı yayın içerikleri."
          description="Sahadan içerik toplama, mobil kayıt, YouTube bağlantısı ve sonradan transkripsiyon akışları için ilgili rehberleri inceleyin."
          insights={relatedInsights}
        />
      </section>
      <section className="mt-12">
        <CTASection
          title="Mobil iş akışını kurumunuzda nasıl kurgulayabileceğimizi görün."
          description="Android ve iOS uygulamalarının saha ekipleri, basın birimleri ve yönetim akışı ile nasıl birleştiğini canlı demo üzerinden inceleyin."
          primaryHref="/demo"
          primaryLabel="Demo Talep Et"
          secondaryHref="/magaza-metinleri"
          secondaryLabel="Mağaza Metinleri"
        />
      </section>
    </main>
  );
}

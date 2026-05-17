import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  Building2,
  FileText,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { DemoForm } from "@/components/site/demo-form";
import { Reveal } from "@/components/site/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllInsights } from "@/lib/content";
import { mobileReleaseInfo } from "@/lib/mobile-release";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: AudioLines,
    title: "Kayıttan metne hızlı geçiş",
    description:
      "Toplantı, röportaj, canlı yayın ve saha kayıtlarını düzenli iş akışına alır.",
  },
  {
    icon: FileText,
    title: "Özet ve içerik taslağı",
    description:
      "Uzun kayıtları basın metni, not ve arşivlenebilir bilgiye dönüştürür.",
  },
  {
    icon: ShieldCheck,
    title: "Kurum içinde veri kontrolü",
    description:
      "Hassas kayıtları kurum denetiminde tutmaya uygun operasyon modeli sunar.",
  },
  {
    icon: Workflow,
    title: "Süreç görünürlüğü",
    description:
      "Hangi dosyanın hangi aşamada olduğunu ekip ve yönetim seviyesinde izlenebilir kılar.",
  },
];

const sectors = [
  "Belediyeler",
  "Bakanlıklar",
  "Üniversiteler",
  "Basın-Yayın Birimleri",
  "Özel Kalem ve Üst Yönetim",
  "Saha ve Denetim Ekipleri",
];

const insights = getAllInsights();
const developer = mobileReleaseInfo.developer;

export default function Home() {
  return (
    <main className="pb-24">
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-18 pt-8 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pt-12">
          <Reveal className="space-y-8">
            <div className="space-y-4">
              <Badge className="rounded-full bg-[var(--brand-gold)] px-4 py-1 text-[var(--brand-ink)] hover:bg-[var(--brand-gold)]">
                Medya Yönetimi + Kurumsal Hafıza
              </Badge>
              <div className="space-y-5">
                <p className="font-mono text-sm uppercase tracking-[0.3em] text-slate-500">
                  medyazekasi.com
                </p>
                <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-[var(--brand-ink)] md:text-7xl">
                  Kayıtları dosya olmaktan çıkarıp kurumsal bilgiye dönüştürün.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
                  Medya Zekâsı; kamu kurumları, belediyeler ve basın ekipleri için
                  toplantı, yayın ve saha kayıtlarını metne, özete ve yeniden
                  kullanılabilir içeriğe çeviren merkezi operasyon katmanıdır.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-[var(--brand-ink)] px-7 text-white hover:bg-[var(--brand-ink)]/92",
                )}
              >
                Demo talebi oluştur
                <ArrowRight />
              </a>
              <a
                href="#kaynaklar"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 rounded-full border-[var(--brand-ink)]/15 bg-white/70 px-7 text-[var(--brand-ink)]",
                )}
              >
                Kaynakları incele
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Transkripsiyon", "Ses ve video akışı"],
                ["Rol bazlı erişim", "Birimlere göre ayrışma"],
                ["Aranabilir arşiv", "Tek merkezde kurumsal hafıza"],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-[1.75rem] border border-white/60 bg-white/70 p-5 shadow-[0_16px_45px_rgba(20,33,61,0.08)] backdrop-blur"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">
                    {title}
                  </p>
                  <p className="mt-3 text-base font-medium text-slate-800">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -right-10 top-8 h-28 w-28 rounded-full bg-[var(--brand-gold)]/70 blur-3xl" />
              <div className="absolute left-6 top-0 h-36 w-36 rounded-full bg-[var(--brand-copper)]/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(140deg,rgba(20,33,61,0.96),rgba(20,33,61,0.84)),linear-gradient(180deg,rgba(245,196,91,0.2),transparent)] p-7 text-white shadow-[0_30px_90px_rgba(20,33,61,0.24)]">
                <div className="flex items-center justify-between rounded-[1.5rem] border border-white/12 bg-white/6 px-5 py-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/65">
                      Operasyon Akışı
                    </p>
                    <p className="mt-2 text-2xl font-semibold">
                      Yayın, toplantı, röportaj
                    </p>
                  </div>
                  <div className="rounded-full bg-white/12 px-4 py-2 text-sm">
                    Canlı + arşiv
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Kayıt sisteme alınır ve sahipliği tanımlanır",
                    "Metin, özet ve çıktı akışı otomatik ilerler",
                    "Basın birimi, yönetim ve ilgili ekipler sonuca erişir",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-[1.4rem] border border-white/10 bg-white/6 px-5 py-4"
                    >
                      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-gold)] text-sm font-semibold text-[var(--brand-ink)]">
                        {index + 1}
                      </div>
                      <p className="text-base leading-7 text-white/84">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] bg-white/8 p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/65">
                      Kullanıcı ayrışma
                    </p>
                    <p className="mt-3 text-lg font-medium">
                      Basın, özel kalem, yönetim ve saha ekipleri için düzenli erişim.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] bg-[var(--brand-gold)] p-5 text-[var(--brand-ink)]">
                    <p className="font-mono text-xs uppercase tracking-[0.24em]">
                      Sonuç
                    </p>
                    <p className="mt-3 text-lg font-semibold">
                      Kurum için daha hızlı içerik, daha temiz arşiv, daha net kontrol.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <Reveal>
          <div className="rounded-[2rem] border border-[var(--brand-sand)] bg-white/70 p-6 shadow-[0_20px_60px_rgba(20,33,61,0.06)] backdrop-blur">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-slate-500">
              İdeal kullanım alanları
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <Badge
                  key={sector}
                  variant="secondary"
                  className="rounded-full border border-[var(--brand-sand)] bg-[var(--secondary)] px-4 py-2 text-sm text-[var(--brand-ink)]"
                >
                  {sector}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-slate-500">
            Platform kabiliyetleri
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Medya operasyonunu hızla düzenleyen çekirdek katmanlar.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <Reveal key={capability.title} delay={index * 0.08}>
                <Card className="h-full rounded-[1.8rem] border-white/60 bg-white/80 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
                  <CardContent className="p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-gold)]/28 text-[var(--brand-ink)]">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-[var(--brand-ink)]">
                      {capability.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-700">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:px-10 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal className="rounded-[2rem] border border-[var(--brand-sand)] bg-[var(--brand-ink)] p-8 text-white shadow-[0_24px_80px_rgba(20,33,61,0.18)]">
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-white/60">
            Neden şimdi?
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Kamu iletişiminde hız, düzen ve denetim aynı anda gerekli.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/78">
            Kurumlar artık yalnızca kayıt alan değil, kaydı anlamlı bilgiye
            çeviren sistemlere ihtiyaç duyuyor. Medya Zekâsı bu geçişi operasyonel
            bir standarda dönüştürür.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Başkanlık ve üst yönetim",
              text: "Konuşmalar, toplantılar ve açıklamalar geri dönük ulaşılabilir hale gelir.",
            },
            {
              title: "Basın-yayın ekipleri",
              text: "Haber, duyuru ve sosyal medya çıktıları için ham kayıt daha hızlı işlenir.",
            },
            {
              title: "Saha ve denetim birimleri",
              text: "Kaydın kimden geldiği ve hangi süreçten geçtiği daha net izlenir.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-[var(--brand-sand)] bg-white/75 p-6 shadow-[0_18px_55px_rgba(20,33,61,0.06)]"
            >
              <Building2 className="size-8 text-[var(--brand-copper)]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--brand-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section
        id="kaynaklar"
        className="mx-auto max-w-7xl px-6 py-12 md:px-10"
      >
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-sm uppercase tracking-[0.28em] text-slate-500">
              Kaynaklar
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[var(--brand-ink)]">
              MDX tabanlı içerik akışı ile kullanım senaryoları.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-700">
            Sitedeki bu bölüm editoryal olarak büyüyebilir. Yeni dosya ekledikçe
            kartlar ve detay sayfaları otomatik üretilir.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {insights.map((insight, index) => (
            <Reveal key={insight.slug} delay={index * 0.08}>
              <Link href={`/insights/${insight.slug}`}>
                <Card className="h-full rounded-[1.8rem] border-white/60 bg-white/80 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,33,61,0.11)]">
                  <CardContent className="p-7">
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary">{insight.audience}</Badge>
                      <Badge variant="outline">{insight.readingTime}</Badge>
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-[var(--brand-ink)]">
                      {insight.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-700">
                      {insight.description}
                    </p>
                    <p className="mt-6 inline-flex items-center gap-2 font-medium text-[var(--brand-copper)]">
                      Detayı oku
                      <ArrowRight className="size-4" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-5">
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-slate-500">
            Mobil uygulama
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            iOS ve Android yayın bilgileri de artık sitede.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-700">
            Mağaza yayını için gereken uygulama kimlikleri, izinler, gizlilik
            notları ve geliştirici iletişim bilgilerini ayrı bir sayfada
            topladık.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/mobil-uygulama"
              className={cn(
                buttonVariants({ size: "lg" }),
                "inline-flex h-12 rounded-full bg-[var(--brand-ink)] px-7 text-white hover:bg-[var(--brand-ink)]/92",
              )}
            >
              Mobil uygulama sayfasını aç
              <ArrowRight />
            </Link>
            <Link
              href="/gizlilik-politikasi"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "inline-flex h-12 rounded-full border-[var(--brand-ink)]/15 bg-white/70 px-7 text-[var(--brand-ink)]",
              )}
            >
              Gizlilik politikası
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="grid gap-4 md:grid-cols-2">
          {[
            "Android package ve iOS bundle bilgileri",
            "Mikrofon, medya ve paylaşım izinleri",
            "Privacy manifest ve tracking durumu",
            "Geliştirici, şikayet ve kurumsal iletişim bilgileri",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.8rem] border border-[var(--brand-sand)] bg-white/75 p-6 shadow-[0_18px_55px_rgba(20,33,61,0.06)]"
            >
              <p className="text-lg font-medium text-[var(--brand-ink)]">{item}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section
        id="demo"
        className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:px-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <Reveal className="space-y-5">
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-slate-500">
            Demo talebi
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Kurumunuza uygun akışı birlikte kuralım.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-700">
            Hostinger üzerinde çalışacak bu form, istenirse bir webhook&apos;a bağlanıp
            CRM veya e-posta akışınıza yönlendirilebilir.
          </p>
          <div className="rounded-[1.75rem] border border-[var(--brand-sand)] bg-white/70 p-6">
            <p className="font-medium text-[var(--brand-ink)]">
              Örnek kullanım senaryoları
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Meclis ve kurul toplantılarının kurumsal hafızaya alınması</li>
              <li>Başkan konuşmalarından basın metni ve sosyal medya taslağı üretimi</li>
              <li>Saha, röportaj ve canlı yayın kayıtlarının tek merkezde yönetimi</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <DemoForm />
        </Reveal>
      </section>

      <footer className="mx-auto max-w-7xl px-6 pb-10 pt-6 md:px-10">
        <div className="rounded-[1.8rem] border border-[var(--brand-sand)] bg-white/70 p-6 text-slate-700 shadow-[0_18px_55px_rgba(20,33,61,0.06)]">
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-slate-500">
            Geliştirici ve iletişim
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <p>Geliştirici: {developer.name}</p>
            <p>
              Web:{" "}
              <a
                href={developer.website}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[var(--brand-copper)]"
              >
                {developer.website}
              </a>
            </p>
            <p>
              E-posta:{" "}
              <a
                href={`mailto:${developer.email}`}
                className="font-medium text-[var(--brand-copper)]"
              >
                {developer.email}
              </a>
            </p>
            <p>
              Telefon:{" "}
              <a
                href={developer.phoneHref}
                className="font-medium text-[var(--brand-copper)]"
              >
                {developer.phone}
              </a>
            </p>
            <p className="md:col-span-2">Adres: {developer.address}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

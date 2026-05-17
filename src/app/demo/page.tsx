import { DemoForm } from "@/components/site/demo-form";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Demo Talep Et | Medya Zekâsı",
  description:
    "Kurumunuzun medya, toplantı, yayın ve basın-yayın süreçleri için Medya Zekâsı demosu talep edin.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Demo", path: "/demo" },
        ])}
      />
      <PageHero
        eyebrow="Demo"
        title="Kurumunuza uygun medya yönetim senaryosunu birlikte kuralım."
        description="Belediye, kamu kurumu, üniversite veya basın-yayın operasyonunuz için Medya Zekâsı'nın web ve mobil akışını demo üzerinden değerlendirebilirsiniz."
      />
      <section className="mt-12 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal className="space-y-5">
          <div className="rounded-[1.8rem] border border-slate-200/80 bg-white/85 p-7 shadow-[0_18px_55px_rgba(20,33,61,0.06)]">
            <h2 className="text-2xl font-semibold text-slate-950">Demo kapsamında neleri görebilirsiniz?</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Web paneli üzerinden iş kuyruğu ve çıktı yönetimi</li>
              <li>Android ve iOS mobil istemciden içerik oluşturma akışı</li>
              <li>Transkripsiyon, özetleme ve altyazı üretimi</li>
              <li>Rol bazlı erişim ve arşiv yaklaşımı</li>
            </ul>
          </div>
          <div className="rounded-[1.8rem] border border-slate-200/80 bg-slate-950 p-7 text-white shadow-[0_18px_55px_rgba(15,23,42,0.18)]">
            <h2 className="text-2xl font-semibold">Kime uygun?</h2>
            <p className="mt-4 leading-8 text-slate-200/85">
              Belediye başkanlığı, özel kalem, basın-yayın, kamu kurumu yönetimi,
              eğitim birimleri ve saha ekipleri için farklı demo akışları hazırlanabilir.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <DemoForm />
        </Reveal>
      </section>
    </main>
  );
}

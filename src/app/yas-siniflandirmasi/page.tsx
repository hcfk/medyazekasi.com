import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mobileReleaseInfo } from "@/lib/mobile-release";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Yaş Sınıflandırması | Medya Zekâsı",
  description:
    "Medya Zekâsı mobil uygulaması için App Store ve Google Play yaş derecelendirme açıklamaları.",
  path: "/yas-siniflandirmasi",
});

export default function AgeRatingPage() {
  const { ageRating } = mobileReleaseInfo;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_32%),linear-gradient(180deg,#f7fafc_0%,#ffffff_55%,#f4f8fb_100%)] pb-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 pt-14 md:px-10">
        <Link href="/mobil-uygulama" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
          Mobil uygulama sayfasına dön
        </Link>

        <section className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">App Store {ageRating.appStore}</Badge>
            <Badge variant="secondary">Google Play {ageRating.googlePlay}</Badge>
            <Badge variant="outline">Yaş derecelendirmesi</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Yaş Sınıflandırması
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Medya Zekâsı mobil uygulaması için önerilen yaş sınıflandırması ve bu sınıflandırmayı
            destekleyen içerik değerlendirme notları aşağıdadır.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <Card className="rounded-[1.8rem] border-white/60 bg-white/88 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Önerilen sonuçlar</h2>
              <div className="mt-5 space-y-4 text-slate-700">
                <p>
                  <span className="font-semibold text-slate-950">App Store:</span> {ageRating.appStore}
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Google Play:</span> {ageRating.googlePlay}
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Hedef kullanıcı:</span> {ageRating.targetAudience}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[1.8rem] border-white/60 bg-white/88 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Değerlendirme notu</h2>
              <p className="mt-5 leading-8 text-slate-700">{ageRating.statement}</p>
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-[1.8rem] border-white/60 bg-white/88 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
          <CardContent className="p-8 text-slate-700">
            <h2 className="text-2xl font-semibold text-slate-950">Anket ve inceleme dayanakları</h2>
            <ul className="mt-5 space-y-3 leading-8">
              {ageRating.questionnaire.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

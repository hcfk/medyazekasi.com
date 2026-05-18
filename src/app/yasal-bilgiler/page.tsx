import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mobileReleaseInfo } from "@/lib/mobile-release";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Yasal Bilgiler | Medya Zekâsı",
  description:
    "Medya Zekâsı için kamuya açık geliştirici, iletişim ve yayın şeffaflığı bilgileri.",
  path: "/yasal-bilgiler",
});

export default function LegalInformationPage() {
  const { developer } = mobileReleaseInfo;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_32%),linear-gradient(180deg,#f8fafc_0%,#ffffff_55%,#f5f7fb_100%)] pb-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 pt-14 md:px-10">
        <Link href="/" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
          Ana sayfaya dön
        </Link>

        <section className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">Şeffaflık</Badge>
            <Badge variant="outline">Kamuya açık bilgiler</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Yasal Bilgiler
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Bu sayfa, Medya Zekâsı için kamuya açık geliştirici ve iletişim bilgilerini, mobil
            yayın süreçleri ve kurumsal iletişim şeffaflığı amacıyla sunar.
          </p>
        </section>

        <Card className="rounded-[1.8rem] border-white/60 bg-white/88 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
          <CardContent className="space-y-8 p-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-semibold text-slate-950">1. Yayın ve ürün bilgisi</h2>
              <div className="mt-4 space-y-3 leading-8">
                <p><span className="font-semibold text-slate-950">Ürün:</span> Medya Zekâsı</p>
                <p><span className="font-semibold text-slate-950">Alan adı:</span> medyazekasi.com</p>
                <p><span className="font-semibold text-slate-950">Mobil paket kimliği:</span> com.medyazekasi.mobile</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">2. Geliştirici bilgileri</h2>
              <div className="mt-4 space-y-3 leading-8">
                <p><span className="font-semibold text-slate-950">Geliştirici:</span> {developer.name}</p>
                <p>
                  <span className="font-semibold text-slate-950">Web sitesi:</span>{" "}
                  <a href={developer.website} className="font-medium text-cyan-900 underline underline-offset-4">
                    {developer.website}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-950">E-posta:</span>{" "}
                  <a href={`mailto:${developer.email}`} className="font-medium text-cyan-900 underline underline-offset-4">
                    {developer.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Telefon:</span>{" "}
                  <a href={developer.phoneHref} className="font-medium text-cyan-900 underline underline-offset-4">
                    {developer.phone}
                  </a>
                </p>
                <p><span className="font-semibold text-slate-950">Adres:</span> {developer.address}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">3. İletişim ve başvuru amaçları</h2>
              <p className="mt-3 leading-8">
                Bu iletişim bilgileri; demo talepleri, teknik iletişim, mağaza inceleme süreçleri,
                gizlilik başvuruları, destek ve şikayet iletileri için kullanılabilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">4. İlgili sayfalar</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/gizlilik-politikasi"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-900"
                >
                  Gizlilik Politikası
                </Link>
                <Link
                  href="/cerez-politikasi"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-900"
                >
                  Çerez Politikası
                </Link>
                <Link
                  href="/mobil-izinler"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-900"
                >
                  Mobil İzinler
                </Link>
                <Link
                  href="/yas-siniflandirmasi"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-900"
                >
                  Yaş Sınıflandırması
                </Link>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

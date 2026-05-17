import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { mobileReleaseInfo } from "@/lib/mobile-release";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası | Medya Zekâsı",
  description:
    "Medya Zekâsı mobil uygulaması ve iletişim kanalları için gizlilik politikası.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPolicyPage() {
  const { developer, appName } = mobileReleaseInfo;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,196,91,0.18),_transparent_35%),linear-gradient(180deg,#f7f4ee_0%,#ffffff_55%,#f4efe5_100%)] pb-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 pt-14 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
        >
          Ana sayfaya dön
        </Link>

        <section className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">KVKK uyum hedefi</Badge>
            <Badge variant="outline">Mobil uygulama</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Gizlilik Politikası
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Bu politika, {appName} mobil uygulaması ve ilgili iletişim kanallarında
            işlenen temel veriler, kullanım amacı ve iletişim noktalarını açıklar.
          </p>
        </section>

        <Card className="rounded-[1.8rem] border-white/60 bg-white/85 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
          <CardContent className="space-y-8 p-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                1. Toplanan veriler
              </h2>
              <p className="mt-3 leading-8">
                Uygulama, kullanıcının kurumsal hesabıyla giriş yapması, oluşturduğu medya
                işlerini yüklemesi ve kendi kayıtlarına erişmesi için gerekli sınırlı
                verileri işler. Buna kullanıcı kimliği, kurum hesabı, yüklenen medya
                dosyaları, YouTube bağlantıları ve oluşturulan transkript çıktıları dahildir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                2. Verilerin kullanım amacı
              </h2>
              <p className="mt-3 leading-8">
                Veriler; oturum açma, medya yükleme, iş durumu takibi, transkript
                gösterimi, teknik destek, hata analizi ve kurumsal operasyon akışının
                sürdürülmesi amaçlarıyla kullanılır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                3. Gizlilik ve güvenlik
              </h2>
              <ul className="mt-3 space-y-3 leading-8">
                <li>Uygulama içinde reklam takibi bulunmaz.</li>
                <li>iOS privacy manifest içinde tracking kapalı olarak tanımlıdır.</li>
                <li>JWT token güvenli depolama mekanizmasında saklanır.</li>
                <li>Mobil istemci yalnızca kullanıcının kendi işlerine erişir.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">4. İzinler</h2>
              <p className="mt-3 leading-8">
                Mikrofon, medya arşivi ve paylaşım izinleri yalnızca kullanıcının ses kaydı
                alıp medya dosyası seçmesi veya başka uygulamalardan içerik aktarması için
                kullanılır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">5. İletişim</h2>
              <p className="mt-3 leading-8">
                Gizlilik, destek veya şikayet konuları için geliştirici ile aşağıdaki
                kanallardan iletişime geçebilirsiniz.
              </p>
              <div className="mt-4 space-y-2">
                <p>Geliştirici: {developer.name}</p>
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
                <p>Adres: {developer.address}</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

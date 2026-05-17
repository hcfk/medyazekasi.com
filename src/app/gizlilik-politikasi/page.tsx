import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mobileReleaseInfo } from "@/lib/mobile-release";

export const metadata: Metadata = {
  title: "Gizlilik Politikasi",
  description:
    "Medya Zekasi mobil uygulamasi ve iletisim kanallari icin gizlilik politikasi.",
};

export default function PrivacyPolicyPage() {
  const { developer, appName } = mobileReleaseInfo;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,196,91,0.18),_transparent_35%),linear-gradient(180deg,#f7f4ee_0%,#ffffff_55%,#f4efe5_100%)] pb-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 pt-14 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
        >
          Ana sayfaya don
        </Link>

        <section className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">KVKK uyum hedefi</Badge>
            <Badge variant="outline">Mobil uygulama</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Gizlilik Politikasi
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Bu politika, {appName} mobil uygulamasi ve ilgili iletisim
            kanallarinda islenen temel veriler, kullanim amaci ve iletisim
            noktalarini aciklar.
          </p>
        </section>

        <Card className="rounded-[1.8rem] border-white/60 bg-white/85 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
          <CardContent className="space-y-8 p-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                1. Toplanan veriler
              </h2>
              <p className="mt-3 leading-8">
                Uygulama, kullanicinin kurumsal hesabiyla giris yapmasi,
                olusturdugu medya islerini yuklemesi ve kendi kayitlarina
                erismesi icin gerekli sinirli verileri isler. Buna kullanici
                kimligi, kurum hesabi, yuklenen medya dosyalari, YouTube
                baglantilari ve olusturulan transkript ciktilari dahildir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                2. Verilerin kullanim amaci
              </h2>
              <p className="mt-3 leading-8">
                Veriler; oturum acma, medya yukleme, is durumu takibi,
                transkript gosterimi, teknik destek, hata analizi ve kurumsal
                operasyon akisinin surdurulmesi amaclariyla kullanilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                3. Gizlilik ve guvenlik
              </h2>
              <ul className="mt-3 space-y-3 leading-8">
                <li>Uygulama icinde reklam takibi bulunmaz.</li>
                <li>iOS privacy manifest icinde tracking kapali olarak tanimlidir.</li>
                <li>JWT token guvenli depolama mekanizmasinda saklanir.</li>
                <li>Mobil istemci yalnizca kullanicinin kendi islerine erisir.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                4. Izinler
              </h2>
              <p className="mt-3 leading-8">
                Mikrofon, medya arsivi ve paylasim izinleri yalnizca
                kullanicinin ses kaydi alip medya dosyasi secmesi veya baska
                uygulamalardan icerik aktarmasi icin kullanilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                5. Iletisim
              </h2>
              <p className="mt-3 leading-8">
                Gizlilik, destek veya sikayet konulari icin gelistirici ile
                asagidaki kanallardan iletisime gecebilirsiniz.
              </p>
              <div className="mt-4 space-y-2">
                <p>Gelistirici: {developer.name}</p>
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

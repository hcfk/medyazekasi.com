import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ShieldCheck, Smartphone, Store, Upload } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mobileReleaseInfo } from "@/lib/mobile-release";

export const metadata: Metadata = {
  title: "Mobil Uygulama",
  description:
    "iOS ve Android icin Medya Zekasi mobil uygulama yayin ve magaza hazirlik bilgileri.",
};

export default function MobileAppPage() {
  const info = mobileReleaseInfo;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,196,91,0.18),_transparent_35%),linear-gradient(180deg,#f7f4ee_0%,#ffffff_55%,#f4efe5_100%)] pb-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-14 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
        >
          Ana sayfaya don
        </Link>

        <section className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">iOS</Badge>
            <Badge variant="secondary">Android</Badge>
            <Badge variant="outline">Store release hazirligi</Badge>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Medya Zekasi mobil uygulamasi icin yayin bilgileri
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Bu sayfa App Store ve Google Play yayin sureclerinde gereken temel
            urun, izin, gizlilik ve iletisim bilgilerini tek yerde toplar.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {[
            {
              icon: Smartphone,
              title: "Uygulama kimlikleri",
              lines: [
                `Uygulama adi: ${info.appName}`,
                `Android package: ${info.androidPackage}`,
                `iOS bundle: ${info.iosBundle}`,
                `JS component: ${info.componentName}`,
                `Surum: ${info.version}`,
              ],
            },
            {
              icon: Upload,
              title: "Yayinlanan temel ozellikler",
              lines: info.highlights,
            },
            {
              icon: ShieldCheck,
              title: "Gizlilik ve guvenlik",
              lines: info.privacy,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="rounded-[1.8rem] border-white/60 bg-white/80 shadow-[0_20px_55px_rgba(20,33,61,0.08)]"
              >
                <CardContent className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-gold)]/28 text-[var(--brand-ink)]">
                    <Icon className="size-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-[var(--brand-ink)]">
                    {item.title}
                  </h2>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    {item.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <Card className="rounded-[1.8rem] border-white/60 bg-white/80 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-gold)]/28 text-[var(--brand-ink)]">
                <Store className="size-6" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-[var(--brand-ink)]">
                Magaza ve teknik notlar
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                Mobil istemci mevcut platform hesabiyla giris yapar ve sunucu
                uzerinde yalnizca kullanicinin kendi islerine erisir.
              </p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>API tabani: {info.apiBaseUrl}</li>
                <li>Ekranlar: {info.screens.join(", ")}</li>
                <li>Android paylasim intent akisi tanimli</li>
                <li>iOS privacy manifest mevcut</li>
                <li>No-signup model: kurum hesabi ile giris</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-[1.8rem] border-white/60 bg-white/80 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-gold)]/28 text-[var(--brand-ink)]">
                <ExternalLink className="size-6" />
              </div>
              <h2 className="mt-5 text-2xl font-semibold text-[var(--brand-ink)]">
                Gelistirici ve iletisim
              </h2>
              <p className="mt-4 leading-7 text-slate-700">
                Urun gelistirici ve olasi sikayet, iletisim veya kurumsal talep
                noktasi:
              </p>
              <div className="mt-4 space-y-3 text-slate-700">
                <p>Gelistirici: {info.developer.name}</p>
                <p>
                  Web:{" "}
                  <a
                    href={info.developer.website}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[var(--brand-copper)]"
                  >
                    {info.developer.website}
                  </a>
                </p>
                <p>
                  E-posta:{" "}
                  <a
                    href={`mailto:${info.developer.email}`}
                    className="font-medium text-[var(--brand-copper)]"
                  >
                    {info.developer.email}
                  </a>
                </p>
                <p>
                  Telefon:{" "}
                  <a
                    href={info.developer.phoneHref}
                    className="font-medium text-[var(--brand-copper)]"
                  >
                    {info.developer.phone}
                  </a>
                </p>
                <p>Adres: {info.developer.address}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <Card className="rounded-[1.8rem] border-white/60 bg-white/80 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-7">
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                Android izinleri
              </h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                {info.permissions.android.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-[1.8rem] border-white/60 bg-white/80 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-7">
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                iOS izinleri
              </h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                {info.permissions.ios.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

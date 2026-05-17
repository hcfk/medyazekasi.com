import type { Metadata } from "next";
import Link from "next/link";
import { Copy, ExternalLink, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mobileReleaseInfo } from "@/lib/mobile-release";

export const metadata: Metadata = {
  title: "Mağaza Metinleri",
  description:
    "App Store ve Google Play yayın sayfaları için hazır Medya Zekâsı metinleri.",
};

export default function StoreCopyPage() {
  const { appName, storeCopy } = mobileReleaseInfo;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,196,91,0.18),_transparent_35%),linear-gradient(180deg,#f7f4ee_0%,#ffffff_55%,#f4efe5_100%)] pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-14 md:px-10">
        <Link
          href="/mobil-uygulama"
          className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
        >
          Mobil uygulama sayfasına dön
        </Link>

        <section className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">App Store</Badge>
            <Badge variant="secondary">Google Play</Badge>
            <Badge variant="outline">Hazır kopya</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            {appName} için mağaza metinleri
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Aşağıdaki metinler App Store Connect ve Google Play Console
            ekranlarına düzenlenmeden yakın biçimde taşınabilir.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <Card className="rounded-[1.8rem] border-white/60 bg-white/85 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <FileText className="size-5 text-[var(--brand-copper)]" />
                <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                  Kısa açıklama
                </h2>
              </div>
              <p className="mt-4 rounded-2xl bg-[var(--secondary)]/60 p-4 leading-8 text-slate-800">
                {storeCopy.shortDescription}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[1.8rem] border-white/60 bg-white/85 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <Copy className="size-5 text-[var(--brand-copper)]" />
                <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                  Alt başlık ve anahtar kelimeler
                </h2>
              </div>
              <p className="mt-4 rounded-2xl bg-[var(--secondary)]/60 p-4 leading-8 text-slate-800">
                {storeCopy.subtitle}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-slate-500">
                Keywords
              </p>
              <p className="mt-2 leading-8 text-slate-700">
                {storeCopy.keywords.join(", ")}
              </p>
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-[1.8rem] border-white/60 bg-white/85 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
              Uzun açıklama
            </h2>
            <div className="mt-5 space-y-4">
              {storeCopy.fullDescription.map((paragraph) => (
                <p
                  key={paragraph}
                  className="rounded-2xl bg-[var(--secondary)]/45 p-5 leading-8 text-slate-800"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <section className="grid gap-5 lg:grid-cols-2">
          <Card className="rounded-[1.8rem] border-white/60 bg-white/85 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                Destek ve gizlilik bağlantıları
              </h2>
              <div className="mt-4 space-y-3 text-slate-700">
                <p>
                  Marketing URL:{" "}
                  <a
                    href={storeCopy.marketingUrl}
                    className="font-medium text-[var(--brand-copper)]"
                  >
                    {storeCopy.marketingUrl}
                  </a>
                </p>
                <p>
                  Privacy Policy URL:{" "}
                  <a
                    href={storeCopy.supportUrl}
                    className="font-medium text-[var(--brand-copper)]"
                  >
                    {storeCopy.supportUrl}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[1.8rem] border-white/60 bg-white/85 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <ExternalLink className="size-5 text-[var(--brand-copper)]" />
                <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                  Kullanım notu
                </h2>
              </div>
              <p className="mt-4 leading-8 text-slate-700">
                App Store için alt başlık ve keyword alanları ayrı kullanılabilir.
                Google Play için kısa açıklama ve tam açıklama alanları bu sayfadaki
                metinlerle doldurulabilir.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

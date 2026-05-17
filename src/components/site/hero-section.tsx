import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { MockDashboard } from "@/components/site/mock-dashboard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroStats = [
  "Web + Mobil medya toplama",
  "Transkripsiyon ve özetleme",
  "Aranabilir kurumsal arşiv",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 md:pt-10">
      <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.16),transparent_18%),radial-gradient(circle_at_14%_10%,rgba(15,76,129,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.68),rgba(255,255,255,0))]" />
      <div className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-white/88 px-4 py-2 shadow-sm backdrop-blur">
              <Sparkles className="size-4 text-cyan-700" />
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-950">
                Kurumsal Medya Yönetimi
              </p>
            </div>

            <h1 className="mt-5 max-w-4xl text-[2.65rem] font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-7xl">
              Yapay Zekâ Destekli Kurumsal Medya Yönetim Platformu
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg md:text-xl">
              Medya Zekâsı; kamu kurumları, belediyeler ve basın-yayın ekipleri için
              toplantı, konuşma, canlı yayın ve saha kayıtlarını web ve mobil üzerinden
              tek merkezde toplar. İçerikleri metne, özete, altyazıya ve aranabilir
              kurumsal hafızaya dönüştürür.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] px-7 text-white shadow-[0_18px_45px_rgba(16,188,212,0.18)] hover:opacity-95",
                )}
              >
                Demo Talep Et
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/mobil-uygulama"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 rounded-full border-slate-300 bg-white/88 px-7 text-slate-950 shadow-sm",
                )}
              >
                Mobil Uygulamayı Keşfet
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.35rem] border border-slate-200/80 bg-white/86 px-4 py-4 text-sm font-medium text-slate-800 shadow-[0_12px_35px_rgba(20,33,61,0.05)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-[1.75rem] border border-slate-200/80 bg-white/86 p-5 shadow-[0_18px_50px_rgba(20,33,61,0.06)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold text-slate-950">
                  Kayıtlarınız dosya olarak kalmasın, kurumsal hafızaya dönüşsün.
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Sahadan yükleyin, merkezden yönetin, yapay zekâ ile işleyin.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-950">
                <ShieldCheck className="size-4" />
                Kurum içi kontrol yaklaşımı
              </div>
            </div>
          </div>

          <div className="lg:pl-4">
            <MockDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { MockDashboard } from "@/components/site/mock-dashboard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-12">
      <div className="absolute inset-x-0 top-0 h-[46rem] bg-[radial-gradient(circle_at_78%_12%,rgba(34,211,238,0.18),transparent_18%),radial-gradient(circle_at_18%_10%,rgba(15,76,129,0.16),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0))]" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/12 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <Sparkles className="size-4 text-cyan-700" />
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyan-900">
                Kurumsal Medya Yönetimi
              </p>
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 md:text-7xl">
              Yapay Zekâ Destekli Kurumsal Medya Yönetim Platformu
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              Medya Zekâsı; kamu kurumları, belediyeler ve basın-yayın ekipleri için
              toplantı, konuşma, canlı yayın ve saha kayıtlarını web ve mobil
              üzerinden tek merkezde toplar. İçerikleri metne, özete, altyazıya
              ve aranabilir kurumsal hafızaya dönüştürür.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] px-7 text-white shadow-[0_18px_45px_rgba(16,188,212,0.22)] hover:opacity-95",
                )}
              >
                Demo Talep Et
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/mobil-uygulama"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 rounded-full border-slate-300 bg-white/80 px-7 text-slate-950 shadow-sm",
                )}
              >
                Mobil Uygulamayı Keşfet
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-[1.9rem] border border-slate-200/80 bg-white/82 p-5 shadow-[0_20px_60px_rgba(20,33,61,0.06)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold text-slate-950">
                  Kayıtlarınız dosya olarak kalmasın, kurumsal hafızaya dönüşsün.
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Sahadan yükleyin, merkezden yönetin, yapay zekâ ile işleyin.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-950">
                <ShieldCheck className="size-4" />
                Kurum içi kontrol yaklaşımı
              </div>
            </div>
          </div>

          <MockDashboard />
        </div>
      </div>
    </section>
  );
}

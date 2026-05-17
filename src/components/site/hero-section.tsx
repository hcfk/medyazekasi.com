import Link from "next/link";

import { MockDashboard } from "@/components/site/mock-dashboard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12">
      <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_22%),radial-gradient(circle_at_top_left,rgba(15,23,42,0.14),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-800">
              Kurumsal Medya Yönetimi
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 md:text-7xl">
              Yapay Zekâ Destekli Kurumsal Medya Yönetim Platformu
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              Medya Zekâsı; kamu kurumları, belediyeler ve basın-yayın ekipleri
              için toplantı, konuşma, canlı yayın ve saha kayıtlarını web ve
              mobil üzerinden tek merkezde toplar. İçerikleri metne, özete,
              altyazıya ve aranabilir kurumsal hafızaya dönüştürür.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] px-7 text-white hover:opacity-95",
                )}
              >
                Demo Talep Et
              </Link>
              <Link
                href="/mobil-uygulama"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full border-slate-300 bg-white/80 px-7 text-slate-950",
                )}
              >
                Mobil Uygulamayı Keşfet
              </Link>
            </div>
            <div className="mt-8 rounded-[1.8rem] border border-slate-200/80 bg-white/80 p-5 shadow-[0_16px_50px_rgba(20,33,61,0.06)]">
              <p className="text-base font-medium text-slate-900">
                “Kayıtlarınız dosya olarak kalmasın, kurumsal hafızaya dönüşsün.”
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Sahadan yükleyin, merkezden yönetin, yapay zekâ ile işleyin.
              </p>
            </div>
          </div>

          <MockDashboard />
        </div>
      </div>
    </section>
  );
}

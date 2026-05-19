import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/88 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Ana sayfa">
          <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgba(16,188,212,0.16)] ring-1 ring-slate-200/80">
            <Image
              src={siteConfig.logoPath}
              alt="Medya Zekâsı logosu"
              width={40}
              height={40}
              className="size-full object-cover"
              priority
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-slate-950">{siteConfig.name}</p>
            <p className="truncate text-[11px] uppercase tracking-[0.22em] text-slate-500">
              GovTech AI Platform
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana navigasyon">
          {navigation.map((item) =>
            item.children ? (
              <details key={item.title} className="group relative">
                <summary className="inline-flex list-none items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950">
                  {item.title}
                  <ChevronDown className="size-4 text-slate-500 transition group-open:rotate-180" />
                </summary>
                <div className="invisible absolute left-0 top-full mt-2 min-w-72 rounded-3xl border border-slate-200/90 bg-white/96 p-3 opacity-0 shadow-[0_30px_70px_rgba(15,23,42,0.12)] transition group-open:visible group-open:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.title}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/demo"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-full bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] px-6 text-white shadow-[0_14px_35px_rgba(16,188,212,0.18)] hover:opacity-95",
            )}
          >
            Demo Talep Et
          </Link>
        </div>

        <details className="group lg:hidden">
          <summary className="inline-flex size-11 list-none items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm">
            <span className="sr-only">Menüyü aç</span>
            <Menu className="size-5 transition group-open:rotate-90" />
          </summary>
          <div className="absolute inset-x-0 top-full border-t border-slate-200 bg-white/96 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6" aria-label="Mobil navigasyon">
              {navigation.map((item) =>
                item.children ? (
                  <details key={item.title} className="rounded-3xl border border-slate-200 p-2">
                    <summary className="flex list-none items-center justify-between px-3 py-2 text-sm font-semibold text-slate-950">
                      {item.title}
                      <ChevronDown className="size-4 text-slate-500 transition group-open:rotate-180" />
                    </summary>
                    <div className="flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-2xl px-3 py-3 text-sm text-slate-700 hover:bg-slate-50"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    {item.title}
                  </Link>
                ),
              )}
              <Link
                href="/demo"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-2 h-12 rounded-full bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] text-white",
                )}
              >
                Demo Talep Et
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

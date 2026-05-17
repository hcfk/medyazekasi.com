"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Ana sayfa">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] text-sm font-bold text-white shadow-[0_12px_30px_rgba(16,188,212,0.25)]">
            MZ
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
              <div key={item.title} className="group relative">
                <button
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  type="button"
                  aria-haspopup="true"
                >
                  {item.title}
                  <ChevronDown className="size-4 text-slate-500" />
                </button>
                <div className="invisible absolute left-0 top-full mt-2 min-w-72 rounded-3xl border border-slate-200/90 bg-white/96 p-3 opacity-0 shadow-[0_30px_70px_rgba(15,23,42,0.12)] transition group-hover:visible group-hover:opacity-100">
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
              </div>
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

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-sm lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-slate-200 bg-white/96 transition-[max-height,opacity] duration-300 ease-out lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6" aria-label="Mobil navigasyon">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.title} className="rounded-3xl border border-slate-200 p-2">
                <p className="px-3 py-2 text-sm font-semibold text-slate-950">{item.title}</p>
                <div className="flex flex-col">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-2xl px-3 py-3 text-sm text-slate-700 hover:bg-slate-50"
                      onClick={() => setOpen(false)}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
          >
            Demo Talep Et
          </Link>
        </nav>
      </div>
    </header>
  );
}

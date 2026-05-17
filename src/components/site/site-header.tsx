"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Ana sayfa">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] text-sm font-bold text-white shadow-[0_12px_30px_rgba(16,188,212,0.25)]">
            MZ
          </div>
          <div>
            <p className="text-base font-semibold text-slate-950">{siteConfig.name}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              GovTech AI Platform
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Ana navigasyon">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.title} className="group relative">
                <button
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  type="button"
                  aria-haspopup="true"
                >
                  {item.title}
                </button>
                <div className="invisible absolute left-0 top-full mt-2 min-w-64 rounded-3xl border border-slate-200 bg-white p-3 opacity-0 shadow-[0_30px_70px_rgba(15,23,42,0.12)] transition group-hover:visible group-hover:opacity-100">
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
              "rounded-full bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] px-6 text-white hover:opacity-95",
            )}
          >
            Demo Talep Et
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          className="inline-flex size-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-800 lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobil navigasyon">
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
                "mt-2 rounded-full bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] text-white",
              )}
              onClick={() => setOpen(false)}
            >
              Demo Talep Et
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

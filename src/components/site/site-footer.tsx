import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { navigation, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.95fr_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/4 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f4c81,#10bcd4)] font-bold text-white shadow-[0_16px_35px_rgba(16,188,212,0.20)]">
                MZ
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
                <p className="text-sm text-slate-200">
                  Web ve mobil üzerinden uçtan uca kurumsal medya yönetimi.
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-200">
              Kayıtlarınız dosya olarak kalmasın, kurumsal hafızaya dönüşsün. Sahadan yükleyin,
              merkezden yönetin, yapay zekâ ile işleyin.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500/12 px-4 py-2 text-sm text-cyan-100">
              Kurum içi kontrol hedeflerine uygun yapılandırılabilir
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              Sayfalar
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              {navigation.map((item) =>
                item.children ? (
                  item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="inline-flex items-center gap-2 text-slate-200 transition hover:text-white"
                    >
                      {child.title}
                    </Link>
                  ))
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center gap-2 text-slate-200 transition hover:text-white"
                  >
                    {item.title}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              İletişim
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-cyan-300" />
                <p>{siteConfig.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-cyan-300" />
                <a href={`mailto:${siteConfig.email}`} className="text-slate-100 hover:text-white">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-cyan-300" />
                <a href={siteConfig.phoneHref} className="text-slate-100 hover:text-white">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.developer.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300/40 hover:text-white"
                >
                  Geliştirici: {siteConfig.developer.name}
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/gizlilik-politikasi" className="text-slate-200 hover:text-white">
              Gizlilik Politikası
            </Link>
            <Link href="/cerez-politikasi" className="text-slate-200 hover:text-white">
              Çerez Politikası
            </Link>
            <Link href="/yasal-bilgiler" className="text-slate-200 hover:text-white">
              Yasal Bilgiler
            </Link>
            <Link href="/magaza-metinleri" className="text-slate-200 hover:text-white">
              Mağaza Metinleri
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

import { navigation, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-10 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f4c81,#10bcd4)] font-bold text-white">
              MZ
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
              <p className="text-sm text-slate-400">
                Web ve mobil üzerinden uçtan uca kurumsal medya yönetimi.
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
            Kayıtlarınız dosya olarak kalmasın, kurumsal hafızaya dönüşsün.
            Sahadan yükleyin, merkezden yönetin, yapay zekâ ile işleyin.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            Sayfalar
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {navigation.map((item) =>
              item.children ? (
                item.children.map((child) => (
                  <Link key={child.href} href={child.href} className="text-slate-300 hover:text-white">
                    {child.title}
                  </Link>
                ))
              ) : (
                <Link key={item.href} href={item.href} className="text-slate-300 hover:text-white">
                  {item.title}
                </Link>
              ),
            )}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            İletişim
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>{siteConfig.address}</p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
            <p>
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              Geliştirici:{" "}
              <a
                href={siteConfig.developer.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {siteConfig.developer.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

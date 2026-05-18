import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mobileReleaseInfo } from "@/lib/mobile-release";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mobil İzinler | Medya Zekâsı",
  description:
    "Medya Zekâsı Android ve iOS uygulamalarında istenen izinler ve kullanım amaçları.",
  path: "/mobil-izinler",
});

export default function MobilePermissionsPage() {
  const { permissions } = mobileReleaseInfo;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_32%),linear-gradient(180deg,#f7fafc_0%,#ffffff_55%,#f4f8fb_100%)] pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pt-14 md:px-10">
        <Link href="/mobil-uygulama" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
          Mobil uygulama sayfasına dön
        </Link>

        <section className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">Android</Badge>
            <Badge variant="secondary">iOS</Badge>
            <Badge variant="outline">Uygulama izinleri</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Mobil İzinler
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Bu sayfa, Medya Zekâsı mobil uygulamasında istenen temel izinleri ve bu izinlerin hangi
            kullanıcı akışında kullanıldığını açıklar.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <Card className="rounded-[1.8rem] border-white/60 bg-white/88 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-slate-950">Android izinleri</h2>
              <div className="mt-5 space-y-4">
                {permissions.android.map((permission) => (
                  <div key={permission.name} className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-950">{permission.name}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{permission.purpose}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[1.8rem] border-white/60 bg-white/88 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-slate-950">iOS izinleri</h2>
              <div className="mt-5 space-y-4">
                {permissions.ios.map((permission) => (
                  <div key={permission.name} className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-950">{permission.name}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{permission.purpose}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-[1.8rem] border-white/60 bg-white/88 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
          <CardContent className="p-8 text-slate-700">
            <h2 className="text-2xl font-semibold text-slate-950">İzin kullanım ilkesi</h2>
            <ul className="mt-4 space-y-3 leading-8">
              <li>İzinler yalnızca ilgili özellik kullanıldığında talep edilir.</li>
              <li>Mikrofon erişimi arka planda sürekli kayıt amacıyla kullanılmaz.</li>
              <li>Medya erişimi yalnızca kullanıcının seçtiği dosyaları yüklemek için kullanılır.</li>
              <li>Paylaşım akışı, kullanıcının başlattığı aktarımlarda devreye girer.</li>
              <li>İzin verilmezse ilgili özellik çalışmayabilir, ancak diğer temel ekranlar kullanılabilir.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

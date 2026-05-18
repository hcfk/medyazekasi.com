import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Çerez Politikası | Medya Zekâsı",
  description:
    "Medya Zekâsı web sitesi için çerez kullanımı, Google Analytics 4, saklama süreleri ve tercih yönetimi bilgileri.",
  path: "/cerez-politikasi",
});

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_32%),linear-gradient(180deg,#f7fafc_0%,#ffffff_55%,#f4f8fb_100%)] pb-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 pt-14 md:px-10">
        <Link href="/" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
          Ana sayfaya dön
        </Link>

        <section className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">Çerez Yönetimi</Badge>
            <Badge variant="outline">Web Sitesi</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Çerez Politikası
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Bu sayfa, medyazekasi.com üzerinde kullanılan çerez kategorileri, analitik yaklaşımı,
            saklama mantığı ve tercihlerinizi nasıl yönetebileceğiniz hakkında bilgi verir.
          </p>
        </section>

        <Card className="rounded-[1.8rem] border-white/60 bg-white/88 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
          <CardContent className="space-y-8 p-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-semibold text-slate-950">1. Çerez nedir?</h2>
              <p className="mt-3 leading-8">
                Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza yerleştirilen küçük
                veri dosyalarıdır. Bazı çerezler sitenin temel çalışması için gereklidir; bazıları ise
                performans ve kullanım ölçümü amacıyla kullanılabilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">
                2. Kullandığımız çerez ve benzeri teknolojiler
              </h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-950">Zorunlu çerezler</h3>
                  <p className="mt-2 leading-7">
                    Güvenli gezinme, temel site işlevleri ve çerez tercihlerinizin saklanması için
                    kullanılır. Bu kategori kapatılamaz.
                  </p>
                </div>
                <div className="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold text-slate-950">Analitik çerezler</h3>
                  <p className="mt-2 leading-7">
                    Web sitesi kullanımını toplu seviyede anlamak için Google Analytics 4 kullanılır.
                    Bu kategori yalnızca onay vermeniz halinde etkinleşir.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">3. Analitik yaklaşımımız</h2>
              <p className="mt-3 leading-8">
                Site üzerinde Google Analytics 4 kullanılmaktadır. Analitik kodu varsayılan olarak
                yüklenmez; yalnızca çerez banner’ında analitik izni vermeniz halinde etkinleştirilir.
                Analitik olaylar, sayfa görüntüleme ve form gönderimi gibi genel kullanım bilgileriyle
                sınırlıdır.
              </p>
              <p className="mt-3 leading-8">
                Google Analytics’e ad, e-posta, telefon, mesaj içeriği veya kişiyi doğrudan
                tanımlayabilecek form verileri gönderilmez.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">4. Saklama ve tercih yönetimi</h2>
              <p className="mt-3 leading-8">
                Çerez tercihleriniz tarayıcınızın yerel depolama alanında saklanır. Tarayıcı verilerinizi
                temizlemeniz halinde tercih paneli yeniden gösterilebilir. Analitik çerezleri kabul
                etmezseniz site temel işlevleriyle kullanılmaya devam eder.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">
                5. Çerezleri nasıl değiştirebilirsiniz?
              </h2>
              <p className="mt-3 leading-8">
                İlk ziyaretinizde gösterilen çerez paneli üzerinden seçim yapabilirsiniz. Ayrıca
                tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Ancak bu durumda
                bazı tercihlerin yeniden sorulması gerekebilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-950">6. İlgili sayfalar</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/gizlilik-politikasi"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-900"
                >
                  Gizlilik Politikası
                </Link>
                <Link
                  href="/yasal-bilgiler"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-cyan-300 hover:text-cyan-900"
                >
                  Yasal Bilgiler
                </Link>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

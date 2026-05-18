import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mobileReleaseInfo } from "@/lib/mobile-release";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası | Medya Zekâsı",
  description:
    "Medya Zekâsı web sitesi, mobil uygulamaları ve iletişim kanalları için gizlilik politikası.",
  path: "/gizlilik-politikasi",
});

export default function PrivacyPolicyPage() {
  const { developer, appName, privacy } = mobileReleaseInfo;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,196,91,0.18),_transparent_35%),linear-gradient(180deg,#f7f4ee_0%,#ffffff_55%,#f4efe5_100%)] pb-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 pt-14 md:px-10">
        <Link href="/" className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
          Ana sayfaya dön
        </Link>

        <section className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">KVKK uyum hedefi</Badge>
            <Badge variant="outline">Web + Mobil</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            Gizlilik Politikası
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Bu politika, Medya Zekâsı web sitesi, {appName} mobil uygulaması ve ilgili iletişim
            kanallarında işlenen verilerin kapsamını, amaçlarını ve temel veri yönetimi yaklaşımını
            açıklar.
          </p>
        </section>

        <Card className="rounded-[1.8rem] border-white/60 bg-white/85 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
          <CardContent className="space-y-8 p-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">1. Veri sorumlusu ve kapsam</h2>
              <p className="mt-3 leading-8">
                Bu politika medyazekasi.com alan adı altındaki kamuya açık web sayfaları, mobil yayın
                sayfaları, demo talep formu ve Medya Zekâsı mobil uygulamasına yöneliktir. Kurumsal
                kurulumlara ilişkin veri işleme ayrıntıları, ilgili müşteri sözleşmeleri ve kurum
                politikaları kapsamında ayrıca şekillenebilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">2. Toplayabileceğimiz veri kategorileri</h2>
              <ul className="mt-3 space-y-3 leading-8">
                <li>İletişim ve demo talep formunda paylaştığınız ad, kurum, e-posta, telefon ve mesaj bilgileri</li>
                <li>Web sitesi kullanımında oluşan toplu analitik veriler ve sayfa görüntüleme bilgileri</li>
                <li>Mobil uygulamada oturum açma, medya yükleme ve transkript erişimi için gerekli kurumsal hesap verileri</li>
                <li>Yüklediğiniz medya dosyaları, bağlantılar ve bunlardan üretilen transkript çıktıları</li>
                <li>Teknik hata analizi ve güvenlik amacıyla gerekli sınırlı sistem günlükleri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">3. Verilerin kullanım amaçları</h2>
              <ul className="mt-3 space-y-3 leading-8">
                <li>Demo taleplerine dönüş yapmak ve kurumsal iletişim sürecini yürütmek</li>
                <li>Mobil uygulama ve ürün akışlarında oturum, yükleme, iş takibi ve transkript erişimi sağlamak</li>
                <li>Web sitesi performansını toplu düzeyde ölçmek ve kullanıcı deneyimini geliştirmek</li>
                <li>Güvenlik, hata ayıklama ve hizmet sürekliliği amaçlı teknik analiz yapmak</li>
                <li>Hukuki yükümlülükleri yerine getirmek ve gerektiğinde kayıt tutmak</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">4. Üçüncü taraf hizmetler</h2>
              <p className="mt-3 leading-8">
                Web sitesinde, onay vermeniz halinde Google Analytics 4 analitiği kullanılabilir.
                Form iletileri ise yapılandırmaya bağlı olarak e-posta veya webhook altyapıları üzerinden
                işlenebilir. Hosting ve altyapı hizmetleri yetkili servis sağlayıcılar tarafından
                sağlanabilir.
              </p>
              <p className="mt-3 leading-8">
                Ad, e-posta, telefon ve mesaj alanları Google Analytics’e gönderilmez. Analitik olaylar
                kişiyi doğrudan tanımlamayan genel kullanım verileriyle sınırlıdır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">5. Saklama yaklaşımı</h2>
              <p className="mt-3 leading-8">
                Demo ve iletişim talepleri, talebe yanıt verme ve iş kayıtlarını sürdürme amacıyla makul
                süre boyunca saklanabilir. Mobil uygulama verileri, ilgili kurumun kullanım senaryosu,
                hizmet sözleşmesi ve kurum politikalarına göre değişebilir. Teknik kayıtlar, güvenlik ve
                hata analizi için sınırlı sürelerle tutulabilir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">6. Haklar ve talepler</h2>
              <p className="mt-3 leading-8">
                Uygulanabilir mevzuata göre erişim, düzeltme, silme, işleme itirazı ve bilgi talebi
                haklarınız bulunabilir. Bu tür talepler için aşağıdaki iletişim kanallarını
                kullanabilirsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">7. Güvenlik yaklaşımı</h2>
              <ul className="mt-3 space-y-3 leading-8">
                {privacy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 leading-8">
                Veri yönetimi ve erişim modeli, kurum politikalarına göre yapılandırılabilir yaklaşım
                esas alınarak kurgulanır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">8. Çocukların gizliliği</h2>
              <p className="mt-3 leading-8">
                Medya Zekâsı kurumsal kullanıma yöneliktir ve çocuklara yönelik bir hizmet olarak
                tasarlanmamıştır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">9. İlgili politikalar</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/cerez-politikasi"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-[var(--brand-copper)] hover:text-[var(--brand-copper)]"
                >
                  Çerez Politikası
                </Link>
                <Link
                  href="/mobil-izinler"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-[var(--brand-copper)] hover:text-[var(--brand-copper)]"
                >
                  Mobil İzinler
                </Link>
                <Link
                  href="/yasal-bilgiler"
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-[var(--brand-copper)] hover:text-[var(--brand-copper)]"
                >
                  Yasal Bilgiler
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">10. İletişim</h2>
              <p className="mt-3 leading-8">
                Gizlilik, destek veya şikayet konuları için geliştirici ile aşağıdaki kanallardan
                iletişime geçebilirsiniz.
              </p>
              <div className="mt-4 space-y-2">
                <p>Geliştirici: {developer.name}</p>
                <p>
                  E-posta:{" "}
                  <a href={`mailto:${developer.email}`} className="font-medium text-[var(--brand-copper)]">
                    {developer.email}
                  </a>
                </p>
                <p>
                  Telefon:{" "}
                  <a href={developer.phoneHref} className="font-medium text-[var(--brand-copper)]">
                    {developer.phone}
                  </a>
                </p>
                <p>Adres: {developer.address}</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

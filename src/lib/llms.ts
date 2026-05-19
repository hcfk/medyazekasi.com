import { buildAbsoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type LlmsLink = {
  name: string;
  path: string;
  description: string;
};

const docsLinks: LlmsLink[] = [
  {
    name: "Ana sayfa",
    path: "/",
    description:
      "Kurumsal medya yönetimi, transkripsiyon, deşifre, altyazı ve aranabilir arşiv yaklaşımının genel özeti.",
  },
  {
    name: "Platform",
    path: "/platform",
    description:
      "Web paneli, mobil uygulama ve yapay zekâ işleme katmanlarının nasıl birlikte çalıştığını açıklar.",
  },
  {
    name: "Özellikler",
    path: "/ozellikler",
    description:
      "Transkripsiyon, özetleme, altyazı, bildirimler, kuyruk yönetimi ve arşivleme özelliklerinin özeti.",
  },
  {
    name: "Mobil Uygulama",
    path: "/mobil-uygulama",
    description:
      "Android ve iOS uygulamalarının saha yükleme, iş takibi ve transkript erişimi akışlarını açıklar.",
  },
];

const solutionsLinks: LlmsLink[] = [
  {
    name: "Kamu Kurumları",
    path: "/kamu-kurumlari",
    description:
      "Toplantı, kurul, eğitim ve saha kayıtları için kamu kurumları kullanım senaryoları.",
  },
  {
    name: "Belediyeler",
    path: "/belediyeler",
    description:
      "Meclis toplantıları, başkan konuşmaları, canlı yayınlar ve basın-yayın süreçleri için belediye odaklı çözüm sayfası.",
  },
  {
    name: "Basın-Yayın Birimleri",
    path: "/basin-yayin",
    description:
      "Röportaj, açıklama, yayın ve etkinlik kayıtlarını yazıya, özete ve yayıma hazır içeriğe dönüştürme akışı.",
  },
  {
    name: "Güvenlik",
    path: "/guvenlik",
    description:
      "Rol bazlı erişim, kontrollü arşiv ve kurum politikalarına göre yapılandırılabilir veri yönetimi yaklaşımı.",
  },
  {
    name: "Demo",
    path: "/demo",
    description:
      "Kurum türü, iletişim bilgileri ve ihtiyaç mesajı ile demo talep formu.",
  },
];

const insightLinks: LlmsLink[] = [
  {
    name: "Basın bülteni için transkripsiyon sistemi nasıl kullanılır?",
    path: "/insights/basin-bulteni-transkripsiyon",
    description:
      "Basın açıklamaları ve röportaj kayıtlarından daha hızlı bülten üretimi için rehber.",
  },
  {
    name: "Belediye basın-yayın ekipleri için içerik otomasyonu nasıl hız kazandırır?",
    path: "/insights/belediye-basinyayin-otomasyon",
    description:
      "Belediye etkinlikleri, başkan konuşmaları ve yayın kayıtlarının içerik akışına dönüşmesi.",
  },
  {
    name: "Belediye Meclis Tutanağı Nasıl Hazırlanır? Yasal Süreç ve Otomatik Transkripsiyon",
    path: "/insights/belediye-meclis-tutanagi",
    description:
      "Meclis toplantı kayıtlarının yazıya dökülmesi ve otomatik transkripsiyonun kullanım alanları.",
  },
  {
    name: "Canlı Yayın Transkripsiyon: Meclis ve Etkinlik Yayınlarını Metne ve Arşive Dönüştürmek",
    path: "/insights/canli-yayin-transkripsiyon",
    description:
      "Canlı yayın kayıtlarını metne, özete ve kurumsal arşive dönüştürme rehberi.",
  },
  {
    name: "Dijital Çağda Kamu İletişimi: Medya Zekâsı ile Ham Veriden Kurumsal Hafızaya",
    path: "/insights/dijital-cagda-kamu-iletisimi-medya-zekasi",
    description:
      "Kamu iletişimi, basın-yayın operasyonları ve kurumsal hafıza için Medya Zekâsı yaklaşımını açıklayan genel bakış yazısı.",
  },
  {
    name: "Kamu kurumları için deşifre ve transkripsiyon rehberi",
    path: "/insights/desifre-transkripsiyon-kamu-veri-guvenligi",
    description:
      "Deşifre, transkripsiyon, sesten metne, videodan metne ve konuşmacı tanıma süreçlerinin kurumsal kullanımı.",
  },
  {
    name: "Kamu kurumlarında kurumsal hafıza nasıl güçlendirilir?",
    path: "/insights/kamu-kurumsal-hafiza",
    description:
      "Toplantı, eğitim ve saha kayıtlarını aranabilir bilgiye dönüştürme yaklaşımı.",
  },
  {
    name: "Kamu kurumlarında video içerikler için altyazı neden önemlidir?",
    path: "/insights/kamu-video-altyazi-zorunlulugu",
    description:
      "Erişilebilirlik, SEO ve yeniden kullanım açısından altyazı üretiminin rolü.",
  },
  {
    name: "Kurumsal medya arşivi neden yalnızca depolama değildir?",
    path: "/insights/kurumsal-medya-arsivi",
    description:
      "Arşiv, arama, sınıflandırma ve yeniden kullanım odaklı kurumsal medya arşivi yaklaşımı.",
  },
  {
    name: "Medya Zekâsı: Manuel Kaostan Yapay Zekâ Destekli Medya Düzenine Geçiş Rehberi",
    path: "/insights/manuel-kaostan-yapay-zeka-destekli-medya-duzenine-gecis",
    description:
      "Dağınık medya akışından merkezi, yapay zekâ destekli medya yönetimi düzenine geçişi anlatan rehber.",
  },
  {
    name: "Saha ekipleri için mobil ses kaydı ve merkeze aktarım akışı",
    path: "/insights/saha-ekipleri-mobil-ses-kaydi",
    description:
      "Sahadan mobil kayıt alma, merkeze gönderme ve transkripsiyon akışını açıklar.",
  },
  {
    name: "Toplantı kaydını yazıya çevirme ve transkripsiyon sistemi seçimi",
    path: "/insights/toplanti-kaydi-transkripsiyon",
    description:
      "Toplantı transkripsiyonu için süreç, seçim kriterleri ve kurumsal kullanım rehberi.",
  },
  {
    name: "Üniversite ders kayıtları için transkripsiyon ve erişilebilirlik",
    path: "/insights/universite-ders-kaydi-transkripsiyon",
    description:
      "Ders kayıtlarını metne, altyazıya ve aranabilir eğitim içeriğine dönüştürme yaklaşımı.",
  },
  {
    name: "Yapay zekâ ile özetleme kurumsal içerik akışını nasıl hızlandırır?",
    path: "/insights/yapay-zeka-ile-ozetleme",
    description:
      "Uzun konuşma ve toplantı kayıtlarından yönetici özeti ve içerik taslağı üretimi.",
  },
];

const legalLinks: LlmsLink[] = [
  {
    name: "Gizlilik Politikası",
    path: "/gizlilik-politikasi",
    description: "Web ve mobil ürün için veri işleme, amaçlar ve iletişim bilgileri.",
  },
  {
    name: "Çerez Politikası",
    path: "/cerez-politikasi",
    description: "Zorunlu ve analitik çerez kullanımı ile tercih yönetimi bilgileri.",
  },
  {
    name: "Yasal Bilgiler",
    path: "/yasal-bilgiler",
    description: "Geliştirici, iletişim ve kamuya açık yasal bilgiler.",
  },
  {
    name: "Mobil İzinler",
    path: "/mobil-izinler",
    description: "Android ve iOS tarafında istenen izinlerin amaçları.",
  },
  {
    name: "Yaş Sınıflandırması",
    path: "/yas-siniflandirmasi",
    description: "App Store ve Google Play için yaş derecelendirme açıklamaları.",
  },
];

function renderSection(title: string, links: LlmsLink[]) {
  const items = links
    .map((link) => `- [${link.name}](${buildAbsoluteUrl(link.path)}): ${link.description}`)
    .join("\n");

  return `## ${title}\n\n${items}`;
}

export function buildLlmsText() {
  return [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "Medya Zekâsı; kamu kurumları, belediyeler, basın-yayın birimleri, üniversiteler ve saha ekipleri için tasarlanmış web + mobil yapay zekâ destekli medya yönetim platformudur.",
    "",
    "Bu site; ürün kabiliyetlerini, çözüm sayfalarını, hukuki/politika içeriklerini ve SEO amaçlı insight makalelerini tek merkezde sunar. Öncelikli odak alanları transkripsiyon, deşifre, sesten metne, videodan metne, yapay zekâ ile özetleme, altyazı üretimi ve aranabilir kurumsal arşivdir.",
    "",
    renderSection("Docs", docsLinks),
    "",
    renderSection("Solutions", solutionsLinks),
    "",
    renderSection("Insights", insightLinks),
    "",
    renderSection("Optional", legalLinks),
    "",
  ].join("\n");
}

import { getAllInsights } from "@/lib/content";
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
    .map(
      (link) =>
        `- [${link.name}](${buildAbsoluteUrl(link.path)}): ${link.description}`,
    )
    .join("\n");

  return `## ${title}\n\n${items}`;
}

export function buildLlmsText() {
  const insights = getAllInsights();

  const insightSectionLinks: LlmsLink[] = insights.map((insight) => ({
    name: insight.title,
    path: `/insights/${insight.slug}`,
    description: insight.description,
  }));

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
    renderSection("Insights", insightSectionLinks),
    "",
    renderSection("Optional", legalLinks),
    "",
  ].join("\n");
}

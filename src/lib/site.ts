const defaultSiteUrl = "https://medyazekasi.com";

export const siteConfig = {
  name: "Medya Zekâsı",
  url: (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/+$/, ""),
  description:
    "Medya Zekâsı; kamu kurumları, belediyeler ve basın-yayın ekipleri için ses, video, toplantı ve saha kayıtlarını metne, özete, altyazıya ve aranabilir kurumsal arşive dönüştüren web ve mobil medya yönetim platformudur.",
  tagline: "Yapay Zekâ Destekli Kurumsal Medya Yönetim Platformu",
  email: "info@gokbilge.com",
  phone: "+90 312 440 18 20",
  phoneHref: "tel:+903124401820",
  address: "Mustafa Kemal Mah 2139 Cad IBK Plaza No:2 Çankaya Ankara",
  logoPath: "/medyazekasi-logo.svg",
  ogImagePath: "/og-image.png",
  developer: {
    name: "Gokbilge",
    website: "https://gokbilge.com",
  },
};

export const navigation = [
  { title: "Platform", href: "/platform" },
  { title: "Mobil Uygulama", href: "/mobil-uygulama" },
  {
    title: "Çözümler",
    href: "#",
    children: [
      { title: "Kamu Kurumları", href: "/kamu-kurumlari" },
      { title: "Belediyeler", href: "/belediyeler" },
      { title: "Basın-Yayın Birimleri", href: "/basin-yayin" },
    ],
  },
  { title: "Özellikler", href: "/ozellikler" },
  { title: "Güvenlik", href: "/guvenlik" },
  { title: "Insights", href: "/insights" },
];

export const trustItems = [
  "Web + Mobil",
  "Kurum İçi Veri Kontrolü",
  "Rol Bazlı Erişim",
  "Transkripsiyon",
  "Özetleme",
  "Altyazı",
  "Aranabilir Arşiv",
];

export const problemPoints = [
  "Toplantılar çoğu zaman yalnızca ses veya video dosyası olarak kalır.",
  "Konuşma ve açıklama kayıtları yeniden kullanılabilir içeriğe dönüşmez.",
  "Basın ekipleri haber, özet ve sosyal medya metinleri için zaman kaybeder.",
  "Saha kayıtları farklı kanallardan ve dağınık biçimde gelir.",
  "Hassas dosyalar kontrolsüz dış araçlara yüklenebilir.",
  "Kurumsal arşiv aranabilir bilgiye dönüşmediği için geçmiş içerikler kaybolur.",
];

export const solutionSteps = [
  {
    title: "Topla",
    description:
      "Web paneli, mobil uygulama, YouTube bağlantısı ve saha kaynaklarından kayıtları tek merkezde topla.",
  },
  {
    title: "İşle",
    description:
      "Kuyruk tabanlı akış ile medya dosyalarını transkripsiyon, özet ve altyazı üretimine hazırla.",
  },
  {
    title: "Düzenle",
    description:
      "Transkriptleri gözden geçir, yapay zekâ düzeltmelerini kullan ve çıktılarını kurumsal kullanım için netleştir.",
  },
  {
    title: "Arşivle",
    description:
      "Çıktıları rol bazlı erişim ve aranabilir kurum hafızası ile uzun vadeli bilgi varlığına dönüştür.",
  },
];

export const workflowSteps = [
  {
    title: "Saha kaydı mobilde oluşur",
    description:
      "Android ve iOS uygulamalarından ses, video veya YouTube bağlantıları hızlıca sisteme gönderilir.",
  },
  {
    title: "Merkez ekip web panelinden izler",
    description:
      "Kuyruk, bildirim ve iş durumları web yönetim panelinde gerçek operasyon görünürlüğü sağlar.",
  },
  {
    title: "Yapay zekâ içeriği işler",
    description:
      "Transkript, özet, altyazı ve DOCX/TXT/SRT/VTT çıktıları otomatik olarak hazırlanır.",
  },
  {
    title: "Editör ve yönetim kullanır",
    description:
      "Basın ekipleri, özel kalem ve ilgili birimler çıktıları düzenler, paylaşır ve arşive bağlar.",
  },
];

export const features = [
  {
    title: "Medya Toplama",
    description:
      "Web, mobil, YouTube ve saha kaynaklarından medya kayıtlarını merkezi akışta toplar.",
  },
  {
    title: "Kuyruk Tabanlı İşleme",
    description:
      "İşlerin hangi aşamada olduğunu görünür kılan operasyon odaklı işleme akışı sunar.",
  },
  {
    title: "Transkripsiyon",
    description:
      "Ses ve video kayıtlarını yazıya çevirerek toplantı ve konuşmaları aranabilir hale getirir.",
  },
  {
    title: "Yapay Zekâ ile Özetleme",
    description:
      "Uzun kayıtları yönetici özeti, basın özeti ve içerik taslağına dönüştürür.",
  },
  {
    title: "Altyazı Üretimi",
    description:
      "Video içerikleri için SRT ve VTT tabanlı altyazı çıktıları üretebilir.",
  },
  {
    title: "DOCX / TXT / SRT / VTT Çıktıları",
    description:
      "Kurum içi paylaşım ve yayın akışları için çoklu çıktı formatı desteği sağlar.",
  },
  {
    title: "Rol Bazlı Yetkilendirme",
    description:
      "Kullanıcı, bölüm ve görev bazlı erişim ayrıştırması ile kontrollü kullanım sunar.",
  },
  {
    title: "Bildirimler",
    description:
      "Kuyruktaki işlerin ilerleyişini ilgili kullanıcılara ve ekip yöneticilerine bildirir.",
  },
  {
    title: "İstatistikler",
    description:
      "Operasyon yükü, tamamlanan işler, hatalar ve kullanım eğilimleri için görünürlük sağlar.",
  },
  {
    title: "Aranabilir Arşiv",
    description:
      "Kayıtları yalnızca saklamak yerine, kurumsal hafızaya dönüşen aranabilir içerik yapısına taşır.",
  },
];

export const audiences = [
  {
    title: "Belediyeler",
    href: "/belediyeler",
    description:
      "Başkanlık, meclis, basın-yayın ve saha ekipleri için dağınık medya süreçlerini tek akışta toplar.",
  },
  {
    title: "Kamu Kurumları",
    href: "/kamu-kurumlari",
    description:
      "Toplantı, eğitim, kurul ve bilgilendirme kayıtlarını kurumsal hafızaya dönüştürür.",
  },
  {
    title: "Basın-Yayın Birimleri",
    href: "/basin-yayin",
    description:
      "Konuşmaları daha hızlı habere, özete ve sosyal medya içeriğine dönüştürmeye yardımcı olur.",
  },
  {
    title: "Özel Kalem ve Üst Yönetim",
    href: "/kamu-kurumlari",
    description:
      "Yönetici konuşmalarını, ziyaret kayıtlarını ve kritik toplantıları daha erişilebilir hale getirir.",
  },
  {
    title: "Eğitim ve Seminer Birimleri",
    href: "/kamu-kurumlari",
    description:
      "Eğitim içeriklerini metne, özet notlara ve tekrar kullanılabilir arşive dönüştürür.",
  },
  {
    title: "Saha Ekipleri",
    href: "/mobil-uygulama",
    description:
      "Mobil uygulama ile sahadan doğrudan ses, video ve bağlantı aktarımı sağlar.",
  },
];

export const mobileFeatures = [
  "Ses/video yükleme",
  "Uygulama içi kayıt",
  "YouTube bağlantısı gönderme",
  "İş durumunu takip etme",
  "Bildirim alma",
  "Transkript görüntüleme",
];

export const securityHighlights = [
  "Rol bazlı erişim ve bölüm ayrıştırması",
  "Kurum politikalarına göre yapılandırılabilir veri yönetimi",
  "Kontrollü arşiv ve denetlenebilir iş akışı",
  "Kurum içinde konumlandırılabilir operasyon yaklaşımı",
  "Yetkili kullanıcılar için operasyon görünürlüğü",
  "Hassas medya kayıtları için dış araç bağımlılığını azaltan süreç kurgusu",
];

export const contactCards = [
  {
    title: "Demo ve Ürün Bilgisi",
    description:
      "Kurumunuza uygun kullanım senaryolarını ve demo akışını birlikte değerlendirebiliriz.",
    href: "/demo",
    label: "Demo Talep Et",
  },
  {
    title: "Genel İletişim",
    description:
      "Ürün, yayın, iş birliği veya teknik yönlendirme için iletişim kanallarını kullanabilirsiniz.",
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
  },
];

export const pagePaths = [
  "/",
  "/platform",
  "/mobil-uygulama",
  "/kamu-kurumlari",
  "/belediyeler",
  "/basin-yayin",
  "/ozellikler",
  "/guvenlik",
  "/demo",
  "/iletisim",
  "/insights",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
  "/yasal-bilgiler",
  "/magaza-metinleri",
];

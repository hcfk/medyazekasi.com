export const mobileReleaseInfo = {
  appName: "Medya Zekâsı",
  version: "0.1.0",
  androidPackage: "com.medyazekasi.mobile",
  iosBundle: "com.medyazekasi.mobile",
  componentName: "MediaZekasiMobile",
  apiBaseUrl: "https://app.medyazekasi.com/api/v1",
  developer: {
    name: "Gokbilge",
    website: "https://gokbilge.com",
    email: "info@gokbilge.com",
    phone: "+90 312 440 18 20",
    phoneHref: "tel:+903124401820",
    address: "Mustafa Kemal Mah 2139 Cad IBK Plaza No:2 Çankaya Ankara",
  },
  highlights: [
    "Kullanıcı adı ve şifre ile giriş",
    "Ses ve video yükleme",
    "Uygulama içi ses kaydı",
    "YouTube linki ile iş oluşturma",
    "Başka uygulamalardan paylaşım akışı",
    "Transkript görüntüleme, kopyalama ve düzenleme",
    "Kredi bakiyesi ve hesap bilgisi",
    "Tema seçimi ve şifre değiştirme",
  ],
  screens: ["Giriş", "Ana Sayfa", "İşlerim", "Yeni İş", "İş Detayı", "Ayarlar", "Şifre Değiştir"],
  permissions: {
    android: [
      {
        name: "İnternet erişimi",
        purpose: "Sunucu API çağrıları, oturum işlemleri, medya yükleme ve iş durumu takibi için gereklidir.",
      },
      {
        name: "Mikrofon",
        purpose: "Kullanıcı uygulama içinden yeni ses kaydı başlatmak istediğinde kullanılır.",
      },
      {
        name: "Ses ve video dosyalarına erişim",
        purpose: "Kullanıcının cihazından seçtiği medya dosyalarını kurumsal kuyruğa yüklemek için gerekir.",
      },
      {
        name: "Paylaşım entegrasyonu",
        purpose: "Android paylaş menüsünden ses, video veya bağlantıların uygulamaya aktarılmasını sağlar.",
      },
    ],
    ios: [
      {
        name: "Mikrofon erişimi",
        purpose: "Uygulama içinden doğrudan ses kaydı başlatma akışında kullanılır.",
      },
      {
        name: "Fotoğraf arşivi / dosya seçimi",
        purpose: "Kullanıcının seçtiği ses ve video içeriklerini sisteme göndermesi için gerekir.",
      },
      {
        name: "Paylaşım akışı",
        purpose: "Başka uygulamalardan paylaşılan medya ve bağlantıların Medya Zekâsı iş akışına alınmasını sağlar.",
      },
      {
        name: "Güvenli ağ erişimi",
        purpose: "App Transport Security uyumlu biçimde şifreli ağ trafiği üzerinden API erişimi için kullanılır.",
      },
    ],
  },
  privacy: [
    "Uygulama reklam takibi yapmaz.",
    "Analitik ve izleme çerezleri mobil uygulama içinde kullanılmaz.",
    "JWT token yalnızca güvenli depolama alanında tutulur.",
    "Mobil istemci yalnızca kullanıcının yetkili olduğu işlere erişir.",
    "Veri işleme akışı kurum politikalarına göre yapılandırılabilir.",
  ],
  ageRating: {
    appStore: "4+",
    googlePlay: "3+",
    targetAudience: "Kurumsal kullanıcılar, kamu kurumları, belediyeler ve basın-yayın ekipleri",
    statement:
      "Uygulama çocuklara yönelik değildir; kamuya açık sosyal ağ, kumar, yetişkin içerik veya reklam takibi içermez.",
    questionnaire: [
      "Kamuya açık kullanıcı üretimli içerik akışı bulunmaz.",
      "Sınırsız web gezintisi sunulmaz.",
      "Şiddet, cinsellik, korku, kumar, alkol veya uyuşturucu içeriği hedeflenmez.",
      "Uygulama içi satın alma ve reklam altyapısı yoktur.",
      "Kurumsal oturum ve kontrollü medya işleme akışı odaklıdır.",
    ],
  },
  storeCopy: {
    subtitle: "Kurumsal medya kayıtlarını mobile taşıyan iş akışınız",
    shortDescription:
      "Ses, video ve YouTube kayıtlarını gönderin; işlerinizi mobilde takip edin.",
    fullDescription: [
      "Medya Zekâsı, kurum içi medya işlerini mobil cihazlardan yönetmek isteyen ekipler için geliştirilmiş resmi mobil istemcidir.",
      "Kullanıcılar mevcut kurum hesaplarıyla giriş yapabilir, ses ve video dosyası yükleyebilir, uygulama içinde ses kaydı alıp iş oluşturabilir, YouTube linki gönderebilir ve kendi işlerinin durumunu takip edebilir.",
      "Tamamlanan işlerde transkript metni görüntülenebilir, kopyalanabilir ve düzenlenebilir. Ayarlar ekranında kredi bilgisi, tema seçimi ve şifre değiştirme gibi temel hesap işlemleri yer alır.",
      "Uygulama özellikle belediyeler, basın-yayın ekipleri, kamu kurumları ve saha ekipleri için hızlı iş oluşturma ve kurumsal hafıza akışına mobil erişim sağlar.",
    ],
    keywords: [
      "medya zekâsı",
      "transkripsiyon",
      "kurumsal hafıza",
      "belediye",
      "kamu",
      "ses kaydı",
      "video yükleme",
      "youtube'dan iş oluşturma",
    ],
    supportUrl: "https://medyazekasi.com/gizlilik-politikasi",
    marketingUrl: "https://medyazekasi.com/mobil-uygulama",
  },
};

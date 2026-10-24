# Google ölçüm ve arama bağlantıları

Mevcut GA4 hedefi `G-WN1L5GERHH` olarak korunur. Yeni bir mülk veya veri akışı açmak geçmiş veriyi taşımadığı için mevcut mülk kullanılmalıdır.

## Tek ölçüm yükleyicisi

- `NEXT_PUBLIC_GTM_ID` boşsa doğrudan GA4 çalışır.
- Yayımlanmış bir `GTM-...` kimliği tanımlandığında sadece GTM yüklenir; ayrıca `gtag.js` yüklenmez.
- Her iki durumda da analitik izni verilmeden Google ölçüm betiği yüklenmez. Consent Mode v2 sinyalleri başlangıçta reddedilir; yalnız analitik depolama kullanıcının seçimine göre açılır.
- İzin geri alındığında Google çerezleri temizlenir, GA4 devre dışı bırakılır ve önceden yüklenmiş ölçüm kitaplığını durdurmak için sayfa yenilenir.
- Sayfa görüntülemeleri uygulama tarafından üretilir. GTM Google etiketinde `send_page_view=false` kullanılmalı; `page_view` özel olayı için tek bir GA4 olay etiketi tanımlanmalıdır. Aynı olay için ayrıca History Change tetikleyicisi kurulmaz. GA4 veri akışındaki otomatik tarayıcı geçmişi ölçümü de kapalı olmalıdır.
- Uygulama olayları GTM modunda `{event, ...params}` olarak dataLayer'a iletilir. İzin yokken olaylar gönderilmez ve sonradan tekrar oynatılmaz.

Konteyner oluşturulup doğru hedefle yayımlanmadan `NEXT_PUBLIC_GTM_ID` doldurulmaz. Bu doküman, Google hesabındaki konteynerin kurulduğu veya yayımlandığı iddiası değildir.

## Search Console ve sitemap

`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` yalnız HTML meta doğrulama değerini kabul eder. Mevcut DNS/domain sahiplik doğrulaması için ek meta zorunlu değildir.

`/sitemap.xml` build sırasında statik üretilir. Dağıtımda MDX içeriğine ihtiyaç duyan rotalar için `outputFileTracingIncludes` açıkça tanımlıdır. Böylece çalışma dizini veya eksik içerik dosyasından kaynaklanan sitemap hatası önlenir. Canlıda 500 gözlenmiş olması tek başına hatanın sunucu tarafındaki kesin nedenini kanıtlamaz; dağıtım sonrasında HTTP 200 ve XML içeriği ayrıca doğrulanmalıdır.

Hostinger'da ortam değişikliği sonrasında yeniden build/deploy gerekir. Google OAuth dosyaları, erişim token'ları ve hesap envanteri web deposuna veya hosting ortamına konmaz.

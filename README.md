# medyazekasi.com

Medya Zekâsı için Next.js App Router tabanlı, SEO odaklı kurumsal ürün sitesi.

## Teknoloji

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui tabanlı temel UI bileşenleri
- lucide-react
- Framer Motion
- MDX tabanlı insights içerikleri

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Ortam Değişkenleri

```bash
NEXT_PUBLIC_SITE_URL=https://medyazekasi.com
NEXT_PUBLIC_GA_ID=G-WN1L5GERHH
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
DEMO_WEBHOOK_URL=
```

Notlar:

- `NEXT_PUBLIC_SITE_URL` canonical URL, Open Graph, sitemap ve robots üretiminde kullanılır.
- `NEXT_PUBLIC_GA_ID` public GA4 Measurement ID içindir.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` Search Console meta tag doğrulaması için opsiyoneldir.
- Demo formu için secrets gerekiyorsa yalnızca server-side environment variable kullanılmalıdır.

## Önemli Rotalar

- `/`
- `/platform`
- `/mobil-uygulama`
- `/kamu-kurumlari`
- `/belediyeler`
- `/basin-yayin`
- `/ozellikler`
- `/guvenlik`
- `/demo`
- `/iletisim`
- `/insights`

## SEO ve İçerik

- Sayfa metadata yapısı `src/lib/seo.ts` içinde merkezî olarak oluşturulur.
- Site navigasyonu ve kurumsal içerik blokları `src/lib/site.ts` içinde tutulur.
- Insights içerikleri `content/insights/*.mdx` altında yer alır.
- `robots.txt` ve `sitemap.xml` App Router metadata route olarak üretilir.

## Demo Talep Formu

- Sayfa: `/demo`
- API route: `/api/demo-request`

Notlar:

- Route sunucu tarafında doğrulama yapar.
- Google Analytics’e yalnızca generik `demo_request_submit` olayı gönderilir.
- Kişisel veriler analytics tarafına gönderilmez.
- E-posta sağlayıcısı veya CRM entegrasyonu için route içinde TODO notu bırakılmıştır.

## Google Tools Setup

### A) Google Analytics 4

- Measurement ID: `G-WN1L5GERHH`
- Hostinger environment variable:

```bash
NEXT_PUBLIC_GA_ID=G-WN1L5GERHH
```

- Deploy sonrası test:
  `Google Analytics > Reports > Realtime`

### B) Google Search Console

- Önerilen doğrulama yöntemi: Hostinger üzerinde DNS TXT kaydı
- Alternatif meta tag yöntemi:

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

- Doğrulama sonrası sitemap gönderimi:
  `https://medyazekasi.com/sitemap.xml`

### C) Test URL'leri

- `https://medyazekasi.com/robots.txt`
- `https://medyazekasi.com/sitemap.xml`

### D) SEO test araçları

- Google Search Console URL Inspection
- PageSpeed Insights
- Rich Results Test

## Hostinger Deployment

Hostinger Next.js hosting ile uyumludur.

Önerilen ayarlar:

- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start`
- `package.json` start script: `next start -p 3000`
- Node sürümü: `20+`

Not:

- Hostinger beklentisine göre uygulama `3000` portundan açılır.
- Next.js production sunucusu Hostinger tarafında `process.env.PORT` veya `3000` ile eşlenir.

GitHub senkron akışı:

1. Repo’yu GitHub’a gönderin.
2. Hostinger panelinde GitHub bağlantısını açın.
3. Bu repo’yu seçin.
4. Build ve start komutlarını yukarıdaki gibi tanımlayın.
5. Environment variable alanına gerekli public değişkenleri ekleyin.
6. Domain bağlantısını `medyazekasi.com` ve `www.medyazekasi.com` için yönetin.

## Kontrol

Yerel doğrulama:

```bash
npm run lint
npm run build
```

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

Şu anda demo formu placeholder API route kullanır ve zorunlu environment variable yoktur.

İleride e-posta veya CRM entegrasyonu bağlanacaksa örnek yapı:

```bash
DEMO_REQUEST_WEBHOOK_URL=
DEMO_REQUEST_API_KEY=
```

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
- Secrets kullanılmaz.
- E-posta sağlayıcısı veya CRM entegrasyonu için route içinde TODO notu bırakılmıştır.

## Hostinger Deployment

Hostinger Next.js hosting ile uyumludur.

Önerilen ayarlar:

- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start`
- Node sürümü: `20+`

GitHub senkron akışı:

1. Repo’yu GitHub’a gönderin.
2. Hostinger panelinde GitHub bağlantısını açın.
3. Bu repo’yu seçin.
4. Build ve start komutlarını yukarıdaki gibi tanımlayın.
5. Domain bağlantısını `medyazekasi.com` ve `www.medyazekasi.com` için yönetin.

## Kontrol

Yerel doğrulama:

```bash
npm run lint
npm run build
```

# medyazekasi.com

Hostinger Next.js hosting icin hazirlanmis, GitHub senkronlu Medya Zekasi pazarlama sitesi.

## Teknoloji

- Next.js 16
- Tailwind CSS 4
- shadcn/ui
- Framer Motion
- MDX tabanli icerik akisi
- Next.js API Route ile demo talep formu

## Gelistirme

```bash
npm install
npm run dev
```

## Demo formu

`/api/demo` route'u form verisini dogrular. `DEMO_WEBHOOK_URL` tanimliysa payload'i bu adrese POST eder. Tanimli degilse basarili yanit doner; boylece Hostinger ortamina webhook eklenene kadar form akisi bozulmaz.

`.env.local` icine:

```bash
DEMO_WEBHOOK_URL=https://ornek-endpoint.com/webhooks/demo
```

## Icerik yonetimi

MDX icerikleri `content/insights/*.mdx` altinda tutulur. Ana sayfadaki "Kaynaklar" bolumu bu dosyalardan otomatik uretilir.

## GitHub ve Hostinger

1. Bu klasoru yeni bir GitHub reposuna gonderin.
2. Hostinger panelinde `Add website` > `Deploy with GitHub` akisini secin.
3. Reponuzu baglayin ve framework olarak `Next.js` secin.
4. Build command: `npm run build`
5. Start command: `npm run start`
6. Domain olarak `medyazekasi.com` ve `www.medyazekasi.com` baglantilarini tanimlayin.

## DNS notu

Hostinger paneli hangi A/CNAME kayitlarini verdiyse alan adinizin DNS yonetiminde aynen uygulayin. Hostinger tarafinda DNS de yonetiliyorsa ekstra saglayici gerekmeyebilir.

import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import {
  buildOrganizationJsonLd,
  buildSoftwareJsonLd,
  buildWebsiteJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Medya Zekâsı | Yapay Zekâ Destekli Kurumsal Medya Yönetim Platformu",
  description: siteConfig.description,
  keywords: [
    "medya yönetim platformu",
    "yapay zekâ destekli medya yönetimi",
    "kurumsal medya arşivi",
    "ses kaydını yazıya çevirme",
    "video kaydını yazıya çevirme",
    "toplantı transkripsiyon sistemi",
    "belediyeler için medya yönetimi",
    "kamu kurumları için medya yönetimi",
    "basın yayın yönetim sistemi",
    "otomatik altyazı oluşturma",
    "yapay zekâ ile özetleme",
    "kurumsal hafıza platformu",
    "mobil medya yönetimi",
  ],
  openGraph: {
    title: "Medya Zekâsı | Yapay Zekâ Destekli Kurumsal Medya Yönetim Platformu",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImagePath}`,
        width: 1200,
        height: 630,
        alt: "Medya Zekâsı açık grafik görseli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medya Zekâsı | Yapay Zekâ Destekli Kurumsal Medya Yönetim Platformu",
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImagePath}`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${manrope.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <GoogleAnalytics />
        <SeoJsonLd
          data={[
            buildOrganizationJsonLd(),
            buildWebsiteJsonLd(),
            buildSoftwareJsonLd(),
          ]}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <CookieConsentBanner />
      </body>
    </html>
  );
}

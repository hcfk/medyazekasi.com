import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
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
  metadataBase: new URL("https://medyazekasi.com"),
  title: {
    default: "Medya Zekâsı",
    template: "%s | Medya Zekâsı",
  },
  description:
    "Toplantı, yayın ve saha kayıtlarını metne, özete ve kurumsal hafızaya dönüştüren medya yönetim platformu.",
  keywords: [
    "Medya Zekâsı",
    "kurumsal hafıza",
    "transkripsiyon",
    "belediye yazılımı",
    "kamu kurumu yazılımı",
    "medya yönetim platformu",
  ],
  openGraph: {
    title: "Medya Zekâsı",
    description:
      "Kamu kurumları ve belediyeler için medya, transkripsiyon ve kurumsal hafıza platformu.",
    url: "https://medyazekasi.com",
    siteName: "Medya Zekasi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medya Zekâsı",
    description:
      "Kayıtları dosya olmaktan çıkarıp aranabilir kurumsal bilgiye dönüştürün.",
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
        {children}
      </body>
    </html>
  );
}

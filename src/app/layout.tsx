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
    default: "Medya Zekasi",
    template: "%s | Medya Zekasi",
  },
  description:
    "Toplanti, yayin ve saha kayitlarini metne, ozete ve kurumsal hafizaya donusturen medya yonetim platformu.",
  keywords: [
    "Medya Zekasi",
    "kurumsal hafiza",
    "transkripsiyon",
    "belediye yazilimi",
    "kamu kurumu yazilimi",
    "medya yonetim platformu",
  ],
  openGraph: {
    title: "Medya Zekasi",
    description:
      "Kamu kurumlari ve belediyeler icin medya, transkripsiyon ve kurumsal hafiza platformu.",
    url: "https://medyazekasi.com",
    siteName: "Medya Zekasi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medya Zekasi",
    description:
      "Kayitlari dosya olmaktan cikarip aranabilir kurumsal bilgiye donusturun.",
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

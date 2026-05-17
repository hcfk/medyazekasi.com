import { NextResponse } from "next/server";
import { z } from "zod";

const demoRequestSchema = z.object({
  fullName: z.string().min(3),
  institution: z.string().min(2),
  email: z.email(),
  phone: z.string().min(10),
  institutionType: z.enum([
    "Belediye",
    "Kamu Kurumu",
    "Üniversite",
    "Basın-Yayın Birimi",
    "Özel Şirket",
    "Diğer",
  ]),
  message: z.string().min(20),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = demoRequestSchema.parse(body);

    // TODO: Burada kurumsal e-posta sağlayıcısı, CRM veya webhook entegrasyonu bağlanacak.
    // TODO: Üretimde secrets yalnızca environment variable üzerinden okunmalı.
    void payload;

    return NextResponse.json({
      message:
        "Talebiniz alındı. Kurumunuza uygun demo akışı için ekibimiz sizinle iletişime geçecek.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Lütfen form alanlarını kontrol edin." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Beklenmeyen bir hata oluştu." },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import { z } from "zod";

const demoSchema = z.object({
  fullName: z.string().min(3),
  institution: z.string().min(2),
  email: z.email(),
  phone: z.string().min(10),
  notes: z.string().min(20),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = demoSchema.parse(body);

    const webhookUrl = process.env.DEMO_WEBHOOK_URL;

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          createdAt: new Date().toISOString(),
          source: "medyazekasi.com",
        }),
      });

      if (!response.ok) {
        return NextResponse.json(
          { message: "Webhook servisine iletim basarisiz oldu." },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({
      message:
        "Talebiniz alindi. Ekibimiz en kisa surede sizinle iletisime gececek.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Form verileri gecersiz." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Beklenmeyen bir hata olustu." },
      { status: 500 },
    );
  }
}

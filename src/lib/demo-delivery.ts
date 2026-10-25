import { NextResponse } from "next/server";
import { siteConfig } from "./site";

export async function deliverDemoRequest(payload: Record<string, unknown>) {
  const endpoint = process.env.DEMO_WEBHOOK_URL;
  if (!endpoint) {
    return NextResponse.json(
      {
        delivered: false,
        message: `Talebiniz henüz iletilemedi. Lütfen ${siteConfig.email} adresine doğrudan e-posta gönderin.`,
      },
      { status: 503 },
    );
  }

  try {
    if (new URL(endpoint).protocol !== "https:") throw new Error("HTTPS required");
    const token = process.env.DEMO_WEBHOOK_TOKEN;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        ...payload,
        createdAt: new Date().toISOString(),
        source: "medyazekasi.com",
      }),
      signal: AbortSignal.timeout(15000),
      redirect: "error",
    });
    if (!response.ok) throw new Error("Delivery rejected");
    return NextResponse.json({
      delivered: true,
      message: "Talebiniz iletildi. Ekibimiz sizinle iletişime geçecek.",
    });
  } catch {
    return NextResponse.json(
      {
        delivered: false,
        message: `Talebiniz iletilemedi. Yeniden deneyin veya ${siteConfig.email} adresine e-posta gönderin.`,
      },
      { status: 502 },
    );
  }
}

import { NextResponse } from "next/server";
import { z } from "zod";
import { deliverDemoRequest } from "@/lib/demo-delivery";

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

    return deliverDemoRequest(payload);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Form verileri geçersiz." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Beklenmeyen bir hata oluştu." },
      { status: 500 },
    );
  }
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const institutionTypes = [
  "Belediye",
  "Kamu Kurumu",
  "Üniversite",
  "Basın-Yayın Birimi",
  "Özel Şirket",
  "Diğer",
] as const;

const formSchema = z.object({
  fullName: z.string().min(3, "Ad soyad gerekli."),
  institution: z.string().min(2, "Kurum adı gerekli."),
  email: z.email("Geçerli bir e-posta girin."),
  phone: z.string().min(10, "Telefon numarası gerekli."),
  institutionType: z.enum(institutionTypes, {
    error: "Kurum türü seçin.",
  }),
  message: z.string().min(20, "İhtiyacınızı kısaca anlatın."),
});

type FormValues = z.infer<typeof formSchema>;

const fieldClassName =
  "h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-950 transition focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/10";

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      institution: "",
      email: "",
      phone: "",
      institutionType: "Belediye",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    setMessage("");

    const response = await fetch("/api/demo-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message ?? "Demo talebi gönderilemedi.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage(
      result.message ??
        "Talebiniz alındı. Ekibimiz sizinle en kısa sürede iletişime geçecek.",
    );
    trackEvent("demo_request_submit", { form_location: "demo_page" });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-5 rounded-[2rem] border border-white/60 bg-white/88 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.10)] backdrop-blur md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Ad Soyad" error={form.formState.errors.fullName?.message}>
          <Input id="fullName" className="h-11 rounded-xl" {...form.register("fullName")} />
        </Field>
        <Field label="Kurum" error={form.formState.errors.institution?.message}>
          <Input
            id="institution"
            className="h-11 rounded-xl"
            {...form.register("institution")}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="E-posta" error={form.formState.errors.email?.message}>
          <Input id="email" type="email" className="h-11 rounded-xl" {...form.register("email")} />
        </Field>
        <Field label="Telefon" error={form.formState.errors.phone?.message}>
          <Input id="phone" className="h-11 rounded-xl" {...form.register("phone")} />
        </Field>
      </div>

      <Field label="Kurum Türü" error={form.formState.errors.institutionType?.message}>
        <select id="institutionType" className={fieldClassName} {...form.register("institutionType")}>
          {institutionTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Mesaj" error={form.formState.errors.message?.message}>
        <Textarea
          id="message"
          rows={6}
          placeholder="Örnek: Belediye başkanı konuşmaları, meclis kayıtları, canlı yayınlar ve saha videoları için web + mobil medya yönetim akışı planlamak istiyoruz."
          className="rounded-xl"
          {...form.register("message")}
        />
      </Field>

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="h-12 rounded-full bg-[linear-gradient(135deg,#0f172a,#0f4c81,#10bcd4)] text-white hover:opacity-95"
        >
          {form.formState.isSubmitting ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <Send />
          )}
          Demo Talep Et
        </Button>
        {message ? (
          <p
            className={
              status === "success"
                ? "inline-flex items-center gap-2 text-sm text-emerald-700"
                : "text-sm text-red-600"
            }
          >
            {status === "success" ? <CheckCircle2 className="size-4" /> : null}
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      <p className="min-h-5 text-sm text-red-600">{error ?? ""}</p>
    </div>
  );
}

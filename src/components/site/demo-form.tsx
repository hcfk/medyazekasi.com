"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  fullName: z.string().min(3, "Ad soyad gerekli."),
  institution: z.string().min(2, "Kurum adi gerekli."),
  email: z.email("Gecerli bir e-posta girin."),
  phone: z.string().min(10, "Telefon numarasi gerekli."),
  notes: z.string().min(20, "İhtiyacınızı kısaca anlatın."),
});

type FormValues = z.infer<typeof formSchema>;

const defaultValues: FormValues = {
  fullName: "",
  institution: "",
  email: "",
  phone: "",
  notes: "",
};

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    setMessage("");

    const response = await fetch("/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(result.message ?? "Form gonderilemedi.");
      return;
    }

    form.reset(defaultValues);
    setStatus("success");
    setMessage(result.message ?? "Talebiniz alindi.");
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-5 rounded-[2rem] border border-white/50 bg-white/80 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.14)] backdrop-blur md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Ad soyad</Label>
          <Input id="fullName" {...form.register("fullName")} />
          <p className="text-sm text-red-600">
            {form.formState.errors.fullName?.message}
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="institution">Kurum</Label>
          <Input id="institution" {...form.register("institution")} />
          <p className="text-sm text-red-600">
            {form.formState.errors.institution?.message}
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">E-posta</Label>
          <Input id="email" type="email" {...form.register("email")} />
          <p className="text-sm text-red-600">
            {form.formState.errors.email?.message}
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" {...form.register("phone")} />
          <p className="text-sm text-red-600">
            {form.formState.errors.phone?.message}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">İhtiyaç</Label>
        <Textarea
          id="notes"
          rows={6}
          placeholder="Örnek: Belediye başkanı konuşmaları, meclis toplantıları ve basın açıklamaları için kurumsal hafıza akışı istiyoruz."
          {...form.register("notes")}
        />
        <p className="text-sm text-red-600">
          {form.formState.errors.notes?.message}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="h-12 rounded-full bg-[var(--brand-ink)] text-white hover:bg-[var(--brand-ink)]/90"
        >
          {form.formState.isSubmitting ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <Send />
          )}
          Demo Talebi Gönder
        </Button>
        {message ? (
          <p
            className={
              status === "success"
                ? "text-sm text-emerald-700"
                : "text-sm text-red-600"
            }
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

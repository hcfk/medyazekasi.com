import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#0b1324,#0f3557,#0f7da1,#10bcd4)] px-8 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] md:px-10 md:py-12">
      <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-12 h-40 w-40 rounded-full bg-cyan-300/16 blur-3xl" />
      <div className="relative">
        <p className="font-mono text-sm uppercase tracking-[0.26em] text-cyan-100/90">
          Kurumsal Demo Akışı
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-100/88">
          {description}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-white px-7 text-slate-950 shadow-[0_14px_35px_rgba(255,255,255,0.14)] hover:bg-slate-100",
            )}
          >
            {primaryLabel}
            <ArrowRight className="size-4" />
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full border-white/30 bg-white/10 px-7 text-white hover:bg-white/18 hover:text-white",
              )}
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

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
    <section className="rounded-[2rem] bg-[linear-gradient(135deg,#0f172a,#0f3557,#0ea5c6)] px-8 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-100/88">
        {description}
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href={primaryHref}
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full bg-white px-7 text-slate-950 hover:bg-slate-100",
          )}
        >
          {primaryLabel}
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
    </section>
  );
}

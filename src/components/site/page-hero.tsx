import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  badge?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  badge,
  children,
}: PageHeroProps) {
  return (
    <section className="rounded-[2rem] border border-white/60 bg-white/78 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
      {eyebrow ? (
        <p className="font-mono text-sm uppercase tracking-[0.26em] text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      {badge ? (
        <Badge className="mt-4 rounded-full bg-cyan-100 px-4 py-1 text-cyan-950 hover:bg-cyan-100">
          {badge}
        </Badge>
      ) : null}
      <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
        {description}
      </p>
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}

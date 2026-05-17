import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group relative h-full overflow-hidden rounded-[1.9rem] border border-white/70 bg-white/88 shadow-[0_20px_55px_rgba(20,33,61,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_75px_rgba(20,33,61,0.12)]">
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_48%)] opacity-80" />
      <CardContent className="relative p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
            <Icon className="size-6" />
          </div>
          <div className="rounded-full border border-slate-200 bg-white/90 p-2 text-slate-400 transition group-hover:border-cyan-200 group-hover:text-cyan-800">
            <ArrowUpRight className="size-4" />
          </div>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
        <p className="mt-3 leading-7 text-slate-700">{description}</p>
      </CardContent>
    </Card>
  );
}

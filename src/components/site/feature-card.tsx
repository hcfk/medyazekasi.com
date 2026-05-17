import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="h-full rounded-[1.8rem] border-white/70 bg-white/85 shadow-[0_20px_55px_rgba(20,33,61,0.08)]">
      <CardContent className="p-7">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-950">
          <Icon className="size-6" />
        </div>
        <h3 className="mt-5 text-2xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-3 leading-7 text-slate-700">{description}</p>
      </CardContent>
    </Card>
  );
}

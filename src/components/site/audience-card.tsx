import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type AudienceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function AudienceCard({ title, description, href }: AudienceCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full rounded-[1.8rem] border-slate-200/80 bg-white/85 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,33,61,0.10)]">
        <CardContent className="p-7">
          <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
          <p className="mt-3 leading-7 text-slate-700">{description}</p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800">
            Çözümü incele
            <ArrowRight className="size-4" />
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

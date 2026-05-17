import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type AudienceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function AudienceCard({ title, description, href }: AudienceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <Card className="group h-full overflow-hidden rounded-[1.9rem] border border-slate-200/80 bg-white/88 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(20,33,61,0.10)]">
        <CardContent className="relative p-7">
          <div className="absolute right-0 top-0 h-28 w-28 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_60%)]" />
          <div className="relative">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
              <Building2 className="size-5" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{title}</h3>
            <p className="mt-3 leading-7 text-slate-700">{description}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800">
              Çözümü incele
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

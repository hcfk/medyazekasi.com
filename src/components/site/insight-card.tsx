import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { InsightMeta } from "@/lib/content";

export function InsightCard({ insight }: { insight: InsightMeta }) {
  return (
    <Link href={`/insights/${insight.slug}`}>
      <Card className="h-full rounded-[1.8rem] border-white/70 bg-white/85 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(20,33,61,0.10)]">
        <CardContent className="p-7">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">{insight.audience}</Badge>
            <Badge variant="outline">{insight.readingTime}</Badge>
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-slate-950">{insight.title}</h3>
          <p className="mt-3 leading-7 text-slate-700">{insight.description}</p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800">
            Makaleyi aç
            <ArrowRight className="size-4" />
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

import Link from "next/link";

import { InsightCard } from "@/components/site/insight-card";
import { Reveal } from "@/components/site/reveal";
import type { InsightMeta } from "@/lib/content";

type RelatedInsightsSectionProps = {
  title: string;
  description: string;
  insights: InsightMeta[];
};

export function RelatedInsightsSection({
  title,
  description,
  insights,
}: RelatedInsightsSectionProps) {
  if (insights.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-900">
            İlgili İçerikler
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="max-w-xl">
          <p className="text-base leading-7 text-slate-700">{description}</p>
          <Link
            href="/insights"
            className="mt-4 inline-flex text-sm font-semibold text-cyan-800 transition hover:text-cyan-700"
          >
            Tüm insight içeriklerini incele
          </Link>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {insights.map((insight, index) => (
          <Reveal key={insight.slug} delay={index * 0.04}>
            <InsightCard insight={insight} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

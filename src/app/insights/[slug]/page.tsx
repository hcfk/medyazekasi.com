import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { getAllInsights, getInsightBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllInsights().map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getAllInsights().find((item) => item.slug === slug);

  if (!insight) {
    return {};
  }

  return {
    title: insight.title,
    description: insight.description,
  };
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insightExists = getAllInsights().some((item) => item.slug === slug);

  if (!insightExists) {
    notFound();
  }

  const { meta, content } = await getInsightBySlug(slug);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,196,91,0.18),_transparent_35%),linear-gradient(180deg,#f7f4ee_0%,#ffffff_55%,#f4efe5_100%)] pb-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pt-14 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
        >
          Ana sayfaya don
        </Link>

        <section className="rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">{meta.audience}</Badge>
            <Badge variant="outline">{meta.readingTime}</Badge>
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--brand-ink)] md:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
            {meta.description}
          </p>
        </section>

        <article className="rounded-[2rem] border border-[var(--brand-sand)]/80 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          {content}
        </article>
      </div>
    </main>
  );
}

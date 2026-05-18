import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SeoJsonLd } from "@/components/site/seo-json-ld";
import { Badge } from "@/components/ui/badge";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildMetadata,
} from "@/lib/seo";
import { getAllInsights, getInsightBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const insightFaqs: Record<string, Array<{ question: string; answer: string }>> = {
  "desifre-transkripsiyon-kamu-veri-guvenligi": [
    {
      question: "Deşifre ile transkripsiyon arasındaki fark nedir?",
      answer:
        "Deşifre daha çok bir kaydın yazıya dökülmesini anlatan kullanıcı dilidir. Transkripsiyon ise bu dönüşümün manuel veya otomatik yöntemlerle yapılmasını kapsayan daha geniş bir kavramdır.",
    },
    {
      question: "Sesten metne ile videodan metne arasında fark var mı?",
      answer:
        "Temel amaç aynıdır: konuşmayı metne çevirmek. Ancak videodan metne süreçlerinde altyazı, zaman kodu ve yayın yeniden kullanımı gibi ek ihtiyaçlar daha sık ortaya çıkar.",
    },
    {
      question: "Konuşmacı tanıma neden önemli?",
      answer:
        "Çok katılımcılı kayıtlarda kimin ne söylediğini ayırmak; tutanak, özet, arşiv ve belge güvenilirliği açısından kritiktir.",
    },
    {
      question: "Belediyeler için transkripsiyon neden faydalıdır?",
      answer:
        "Meclis toplantıları, saha kayıtları, basın açıklamaları ve canlı yayınlar daha hızlı metne dökülür; aranabilir arşiv ve kurumsal hafıza daha güçlü hale gelir.",
    },
    {
      question: "Kurumsal kullanımda en önemli seçim kriteri nedir?",
      answer:
        "Doğruluk ve hız kadar veri yönetimi, yetkilendirme, arşivleme ve kurum içi kontrol ihtiyacı da belirleyicidir.",
    },
  ],
};

export async function generateStaticParams() {
  return getAllInsights().map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getAllInsights().find((item) => item.slug === slug);

  if (!insight) {
    return {};
  }

  return buildMetadata({
    title: `${insight.title} | Medya Zekâsı`,
    description: insight.description,
    path: `/insights/${slug}`,
    type: "article",
  });
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insightExists = getAllInsights().some((item) => item.slug === slug);

  if (!insightExists) {
    notFound();
  }

  const { meta, content } = await getInsightBySlug(slug);
  const faqItems = insightFaqs[slug];

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 md:px-10">
      <SeoJsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: meta.title, path: `/insights/${slug}` },
          ]),
          buildArticleJsonLd({
            title: meta.title,
            description: meta.description,
            path: `/insights/${slug}`,
            datePublished: meta.datePublished,
            dateModified: meta.dateModified,
          }),
          ...(faqItems ? [buildFaqJsonLd(faqItems)] : []),
        ]}
      />

      <Link
        href="/insights"
        className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
      >
        Insights sayfasına dön
      </Link>

      <section className="mt-6 rounded-[2rem] border border-white/60 bg-white/85 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="flex flex-wrap gap-3">
          <Badge variant="secondary">{meta.audience}</Badge>
          <Badge variant="outline">{meta.readingTime}</Badge>
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          {meta.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
          {meta.description}
        </p>
      </section>

      <article className="prose prose-slate mt-8 max-w-none rounded-[2rem] border border-slate-200/80 bg-white px-8 py-10 shadow-[0_18px_55px_rgba(20,33,61,0.06)]">
        {content}
      </article>
    </main>
  );
}

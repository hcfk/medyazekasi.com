import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

import { getMdxComponents } from "@/components/site/mdx-content";

const contentDirectory = path.join(process.cwd(), "content", "insights");

export type InsightMeta = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  audience: string;
  readingTime: string;
  datePublished: string;
  dateModified: string;
};

type Frontmatter = Omit<InsightMeta, "slug">;

function stripLeadingH1(markdown: string) {
  return markdown.replace(/^#\s+.+?\r?\n\r?\n/, "");
}

export function getAllInsights(): InsightMeta[] {
  const files = fs.readdirSync(contentDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);
      const stats = fs.statSync(filePath);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: String(data.title),
        seoTitle: typeof data.seoTitle === "string" ? data.seoTitle : undefined,
        description: String(data.description),
        audience: String(data.audience),
        readingTime: String(data.readingTime),
        datePublished:
          typeof data.datePublished === "string"
            ? data.datePublished
            : stats.birthtime.toISOString(),
        dateModified:
          typeof data.dateModified === "string"
            ? data.dateModified
            : stats.mtime.toISOString(),
      };
    })
    .sort(
      (left, right) =>
        new Date(right.datePublished).getTime() - new Date(left.datePublished).getTime(),
    );
}

export function getInsightsBySlugs(slugs: string[]) {
  const insightMap = new Map(getAllInsights().map((insight) => [insight.slug, insight]));

  return slugs
    .map((slug) => insightMap.get(slug))
    .filter((insight): insight is InsightMeta => Boolean(insight));
}

export async function getInsightBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const stats = fs.statSync(filePath);
  const normalizedContent = stripLeadingH1(content);

  const compiled = await compileMDX<Frontmatter>({
    source: normalizedContent,
    components: getMdxComponents(),
    options: {
      parseFrontmatter: false,
    },
  });

  return {
    meta: {
      slug,
      title: String(data.title),
      seoTitle: typeof data.seoTitle === "string" ? data.seoTitle : undefined,
      description: String(data.description),
      audience: String(data.audience),
      readingTime: String(data.readingTime),
      datePublished:
        typeof data.datePublished === "string"
          ? data.datePublished
          : stats.birthtime.toISOString(),
      dateModified:
        typeof data.dateModified === "string"
          ? data.dateModified
          : stats.mtime.toISOString(),
    },
    content: compiled.content,
  };
}

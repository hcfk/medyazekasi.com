import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

import { getMdxComponents } from "@/components/site/mdx-content";

const contentDirectory = path.join(process.cwd(), "content", "insights");

export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  audience: string;
  readingTime: string;
};

type Frontmatter = Omit<InsightMeta, "slug">;

export function getAllInsights(): InsightMeta[] {
  const files = fs.readdirSync(contentDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(contentDirectory, file), "utf8");
      const { data } = matter(source);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: String(data.title),
        description: String(data.description),
        audience: String(data.audience),
        readingTime: String(data.readingTime),
      };
    });
}

export async function getInsightBySlug(slug: string) {
  const source = fs.readFileSync(
    path.join(contentDirectory, `${slug}.mdx`),
    "utf8",
  );
  const { content, data } = matter(source);

  const compiled = await compileMDX<Frontmatter>({
    source: content,
    components: getMdxComponents(),
    options: {
      parseFrontmatter: false,
    },
  });

  return {
    meta: {
      slug,
      title: String(data.title),
      description: String(data.description),
      audience: String(data.audience),
      readingTime: String(data.readingTime),
    },
    content: compiled.content,
  };
}

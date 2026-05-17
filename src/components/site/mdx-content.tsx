import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-10 text-4xl font-semibold tracking-tight text-[var(--brand-ink)]"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 text-2xl font-semibold tracking-tight text-[var(--brand-ink)]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-xl font-semibold text-[var(--brand-ink)]" {...props} />
  ),
  p: (props) => (
    <p className="mt-4 text-base leading-8 text-slate-700" {...props} />
  ),
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700" {...props} />
  ),
  li: (props) => <li className="leading-8" {...props} />,
  strong: (props) => <strong className="font-semibold text-slate-950" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-4 border-[var(--brand-gold)] pl-4 text-slate-700"
      {...props}
    />
  ),
};

export function getMdxComponents(): MDXComponents {
  return components;
}

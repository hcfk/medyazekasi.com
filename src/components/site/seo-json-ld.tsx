import { StructuredData } from "@/components/StructuredData";

type SeoJsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function SeoJsonLd({ data }: SeoJsonLdProps) {
  return <StructuredData data={data} />;
}

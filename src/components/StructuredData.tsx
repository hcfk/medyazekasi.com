type StructuredDataProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

function normalizeStructuredData(
  data: Record<string, unknown> | Array<Record<string, unknown>>,
) {
  if (!Array.isArray(data)) {
    return data;
  }

  return {
    "@context": "https://schema.org",
    "@graph": data.map((item) =>
      Object.fromEntries(Object.entries(item).filter(([key]) => key !== "@context")),
    ),
  };
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(normalizeStructuredData(data)) }}
    />
  );
}

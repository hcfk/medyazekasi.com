import { buildLlmsText } from "@/lib/llms";

export async function GET() {
  return new Response(buildLlmsText(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

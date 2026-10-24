import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/sitemap.xml": ["./content/insights/**/*.mdx"],
    "/insights": ["./content/insights/**/*.mdx"],
    "/insights/*": ["./content/insights/**/*.mdx"],
  },
};

export default nextConfig;

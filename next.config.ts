import type { NextConfig } from "next";

// Associates tag lives in site settings (Vercel env), never in git. Fail the
// production build loudly rather than ship untagged Amazon links.
if (process.env.VERCEL_ENV === "production") {
  const tag = (
    process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG ||
    process.env.AMAZON_ASSOCIATE_TAG ||
    ""
  ).trim();
  if (!tag || tag === "your-tag-21") {
    throw new Error("AMAZON_ASSOCIATE_TAG is not set for production — refusing to build untagged Amazon links.");
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/compare", destination: "/best", statusCode: 301 },
    ];
  },
  async rewrites() {
    return [
      { source: "/icon", destination: "/icon.png" },
      { source: "/apple-icon", destination: "/apple-icon.png" },
    ];
  },
};

export default nextConfig;

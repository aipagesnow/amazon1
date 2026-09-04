import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/privacy", destination: "/about#privacy", statusCode: 301 },
      { source: "/disclosure", destination: "/about#disclosure", statusCode: 301 },
      { source: "/compare", destination: "/best", statusCode: 301 },
    ];
  },
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon" }];
  },
};

export default nextConfig;

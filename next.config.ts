import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: "/privacy", destination: "/about#privacy", statusCode: 301 },
      { source: "/disclosure", destination: "/about#disclosure", statusCode: 301 },
      { source: "/compare", destination: "/best", statusCode: 301 },
    ];
  },
};

export default nextConfig;

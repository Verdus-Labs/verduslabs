import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/_dashboard", destination: "/dashboard" }];
  },
};

export default nextConfig;

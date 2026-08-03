import type { NextConfig } from "next";
import { withPlausibleProxy } from "next-plausible";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    // Enable optimizations for better performance
    optimizePackageImports: ["react-icons"],
  },
  async redirects() {
    return [];
  },
};

export default withPlausibleProxy()({
  ...nextConfig,
});

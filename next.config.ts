import type { NextConfig } from "next";
import { withPlausibleProxy } from "next-plausible";

const nextConfig: NextConfig = {
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
  // Add caching headers for better performance
  async headers() {
    return [
      {
        source: "/projects",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=300, stale-while-revalidate=600",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/award",
        destination: "https://award.athena.hackclub.com",
        permanent: true,
      },
      {
        source: "/awards",
        destination: "https://award.athena.hackclub.com",
        permanent: true,
      },
    ];
  },
};

export default withPlausibleProxy()({
  ...nextConfig,
});

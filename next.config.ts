import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/award",
        destination: "https://awards.athena.a.hackclub.dev",
        permanent: false
      }
    ]
  },
};

export default nextConfig;

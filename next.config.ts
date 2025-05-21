import type { NextConfig } from "next";
import { withPlausibleProxy } from 'next-plausible';

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
      },
      {
        source: "/awards",
        destination: "https://awards.athena.a.hackclub.dev",
        permanent: false
      }
    ]
  },
};

export default withPlausibleProxy()({
  ...nextConfig
});

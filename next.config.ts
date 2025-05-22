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
        destination: "https://award.athena.hackclub.com",
        permanent: true
      },
      {
        source: "/awards",
        destination: "https://award.athena.hackclub.com",
        permanent: true
      }
    ]
  },
};

export default withPlausibleProxy()({
  ...nextConfig
});

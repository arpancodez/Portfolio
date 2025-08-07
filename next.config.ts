import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.xinacy.com",
      },
    ],
  },
};

export default nextConfig;

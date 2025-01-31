import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chastenzm.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The resume page was replaced by the experience page
  async redirects() {
    return [
      { source: "/resume", destination: "/experience", permanent: true },
    ];
  },
};

export default nextConfig;

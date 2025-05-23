import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  babel: {
    presets: ["next/babel"],
  },
};

export default nextConfig;

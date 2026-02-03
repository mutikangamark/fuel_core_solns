import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Optimize image quality/size tradeoff
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // Cache for 1 year
  },
};

export default nextConfig;

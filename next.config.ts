import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // tells Next.js to build a static site
  images: {
    unoptimized: true, // avoids image optimization server
  },
};

export default nextConfig;

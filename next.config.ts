import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export", // tells Next.js to do a static export
  images: {
    unoptimized: true, // needed for next/image in static export
  },

};

export default nextConfig;

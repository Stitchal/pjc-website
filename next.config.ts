import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages deployment.
  output: "export",

  // next/image optimisation is not available in static exports.
  images: { unoptimized: true },
};

export default nextConfig;


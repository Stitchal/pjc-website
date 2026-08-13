import type { NextConfig } from "next";

// NEXT_PUBLIC_BASE_PATH is injected by the CI workflow for GitHub Pages.
// It is empty string in local dev so paths resolve against localhost.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages deployment.
  output: "export",

  // Subpath of the GitHub Pages site (e.g. "/palm-junior-conseil").
  // Empty in local dev, set via env var in CI.
  basePath,

  // next/image optimisation is not available in static exports.
  images: { unoptimized: true },
};

export default nextConfig;

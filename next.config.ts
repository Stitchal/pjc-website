import type { NextConfig } from "next";

// GITHUB_ACTIONS is automatically set to "true" in every GitHub Actions
// runner — no manual configuration needed. Locally it is undefined.
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubActions ? "/pjc-website" : "";

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages deployment.
  output: "export",

  // Prepended to all page routes AND next/image src attributes.
  basePath,

  // Prepend basePath to all static assets (_next/static, public/).
  assetPrefix: basePath,

  // Expose basePath to client components via env var.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  // next/image optimisation is not available in static exports.
  images: { unoptimized: true },
};

export default nextConfig;


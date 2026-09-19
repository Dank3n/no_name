import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Pentru hosting static (cPanel, Netlify etc.), decomentează:
   *  output: "export",
   *  images: { unoptimized: true },
   */
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Pentru hosting static (cPanel, Netlify etc.), decomentează:
   *  output: "export",
   *  images: { unoptimized: true },
   */
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

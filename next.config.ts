import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/OZSK",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

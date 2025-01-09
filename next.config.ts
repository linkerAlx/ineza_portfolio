import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  images: {
    domains: ['images.pexels.com'], // Add your image domain here
  },
};

export default nextConfig;

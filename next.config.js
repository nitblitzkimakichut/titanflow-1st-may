/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
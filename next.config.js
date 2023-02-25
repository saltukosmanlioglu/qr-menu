/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;

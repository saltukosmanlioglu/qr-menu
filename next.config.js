/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/(ui)/home",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;

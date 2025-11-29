/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: { appDir: true },
  async rewrites() {
    return [
      {
        source: '/:path*',   // любой путь
        destination: '/',    // будет вести на главную страницу
      },
    ];
  },
};

module.exports = nextConfig;

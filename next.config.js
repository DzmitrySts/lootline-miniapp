/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // экспортируем статический сайт
  experimental: { appDir: true },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // полностью статический сайт
  experimental: { appDir: true },
};

module.exports = nextConfig;

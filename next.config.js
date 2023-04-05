/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URL: "mongodb://localhost/ecommerce",
  },
};

module.exports = nextConfig;

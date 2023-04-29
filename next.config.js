/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apipics.s3.amazonaws.com",
        port: "",
        pathname: "/mexican_api/**",
      },
    ],
  },
};

module.exports = nextConfig;

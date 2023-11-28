/** @type {import('next').NextConfig} */
const nextConfig = {
  skipMiddlewareUrlNormalize: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
  },
  webpack: (config) => {
    // unset client side js that only works server side
    config.resolve.fallback = { fs: false, module: false };

    // setup svgr
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;

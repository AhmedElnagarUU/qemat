import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack: (config: { resolve: { fallback: any; }; }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default withNextIntl(nextConfig);

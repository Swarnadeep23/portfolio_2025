/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  // Comment out these for development
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio_2025' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio_2025/' : '',
  trailingSlash: true,
}

module.exports = nextConfig 
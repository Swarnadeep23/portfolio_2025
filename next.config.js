/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com', 'github.com'],
  },
  basePath: '/portfolio_2025',
  assetPrefix: '/portfolio_2025/',
  trailingSlash: true,
}

module.exports = nextConfig 
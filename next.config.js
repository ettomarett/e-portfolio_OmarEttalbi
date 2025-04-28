/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  // Enable static exports
  output: 'export',
  // Configure base path if needed
  // basePath: '',
  // Enable React strict mode
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable experimental features if needed
  experimental: {
    // typedRoutes: true,
    // serverActions: true,
  },
}

module.exports = nextConfig 
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      // Add other domains here if needed
    ],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;

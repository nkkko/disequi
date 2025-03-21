/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enhanced webpack configuration to fix asm.js issues
  webpack: (config, { dev, isServer }) => {
    // Set the proper NODE_ENV
    config.optimization.nodeEnv = process.env.NODE_ENV;
    
    // Add specific rules for asm.js files
    config.module.rules.push({
      test: /\.asm\.js$/,
      type: 'javascript/auto',
      use: [],
    });
    
    // Disable optimization for specific chunks that might contain asm.js
    if (!dev && !isServer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.terserOptions = {
            ...minimizer.options.terserOptions,
            ecma: 5, // Use ES5 to ensure compatibility
            keep_classnames: true,
            keep_fnames: true,
            safari10: true, // Helps with some Safari issues
          };
        }
      });
    }
    
    return config;
  },
  // Suppress specific warnings in the browser console
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig


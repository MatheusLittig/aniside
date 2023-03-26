/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@aniside/presets", "@aniside/ui"],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

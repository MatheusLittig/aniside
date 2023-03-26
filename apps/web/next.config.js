/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@aniside/presets", "@aniside/ui", "@aniside/styles"],
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

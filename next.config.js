/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      // Rewriting requests to /name/send-email to /api/name/send-email
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

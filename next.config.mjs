/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com", "skillicons.dev"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' https://skillicons.dev data:;",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com;
              frame-src https://challenges.cloudflare.com;
              connect-src 'self' https://challenges.cloudflare.com;
            `.replace(/\n/g, " "), // Ensures proper formatting
          },
        ],
      },
    ];
  },
};

export default nextConfig;

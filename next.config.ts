import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' 'wasm-unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://images.unsplash.com https://i.pinimg.com https://coreldrawdesign.com https://d1csarkz8obe9u.cloudfront.net https://content.jdmagicbox.com https://images.template.net https://dynamic.brandcrowd.com https://marketplace.canva.com https://asset.gecdesigns.com https://res.cloudinary.com;
    font-src 'self';
    connect-src 'self' https://unpkg.com ws: wss:;
    worker-src 'self' blob:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pinimg.com" },
      { protocol: "https", hostname: "coreldrawdesign.com" },
      { protocol: "https", hostname: "d1csarkz8obe9u.cloudfront.net" },
      { protocol: "https", hostname: "content.jdmagicbox.com" },
      { protocol: "https", hostname: "images.template.net" },
      { protocol: "https", hostname: "dynamic.brandcrowd.com" },
      { protocol: "https", hostname: "marketplace.canva.com" },
      { protocol: "https", hostname: "asset.gecdesigns.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default nextConfig;

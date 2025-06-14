import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "i.pravatar.cc", // Domínio do pravatar para avatares de teste
    }], // Permitindo o domínio pravatar para avatares de teste
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;

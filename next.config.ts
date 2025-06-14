import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "i.pravatar.cc", // Domínio do pravatar para avatares de teste
    }], // Permitindo o domínio pravatar para avatares de teste
  }
};

export default nextConfig;

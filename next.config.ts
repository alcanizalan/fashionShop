import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "izcmuellorhwwnjqgjea.supabase.co",
        pathname: "/storage/v1/object/sign/**",
      },
    ],
  },
  cacheComponents: true,
};

export default nextConfig;

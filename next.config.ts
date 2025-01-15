import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants.js";
import type { NextConfig } from "next";

const nextConfig: NextConfig = async (phase: string) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
      dest: "public",
    });
    return withPWA({
      reactStrictMode: true,
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "img.freepik.com",
            pathname: "/**",
          },
        ],
      },
    });
  }
    return {
       reactStrictMode: true,
       images: {
         remotePatterns: [
           {
             protocol: "https",
             hostname: "img.freepik.com/**",

        },
     ],
   },
  };
};


export default nextConfig;



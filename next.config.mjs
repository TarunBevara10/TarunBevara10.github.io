/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // produce a static site in /out
  images: { unoptimized: true }, // allow next/image without the Image Optimization server
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_IMAGES_HOST_NAME ?? "",
        port: "",
        pathname: process.env.NEXT_IMAGES_PATH_NAME ?? "",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow requests from any hostname in development, including LAN IP addresses.
  allowedDevOrigins: ['**.*'],
};
export default nextConfig;

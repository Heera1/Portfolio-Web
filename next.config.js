/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com", "localhost"],
  },
};

module.exports = nextConfig;

import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

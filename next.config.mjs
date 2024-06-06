/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    SERVER_URL: process.env.NEXT_PUBLIC_APP_SERVER_URL, // https://api.chucknorris.io
    APP_URL: process.env.NEXT_PUBLIC_APP_URL, // http://localhost:3000
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.chucknorris.host',
        port: '',
        pathname: '/img/avatar/**',
      },
    ]
  }
};

export default nextConfig;

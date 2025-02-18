/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';
dotenv.config();

const nextConfig = {  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**'
      },
    ],
  },
  env: {
    customKey: process.env.NEXT_PUBLIC_TMDB_APIKEY,
  }
};

export default nextConfig;

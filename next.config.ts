import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    allowedDevOrigins:['192.168.1.139'],
    cacheComponents:false,
    experimental: {
      optimizePackageImports: ['gsap', 'swiper', 'framer-motion', 'leaflet', 'react-leaflet'],
    },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'tawq-cms.o-projects.org',
      },
    ],
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
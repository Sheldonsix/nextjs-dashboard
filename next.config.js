/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          // {
          //   protocol: 'https',
          //   hostname: 'img9.doubanio.com',
          //   port: '',
          //   pathname: '**',
          // },
          // {
          //   protocol: 'https',
          //   hostname: 'images.weserv.nl',
          //   port: '',
          //   pathname: '**',
          // },
          {
            protocol: 'https',
            hostname: 'img.003311.xyz',
            port: '',
            pathname: '**',
          },
        ],
      },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cxapp.com',
            port: '',
            pathname: '/**'
          },
        ]
      }
};

export default nextConfig;

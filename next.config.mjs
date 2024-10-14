import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["geist"],
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cloud.appwrite.io',
          },
        ],
      },
};
 
export default withNextIntl(nextConfig);
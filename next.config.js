/** @type {import('next').NextConfig} */

// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = () => {
  const reactStrictMode = true;

  const redirects = async () => [
    {
      source: '/statement-of-purpose.html',
      destination: '/',
      permanent: true,
    },
  ];

  return withBundleAnalyzer({
    reactStrictMode,
    redirects,
  });
};

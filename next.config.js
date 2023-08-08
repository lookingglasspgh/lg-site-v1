/** @type {import('next').NextConfig} */

module.exports = () => {
  const reactStrictMode = true;

  const redirects = async () => [
    {
      source: '/statement-of-purpose.html',
      destination: '/',
      permanent: true,
    },
  ];

  return {
    reactStrictMode,
    redirects,
  };
};

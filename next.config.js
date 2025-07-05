/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled:
    process.env.ANALYZE === "true" && process.env.NODE_ENV === "production",
});

module.exports = () => {
  const reactStrictMode = true;

  const redirects = async () => [
    {
      source: "/statement-of-purpose.html",
      destination: "/",
      permanent: true,
    },
  ];

  const images = {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lg-site-assets.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "vignette.wikia.nocookie.net",
      },
    ],
  };

  return withBundleAnalyzer({
    images,
    reactStrictMode,
    redirects,
  });
};

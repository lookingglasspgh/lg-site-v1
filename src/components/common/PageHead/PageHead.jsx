import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const PageHead = ({ pageMetadata }) => {
  const { canonicalUrl, description, title } = pageMetadata;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.looking-glass.space/resources/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="Looking Glass circular glass logo" />
      <meta property="og:site_name" content="Looking Glass: Remembering & Imagining" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="favicons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </Head>
  );
};

PageHead.propTypes = {
  pageMetadata: PropTypes.shape({
    canonicalUrl: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default PageHead;

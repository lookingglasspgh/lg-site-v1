import { RouteList } from './RouteList';

const baseUrl = 'https://www.looking-glass.space';

const RouteMetadata = {
  appSupport: {
    canonicalUrl: `${baseUrl}${RouteList.APP_SUPPORT}`,
    description: 'Share feedback or let us know how we can help.',
    title: 'App Support | Looking Glass: AR Archive',
  },
  arSpotlight: {
    canonicalUrl: `${baseUrl}${RouteList.AR_SPOTLIGHT}`,
    description: 'Spaces from East Liberty in 3D model form.',
    title: 'AR Spotlight | Looking Glass: AR Archive',
  },
  contributors: {
    canonicalUrl: `${baseUrl}${RouteList.CONTRIBUTORS}`,
    description: 'The individuals and organizations that push Looking Glass forward.',
    title: 'Collaborators & Supporters | Looking Glass: AR Archive',
  },
  home: {
    canonicalUrl: baseUrl,
    description: 'Looking Glass is an app-based archive of Black life in Pittsburgh. We use augmented reality to connect the present to both the past and imagined futures.',
    title: 'Looking Glass: AR Archive',
  },
  press: {
    canonicalUrl: `${baseUrl}${RouteList.PRESS}`,
    description: 'Contact info and links to Looking Glass features.',
    title: 'Press | Looking Glass: AR Archive',
  },
  privacy: {
    canonicalUrl: `${baseUrl}${RouteList.PRIVACY}`,
    description: 'Looking Glass is designed to never store or share sensitive information, including location data. Read our Privacy Policy to learn more.',
    title: 'Privacy Policy | Looking Glass: AR Archive',
  },
  terms: {
    canonicalUrl: `${baseUrl}${RouteList.TERMS}`,
    description: 'The Terms of Service that govern the use of Looking Glass.',
    title: 'Terms of Service | Looking Glass: AR Archive',
  },
};

export default RouteMetadata;

import { RouteList } from './RouteList';

const baseUrl = 'https://www.looking-glass.space';

const RouteMetadata = {
  home: {
    canonicalUrl: baseUrl,
    description: 'Looking Glass is an app-based archive of Black life in Pittsburgh. We use augmented reality to connect the present to both the past and imagined futures.',
    title: 'Looking Glass: Remembering & Imagining',
  },
  appSupport: {
    canonicalUrl: `${baseUrl}${RouteList.APP_SUPPORT}`,
    description: 'Share feedback or let us know how we can help your usage.',
    title: 'App Support | Looking Glass',
  },
  contributors: {
    canonicalUrl: `${baseUrl}${RouteList.CONTRIBUTORS}`,
    description: 'The individuals and organizations that push Looking Glass forward.',
    title: 'Collaborators & Supporters | Looking Glass',
  },
  fragments: {
    canonicalUrl: `${baseUrl}${RouteList.FRAGMENTS}`,
    description: 'Spaces from East Liberty in 3D model form.',
    title: 'Neighborhood Fragments | Looking Glass',
  },
  privacy: {
    canonicalUrl: `${baseUrl}${RouteList.PRIVACY}`,
    description: 'Looking Glass is designed to never store or share sensitive information, including location data. Read our Privacy Policy to learn more.',
    title: 'Privacy Policy | Looking Glass',
  },
  support: {
    canonicalUrl: `${baseUrl}${RouteList.SUPPORT}`,
    description: 'Help sustain and grow the Looking Glass archive.',
    title: 'Ways to Support | Looking Glass',
  },
  terms: {
    canonicalUrl: `${baseUrl}${RouteList.TERMS}`,
    description: 'The Terms of Service that govern the use of Looking Glass.',
    title: 'Terms of Service | Looking Glass',
  },
};

export default RouteMetadata;

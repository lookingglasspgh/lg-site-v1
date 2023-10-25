import { RouteList } from './RouteList';

const baseUrl = 'https://www.looking-glass.space';

const RouteMetadata = {
  home: {
    canonicalUrl: baseUrl,
    description: 'Looking Glass is an app-based archive of Black life in Pittsburgh. We use augmented reality to connect the present to the past and imagined futures.',
    title: 'Looking Glass: Remembering & Imagining',
  },
  contributors: {
    canonicalUrl: `${baseUrl}${RouteList.CONTRIBUTORS}`,
    description: 'The individuals and organizations that push Looking Glass forward.',
    title: 'Collaborators & Supporters | Looking Glass',
  },
  fragments: {
    canonicalUrl: `${baseUrl}${RouteList.FRAGMENTS}`,
    description: 'Spaces from East Liberty in 3D model form.',
    title: 'Pieces of East Liberty | Looking Glass',
  },
  soundscape: {
    canonicalUrl: `${baseUrl}${RouteList.SOUNDSCAPE}`,
    description: 'A six-track companion to the app, inspired by the experiences of Black Pittsburgh.',
    title: 'Soundscape | Looking Glass',
  },
  support: {
    canonicalUrl: `${baseUrl}${RouteList.SUPPORT}`,
    description: 'Help sustain and grow the Looking Glass archive.',
    title: 'Ways to Support | Looking Glass',
  },
};

export default RouteMetadata;

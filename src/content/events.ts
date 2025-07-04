export enum EVENT_TYPES {
  CONFERENCE = 'Conference',
  EXHIBIT = 'Exhibition',
  TALK = 'Talk',
  TOUR = 'Tour',
  WORKSHOP = 'Workshop',
}

export type Event = {
  title: string;
  type: EVENT_TYPES;
  host: string;
  location: string;
  time: string;
  image: string;
  startDate?: string;
  endDate: string;
  url: string;
};

interface EventsContent {
  HEADING: string;
  HEADING_PRIOR: string;
  PARTNER: string;
  PARTNER_PITCH: string;
  PARTNER_OUTREACH: string;
  CONTACT_EMAIL: string;
  CONTACT_TOOLTIP: string;
  LINK_ALT: string;
  eventsList: Event[];
}

const events: EventsContent = {
  HEADING: 'Upcoming Public Events',
  HEADING_PRIOR: 'Past Events',
  PARTNER: 'Partner With Us',
  PARTNER_PITCH: `We hope to co-create community events and public programs that
              bring people together to reflect, celebrate, and engage with local
              Black history, art and culture.`,
  PARTNER_OUTREACH:
    "If you're interested in a partnership to support our community-engaged mission, reach out to",
  CONTACT_EMAIL: 'info@looking-glass.space',
  CONTACT_TOOLTIP: 'Copied Contact Email',
  LINK_ALT: 'Link to',
  eventsList: [
    {
      title: 'DEMO2025 Festival',
      type: EVENT_TYPES.EXHIBIT,
      host: 'Water Street Projects',
      location: '180 Maiden Ln, NYC',
      image: '/events/demo.webp',
      time: '12pm - 7pm',
      startDate: 'Jun 4, 2025',
      endDate: 'Jun 22, 2025',
      url: 'https://www.demofestival.org/showcases/extended-realities',
    },
    {
      title: 'Owning Our Future: A Symposium On BIPOC Institutional Ownership',
      type: EVENT_TYPES.CONFERENCE,
      host: 'Kelly Strayhorn Theater',
      location: '5941 Penn Ave, PGH',
      image: '/events/oof.webp',
      time: 'Varies',
      startDate: 'May 15, 2025',
      endDate: 'May 18, 2025',
      url: 'https://kelly-strayhorn.org/community/owning_our_future_symposium-2025-2/',
    },
    {
      title:
        'Remembering & Imagining: Visualizing the Past, Present and Future with Archives',
      type: EVENT_TYPES.TALK,
      host: 'Silver Eye Center for Photography',
      location: '4808 Penn Avenue, PGH',
      image: '/events/silverEye.webp',
      time: '6:30pm - 7:30pm',
      endDate: 'Apr 15, 2025',
      url: 'eye.org/events/remembering-imagining-visualizing-the-past-present-and-future-with-archives',
    },
    {
      title: 'SONA Immersive Storytelling Festival',
      type: EVENT_TYPES.EXHIBIT,
      host: 'Carnegie Mellon University',
      location: '4808 Penn Avenue, PGH',
      image: '/events/sona.webp',
      time: 'Varies',
      startDate: 'Mar 27, 2025',
      endDate: 'Mar 29, 2025',
      url: 'https://www.sonafestival.com/schedule-event',
    },
    {
      title: 'Reimagining Space with Immersive Technologies',
      type: EVENT_TYPES.WORKSHOP,
      host: 'Carnegie Mellon University',
      location: 'Margaret Morrison Carnegie Hall, PGH',
      image: '/events/aias.webp',
      time: '2pm - 3pm',
      endDate: 'Nov 1, 2024',
      url: 'https://www.aias.org/2024-northeast-quad-conference/',
    },
  ],
};

export default events;

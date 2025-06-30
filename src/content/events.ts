export enum EVENT_TYPES {
  CONFERENCE = "Conference",
  EXHIBIT = "Exhibition",
  TALK = "Talk",
  TOUR = "Tour",
  WORKSHOP = "Workshop",
}

export type Event = {
  title: string;
  type: EVENT_TYPES;
  host: string;
  location: string;
  time: string;
  startDate?: string;
  endDate: string;
  url: string;
};

interface EventsContent {
  HEADING: string;
  HEADING_PRIOR: string;
  LINK_ALT: string;
  eventsList: Event[];
}

const events: EventsContent = {
  HEADING: "Upcoming Public Events",
  HEADING_PRIOR: "Past Events",
  LINK_ALT: "Link to",
  eventsList: [
    {
      title: "Test Event",
      type: EVENT_TYPES.TALK,
      host: "ELPC",
      location: "116 S Highland Ave, PGH",
      time: "3:30pm",
      startDate: "Jul 1, 2025",
      endDate: "Jul 5, 2025",
      url: "https://www.demofestival.org/showcases/extended-realities",
    },
    {
      title: "DEMO2025 Festival",
      type: EVENT_TYPES.EXHIBIT,
      host: "Water Street Projects",
      location: "180 Maiden Ln, NYC",
      time: "12pm - 7pm",
      startDate: "Jun 4, 2025",
      endDate: "Jun 22, 2025",
      url: "https://www.demofestival.org/showcases/extended-realities",
    },
    {
      title: "Owning Our Future: A Symposium On BIPOC Institutional Ownership",
      type: EVENT_TYPES.CONFERENCE,
      host: "Kelly Strayhorn Theater",
      location: "5941 Penn Ave, PGH",
      time: "Varies",
      startDate: "May 15, 2025",
      endDate: "May 18, 2025",
      url: "https://kelly-strayhorn.org/community/owning_our_future_symposium-2025-2/",
    },
    {
      title:
        "Remembering & Imagining: Visualizing the Past, Present and Future with Archives",
      type: EVENT_TYPES.TALK,
      host: "Silver Eye Center for Photography",
      location: "4808 Penn Avenue, PGH",
      time: "6:30pm - 7:30pm",
      endDate: "Apr 15, 2025",
      url: "https://kelly-strayhorn.org/community/owning_our_future_symposium-2025-2/",
    },
    {
      title: "SONA Immersive Storytelling Festival",
      type: EVENT_TYPES.EXHIBIT,
      host: "Carnegie Mellon University",
      location: "4808 Penn Avenue, PGH",
      time: "Varies",
      startDate: "Mar 27, 2025",
      endDate: "Mar 29, 2025",
      url: "https://www.sonafestival.com/schedule-event",
    },
    {
      title: "Reimagining Space with Immersive Technologies",
      type: EVENT_TYPES.WORKSHOP,
      host: "Carnegie Mellon University",
      location: "Margaret Morrison Carnegie Hall, PGH",
      time: "2pm - 3pm",
      endDate: "Nov 1, 2024",
      url: "https://www.aias.org/2024-northeast-quad-conference/",
    },
  ],
};

export default events;

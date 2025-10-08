export type Article = {
  title: string;
  publication: string;
  date: string;
  url: string;
};

const press = {
  info: {
    HEADING: 'Info & Resources',
    CONTACT:
      'Reach out to info@looking-glass.space to discuss potential press opportunities. ',
  },
  news: {
    HEADING: 'Stories',
    LINK_ALT: 'Link to',
    articles: [
      {
        title: 'Walking Through History with Artist Adrian Jones',
        publication: 'CMU School of Art',
        date: 'October 6, 2025',
        url: 'https://art.cmu.edu/news/school/looking-glass-adrian-jones',
      },
      {
        title:
          'A Preview of the Creative Incubator Inside the New Museum’s Expansion',
        publication: 'Autre',
        date: 'June 13, 2025',
        url: 'https://autre.love/journal/2025/6/13/new-museum-demo-2025',
      },
      {
        title:
          "Pittsburgh event 'Owning Our Future' explores roles of BIPOC-led cultural groups",
        publication: '90.5 WESA (NPR)',
        date: 'May 14, 2025',
        url: 'https://www.wesa.fm/arts-culture/2025-05-14/pittsburgh-arts-owning-spaces-kelly-strayhorn',
      },
      {
        title:
          'Using AR to Preserve Pittsburgh’s Black History: Interview with Adrian Jones',
        publication: 'Honest History',
        date: 'May 4, 2025',
        url: 'https://honesthistory.co/blogs/blog/using-ar-to-preserve-pittsburgh-s-black-history-interview-with-adrian-jones-5',
      },
      {
        title:
          'An interactive app by a local artist seeks to preserve Pittsburgh’s Black history',
        publication: 'Pittsburgh City Paper',
        date: 'January 29, 2025',
        url: 'https://www.pghcitypaper.com/arts-entertainment/an-interactive-app-by-a-local-artist-seeks-to-preserve-pittsburghs-black-history-27420895',
      },
      {
        title:
          'New augmented reality app overlays Pittsburgh’s Black history on present-day East Liberty',
        publication: '90.5 WESA (NPR)',
        date: 'December 9, 2024',
        url: 'https://www.wesa.fm/arts-culture/2024-12-09/black-history-augmented-reality-app',
      },
      {
        title: 'Meet your 24 Technical.ly Awards nominees for 2024',
        publication: 'Technical.ly',
        date: 'November 7, 2024',
        url: 'https://technical.ly/startups/technically-awards-2024-pittsburgh-nominees/',
      },
      {
        title:
          'NEW INC, New Museum’s Cultural Incubator, Announces Eleventh Member Cohort...',
        publication: 'New Museum',
        date: 'September 9, 2024',
        url: 'https://235bowery.s3.amazonaws.com/pressreleases/294/NEW%20INC%20Y11_VFinal.pdf',
      },
      {
        title: 'New AR App Brings Pittsburgh’s Black History To Life',
        publication: 'POCIT',
        date: 'August 13, 2024',
        url: 'https://peopleofcolorintech.com/articles/new-ar-app-brings-pittsburghs-black-history-to-life/',
      },
      {
        title:
          'Immersive AR app offers a new POV on Pittsburgh’s Black history',
        publication: 'Technical.ly',
        date: 'August 12, 2024',
        url: 'https://technical.ly/software-development/augmented-reality-pittsburgh-black-history/',
      },
      {
        title: 'Tech is broken—can collective action fix it?',
        publication: 'MIT Technology Review',
        date: 'August 16, 2023',
        url: 'https://www.technologyreview.com/2023/08/16/1077490/collective-action-tech-work/',
      },
      {
        title:
          'Kelly Strayhorn Theater Presents: Dorothy R. Santos & Adrian Jones',
        publication: 'Kelly Strayhorn Theater',
        date: 'February 21, 2023',
        url: 'https://kelly-strayhorn.org/kst-blog/for-immediate-release-kelly-strayhorn-theater-presents-dorothy-r-santos-adrian-jones/',
      },
      {
        title: 'Weaving the present of the past with Adrian Jones',
        publication: 'Collective Action School',
        date: 'January 7th, 2022',
        url: 'https://collectiveactionschool.org/yearbook/looking-glass',
      },
    ],
  },
};

export default press;

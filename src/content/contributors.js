/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

const contributors = {
  COLLABORATORS: 'Collaborators',
  SUPPORTERS: 'Supporters',
  BIO: 'Bio',
  SITE: 'Site',
  collabDirectory: [
    {
      name: 'Adrian Jones',
      role: 'Founder',
      headshotPath: '/collaborators/adrian.webp',
      headshotAlt: 'Image of Adrian Jones, Looking Glass Founder',
      website: null,
      priority: true,
      bio: (
        <span>
          Adrian Jones is an artist, creative technologist and archivist whose practice is shaped
          by a commitment to those living in society’s margins. Utilizing his formal background
          in electrical engineering and software development, Adrian's creative work explores the
          power of speculative imagination and intergenerational storytelling within digital spaces.
          <br />
          <br />
          In 2021, Adrian began developing Looking Glass, an app-based archive of Black life in
          Pittsburgh, which uses augmented reality to connect the present to both the past and
          imagined futures. Looking Glass is built on the belief that the practices of remembering
          and imagining have the power to transform. By deepening our understanding of the present
          and envisioning the city as a space where Black life can be celebrated, Looking Glass
          aims to open new pathways toward healing and collective action.
        </span>
      ),
    },
    {
      name: 'Dorothy R. Santos, Ph.D.',
      role: 'Advisor',
      headshotPath: '/collaborators/drsantos.webp',
      headshotAlt: 'Image of Dorothy R. Santos, Ph.D., Looking Glass Advisor',
      website: 'https://dorothysantos.com/',
      priority: true,
      bio: (
        <span>
          Dorothy R. Santos, Ph.D. (she/they) is a Filipino American storyteller, poet, artist, and
          scholar whose academic and research interests include feminist media histories, critical
          medical anthropology, computational media, technology, race, and ethics. She earned her
          Ph.D. in Film and Digital Media with a designated emphasis in Computational Media from
          the University of California, Santa Cruz and was a Eugene V. Cota-Robles fellow.
          She received her Master’s degree in Visual and Critical Studies at the California
          College of the Arts and holds Bachelor’s degrees in Philosophy and Psychology from
          the University of San Francisco. Her work has been exhibited at Ars Electronica,
          Rewire Festival, Fort Mason Center for Arts & Culture, Yerba Buena Center for the Arts,
          and the GLBT Historical Society.
        </span>
      ),
    },
    {
      name: 'Xiaowei Wang, Ph.D.',
      role: 'Advisor',
      headshotPath: '/collaborators/xiaowei.webp',
      headshotAlt: 'Image of Xiaowei Wang, Ph.D., Looking Glass Advisor',
      website: 'https://www.xiaoweiwang.com/',
      priority: true,
      bio: (
        <span>
          Xiaowei R. Wang, Ph.D. is an artist, writer, organizer and coder. They are the author of
          the book Blockchain Chicken Farm: And Other Stories of Tech In China's Countryside, a
          2023 National Book Foundation Science and Literature Award winner. Their writing and art
          work has appeared in TANK, transmediale, The Nation, Haus der Kulturen der Welt, Yerba
          Buena Center for the Arts and more. Currently, they are one of the stewards of Collective
          Action School (formerly known as Logic School), an organizing community for tech workers,
          a Postdoctoral Scholar at the Center on Race and Digital Justice / UCLA Gender Studies and
          a Senior Civic Media Fellow at University of Southern California Annenberg. Their
          multidisciplinary work over the past 15 years sits at the intersection of tech, social and
          environmental justice. Xiaowei’s work is shaped by their Buddhist spiritual practice,
          guided by the experiences of their ancestors and the care of the communities they are
          part of.
        </span>
      ),
    },
    {
      name: 'Drummond Projects',
      role: 'Architectural Modeler & Renderer',
      headshotPath: '/collaborators/drummond.webp',
      website: 'https://www.drummondprojects.com/',
      bio: (
        <span>
          Dynamic and future-forward, Drummond Projects comprises a team of visionary designers,
          artists, architects, and builders who propose elegant, innovative solutions in response to
          complex design questions. Architecture is the medium by which we express culture across
          temporalities. Our design approach is multifaceted, rendering thoughtful, resilient spaces
          for our community as we help realize building endeavors from concept to completion.
          <br />
          <br />
          We deliver comprehensive architectural and design-build services that include concept,
          permits and construction through to completion. Our growing portfolio of built work ranges
          from residential multi-family housing, hospitality design, mixed-use development,
          commercial work-space design, residential and commercial design-builds to public art
          installations. With a cumulative long-standing and diversified experience in the
          Washington, DC metropolitan area, our team understands and celebrates the local
          vernacular histories that shape our urban fabric.
        </span>
      ),
    },
    {
      name: 'Erika Butler-Jones',
      role: 'Branding & Marketing Consultant',
      headshotPath: '/collaborators/ebj.webp',
      website: 'https://www.erikabutlerjones.com',
      bio: (
        <span>
          Erika Butler-Jones is an interior designer, a creative director, and cultural historian
          based in Pittsburgh, Pennsylvania. An expert storyteller and alumna of Harvard University
          and Parsons School of Design, Erika’s work dwells at the intersection of
          aesthetics, design, and Black cultural history. You can find her on Instagram
          @erikabutlerjones.
        </span>
      ),
    },
    {
      name: 'Haris Domond',
      role: 'Research Assistant',
      headshotPath: '/collaborators/haris.webp',
      website: null,
      bio: (
        <span>
          Haris Domond is a Chicago-based thinker with a motivation to reduce systemic inequity in
          all of its forms. His work in healthcare, affordable housing, and workplace diversity has
          been shaped by his education at Harvard University (BA and MTS) where he studied theology,
          critical race theory, and ethics. Deeply inspired by James Baldwin, George D. Kelsey and
          Willie James Jennings, Haris has researched, written and presented extensively on the
          evolving nature of racial segregation in the United States.
        </span>
      ),
    },
    {
      name: 'INEZ',
      role: 'Soundscape Artist',
      headshotPath: '/collaborators/inez.webp',
      website: 'https://inez.us/home',
      bio: (
        <span>
          Proud Homewood resident, Pittsburgh native, and self-proclaimed FireShorty™️, INEZ is a
          multi-faceted artistic Renaissance woman. INEZ, a Cum Laude, Berklee College of Music
          alumna, is a musical polymath for performance, singing, music production, arranging,
          songwriting, drumming, and audio mixing, mastering and engineering. INEZ’s recent
          production/engineering credits include Healthline.com, Kelly Strayhorn Theater,
          and WYEP. and  INEZ is currently in residence with Unisound's BTAR (Black Teaching
          Artist in Residence) program and Pittsburgh Community Broadcasting's
          91.3FM WYEP/90.5 WESA - AIR (Artists in Residence) program. INEZ hopes to continue
          uplifting, advocating, and creating space for Black women and femmes, using love
          and the full-spectrum of her talents.
        </span>
      ),
    },
    {
      name: 'JASON MCKOY',
      role: 'Branding Designer',
      headshotPath: '/collaborators/jason.webp',
      website: 'https://mckoycreative.com/',
      bio: (
        <span>
          JASON MCKOY is an ARTvocate, Social Innovator, Branding + Identity Consultant, and weirdo
          from NYC now living in PGH. He wears a lot of hats. Living with Major Depressive Disorder
          and Anxiety has informed how he navigates the world creatively. Whether through
          illustration or multimedia art installation, Jason sees each piece of his work as a
          solution to a puzzle. He is the founder of, McKoy Creative, a warm hug for small
          businesses and non-profit organizations, providing creative services from concept
          to completion that benefit communities. When not making stuff, he's either playing video
          games, creating cocktails, or sleeping.
        </span>
      ),
    },
    {
      name: 'Jeremiah Strawbridge',
      role: 'Videographer',
      headshotPath: '/collaborators/jeremiah.webp',
      website: 'https://www.youtube.com/@JeremiahStrawbridge',
      bio: (
        <span>
          Jeremiah Strawbridge is a Central PA based multimedia creative specialist. He holds a
          Bachelor’s degree in Media and Professional Communication with certificates in Digital
          Media and Corporate and Community Relations. His work, grounded in an understanding of
          the importance of narratives, continuously moves him to explore new approaches to
          storytelling.
        </span>
      ),
    },
    {
      name: 'Matthew Maxwell',
      role: 'Soundscape Project Manager & Artist',
      headshotPath: '/collaborators/matt.webp',
      website: 'https://www.familyfirstmusicgroup.com/',
      bio: (
        <span>
          Matthew Maxwell is an artist, producer & entrepreneur. Being two generations removed from
          his family’s music legacy, Matthew has a goal of fulfilling the deferred hopes and broken
          dreams of family members long gone in the entertainment industry. His mantra is 'faith,
          family, and music', which serve as constant inspirations for his Maryland based
          independent label, Family First Music Group (FFMG). His goal for his art is simple: to
          inspire people to pursue purpose, and as a former wall-street analyst turned artist, he
          not only holds this goal near to his heart but lives it to the fullest. As a
          business-creative hybrid, Matthew holds a BA in Economics from Harvard University and a
          MM in Music Production & Technology from Berklee College of Music.
        </span>
      ),
    },
    {
      name: 'pvkvsv',
      role: 'Soundscape Artist',
      headshotPath: '/collaborators/pvkvsv.webp',
      website: 'https://soundcloud.com/pvkvsv',
      bio: (
        <span>
          pvkvsv (pah•kah'•sah) is a producer, beatmaker, DJ, and curator. With the eclectic musical
          taste he has cultivated, pvkvsv continually seeks to expand upon his artistry. Within the
          past year he has performed live improvised soundscape pieces for both the Associated
          Artists of Pittsburgh’s Performance Series and with Soy Sos & STAYCEE PEARL dance project
          at Kelly Strayhorn Alloy Studios. pvkvsv was also selected as a Pittsburgh Community
          Broadcasting’s Artist in Residency via 91.3 WYEP/ 90.5 WESA. Being a self-taught producer
          , creating music was one of the few ways for him to express and examine himself. As a
          co-founder of Pittsburgh Open Decks, a monthly event where aspiring and experienced DJs
          can sign up to perform on flagship CDJs with no restriction on genre or experience level,
          pvkvsv aims to create avenues for those who may lack a formal musical education to
          express themselves and build upon their own interest in music.
        </span>
      ),
    },
    {
      name: 'Waverly Shivers Jr.',
      role: '3D Modeler',
      headshotPath: '/collaborators/waverly.webp',
      website: 'https://www.waverlyjrdesigns.com/',
      bio: (
        <span>
          Experienced Industrial Designer with a demonstrated history of working in the wholesale
          industry. Skilled in AutoCAD, SolidWorks, Adobe Photoshop, Sketchbook Pro, and Model
          Making. Strong engineering professional with a Bachelor's degree focused in Industrial
          and Product Design from Art Institute of Pittsburgh.
        </span>
      ),
    },
    {
      name: 'Xavery Williams',
      role: 'Soundscape Audio Engineer',
      headshotPath: '/collaborators/white-leaf.webp',
      website: 'https://soundbetter.com/profiles/19252-the-white-leaf-music-company',
      bio: (
        <span>
          Has mixed, mastered, and reviewed music for Grammy-nominated and multi-platinum
          singer-songwriters.
          <br />
          <br />
          Always a self-starter, Xavery founded a music production club in middle school, earned
          his first college degree in Audio Production while still in high school, and now is a
          recent graduate of Berklee College of Music with a Master’s in Music Production,
          Technology, and Innovation; with a secured Post-Master’s Fellowship in the Office of the
          President the following year and has since left his term at Virginia Beach Recording Arts,
          formerly known as Timbaland's Thomas Crowne Studio, as a traditional producer and audio
          engineer, to write a book on mixing and mastering as the official spearhead to the launch
          of The White Leaf Music Company, LLC sometime in 2023.
        </span>
      ),
    },
  ],
  partnerDirectory: [
    {
      name: 'Pittsburgh Center for Arts & Media',
      role: 'Fiscal Sponsor',
      website: 'https://pghartsmedia.org/',
    },
    {
      name: 'Awesome Pittsburgh',
      role: 'Grantor',
      website: 'https://www.awesomefoundation.org/en/chapters/pittsburgh',
    },
    {
      name: 'Collective Action School',
      role: 'Grantor',
      website: 'https://school.logicmag.io/',
    },
    {
      name: 'Elsie Hillman Foundation',
      role: 'Grantor',
      website: 'https://www.elsiehhillmanfoundation.org/',
    },
    {
      name: 'Opportunity Fund',
      role: 'Grantor',
      website: 'https://theopportunityfund.org/',
    },
    {
      name: 'Processing Foundation',
      role: 'Grantor',
      website: 'https://processingfoundation.org/',
    },
  ],
};

export default contributors;

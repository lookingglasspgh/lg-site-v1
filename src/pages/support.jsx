import React from 'react';
import { Book, Inbox, Send } from 'react-feather';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import common from '@/content/common';
import commonStyles from '@/styles/commonStyles';
import Layout from '@/components/common/Layout';
import RouteMetadata from '@/constants/RouteMetadata';
import support from '@/content/support';
import SupportTile from '@/components/support/SupportTile';

const { commonWidths } = commonStyles;

const supportTiles = [
  {
    description: `Learn more about Pittsburgh's Black history through our reading lists.
    Ten percent of each purchase goes to support Looking Glass.`,
    heading: 'Visit our Bookshop',
    icon: <Book size={48} />,
    tileLink: common.links.BOOKSHOP_LINK,
  },
  {
    description: 'Sign up for our mailing list and stay up to date on project milestones and events as we prepare for launch!',
    heading: 'Get Release Updates',
    icon: <Inbox size={48} />,
    tileLink: common.links.SUBSCRIBE_LINK,
  },
  {
    description: `If you connect with our mission to expand access to Black histories and futures,
    share the site with someone in your community. `,
    heading: 'Spread the Word',
    icon: <Send size={48} />,
    tileLink: null,
  },
];

const SupportPage = () => (
  <Layout pageMetadata={RouteMetadata.support}>
    <Flex
      id="support-section-container"
      direction="column"
      width="100%"
      m="0 auto"
      p={{ base: '3rem 1rem 4rem 1rem', md: '3rem 3rem 4rem 3rem', xl: '3rem 0 10rem 0' }}
      maxWidth={commonWidths.maxSectionWidth}
    >
      <Heading as="h1" mb="3rem">{support.HEADING}</Heading>
      <SimpleGrid
        gap={{ base: '2rem', lg: '2rem', xl: '2rem' }}
        columns={{ base: '1', md: '2', xl: '3' }}
      >
        { supportTiles.map((tile) => (
          <SupportTile
            description={tile.description}
            heading={tile.heading}
            icon={tile.icon}
            tileLink={tile.tileLink}
          />
        ))}
      </SimpleGrid>
    </Flex>
  </Layout>
);

export default SupportPage;

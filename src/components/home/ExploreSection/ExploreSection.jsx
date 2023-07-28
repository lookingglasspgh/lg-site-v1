import React from 'react';
import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import commonStyles from '@/styles/commonStyles';
import home from '@/content/home';

const { commonWidths } = commonStyles;

const ExploreSection = () => (
  <Flex
    id="explore-section"
    padding="3rem 0"
    margin="0 auto"
    maxWidth={commonWidths.maxSectionWidth}
  >
    <Flex direction="column">
      <Heading
        as="h2"
        mb="1.5rem"
        display="flex"
        flexDirection="column"
        maxWidth="375px"
      >
        { home.explore.HEADLINE }
      </Heading>
      <Text fontSize="xl" maxWidth="470px">
        { home.explore.CAPTION }
      </Text>
    </Flex>
  </Flex>
);

export default ExploreSection;

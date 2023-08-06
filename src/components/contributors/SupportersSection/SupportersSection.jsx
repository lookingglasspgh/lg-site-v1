import React from 'react';
import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react';

import commonStyles from '@/styles/commonStyles';

const { commonWidths } = commonStyles;

const SupportersSection = () => (
  <Flex
    id="collab-section-container"
    direction="column"
    maxWidth={commonWidths.maxSectionWidth}
    m="0 auto"
    p="3rem 1rem"
  >
    <Heading as="h2">Supporters</Heading>
    <Flex>
      <Box>
        Supporters
      </Box>
    </Flex>
  </Flex>
);

export default SupportersSection;

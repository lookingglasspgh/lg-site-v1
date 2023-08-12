import React from 'react';
import {
  Flex,
  Heading,
} from '@chakra-ui/react';

import commonStyles from '@/styles/commonStyles';
import Layout from '@/components/common/Layout';
import RouteMetadata from '@/constants/RouteMetadata';
import soundscape from '@/content/soundscape';

const { commonWidths } = commonStyles;
const { soundscape: SoundscapeMetadata } = RouteMetadata;

const SoundscapePage = () => (
  <Layout
    pageDescription={SoundscapeMetadata.description}
    title={SoundscapeMetadata.title}
  >
    <Flex
      id="soundscape-container"
      width="100%"
      p={{ base: '3rem 1rem 4rem 1rem', md: '3rem 3rem 4rem 3rem', xl: '3rem 0 10rem 0' }}
      m="0 auto"
      maxWidth={commonWidths.maxSectionWidth}
    >
      <Heading as="h1" mb="3rem">{soundscape.HEADING}</Heading>
    </Flex>
  </Layout>
);

export default SoundscapePage;

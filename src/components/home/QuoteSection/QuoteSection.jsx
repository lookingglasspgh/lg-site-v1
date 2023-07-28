import React from 'react';
import {
  Container,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react';

import conceptArt from '@/public/work/concept-art.png';
import commonStyles from '@/styles/commonStyles';
import home from '@/content/home';
import SiteImage from '@/components/common/SiteImage';

const victoriaLink = 'https://www.instagram.com/victoriadoesartoverhere/';

const { gradients } = commonStyles;

const QuoteSection = () => (
  <Flex
    id="quote-section"
    background={gradients.black}
    alignItems="center"
    justifyContent="center"
    boxShadow="2xl"
    width="100%"
  >
    <Flex id="concept-art-container" direction="column" mr="4rem">
      <SiteImage
        width={500}
        height={400}
        alt="Looking Glass Sculpture Concept Art by artist Victoria Elliott"
        src={conceptArt}
      />
    </Flex>
    <Flex
      id="quote-container"
      direction="column"
      alignItems="center"
    >
      <Container>
        <Text
          fontSize="xl"
          variant="secondary"
        >
          {home.HOOKS_QUOTE}
        </Text>
        <Text
          fontSize="xl"
          variant="secondary"
          mt="0.5rem"
        >
          {home.HOOKS_ATTRIBUTION}
        </Text>
        <Text
          id="concept-art-caption"
          position="relative"
          top="48px"
          fontSize="sm"
          color="black.100"
        >
          Concept Art by&nbsp;
          <Link href={victoriaLink} textDecoration="underline" isExternal>Victoria Elliott</Link>
        </Text>
      </Container>
    </Flex>
  </Flex>
);

export default QuoteSection;

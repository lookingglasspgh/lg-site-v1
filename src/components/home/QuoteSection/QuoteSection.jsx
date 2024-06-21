import React from 'react';
import {
  Container,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react';

import commonStyles from '@/styles/commonStyles';
import home from '@/content/home';
import SiteImage from '@/components/common/SiteImage';

const victoriaLink = 'https://victoriadoesartoverhere.com/home';

const { gradients } = commonStyles;

const QuoteSection = () => (
  <Flex
    id="quote-section"
    background={gradients.black}
    alignItems="center"
    justifyContent="center"
    direction={{ base: 'column-reverse', lg: 'row' }}
    boxShadow="2xl"
    width="100%"
  >
    <Flex
      id="concept-art-container"
      position="relative"
      m={{
        base: '-1rem 0 0 0', md: '-3rem 0 0 0', lg: '0 2rem 0 0', xl: '0 4rem 0 0',
      }}
      width={{
        base: '300px', md: '400px', lg: '425px', xl: '500px',
      }}
      height={{
        base: '240px', md: '320px', lg: '344px', xl: '400px',
      }}
    >
      <SiteImage
        src={home.images.conceptArt}
        alt={home.CONCEPT_ART_ALT}
        fill
        sizes="
          300px,
          (min-width: 768px) 400px,
          (min-width: 992px) 425px,
          (min-width: 1280px) 500px
        "
      />
    </Flex>
    <Flex
      id="quote-container"
      direction="column"
      alignItems="center"
      p={{ base: '3rem 1rem 0 1rem', lg: '0' }}
    >
      <Container>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          variant="secondary"
        >
          {home.HOOKS_QUOTE}
        </Text>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          variant="secondary"
          mt="0.5rem"
        >
          {home.HOOKS_ATTRIBUTION}
        </Text>
        <Text
          id="concept-art-caption"
          display={{ base: 'none', lg: 'block' }}
          position="relative"
          top={{ base: '24px', xl: '48px' }}
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

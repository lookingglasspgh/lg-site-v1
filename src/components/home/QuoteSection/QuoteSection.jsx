import React from 'react';
import {
  Container,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react';

import conceptArt from '@/public/work/concept-art.webp';
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
    direction={{ base: 'column-reverse', lg: 'row' }}
    boxShadow="2xl"
    width="100%"
  >
    <Flex
      id="concept-art-container"
      mr={{ base: '0', lg: '2rem', xl: '4rem' }}
      width={{
        base: '300px', md: '400px', lg: '425px', xl: '500px',
      }}
      height={{
        base: '240px', md: '320px', lg: '344px', xl: '400px',
      }}
    >
      <SiteImage
        alt="Looking Glass Sculpture Concept Art by artist Victoria Elliott"
        src={conceptArt}
      />
    </Flex>
    <Flex
      id="quote-container"
      direction="column"
      alignItems="center"
      p={{ base: '3rem 1rem 0 1rem', lg: '0 0 2rem 0', xl: '0 0 3rem 0' }}
    >
      <Container>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          variant="secondary"
        >
          {home.HOOKS_QUOTE}
        </Text>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          variant="secondary"
          mt="0.5rem"
        >
          {home.HOOKS_ATTRIBUTION}
        </Text>
        <Text
          id="concept-art-caption"
          position="relative"
          top={{ base: '24px', xl: '48px' }}
          fontSize="sm"
          color="ivory.600"
        >
          Concept Art by&nbsp;
          <Link href={victoriaLink} textDecoration="underline" isExternal>Victoria Elliott</Link>
        </Text>
      </Container>
    </Flex>
  </Flex>
);

export default QuoteSection;

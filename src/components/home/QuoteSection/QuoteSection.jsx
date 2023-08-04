import React from 'react';
import {
  Container,
  Flex,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';

import conceptArt from '@/public/work/concept-art.webp';
import commonStyles from '@/styles/commonStyles';
import home from '@/content/home';
import SiteImage from '@/components/common/SiteImage';

const victoriaLink = 'https://www.instagram.com/victoriadoesartoverhere/';

const { gradients } = commonStyles;

const QuoteSection = () => {
  const [isSmallLaptop] = useMediaQuery('(min-width: 992px)');
  const [isTablet] = useMediaQuery('(min-width: 600px)');

  const getCollageSize = () => {
    if (isSmallLaptop) return { width: '500', height: '400' };
    if (!isSmallLaptop && isTablet) return { width: '400', height: '320' };
    return { width: '300', height: '240' };
  };

  return (
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
        m={{ base: '0', lg: '0 4rem 0 0' }}
      >
        <SiteImage
          width={getCollageSize().width}
          height={getCollageSize().height}
          alt="Looking Glass Sculpture Concept Art by artist Victoria Elliott"
          src={conceptArt}
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
            top={{ base: '24px', lg: '48px' }}
            fontSize={{ base: 'xs', lg: 'sm' }}
            color="ivory.600"
          >
            Concept Art by&nbsp;
            <Link href={victoriaLink} textDecoration="underline" isExternal>Victoria Elliott</Link>
          </Text>
        </Container>
      </Flex>
    </Flex>
  );
};

export default QuoteSection;

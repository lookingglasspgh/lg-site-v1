import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { ExternalLink } from 'react-feather';

import commonStyles from '@/styles/commonStyles';
import PageText from '@/components/common/PageText';
import press from '@/content/press';

const { commonWidths } = commonStyles;
const { info } = press;

const InfoSection = () => (
  <Flex
    id="section-container"
    direction="column"
    width="100%"
    m="0 auto"
    p={{ base: '0 1rem 4rem 1rem', md: '0 3rem 4rem 3rem', xl: '0 0 4rem 0' }}
    maxWidth={commonWidths.maxSectionWidth}
  >
    <Heading as="h1" mb="3rem">{info.HEADING}</Heading>
    <Flex backdropFilter="blur(3px)" direction="column" gap="2rem">
      <PageText>{info.CONTACT}</PageText>
      <Link
        aria-label="Looking Glass Media Assets"
        href={info.MEDIA_LINK}
        isExternal
      >
        <Button
          variant="outline"
          boxShadow="none"
          alignItems="center"
          size={{ base: 'sm', md: 'md' }}
          padding="0.5rem"
          gap="0.5rem"
        >
          <ExternalLink size={16} />
          <Text>{info.ASSETS}</Text>
        </Button>
      </Link>
    </Flex>
  </Flex>
);

export default InfoSection;

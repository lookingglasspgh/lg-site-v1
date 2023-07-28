import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Mail, PlayCircle } from 'react-feather';

import common from '@/content/common';
import commonStyles from '@/styles/commonStyles';
import eastLibertyYmca from '@/public/work/east-liberty-ymca.png';
import home from '@/content/home';
import SiteImage from '@/components/common/SiteImage';
import PreviewVideoModal from '@/components/common/PreviewVideoModal';

const { commonWidths } = commonStyles;

const ymcaTeenieLink = 'https://collection.carnegieart.org/objects/9898efaf-f3ee-40c0-ad78-b4d61093ab2f';

const HeroSection = () => {
  const {
    isOpen: isPreviewModalOpen,
    onOpen: onPreviewModalOpen,
    onClose: onPreviewModalClose,
  } = useDisclosure({ id: 'previewModal' });

  const openSubscriptionPage = () => window.open('https://lookingglasspgh.substack.com/', '_blank');

  return (
    <>
      <Flex
        id="hero-section"
        alignItems="center"
        m="0 auto"
        p="3rem 0"
        maxWidth={commonWidths.maxSectionWidth}
      >
        <Flex id="headline-container" direction="column" mr="4rem">
          <Heading
            maxWidth="430px"
            as="h1"
            size="3xl"
            mb="1.5rem"
            sx={{ 'line-height': '1.2' }}
          >
            {home.HEADLINE}
          </Heading>
          <Text
            maxWidth="470px"
            fontSize="xl"
            mb="2.5rem"
          >
            {home.ABOUT_CAPTION}
          </Text>
          <Flex maxWidth="470px">
            <Button color="ivory.500" onClick={openSubscriptionPage}>
              <Mail size={20} />
              <Text ml="0.5rem" variant="secondary">
                {common.SUBSCRIBE}
              </Text>
            </Button>
            <Button variant="ghost" ml="0.5rem" onClick={onPreviewModalOpen}>
              <PlayCircle size={20} />
              <Text ml="0.5rem">{common.PLAY_PREVIEW}</Text>
            </Button>
          </Flex>
        </Flex>
        <Flex id="collage-container-1" direction="column">
          <Box id="collage-wrapper" boxShadow="2xl">
            <SiteImage
              src={eastLibertyYmca}
              width="600"
              height="600"
              priority
              alt="40.461142, -79.926171 - Looking Glass x Teenie Harris"
              style={{ borderRadius: '4px' }}
            />
          </Box>
          <Text id="collage-caption" mt="1rem" textAlign="center">
            <b>40.461142, -79.926171</b>
            &nbsp;- Looking Glass x&nbsp;
            <Link href={ymcaTeenieLink} textDecoration="underline" isExternal>Teenie Harris</Link>
          </Text>
        </Flex>
      </Flex>
      <PreviewVideoModal
        isOpen={isPreviewModalOpen}
        onClose={onPreviewModalClose}
      />
    </>
  );
};

export default HeroSection;

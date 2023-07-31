import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Info, Mail, PlayCircle } from 'react-feather';

import TeenieModal from '../TeenieModal/TeenieModal';

import common from '@/content/common';
import commonStyles from '@/styles/commonStyles';
import eastLibertyYmca from '@/public/work/east-liberty-ymca.png';
import home from '@/content/home';
import SiteImage from '@/components/common/SiteImage';
import PreviewVideoModal from '@/components/common/PreviewVideoModal';

const { commonWidths } = commonStyles;

const HeroSection = () => {
  const {
    isOpen: isPreviewModalOpen,
    onOpen: onPreviewModalOpen,
    onClose: onPreviewModalClose,
  } = useDisclosure({ id: 'previewModal' });

  const {
    isOpen: isTeenieModalOpen,
    onOpen: onTeenieModalOpen,
    onClose: onTeenieModalClose,
  } = useDisclosure({ id: 'teenieModal' });

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
            fontSize="2xl"
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
          <Button
            variant="ghost"
            alignItems="center"
            m="1rem auto 0 auto"
            width="fit-content"
            onClick={onTeenieModalOpen}
          >
            <Text id="collage-caption" textAlign="center" mr="0.5rem">
              { home.COLLAGE_TITLE }
            </Text>
            <Info size={16} />
          </Button>
        </Flex>
      </Flex>
      <PreviewVideoModal
        isOpen={isPreviewModalOpen}
        onClose={onPreviewModalClose}
      />
      <TeenieModal
        isOpen={isTeenieModalOpen}
        onClose={onTeenieModalClose}
      />
    </>
  );
};

export default HeroSection;

import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { Mail, MapPin, PlayCircle } from 'react-feather';

import TeenieModal from '../TeenieModal/TeenieModal';

import common from '@/content/common';
import commonStyles from '@/styles/commonStyles';
import eastLibertyYmca from '@/public/work/east-liberty-ymca.webp';
import home from '@/content/home';
import SiteImage from '@/components/common/SiteImage';
import PreviewVideoModal from '@/components/common/PreviewVideoModal';

const { commonWidths } = commonStyles;

const headingMaxWidths = {
  base: '350px', md: '430px', lg: '350px', xl: '430px !important',
};

const textAndButtonMaxWidths = {
  base: '350px', md: '470px', lg: '400px', xl: '470px',
};

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

  const [showHeroPlaceholder, setShowHeroPlaceholder] = useState(true);
  const hidePlaceholder = () => {
    console.log('complete');
    setShowHeroPlaceholder(false);
  };

  const [isLargeLaptop] = useMediaQuery('(min-width: 1200px)');
  const [isSmallLaptop] = useMediaQuery('(min-width: 992px)');
  const [isTablet] = useMediaQuery('(min-width: 600px)');

  const getCollageSize = () => {
    if (isLargeLaptop) return { width: '600', height: '588' };
    if (isSmallLaptop) return { width: '450', height: '441' };
    if (!isLargeLaptop && !isSmallLaptop && isTablet) return { width: '550', height: '539' };
    return { width: '325', height: '319' };
  };

  const openSubscriptionPage = () => window.open('https://lookingglasspgh.substack.com/', '_blank');

  return (
    <>
      <Flex
        id="hero-section"
        direction={{ base: 'column', lg: 'row' }}
        alignItems="center"
        m="0 auto"
        p="3rem 1rem"
        maxWidth={commonWidths.maxSectionWidth}
      >
        <Flex
          id="headline-container"
          direction="column"
          m={{ base: '0 0 3rem 0', lg: '0 4rem 0 0' }}
        >
          <Heading
            maxWidth={headingMaxWidths}
            as="h1"
            size={{ base: '2xl', xl: '3xl' }}
            mb="1.5rem"
            sx={{ 'line-height': '1.2' }}
          >
            {home.HEADLINE}
          </Heading>
          <Text
            maxWidth={textAndButtonMaxWidths}
            fontSize={{ base: 'lg', md: '2xl' }}
            mb="2.5rem"
          >
            {home.ABOUT_CAPTION}
          </Text>
          <Flex
            maxWidth={textAndButtonMaxWidths}
            direction={{ base: 'column', lg: 'row' }}
          >
            <Button
              size={{ base: 'md', lg: 'sm', xl: 'md' }}
              onClick={openSubscriptionPage}
            >
              <Mail size={20} />
              <Text ml="0.5rem" variant="secondary">
                {common.SUBSCRIBE}
              </Text>
            </Button>
            <Button
              variant="ghost"
              size={{ base: 'md', lg: 'sm', xl: 'md' }}
              ml={{ base: '0', lg: '0.5rem' }}
              onClick={onPreviewModalOpen}
            >
              <PlayCircle size={20} />
              <Text ml="0.5rem">{common.PLAY_PREVIEW}</Text>
            </Button>
          </Flex>
        </Flex>
        <Flex id="collage-container-1" direction="column">
          <Box id="collage-wrapper">
            { showHeroPlaceholder && (
              <Box width={getCollageSize().width} height={getCollageSize().height} />
            )}
            { !showHeroPlaceholder && (
              <SiteImage
                src={eastLibertyYmca}
                width={getCollageSize().width}
                height={getCollageSize().height}
                onLoad={() => hidePlaceholder()}
                loading="eager"
                alt="40.461142, -79.926171 - Looking Glass x Teenie Harris"
                style={{ borderRadius: '4px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              />
            )}
          </Box>
          <Button
            variant="outline"
            alignItems="center"
            m="1rem auto 0 auto"
            size="sm"
            width="fit-content"
            onClick={onTeenieModalOpen}
          >
            <MapPin size={18} />
            <Text id="collage-caption" textAlign="center" ml="0.5rem">
              { home.COLLAGE_TITLE }
            </Text>
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

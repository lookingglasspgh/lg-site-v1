import React from 'react';
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

  const [isLargeLaptop] = useMediaQuery('(min-width: 1200px)');
  const [isSmallLaptop] = useMediaQuery('(min-width: 992px)');
  const [isTablet] = useMediaQuery('(min-width: 600px)');

  const getCollageSize = () => {
    if (isLargeLaptop) return '600';
    if (isSmallLaptop) return '450';
    if (!isLargeLaptop && !isSmallLaptop && isTablet) return '550';
    return '325';
  };

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
          mr={{ base: '0', lg: '4rem' }}
          mb={{ base: '3rem', lg: '0' }}
        >
          <Heading
            maxWidth={
              {
                base: '350px', md: '430px', lg: '350px', xl: '430px !important',
              }
            }
            as="h1"
            size={{ base: '2xl', xl: '3xl' }}
            mb="1.5rem"
            sx={{ 'line-height': '1.2' }}
          >
            {home.HEADLINE}
          </Heading>
          <Text
            maxWidth={
              {
                base: '350px', md: '470px', lg: '400px', xl: '470px',
              }
            }
            fontSize={{ base: 'lg', md: '2xl' }}
            mb="2.5rem"
          >
            {home.ABOUT_CAPTION}
          </Text>
          <Flex
            maxWidth={
              {
                base: '430px', md: '470px', lg: '400px', xl: '470px',
              }
            }
            direction={{ base: 'column', xl: 'row' }}
          >
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
              width={getCollageSize()}
              height={getCollageSize()}
              priority
              alt="40.461142, -79.926171 - Looking Glass x Teenie Harris"
              style={{ borderRadius: '4px' }}
            />
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

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
import { Mail, MapPin, PlayCircle } from 'react-feather';

import TeenieModal from '../TeenieModal/TeenieModal';

import common from '@/content/common';
import commonStyles from '@/styles/commonStyles';
import eastLibertyYmca from '@/public/work/east-liberty-ymca.webp';
import home from '@/content/home';
import SiteImage from '@/components/common/SiteImage';
import PreviewVideoModal from '@/components/common/PreviewVideoModal';

const { commonWidths } = commonStyles;
const textAndButtonMaxWidths = {
  base: '350px', md: '470px', lg: '450px', xl: '470px',
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
          m={{ base: '0 0 3rem 0', lg: '0 3rem 0 0', xl: '0 4rem 0 0' }}
        >
          <Heading
            as="h1"
            size={{ base: '2xl', xl: '3xl' }}
            textAlign={{ base: 'center', lg: 'left' }}
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
            <Link
              _hover={{ textDecoration: 'none' }}
              href={common.SUBSCRIBE_LINK}
              isExternal
            >
              <Button
                size={{ base: 'md', lg: 'md' }}
              >
                <Mail size={20} />
                <Text ml="0.5rem" variant="secondary">
                  {common.SUBSCRIBE}
                </Text>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size={{ base: 'md', lg: 'md' }}
              ml={{ base: '0', lg: '0.5rem' }}
              onClick={onPreviewModalOpen}
            >
              <PlayCircle size={20} />
              <Text ml="0.5rem">{common.PLAY_PREVIEW}</Text>
            </Button>
          </Flex>
        </Flex>
        <Flex id="collage-container-1" direction="column">
          <Box
            id="collage-wrapper"
            width={{
              base: '325px', md: '550px', lg: '450px', xl: '600px',
            }}
            height={{
              base: '319px', md: '539px', lg: '441px', xl: '588px',
            }}
          >
            <SiteImage
              src={eastLibertyYmca}
              loading="eager"
              alt="40.461142, -79.926171 - Looking Glass x Teenie Harris"
              style={{
                borderRadius: '4px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
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

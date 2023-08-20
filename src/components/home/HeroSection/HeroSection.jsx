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
import eastLibertyYmca from '@/public/work/east-liberty-ymca.webp';
import home from '@/content/home';
import PreviewVideoModal from '@/components/common/PreviewVideoModal';
import SectionContainer from '@/components/common/SectionContainer';
import SiteImage from '@/components/common/SiteImage';

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
      <SectionContainer
        id="hero-section"
        direction={{ base: 'column', lg: 'row' }}
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
          >
            {home.HEADLINE}
          </Heading>
          <Text
            maxWidth={{ ...textAndButtonMaxWidths, lg: '470px' }}
            fontSize={{ base: 'lg', md: '2xl' }}
            mb="2.5rem"
          >
            {home.ABOUT_CAPTION}
          </Text>
          <Flex
            maxWidth={textAndButtonMaxWidths}
            direction={{ base: 'column', lg: 'row' }}
            alignItems="center"
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
              priority
              alt={home.COLLAGE_ALT}
              sizes="
                325px,
                (min-width: 768px) 550px,
                (min-width: 992px) 450px,
                (min-width: 1280px) 600px
              "
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
      </SectionContainer>
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

import React, { useEffect, useRef } from 'react';
import {
  Container,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { isSafari } from 'react-device-detect';
import { useInView } from 'framer-motion';

import commonStyles from '@/styles/commonStyles';
import home from '@/content/home';

const { commonWidths } = commonStyles;

const ExploreSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { amount: 0, once: true });
  const isVideoInView = useInView(videoRef, { amount: 0.5 });

  const pauseVideo = () => videoRef?.current.pause();
  // Safari doesn't allow programmatic video play
  const playVideo = () => (isSafari ? null : videoRef?.current.play());

  // Since Safari can't autoplay our way, we need to add video controls
  useEffect(() => {
    if (isSafari) videoRef.current.controls = true;
  }, []);

  // Effect allows video to be lazy-loaded, while preserving play specifications
  useEffect(() => {
    if (isSectionInView && videoRef) {
      const videoSource = videoRef.current.children[0];
      videoSource.src = videoSource.dataset.src;
      videoRef.current.load();
      videoRef.current.pause();
    }
  }, [isSectionInView]);

  useEffect(() => {
    if (isVideoInView) playVideo();
    else pauseVideo();
  }, [isVideoInView]);

  return (
    <Flex
      id="explore-section"
      direction={{ base: 'column', lg: 'row' }}
      padding="4rem 0"
      margin="0 auto"
      alignItems="center"
      justifyContent="space-between"
      maxWidth={commonWidths.maxSectionWidth}
      ref={sectionRef}
    >
      <Flex
        id="explore-text-area"
        direction="column"
        m={{ base: '0 0 2rem 0', lg: '0' }}
        p={{ base: '0 1rem', lg: '0' }}
      >
        <Container>
          <Heading
            as="h2"
            mb="1.5rem"
          >
            { home.explore.HEADLINE }
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: '2xl' }}
            mb="1rem"
          >
            { home.explore.CAPTION }
          </Text>
          <Text
            fontSize={{ base: 'lg', md: '2xl' }}
          >
            { home.explore.CAPTION_TWO }
          </Text>
        </Container>
      </Flex>
      <Flex
        maxWidth={{ base: '19.5rem', md: '22rem' }}
        ml={{ base: '0', lg: '2rem', xl: '4rem' }}
        boxShadow="2xl"
        borderRadius="40px"
      >
        <video
          autoPlay
          muted
          playsInline
          poster={home.images.demoPlaceholder}
          style={{ borderRadius: '40px', border: '8px solid #020314' }}
          ref={videoRef}
        >
          <source
            data-src={home.demoLoop}
            type="video/mp4"
          />
        </video>
      </Flex>
    </Flex>
  );
};

export default ExploreSection;

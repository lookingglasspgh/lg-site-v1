import React, { useEffect, useRef } from 'react';
import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useInView } from 'framer-motion';

import commonStyles from '@/styles/commonStyles';
import home from '@/content/home';

const { commonWidths } = commonStyles;

const ExploreSection = () => {
  const videoRef = useRef(null);

  const isVideoInView = useInView(videoRef, { amount: 0.5 });
  const pauseVideo = () => videoRef?.current.pause();
  const playVideo = () => videoRef?.current.play();

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
    >
      <Flex
        direction="column"
        m={{ base: '0 0 4rem 0', lg: '0 4rem 0 0' }}
      >
        <Heading
          as="h2"
          mb="1.5rem"
          display="flex"
          flexDirection="column"
          maxWidth="325px"
        >
          { home.explore.HEADLINE }
        </Heading>
        <Text
          fontSize={{ base: 'lg', md: '2xl' }}
          maxWidth={{ base: '350px', md: '450px' }}
          mb="1rem"
        >
          { home.explore.CAPTION }
        </Text>
        <Text
          fontSize={{ base: 'lg', md: '2xl' }}
          maxWidth={{ base: '350px', md: '450px' }}
        >
          { home.explore.CAPTION_TWO }
        </Text>
      </Flex>
      <Flex
        maxWidth={{ base: '20rem', md: '22rem' }}
        boxShadow="2xl"
        borderRadius="40px"
      >
        <video
          autoPlay
          muted
          loop
          style={{ 'border-radius': '40px', border: '8px solid #020314' }}
          ref={videoRef}
        >
          <source src="work/demo-loop.mp4" type="video/mp4" />
        </video>
      </Flex>
    </Flex>
  );
};

export default ExploreSection;

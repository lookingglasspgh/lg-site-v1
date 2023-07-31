import React, { useLayoutEffect, useRef } from 'react';
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

  useLayoutEffect(() => {
    if (isVideoInView) playVideo();
    else pauseVideo();
  }, [isVideoInView]);

  return (
    <Flex
      id="explore-section"
      padding="4rem 0"
      margin="0 auto"
      alignItems="center"
      justifyContent="space-between"
      maxWidth={commonWidths.maxSectionWidth}
    >
      <Flex direction="column" mr="4rem">
        <Heading
          as="h2"
          mb="1.5rem"
          display="flex"
          flexDirection="column"
          maxWidth="375px"
        >
          { home.explore.HEADLINE }
        </Heading>
        <Text fontSize="2xl" maxWidth="450px">
          { home.explore.CAPTION }
        </Text>
        <Text fontSize="2xl" maxWidth="450px" mt="1rem">
          { home.explore.CAPTION_TWO }
        </Text>
      </Flex>
      <Flex maxWidth="22rem" boxShadow="2xl" borderRadius="40px">
        <video
          autoPlay
          muted
          loop
          style={{ 'border-radius': '40px', border: '8px solid #020314' }}
          ref={videoRef}
        >
          <source src="work/prototype-demo-loop.mp4" type="video/mp4" />
        </video>
      </Flex>
    </Flex>
  );
};

export default ExploreSection;

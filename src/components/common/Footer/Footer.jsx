import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import ContactButton from '@/components/common/ContactButton';
import SiteImage from '@/components/common/SiteImage';

const Footer = () => (
  <Flex
    id="footer-container"
    width="100%"
    padding={{ base: '2.5rem', md: '1.5rem' }}
    alignItems="center"
    justifyContent={{ base: 'center', md: 'space-between' }}
    direction={{ base: 'column', md: 'row' }}
    borderTop="0.5px solid"
    borderTopColor="black.300"
    backgroundColor="ivory.500"
  >
    <Box
      width={{ base: '200px', md: '250px' }}
      height={{ base: '80px', md: '100px' }}
      position="relative"
      direction="column"
      mb={{ base: '2rem', md: '0' }}
    >
      <SiteImage
        src="/resources/logo-lg-black.svg"
        fill
        alt="Looking Glass logo"
      />
    </Box>
    <Flex id="footer-items">
      <ContactButton
        isFooterButton
        size={{ base: 'sm', md: 'md' }}
      />
    </Flex>
  </Flex>
);

export default Footer;

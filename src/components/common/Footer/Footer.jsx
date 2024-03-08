import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Inbox, Youtube } from 'react-feather';

import ContactButton from '../ContactButton';

import common from '@/content/common';
import SiteImage from '@/components/common/SiteImage';

const lgYoutube = 'https://www.youtube.com/@lookingglasspgh';

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
      mb={{ base: '1.5rem', md: '0' }}
    >
      <SiteImage
        src="/resources/logo-lg-black.svg"
        fill
        sizes="200px, (min-width: 768px) 250px"
        alt="Looking Glass logo"
      />
    </Box>
    <Flex gap="1.5rem" flexDirection="column">
      <Flex alignItems="center" gap="1.5rem" justifyContent="flex-end">
        <ContactButton isFooterButton padding="0" height="100%" />
        <Link color="black.300" href={common.SUBSCRIBE_LINK}>
          <Inbox size={24} />
        </Link>
        <Link color="black.300" href={lgYoutube}>
          <Youtube size={24} />
        </Link>
      </Flex>
    </Flex>
  </Flex>
);

export default Footer;

import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import { Inbox, Youtube } from 'react-feather';

import ContactButton from '../ContactButton';
import {
  FooterButton,
  FooterContainer,
  ImageContainer,
  LinkContainer,
} from './Footer.styles';

import common from '@/content/common';
import { RouteList } from '@/constants/RouteList';
import SiteImage from '@/components/common/SiteImage';

const { accessibility, footer, links } = common;

const Footer = () => (
  <FooterContainer id="footer-container">
    <ImageContainer>
      <SiteImage
        src="/resources/logo-lg-black.svg"
        fill
        sizes="200px, (min-width: 768px) 250px"
        alt={accessibility.LOGO_ALT}
      />
    </ImageContainer>
    <Flex gap="1rem" flexDirection="column">
      <LinkContainer direction="row">
        <ContactButton />
        <Link
          href={links.SUBSCRIBE_LINK}
          aria-label={accessibility.SUBSCRIBE_ALT}
        >
          <FooterButton
            variant="ghost"
            size="sm"
          >
            <Inbox size={20} />
            <Text>{footer.NEWSLETTER}</Text>
          </FooterButton>
        </Link>
        <Link
          href={links.YOUTUBE_LINK}
          aria-label={accessibility.YOUTUBE_ALT}
        >
          <FooterButton
            variant="ghost"
            size="sm"
          >
            <Youtube size={20} />
            <Text>{footer.YOUTUBE}</Text>
          </FooterButton>
        </Link>
      </LinkContainer>
      <LinkContainer
        gap={{ base: '2rem', md: '1rem' }}
        direction="row"
        justifyContent={{ base: 'center', md: 'flex-end' }}
      >
        <Link href={RouteList.TERMS}>
          <Text fontWeight="600" fontSize="sm">
            {footer.TERMS}
          </Text>
        </Link>
        <Link href={RouteList.PRIVACY}>
          <Text fontWeight="600" fontSize="sm">
            {footer.PRIVACY}
          </Text>
        </Link>
      </LinkContainer>
    </Flex>
  </FooterContainer>
);

export default Footer;

import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Inbox, Youtube } from 'react-feather';

import ContactButton from '../ContactButton';
import {
  FooterContainer,
  ImageContainer,
  LinkContainer,
  StyledLink,
} from './Footer.styles';

import common from '@/content/common';
import { RouteList } from '@/constants/RouteList';
import SiteImage from '@/components/common/SiteImage';

const lgYoutube = 'https://www.youtube.com/@lookingglasspgh';

const Footer = () => (
  <FooterContainer id="footer-container">
    <ImageContainer>
      <SiteImage
        src="/resources/logo-lg-black.svg"
        fill
        sizes="200px, (min-width: 768px) 250px"
        alt="Looking Glass logo"
      />
    </ImageContainer>
    <Flex gap="1.5rem" flexDirection="column">
      <LinkContainer>
        <ContactButton isFooterButton padding="0" height="100%" />
        <StyledLink href={common.SUBSCRIBE_LINK}>
          <Inbox size={24} />
        </StyledLink>
        <StyledLink href={lgYoutube}>
          <Youtube size={24} />
        </StyledLink>
      </LinkContainer>
      <LinkContainer gap={{ base: '1.5rem', md: '1rem' }}>
        <StyledLink href={RouteList.TERMS}>
          <Text>{common.footer.TERMS}</Text>
        </StyledLink>
        <StyledLink href={RouteList.PRIVACY}>
          <Text>{common.footer.PRIVACY}</Text>
        </StyledLink>
      </LinkContainer>
    </Flex>
  </FooterContainer>
);

export default Footer;

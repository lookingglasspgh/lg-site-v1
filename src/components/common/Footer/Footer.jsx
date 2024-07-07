import React from 'react';
import { Flex, Text, Tooltip } from '@chakra-ui/react';
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

const { tooltips } = common.footer;

const Footer = () => (
  <FooterContainer id="footer-container">
    <ImageContainer>
      <SiteImage
        src="/resources/logo-lg-black.svg"
        fill
        sizes="200px, (min-width: 768px) 250px"
        alt={common.accessibility.LOGO_ALT}
      />
    </ImageContainer>
    <Flex gap="1.5rem" flexDirection="column">
      <LinkContainer>
        <ContactButton
          isFooterButton
          padding="0"
          height="100%"
        />
        <Tooltip
          placement="top"
          label={tooltips.NEWSLETTER}
          hasArrow
        >
          <StyledLink
            href={common.links.SUBSCRIBE_LINK}
            aria-label={common.accessibility.SUBSCRIBE_ALT}
          >
            <Inbox size={24} />
          </StyledLink>
        </Tooltip>
        <Tooltip
          placement="top"
          label={tooltips.YOUTUBE}
          hasArrow
        >
          <StyledLink
            href={common.links.YOUTUBE_LINK}
            aria-label={common.accessibility.YOUTUBE_ALT}
          >
            <Youtube size={24} />
          </StyledLink>
        </Tooltip>
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

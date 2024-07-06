import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import MobileMenu from './components/MobileMenu';

import common from '@/content/common';
import DownloadButton from '../DownloadButton';
import { NavBarRoutes, RouteList } from '@/constants/RouteList';
import SiteImage from '@/components/common/SiteImage';

const NavBar = () => {
  const router = useRouter();
  const showDownloadButton = router.pathname !== RouteList.HOME;

  return (
    <Flex
      id="navbar-container"
      width="100%"
      padding={{ base: '1rem', md: '1rem 1.5rem' }}
      alignItems="center"
      justifyContent={{ base: 'center', lg: 'space-between' }}
      borderBottom="0.5px solid"
      borderBottomColor="black.300"
      backgroundColor="ivory.500"
    >
      <Link
        id="home-link"
        as={NextLink}
        href={RouteList.HOME}
        prefetch={false}
        width={{ base: '200px', md: '250px' }}
        height={{ base: '80px', md: '100px' }}
        position="relative"
        aria-label={common.accessibility.HOME_ALT}
      >
        <SiteImage
          src="/resources/logo-lg-black.svg"
          fill
          sizes="200px, (min-width: 768px) 250px"
          alt={common.accessibility.LOGO_ALT}
        />
      </Link>
      <Flex
        id="nav-list"
        display={{ base: 'none', lg: 'flex' }}
        alignItems="center"
        gap="1.5rem"
      >
        { NavBarRoutes.map((route) => (
          <Link
            as={NextLink}
            key={route.title}
            color="black.500"
            href={route.path}
            fontSize="md"
            transition="all 0.2s"
            _hover={{ color: 'pink.900' }}
          >
            {route.title}
          </Link>
        ))}
        { showDownloadButton && (
          <DownloadButton isNavBarButton />
        )}
      </Flex>
      <MobileMenu />
    </Flex>
  );
};

export default NavBar;

import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import MobileMenu from './components/MobileMenu';

import { NavBarRoutes, RouteList } from '@/constants/RouteList';
import SiteImage from '@/components/common/SiteImage';

const NavBar = () => (
  <Flex
    id="navbar-container"
    width="100%"
    padding={{ base: '1rem', md: '1.5rem' }}
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
      width={{ base: '200px', md: '250px' }}
      height={{ base: '80px', md: '100px' }}
      position="relative"
      ml={{ base: 'auto', lg: '0' }}
    >
      <SiteImage
        src="/resources/logo-lg-black.svg"
        fill
        alt="Looking Glass logo and link to home page"
      />
    </Link>
    <Flex
      id="nav-list"
      display={{ base: 'none', lg: 'flex' }}
    >
      { NavBarRoutes.map((route) => (
        <Link
          as={NextLink}
          key={route.title}
          color="black.500"
          href={route.path}
          fontSize="lg"
          mr="1.5rem"
          transition="all 0.2s"
          _hover={{ color: 'pink.500' }}
        >
          {route.title}
        </Link>
      ))}
    </Flex>
    <MobileMenu />
  </Flex>
);

export default NavBar;

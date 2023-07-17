import React from 'react';
import {
  Flex,
  Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

import LinkMenu from './components/LinkMenu';

import {
  // MobileMenuRoutes,
  NavBarRoutes,
  RouteList,
} from '@/constants/RouteList';

// const NavDisplays = {
//   base: 'none',
//   lg: 'flex',
// };

const NavBar = () => (
  <Flex
    width="100%"
    padding="1.5rem"
    alignItems="center"
    justifyContent="space-between"
    borderBottom="0.5px solid"
    borderBottomColor="black.300"
    backgroundColor="ivory.500"
  >
    <Link as={NextLink} href={RouteList.HOME}>
      <Image
        src="/resources/logo-lg-black.svg"
        width={250}
        height={100}
        alt="Looking Glass logo and link to home page"
      />
    </Link>
    <Flex>
      { NavBarRoutes.map((route) => (
        route.path ? (
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
        ) : (
          <LinkMenu
            key={route.title}
            title={route.title}
            listRoutes={route.listRoutes}
          />
        )
      ))}
    </Flex>
  </Flex>
);

export default NavBar;

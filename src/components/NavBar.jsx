import React from 'react';
import { ChevronDown } from 'react-feather';
import {
  Flex,
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text
} from '@chakra-ui/react'
import Image from 'next/image';
import NextLink from 'next/link';
import styled from '@emotion/styled';

import { colors } from '@/styles/theme';
import {
  MobileMenuRoutes,
  NavBarRoutes,
  RouteList,
} from '@/constants/RouteList';

const NavDisplays = {
  base: 'none',
  lg: 'flex',
};

const StyledChevron = styled(ChevronDown)`
  margin-top: 4px;
  margin-left: 2px;
  color: ${colors.black[500]};
`;

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
    { NavBarRoutes.map(route => (
      route.path ? (
        <Link
          as={NextLink}
          key={route.title}
          color="black.500"
          href={route.path}
          fontSize="lg"
          mr="1.5rem"
          transition="all 0.2s"
          _hover={{ color: 'purple.500' }}
        >
          {route.title}
        </Link>
      ) : (
        <Popover key={route.title} >
          <PopoverTrigger>
            <Text
              fontSize="lg"
              mr="1.5rem"
              display="flex"
              transition="all 0.2s"
              _hover={{ color: 'purple.500', cursor: 'pointer' }}
            >
              {route.title}
              <StyledChevron size={20} />
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              More Links
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )
    ))}
    </Flex>
  </Flex>
);

export default NavBar;

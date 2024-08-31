import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import { Menu } from 'react-feather';
import NextLink from 'next/link';

import DownloadButton from '@/components/common/DownloadButton';
import { MobileMenuRoutes } from '@/constants/RouteList';

import { DrawerContent, MenuButtonContainer } from './MobileMenu.styles';

const MobileMenu = () => {
  const {
    isOpen: isDrawerOpen,
    onClose: onDrawerClose,
    onOpen: onDrawerOpen,
  } = useDisclosure({ id: 'mobileMenu' });

  return (
    <>
      <MenuButtonContainer
        onClick={onDrawerOpen}
      >
        <Menu size="100%" />
      </MenuButtonContainer>
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton
              size="lg"
              _focus={{ boxShadow: 'none' }}
              top="1.5rem"
            />
          </DrawerHeader>
          <DrawerBody
            display="flex"
            flexDirection="column"
            mt="3rem"
          >
            <Flex direction="column" gap="1rem">
              {MobileMenuRoutes.map((route) => (
                <Link
                  as={NextLink}
                  key={route.title}
                  href={route.path}
                  fontSize="2xl"
                  mr="1.5rem"
                  transition="all 0.2s"
                  prefetch={false}
                  _last={{ mb: '0' }}
                  _hover={{ color: 'pink.50' }}
                >
                  {route.title}
                </Link>
              ))}
            </Flex>
            <DownloadButton mt="4rem" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;

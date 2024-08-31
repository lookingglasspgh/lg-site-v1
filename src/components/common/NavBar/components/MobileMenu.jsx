import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
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

const MobileMenu = () => {
  const {
    isOpen: isDrawerOpen,
    onClose: onDrawerClose,
    onOpen: onDrawerOpen,
  } = useDisclosure({ id: 'mobileMenu' });

  return (
    <>
      <Box
        display={{ base: 'block', lg: 'none' }}
        width={{ base: '24px', md: '32px' }}
        position="absolute"
        right="1rem"
        color="black.500"
        cursor="pointer"
        onClick={onDrawerOpen}
      >
        <Menu size="100%" />
      </Box>
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="rgba(27,28,44, .9)"
          color="ivory.400"
          padding="1rem"
          backdropFilter="blur(6px)"
        >
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
            <Flex direction="column">
              {MobileMenuRoutes.map((route) => (
                <Link
                  as={NextLink}
                  key={route.title}
                  href={route.path}
                  fontSize="2xl"
                  mr="1.5rem"
                  mb="1rem"
                  transition="all 0.2s"
                  prefetch={false}
                  _last={{ mb: '0' }}
                  _hover={{ color: 'pink.50' }}
                >
                  {route.title}
                </Link>
              ))}
            </Flex>
            <DownloadButton m="auto 0" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;

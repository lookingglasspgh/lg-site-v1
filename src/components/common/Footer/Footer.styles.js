import {
  Box,
  chakra,
  Flex,
  Link,
} from '@chakra-ui/react';

export const FooterContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'ivory.500',
    borderTop: '0.5px solid',
    borderTopColor: 'black.300',
    padding: { base: '2.5rem', md: '1.5rem' },
    flexDirection: { base: 'column', md: 'row' },
    justifyContent: { base: 'center', md: 'space-between' },
  },
});

export const ImageContainer = chakra(Box, {
  baseStyle: {
    width: { base: '200px', md: '250px' },
    height: { base: '80px', md: '100px' },
    position: 'relative',
    mb: { base: '1.5rem', md: '0' },
  },
});

export const LinkContainer = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    gap: '1.5rem',
    justifyContent: 'flex-end',
  },
});

export const StyledLink = chakra(Link, {
  color: 'black.300',
});

import {
  Box,
  Button,
  chakra,
  Flex,
  Text,
} from '@chakra-ui/react';

export const ButtonText = chakra(Text, {
  baseStyle: {
    color: 'ivory.400',
    fontSize: 'sm',
  },
});

export const CardButton = chakra(Button, {
  baseStyle: {
    borderColor: 'ivory.400',
    color: 'ivory.400',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem',
    _hover: {
      backgroundColor: 'black.500',
    },
  },
});

export const CardDetails = chakra(Flex, {
  baseStyle: {
    flexDirection: 'column',
    minHeight: { base: 'unset', md: '83px', xl: 'unset' },
    gap: '0.25rem',
    marginBottom: { base: '1.5rem', xl: '2.5rem' },
  },
});

export const Container = chakra(Flex, {
  baseStyle: {
    flexDirection: 'column',
    padding: { base: '1rem', md: '2rem' },
    gap: '1rem',
    borderRadius: 'lg',
    boxShadow: '2xl',
    maxWidth: { base: '15rem', md: 'unset' },
    margin: '0 auto',
  },
});

const imageSizes = {
  base: '13rem',
  md: '16rem',
  lg: '13rem',
  xl: '19.625rem',
};

export const ImageContainer = chakra(Box, {
  baseStyle: {
    position: 'relative',
    width: imageSizes,
    height: imageSizes,
    flexShrink: 0,
  },
});

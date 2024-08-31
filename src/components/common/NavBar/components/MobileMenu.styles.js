import {
  Box,
  chakra,
  DrawerContent as Content,
} from '@chakra-ui/react';

export const DrawerContent = chakra(Content, {
  baseStyle: {
    background: 'linear-gradient(137deg, rgba(2,3,20,0.85) 0%, rgba(27,28,44,0.8) 50%, rgba(53,53,67,0.65) 100%)',
    color: 'ivory.400',
    padding: '1rem',
    backdropFilter: 'blur(16px)',
  },
});

export const MenuButtonContainer = chakra(Box, {
  baseStyle: {
    display: { base: 'block', lg: 'none' },
    width: { base: '24px', md: '32px' },
    position: 'absolute',
    right: '1rem',
    color: 'black.500',
    cursor: 'pointer',
  },
});

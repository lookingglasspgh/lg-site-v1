import { extendTheme } from '@chakra-ui/react';
// eslint-disable-next-line camelcase
import { Outfit, Spline_Sans } from 'next/font/google';

import {
  Button,
  Divider,
  Heading,
  Text,
} from './components';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

const splineSans = Spline_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
};

export const colors = {
  black: {
    500: '#020314',
    400: '#1B1C2C',
    300: '#353543',
    200: '#676872',
    100: '#9A9AA1',
  },
  gold: {
    500: '#E4B416',
  },
  ivory: {
    600: '#D7D4CB',
    500: '#EFECE2',
    400: '#F1EEE5',
  },
  pink: {
    600: '#C80064',
    500: '#DE006F',
  },
  purple: {
    600: '#512D9B',
    500: '#5A32AC',
    400: '#8532AC',
    300: '#B332BE',
  },
};

const fonts = {
  heading: outfit.style.fontFamily,
  body: splineSans.style.fontFamily,
};

const fontSizes = {
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  md: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const styles = {
  global: {
    body: {
      bg: 'ivory.500',
    },
  },
};

export const theme = extendTheme({
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  components: {
    Button,
    Divider,
    Heading,
    Text,
  },
  styles,
});

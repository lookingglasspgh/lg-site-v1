import { extendTheme } from '@chakra-ui/react';

const colors = {
  black: {
    500: '#020314',
    400: '#1B1C2C',
    300: '#353543',
    200: '#676872',
    100: '#9A9AA1'
  },
  gold: {
    500: '#E4B416',
  },
  ivory: {
    500: '#EFECE2'
  },
  pink: {
    600: '#C80064',
    500: '#DE006F'
  },
  purple: {
    600: '#512D9B',
    500: '#5A32AC',
    400: '#8532AC',
    300: '#B332BE',
  }
};

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

const theme = extendTheme({ breakpoints, colors });

export default theme;

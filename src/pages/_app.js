/* eslint-disable react/prop-types */
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource-variable/outfit';
import '@fontsource-variable/spline-sans';

import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

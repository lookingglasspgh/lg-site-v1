import React from 'react';
import { ChakraProvider } from '@chakra-ui/provider';

import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

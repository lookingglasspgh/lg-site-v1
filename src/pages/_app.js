/* eslint-disable react/prop-types */
import React from 'react';
import dynamic from 'next/dynamic';
import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }) {
  const ChakraProvider = dynamic(() => import('@chakra-ui/provider').then((mod) => mod.ChakraProvider));

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

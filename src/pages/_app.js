import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource-variable/outfit';
import '@fontsource-variable/spline-sans';

import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

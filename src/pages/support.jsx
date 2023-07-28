import React from 'react';
import { Box } from '@chakra-ui/react';

import Layout from '@/components/common/Layout';
import RouteMetadata from '@/constants/RouteMetadata';

const { support: SupportMetadata } = RouteMetadata;

const SupportPage = () => (
  <Layout
    pageDescription={SupportMetadata.description}
    title={SupportMetadata.title}
  >
    <Box>Support</Box>
  </Layout>
);

export default SupportPage;

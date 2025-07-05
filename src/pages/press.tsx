import React from 'react';
import { Flex } from '@chakra-ui/react';

import Layout from '@/components/common/Layout';
import InfoSection from '@/components/press/InfoSection';
import NewsSection from '@/components/press/NewsSection';
import RouteMetadata from '@/constants/RouteMetadata';

const PressPage = () => (
  <Layout pageMetadata={RouteMetadata.press}>
    <Flex id="page-container" direction="column">
      <NewsSection />
      <InfoSection />
    </Flex>
  </Layout>
);

export default PressPage;

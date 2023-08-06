import React from 'react';
import { Flex } from '@chakra-ui/react';

import CollaboratorsSection from '@/components/contributors/CollaboratorsSection';
import Layout from '@/components/common/Layout';
import RouteMetadata from '@/constants/RouteMetadata';
import SupportersSection from '@/components/contributors/SupportersSection';

const ContributorsPage = () => (
  <Layout
    title={RouteMetadata.contributors.title}
    pageDescription={RouteMetadata.contributors.description}
  >
    <Flex
      id="page-container"
      direction="column"
    >
      <CollaboratorsSection />
      <SupportersSection />
    </Flex>
  </Layout>
);

export default ContributorsPage;

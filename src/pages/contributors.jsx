import React from 'react';
import { Flex } from '@chakra-ui/react';

import CollaboratorsSection from '@/components/contributors/CollaboratorsSection';
import Layout from '@/components/common/Layout';
import PartnersSection from '@/components/contributors/PartnersSection';

const ContributorsPage = () => (
  <Layout>
    <Flex
      id="page-container"
      direction="column"
    >
      <CollaboratorsSection />
      <PartnersSection />
    </Flex>
  </Layout>
);

export default ContributorsPage;

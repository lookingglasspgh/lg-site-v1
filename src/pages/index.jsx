import React from 'react';
import { Flex } from '@chakra-ui/react';

import ExploreSection from '@/components/home/ExploreSection';
import HeroSection from '@/components/home/HeroSection';
import Layout from '@/components/common/Layout';
import OriginsSections from '@/components/home/OriginsSection/OriginsSection';
import QuoteSection from '@/components/home/QuoteSection/QuoteSection';

const Home = () => (
  <Layout>
    <Flex
      id="page-container"
      direction="column"
    >
      <HeroSection />
      <QuoteSection />
      <ExploreSection />
      <OriginsSections />
    </Flex>
  </Layout>
);

export default Home;

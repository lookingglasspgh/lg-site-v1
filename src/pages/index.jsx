import {
  Box,
  Flex,
  Heading,
  Link,
  Text
} from '@chakra-ui/react';

import Image from 'next/image';

import Layout from '@/components/Layout';

const maxWidth = '75rem';
const ymcaTeenieLink = 'https://collection.carnegieart.org/objects/9898efaf-f3ee-40c0-ad78-b4d61093ab2f';

const Home = () => (
  <Layout>
    <Flex id="page-container" direction="column">
      <Flex
        id="hero-section"
        maxW={maxWidth}
        m="0 auto"
        alignItems="center"
        padding="3rem 0"
      >
        <Heading
          maxWidth="500px"
          as="h1"
          size="3xl"
          mr="4rem"
          mb="3rem"
          sx={{ 'line-height': '1.4' }}
        >
          Remembering & commemorating the richness of Black life in Pittsburgh
        </Heading>
        <Flex direction="column">
          <Box boxShadow="2xl">
            <Image
              src="/work/east-liberty-ymca.png"
              width="600"
              height="600"
              alt="40.461142, -79.926171 - Looking Glass x Teenie Harris"
            />
          </Box>
          <Text mt="1rem" textAlign="center">
            <b>40.461142, -79.926171</b> - Looking Glass x <Link href={ymcaTeenieLink} textDecoration="underline" isExternal>Teenie Harris</Link>
          </Text>
        </Flex>        
      </Flex>

    </Flex>
  </Layout>
);

export default Home;

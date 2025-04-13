import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { ExternalLink } from 'react-feather';

import contributors from '@/content/contributors';

import sectionWidths from '../Contributors.styles';

const SupportersSection = () => (
  <Flex
    id="supporters-section-container"
    direction="column"
    width="100%"
    m="0 auto"
    p={{ base: '0 1rem 4rem 1rem', md: '0 3rem 4rem 3rem', xl: '0 0 4rem 0' }}
    maxWidth={sectionWidths}
  >
    <Heading as="h2" mb="3rem">{contributors.SUPPORTERS}</Heading>
    <SimpleGrid
      gap={{ base: '2rem', lg: '1rem', xl: '2rem' }}
      columns={{ base: '1', lg: '2' }}
    >
      { contributors.partnerDirectory.map((partner) => (
        <Link
          key={partner.name}
          href={partner.website}
          color="ivory.400"
          isExternal
          _hover={{ textDecoration: 'none' }}
        >
          <Flex
            background="ivory.600"
            border="1px solid"
            borderColor="ivory.900"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding="2rem"
            borderRadius="lg"
            boxShadow="2xl"
            gap="1rem"
            _hover={{ background: 'ivory.500' }}
            transition="all 300ms"
          >
            <Flex direction="column">
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                mb="0.25rem"
              >
                {partner.name}
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                textDecoration="none"
              >
                {partner.role}
              </Text>
            </Flex>
            <Box color="black.300">
              <ExternalLink size={20} />
            </Box>
          </Flex>
        </Link>
      ))}
    </SimpleGrid>
  </Flex>
);

export default SupportersSection;

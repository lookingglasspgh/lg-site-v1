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

import commonStyles from '@/styles/commonStyles';
import contributors from '@/content/contributors';

import sectionWidths from '../Contributors.styles';

const { gradients } = commonStyles;

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
            background={gradients.black}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding="2rem"
            borderRadius="lg"
            boxShadow="2xl"
            gap="1rem"
          >
            <Flex direction="column">
              <Text
                variant="secondary"
                fontSize={{ base: 'lg', md: 'xl' }}
                mb="0.25rem"
              >
                {partner.name}
              </Text>
              <Text
                variant="secondary"
                fontSize={{ base: 'md', md: 'lg' }}
                textDecoration="none"
              >
                {partner.role}
              </Text>
            </Flex>
            <Box color="ivory.600">
              <ExternalLink size={20} />
            </Box>
          </Flex>
        </Link>
      ))}
    </SimpleGrid>
  </Flex>
);

export default SupportersSection;

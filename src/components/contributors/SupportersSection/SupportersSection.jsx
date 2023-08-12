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
import SectionContainer from '@/components/common/SectionContainer';

const { gradients } = commonStyles;

const SupportersSection = () => (
  <SectionContainer
    id="supporters-section-container"
    direction="column"
    alignItems="flex-start"
    p={{ base: '0 1rem 6rem 1rem', md: '0 3rem 6rem 3rem', xl: '0 0 6rem 0' }}
    width="100%"
  >
    <Heading as="h2" mb="3rem">{contributors.SUPPORTERS}</Heading>
    <SimpleGrid
      gap={{ base: '2rem', lg: '1rem', xl: '2rem' }}
      columns={{ base: '1', lg: '2' }}
      width="100%"
    >
      { contributors.partnerDirectory.map((partner) => (
        <Link
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
            <Box color="ivory.400">
              <ExternalLink size={24} />
            </Box>
          </Flex>
        </Link>
      ))}
    </SimpleGrid>
  </SectionContainer>
);

export default SupportersSection;

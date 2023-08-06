import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { AlignLeft, ExternalLink } from 'react-feather';

import commonStyles from '@/styles/commonStyles';
import contributors from '@/content/contributors';
import SiteImage from '@/components/common/SiteImage/SiteImage';
import BioModal from '../BioModal/BioModal';

const { commonWidths, gradients } = commonStyles;

const CollaboratorsSection = () => {
  const [bioModalText, setBioModalText] = useState(null);

  const {
    isOpen: isBioModalOpen,
    onOpen: onBioModalOpen,
    onClose: onBioModalClose,
  } = useDisclosure({ id: 'bioModal' });

  const openBio = (bio) => {
    setBioModalText(bio);
    onBioModalOpen();
  };

  return (
    <Flex
      id="collab-section-container"
      direction="column"
      width="100%"
      m="0 auto"
      p="3rem 1rem"
      maxWidth={commonWidths.maxSectionWidth}
    >
      <Heading as="h1" mb="3rem">Collaborators</Heading>
      <SimpleGrid
        gap={{ base: '2rem', lg: '1rem', xl: '2rem' }}
        columns={{ base: '1', md: '2', lg: '3' }}
      >
        { contributors.collabDirectory.map((collaborator) => (
          <Flex
            background={gradients.black}
            direction="column"
            padding="2rem"
            borderRadius="lg"
            boxShadow="2xl"
          >
            <Box
              width={{ base: '150px', lg: '200px', xl: '100%' }}
              height={{ base: '150px', lg: '200px', xl: '100%' }}
              mb="1rem"
            >
              <SiteImage
                src={collaborator.headshotPath}
                alt={collaborator.headshotAlt}
                style={{ borderRadius: '4px' }}
              />
            </Box>
            <Flex direction="column">
              <Flex direction="column" minHeight="110px">
                <Text
                  fontSize="lg"
                  variant="secondary"
                  mb="0.25rem"
                >
                  {collaborator.name}
                </Text>
                <Text
                  variant="secondary"
                  fontSize="lg"
                  mb="1.5rem"
                >
                  {collaborator.role}
                </Text>
              </Flex>
              <Flex
                width="100%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button
                  variant="outline"
                  borderColor="ivory.500"
                  color="ivory.500"
                  _hover={{ backgroundColor: 'black.500' }}
                  onClick={() => openBio(collaborator.bio)}
                >
                  <AlignLeft size={20} />
                  <Text ml="0.5rem" variant="secondary" size="sm">Bio</Text>
                </Button>
                { collaborator.website && (
                <Link
                  color="ivory.500"
                  href={collaborator.website}
                  isExternal
                  ml="1rem"
                  display="flex"
                >
                  <ExternalLink size={24} />
                </Link>
                )}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
      <BioModal
        bio={bioModalText}
        isOpen={isBioModalOpen}
        onClose={onBioModalClose}
      />
    </Flex>
  );
};

export default CollaboratorsSection;

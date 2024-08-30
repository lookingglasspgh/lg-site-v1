import React, { useState } from 'react';
import {
  Flex,
  Heading,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';

import BioModal from '../BioModal/BioModal';
import commonStyles from '@/styles/commonStyles';
import contributors from '@/content/contributors';

import CollaboratorCard from './CollaboratorCard';

const { commonWidths } = commonStyles;

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
      p={{ base: '3rem 1rem', md: '3rem', xl: '3rem 0rem' }}
      maxWidth={commonWidths.maxSectionWidth}
    >
      <Heading as="h1" mb="3rem">{contributors.COLLABORATORS}</Heading>
      <SimpleGrid
        gap={{ base: '2rem', md: '1rem', lg: '2rem' }}
        columns={{ base: '1', md: '2', lg: '3' }}
      >
        { contributors.collabDirectory.map((collaborator) => (
          <CollaboratorCard
            collaborator={collaborator}
            onBioClick={openBio}
          />
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

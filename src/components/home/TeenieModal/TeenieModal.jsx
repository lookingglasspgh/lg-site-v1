import React from 'react';
import {
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ymcaTeenieLink = 'https://collection.carnegieart.org/objects/9898efaf-f3ee-40c0-ad78-b4d61093ab2f';

const description = {
  firstSection:
  <span>
    This collage,
    {' '}
    <b>40.461142, -79.926171</b>
    {' '}
    is named after the coordinates where the
    photographer Teenie Harris captured&nbsp;
    <Link href={ymcaTeenieLink} textDecoration="underline" isExternal>John Grier and Mrs. John E. Brown</Link>
    {' in October 1957. '}
    In September 2021, I (Adrian Jones) took a photo at the same location emulating his perspective.
  </span>,
  secondSection: 'Part of my work has included finding and traveling to the locations where Teenie Harris captured his photos. I\'ve sought to blend Teenie’s work with my own to demonstrate one way of creating windows into the past.',
};

const attribution = 'Note: The Carnegie Museum of Art, Charles “Teenie” Harris Archive owns the copyright to the sourced image.';

const TeenieModal = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    isCentered
    size="lg"
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody
        pt="2rem"
        pb="3rem"
        lineHeight="1.7"
      >
        <Text fontSize={{ base: 'md', md: 'lg' }}>
          {description.firstSection}
        </Text>
        <Text mt="1rem" fontSize={{ base: 'md', md: 'lg' }}>
          {description.secondSection}
        </Text>
        <Text
          mt="2rem"
          fontSize={{ base: 'sm', md: 'md' }}
          fontStyle="italic"
        >
          {attribution}
        </Text>
      </ModalBody>
    </ModalContent>
  </Modal>
);

TeenieModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TeenieModal;

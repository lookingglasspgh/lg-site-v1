import React from 'react';
import {
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const BioModal = ({ bio, isOpen, onClose }) => (
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
      <ModalBody pt="2rem" pb="3rem">
        <Container>
          <Text
            fontSize={{
              base: 'md', md: 'lg', xl: 'lg',
            }}
          >
            {bio}
          </Text>
        </Container>
      </ModalBody>
    </ModalContent>
  </Modal>
);

BioModal.propTypes = {
  bio: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BioModal;

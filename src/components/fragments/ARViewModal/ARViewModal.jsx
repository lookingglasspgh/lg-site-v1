import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import fragments from '@/content/fragments';
import SiteImage from '@/components/common/SiteImage';

const fragmentsQr = 'https://lg-site-assets.s3.us-east-2.amazonaws.com/fragments-qr.webp';

const ARViewModal = ({ isOpen, onClose }) => (
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
      >
        <Text fontSize={{ base: 'md', md: 'lg' }} mb="2rem">
          {fragments.QR_INSTRUCTIONS}
        </Text>
        <SiteImage
          alt={fragments.QR_ALT}
          width="200"
          height="200"
          src={fragmentsQr}
          m="0 auto"
        />
        <Text fontSize={{ base: 'md', md: 'lg' }} m="2rem 0">
          {fragments.CUBE_NOTE}
        </Text>
        <SiteImage
          alt={fragments.CUBE_ALT}
          width="50"
          height="50"
          src="/resources/model-viewer-ar.svg"
          m="0 auto"
        />
      </ModalBody>
    </ModalContent>
  </Modal>
);

ARViewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ARViewModal;

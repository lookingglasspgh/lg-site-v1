import React from 'react';
import {
  AspectRatio,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Iframe from 'react-iframe';
import PropTypes from 'prop-types';

const PreviewVideoModal = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    isCentered
    size={{ base: '2xl', lg: '4xl' }}
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody pt="2rem" pb="3rem">
        <AspectRatio maxWidth="800px" ratio={16 / 9} m="0 auto">
          <Iframe
            title="YouTube video player"
            url="https://www.youtube-nocookie.com/embed/DAoGc6FXNLY"
            frameborder="0"
            width="100%"
            height="100%"
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share"
            allowfullscreen
          />
        </AspectRatio>
      </ModalBody>
    </ModalContent>
  </Modal>
);

PreviewVideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PreviewVideoModal;

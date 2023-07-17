import React from 'react';
import Iframe from 'react-iframe';
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PreviewVideoModal = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    isCentered
    size="4xl"
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody pt="2rem" pb="3rem">
        <Box width="800px" height="450px" m="0 auto">
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
        </Box>
      </ModalBody>
    </ModalContent>
  </Modal>
);

PreviewVideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PreviewVideoModal;

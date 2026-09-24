import React from 'react';
import {
  chakra,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import common from '@/content/common';
import SiteImage from '../SiteImage';

const AppStoreContainer = chakra(Box, {
  baseStyle: {
    width: { base: '190px' },
    height: { base: '64px' },
    position: 'relative',
  },
});

/** TODO - restore playstore image when available */

// const PlayStoreContainer = chakra(Box, {
//   baseStyle: {
//     width: { base: '238px' },
//     height: { base: '70px' },
//     position: 'relative',
//   },
// });

const DownloadModal = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    isCentered
    size="md"
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody pt="2rem" pb="3rem">
        <Flex flexDirection="column" justifyContent="center">
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            mb="2.5rem"
          >
            <Heading as="h3" fontSize="xl" mb="1rem">
              {common.DOWNLOAD_IOS}
            </Heading>
            <Link
              href={common.links.APP_STORE}
              isExternal
              width="fit-content"
            >
              <AppStoreContainer>
                <SiteImage
                  src="/resources/app-store.svg"
                  fill
                  sizes="238px"
                  alt={common.accessibility.APP_STORE_ALT}
                />
              </AppStoreContainer>
            </Link>
          </Flex>
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Heading as="h3" fontSize="xl" mb="1rem">
              {common.DOWNLOAD_ANDROID}
            </Heading>
            <Link alt={common.accessibility.WAITLIST_ALT} href={common.links.WAITLIST} isExternal>
              <Button width="100%">
                {common.ANDROID_INTEREST}
              </Button>
            </Link>
          </Flex>
        </Flex>
      </ModalBody>
    </ModalContent>
  </Modal>
);

DownloadModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DownloadModal;

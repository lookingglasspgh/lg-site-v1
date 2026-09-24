import React, { useState } from 'react';
import {
  Button,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Link,
} from '@chakra-ui/react';
import { Calendar } from 'react-feather';

import CopyButton from '@/components/common/CopyButton';
import events from '@/content/events';

const PartnerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        gap="0.5rem"
        onClick={() => setIsOpen(true)}
      >
        <Calendar size={20} />
        <Text fontWeight="semibold">{events.PARTNER}</Text>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isCentered
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody pt="2rem" pb="3rem">
            <Text fontSize={{ base: 'md', md: 'lg' }} mb="1rem">
              {events.PARTNER_PITCH}
            </Text>
            <Text fontSize={{ base: 'md', md: 'lg' }}>
              {events.PARTNER_OUTREACH}
            </Text>
            <Link
              aria-label={events.FORM_ALT}
              href={events.FORM_LINK}
              isExternal
              _hover={{ textDecoration: 'none' }}
            >
              <Button mt="1.5rem" width="100%">
                Reach Out
              </Button>
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PartnerModal;

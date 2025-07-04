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
              <CopyButton
                copyTooltip={events.CONTACT_TOOLTIP}
                copyValue={events.CONTACT_EMAIL}
              >
                <Button
                  variant="link"
                  fontSize="lg"
                  color="black.500"
                  width="fit-content"
                >
                  {events.CONTACT_EMAIL}
                </Button>
              </CopyButton>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PartnerModal;

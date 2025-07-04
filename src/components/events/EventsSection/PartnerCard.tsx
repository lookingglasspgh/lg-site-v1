import React from 'react';
import { chakra, Flex, Text } from '@chakra-ui/react';
import { Calendar } from 'react-feather';

import CopyButton from '@/components/common/CopyButton';
import events from '@/content/events';
import { colors } from '@/styles/theme';

const Card = chakra(Flex, {
  baseStyle: {
    backgroundColor: 'ivory.600',
    border: '1px solid',
    borderRadius: 'lg',
    borderColor: 'ivory.900',
    boxShadow: 'xl',
    cursor: 'pointer',
    flexDirection: 'column',
    padding: '1.5rem 1.5rem 2.5rem',
    textDecoration: 'none',
    transition: 'all 300ms',
    _hover: {
      backgroundColor: 'ivory.500',
    },
  },
});

const PartnerCard = ({ ...restProps }) => {
  return (
    <CopyButton
      copyTooltip={events.CONTACT_TOOLTIP}
      copyValue={events.CONTACT_EMAIL}
    >
      <Card {...restProps}>
        <Flex alignItems="center" gap="0.5rem" mb="1.5rem">
          <Calendar size={24} style={{ color: colors.pink[700] }} />
          <Text fontSize={{ base: 'lg', xl: 'xl' }} fontWeight="semibold">
            {events.PARTNER}
          </Text>
        </Flex>
        <Text fontSize="md">{events.PARTNER_PITCH}</Text>
      </Card>
    </CopyButton>
  );
};

export default PartnerCard;

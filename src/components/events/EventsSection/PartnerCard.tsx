import React from 'react';
import { chakra, Flex, Link, Text, Button } from '@chakra-ui/react';
import { Calendar } from 'react-feather';

import events from '@/content/events';
import { colors } from '@/styles/theme';

const Card = chakra(Flex, {
  baseStyle: {
    backgroundColor: 'ivory.600',
    border: '1px solid',
    borderRadius: 'lg',
    borderColor: 'ivory.900',
    boxShadow: 'xl',
    flexDirection: 'column',
    padding: '1.5rem 1.5rem 2.5rem',
    textDecoration: 'none',
  },
});

const PartnerCard = ({ ...restProps }) => {
  return (
    <Card {...restProps}>
      <Flex alignItems="center" gap="0.5rem" mb="1.5rem">
        <Calendar size={24} style={{ color: colors.pink[700] }} />
        <Text fontSize={{ base: 'lg', xl: 'xl' }} fontWeight="semibold">
          {events.PARTNER}
        </Text>
      </Flex>
      <Text fontSize="md">{events.PARTNER_PITCH}</Text>
      <Link
        aria-label={events.FORM_ALT}
        href={events.FORM_LINK}
        isExternal
        _hover={{ textDecoration: 'none' }}
      >
        <Button mt="1.5rem" width="100%">Reach Out</Button>
      </Link>
    </Card>
  );
};

export default PartnerCard;

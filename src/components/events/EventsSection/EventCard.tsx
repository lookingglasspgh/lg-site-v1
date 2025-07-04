import React from 'react';
import { ExternalLink } from 'react-feather';
import { AspectRatio, Badge, chakra, Flex, Link, Text } from '@chakra-ui/react';
import SiteImage from '@/components/common/SiteImage';

import events, { Event } from '@/content/events';

const Card = chakra(Flex, {
  baseStyle: {
    backgroundColor: 'ivory.600',
    border: '1px solid',
    borderRadius: 'lg',
    borderColor: 'ivory.900',
    boxShadow: 'xl',
    cursor: 'pointer',
    flexDirection: 'column',
    padding: '1.5rem',
    textDecoration: 'none',
    transition: 'all 300ms',
    _hover: {
      backgroundColor: 'ivory.500',
    },
  },
});

type Props = {
  event: Event;
};

const CHAR_LIMIT = 79;

const trimTitle = (text: string): string =>
  text.length > CHAR_LIMIT ? `${text.substring(0, CHAR_LIMIT - 3)}...` : text;

const EventCard = ({ event }: Props) => (
  <Link
    aria-label={`${events.LINK_ALT} ${event.title}`}
    href={event.url}
    isExternal
    _hover={{ textDecoration: 'none' }}
  >
    <Card>
      <Flex direction="column">
        <AspectRatio
          display={{ base: 'none', md: 'block' }}
          ratio={16 / 9}
          mb="1rem"
          border="1px solid"
          borderRadius="0.35rem"
          borderColor="ivory.900"
        >
          <SiteImage
            alt="Image of event"
            fill={{ base: 'true' }}
            src={event.image}
            sizes="266px, (min-width: 768px) 375px, (min-width: 992px) 407px, (min-width: 1280px) 328px"
            borderRadius="0.25rem"
          />
        </AspectRatio>
        <Badge
          bg="ivory.800"
          borderRadius="0.25rem"
          w="fit-content"
          mb="0.75rem"
        >
          {event.type}
        </Badge>
        <Text
          fontSize={{ base: 'lg', xl: 'xl' }}
          fontWeight="semibold"
          mb={{ base: '1rem', md: '' }}
          minHeight={{
            base: 'unset',
            md: '81px',
            lg: '56px',
            xl: '92px',
          }}
        >
          {trimTitle(event.title)}
        </Text>
        <Flex alignItems="flex-end" justifyContent="space-between">
          <Flex direction="column">
            <Text fontSize={{ base: 'sm', xl: 'md' }} mb=".25rem">
              {event.startDate ? (
                <>
                  {event.startDate} - {event.endDate}
                </>
              ) : (
                <>{event.endDate}</>
              )}
            </Text>
            <Text fontSize={{ base: 'sm', xl: 'md' }} mb=".25rem">
              {event.host}
            </Text>
            <Text fontSize={{ base: 'sm', xl: 'md' }}>{event.location}</Text>
          </Flex>
          <Flex color="black.300">
            <ExternalLink size={20} />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  </Link>
);

export default EventCard;

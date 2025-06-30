import React from "react";
import { ExternalLink } from "react-feather";
import { Badge, chakra, Flex, Link, Text } from "@chakra-ui/react";

import events, { Event } from "@/content/events";

const Card = chakra(Flex, {
  baseStyle: {
    backgroundColor: "ivory.600",
    border: "1px solid",
    borderRadius: "lg",
    borderColor: "ivory.900",
    boxShadow: "xl",
    cursor: "pointer",
    flexDirection: "column",
    padding: "1.5rem",
    textDecoration: "none",
    transition: "all 300ms",
    _hover: {
      backgroundColor: "ivory.500",
    },
  },
});

type Props = {
  event: Event;
};

const EventCard = ({ event }: Props) => (
  <Link
    aria-label={`${events.LINK_ALT} ${event.title}`}
    href={event.url}
    isExternal
    _hover={{ textDecoration: "none" }}
  >
    <Card>
      <Flex direction="column">
        {event.type && (
          <Badge
            bg="ivory.800"
            borderRadius="0.25rem"
            w="fit-content"
            mb="0.75rem"
          >
            {event.type}
          </Badge>
        )}
        <Text
          fontSize={{ base: "lg", xl: "xl" }}
          fontWeight="semibold"
          minHeight={{
            base: "unset",
            md: "81px",
            lg: "108px",
            xl: "90px",
          }}
          mb={{ base: "1rem", md: "" }}
        >
          {event.title}
        </Text>
        <Flex alignItems="flex-end" justifyContent="space-between">
          <Flex direction="column">
            <Text fontSize={{ base: "sm", xl: "md" }} mb=".25rem">
              {event.startDate ? (
                <>
                  {event.startDate} - {event.endDate}
                </>
              ) : (
                <>{event.endDate}</>
              )}
            </Text>
            <Text fontSize={{ base: "sm", xl: "md" }} mb=".25rem">
              {event?.host}
            </Text>
            <Text fontSize={{ base: "sm", xl: "md" }}>{event.location}</Text>
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

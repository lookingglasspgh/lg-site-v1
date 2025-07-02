import React, { useMemo } from "react";
import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";

import commonStyles from "@/styles/commonStyles";
import events from "@/content/events";

import EventCard from "./EventCard";

const { commonWidths } = commonStyles;

const responsiveGridColumns = [1, 1, 2, 2, 3];

const EventsSection = () => {
  const { eventsList } = events;

  const upcomingEvents = useMemo(
    () =>
      eventsList.filter((event) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const endDate = new Date(event.endDate);
        if (today <= endDate) return true;
        return false;
      }),
    [eventsList],
  );

  const pastEvents = useMemo(
    () =>
      eventsList.filter((event) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const endDate = new Date(event.endDate);
        if (today >= endDate) return true;
        return false;
      }),
    [eventsList],
  );

  return (
    <Flex
      id="section-container"
      direction="column"
      width="100%"
      m="0 auto"
      p={{ base: "3rem 1rem", md: "3rem", xl: "3rem 0rem" }}
      maxWidth={commonWidths.maxSectionWidth}
    >
      <Heading as="h1" mb="3rem">
        {events.HEADING}
      </Heading>
      <SimpleGrid
        gap={{
          base: "2rem",
          md: "1.5rem",
          lg: "2rem",
        }}
        columns={responsiveGridColumns}
        mb="3rem"
      >
        {upcomingEvents.length > 0 ? (
          <>
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </>
        ) : (
          <div>No Events</div>
        )}
      </SimpleGrid>
      <Heading as="h2" mb="3rem">
        {events.HEADING_PRIOR}
      </Heading>
      <SimpleGrid
        gap={{
          base: "2rem",
          md: "1.5rem",
          lg: "2rem",
        }}
        columns={responsiveGridColumns}
      >
        {pastEvents.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default EventsSection;

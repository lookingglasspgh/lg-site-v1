import React from "react";
import { Flex } from "@chakra-ui/react";

import Layout from "@/components/common/Layout";
import EventsSection from "@/components/events/EventsSection/EventsSection";
import RouteMetadata from "@/constants/RouteMetadata";

const EventsPage = () => (
  <Layout pageMetadata={RouteMetadata.events}>
    <Flex id="page-container" direction="column">
      <EventsSection />
    </Flex>
  </Layout>
);

export default EventsPage;

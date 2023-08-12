import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';

import commonStyles from '@/styles/commonStyles';
import common from '@/content/common';
import home from '@/content/home';
import holcMap from '@/public/artifacts/holc.webp';
import SectionContainer from '@/components/common/SectionContainer';
import SiteImage from '@/components/common/SiteImage';

const { gradients } = commonStyles;
const { origins } = home;

const holcLink = 'https://data.wprdc.org/dataset/redlining-maps-from-the-home-owners-loan-corporation';

const OriginsSection = () => {
  const [showReadMore, setShowReadMore] = useState(true);
  const toggleReadMore = () => setShowReadMore(!showReadMore);

  return (
    <Flex
      id="origins-section"
      background={gradients.black}
      width="100%"
      boxShadow="2xl"
    >
      <SectionContainer
        id="content-container"
        padding="4rem 1rem"
      >
        <Container>
          <Flex
            id="text-area"
            direction="column"
            mb="2rem"
          >
            <Heading
              as="h3"
              variant="secondary"
              maxWidth={{ base: '300px', sm: '100%' }}
              mb="0.5rem"
            >
              {origins.HEADLINE}
            </Heading>
            <Text variant="secondary" fontSize="xl">
              {origins.AUTHOR}
            </Text>
          </Flex>
          <Flex
            id="headline"
            direction="column"
            mb="2rem"
            width="100%"
          >
            <Box
              maxWidth={{ base: '325px', md: '464px', lg: '530px' }}
              m="0 auto 0.5rem auto"
            >
              <SiteImage
                src={holcMap}
                style={{ borderRadius: '4px' }}
                sizes="325px, (min-width: 768px) 464px, (min-width: 992px) 530px"
                alt={origins.IMAGE_SOURCE}
              />
            </Box>
            <Link
              fontSize="sm"
              color="ivory.400"
              isExternal
              href={holcLink}
              textAlign="center"
              textDecoration="underline"
            >
              {origins.IMAGE_SOURCE}
            </Link>
          </Flex>
          <Text
            id="origins-body"
            variant="secondary"
            fontSize={{ base: 'md', md: 'xl' }}
            m="0 auto"
          >
            When I moved to Pittsburgh from Harrisburg, PA in 2017, my new neighbors made
            it a point to inform me of the shifting landscape between the city’s three rivers.
            Time and again, revitalization projects and sites of “innovation” had
            treated Black residents with little regard.
            <br />
            <br />
            Neighborhoods that residents had known
            for decades were being forcefully transformed in the interest of maximizing profits
            for land owners. As I spoke with more people, read more accounts and walked through
            more spaces, I learned that the marks of gentrification are especially vicious and
            repugnant in East Liberty.
            { showReadMore && (
              <span>..</span>
            )}
            <br />
            <br />
          </Text>
          { showReadMore && (
            <Button onClick={toggleReadMore} width="100%">
              {common.READ_MORE}
            </Button>
          )}
          { !showReadMore && (
            <Text
              id="origins-body-more"
              variant="secondary"
              fontSize={{ base: 'md', md: 'xl' }}
              m="0 auto"
            >
              Gentrification not only displaces vulnerable people but it also furthers the erasure
              of precious history and culture. In this country, where being Black requires
              perpetually wrestling with a centuries-long disinformation campaign, knowledge of
              the past and sites of memory possess tremendous offensive and defensive value.
              <br />
              <br />
              My awareness of this multilayered struggle inspired a vision, I imagined a camera
              that was able to reveal the history buried within a gentrified neighborhood. From
              that image grew plans for an app-based archive of Black life in Pittsburgh equipped
              with an augmented reality lens.
              <br />
              <br />
              It was important to me that Looking Glass begin
              with a focus on East Liberty, because the intense efforts to displace and disrupt
              long-time residents have yet to cease.
              <br />
              <br />
              The enduring risk to homes and sites of memory calls for engaging in the work of
              recording and gathering stories. I believe there is power, healing and guidance to
              be found when we connect to the past.
              <br />
              <br />
              I hope Looking Glass as an archive that also
              maps stories to their points of origin will be a resource that facilitates this
              connection and reaffirms that the story of Black Pittsburgh cannot be rewritten.
            </Text>
          )}
        </Container>
      </SectionContainer>
    </Flex>
  );
};

export default OriginsSection;

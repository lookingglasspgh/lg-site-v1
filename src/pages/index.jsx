import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Mail, PlayCircle } from 'react-feather';

import common from '@/content/common';
import conceptArt from '@/public/work/concept-art.png';
import eastLibertyYmca from '@/public/work/east-liberty-ymca.png';
import { gradients } from '@/styles/theme';
import home from '@/content/home';
import Layout from '@/components/Layout';
import SiteImage from '@/components/SiteImage';
import PreviewVideoModal from '@/components/PreviewVideoModal';

const maxWidth = '75rem';
const victoriaLink = 'https://www.instagram.com/victoriadoesartoverhere/';
const ymcaTeenieLink = 'https://collection.carnegieart.org/objects/9898efaf-f3ee-40c0-ad78-b4d61093ab2f';

const Home = () => {
  const {
    isOpen: isPreviewModalOpen,
    onOpen: onPreviewModalOpen,
    onClose: onPreviewModalClose,
  } = useDisclosure({ id: 'previewModal' });

  const openSubscriptionPage = () => window.open('https://lookingglasspgh.substack.com/', '_blank');

  return (
    <Layout>
      <Flex
        id="page-container"
        direction="column"
      >
        <Flex
          id="hero-section"
          alignItems="center"
          m="0 auto"
          p="3rem 0"
          maxWidth={maxWidth}
        >
          <Flex id="headline-container" direction="column" mr="4rem">
            <Heading
              maxWidth="430px"
              as="h1"
              size="3xl"
              mb="1.5rem"
              sx={{ 'line-height': '1.2' }}
            >
              {home.HEADLINE}
            </Heading>
            <Text
              maxWidth="470px"
              fontSize="xl"
              mb="2.5rem"
            >
              {home.ABOUT_CAPTION}
            </Text>
            <Flex maxWidth="470px">
              <Button color="ivory.500" onClick={openSubscriptionPage}>
                <Mail size={20} />
                <Text ml="0.5rem" variant="secondary">
                  {common.SUBSCRIBE}
                </Text>
              </Button>
              <Button variant="ghost" ml="0.5rem" onClick={onPreviewModalOpen}>
                <PlayCircle size={20} />
                <Text ml="0.5rem">{common.PLAY_PREVIEW}</Text>
              </Button>
            </Flex>
          </Flex>
          <Flex id="collage-container-1" direction="column">
            <Box id="collage-wrapper" boxShadow="2xl">
              <SiteImage
                src={eastLibertyYmca}
                width="600"
                height="600"
                priority
                alt="40.461142, -79.926171 - Looking Glass x Teenie Harris"
                style={{ borderRadius: '4px' }}
              />
            </Box>
            <Text id="collage-caption" mt="1rem" textAlign="center">
              <b>40.461142, -79.926171</b>
            &nbsp;- Looking Glass x&nbsp;
              <Link href={ymcaTeenieLink} textDecoration="underline" isExternal>Teenie Harris</Link>
            </Text>
          </Flex>
        </Flex>
        <Flex
          id="quote-section"
          background={gradients.black}
          alignItems="center"
          justifyContent="center"
          boxShadow="2xl"
          width="100%"
        >
          <Flex id="concept-art-container" direction="column" mr="4rem">
            <SiteImage
              width={500}
              height={400}
              alt="Looking Glass Sculpture Concept Art by artist Victoria Elliott"
              src={conceptArt}
            />
          </Flex>
          <Flex
            id="quote-container"
            direction="column"
            alignItems="center"
          >
            <Container>
              <Text
                fontSize="xl"
                variant="secondary"
              >
                {home.HOOKS_QUOTE}
              </Text>
              <Text
                fontSize="xl"
                variant="secondary"
                mt="0.5rem"
              >
                {home.HOOKS_ATTRIBUTION}
              </Text>
              <Text
                id="concept-art-caption"
                position="relative"
                top="48px"
                fontSize="sm"
                color="black.100"
              >
                Concept Art by&nbsp;
                <Link href={victoriaLink} textDecoration="underline" isExternal>Victoria Elliott</Link>
              </Text>
            </Container>
          </Flex>
        </Flex>
        <PreviewVideoModal
          isOpen={isPreviewModalOpen}
          onClose={onPreviewModalClose}
        />
      </Flex>
    </Layout>
  );
};

export default Home;

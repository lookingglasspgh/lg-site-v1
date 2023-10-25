/* eslint-disable react/no-danger */
import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Spinner,
  Text,
} from '@chakra-ui/react';

import commonStyles from '@/styles/commonStyles';
import fragments from '@/content/fragments';
import Layout from '@/components/common/Layout';
import RouteMetadata from '@/constants/RouteMetadata';

const { commonWidths, gradients } = commonStyles;

const modelViewerStyles = {
  width: '100%',
  height: '100%',
  gridColumn: '1',
  gridRow: '1',
  opacity: '0.2',
};

const FragmentsPage = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const modelViewerRef = useRef(null);
  const onModelLoad = () => {
    setShowSpinner(false);
    modelViewerRef.current.style.setProperty('opacity', '1');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => (document.body.removeChild(script));
  }, []);

  useEffect(() => {
    modelViewerRef?.current?.addEventListener('load', onModelLoad);

    return () => modelViewerRef?.current?.removeEventListener('load', onModelLoad);
  }, []);

  return (
    <Layout pageMetadata={RouteMetadata.fragments}>
      <Flex
        id="fragments-page-container"
        direction="column"
        width="100%"
        m="0 auto"
        p={{ base: '3rem 1rem 4rem 1rem', md: '3rem 3rem 10rem 3rem', xl: '3rem 0 10rem 0' }}
        maxWidth={commonWidths.maxSectionWidth}
      >
        <Heading as="h1" mb="3rem">{fragments.TITLE}</Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          <Container
            p="0"
            m={{ base: '0 0 4rem 0', md: '0 4rem 0 0' }}
            maxWidth="500px"
          >
            <Text fontSize="lg">{fragments.DESCRIPTION}</Text>
          </Container>
          <Box
            maxWidth="700px"
            width="100%"
            height="500px"
            borderRadius="lg"
            background={gradients.black}
            border="1px solid #020314"
            boxShadow="2xl"
            display="grid"
          >
            { showSpinner && (
              <Spinner
                color="pink.500"
                width="100px"
                height="100px"
                gridColumn="1"
                gridRow="1"
                zIndex="20"
                margin="auto"
              />
            )}
            <model-viewer
              ref={modelViewerRef}
              alt={fragments.MODEL_ALT}
              src="./models/east-liberty-fragments.glb"
              poster="./models/fragments-poster.webp"
              ar
              shadow-intensity="1"
              camera-controls
              camera-orbit="125deg 90deg 0"
              touch-action="pan-y"
              field-of-view="75deg"
              style={modelViewerStyles}
            />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default FragmentsPage;

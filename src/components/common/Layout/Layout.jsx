import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Footer from '@/components/common/Footer';
import NavBar from '@/components/common/NavBar';
import PageHead from '@/components/common/PageHead';

const Layout = ({
  children,
  pageMetadata,
}) => (
  <>
    <PageHead pageMetadata={pageMetadata} />
    <Flex
      height="100vh"
      width="100%"
      flexDirection="column"
      backgroundRepeat="repeat"
    >
      <NavBar />
      <Box backgroundImage="resources/concrete-wall.png">
        {children}
      </Box>
      <Footer />
    </Flex>
  </>
);

Layout.propTypes = {
  children: PropTypes.shape({}).isRequired,
  pageMetadata: PropTypes.shape({
    canonicalUrl: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Layout;

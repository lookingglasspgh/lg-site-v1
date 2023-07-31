import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import PageHead from '../PageHead';
import NavBar from '../NavBar';

const Layout = ({ children, pageDescription, title }) => (
  <>
    <PageHead
      pageDescription={pageDescription}
      title={title}
    />
    <Flex
      height="100vh"
      width="100%"
      flexDirection="column"
      backgroundRepeat="repeat"
    >
      <NavBar />
      <Box backgroundImage="resources/concrete-wall.png" pb="5rem">
        {children}
      </Box>
    </Flex>
  </>
);

Layout.propTypes = {
  children: PropTypes.shape({}).isRequired,
  pageDescription: PropTypes.string,
  title: PropTypes.string,
};

Layout.defaultProps = {
  pageDescription: 'Remembering & commemorating Black life in Pittsburgh',
  title: 'Looking Glass',
};

export default Layout;

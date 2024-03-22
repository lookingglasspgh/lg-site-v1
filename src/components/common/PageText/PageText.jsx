import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

const PageText = ({ children, ...restProps }) => (
  <Text
    fontSize={{ base: 'md', md: 'xl' }}
    {...restProps}
  >
    {children}
  </Text>
);

PageText.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default PageText;

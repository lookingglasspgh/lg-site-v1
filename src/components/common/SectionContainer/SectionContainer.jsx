import React from 'react';
import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import commonStyles from '@/styles/commonStyles';

const { commonWidths } = commonStyles;

const SectionContainer = ({ children, ...restProps }) => (
  <Flex
    p="3rem 1rem"
    m="0 auto"
    maxWidth={commonWidths.maxSectionWidth}
    alignItems="center"
    {...restProps}
  >
    {children}
  </Flex>
);

SectionContainer.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default SectionContainer;

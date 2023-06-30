import React from 'react';
import { ChevronDown } from 'react-feather';
import {
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { colors } from '@/styles/theme';

const StyledChevron = styled(ChevronDown)`
  margin-top: 4px;
  margin-left: 2px;
  color: ${colors.black[500]};
`;

const LinkMenu = ({ listRoutes, title }) => (
  <Popover key={title}>
    <PopoverTrigger>
      <Text
        fontSize="lg"
        mr="1.5rem"
        display="flex"
        transition="all 0.2s"
        _hover={{ color: 'purple.500', cursor: 'pointer' }}
      >
        {title}
        <StyledChevron size={20} />
      </Text>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverBody display="flex" flexDirection="column">
        { listRoutes.map((route) => (
          <Link
            as={NextLink}
            key={route.title}
            color="black.500"
            href={route.path}
            fontSize="lg"
            mr="1.5rem"
            transition="all 0.2s"
            _hover={{ color: 'purple.500' }}
          >
            {route.title}
          </Link>
        ))}
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

LinkMenu.propTypes = {
  listRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default LinkMenu;
